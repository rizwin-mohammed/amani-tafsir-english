// Bookmarks, notes, copy and share, "continue reading", reading settings, the surah library filter and search.
// Everything is saved in this browser only (localStorage) until sign-in is added.
(function () {
  const BASE = document.body.dataset.base || '';

  // The top bar stays on screen; its height keeps anchors and the side index clear of it.
  const topBar = document.querySelector('header.top');
  if (topBar) {
    const setTop = () => document.documentElement.style.setProperty('--top-h', topBar.offsetHeight + 'px');
    setTop();
    if ('ResizeObserver' in window) new ResizeObserver(setTop).observe(topBar); else window.addEventListener('resize', setTop);
  }

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

  // Share button in the top bar: the phone's own share sheet where there is one, otherwise copy the link.
  const shareBtn = document.getElementById('share-open');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const url = location.origin + location.pathname + location.hash;
      const title = document.title;
      if (navigator.share) {
        try { await navigator.share({ title, url }); return; } catch (e) { if (e && e.name === 'AbortError') return; }
      }
      copyText(url, 'Link copied. You can paste it to share this page.');
    });
  }
  // A share button on each dua: shares that dua's own page.
  document.querySelectorAll('button.dua-share').forEach((b) => {
    b.addEventListener('click', async () => {
      const url = location.origin + b.dataset.url;
      const title = b.dataset.title;
      if (navigator.share) {
        try { await navigator.share({ title, text: title + ' · ' + SITE, url }); return; } catch (e) { if (e && e.name === 'AbortError') return; }
      }
      copyText(url, 'Link to this dua copied. You can paste it to share it.');
    });
  });
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
        (el.querySelector('.tools') || el.querySelector('.num')).append(bar);
        el.querySelector('.en').append(noteBox);
      } else {
        el.append(bar);
        el.after(noteBox);
      }
      refresh();
    });

    // Side index as a drawer on narrower screens, opened from "Contents" in the top bar.
    const side = document.getElementById('side-index');
    const opener = document.getElementById('index-open');
    const backdrop = document.getElementById('side-backdrop');
    if (side && opener) {
      const setOpen = (open) => {
        side.classList.toggle('open', open);
        if (backdrop) backdrop.hidden = !open;
        opener.setAttribute('aria-expanded', String(open));
        if (open) (side.querySelector('a.here') || side.querySelector('input,a')).focus({ preventScroll: true });
        else if (side.contains(document.activeElement)) opener.focus();
      };
      opener.addEventListener('click', () => setOpen(!side.classList.contains('open')));
      document.getElementById('index-close')?.addEventListener('click', () => setOpen(false));
      backdrop?.addEventListener('click', () => setOpen(false));
      side.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
      side.querySelector('.side-go')?.addEventListener('submit', () => setOpen(false));
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && side.classList.contains('open')) setOpen(false); });
    }

    // Side index (wide screens): "Go to verse" and the highlight on the part being read.
    const go = document.querySelector('.side-go');
    if (go) {
      go.addEventListener('submit', (e) => {
        e.preventDefault();
        const v = parseInt(go.querySelector('input').value, 10);
        const target = document.getElementById('v' + go.dataset.surah + '-' + v);
        if (target) { location.hash = target.id; target.scrollIntoView(); }
        else toast(v >= 1 && v <= Number(go.dataset.max) ? 'Verse ' + v + ' is not translated yet' : 'There is no verse ' + (go.querySelector('input').value || ''));
      });
    }
    const sideLinks = [...document.querySelectorAll('.side-list a[data-side]')];
    if (sideLinks.length) {
      const blocks = sideLinks.map((a) => ({ a, el: a.dataset.side === 'intro' ? document.getElementById('top') : document.getElementById(a.dataset.side) })).filter((b) => b.el);
      let raf = 0;
      const mark = () => {
        raf = 0;
        let cur = blocks[0];
        for (const b of blocks) if (b.el.getBoundingClientRect().top < 140) cur = b;
        sideLinks.forEach((a) => a.classList.toggle('here', !!cur && a === cur.a));
        if (cur) cur.a.setAttribute('aria-current', 'location');
        sideLinks.forEach((a) => { if (!cur || a !== cur.a) a.removeAttribute('aria-current'); });
        const list = cur && cur.a.closest('.side-index');
        if (list && list.scrollHeight > list.clientHeight) {
          const r = cur.a.getBoundingClientRect(), lr = list.getBoundingClientRect();
          if (r.top < lr.top + 80 || r.bottom > lr.bottom - 20) list.scrollTop += r.top - lr.top - lr.height / 2;
        }
      };
      window.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(mark); }, { passive: true });
      mark();
    }

    // Remember where the reader is, down to the paragraph of the commentary.
    // Saved per surah (prefs.places) and as the latest place overall (prefs.last).
    const blocks = [...article.querySelectorAll('[data-anchor], .commentary p, .commentary li, .commentary blockquote')]
      .filter((el) => !el.closest('.note-box,.mark-tools,.rv-ui,.part-meta') && !(el.matches('p,li') && el.parentElement.closest('blockquote,li')));
    const snipOf = (el) => (el.dataset.label && el.matches('[data-anchor]') ? el.dataset.label : el.textContent.replace(/\s+/g, ' ').trim().slice(0, 60));
    // Label: "Verse 12" on a verse row, a heading's own text, or "Verses 10-22, paragraph 4"
    // for commentary (paragraphs counted from the start of that group of verses).
    const placeOf = (i) => {
      const el = blocks[i];
      let a = i;
      while (a > 0 && !blocks[a].matches('[data-anchor]')) a--;
      const head = blocks[a].matches('[data-anchor]') ? blocks[a] : null;
      let label;
      if (el.matches('[data-anchor]')) label = labelFor(el);
      else {
        let g = i, k = 0;
        while (g > 0 && !blocks[g].matches('h2[data-anchor]')) { if (!blocks[g].matches('[data-anchor]')) k++; g--; }
        const group = blocks[g].matches('h2[data-anchor]') ? labelFor(blocks[g]) : pageTitle;
        label = group + ', paragraph ' + k;
      }
      return { url, page: pageTitle, i, snip: snipOf(el), anchor: head ? head.dataset.anchor : '', label, t: Date.now() };
    };
    const topOffset = () => (topBar ? topBar.offsetHeight : 0) + 12;
    const findBlock = (pos) => {
      if (!pos) return null;
      let el = blocks[pos.i];
      if (el && pos.snip && snipOf(el) !== pos.snip) el = blocks.find((b) => snipOf(b) === pos.snip) || null;
      if (!el && pos.anchor) el = document.getElementById(pos.anchor) || article.querySelector('[data-anchor="' + pos.anchor + '"]');
      return el;
    };
    const goTo = (pos) => {
      const el = findBlock(pos);
      if (!el) return false;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - topOffset() });
      el.classList.add('resume-flash');
      setTimeout(() => el.classList.remove('resume-flash'), 2600);
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
      return true;
    };

    data.prefs.places = data.prefs.places || {};
    const legacy = data.prefs.last && data.prefs.last.url === url && data.prefs.last.i === undefined ? data.prefs.last : null;
    const saved = data.prefs.places[url] || legacy;
    let bar = null;

    if (location.hash === '#continue') {
      history.replaceState(null, '', url + location.search);
      const run = () => { if (!goTo(saved)) toast('No saved place in this surah yet'); };
      if (document.readyState === 'complete') requestAnimationFrame(run); else window.addEventListener('load', () => requestAnimationFrame(run), { once: true });
    } else if (!location.hash && saved && findBlock(saved) && findBlock(saved) !== blocks[0]) {
      // Offer to go back to the saved place when a surah is opened from the start.
      bar = document.createElement('section');
      bar.className = 'resume-bar';
      bar.setAttribute('aria-label', 'Continue reading');
      const msg = document.createElement('p');
      msg.textContent = 'You were reading ' + saved.label + '.';
      const yes = document.createElement('button');
      yes.type = 'button';
      yes.className = 'resume-yes';
      yes.textContent = 'Continue from ' + saved.label;
      const no = document.createElement('button');
      no.type = 'button';
      no.className = 'resume-no';
      no.textContent = 'Start from the beginning';
      const close = () => { bar.remove(); bar = null; };
      yes.addEventListener('click', () => { close(); goTo(saved); });
      no.addEventListener('click', () => { close(); h1 && h1.focus && (h1.setAttribute('tabindex', '-1'), h1.focus({ preventScroll: true })); });
      bar.append(msg, yes, no);
      (h1 && article.contains(h1) ? h1 : article.firstElementChild).after(bar);
    }

    let t;
    window.addEventListener('scroll', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        // While the "continue" offer is still on screen, keep the old place.
        if (bar && bar.getBoundingClientRect().bottom > 0) return;
        const lim = topOffset() + 8;
        let i = -1;
        for (let j = 0; j < blocks.length; j++) { if (blocks[j].getBoundingClientRect().top <= lim) i = j; else break; }
        if (i < 0) return;
        const pos = placeOf(i);
        data.prefs.places[url] = pos;
        data.prefs.last = pos;
        save(data);
      }, 400);
    }, { passive: true });
  }

  // "Continue where you left off" on the home page.
  const hero = document.querySelector('.hero');
  if (hero && data.prefs.last && data.prefs.last.url) {
    const l = data.prefs.last;
    const a = document.createElement('a');
    a.className = 'continue-btn';
    a.href = l.url + (l.i === undefined ? '#' + l.anchor : '#continue');
    const big = document.createElement('span');
    big.className = 'continue-main';
    big.textContent = 'Continue where you left off';
    const small = document.createElement('span');
    small.className = 'continue-where';
    small.textContent = l.page + ', ' + l.label;
    a.append(big, small);
    const p = document.createElement('p');
    p.className = 'continue';
    p.append(a);
    hero.querySelector('h1') ? hero.querySelector('h1').after(p) : hero.prepend(p);
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

// Dua pages: the reader's language choice. Empty means the default, Malayalam and English.
// The choice is remembered on this device and applied on every dua page.
(function () {
  var sel = document.getElementById('dua-lang');
  if (!sel) return;
  var KEY = 'amani-tafsir:dua-lang';
  var saved = '';
  try { saved = localStorage.getItem(KEY) || ''; } catch (e) {}
  if (saved && !sel.querySelector('option[value="' + saved + '"]')) saved = '';
  function apply(code) {
    document.documentElement.classList.toggle('dua-lang-other', !!code);
    Array.prototype.forEach.call(document.querySelectorAll('.dua-tr'), function (el) {
      el.hidden = el.getAttribute('data-lang') !== code;
    });
  }
  sel.value = saved;
  apply(saved);
  sel.addEventListener('change', function () {
    try { if (sel.value) localStorage.setItem(KEY, sel.value); else localStorage.removeItem(KEY); } catch (e) {}
    apply(sel.value);
  });
})();

// On phones the dua references tables start folded, so the page stays short; a tap opens them.
(function () {
  if (window.innerWidth >= 700) return;
  Array.prototype.forEach.call(document.querySelectorAll('details.dua-refs-box'), function (d) { d.open = false; });
})();
