// Builds the static site into dist/ from content/ and data/.
// Usage: node scripts/build.mjs   (BASE=/sub/path to serve from a sub-folder)
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT = path.join(ROOT, 'dist');
const BASE = (process.env.BASE ?? '/amani-tafsir-english').replace(/\/$/, '');
const REPO = 'rizwin-mohammed/amani-tafsir-english';
const SITE_NAME = 'Amani Tafsir in English';
// While the site is a preview, keep it out of search engines.
const PREVIEW = process.env.PREVIEW !== '0';

const quran = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/quran-uthmani.json'), 'utf8'));

const STATUS = {
  draft: { label: 'Draft, not yet reviewed', cls: 'draft' },
  checked: { label: 'Checked, waiting for final review', cls: 'checked' },
  approved: { label: 'Reviewed and approved', cls: 'approved' },
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const read = (p) => fs.readFileSync(p, 'utf8');
const readJson = (p) => JSON.parse(read(p));
const pad3 = (n) => String(n).padStart(3, '0');

function write(rel, html) {
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const AR = '\\u0600-\\u06FF\\u0750-\\u077F\\u08A0-\\u08FF\\uFB50-\\uFDFF\\uFE70-\\uFEFF';
const ML = '\\u0D00-\\u0D7F';
const arRun = new RegExp(`[${AR}][${AR}\\s()\\[\\]،؛.:]*[${AR})]|[${AR}]`, 'g');
const mlRun = new RegExp(`[${ML}][${ML}\\u200C\\u200D\\s()\\-–,.;:'"!?]*[${ML}\\u200C\\u200D)]|[${ML}]`, 'g');

// Mark Arabic and Malayalam runs in text (not inside tags) so they get the right font and direction.
function markScripts(html) {
  return html.replace(/>([^<]+)</g, (m, text) => {
    const t = text
      .replace(arRun, (r) => `<span lang="ar" dir="rtl">${r}</span>`)
      .replace(mlRun, (r) => `<span lang="ml">${r}</span>`);
    return `>${t}<`;
  });
}

function slug(s) {
  return s.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'section';
}

// Markdown to HTML, with anchors on headings and styling for translator's notes and page markers.
function md(src, used = new Set()) {
  let html = marked.parse(src);
  html = html.replace(/<h([23])>(.*?)<\/h\1>/g, (m, lvl, inner) => {
    let id = slug(inner);
    while (used.has(id)) id += '-x';
    used.add(id);
    return `<h${lvl} id="${id}" data-anchor="${id}">${inner}</h${lvl}>`;
  });
  html = html.replace(/<em>\[TN:(.*?)\]<\/em>/gs, '<span class="tn" title="Translator\'s note">[TN:$1]</span>');
  html = html.replace(/<em>\[DOUBT:(.*?)\]<\/em>/gs, '<span class="doubt" title="Not yet settled: waiting for the reviewer">[DOUBT:$1]</span>');
  html = html.replace(/<em>\[p\. ?(\d+)\]<\/em>/g, '<span class="page" title="Page in the Malayalam book">p. $1</span>');
  return markScripts(html);
}

function layout({ title, body, rel = '', description = '' }) {
  const canonical = `${BASE}/${rel}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description || 'English translation of Muhammad Amani Moulavi\'s Malayalam tafsir of the Holy Quran.')}">
${PREVIEW ? '<meta name="robots" content="noindex">' : ''}
<script>try{document.documentElement.dataset.theme=localStorage.getItem('amani-tafsir:theme')||'light'}catch(e){document.documentElement.dataset.theme='light'}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Inter:wght@400;600&family=Noto+Naskh+Arabic:wght@400;600&family=Noto+Sans+Malayalam:wght@400;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${BASE}/assets/style.css">
<link rel="manifest" href="${BASE}/manifest.webmanifest">
<meta name="theme-color" content="#1f5e63">
</head>
<body data-base="${BASE}" data-page="${esc(rel)}" data-repo="${REPO}">
<header class="top">
  <a class="brand" href="${BASE}/en/">${SITE_NAME}</a>
  <nav>
    <a href="${BASE}/en/">Surahs</a>
    <a href="${BASE}/en/search/">Search</a>
    <a href="${BASE}/en/bookmarks/">My bookmarks</a>
    <a href="${BASE}/en/about/">About</a>
    <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Switch between light and dark">Dark</button>
  </nav>
</header>
${PREVIEW ? '<div class="preview-bar">Preview. This site is still being built and reviewed; please do not share it yet.</div>' : ''}
<main>
${body}
</main>
<footer>
  <p>Translated from <em>Vishuddha Quran Vivaranam</em> by Muhammad Amani Moulavi.
  <a href="https://github.com/${REPO}/issues/new?title=${encodeURIComponent('Mistake on ' + title)}&body=${encodeURIComponent('Page: ' + canonical + '\n\nWhat is wrong:\n\nWhat it should say:\n')}">Report a mistake</a></p>
</footer>
<script src="${BASE}/assets/app.js" defer></script>
<script src="${BASE}/assets/review.js" defer></script>
</body>
</html>
`;
}

// "Version 2, released 2026-11-01", or a note that a released part is being corrected.
function versionNote(m) {
  if (!m.version) return '';
  return m.released ? ` · Version ${Number(m.version)}${m.released_on ? ', released ' + esc(m.released_on) : ''}` : ` · Being corrected after version ${Number(m.version)}`;
}

function statusBadge(meta) {
  const s = STATUS[meta.status] || STATUS.draft;
  const when = meta.reviewed_on ? ` on ${esc(meta.reviewed_on)}` : '';
  const by = meta.reviewed_by ? ` by ${esc(meta.reviewed_by)}` : '';
  return `<div class="status ${s.cls}"><strong>${s.label}</strong>${by}${when}.${versionNote(meta)}${meta.status_note ? ' ' + esc(meta.status_note) : ''}</div>`;
}

function verseTable(n, verses) {
  const ch = quran[n - 1];
  const rows = verses.map((v) => {
    const ar = ch.verses[v.n - 1];
    if (!ar) throw new Error(`Surah ${n} has no verse ${v.n}`);
    const id = `v${n}-${v.n}`;
    return `<tr id="${id}" data-anchor="${id}">
<td class="num">${v.n}</td>
<td class="ar quran" lang="ar" dir="rtl">${esc(ar)}</td>
<td class="ml" lang="ml">${esc(v.ml)}</td>
<td class="en">${markScripts('>' + esc(v.en) + '<').slice(1, -1)}</td>
</tr>`;
  });
  return `<div class="table-wrap"><table class="verses">
<thead><tr><th>#</th><th>Arabic</th><th class="ml">Malayalam (Amani Moulavi)</th><th>English</th></tr></thead>
<tbody>${rows.join('\n')}</tbody></table></div>`;
}

function wordTable(words) {
  const rows = words.map((w) => `<tr><td class="num">${w.verse}</td><td class="ar" lang="ar" dir="rtl">${esc(w.ar)}</td><td class="ml" lang="ml">${esc(w.ml)}</td><td class="en">${markScripts('>' + esc(w.en) + '<').slice(1, -1)}</td></tr>`);
  return `<div class="table-wrap"><table class="words">
<thead><tr><th>Verse</th><th>Arabic</th><th class="ml">Malayalam</th><th>English</th></tr></thead>
<tbody>${rows.join('\n')}</tbody></table></div>`;
}

const plain = (html) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

// A long surah is translated in parts, one folder per verse group (or run of groups):
// parts/NN/{part.json, verses.json, words.json, commentary.md}. A short surah may instead keep
// verses.json, words.json and commentary.md directly in its folder (as Al-Fatiha does).
function readParts(base) {
  const dir = path.join(base, 'parts');
  if (!fs.existsSync(dir)) return null;
  return fs.readdirSync(dir).filter((d) => /^\d+$/.test(d)).sort((a, b) => a - b).map((d) => {
    const p = path.join(dir, d);
    const opt = (f) => (fs.existsSync(path.join(p, f)) ? path.join(p, f) : null);
    return {
      id: d,
      meta: readJson(path.join(p, 'part.json')),
      verses: readJson(path.join(p, 'verses.json')),
      words: opt('words.json') ? readJson(opt('words.json')) : null,
      commentary: opt('commentary.md') ? read(opt('commentary.md')) : '',
    };
  });
}

// The surah's status is its least-reviewed part.
function surahStatus(meta, parts) {
  if (!parts || !parts.length) return meta.status;
  const order = ['draft', 'checked', 'approved'];
  return parts.map((p) => p.meta.status).sort((a, b) => order.indexOf(a) - order.indexOf(b))[0];
}

function buildSurah(dir, searchIndex) {
  const base = path.join(ROOT, 'content/en', dir);
  const meta = readJson(path.join(base, 'meta.json'));
  const n = meta.surah;
  const ch = quran[n - 1];
  const used = new Set();
  const intro = fs.existsSync(path.join(base, 'intro.md')) ? md(read(path.join(base, 'intro.md')), used) : '';
  const parts = readParts(base);
  meta.status = surahStatus(meta, parts);
  let main = '';
  let tocHead = '';
  let versesDone = [];
  const sections = [];

  if (parts) {
    for (const part of parts) {
      const id = `part-${part.id}`;
      const range = part.meta.verses;
      const commentary = md(part.commentary, used);
      const s = STATUS[part.meta.status] || STATUS.draft;
      sections.push(`<li class="l2"><a href="#${id}">Verses ${esc(range)}</a></li>`);
      main += `<section class="part" id="${id}" data-part="${esc(part.id)}" data-verses="${esc(range)}" data-status="${esc(part.meta.status)}"${part.meta.released ? ' data-released="true"' : ''} data-version="${Number(part.meta.version || 0)}">
<h2 data-anchor="${id}">Verses ${esc(range)}</h2>
<p class="part-meta"><span class="badge ${s.cls}">${s.label}</span>${versionNote(part.meta)} · Book pages ${esc(part.meta.pages)}</p>
${verseTable(n, part.verses.verses)}
${part.words ? `<h3 class="words-h">Meanings of the individual words</h3>${wordTable(part.words.words)}` : ''}
${commentary}
</section>\n`;
      versesDone.push(...part.verses.verses);
      sectionIndex(commentary, `Verses ${range}`, id);
    }
  } else {
    const commentary = fs.existsSync(path.join(base, 'commentary.md')) ? md(read(path.join(base, 'commentary.md')), used) : '';
    const verses = readJson(path.join(base, 'verses.json'));
    const words = fs.existsSync(path.join(base, 'words.json')) ? readJson(path.join(base, 'words.json')) : null;
    tocHead = `<li class="l2"><a href="#verses">The text and its translation</a></li>
${words ? '<li class="l2"><a href="#words">Meanings of the individual words</a></li>' : ''}`;
    main = `<h2 id="verses" data-anchor="verses">The text and its translation</h2>
${verseTable(n, verses.verses)}
${verses.source_pages ? `<p class="note">Book pages ${esc(verses.source_pages)}.</p>` : ''}
${words ? `<h2 id="words" data-anchor="words">Meanings of the individual words</h2>${wordTable(words.words)}` : ''}
${commentary}`;
    versesDone = verses.verses;
    sectionIndex(commentary, meta.title, '');
  }
  sectionIndex(intro, meta.title, '');

  const tocIntro = [...intro.matchAll(/<h([23]) id="([^"]+)"[^>]*>(.*?)<\/h\1>/g)]
    .map(([, lvl, id, inner]) => `<li class="l${lvl}"><a href="#${id}">${plain(inner)}</a></li>`);
  const tocBody = parts ? sections : [...main.matchAll(/<h([23]) id="([^"]+)"[^>]*>(.*?)<\/h\1>/g)]
    .filter(([, , id]) => id !== 'verses' && id !== 'words')
    .map(([, lvl, id, inner]) => `<li class="l${lvl}"><a href="#${id}">${plain(inner)}</a></li>`);
  const progress = versesDone.length < ch.verses.length
    ? `<p class="note">Translated so far: ${versesDone.length} of ${ch.verses.length} verses. The rest will be added as it is translated.</p>` : '';

  // Released (whole surah, or every part of it): the review tools are switched off for it.
  const released = parts ? parts.every((p) => p.meta.released) : !!meta.released;
  const body = `<article class="surah" data-surah="${n}" data-dir="${esc(dir)}" data-title="${esc(meta.title)}" data-status="${esc(meta.status)}"${released ? ' data-released="true"' : ''} data-version="${parts ? 0 : Number(meta.version || 0)}">
<p class="crumbs"><a href="${BASE}/en/">Surahs</a> › ${n}</p>
<h1><span class="sn">${n}.</span> ${esc(meta.title)} <span class="ar-title" lang="ar" dir="rtl">${esc(ch.name_ar)}</span></h1>
<p class="source">${esc(meta.source)} · ${ch.verses.length} verses</p>
${statusBadge(meta)}
${progress}
<div class="tools"><label><input type="checkbox" id="toggle-ml" checked> Show Malayalam</label></div>
<details class="toc"><summary>Contents</summary><ul>
${tocIntro.join('\n')}
${tocHead}
${tocBody.join('\n')}</ul></details>
${intro}
${main}
</article>`;

  const rel = `en/${dir}/`;
  write(`${rel}index.html`, layout({ title: `${n}. ${meta.title} · ${SITE_NAME}`, body, rel }));

  // One search entry per section, and one per verse.
  function sectionIndex(html, fallback, anchor) {
    for (const p of html.split(/(?=<h[23] id=)/)) {
      if (!plain(p)) continue;
      const m = p.match(/<h[23] id="([^"]+)"[^>]*>(.*?)<\/h[23]>/);
      searchIndex.push({ s: n, t: meta.title, h: m ? plain(m[2]) : fallback, a: m ? m[1] : anchor, u: `${BASE}/en/${dir}/`, x: plain(p).slice(0, 4000) });
    }
  }
  versesDone.forEach((v) => searchIndex.push({ s: n, t: meta.title, h: `Verse ${v.n}`, a: `v${n}-${v.n}`, u: `${BASE}/${rel}`, x: v.en }));
  return { n, dir, meta, done: versesDone.length, total: ch.verses.length };
}

function main() {
  fs.rmSync(OUT, { recursive: true, force: true });
  const searchIndex = [];
  const dirs = fs.readdirSync(path.join(ROOT, 'content/en')).filter((d) => /^\d{3}-/.test(d)).sort();
  const built = Object.fromEntries(dirs.map((d) => { const r = buildSurah(d, searchIndex); return [r.n, r]; }));

  const list = quran.map((ch) => {
    const b = built[ch.n];
    const s = b ? STATUS[b.meta.status] || STATUS.draft : null;
    const name = `<span class="n">${ch.n}</span> <span class="name">${esc(ch.name)}</span> <span class="ar" lang="ar" dir="rtl">${esc(ch.name_ar)}</span>`;
    return b
      ? `<li class="ready"><a href="${BASE}/en/${b.dir}/">${name}<span class="badge ${s.cls}">${s.label}${b.done < b.total ? ` · ${b.done} of ${b.total} verses` : ''}</span></a></li>`
      : `<li class="todo"><span>${name}<span class="badge todo">Not yet translated</span></span></li>`;
  });
  const done = Object.keys(built).length;
  const home = `<section class="hero">
<h1>The Holy Quran: translation and commentary</h1>
<p>An English translation of <em>Vishuddha Quran Vivaranam</em>, the Malayalam tafsir by Muhammad Amani Moulavi, published surah by surah after careful review.</p>
<p class="progress">${done} of 114 surahs translated so far.</p>
</section>
<ol class="surah-list">${list.join('\n')}</ol>`;
  write('en/index.html', layout({ title: SITE_NAME, body: home, rel: 'en/' }));
  write('index.html', `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=${BASE}/en/"><link rel="canonical" href="${BASE}/en/"><a href="${BASE}/en/">${SITE_NAME}</a>`);

  write('en/about/index.html', layout({ title: `About · ${SITE_NAME}`, body: `<article class="prose">${md(read(path.join(ROOT, 'content/en/about.md')))}</article>`, rel: 'en/about/' }));

  write('en/bookmarks/index.html', layout({ title: `My bookmarks · ${SITE_NAME}`, rel: 'en/bookmarks/', body: `<article class="prose">
<h1>My bookmarks and notes</h1>
<p>Your bookmarks and notes are saved on this device only. Use the buttons below to keep a copy or move them to another device.</p>
<div id="saved-list"><p>Loading…</p></div>
<p class="backup"><button type="button" id="export-notes">Download a copy</button> <label class="button">Load a copy <input type="file" id="import-notes" accept="application/json" hidden></label></p>
</article>` }));

  write('en/search/index.html', layout({ title: `Search · ${SITE_NAME}`, rel: 'en/search/', body: `<article class="prose">
<h1>Search</h1>
<input type="search" id="q" placeholder="Search the translation, for example: guidance" autofocus>
<ol id="results" class="results"></ol>
</article>` }));

  write('404.html', layout({ title: `Not found · ${SITE_NAME}`, rel: '404.html', body: `<article class="prose"><h1>Page not found</h1><p><a href="${BASE}/en/">Go to the list of surahs</a></p></article>` }));
  write('search-index.json', JSON.stringify(searchIndex));
  write('robots.txt', PREVIEW ? 'User-agent: *\nDisallow: /\n' : 'User-agent: *\nAllow: /\n');
  write('manifest.webmanifest', JSON.stringify({ name: SITE_NAME, short_name: 'Amani Tafsir', start_url: `${BASE}/en/`, display: 'standalone', background_color: '#f6f5f0', theme_color: '#1f5e63', icons: [{ src: `${BASE}/assets/icon.svg`, sizes: 'any', type: 'image/svg+xml' }] }));
  fs.cpSync(path.join(ROOT, 'site/assets'), path.join(OUT, 'assets'), { recursive: true });
  console.log(`Built ${done} surah page(s) into dist/ (base "${BASE}", preview ${PREVIEW}).`);
}

main();
