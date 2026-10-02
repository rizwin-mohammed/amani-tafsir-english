# Check: Al-Baqarah part 04 (verses 23–27)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 36–45 (book pp. 207–216), rendered at 150 dpi and read in full, including the one footnote (p. 209). Every page's text was re-rendered at 300 dpi in two halves and read line by line; the verse panels and word tables (pp. 207, 211, 213, 214) were read at 300 dpi. PDF page 46 (book p. 217) was also read: the verse 28 group (Arabic panel) starts at its top, so the part ends on a complete group. The `ml2uni.py` text layer was used only for spelling (on these pages it is incomplete).
- `part.json`, `verses.json` (verses 23–27), `words.json` (88 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. No sentence is missing or added. The footnote (\*) on p. 209 ("See the chapter (The Superhuman Nature of the Quran)") is present, right after its paragraph (marker after "Introduction").
- `verses.json` Malayalam and every `words.json` gloss were compared letter by letter with the images; they match (including ചെയ്‌വിൻ with ZWNJ, ചെയ്യുന്നതുമല്ലതന്നെ, the gloss എന്നാ|ലപ്പോൾ joined across the p. 213/214 break, and the different spellings കൊതുവാകട്ടെ (verse) / ഒരുകൊതുകിനെ (word table) and സൽകർമങ്ങൾ / സൽക്കർമങ്ങൾ, all as printed).
- Quran quotations: 17:88, 11:13, 10:38, 28:49, 13:25 phrase, 2:23–27 phrases, 3:131/2:24 phrase, 3:133 phrase and 57:21 phrase compared with `data/quran-uthmani.json`; `npm run check` passes.
- `[p. N]` markers 207–216 checked against the printed page numbers. P. 213 holds only the verse 26–27 panel and the start of the word table, so it has no marker in the commentary (as with earlier panel-only pages). Glossary renderings (Lord / Rabb where the author writes റബ്ബ്, (r), (a), ﷺ) and the renderings of parts 01–03 (true believers, disbelievers, deniers of the truth, hypocrites / Munafiqs, mushriks, right guidance, misguidance, those who observe caution, signs, ayahs, riwayah, the Day of Qiyamah, cause corruption, People of the Scripture, tawhid) are used consistently.

## Corrections made (before → after)

### Added or changed Arabic

1. p. 211, the 57:21 phrase. The image prints (أُعِدَّتْ لِلَّذِينَ آمَنُوا); the English had an extra word not printed (وَٱلۡأَرۡضِ) and had dropped ءَامَنُواْ:
   "(**وَٱلۡأَرۡضِ أُعِدَّتۡ لِلَّذِينَ**)" → "(**أُعِدَّتۡ لِلَّذِينَ ءَامَنُواْ**)" (copied from 57:21 in the data file).
2. pp. 215–216, the word عهد is printed three times with damma (عَهْدُ, عَهْدُ اللَّهِ), as a cited word, not with the verse's fatha. The English had silently put the verse form:
   "**عَهۡدَ**" → "**عَهۡدُ**"; "**عَهۡدَ ٱللَّهِ**" → "**عَهۡدُ ٱللَّهِ**" (twice).

### Additions not in the Malayalam

3. p. 208, Hud 13 and Yunus 38 renderings (നിങ്ങൾക്ക് സാധ്യമായവരെയൊക്കെ): the round-bracket "(to call)" was the translator's, but round brackets mark the author's additions:
   "And do call all whom it is possible for you (to call) besides Allah" → "And do call all whom you can besides Allah" (both places).
4. p. 216, the extra full stop and the missing brackets around إن شاء الله. The image prints "(കൂടുതൽ വിവരം അഅ്റാഫിൽവെച്ച് കാണാം (إِنْ شَاءَ اللَّهُ). അതാണിവിടെ ഉദ്ദേശ്യം." (outer bracket never closed):
   "(More explanation can be seen in Al-A'raf. **إن شاء الله** (if Allah wills). That is" → "(More explanation can be seen in Al-A'raf (**إن شاء الله** (if Allah wills)). That is". The gloss "(if Allah wills)" follows part 03's practice.

### Dropped small words / meaning

5. Verse 25 (verses.json), സന്തോഷമറിയിക്കുകയും ചെയ്യുക (the -ഉം of وَبَشِّرِ; the word table has "and you give glad tidings"):
   "(O Prophet,) give glad tidings" → "(O Prophet,) **and** give glad tidings".
6. p. 213 hadith, എല്ലാവരും അതതിൽ നിത്യവാസികളായിരിക്കും (അതതിൽ = "in each one's own"):
   "all will be permanent dwellers in it." → "all will be permanent dwellers in their respective places."
7. p. 212, താരതമ്യം ചെയ്തുകൂടാത്തതാകുന്നു ("must not be compared"); "None of them must be compared" can be read as "need not":
   "None of them must be compared with worldly things." → "None of them is to be compared with worldly things."
8. p. 212, ഇവിടെ അതുകൊണ്ട് വിവക്ഷ ഭാര്യമാരാണെന്നാണ് വ്യക്തമാവുന്നത്. The English read അതുകൊണ്ട് only as "therefore"; in the author's usage (X കൊണ്ട് വിവക്ഷ / ഉദ്ദേശ്യം) it more likely means "by it". Not certain, so made a DOUBT:
   "Therefore what becomes clear here is that what is meant is wives." → "What becomes clear is that what is meant by it here is wives. *[DOUBT: …]*" (see open doubt 1).
9. Word table, verse 25, مِن ثَمَرَةٖ (ഫല(പഴ)ത്തിൽനിന്ന്): "(produce)" does not render പഴം; made consistent with the commentary's "ripe fruit" for പഴവർഗങ്ങൾ:
   "from fruit (produce), any fruit" → "from fruit (ripe fruit), any fruit".

No dropped sentences, misplaced footnotes, reversed negations, tense errors or misplaced page markers were found.

## Checked and left as they are

- **TN on p. 209 (بسور).** At 300 dpi the image prints فَأْتُوا بِسُوَرٍ مِنْ مِثْلِهِ (plural); the TN is correct, and the Arabic is given from verse 23.
- **TN on p. 209 (unclosed quotation).** The scholar's quotation opens before ക്വുർആനെപ്പോലെ and is never closed; correct.
- **Misprints translated by evident meaning** (no TN): വിഗ്രങ്ങൾ (p. 210, for വിഗ്രഹങ്ങൾ, "idols"), പ്രസ്താവിച്ചതുപേലെ (p. 215, for പോലെ). The meaning is not in question.
- **Verse 24** "and you will not (ever) do it, indeed": the English needs an object after "do"; the author's own bracket "(അതു)" in the first clause supports "it". Left (same in the word table).
- **"there Allah states decisively"** (p. 208, അതാ … തീർത്തു പറയുന്നു): literal rendering of അതാ; left.
- **"(who are without obedience)"** (verse 26): the author's bracket (അനുസരണമില്ലാത്ത) stands before തോന്നിയവാസികളെ; English word order puts it after "the wayward". Acceptable.
- **Group markers** *[Verses 23–24]*, *[Verse 25]*, *[Verses 26–27]*: **not the author's words**; navigation aids kept as in parts 01–03. They match the author's groups on the images (panels on pp. 207, 211, 213). See the note in part 02's `check.md`.
- `part.json` verses "23-27", pages "207-216", PDF pages "36-45": correct.

## Open doubts for the reviewer

1. **ഇവിടെ അതുകൊണ്ട് വിവക്ഷ** (p. 212, azwaj paragraph). New DOUBT (correction 8): "what is meant by it here" or "therefore, what is meant here". The sense (wives) is the same.
2. **Earlier open doubts still apply** (not in this part): ലക്ഷ്യം (parts 01–02), the hadith abbreviations (part 01), പതിച്ചവരാണവർ (part 02), വേദവാദികൾ and അമറാത്തി (part 03), and the group markers (part 02).

## New terms (not in the glossary; used consistently in this part)

Includes the translator's list. Flagged for Rizwin to confirm:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| വെല്ലുവിളി | — | challenge |
| അമാനുഷികത | i'jaz (اعجاز) | superhuman nature |
| നരകം / നരകാഗ്നി | al-nar (النار) / jahannam | Hell / the fire of Hell |
| സ്വർഗം / സ്വർഗങ്ങൾ | jannah / jannat (جنات) | Paradise / Paradises |
| ഇണകൾ | azwaj (أزواج) | mates |
| നിത്യവാസികൾ | khalidun (خالدون) | permanent dwellers |
| തോന്നിയവാസികൾ / ഫാസിക്വുകൾ | al-fasiqun (الفاسقين) | the wayward / fasiqs |
| വഴിപിഴവിലാക്കുക | adalla (أضل) | lead into error |
| നേർമാർഗം / നേർവഴി | — | the straight way / the right path |
| ഉത്തരവ് | 'ahd (عهد) | order |
| കരാർ | — | pact |
| കൽപന | — | commandment |
| ഉടമ്പടി | — | covenant |
| ആജ്ഞ | — | command |
| നഷ്ടക്കാർ | al-khasirun (الخاسرون) | the losers |
| സൂക്ഷിച്ചുകൊള്ളുക (verse 24, the fire) | ittaqu (اتقوا) | guard against |
| സന്തോഷവാർത്ത / സന്തോഷമറിയിക്കുക | bashshir (بشر) | glad tidings / give glad tidings |
| യുക്തിന്യായങ്ങൾ | — | rational arguments |
| മുഅ്തസിലഃ | al-Mu'tazilah | Mu'tazilah |
| വഹ്‌യ് | wahy (وحي) | wahy (with the author's "(divine revelation)") |
| പ്രകൃതിദൃഷ്ടാന്തങ്ങൾ | — | natural signs |
