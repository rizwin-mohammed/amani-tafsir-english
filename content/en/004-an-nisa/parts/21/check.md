# Check: An-Nisa' part 21 (verses 116–126)

Checked on 2026-11-25 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 190–199 (book pp. 1113–1122). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. Crops at 300 dpi: p. 1121, the v. 125 table gloss of حَنِيفٗاۗ ("നിഷ്ങ്കളനായ").
- **Boundaries.** Part 20 ends on p. 1113 with "… നേർമാർഗത്തിലാക്കുവാൻ ആർക്കും സാധ്യമല്ലതാനും." This part starts directly below it with "വിഭാഗം - 18" and the verse 116 panel. It ends on p. 1122 with "… പൂർണമായും സൂക്ഷ്മമായും അറിയുന്നവനുമാണവൻ." Directly after it come "വിഭാഗം - 19", a four-line introduction ("അനാഥകളെയും, സ്ത്രീകളെയും സംബന്ധിക്കുന്ന കാര്യങ്ങളായിരുന്നുവല്ലോ … അല്ലാഹുപറയുന്നു :-") that leads straight into the verse 127 panel, and that panel. They are rightly left for part 22, as parts 19 and 20 kept each section's introduction with the verses it introduces. Nothing between is missing. No footnotes in this part.
- Files: `part.json`, `verses.json` (verses 116–126), `words.json` (115 entries: 116: 13; 117: 6; 118: 7; 119: 17; 120: 5; 121: 6; 122: 17; 123: 12; 124: 11; 125: 15; 126: 6), `commentary.md`.
- Groups: "### Section – 18" (p. 1113) | *[Verse 116]* (panel, table and commentary p. 1113, commentary p. 1114) | *[Verses 117–121]* (panels pp. 1114–1115, table pp. 1115–1116, commentary pp. 1116–1118) | *[Verse 122]* (panel p. 1118, table and commentary p. 1119) | *[Verses 123–124]* (panels and table p. 1119, table and commentary p. 1120, commentary p. 1121) | *[Verses 125–126]* (panels and table p. 1121, table and commentary p. 1122). Right.
- `[p. N]` markers: 1114, 1116, 1117, 1118, 1119, 1120, 1121, 1122. Page 1115 holds only panels and the table, so it has no marker. 1116, 1119, 1120 and 1122 each begin with the end of a word table, and the marker opens the group's commentary just below it (as parts 19 and 20). 1118 begins with point (3), and the marker stands before it. 1114, 1117 and 1121 stand where the page turns inside a sentence, at the word where the new page begins (1114 before "necessary", page begins ശ്യമായ; 1117 before "stones", page begins ല്ലുകളോ; 1121 before "be saved", page begins എങ്ങിനെ രക്ഷപ്പെടും). All checked against the printed turns; none needed moving.
- Every English sentence was compared with the Malayalam on the images, in order: v. 116 (11 and الله اعلم), vv. 117–121 (the paragraph of 15 with the two riwayahs and كما فى ابن كثير; 7; the paragraph of 9; points (1) 4, (2) 3, (3) 5, (4) 5; the closing paragraph of 2), v. 122 (3), vv. 123–124 (9; 5; 2), vv. 125–126 (4; 12). No sentence is missing and none is added.
- **Meaning** checked point by point: the 48th verse (فَقَدِ ٱفۡتَرَىٰٓ) against this one (فَقَدۡ ضَلَّ), and the reason by context (the People of the Scripture there, Ibn Ubairiq here); supplication as the marrow of worship; the Arabs' deities as angels and their female names; إِنَٰثٗا as lifeless things (Ibn 'Abbas) or every thing without life (Hasan); Iblis's oaths (7:16; 15:39; 38:82); "no one calls upon Iblis" and its answer; some worship the satans without idols; the slit ears of camels as a sign of offerings; "altering the creation of Allah" and its examples "from the sayings of the Prophet"; good deeds accepted only with true faith, and only those done for Allah's pleasure; the view drawn from 99:7 rejected; the Sahabis' fear and the Prophet's ﷺ comfort; the way of Ibrahim (a). Negatives, conditions and who does what are right.
- `verses.json` and every `words.json` gloss match the images, with the printed forms kept: "[ദേവികളെ] യല്ലാതെ" with a space, "ധിക്കാര ശീലനായ" (v. 117 panel) and "ധിക്കാരശീലനായ" (table); "ശപിച്ചിരിക്കുന്നു(അഥവാ ശപിക്കട്ടെ)!" (v. 118); "ചെയ്കയില്ലതാനും" (v. 120); "സത്യവാൻ(വേറെ)" (v. 122); "ഒരു കൈകാര്യ കർത്താവിനെയാകട്ടെ" (v. 123 panel) and "കൈകാര്യകർത്താവിനെ" (table); "സൽക്കർമങ്ങളിൽ നിന്ന്(വല്ലതും)" (v. 124); the stray stop after "[വിട്ടു കൊടുക്കുക]യും." (v. 125); no stop after "(ഒക്കെ)" at the panel break (v. 126). The one gloss that differed is correction 5.
- Word tables pp. 1113, 1115–1116, 1119, 1119–1120, 1121–1122: pairings checked by meaning, all in Quran order. Every `ar` is in its verse in `data/quran-uthmani.json` (`npm run check`: 1956 of 1956 An-Nisa' entries match).
- Honorifics: ﷺ is printed twice: p. 1116 ("നബിﷺ അരുൾ ചെയ്തിട്ടുള്ളതും") and p. 1121 ("നബിﷺ അവരെ സമാധാനിപ്പിച്ചതായും"). The English has 2 in the same places. "നബി വചനങ്ങളും" (p. 1117) and "നബിവചനങ്ങളിൽ" (p. 1118) have none printed and none in the English ("sayings of the Prophet"). (a): Adam (p. 1116); Ibrahim ×3 (p. 1122). (r): Ibn 'Abbas and Hasan (p. 1116); one (റ) after "Ahmad, Muslim, Tirmidhi, Nasa'i" (p. 1121). Right.
- Arabic: Quran quotations byte-exact from `data/quran-uthmani.json`: فَقَدِ ٱفۡتَرَىٰٓ إِثۡمًا عَظِيمًا (4:48), فَقَدۡ ضَلَّ ضَلَٰلَۢا بَعِيدًا (4:116), إِن يَدۡعُونَ مِن دُونِهِۦٓ إِلَّآ إِنَٰثٗا and إِنَٰثٗا, شَيۡطَٰنٗا مَّرِيدٗا and مَّرِيدٗا (4:117), لَّعَنَهُ ٱللَّهُۘ, لَأَتَّخِذَنَّ مِنۡ عِبَادِكَ (4:118), the two words of point (2), وَلَأٓمُرَنَّهُمۡ فَلَيُبَتِّكُنَّ ءَاذَانَ ٱلۡأَنۡعَٰمِ, وَلَأٓمُرَنَّهُمۡ فَلَيُغَيِّرُنَّ خَلۡقَ ٱللَّهِۚ (4:119), وَهُوَ مُؤۡمِنٞ, نَقِيرٗا (4:124), فَمَن يَعۡمَلۡ مِثۡقَالَ ذَرَّةٍ خَيۡرٗا يَرَهُۥ (99:7). The print's آذَانَ-الانعام (p. 1118) has a hyphen and ordinary spelling; the Quran words are taken from the data file, as every Quran quotation is. Earlier parts both keep and drop a pause sign at the end of a quoted phrase; the two kept here (ۘ, ۚ) are as in the data file. Hand-typed Arabic as printed, checked on the image: **الله اعلم** (p. 1114), **انثى بنى فلان**, **كما فى ابن كثير** (p. 1116).
- References as printed: "48-ാം വചനം" (pp. 1113–1114); "Su: Al-A'raf 16; Al-Hijr 39; Sad 82"; "Su: Saba' 41, and Ya-Sin 60"; "(17 : 62)", "(38 : 82)", "(7:16, 17)", "(15 : 39)"; "49-ാം വചനം" for نَقِيرٗا (p. 1121). The last is right: the meanings of qitmir, naqir and fatil are given in the commentary on verses 49–50 (An-Nisa' part 11, p. 1027), although the word نَقِيرًا itself stands in verse 53.
- **Mirrored as printed, without TN** (all confirmed on the images): the stray stop in "അഥവാ മലക്കുകളുടെ പ്രതിഷ്ഠകളാണ് തങ്ങളുടെ വിഗ്രഹങ്ങളെന്നായിരുന്നു. അവരുടെ സങ്കല്പം." (p. 1116), given as one sentence ("That is, their conception was that …"), the only sense; the quotation ‘അവർ അല്ലാഹുവിന് പുറമെ … പ്രാർഥിക്കുന്നില്ല, (p. 1116) opened and never closed; the stray stop in the v. 125 panel ("… to Allah. and has followed …"), as part 19 keeps stray stops; "അവരോട്" (p. 1119, "gave to them"), which refers to "these" (ഇവർ) by sense and needs no note.
- Subjectless Malayalam sentences (e.g. p. 1117 "… എന്നും വിശേഷിപ്പിച്ചശേഷം … ഓർമിപ്പിക്കുന്നു", the subject being Allah from the sentence before) are given in the passive ("After he has been qualified … a reminder is given …"). This adds no subject and keeps the sense; left as it is.
- Glossary: no glossary term occurs except Allah's names in the tables; none of കരുണാനിധി, രക്ഷിതാവ്, പ്രതിഫല ദിവസം.

## Corrections made (before → after)

### Arabic as printed (practice of part 19)

1. p. 1117 point (2): "**وَلَأُضِلَّنَّهُمۡ وَلَأُمَنِّيَنَّهُمۡ** ..... *[TN: the print has these two words in the reverse order, …]*" → "**وَلَأُمَنِّيَنَّهُمۡ وَلَأُضِلَّنَّهُمۡ** ..... *[TN: the print has these two words in this order; in the verse وَلَأُضِلَّنَّهُمۡ comes first, and the author's Malayalam rendering that follows has the order of the verse.]*". The image clearly prints وَلأُمَنِّيَنَّهُمْ first. Part 19 (correction 2, p. 1100) kept the words the author quoted (each word from the data file) and pointed out the difference in a TN; rule 7 says to give what is printed. The two-word quotation is below the 3-word threshold of `npm run check`, so it gives no warning.

### Word not rendered, and a missing stop (p. 1116)

2. "… usages and conceptions such as ‘deity, goddess, god, divine incarnation’ can be seen in all of them ‘They do not call upon …" → "… can moreover be seen in all of them. ‘They do not call upon …". The print has "കാണാവുന്നതാണ്താനും" (താനും was not rendered) and no stop before the new sentence 'അവർ …; the stop is added because the sense requires it, as part 20 joined or split such places by sense. The unclosed quotation is kept.

### Verse English

3. v. 126 (`verses.json`): "… what is in the earth (all) Allah is One who …" → "… (all). Allah is One who …". The panel prints the verse in two blocks with no stop after "(ഒക്കെ)"; the Malayalam stays as printed, the English gets the stop the two sentences need.
4. v. 125 (`verses.json`): "in the state of one upright of mind" → "in the state of one upright-minded" (ഋജുമാനസൻ "upright-minded" in Al-Baqarah 21, Ali 'Imran 07 and this part's own table).

### Word table as printed

5. v. 125 table, حَنِيفٗاۗ: "ഋജുമാനസനായിട്ട്, നിഷ്കളങ്കനായ നിലയിൽ" → "ഋജുമാനസനായിട്ട്, നിഷ്ങ്കളനായ നിലയിൽ" (300 dpi crop and text layer: ഷ്, then ങ്ക, then ള; the file had silently corrected it). A misprint of an obvious word (നിഷ്കളങ്കനായ), kept without TN as part 19 keeps സത്യവിശ്വസികളുടെ; the English "in the state of one who is sincere" is unchanged.

### DOUBT added

6. p. 1122 "പ്രവാചക കുടുംബത്തിലെ പ്രത്യേക സ്ഥാനപതി": "a special dignitary" → "a special dignitary *[DOUBT: സ്ഥാനപതി usually means "ambassador, envoy"; here it is taken in its literal sense "holder of a (high) position", i.e. "dignitary". The option is "special envoy".]*".

### Layout

7. `commentary.md`: a single line break inside the paragraph before "That some Sahabis …" (p. 1120, one printed paragraph) joined into the same line.

No dropped sentences, reversed negations, changed numbers or added honorifics were found.

## Points the translator asked about

1. **TN p. 1117 (reversed words).** Confirmed reversed in the print; Arabic now as printed with the TN (correction 1).
2. **DOUBT p. 1118 ആധാരം.** Printed clearly so. Kept: "support" (its usual sense, "basis, support") or "abode, refuge" (beside the verse's مَأۡوَىٰهُمۡ); the image does not settle it.
3. **Stray mid-sentence stop p. 1116.** Confirmed; one sentence is right (see Mirrored).
4. **Missing stop / unclosed quote p. 1116.** Confirmed; stop added, quote left open (correction 2).
5. **Stray stops in verses.json v. 125/126.** v. 125 has a stray stop, mirrored. v. 126 has no stop at all (a missing one at the panel break); stop added in the English only (correction 3).
6. **آذَانَ-الانعام p. 1118.** Quran words from the data file: right.
7. **Quran quotations and pause signs.** All byte-exact (see Arabic).
8. **Non-Quran Arabic.** الله اعلم, انثى بنى فلان, كما فى ابن كثير confirmed as printed.
9. **"49th verse" for naqir.** Right (see References).
10. **Subjectless sentences in the passive.** Acceptable (see above).
11. **ﷺ count 2.** Confirmed.
12. **"അവരോട്" p. 1119.** Printed so; "to them" is right.
13. **Page markers.** All checked against the printed turns; the four "start of commentary" markers stand on pages that begin with the end of a table, so they are right. None moved.
14. **New terms.** Checked by grep (see below); one aligned (correction 4), one DOUBT added (correction 6).

## Open doubts for the reviewer

- p. 1118 ആധാരം: "support" or "abode, refuge".
- p. 1122 സ്ഥാനപതി: "dignitary" or "envoy".
- TN p. 1117: the author quotes وَلَأُمَنِّيَنَّهُمۡ وَلَأُضِلَّنَّهُمۡ in the reverse of the verse's order.
- Earlier open doubts still apply.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| കൈകാര്യ കർത്താവ് / കൈകാര്യകർത്താവ് | wali (v. 123) | manager of affairs (new; കൈകാര്യക്കാരൻ "manager" as Al-Baqarah 43, 50, An-Nisa' 15, also on p. 1119) |
| കാര്യകർത്താവ് | wali (v. 119) | one in charge of affairs (as Ali 'Imran 13, An-Nisa' 10) |
| വ്യാമോഹം / വ്യാമോഹിപ്പിക്കുക | amani, yumanni | delusion / delude (as Al-Baqarah 12 "delusions") |
| ധിക്കാരി / ധിക്കാര ശീലൻ | marid | insolent / habitually insolent (new; ധിക്കാരം "defiance" or "arrogance" in Al-Baqarah tables) |
| (ഉറ്റ) ചങ്ങാതി | khalil | (intimate) friend (new; ചങ്ങാതിത്തം "friendship" in Al-Baqarah 42, ചങ്ങാതി "comrade" in An-Nisa' 09 for al-sahib) |
| ദേവത / ദേവി / ദേവൻ | — | deity / goddess / god (new) |
| പ്രതിഷ്ഠ | — | installed image (new) |
| സ്ഥാനപതി | — | dignitary, with DOUBT (new) |
| സങ്കേതം / സങ്കേതസ്ഥാനം | ma'wa | resort / place of resort (as Al-Baqarah 19, Ali 'Imran 16, 17) |
| ഋജുമാനസൻ | hanif | upright-minded (as Al-Baqarah 21, Ali 'Imran 07) |
