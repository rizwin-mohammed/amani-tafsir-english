// Listen: reads the English of a surah page aloud with the browser's own voices (Web Speech API).
// Free and offline-capable, but the voices depend on the reader's device and browser.
// Arabic is read with an Arabic voice when the device has one and "Read Arabic too" is on;
// Malayalam is always left out, and so are buttons, notes, review controls and book-page markers. Long passages are read one sentence at a time, so Pause,
// Resume and Stop stay reliable and the place is never lost.
(function () {
  const article = document.querySelector('article.surah');
  const bar = document.getElementById('listen-bar');
  if (!article || !bar) return;

  const synth = window.speechSynthesis;
  const status = bar.querySelector('.listen-status');
  const now = bar.querySelector('.listen-now');
  if (!synth || typeof window.SpeechSynthesisUtterance !== 'function') {
    bar.querySelector('.listen-controls').hidden = true;
    status.textContent = 'Listening is not available in this browser. A screen reader can still read the page.';
    return;
  }

  const KEY = 'amani-tafsir:listen';
  let prefs = {};
  try { prefs = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { /* defaults */ }
  const savePrefs = () => { try { localStorage.setItem(KEY, JSON.stringify(prefs)); } catch (e) { /* not saved */ } };

  const btn = (name) => bar.querySelector(`[data-listen="${name}"]`);
  const playBtn = btn('play'), pauseBtn = btn('pause'), stopBtn = btn('stop');
  const prevBtn = btn('prev'), nextBtn = btn('next'), goBtn = btn('go');
  const moreBtn = bar.querySelector('.listen-btn.more'), more = bar.querySelector('#listen-more');
  const fromSel = bar.querySelector('#listen-from');
  const rateSel = bar.querySelector('#listen-rate');
  const voiceSel = bar.querySelector('#listen-voice');
  const arBox = bar.querySelector('#listen-ar');

  // ---------- Voices ----------
  let voices = [], arVoices = [];
  function loadVoices() {
    const all = synth.getVoices();
    arVoices = all.filter((v) => /^ar(-|_|$)/i.test(v.lang));
    voices = all.filter((v) => /^en(-|_|$)/i.test(v.lang));
    voiceSel.textContent = '';
    const auto = new Option('Automatic (best English voice)', '');
    voiceSel.append(auto);
    voices.forEach((v) => voiceSel.append(new Option(`${v.name} (${v.lang})`, v.voiceURI)));
    voiceSel.value = voices.some((v) => v.voiceURI === prefs.voice) ? prefs.voice : '';
    voiceSel.closest('.listen-field').hidden = voices.length === 0;
    if (arBox) {
      arBox.disabled = arVoices.length === 0;
      arBox.checked = arVoices.length > 0 && prefs.ar !== false;
      const note = bar.querySelector('.listen-ar-note');
      if (note) note.textContent = arVoices.length ? '' : 'This device has no Arabic voice, so Arabic is skipped. An Arabic voice can be added in the phone’s text-to-speech settings.';
    }
  }
  const readArabic = () => !!(arBox && arBox.checked && arVoices.length);
  function pickArVoice() {
    return arVoices.find((v) => v.localService && v.default) || arVoices.find((v) => v.default)
      || arVoices.find((v) => v.localService) || arVoices[0] || null;
  }
  function pickVoice() {
    const chosen = voices.find((v) => v.voiceURI === prefs.voice);
    if (chosen) return chosen;
    // Prefer a local voice (works offline), then the device's default English voice.
    return voices.find((v) => v.localService && v.default) || voices.find((v) => v.default)
      || voices.find((v) => v.localService) || voices[0] || null;
  }
  loadVoices();
  if ('onvoiceschanged' in synth) synth.addEventListener('voiceschanged', loadVoices);
  voiceSel.addEventListener('change', () => { prefs.voice = voiceSel.value; savePrefs(); restartChunk(); });

  rateSel.value = ['0.75', '0.9', '1', '1.15', '1.3', '1.5'].includes(String(prefs.rate)) ? String(prefs.rate) : '1';
  if (arBox) arBox.addEventListener('change', () => { prefs.ar = arBox.checked; savePrefs(); if (state === 'playing') startAt(bi); });
  rateSel.addEventListener('change', () => { prefs.rate = Number(rateSel.value); savePrefs(); restartChunk(); });

  // ---------- What is read, in order ----------
  const SKIP = '.mark-tools,.note-box,.rv-ui,.page,[lang="ar"],[lang="ml"],.visually-hidden,script,style';
  const AR_ML = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿ഀ-ൿ]+/g;
  function cleanEn(t) {
    return t
      .replace(AR_ML, ' ')
      .replace(/ﷺ/g, ' peace be upon him ')
      .replace(/\(\s*[,.;:]?\s*\)|\[\s*[,.;:]?\s*\]/g, ' ')   // brackets left empty once the Arabic is gone
      .replace(/\bDOUBT:/g, 'Translator’s doubt:')
      .replace(/\bTN:/g, 'Translator’s note:')
      .replace(/\s+/g, ' ')
      .replace(/\s+([,.;:!?])/g, '$1')
      .trim();
  }
  // Quran script marks that text-to-speech voices do not know: pause signs and the end-of-verse
  // sign are dropped, the Uthmani sukun and alif wasla become their ordinary forms.
  function cleanAr(t) {
    return t
      .replace(/\u06E1/g, '\u0652').replace(/\u0671/g, '\u0627')
      .replace(/[\u06D6-\u06DE\u06E9\u06EA-\u06ED\u06E2]/g, '')
      .replace(/[^\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
  // What a node says, as runs of English and Arabic in reading order.
  function segments(node) {
    const c = node.cloneNode(true);
    c.querySelectorAll(readArabic() ? SKIP.replace('[lang="ar"],', '') : SKIP).forEach((x) => x.remove());
    const runs = [];
    const push = (lang, t) => {
      if (runs.length && runs[runs.length - 1].lang === lang) runs[runs.length - 1].raw += t;
      else runs.push({ lang, raw: t });
    };
    const walker = document.createTreeWalker(c, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      const p = n.parentElement;
      push(p && p.closest('[lang="ar"]') ? 'ar' : 'en', n.textContent);
    }
    return runs.map((r) => ({ lang: r.lang, text: r.lang === 'ar' ? cleanAr(r.raw) : cleanEn(r.raw) }))
      .filter((r) => (r.lang === 'ar' ? /[\u0621-\u064A]/.test(r.text) : /[A-Za-z0-9]/.test(r.text)));
  }
  const speakable = (node) => segments(node).filter((r) => r.lang === 'en').map((r) => r.text).join(' ');
  const visible = (el) => !!(el.offsetParent || el.getClientRects().length);

  // Blocks in reading order: headings, each verse's English, then paragraphs, lists and notes.
  function collectBlocks() {
    const out = [];
    const add = (el, label, segs, kind) => { if (segs.length) out.push({ el, label, segs, kind }); };
    const walk = (root) => {
      for (const el of root.children) {
        if (el.matches('.mark-tools,.note-box,.rv-ui,.listen-bar,.crumbs,.source,.status,.tools,details.toc,.part-meta,.words-block,#top')) continue;
        if (!visible(el)) continue;
        if (/^H[1-4]$/.test(el.tagName)) { add(el, speakable(el), segments(el), 'heading'); continue; }
        if (el.matches('.table-wrap')) {
          el.querySelectorAll('table.verses tbody tr').forEach((tr) => {
            const en = tr.querySelector('.en');
            if (!en || !visible(tr)) return;
            const n = tr.id.split('-')[1];
            const ar = tr.querySelector('td.ar');
            const segs = [{ lang: 'en', text: 'Verse ' + n + '.' }];
            if (readArabic() && ar && visible(ar)) segs.push(...segments(ar).filter((r) => r.lang === 'ar'));
            segs.push(...segments(en));
            add(tr, 'Verse ' + n, segs, 'verse');
          });
          continue;
        }
        if (el.matches('section.part, .commentary, .reader, div:not([class])')) { walk(el); continue; }
        if (el.matches('p, blockquote, ul, ol, li, dl, table')) { add(el, null, segments(el), 'para'); continue; }
        walk(el);
      }
    };
    walk(article);
    // Give paragraphs the label of the heading or verse they belong to, for the status line.
    // Paragraphs are counted under the heading or verse before them: "Verse 7, paragraph 2".
    let last = article.dataset.title || 'the start', count = 0;
    out.forEach((b) => {
      const words = b.segs.filter((g) => g.lang === 'en').map((g) => g.text).join(' ');
      b.snip = words.slice(0, 60);
      if (b.kind !== 'para') { last = b.label; count = 0; b.pick = b.label; return; }
      count++;
      b.label = last + ', paragraph ' + count;
      b.pick = b.label + ': ' + words.replace(/^(Verse \d+\.\s*)/, '').slice(0, 50) + (words.length > 50 ? '…' : '');
    });
    return out;
  }

  // Sentences of about 200 characters at most; long sentences are cut at a comma or a space.
  function chunks(text) {
    const raw = text.match(/[^.!?؟]+[.!?؟]+["’”)\]]*\s*|[^.!?؟]+$/g) || [text];
    // A number or a short abbreviation ("2.", "Mu.") does not end a sentence: keep it with what follows.
    const parts = [];
    for (const r of raw) {
      if (parts.length && (/^\s*(\(?\d+[.)]?|\S{1,3}\.)\s*$/.test(parts[parts.length - 1]) || /^\s*[a-z]/.test(r))) parts[parts.length - 1] += r;
      else parts.push(r);
    }
    const out = [];
    for (let s of parts) {
      s = s.trim();
      while (s.length > 220) {
        let cut = Math.max(s.lastIndexOf(', ', 200), s.lastIndexOf('، ', 200));
        if (cut < 80) cut = s.lastIndexOf(' ', 200);
        if (cut < 40) cut = 200;
        out.push(s.slice(0, cut + 1).trim());
        s = s.slice(cut + 1).trim();
      }
      if (s) out.push(s);
    }
    return out;
  }

  const partsOf = (b) => b.segs.flatMap((g) => (g.lang === 'en' ? chunks(g.text) : chunksAr(g.text)).map((t) => ({ lang: g.lang, text: t })));
  // Arabic has few full stops: cut long runs at a space, about 200 characters at most.
  function chunksAr(text) {
    const out = [];
    let s = text;
    while (s.length > 220) {
      let cut = s.lastIndexOf(' ', 200);
      if (cut < 40) cut = 200;
      out.push(s.slice(0, cut).trim());
      s = s.slice(cut).trim();
    }
    if (s) out.push(s);
    return out;
  }

  // ---------- Playback ----------
  let blocks = [];
  let bi = 0, ci = 0, parts = [];
  let state = 'stopped';   // stopped | playing | paused
  let token = 0;           // ends callbacks from an utterance that was cancelled
  let errors = 0;

  // The place is remembered per page on this device: the block's opening words, with its number
  // as a fallback, so it survives small changes to the page.
  const POS_KEY = 'amani-tafsir:listen-pos';
  const page = location.pathname;
  function loadPos() { try { return (JSON.parse(localStorage.getItem(POS_KEY)) || {})[page] || null; } catch (e) { return null; } }
  function savePos(i) {
    try {
      const all = JSON.parse(localStorage.getItem(POS_KEY)) || {};
      if (i == null) delete all[page]; else all[page] = { i, snip: blocks[i].snip, label: blocks[i].label, t: Date.now() };
      localStorage.setItem(POS_KEY, JSON.stringify(all));
    } catch (e) { /* not saved */ }
  }
  function savedIndex() {
    const p = loadPos();
    if (!p || !blocks.length) return 0;
    let i = blocks.findIndex((b) => b.snip === p.snip);
    if (i < 0) i = Math.min(p.i || 0, blocks.length - 1);
    return i;
  }

  function refresh() {
    blocks = collectBlocks();
    fromSel.textContent = '';
    fromSel.append(new Option('The beginning', '0'));
    let group = null;
    blocks.forEach((b, i) => {
      if (i === 0) return;
      if (b.kind === 'heading') { group = document.createElement('optgroup'); group.label = b.label; fromSel.append(group); }
      (group || fromSel).append(new Option(b.pick, String(i)));
    });
  }

  function labelPlay() {
    const lbl = playBtn.querySelector('.lbl');
    let text = 'Play', aria = 'Play this surah from the start';
    if (state === 'paused') { text = 'Resume'; aria = 'Resume from ' + (blocks[bi] ? blocks[bi].label : 'where you paused'); }
    else if (bi > 0 && blocks[bi]) { text = 'Continue'; aria = 'Continue from ' + blocks[bi].label; }
    lbl.textContent = text;
    playBtn.setAttribute('aria-label', aria);
  }
  function setState(s, message) {
    state = s;
    playBtn.hidden = s === 'playing';
    pauseBtn.hidden = s !== 'playing';
    stopBtn.disabled = s === 'stopped';
    bar.dataset.state = s;
    labelPlay();
    // Only state changes are announced, so the screen reader does not talk over the voice.
    if (message) status.textContent = message;
  }
  function mark(b, scroll) {
    article.querySelectorAll('.listening').forEach((x) => x.classList.remove('listening'));
    if (!b) { now.textContent = ''; return; }
    b.el.classList.add('listening');
    now.textContent = (state === 'playing' ? 'Now reading: ' : 'At: ') + b.label;
    if (scroll === false) return;
    const r = b.el.getBoundingClientRect();
    const bottom = window.innerHeight - bar.offsetHeight - 40;
    if (r.top < 80 || r.top > bottom) {
      const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      b.el.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
    }
  }
  function go(i) {
    bi = Math.max(0, Math.min(i, blocks.length - 1)); ci = 0;
    parts = partsOf(blocks[bi]);
    mark(blocks[bi]);
    savePos(bi);
    fromSel.value = String(bi);
  }
  function speakNext() {
    if (state !== 'playing') return;
    while (bi < blocks.length && ci >= parts.length) {
      bi++; ci = 0;
      if (bi < blocks.length) { parts = partsOf(blocks[bi]); mark(blocks[bi]); savePos(bi); fromSel.value = String(bi); }
    }
    if (bi >= blocks.length) { finish('Finished reading this surah.', true); return; }
    const part = parts[ci];
    const u = new SpeechSynthesisUtterance(part.text);
    u.lang = part.lang;
    const v = part.lang === 'ar' ? pickArVoice() : pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; }
    u.rate = Number(prefs.rate) || 1;
    const my = ++token;
    u.onend = () => { if (my !== token) return; errors = 0; ci++; speakNext(); };
    u.onerror = (e) => {
      if (my !== token || e.error === 'interrupted' || e.error === 'canceled') return;
      ci++;
      if (++errors > 3) { finish('Listening stopped: the browser’s voice failed (' + e.error + ').'); return; }
      speakNext();
    };
    synth.speak(u);
  }
  function startAt(index, label) {
    token++; synth.cancel();
    refresh();
    if (!blocks.length) { setState('stopped', 'There is no text to read here.'); return; }
    errors = 0;
    state = 'playing';
    go(index);
    setState('playing', 'Playing from ' + (label || blocks[bi].label) + '.');
    speakNext();
  }
  // Pause is a cancel that keeps the place: the browsers' own pause is unreliable on phones.
  function pause() { if (state !== 'playing') return; token++; synth.cancel(); setState('paused', 'Paused at ' + (blocks[bi] ? blocks[bi].label : '') + '.'); mark(blocks[bi], false); }
  function resume() { if (state !== 'paused') return; setState('playing', 'Resumed.'); mark(blocks[bi], false); speakNext(); }
  // Stop keeps the place for next time; only reaching the end clears it.
  function finish(message, atEnd) {
    token++; synth.cancel();
    if (atEnd) { savePos(null); bi = 0; mark(null); } else mark(blocks[bi], false);
    ci = 0; parts = [];
    setState('stopped', message);
  }
  function restartChunk() { if (state === 'playing') { token++; synth.cancel(); speakNext(); } }
  // Previous / Next: one verse or paragraph. While playing they jump and keep reading;
  // otherwise they only move the place and say where it is.
  function step(d) {
    if (!blocks.length) refresh();
    if (!blocks.length) return;
    const to = Math.max(0, Math.min(bi + d, blocks.length - 1));
    if (state === 'playing') { token++; synth.cancel(); go(to); speakNext(); status.textContent = blocks[bi].label; return; }
    go(to);
    if (state === 'paused') ci = 0;
    status.textContent = 'At ' + blocks[bi].label + '. Press Play to listen.';
    labelPlay();
  }

  playBtn.addEventListener('click', () => (state === 'paused' ? resume() : startAt(bi)));
  pauseBtn.addEventListener('click', () => { pause(); playBtn.focus(); });
  stopBtn.addEventListener('click', () => { finish('Stopped. Your place is kept.'); playBtn.focus(); });
  prevBtn.addEventListener('click', () => step(-1));
  nextBtn.addEventListener('click', () => step(1));
  goBtn.addEventListener('click', () => startAt(Number(fromSel.value) || 0));
  moreBtn.addEventListener('click', () => {
    const open = more.hidden;
    if (open) { if (state !== 'playing') { const keep = bi; refresh(); bi = Math.min(keep, Math.max(0, blocks.length - 1)); } fromSel.value = String(bi); }
    more.hidden = !open;
    moreBtn.setAttribute('aria-expanded', String(open));
    bar.classList.toggle('open', open);
    padBody();
  });
  window.addEventListener('pagehide', () => { token++; synth.cancel(); });

  // The player sits at the bottom of the screen; keep the page's last lines clear of it.
  function padBody() { document.body.style.paddingBottom = (bar.offsetHeight + 12) + 'px'; document.documentElement.style.setProperty('--player-h', bar.offsetHeight + 'px'); }

  // "Listen from here" beside every heading and verse. app.js adds the other buttons first.
  function addHereButtons() {
    const svg = '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
    article.querySelectorAll('[data-anchor]').forEach((el) => {
      const tools = el.querySelector('.mark-tools');
      if (!tools || tools.querySelector('.ls')) return;
      const label = el.dataset.label || (el.tagName === 'TR' ? 'Verse ' + el.id.split('-')[1] : el.textContent.trim().slice(0, 80));
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'ls icon-btn';
      b.title = 'Listen from here';
      b.innerHTML = svg + '<span class="visually-hidden">Listen from here: ' + label.replace(/[<&>]/g, '') + '</span>';
      b.addEventListener('click', () => {
        const list = collectBlocks();
        let i = list.findIndex((x) => x.el === el);
        if (i < 0) i = list.findIndex((x) => el.compareDocumentPosition(x.el) & Node.DOCUMENT_POSITION_FOLLOWING);
        if (i < 0) { status.textContent = 'Nothing to read here with the current reading settings.'; return; }
        startAt(i, label);
      });
      tools.append(b);
    });
  }
  function init() {
    addHereButtons();
    refresh();
    bi = savedIndex();
    bar.classList.add('player');
    bar.querySelector('.listen-controls').hidden = false;
    status.textContent = '';
    setState('stopped', '');
    if (bi > 0) { mark(blocks[bi], false); now.textContent = 'Your place: ' + blocks[bi].label; fromSel.value = String(bi); }
    padBody();
    if ('ResizeObserver' in window) new ResizeObserver(padBody).observe(bar); else window.addEventListener('resize', padBody);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
