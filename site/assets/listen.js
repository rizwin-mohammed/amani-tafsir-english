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
    const add = (el, label, segs) => { if (segs.length) out.push({ el, label, segs }); };
    const walk = (root) => {
      for (const el of root.children) {
        if (el.matches('.mark-tools,.note-box,.rv-ui,.listen-bar,.crumbs,.source,.status,.tools,details.toc,.part-meta,.words-block,#top')) continue;
        if (!visible(el)) continue;
        if (/^H[1-4]$/.test(el.tagName)) { add(el, speakable(el), segments(el)); continue; }
        if (el.matches('.table-wrap')) {
          el.querySelectorAll('table.verses tbody tr').forEach((tr) => {
            const en = tr.querySelector('.en');
            if (!en || !visible(tr)) return;
            const n = tr.id.split('-')[1];
            const ar = tr.querySelector('td.ar');
            const segs = [{ lang: 'en', text: 'Verse ' + n + '.' }];
            if (readArabic() && ar && visible(ar)) segs.push(...segments(ar).filter((r) => r.lang === 'ar'));
            segs.push(...segments(en));
            add(tr, 'Verse ' + n, segs);
          });
          continue;
        }
        if (el.matches('section.part, .commentary, .reader, div:not([class])')) { walk(el); continue; }
        if (el.matches('p, blockquote, ul, ol, li, dl, table')) { add(el, null, segments(el)); continue; }
        walk(el);
      }
    };
    walk(article);
    // Give paragraphs the label of the heading or verse they belong to, for the status line.
    let last = article.dataset.title;
    out.forEach((b) => { if (b.label) last = b.label; else b.label = last; });
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

  function setState(s, message) {
    state = s;
    playBtn.hidden = s === 'playing';
    pauseBtn.hidden = s !== 'playing';
    stopBtn.disabled = s === 'stopped';
    playBtn.querySelector('.lbl').textContent = s === 'paused' ? 'Resume' : 'Play';
    playBtn.setAttribute('aria-label', s === 'paused' ? 'Resume listening' : 'Play: listen to this surah from the start');
    bar.dataset.state = s;
    // Only state changes are announced, so the screen reader does not talk over the voice.
    if (message) status.textContent = message;
  }
  function mark(b) {
    article.querySelectorAll('.listening').forEach((x) => x.classList.remove('listening'));
    if (!b) { now.textContent = ''; return; }
    b.el.classList.add('listening');
    now.textContent = 'Now reading: ' + b.label;
    const r = b.el.getBoundingClientRect();
    if (r.top < 80 || r.top > window.innerHeight - 120) {
      const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      b.el.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
    }
  }
  function speakNext() {
    if (state !== 'playing') return;
    while (bi < blocks.length && ci >= parts.length) {
      bi++; ci = 0;
      parts = bi < blocks.length ? partsOf(blocks[bi]) : [];
      if (bi < blocks.length) mark(blocks[bi]);
    }
    if (bi >= blocks.length) { finish('Finished reading this surah.'); return; }
    const part = parts[ci];
    const u = new SpeechSynthesisUtterance(part.text);
    u.lang = part.lang;
    const v = part.lang === 'ar' ? pickArVoice() : pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; }
    u.rate = Number(prefs.rate) || 1;
    const my = ++token;
    u.onend = () => { if (my !== token) return; ci++; speakNext(); };
    u.onerror = (e) => {
      if (my !== token || e.error === 'interrupted' || e.error === 'canceled') return;
      ci++;
      if (++errors > 3) { finish('Listening stopped: the browser’s voice failed (' + e.error + ').'); return; }
      speakNext();
    };
    synth.speak(u);
  }
  let errors = 0;
  function startAt(index, label) {
    token++; synth.cancel();
    blocks = collectBlocks();
    if (!blocks.length) { setState('stopped', 'There is no English text to read here.'); return; }
    bi = Math.max(0, Math.min(index, blocks.length - 1)); ci = 0; errors = 0;
    parts = partsOf(blocks[bi]);
    mark(blocks[bi]);
    setState('playing', 'Playing' + (label ? ' from ' + label : '') + '.');
    speakNext();
  }
  // Pause is a cancel that keeps the place: the browsers' own pause is unreliable on phones.
  function pause() { if (state !== 'playing') return; token++; synth.cancel(); setState('paused', 'Paused at ' + (blocks[bi] ? blocks[bi].label : '') + '.'); }
  function resume() { if (state !== 'paused') return; setState('playing', 'Resumed.'); speakNext(); }
  function finish(message) { token++; synth.cancel(); mark(null); bi = 0; ci = 0; parts = []; setState('stopped', message); }
  function restartChunk() { if (state === 'playing') { token++; synth.cancel(); speakNext(); } }

  playBtn.addEventListener('click', () => (state === 'paused' ? resume() : startAt(0)));
  pauseBtn.addEventListener('click', () => { pause(); playBtn.focus(); });
  stopBtn.addEventListener('click', () => { finish('Stopped.'); playBtn.focus(); });
  window.addEventListener('pagehide', () => { token++; synth.cancel(); });

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
        if (i < 0) { toastLike('Nothing to read here with the current reading settings.'); return; }
        startAt(i, label);
      });
      tools.append(b);
    });
  }
  function toastLike(msg) { status.textContent = msg; }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addHereButtons); else addHereButtons();

  bar.querySelector('.listen-controls').hidden = false;
  setState('stopped', '');
  status.textContent = '';
})();
