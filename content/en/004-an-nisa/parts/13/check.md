# Check: An-Nisa' part 13 (verses 60–65)

Checked on 2026-11-25 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 118–126 (book pp. 1041–1049). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. 300 dpi crops: p. 1042 word table "കേസ്കൊടുക്കുവാൻ"; p. 1046 word table "കണ്ടെത്തുകതന്നെ"; p. 1049 the hadith Arabic. 600 dpi crops: p. 1049 hadith lines (a), (b), (c), (d).
- **Boundaries.** Part 12 ends on p. 1041 with "… അടുത്ത വചനങ്ങളും കൂടി ഇതോടൊപ്പം മനസ്സിരുത്തുക:-". This part starts directly below it with "വിഭാഗം - 9" and the verse 60 panel; the ta'bir footnote at the foot of p. 1041 belongs to part 12 (its marker is in part 12's hadith (10)). It ends on p. 1049 with "… അനുകരിക്കുകയും വേണമെന്നത്രെ ഉമർ(റ) പറഞ്ഞതിന്റെ താൽപര്യം.", directly above the verse 66 panel. Nothing between is missing. No footnotes in this part.
- Files: `part.json`, `verses.json` (verses 60–65), `words.json` (80 entries: 60: 19; 61: 11; 62: 11; 63: 11; 64: 16; 65: 12), `commentary.md`.
- Groups: "### Section – 9" (വിഭാഗം - 9, p. 1041) | *[Verses 60–63]* (panels pp. 1041–1042, table pp. 1042–1043, commentary pp. 1043–1045) | *[Verses 64–65]* (panels pp. 1045–1046, table and commentary p. 1046, commentary to p. 1049). p. 1042 holds only panels and table, so there is no `[p. 1042]` marker; the `[p. 1043]` and `[p. 1046]` markers open the commentary of each group (the tables on those pages are in `words.json`). Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images (after corrections 2–3), including "(നോക്കി)ക്കണ്ടില്ലേ?", "[ദുർമൂർത്തിയുടെ]", "(കേസ്സ് കൊടുത്ത്)", "[ത്വാഗൂത്ത്]", "കൽപിക്കപ്പെട്ടിട്ടുണ്ട് താനും;" (spaced in the panel) (v. 60); "കപട വിശ്വസികൾ" (v. 61); "(ചെയ്താൽ എങ്ങിനെയിരിക്കും)?!" (v. 62); "അറിയാവുന്നവരത്രെ", "[മനസ്സിൽ]" (v. 63); "നിന്റെയടുക്കൽ", "കണ്ടെത്തുക തന്നെ" (spaced in the panel) (v. 64); "(നബിയേ,)എന്നാൽ", "മനസിൽ", "ഒതുങ്ങുകയും(ചെയ്യുന്നത് വരേക്കും)" with no final stop (v. 65). Table: "കൽപിക്കപ്പെട്ടിട്ടുണ്ട്താനും", "മുമ്പ്ചെയ്തു", "അടുക്കൽവരുകയും" (joined), "എങ്ങിനെ (യായിരിക്കും)", "ഒരു(തട്ടി)തിരിയൽ", "ഉത്തരവു(സമ്മത) പ്രകാരം", "വിധി കർത്താവാക്കുന്നതുവരെ" (spaced). "കണ്ടെത്താതെ (അനുഭവിക്കാതെ)യും" and "കീഴൊതുങ്ങുക (സമ്മതിക്കുക)യും" break at a line end before the bracket; the space is kept, acceptable.
- **Word tables pp. 1042–1043 and 1046.** Pairings checked by meaning and text-layer order, all in Quran order. Every `ar` is in its verse in `data/quran-uthmani.json`.
- `[p. N]` markers 1043–1049. Page turns: "more than once *[p. 1044]* before" (പ്രാവശ്യം / മുമ്പു), "go to Taghut and *[p. 1045]* seek judgement" (ചെന്നു / വിധിതേടുവാൻ), "borne in mind here. *[p. 1048]* There is, surely," (p. 1048 begins "സമുദായത്തിന്റെ"), "see them too *[p. 1049]*" (വചനങ്ങൾ / കൂടി കാണുക). p. 1046's commentary begins after the v. 65 panel and table, p. 1047 at a new paragraph. Right.
- Honorifics: ﷺ printed 20 times in the Malayalam (p. 1045 ×3, p. 1046 ×1, p. 1047 ×8, p. 1048 ×4, p. 1049 ×4) plus once in the Arabic of hadith (d); the English has 21. "തിരുമേനി" alone → "the noble one" (pp. 1047, 1049 (b)). "മുഹമ്മദിന്റെ" (p. 1043), "മുഹമ്മദിനെ" (p. 1049 (c)) and "ചില നബി വചനങ്ങൾ" (p. 1048) have no ﷺ printed and none was added. (r) printed 3 times ('Abis, 'Umar ×2); the English has 3. Abbreviations as printed: (ബു: മു,) → (Bu: Mu,), (ശറഹുസ്സുന്നഃ) → (Sharh al-Sunnah), (മു.) → (Mu.), (ബു; മു.) → (Bu; Mu.).
- Numbers and references: Al-Baqarah : 256; the 61st verse; the 59th verse; the six points (Firstly … a sixth); hadiths (a)–(d). Right as printed.
- Arabic: every Quran quotation in the commentary is byte-exact from `data/quran-uthmani.json` (فِيٓ أَنفُسِهِمۡ, قَوۡلَۢا بَلِيغٗا from 4:63; وَٱسۡتَغۡفَرَ لَهُمُ ٱلرَّسُولُ from 4:64; فَلَا, وَرَبِّكَ, لَا يُؤۡمِنُونَ حَتَّىٰ, ثُمَّ لَا يَجِدُواْ, وَيُسَلِّمُواْ, تَسۡلِيمٗا from 4:65). Hand-typed Arabic as printed: **طَاغُوت** (p. 1043), **والله المستعان** (p. 1044), **وَأَسْتَغْفَرْتَ لَهُمْ**, **الله اعلم** (p. 1048), the four hadith lines (p. 1049; correction 4 and the open doubt).
- **Mirrored as printed, without TN** (as earlier parts; all confirmed on the images): കപട വിശ്വസികൾ (v. 61 panel, p. 1042) and കപടവിശ്വസികളെപ്പറ്റി (commentary, p. 1046) → "hypocrites"; p. 1045 comma "അപരിചിതരൊന്നുമല്ല അവർ, പെട്ടെന്ന്"; p. 1048 യഥാർഥ്യം, comma "എന്നർഥം, രണ്ടാമതായി"; p. 1049 "(ബു: മു,)", hadiths (b) and (c) have no opening quote, comma "നീ, ഉപകാരം"; v. 65 panel no final stop. p. 1047 "എനി," is taken as ഇനി ("Now,"), as parts 09–12.
- Glossary: കരുണാനിധി "the Ever-Merciful" (v. 64), ﷺ, (r). റബ്ബ് is "Rabb", as earlier parts.

