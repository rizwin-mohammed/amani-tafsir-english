// Reviewer mode: select text, write what should change, and send it to Claude as a GitHub issue.
// Claude fixes the text, then records the old and new wording on the issue, which this page shows
// when the highlighted text is hovered or tapped. A "Release" button asks Claude to mark a part
// reviewed and approved with a new version number. A comment on a released part reopens it for
// correction; releasing it again gives it the next version.
//
// Turn on with ?review=on (remembered on this device), off with ?review=off or from the panel.
// Readers never see any of this. Editors are the repository's owner and collaborators: only their
// issues are shown here and acted on by Claude (GitHub also drops labels set by anyone else).
(function () {
  const REPO = document.body.dataset.repo;
  const OWNER = REPO ? REPO.split('/')[0] : '';
  const KEY = 'amani-tafsir:review';
  const API = 'https://api.github.com/repos/' + REPO;
  const LABEL = 'review-comment';
  const RELEASE_LABEL = 'release-request';
  const PAGE = document.body.dataset.page;
  const EDITORS = ['OWNER', 'COLLABORATOR', 'MEMBER'];

  function loadState() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function saveState() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* not saved */ }
  }
  const state = loadState();
  const param = new URLSearchParams(location.search).get('review');
  if (param === 'on' || param === 'off') {
    state.on = param === 'on';
    saveState();
    const u = new URL(location.href);
    u.searchParams.delete('review');
    history.replaceState(null, '', u.pathname + u.search + u.hash);
  }
  if (!state.on || !REPO) return;

  const el = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  const norm = (t) => String(t || '').replace(/\s+/g, ' ').trim();

  // A small "Review mode" marker in the top bar on every page.
  const nav = document.querySelector('.top nav');
  if (nav) nav.append(el('span', 'rv-pill', 'Review mode'));

  const article = document.querySelector('article.surah');
  if (!article) return;
  const surah = Number(article.dataset.surah);
  const surahTitle = article.dataset.title || '';

  // ---------- Talking to GitHub ----------
  function headers() {
    const h = { Accept: 'application/vnd.github+json' };
    if (state.token) h.Authorization = 'Bearer ' + state.token;
    return h;
  }
  async function fetchIssues(label) {
    const all = [];
    for (let page = 1; page <= 10; page++) {
      const url = `${API}/issues?state=all&per_page=100&page=${page}&labels=${label}&t=${Date.now()}`;
      const r = await fetch(url, { headers: headers(), cache: 'no-store' });
      if (!r.ok) throw new Error(r.status === 403 || r.status === 429 ? 'GitHub is limiting requests for now. Try again in a while, or set up one-tap sending below.' : 'Could not load comments (' + r.status + ').');
      const j = await r.json();
      all.push(...j.filter((i) => EDITORS.includes(i.author_association)));
      if (j.length < 100) break;
    }
    return all;
  }
  function block(body, name) {
    const m = String(body || '').match(new RegExp('<!--\\s*' + name + '\\s*([\\s\\S]*?)-->'));
    if (!m) return null;
    try { return JSON.parse(m[1]); } catch (e) { return null; }
  }
  // Data inside an HTML comment must not contain "-->".
  const hidden = (name, obj) => `<!-- ${name}\n${JSON.stringify(obj).replace(/--/g, '-\\u002d')}\n-->`;

  async function sendIssue({ title, body, label, done }) {
    if (state.token) {
      const r = await fetch(`${API}/issues`, { method: 'POST', headers: Object.assign(headers(), { 'Content-Type': 'application/json' }), body: JSON.stringify({ title, body, labels: [label] }) });
      if (r.ok) { done('Sent. Claude will pick it up, fix it, and reply here.'); refresh(); return; }
      done('One-tap sending failed (' + r.status + '), so GitHub will open instead. The saved key may have expired.');
    }
    const url = `https://github.com/${REPO}/issues/new?` + new URLSearchParams({ title, body, labels: label });
    window.open(url, '_blank', 'noopener');
    if (!state.token) done('GitHub opened in a new tab. Tap "Create" there to send it to Claude. Then come back and tap Refresh.');
  }

  // ---------- Finding text on the page ----------
  // Text of the surah as one string (spaces collapsed), with a map back to each character's text node.
  const SKIP = '.mark-tools,.note-box,.rv-ui,script,style';
  function buildIndex() {
    const walker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT, {
      acceptNode(n) { return n.parentElement && !n.parentElement.closest(SKIP) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; },
    });
    let s = '';
    const map = [];
    let space = true;
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      const t = n.nodeValue;
      for (let i = 0; i < t.length; i++) {
        if (/\s/.test(t[i])) {
          if (space) continue;
          s += ' '; space = true;
        } else { s += t[i]; space = false; }
        map.push([n, i]);
      }
    }
    return { s, map };
  }
  // Index of the first character at or after a DOM point (text is in document order, so binary search).
  function posOf(idx, node, offset) {
    const r = document.createRange();
    r.setStart(node, offset);
    let lo = 0;
    let hi = idx.map.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      const [n, o] = idx.map[mid];
      if (r.comparePoint(n, o) < 0) lo = mid + 1; else hi = mid;
    }
    return lo;
  }
  function locate(idx, quote, prefix) {
    const q = norm(quote);
    if (!q) return null;
    const p = norm(prefix).slice(-30);
    let first = -1;
    for (let i = idx.s.indexOf(q); i >= 0; i = idx.s.indexOf(q, i + 1)) {
      if (first < 0) first = i;
      if (p && idx.s.slice(0, i).trimEnd().endsWith(p)) return [i, i + q.length];
    }
    return first < 0 ? null : [first, first + q.length];
  }
  function wrap(idx, [a, b], c) {
    const pieces = new Map();
    for (let i = a; i < b; i++) {
      const [n, o] = idx.map[i];
      const p = pieces.get(n);
      if (p) p[1] = o + 1; else pieces.set(n, [o, o + 1]);
    }
    const marks = [];
    pieces.forEach(([s, e], n) => {
      const r = document.createRange();
      r.setStart(n, s);
      r.setEnd(n, e);
      const m = el('mark', 'rv-mark ' + STATUS[c.status].cls);
      m.tabIndex = 0;
      m.__c = c;
      try { r.surroundContents(m); marks.push(m); } catch (err) { /* skip */ }
    });
    marks.forEach((m) => {
      m.addEventListener('mouseenter', () => showPop(c, m, false));
      m.addEventListener('click', (ev) => { ev.preventDefault(); showPop(c, m, true); });
      m.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') showPop(c, m, true); });
    });
    return marks;
  }
  function unwrapAll() {
    article.querySelectorAll('mark.rv-mark').forEach((m) => {
      m.replaceWith(...m.childNodes);
    });
    article.normalize();
  }

  // Where a selection sits: verse row, heading, part, column.
  const anchors = () => [...article.querySelectorAll('[data-anchor]')];
  function describe(node) {
    const e = node.nodeType === 1 ? node : node.parentElement;
    const tr = e.closest('tr[id]');
    const part = e.closest('section.part');
    let anchor = tr ? tr.id : '';
    let heading = '';
    if (!anchor) {
      const before = anchors().filter((a) => a === e || a.contains(e) || (a.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING));
      const last = before.pop();
      if (last) { anchor = last.dataset.anchor; heading = last.dataset.label || norm(last.textContent).slice(0, 80); }
    }
    const td = e.closest('td');
    const table = e.closest('table');
    let where = 'commentary';
    if (table && td) {
      const col = ['num', 'ar', 'ml', 'en'].find((c) => td.classList.contains(c)) || 'cell';
      const names = { num: 'number', ar: 'Arabic', ml: 'Malayalam', en: 'English' };
      where = (table.classList.contains('words') ? 'word table' : 'verse table') + ', ' + (names[col] || col) + ' column';
      if (table.classList.contains('words')) {
        const v = td.parentElement.querySelector('td.num');
        if (v) heading = 'verse ' + norm(v.textContent).replace(/\D+/g, ' ').trim().split(' ')[0];
      }
    } else if (e.closest('blockquote')) where = 'commentary note';
    else if (e.closest('h1,h2,h3')) where = 'heading';
    const verse = tr ? tr.id.split('-')[1] : '';
    return { anchor, part: part ? part.dataset.part : '', verses: part ? part.dataset.verses : '', where, verse, heading };
  }

  // ---------- The interface ----------
  const ui = el('div', 'rv-ui');
  document.body.append(ui);

  const fab = el('button', 'rv-fab', 'Comment on selected text');
  fab.type = 'button';
  fab.hidden = true;
  ui.append(fab);

  const panelBtn = el('button', 'rv-panel-btn', 'Review');
  panelBtn.type = 'button';
  ui.append(panelBtn);

  const panel = el('aside', 'rv-panel');
  panel.hidden = true;
  ui.append(panel);
  panelBtn.addEventListener('click', () => { panel.hidden = !panel.hidden; });

  const pop = el('div', 'rv-pop');
  pop.hidden = true;
  pop.setAttribute('role', 'dialog');
  ui.append(pop);

  const dialog = el('div', 'rv-dialog');
  dialog.hidden = true;
  dialog.setAttribute('role', 'dialog');
  ui.append(dialog);

  // Keep the last selection: tapping the button clears it on phones.
  let picked = null;
  let selTimer;
  document.addEventListener('selectionchange', () => { clearTimeout(selTimer); selTimer = setTimeout(onSelection, 200); });
  function onSelection() {
    const sel = document.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) { if (!dialog.hidden) return; fab.hidden = true; return; }
    const r = sel.getRangeAt(0);
    if (!article.contains(r.commonAncestorContainer) || (r.commonAncestorContainer.nodeType === 1 ? r.commonAncestorContainer : r.commonAncestorContainer.parentElement).closest(SKIP)) { fab.hidden = true; return; }
    const idx = buildIndex();
    const a = posOf(idx, r.startContainer, r.startOffset);
    const b = posOf(idx, r.endContainer, r.endOffset);
    let quote = norm(sel.toString());
    let prefix = '';
    let suffix = '';
    if (b > a) {
      quote = idx.s.slice(a, b).trim();
      prefix = idx.s.slice(Math.max(0, a - 40), a);
      suffix = idx.s.slice(b, b + 40);
    }
    if (!quote) { fab.hidden = true; return; }
    picked = Object.assign({ quote, prefix, suffix }, describe(r.startContainer));
    fab.hidden = false;
  }

  fab.addEventListener('mousedown', (e) => e.preventDefault());
  fab.addEventListener('click', () => { if (picked) openDialog(picked); });

  function placeLabel(c) {
    if (c.verse) return `${surah}:${c.verse}`;
    if (c.heading) return `${surah}, ${c.heading}`;
    if (c.verses) return `${surah}, verses ${c.verses}`;
    return `${surah}. ${surahTitle}`;
  }

  function openDialog(c) {
    dialog.textContent = '';
    const general = !c.quote;
    dialog.append(el('h3', null, general ? 'Comment on this surah' : 'Ask Claude to change this'));
    if (!general) {
      dialog.append(el('p', 'rv-where', placeLabel(c) + ' · ' + c.where));
      dialog.append(el('blockquote', 'rv-quote', c.quote.length > 400 ? c.quote.slice(0, 400) + '…' : c.quote));
    }
    const ta = el('textarea');
    ta.rows = 5;
    ta.placeholder = general ? 'What should Claude change?' : 'What should Claude do? For example: remove this sentence, or use "sickness" instead of "disease".';
    dialog.append(ta);
    const msg = el('p', 'rv-msg');
    const send = el('button', 'rv-primary', 'Send to Claude');
    send.type = 'button';
    const cancel = el('button', null, 'Cancel');
    cancel.type = 'button';
    const row = el('p', 'rv-actions');
    row.append(send, cancel);
    dialog.append(row, msg);
    dialog.hidden = false;
    fab.hidden = true;
    ta.focus();
    cancel.addEventListener('click', () => { dialog.hidden = true; });
    send.addEventListener('click', async () => {
      const text = ta.value.trim();
      if (!text) { msg.textContent = 'Please write what should change.'; return; }
      send.disabled = true;
      const data = { page: PAGE, surah, dir: article.dataset.dir, part: c.part || '', verses: c.verses || '', anchor: c.anchor || '', verse: c.verse || '', heading: c.heading || '', where: c.where || 'whole surah', quote: c.quote || '', prefix: c.prefix || '', suffix: c.suffix || '' };
      const title = `Review ${placeLabel(c)}: ${text.replace(/\s+/g, ' ').slice(0, 60)}${text.length > 60 ? '…' : ''}`;
      const quoted = c.quote ? c.quote.split('\n').map((l) => '> ' + l).join('\n') : '_(whole surah)_';
      const body = `**What to change:**\n\n${text}\n\n**Selected text** (${placeLabel(c)}, ${data.where}):\n\n${quoted}\n\nPage: ${location.origin}${location.pathname}${c.anchor ? '#' + c.anchor : ''}\n\n${hidden('review-comment', data)}`;
      await sendIssue({ title, body, label: LABEL, done: (m) => { msg.textContent = m; } });
      send.disabled = false;
      send.textContent = 'Sent';
      send.disabled = true;
      cancel.textContent = 'Close';
      document.getSelection()?.removeAllRanges();
    });
  }

  const STATUS = {
    open: { label: 'Waiting for Claude', cls: 'open' },
    question: { label: 'Claude has a question', cls: 'question' },
    addressed: { label: 'Addressed', cls: 'addressed' },
    closed: { label: 'Closed', cls: 'closed' },
  };
  function statusOf(issue, fix) {
    if (fix && fix.status === 'addressed') return 'addressed';
    if (fix && fix.status === 'question' && issue.state === 'open') return 'question';
    if (issue.state === 'closed') return fix ? 'addressed' : 'closed';
    return 'open';
  }

  function showPop(c, mark, pinned) {
    pop.textContent = '';
    const s = STATUS[c.status];
    pop.append(el('p', 'rv-chip ' + s.cls, s.label));
    pop.append(el('p', 'rv-label', 'Comment' + (c.by ? ' by ' + c.by : '')));
    pop.append(el('p', 'rv-text', c.comment));
    if (c.fix && c.fix.note) {
      pop.append(el('p', 'rv-label', c.status === 'question' ? "Claude's question" : "Claude's reply"));
      pop.append(el('p', 'rv-text', c.fix.note));
    }
    if (c.fix && c.status === 'addressed') {
      if (c.fix.old != null) { pop.append(el('p', 'rv-label', 'Old text')); pop.append(el('p', 'rv-old', c.fix.old || '(nothing)')); }
      if (c.fix.new != null) { pop.append(el('p', 'rv-label', 'New text')); pop.append(el('p', 'rv-new', c.fix.new || '(removed)')); }
      if (c.fix.pending) pop.append(el('p', 'rv-label', 'The change is being published; reload in a few minutes to see it on the page.'));
    }
    const links = el('p', 'rv-actions');
    const a = el('a', null, c.status === 'question' ? 'Answer on GitHub' : 'Open on GitHub');
    a.href = c.url;
    a.target = '_blank';
    a.rel = 'noopener';
    links.append(a);
    if (pinned) {
      const close = el('button', null, 'Close');
      close.type = 'button';
      close.addEventListener('click', () => { pop.hidden = true; });
      links.append(close);
    }
    pop.append(links);
    pop.hidden = false;
    pop.dataset.pinned = pinned ? '1' : '';
    const r = mark.getBoundingClientRect();
    const w = Math.min(380, window.innerWidth - 24);
    pop.style.width = w + 'px';
    pop.style.left = Math.max(12, Math.min(r.left + window.scrollX, window.scrollX + window.innerWidth - w - 12)) + 'px';
    pop.style.top = r.bottom + window.scrollY + 8 + 'px';
  }
  document.addEventListener('mouseover', (e) => {
    if (pop.hidden || pop.dataset.pinned) return;
    if (!e.target.closest('.rv-mark,.rv-pop')) pop.hidden = true;
  });
  document.addEventListener('click', (e) => {
    if (!pop.hidden && !e.target.closest('.rv-mark,.rv-pop,.rv-panel')) pop.hidden = true;
  });

  // Parts of the page that are released one by one (or the whole surah if it has no parts).
  function units() {
    const parts = [...article.querySelectorAll('section.part')].map((s) => ({ part: s.dataset.part, verses: s.dataset.verses, released: s.dataset.released === 'true', version: Number(s.dataset.version || 0), el: s }));
    return parts.length ? parts : [{ part: '', verses: '', released: article.dataset.released === 'true', version: Number(article.dataset.version || 0), el: article }];
  }
  const unitOf = (c) => units().find((u) => !u.part || u.part === c.part);

  // ---------- Loading comments and drawing them ----------
  let comments = [];
  let releases = [];
  async function refresh() {
    status.textContent = 'Loading comments…';
    try {
      const [issues, rel] = await Promise.all([fetchIssues(LABEL), fetchIssues(RELEASE_LABEL)]);
      comments = issues.map((i) => {
        const d = block(i.body, 'review-comment');
        if (!d || d.page !== PAGE) return null;
        const fix = block(i.body, 'claude-fix');
        const comment = (String(i.body).match(/\*\*What to change:\*\*\s*([\s\S]*?)\n\n\*\*Selected text/) || [])[1] || i.title;
        return Object.assign({}, d, { number: i.number, url: i.html_url, comment: comment.trim(), by: i.user ? i.user.login : '', fix, status: statusOf(i, fix), created: i.created_at });
      }).filter(Boolean).sort((x, y) => x.created.localeCompare(y.created));
      releases = rel.map((i) => Object.assign({}, block(i.body, 'release-request'), { number: i.number, url: i.html_url, state: i.state, fix: block(i.body, 'claude-fix') })).filter((r) => r.page === PAGE);
      status.textContent = '';
    } catch (err) {
      status.textContent = err.message;
    }
    draw();
  }

  function draw() {
    pop.hidden = true;
    unwrapAll();
    for (const c of comments) {
      c.found = false;
      if (c.status === 'closed') continue;
      // Once a part is released again, its old fixes no longer need highlighting.
      if (c.status === 'addressed' && (unitOf(c) || {}).released) continue;
      // Once fixed, the old words are gone: highlight the new ones instead.
      const target = c.status === 'addressed' && c.fix && c.fix.new ? c.fix.new : c.quote;
      const idx = buildIndex();
      let at = target ? locate(idx, target, c.prefix) : null;
      if (!at && c.status === 'addressed' && c.quote) {
        at = locate(idx, c.quote, c.prefix);
        if (at && c.fix) c.fix.pending = true;
      }
      if (at) {
        wrap(idx, at, c);
        c.found = true;
      }
    }
    drawPanel();
  }

  const status = el('p', 'rv-status');
  function drawPanel() {
    panel.textContent = '';
    const head = el('div', 'rv-head');
    head.append(el('h3', null, 'Review: ' + surahTitle));
    const x = el('button', null, 'Close');
    x.type = 'button';
    x.addEventListener('click', () => { panel.hidden = true; });
    head.append(x);
    panel.append(head);
    panel.append(el('p', 'rv-help', 'Select any text on the page, then tap "Comment on selected text". Highlights: yellow is waiting for Claude, orange is a question from Claude, green is fixed (hover or tap to see the old and new text).'));
    panel.append(status);

    const open = comments.filter((c) => c.status === 'open' || c.status === 'question');
    panelBtn.textContent = open.length ? `Review (${open.length} open)` : 'Review';

    const tools = el('p', 'rv-actions');
    const general = el('button', null, 'Comment on the whole surah');
    general.type = 'button';
    general.addEventListener('click', () => { panel.hidden = true; openDialog({ quote: '', where: 'whole surah' }); });
    const re = el('button', null, 'Refresh');
    re.type = 'button';
    re.addEventListener('click', refresh);
    tools.append(general, re);
    panel.append(tools);

    panel.append(el('h4', null, `Comments on this page (${comments.length})`));
    if (!comments.length) panel.append(el('p', 'rv-help', 'None yet.'));
    const ul = el('ul', 'rv-list');
    for (const c of comments) {
      const li = el('li');
      li.append(el('span', 'rv-chip ' + STATUS[c.status].cls, STATUS[c.status].label));
      li.append(el('span', 'rv-place', ' ' + placeLabel(c) + ' '));
      li.append(el('p', 'rv-text', c.comment));
      const go = el('button', null, c.found ? 'Show' : 'Open on GitHub');
      go.type = 'button';
      go.addEventListener('click', () => {
        const m = [...article.querySelectorAll('mark.rv-mark')].find((mm) => mm.__c === c);
        if (m) { panel.hidden = window.innerWidth < 900; m.scrollIntoView({ block: 'center', behavior: 'smooth' }); showPop(c, m, true); } else window.open(c.url, '_blank', 'noopener');
      });
      li.append(go);
      ul.append(li);
    }
    panel.append(ul);

    // Release
    panel.append(el('h4', null, 'Release'));
    panel.append(el('p', 'rv-help', 'When everything in a part is right, release it. Claude marks it reviewed and approved with a version number. The button stays locked while comments or doubts are still open.'))
    const rl = el('ul', 'rv-list');
    for (const u of units()) {
      const li = el('li');
      const name = u.verses ? `Verses ${u.verses}` : `${surah}. ${surahTitle}`;
      li.append(el('strong', null, name + ' '));
      const openHere = open.filter((c) => !u.part || c.part === u.part || !c.part);
      if (u.released && !openHere.length) {
        li.append(el('span', 'rv-chip addressed', `Released, version ${u.version || 1}`));
        li.append(el('p', 'rv-help', `Found a mistake? Just comment on it. Claude reopens this part for correction, and you release it again as version ${(u.version || 1) + 1}.`));
        rl.append(li);
        continue;
      }
      if (u.version) li.append(el('span', 'rv-chip question', `Being corrected (version ${u.version} was released)`));
      const doubts = u.el.querySelectorAll('.doubt').length;
      const req = releases.find((r) => (r.part || '') === u.part && r.state === 'open');
      const b = el('button', 'rv-primary', u.version ? `Release version ${u.version + 1}` : 'Release');
      b.type = 'button';
      const why = [];
      if (openHere.length) why.push(`${openHere.length} open comment${openHere.length > 1 ? 's' : ''}`);
      if (doubts) why.push(`${doubts} doubt${doubts > 1 ? 's' : ''} in the text`);
      if (req) { li.append(el('span', 'rv-chip open', 'Release requested, waiting for Claude')); rl.append(li); continue; }
      if (why.length) { b.disabled = true; li.append(b, el('span', 'rv-help', ' Still open: ' + why.join(', ') + '.')); } else li.append(b);
      const msg = el('p', 'rv-msg');
      li.append(msg);
      b.addEventListener('click', async () => {
        if (!confirm(`Release ${name}? Claude will mark it reviewed and approved by you, as version ${(u.version || 0) + 1}.`)) return;
        b.disabled = true;
        const data = { page: PAGE, surah, dir: article.dataset.dir, part: u.part, verses: u.verses, version: (u.version || 0) + 1 };
        const body = `Please release **${surah}. ${surahTitle}${u.verses ? ', verses ' + u.verses : ''}**. I have reviewed it and all my comments are addressed.\n\n${hidden('release-request', data)}`;
        await sendIssue({ title: `Release ${surah}. ${surahTitle}${u.verses ? ', verses ' + u.verses : ''}`, body, label: RELEASE_LABEL, done: (m) => { msg.textContent = m; } });
      });
      rl.append(li);
    }
    panel.append(rl);

    // Settings
    const set = el('details', 'rv-settings');
    set.append(el('summary', null, 'Settings'));
    set.append(el('p', 'rv-help', state.token
      ? 'One-tap sending is on for this device.'
      : 'Without setup, "Send to Claude" opens GitHub where you tap "Create". The owner can send in one tap instead: create a key on GitHub once (choose "Only select repositories", pick amani-tafsir-english, and allow Issues: Read and write), then paste it here. It stays on this device only.'));
    if (!state.token) {
      const mk = el('a', null, 'Create the key on GitHub');
      mk.href = `https://github.com/settings/personal-access-tokens/new?name=${encodeURIComponent('Amani tafsir review')}&description=${encodeURIComponent('Send review comments from the website')}&target_name=${OWNER}&expires_in=366&issues=write`;
      mk.target = '_blank';
      mk.rel = 'noopener';
      const mp = el('p');
      mp.append(mk);
      set.append(mp);
    }
    const tk = el('input');
    tk.type = 'password';
    tk.placeholder = state.token ? 'Key saved' : 'Paste the key here';
    const sv = el('button', null, state.token ? 'Remove key' : 'Save key');
    sv.type = 'button';
    sv.addEventListener('click', () => {
      if (state.token) delete state.token; else if (tk.value.trim()) state.token = tk.value.trim();
      saveState();
      drawPanel();
      panel.querySelector('.rv-settings').open = true;
    });
    const row = el('p', 'rv-actions');
    if (!state.token) row.append(tk);
    row.append(sv);
    set.append(row);
    const off = el('button', null, 'Turn off review mode on this device');
    off.type = 'button';
    off.addEventListener('click', () => { state.on = false; saveState(); location.reload(); });
    const op = el('p');
    op.append(off);
    set.append(op);
    panel.append(set);
  }

  drawPanel();
  refresh();
})();
