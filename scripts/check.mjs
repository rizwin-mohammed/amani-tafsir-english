// Accuracy checks run before every publish.
// 1. Every surah's verse table matches the verified Quran text (verse numbers present, none missing).
// 2. Every Arabic quotation in the commentary is looked up in the verified Quran text.
//    Quotations that are not found are listed for the reviewer: they may be hadith or duas
//    (fine), or a mistyped Quran quotation (must be fixed).
// Writes check-report.md and exits with an error if a hard check fails.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const quran = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/quran-uthmani.json'), 'utf8'));

// Strip diacritics and spelling differences between Uthmani and ordinary script, so only the letters are compared.
const norm = (s) => s
  // Uthmani spellings written out as in ordinary script: alif maqsura or waw carrying a dagger alif
  // (يلقىٰها, الزكوٰة) read as a plain alif; small yeh (النبيـۧن) is a full yeh; hamza on a tatweel (شيـٔا) is a hamza.
  .replace(/[\u0649\u0648]\u0670/g, '')
  .replace(/\u06E7/g, '\u064A')
  .replace(/\u0640\u0654/g, '\u0621')
  .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED\u08D3-\u08FF\u0640]/g, '')
  .replace(/آ/g, 'ء')
  .replace(/[ٱأإا]/g, '')
  .replace(/[ىي]/g, 'ي')
  .replace(/ة/g, 'ه')
  .replace(/[ؤئ]/g, 'ء')
  .replace(/[^ء-ي]/g, '');

const verseIndex = [];
for (const ch of quran) ch.verses.forEach((v, i) => verseIndex.push({ s: ch.n, v: i + 1, t: norm(v) }));

function lev(a, b) {
  const d = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let prev = d[0];
    d[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = d[j];
      d[j] = Math.min(d[j] + 1, d[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return d[b.length];
}
const grams = (t) => { const g = new Set(); for (let i = 0; i < t.length - 2; i++) g.add(t.slice(i, i + 3)); return g; };
for (const x of verseIndex) x.g = grams(x.t);

// Looks up one quotation (or one verse-length piece of it). Returns
// { ref, score } where score is 1 for an exact letter match and lower for a near match.
function lookup(t) {
  const exact = verseIndex.find((x) => x.t.includes(t));
  if (exact) return { ref: `${exact.s}:${exact.v}`, score: 1 };
  const qg = grams(t);
  let best = null;
  for (const x of verseIndex) {
    let shared = 0;
    for (const g of qg) if (x.g.has(g)) shared++;
    if (shared / qg.size < 0.5) continue;
    const v = x.t;
    const w = Math.min(v.length, t.length);
    for (let i = 0; i + w <= v.length; i += 1) {
      const score = 1 - lev(t, v.slice(i, i + w)) / Math.max(t.length, w);
      if (!best || score > best.score) best = { ref: `${x.s}:${x.v}`, score };
      if (score === 1) break;
    }
  }
  return best;
}

// A quotation can hold several verses separated by verse markers like ﴿١٩٩﴾.
function findQuote(q) {
  const pieces = q.split(/﴿[^﴾]*﴾/).map(norm).filter((t) => t.length >= 6);
  if (!pieces.length) return null;
  const hits = pieces.map(lookup);
  if (hits.some((h) => !h || h.score < 0.8)) return null;
  const score = Math.min(...hits.map((h) => h.score));
  return { refs: hits.map((h) => h.ref).join(', '), score };
}

const errors = [];
const report = ['# Accuracy check report', ''];
const dirs = fs.readdirSync(path.join(ROOT, 'content/en')).filter((d) => /^\d{3}-/.test(d)).sort();

for (const dir of dirs) {
  const base = path.join(ROOT, 'content/en', dir);
  const meta = JSON.parse(fs.readFileSync(path.join(base, 'meta.json'), 'utf8'));
  const ch = quran[meta.surah - 1];
  report.push(`## ${meta.surah}. ${meta.title}`, '');

  const verses = JSON.parse(fs.readFileSync(path.join(base, 'verses.json'), 'utf8')).verses;
  const nums = verses.map((v) => v.n);
  const bad = nums.filter((n) => n < 1 || n > ch.verses.length);
  if (bad.length) errors.push(`${dir}: verse numbers out of range: ${bad.join(', ')}`);
  const missing = [];
  for (let i = 1; i <= ch.verses.length; i++) if (!nums.includes(i)) missing.push(i);
  if (meta.status === 'approved' && missing.length) errors.push(`${dir}: approved but verses missing from the table: ${missing.join(', ')}`);
  report.push(`- Verse table: ${nums.length} of ${ch.verses.length} verses${missing.length ? ` (not yet: ${missing.join(', ')})` : ''}.`);

  const prose = ['intro.md', 'commentary.md'].filter((f) => fs.existsSync(path.join(base, f))).map((f) => fs.readFileSync(path.join(base, f), 'utf8')).join('\n');
  const quotes = [...new Set(prose.match(/[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF][\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF\s]*/g) || [])]
    .map((q) => q.trim())
    .filter((q) => q.split(/\s+/).length >= 3);
  const exact = [];
  const near = [];
  const notFound = [];
  for (const q of quotes) {
    const hit = findQuote(q);
    if (!hit) notFound.push(q);
    else if (hit.score === 1) exact.push(hit.refs);
    else near.push(`${q} (closest: ${hit.refs}, ${Math.round(hit.score * 100)}% same letters)`);
  }
  report.push(`- Arabic quotations of 3+ words: ${quotes.length}. Exactly matching the Quran text: ${exact.length}. Close but not exact: ${near.length}. Not from the Quran (or badly mistyped): ${notFound.length}.`, '');
  if (near.length) {
    report.push('**Close but not exact.** Usually only a spelling difference between Uthmani and ordinary script; the reviewer should compare each with the verse named:', '');
    near.forEach((q) => report.push(`- ${q}`));
    report.push('');
  }
  if (notFound.length) {
    report.push('**Not found in the Quran text.** Each should be a hadith, dua or saying. If any is meant to be a Quran verse, it is mistyped:', '');
    notFound.forEach((q) => report.push(`- ${q}`));
    report.push('');
  }
}

if (errors.length) report.push('## Errors', '', ...errors.map((e) => `- ${e}`), '');
fs.writeFileSync(path.join(ROOT, 'check-report.md'), report.join('\n'));
console.log(report.join('\n'));
if (errors.length) { console.error(`\n${errors.length} error(s).`); process.exit(1); }
