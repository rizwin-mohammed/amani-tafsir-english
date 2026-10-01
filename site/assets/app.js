// Bookmarks, notes, "continue reading", the Malayalam toggle and search.
// Everything is saved in this browser only (localStorage) until sign-in is added.
(function () {
  const BASE = document.body.dataset.base || '';
  const KEY = 'amani-tafsir:v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { items: {}, prefs: {} }; }
    catch (e) { return { items: {}, prefs: {} }; }
  }
  function save(d) {
    try { localStorage.setItem(KEY, JSON.stringify(d)); return true; }
    catch (e) { alert('Sorry, this browser would not save it (private mode or storage blocked).'); return false; }
  }
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

  // Malayalam toggle
  const toggle = document.getElementById('toggle-ml');
  if (toggle) {
    toggle.checked = data.prefs.showMl !== false;
    document.body.classList.toggle('hide-ml', !toggle.checked);
    toggle.addEventListener('change', () => {
      data.prefs.showMl = toggle.checked;
      document.body.classList.toggle('hide-ml', !toggle.checked);
      save(data);
    });
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
      const bm = document.createElement('button');
      bm.type = 'button';
      bm.className = 'bm';
      const nt = document.createElement('button');
      nt.type = 'button';
      nt.className = 'nt';
      const noteBox = document.createElement('div');
      noteBox.className = 'note-box';

      function refresh() {
        const it = data.items[key];
        bm.textContent = it && it.bookmarked ? '★ Bookmarked' : '☆ Bookmark';
        bm.setAttribute('aria-pressed', !!(it && it.bookmarked));
        nt.textContent = it && it.note ? '✎ Edit note' : '✎ Note';
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
      bar.append(bm, nt);
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
    if (!items.length) listEl.innerHTML = '<p>No bookmarks or notes yet. Open a surah and tap ☆ Bookmark or ✎ Note next to any verse or heading.</p>';
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
})();
