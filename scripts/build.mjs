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
<body data-base="${BASE}" data-page="${esc(rel)}">
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
</body>
</html>
`;
}

function statusBadge(meta) {
  const s = STATUS[meta.status] || STATUS.draft;
  const when = meta.reviewed_on ? ` on ${esc(meta.reviewed_on)}` : '';
  const by = meta.reviewed_by ? ` by ${esc(meta.reviewed_by)}` : '';
  return `<div class="status ${s.cls}"><strong>${s.label}</strong>${by}${when}.${meta.status_note ? ' ' + esc(meta.status_note) : ''}</div>`;
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

function buildSurah(dir, searchIndex) {
  const base = path.join(ROOT, 'content/en', dir);
  const meta = readJson(path.join(base, 'meta.json'));
  const n = meta.surah;
  const ch = quran[n - 1];
  const used = new Set();
  const intro = fs.existsSync(path.join(base, 'intro.md')) ? md(read(path.join(base, 'intro.md')), used) : '';
  const commentary = fs.existsSync(path.join(base, 'commentary.md')) ? md(read(path.join(base, 'commentary.md')), used) : '';
  const verses = readJson(path.join(base, 'verses.json'));
  const words = fs.existsSync(path.join(base, 'words.json')) ? readJson(path.join(base, 'words.json')) : null;

  const toc = [...(intro + commentary).matchAll(/<h([23]) id="([^"]+)"[^>]*>(.*?)<\/h\1>/g)]
    .map(([, lvl, id, inner]) => `<li class="l${lvl}"><a href="#${id}">${plain(inner)}</a></li>`);

  const body = `<article class="surah" data-surah="${n}">
<p class="crumbs"><a href="${BASE}/en/">Surahs</a> › ${n}</p>
<h1><span class="sn">${n}.</span> ${esc(meta.title)} <span class="ar-title" lang="ar" dir="rtl">${esc(ch.name_ar)}</span></h1>
<p class="source">${esc(meta.source)} · ${ch.verses.length} verses</p>
${statusBadge(meta)}
<div class="tools"><label><input type="checkbox" id="toggle-ml" checked> Show Malayalam</label></div>
<details class="toc"><summary>Contents</summary><ul>
<li class="l2"><a href="#verses">The text and its translation</a></li>
${words ? '<li class="l2"><a href="#words">Meanings of the individual words</a></li>' : ''}
${toc.join('\n')}</ul></details>
${intro}
<h2 id="verses" data-anchor="verses">The text and its translation</h2>
${verseTable(n, verses.verses)}
${verses.source_pages ? `<p class="note">Book pages ${esc(verses.source_pages)}.</p>` : ''}
${words ? `<h2 id="words" data-anchor="words">Meanings of the individual words</h2>${wordTable(words.words)}` : ''}
${commentary}
</article>`;

  const rel = `en/${dir}/`;
  write(`${rel}index.html`, layout({ title: `${n}. ${meta.title} · ${SITE_NAME}`, body, rel }));

  // One search entry per section.
  const full = intro + commentary;
  const parts = full.split(/(?=<h[23] id=)/);
  for (const p of parts) {
    const m = p.match(/<h[23] id="([^"]+)"[^>]*>(.*?)<\/h[23]>/);
    searchIndex.push({ s: n, t: meta.title, h: m ? plain(m[2]) : meta.title, a: m ? m[1] : '', u: `${BASE}/${rel}`, x: plain(p).slice(0, 4000) });
  }
  verses.verses.forEach((v) => searchIndex.push({ s: n, t: meta.title, h: `Verse ${v.n}`, a: `v${n}-${v.n}`, u: `${BASE}/${rel}`, x: v.en }));
  return { n, dir, meta };
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
      ? `<li class="ready"><a href="${BASE}/en/${b.dir}/">${name}<span class="badge ${s.cls}">${s.label}</span></a></li>`
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
