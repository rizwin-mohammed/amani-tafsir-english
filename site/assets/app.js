// Bookmarks, notes, copy and share, "continue reading", reading settings, the surah library filter and search.
// Everything is saved in this browser only (localStorage) until sign-in is added.
(function () {
  const BASE = document.body.dataset.base || '';

  // Installable app and offline reading (see /sw.js). Pages are still fetched fresh when online.
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(`${BASE}/sw.js`, { scope: `${BASE}/` }).catch(() => { /* the site still works without it */ });
    });
  }
  const KEY = 'amani-tafsir:v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { items: {}, prefs: {} }; }
    catch (e) { return { items: {}, prefs: {} }; }
  }
  function save(d) {
    try { localStorage.setItem(KEY, JSON.stringify(d)); return true; }
    catch (e) { alert('Sorry, this browser would not save it (private mode or storage blocked).'); return false; }
  }
  const SITE = 'Amani Tafsir in English';
  const svg = (d) => '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
  const ICONS = {
    bookmark: svg('<path class="fill" d="M6 3h12v18l-6-4.5L6 21z"/>'),
    note: svg('<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>'),
    copy: svg('<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>'),
    share: svg('<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/>'),
  };

  const data = load();
  data.items = data.items || {};
  data.prefs = data.prefs || {};

  const article = document.querySelector('article.surah');
  const h1 = document.querySelector('h1');
  const pageTitle = h1 ? (h1.childNodes.length > 2 ? [...h1.childNodes].filter((n) => !(n.lang === 'ar')).map((n) => n.textContent).join('').trim() : h1.textContent.trim()) : document.title;

  // Read before the buttons are added, so the label is only the verse number or heading text.
  function labelFor(el) {
    if (!el.dataset.label) {
      el.dataset.label = el.tagName === 'TR' ? 'Verse ' + el.id.split('-')[1] : el.textContent.trim().slice(0, 120);
    }
    return el.dataset.label;
  }

  // ---------- Small helpers for the verse and section buttons ----------
  function iconButton(cls, icon, label) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = cls + ' icon-btn';
    b.innerHTML = ICONS[icon] + '<span class="visually-hidden"></span>';
    if (label) setLabel(b, label);
    return b;
  }
  function setLabel(b, label) {
    b.title = label;
    b.querySelector('.visually-hidden').textContent = label;
  }
  function toast(msg) {
    let t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      t.className = 'toast';
      t.setAttribute('role', 'status');
      document.body.append(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toast.t);
    toast.t = setTimeout(() => t.classList.remove('show'), 2200);
  }
  async function copyText(text, done) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.append(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (err) { /* not allowed */ }
      ta.remove();
      if (!ok) { prompt('Copy this:', text); return; }
    }
    toast(done);
  }
  const linkFor = (el) => location.origin + location.pathname + '#' + el.dataset.anchor;
  function placeName(el) {
    const surah = article.dataset.surah + '. ' + article.dataset.title;
    if (el.tagName === 'TR') return surah + ', verse ' + el.id.split('-')[1];
    const part = el.closest('section.part');
    const lbl = labelFor(el);
    return surah + (part && !/^Verses /.test(lbl) ? ', verses ' + part.dataset.verses : '') + ', ' + lbl;
  }
  // The English of a verse, or of a section: everything after its heading up to the next heading
  // of the same or higher level. Buttons, notes, review controls and book-page markers are left out.
  function cleanText(node) {
    const c = node.cloneNode(true);
    c.querySelectorAll('.mark-tools,.note-box,.rv-ui,.page').forEach((x) => x.remove());
    return c.textContent.replace(/[ \t\r\n]+/g, ' ').trim();
  }
  function sectionText(el) {
    const out = [];
    if (el.tagName === 'TR') {
      out.push(cleanText(el.querySelector('.en')));
    } else {
      const lvl = Number(el.tagName[1]);
      const walk = (start) => {
        for (let n = start; n; n = n.nextElementSibling) {
          if (/^H[1-3]$/.test(n.tagName) && Number(n.tagName[1]) <= lvl) return true;
          if (n.matches('.note-box,.part-meta,.words-block,.mark-tools,.rv-ui')) continue;
          if (n.matches('.commentary')) { if (walk(n.firstElementChild)) return true; continue; }
          if (n.matches('.table-wrap')) {
            n.querySelectorAll('table.verses tbody tr').forEach((tr) => out.push('(' + tr.id.split('-')[1] + ') ' + cleanText(tr.querySelector('.en'))));
            continue;
          }
          const t = cleanText(n);
          if (t) out.push(t);
        }
        return false;
      };
      walk(el.nextElementSibling);
    }
    return out.join('\n\n') + '\n\n(' + placeName(el) + '. ' + SITE + ')\n' + linkFor(el);
  }
  async function shareLink(el) {
    const url = linkFor(el);
    const title = placeName(el);
    if (navigator.share) {
      try { await navigator.share({ title, text: title + ' · ' + SITE, url }); return; }
      catch (e) { if (e && e.name === 'AbortError') return; }
    }
    copyText(url, 'Link copied');
  }

  // Bookmark and note buttons on every verse row and heading of a surah page.
  if (article) {
    const url = location.pathname;
    article.querySelectorAll('[data-anchor]').forEach((el) => {
      const anchor = el.dataset.anchor;
      const key = url + '#' + anchor;
      labelFor(el);
      const bar = document.createElement('span');
      bar.className = 'mark-tools';
      const bm = iconButton('bm', 'bookmark');
      const nt = iconButton('nt', 'note');
      const cp = iconButton('cp', 'copy', 'Copy the English text with its reference');
      const sh = iconButton('sh', 'share', 'Share a link to this place');
      const noteBox = document.createElement('div');
      noteBox.className = 'note-box';

      function refresh() {
        const it = data.items[key];
        const on = !!(it && it.bookmarked);
        setLabel(bm, on ? 'Bookmarked (tap to remove)' : 'Bookmark');
        bm.setAttribute('aria-pressed', on);
        setLabel(nt, it && it.note ? 'Edit note' : 'Note');
        nt.classList.toggle('has-note', !!(it && it.note));
        noteBox.textContent = it && it.note ? it.note : '';
        noteBox.hidden = !(it && it.note);
      }
      function upsert(patch) {
        const it = Object.assign({ url, anchor, page: pageTitle, label: labelFor(el) }, data.items[key], patch, { updated: new Date().toISOString() });
        if (!it.bookmarked && !it.note) delete data.items[key]; else data.items[key] = it;
        save(data);
        refresh();
      }
      bm.addEventListener('click', () => upsert({ bookmarked: !(data.items[key] && data.items[key].bookmarked) }));
      nt.addEventListener('click', () => {
        const cur = (data.items[key] && data.items[key].note) || '';
        const v = prompt('Your note (only you can see it):', cur);
        if (v !== null) upsert({ note: v.trim() });
      });
      cp.addEventListener('click', () => copyText(sectionText(el), 'Copied with its reference'));
      sh.addEventListener('click', () => shareLink(el));
      bar.append(bm, nt, cp, sh);
      if (el.tagName === 'TR') {
        el.querySelector('.num').append(bar);
        el.querySelector('.en').append(noteBox);
      } else {
        el.append(bar);
        el.after(noteBox);
      }
      refresh();
    });

    // Remember where the reader is.
    const anchors = [...article.querySelectorAll('[data-anchor]')];
    let t;
    window.addEventListener('scroll', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        const cur = anchors.filter((a) => a.getBoundingClientRect().top < 120).pop();
        if (!cur) return;
        data.prefs.last = { url, anchor: cur.dataset.anchor, page: pageTitle, label: labelFor(cur) };
        save(data);
      }, 400);
    }, { passive: true });
  }

  // "Continue reading" on the home page.
  const hero = document.querySelector('.hero');
  if (hero && data.prefs.last) {
    const l = data.prefs.last;
    const p = document.createElement('p');
    p.className = 'continue';
    const a = document.createElement('a');
    a.href = l.url + '#' + l.anchor;
    a.textContent = 'Continue reading: ' + l.page + ', ' + l.label;
    p.append(a);
    hero.append(p);
  }

  // Bookmarks page
  const listEl = document.getElementById('saved-list');
  if (listEl) {
    const items = Object.values(data.items).sort((a, b) => (b.updated || '').localeCompare(a.updated || ''));
    listEl.textContent = '';
    if (!items.length) listEl.innerHTML = '<p>No bookmarks or notes yet. Open a surah and tap the bookmark or note button next to any verse or heading.</p>';
    const ul = document.createElement('ul');
    ul.className = 'saved';
    items.forEach((it) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = it.url + '#' + it.anchor;
      a.textContent = (it.bookmarked ? '★ ' : '') + it.page + ' · ' + it.label;
      li.append(a);
      if (it.note) {
        const n = document.createElement('p');
        n.className = 'note-box';
        n.textContent = it.note;
        li.append(n);
      }
      ul.append(li);
    });
    listEl.append(ul);

    document.getElementById('export-notes').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'amani-tafsir-notes.json';
      a.click();
    });
    document.getElementById('import-notes').addEventListener('change', async (e) => {
      const f = e.target.files[0];
      if (!f) return;
      try {
        const incoming = JSON.parse(await f.text());
        Object.assign(data.items, incoming.items || {});
        if (save(data)) location.reload();
      } catch (err) { alert('That file could not be read.'); }
    });
  }

  // Search page
  const q = document.getElementById('q');
  if (q) {
    const results = document.getElementById('results');
    let index = null;
    fetch(BASE + '/search-index.json').then((r) => r.json()).then((j) => { index = j; run(); });
    function run() {
      const term = q.value.trim().toLowerCase();
      results.textContent = '';
      if (!index || term.length < 2) return;
      const hits = index.filter((e) => e.x.toLowerCase().includes(term) || e.h.toLowerCase().includes(term)).slice(0, 50);
      if (!hits.length) { results.innerHTML = '<li>No results.</li>'; return; }
      hits.forEach((h) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = h.u + (h.a ? '#' + h.a : '');
        a.textContent = h.s + '. ' + h.t + ' · ' + h.h;
        const i = h.x.toLowerCase().indexOf(term);
        const p = document.createElement('p');
        p.textContent = (i > 60 ? '…' : '') + h.x.slice(Math.max(0, i - 60), i + 140) + '…';
        li.append(a, p);
        results.append(li);
      });
    }
    q.addEventListener('input', run);
    const pre = new URLSearchParams(location.search).get('q');
    if (pre) q.value = pre;
  }

  // ---------- Reading settings (theme, sizes, what to show) ----------
  // Saved in this browser under its own key. The small script at the top of every page applies
  // them before the page is drawn, so there is no flash of the wrong theme or size.
  const RKEY = 'amani-tafsir:reader';
  const root = document.documentElement;
  function readerPrefs() {
    return {
      theme: root.dataset.theme || 'light', size: root.dataset.size || 'm', lh: root.dataset.lh || 's', ar: root.dataset.ar || 's',
      showAr: !root.classList.contains('hide-ar'), showMl: !root.classList.contains('hide-ml'),
      showWords: !root.classList.contains('hide-words'), showComm: !root.classList.contains('hide-comm'),
    };
  }
  // Stored as { theme, size, lh, ar (Arabic size), arText, ml, words, comm (false = hidden) }.
  function saveReader(p) {
    try {
      localStorage.setItem(RKEY, JSON.stringify({ theme: p.theme, size: p.size, lh: p.lh, ar: p.ar, arText: p.showAr, ml: p.showMl, words: p.showWords, comm: p.showComm }));
      localStorage.setItem('amani-tafsir:theme', p.theme);
    } catch (e) { /* not saved; still applies to this page */ }
  }
  const THEME_COLOR = { light: '#1f5e63', sepia: '#5a3a17', dark: '#0b1a1c' };
  function applyReader(p) {
    root.dataset.theme = p.theme;
    root.dataset.size = p.size;
    root.dataset.lh = p.lh;
    root.dataset.ar = p.ar;
    root.classList.toggle('hide-ar', !p.showAr);
    root.classList.toggle('hide-ml', !p.showMl);
    root.classList.toggle('hide-words', !p.showWords);
    root.classList.toggle('hide-comm', !p.showComm);
    const tc = document.querySelector('meta[name="theme-color"]');
    if (tc) tc.content = THEME_COLOR[p.theme] || THEME_COLOR.light;
    hiddenNotice(p);
  }
  // On a surah page, say plainly when the reading settings hide part of the text,
  // with one tap to show everything again, so nothing can go missing silently.
  function hiddenNotice(p) {
    const art = document.querySelector('article.surah');
    if (!art) return;
    const off = [[p.showAr, 'Arabic verse text'], [p.showMl, 'Malayalam'], [p.showWords, 'word meanings'], [p.showComm, 'commentary']]
      .filter(([on]) => !on).map(([, name]) => name);
    let bar = art.querySelector('.hidden-notice');
    if (!off.length) { if (bar) bar.remove(); return; }
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'hidden-notice';
      bar.setAttribute('role', 'status');
      bar.innerHTML = '<p></p><button type="button">Show everything</button>';
      bar.querySelector('button').addEventListener('click', () => {
        ['showAr', 'showMl', 'showWords', 'showComm'].forEach((k) => { prefs[k] = true; });
        applyReader(prefs);
        saveReader(prefs);
      });
      art.prepend(bar);
    }
    const list = off.length > 1 ? `${off.slice(0, -1).join(', ')} and ${off[off.length - 1]}` : off[0];
    bar.querySelector('p').textContent = `Hidden by your reading settings: ${list}.`;
  }
  const prefs = readerPrefs();
  applyReader(prefs);

  const openers = [...document.querySelectorAll('#settings-open,[data-open-settings]')];
  if (openers.length) {
    const panel = document.createElement('div');
    panel.className = 'settings-layer';
    panel.hidden = true;
    const seg = (name, legend, opts) => `<fieldset class="seg seg-${name}"><legend>${legend}</legend><div class="seg-row">${opts.map(([v, l]) =>
      `<label><input type="radio" name="rs-${name}" value="${v}"><span>${l}</span></label>`).join('')}</div></fieldset>`;
    const sw = (key, title, sub) => `<div class="sw-row"><span class="sw-text" id="rs-${key}-l">${title}${sub ? `<small>${sub}</small>` : ''}</span>
<button type="button" role="switch" class="switch" data-key="${key}" aria-labelledby="rs-${key}-l"><span class="knob"></span></button></div>`;
    panel.innerHTML = `<div class="settings-backdrop" data-close></div>
<div class="settings-panel" id="settings-panel" role="dialog" aria-modal="true" aria-labelledby="rs-title" tabindex="-1">
<div class="settings-head"><h2 id="rs-title">Reading settings</h2>
<button type="button" class="settings-close" data-close aria-label="Close reading settings">${svg('<path d="M6 6l12 12M18 6L6 18"/>')}</button></div>
<p class="settings-sub">Saved in this browser.</p>
${seg('theme', 'Theme', [['light', 'Paper'], ['sepia', 'Sepia'], ['dark', 'Night']])}
${seg('size', 'Text size', [['xs', 'XS'], ['s', 'S'], ['m', 'M'], ['l', 'L'], ['xl', 'XL']])}
${seg('lh', 'Line spacing', [['xs', 'XS'], ['s', 'S'], ['m', 'M']])}
${seg('ar', 'Arabic size', [['xs', 'XS'], ['s', 'S'], ['m', 'M'], ['l', 'L']])}
<div class="settings-rule" aria-hidden="true"></div>
<p class="settings-show">Show on surah pages</p>
${sw('showAr', 'Arabic verse text', 'Uthmani script')}
${sw('showMl', 'Malayalam', 'The author’s original rendering')}
${sw('showWords', 'Word meanings')}
${sw('showComm', 'Commentary')}
</div>`;
    document.body.append(panel);
    const box = panel.querySelector('.settings-panel');
    const sync = () => {
      ['theme', 'size', 'lh', 'ar'].forEach((k) => { panel.querySelector(`input[name="rs-${k}"][value="${prefs[k]}"]`).checked = true; });
      panel.querySelectorAll('.switch').forEach((b) => b.setAttribute('aria-checked', String(!!prefs[b.dataset.key])));
    };
    const commit = () => { applyReader(prefs); saveReader(prefs); sync(); };
    panel.addEventListener('change', (e) => {
      const m = e.target.name && e.target.name.match(/^rs-(\w+)$/);
      if (m) { prefs[m[1]] = e.target.value; commit(); }
    });
    panel.querySelectorAll('.switch').forEach((b) => b.addEventListener('click', () => { prefs[b.dataset.key] = !prefs[b.dataset.key]; commit(); }));
    let opener = null;
    const close = () => {
      panel.classList.remove('open');
      document.body.classList.remove('settings-on');
      setTimeout(() => { if (!panel.classList.contains('open')) panel.hidden = true; }, 220);
      if (opener) opener.focus();
    };
    const open = (btn) => {
      opener = btn;
      sync();
      panel.hidden = false;
      document.body.classList.add('settings-on');
      requestAnimationFrame(() => { panel.classList.add('open'); box.focus(); });
    };
    openers.forEach((b) => b.addEventListener('click', () => open(b)));
    panel.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', close));
    panel.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key !== 'Tab') return;
      // Keep the keyboard inside the panel while it is open.
      const f = [...box.querySelectorAll('button, input:checked')];
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === box)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  // ---------- Surah library: filter and "Translated only" ----------
  const filter = document.getElementById('surah-filter');
  if (filter) {
    const items = [...document.querySelectorAll('.surah-list > li')];
    const onlyBtn = document.getElementById('translated-only');
    const count = document.getElementById('lib-count');
    const norm = (t) => t.toLowerCase().normalize('NFKD').replace(/[̀-ͯ'’`-]/g, '').replace(/\s+/g, ' ').trim();
    const squash = (t) => norm(t).replace(/^(al|an|ar|as|ash|at|az|ad)\s?/, '').replace(/[^a-z0-9؀-ۿ]/g, '');
    items.forEach((li) => { li.dataset.key = norm(li.dataset.name); li.dataset.sq = squash(li.dataset.name); });
    let only = false;
    try { only = localStorage.getItem('amani-tafsir:translated-only') === '1'; } catch (e) { /* default off */ }
    const run = () => {
      const q = norm(filter.value);
      const sq = squash(filter.value);
      let shown = 0;
      items.forEach((li) => {
        const okText = !q || (/^\d+$/.test(q) ? li.dataset.n.startsWith(q) : li.dataset.key.includes(q) || (sq && li.dataset.sq.includes(sq)));
        const ok = okText && (!only || li.dataset.status !== 'todo');
        li.hidden = !ok;
        if (ok) shown++;
      });
      onlyBtn.setAttribute('aria-pressed', String(only));
      count.textContent = shown === items.length ? '' : shown ? `Showing ${shown} of ${items.length} surahs.` : 'No surah matches. Try a number (1 to 114) or part of a name.';
    };
    filter.addEventListener('input', run);
    onlyBtn.addEventListener('click', () => {
      only = !only;
      try { localStorage.setItem('amani-tafsir:translated-only', only ? '1' : '0'); } catch (e) { /* not saved */ }
      run();
    });
    run();
  }
})();