## Corrections made (before → after)

### Additions in round brackets that are not printed

1. v. 62 panel "സത്യം ചെയ്തു (പറഞ്ഞു) കൊണ്ട്": "swearing (and saying) by the name of Allah" → "swearing (saying) by the name of Allah" (as the table, and as part 08's practice for words added inside the author's brackets).

### Malayalam as printed (word table)

2. v. 60 أَن يَتَحَاكَمُوٓاْ: "അവർ കേസ് കൊടുക്കുവാൻ, …" → "അവർ കേസ്കൊടുക്കുവാൻ, …" (300 dpi: clearly joined; the text layer's space is wrong).
3. v. 64 لَوَجَدُواْ: "അവർ കണ്ടെത്തുക തന്നെ ചെയ്തിരിക്കുന്നു" → "അവർ കണ്ടെത്തുകതന്നെ ചെയ്തിരിക്കുന്നു" (300 dpi: the line is letter-spaced; the gap between ക and ത is the same as between the letters, while the word gaps are much wider. The panel has "കണ്ടെത്തുക തന്നെ" spaced, kept there).

### Arabic as printed

4. p. 1049 hadith (a), 600 dpi: **اَلَيْه** → **الَيْه** (no mark on the alif; fatha on the lam), **مِنْ** → **منْ** (no kasra under the mim). The TN's "(after مِنْ)" changed to "(after منْ)". Neither وَلَده has a kasra (settled).

### DOUBT reworded

5. p. 1049 the translator's vowel-mark DOUBT: rewritten to state what the 600 dpi crops settled (correction 4) and keep only what they do not (see open doubts).

No dropped sentences, reversed negations, changed conditions, number errors, voice changes or added honorifics were found.

## Points the translator asked about

1. **Hadith vowel marks (DOUBT)**: partly settled (correction 4); the rest stays as a DOUBT.
2. **TNs.** p. 1045 ഉരുദ്ദേശ്യത്തോടു is clear on the image and is not a word; the rendering "ill intention" depends on reading it as ദുരുദ്ദേശ്യത്തോടു (set against സദുദ്ദേശ്യത്തോടു in the same sentence), so the TN shows the reader what is printed. Kept, as part 05's TNs for ഗൗരപൂർവ്വം and വങ്ങും (non-words whose reading carries the rendering); misspellings of an obvious word (ഭിഷണി-, വിരുപ്പിൽ, മാഹാന്മാർ) were mirrored without TN in parts 08 and 10, and the slips in point 3 are treated that way. Hadith (a) وَلَده for وَالِدِه: kept; it changes an Arabic word (part 08's TN for الصَبَة), and the Malayalam rendering "his parents" confirms it.
3. **Slips mirrored without TN**: all confirmed (see above).
4. **Honorifics, word count, line breaks**: confirmed, except the two joined words (corrections 2–3). v. 64 gloss لَوَجَدُواْ "they have indeed found": kept; it mirrors the printed perfect ചെയ്തിരിക്കുന്നു (the panel has the conditional ചെയ്യുമായിരുന്നു "would have found").
5. **Renderings**: checked against earlier parts by grep. ദുർമൂർത്തി "the evil deity" and ത്വാഗൂത്ത് "Taghut" as Al-Baqarah part 43; "(taghut)" for the bracketed transliteration after طَاغُوت as An-Nisa' part 11. തവ്വാബ് gloss "the One who greatly accepts repentance" as Al-Baqarah 06, 09, 24 and An-Nisa' 05. ശുപാർശ "intercession" as Al-Baqarah 08. കീഴൊതുങ്ങുക: earlier tables have "be submissive"; here "submit / becoming submissive", which agrees. വിധികർത്താവ്: part 08 has "arbiter" for the hakam of 4:35 (a mediator between spouses); here it is the one whose judgement is binding (يُحَكِّمُوكَ), so "judge" is right and the two are kept apart. The others (babble, utter, hypocrites / hypocritical Muslims, seek judgement, hardship, (I swear!), sentence of oath, evil powers, interested parties, grave, secular state, Sharh al-Sunnah, the noble Rasul ﷺ, the noble Prophet ﷺ) are faithful and used consistently; listed under New terms.

## Open doubts for the reviewer

- **p. 1049 hadith vowel marks** (inline DOUBT): (a) whether a fatha stands over the ل of وَلَده / وَوَلَده; (b) يُوْمَنُ or يُوْمِنُ, هَوِيَهُ, جَئْتُ; (c) رَضِيَ or رَضِى / رَضِي, دينًا or دَينًا, the mark above the و of وَبِمُحَمَّد; (d) رَأَيْتُ or رَأَيْتَ, وَيَقُولُ or وَيُقُولُ, a possible fatha on بن in عمربن. The consonants are certain; the marks are too small to read with certainty even at 600 dpi.
- No other inline DOUBT markers in this part. Earlier open doubts still apply.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ജൽപിക്കുക | za'ama | babble |
| ഉരുവിടുക | — | utter |
| ത്വാഗൂത്ത് / ദുർമൂർത്തി | taghut | Taghut / the evil deity (as Al-Baqarah 43) |
| കപടവിശ്വാസികൾ / കപട മുസ്‌ലിംകൾ | munafiqun | hypocrites / hypocritical Muslims |
| വിധികർത്താവ് (വിധികർത്താവാക്കുക) | tahkim | judge (make the judge, appoint as judge) |
| വിധിതേടുക | tahakum | seek judgement |
| കീഴൊതുങ്ങുക / കീഴൊതുക്കം / ഒതുങ്ങൽ | taslim | submit / submission / yielding |
| വിഷമം | haraj | hardship |
| (സത്യം!) / സത്യവാചകം | qasam | (I swear!) / sentence of oath |
| ദുശ്ശക്തികൾ / പൈശാചിക ശക്തികൾ | — | evil powers / satanic powers |
| തൽപരകക്ഷികൾ | — | interested parties |
| ശുപാർശ ചെയ്യുക | shafa'ah | intercede |
| ക്വബ്ർ | qabr | grave |
| മതേതര രാഷ്ട്രം | — | secular state |
| ശറഹുസ്സുന്നഃ | Sharh al-Sunnah | Sharh al-Sunnah |
| റസൂൽ തിരുമേനി / നബി തിരുമേനി | — | the noble Rasul ﷺ / the noble Prophet ﷺ |
