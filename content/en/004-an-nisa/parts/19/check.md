# Check: An-Nisa' part 19 (verses 101–104)

Checked on 2026-11-25 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 170–179 (book pp. 1093–1102). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. Crops at 300 dpi: p. 1095 the quote mark before "അഹ്മദ്"; p. 1098 both **صَلاَةُ الخَوْف** and the table gloss "സത്യവിശ്വസികളുടെ".
- **Boundaries.** Part 18 ends on p. 1093 with "… അതിശയോക്തിയോ, ന്യായക്കുറവോ ഒന്നും തോന്നുകയില്ല തന്നെ." This part starts directly below it with "വിഭാഗം - 15" and the verse 101 panel (p. 1093). It ends on p. 1102 with "… ചുണയും നിങ്ങൾക്കുണ്ടായിരിക്കേണ്ടതുണ്ടല്ലോ എന്ന് താൽപര്യം." Directly after it come "വിഭാഗം - 16" and its introduction (the Ansari's stolen coat of mail, Tu'mah / Bashir and the Jew), which introduces "the verses that follow" and gives their occasion of revelation; it belongs with verses 105ff. and is rightly left for part 20, as part 18 began Section 14 with its own group and part 17 kept Section 13's introduction with verses 92–93. Nothing between is missing. No footnotes in this part.
- Files: `part.json`, `verses.json` (verses 101–104), `words.json` (90 entries: 101: 14; 102: 47; 103: 15; 104: 14), `commentary.md`.
- Groups: "### Section – 15" (p. 1093) | *[Verse 101]* (panel and table p. 1093, commentary pp. 1093–1095) | *[Verses 102–103]* (v. 102 panel pp. 1095–1096, table pp. 1096–1097, v. 103 panel p. 1097, table and commentary pp. 1098–1101) | *[Verse 104]* (panel, table and commentary p. 1101, commentary p. 1102). Right.
- `[p. N]` markers: 1094, 1095, 1098, 1099, 1100, 1101, 1102. Pages 1096 and 1097 hold only panels and tables, so they have no marker. 1098 opens the vv. 102–103 commentary below the v. 103 table; 1099 and 1100 open the first paragraph on the page; 1094, 1095, 1101 and 1102 stand where the page turns inside a sentence, at the word where the new page begins. Right.
- Every English sentence was compared with the Malayalam on the images, in order: v. 101 commentary (intro 3; the qasr definition 3; kinds (1) 3 and (2) 4 with the Ibn 'Umar report; the distance paragraph 9 and والله اعلم; the Ibn al-Qayyim quotation 4; the "no wrong" paragraph 11 and الله اعلم; the Ya'la report and the 3 sentences after it; the closing paragraph 2), vv. 102–103 (paragraphs of 9, 7 and الله اعلم, 6, the "Look:-" paragraph of 5, points (1)–(7), the Ibn Mas'ud, Jabir, Buraidah and 'Abdullah ibn Shaqiq reports), v. 104 (11). No sentence is missing and none is added.
- **Rulings and numbers** checked point by point against the images: qasr is of two kinds: (1) the prayer of fear (صلوة الخوف) with reduced rak'ahs, without facing the qiblah, without completing ruku' and sujud, walking and running; (2) four rak'ahs prayed as two; the first established by the Quran (state of fear), the second by the sunnah (state of peace); no evidence in the sunnah fixing a distance; differing opinions; no fixed distance, but qasr only for what is ordinarily called a journey, not for nearby places and daily needs; Ibn al-Qayyim: no fixed distance for qasr or for omitting the fast, tayammum likewise, the one-, two- and three-day riwayahs not firmly established; the Prophet ﷺ made qasr on all journeys and is not proved to have completed four; many held qasr obligatory, the majority not obligatory, making qasr is the best without doubt; Al-Baqarah 158 for "no wrong" on the obligatory sa'y; the Ya'la hadith ("a sadaqah … accept His sadaqah"); the verse is about the second kind. Prayer of fear: the army leaders lead the prayer, in jama'ah even in battle; the verses do not describe the form during close fighting; Al-Baqarah verse 239 for that (on foot or mounted, walking, without completing ruku' and sujud); the army in two, each section one rak'ah with the Prophet ﷺ, the rest singly, together or by turns; more than one form in the hadiths; weapons borne, not needed in rain or sickness, vigilance kept; after peace, the prayer in its proper order, in jama'ah. All conditions, numbers and negatives are right.
- `verses.json` and every `words.json` gloss match the images, including "(സത്യവിശ്വാസികളേ)നിങ്ങൾ" with no space (v. 101); "[നടത്തി]ക്കൊടുക്കുകയും", "ആഞ്ഞടിനടത്താമായിരുന്നു" with no space, "[അതിൽ വീഴ്ച വരുത്തിക്കൂടാ.]" (v. 102); "എനി" (v. 103); "വേദനഅനുഭവിച്ചുകൊണ്ടിരിക്കുന്നുവെങ്കിൽ" with no space, "(ചില)ത്" (v. 104). Tables: "തെറ്റില്ലതാനും, കുറ്റവുമില്ല", "ചെയ്‌വിൻ", "(എനി - അപ്പോൾ)", "സത്യവിശ്വസികളുടെ" (300 dpi: no ാ; the v. 103 panel prints സത്യവിശ്വാസികളുടെ), "അവർ വേദന അനുഭവിക്കുന്നു. അവർക്ക് വേദനയുണ്ടാകുന്നു" with the printed stop, "അഗാധജ്ഞാനി, യുക്തിമാൻ".
- Word tables pp. 1093, 1096–1097, 1098, 1101: pairings checked by meaning and table order, all in Quran order. Every `ar` is in its verse in `data/quran-uthmani.json` (`npm run check`: 1708 of 1708 An-Nisa' entries match).
- Honorifics: ﷺ is printed 26 times: p. 1094 6 (the sunnah, Muhammad the Prophet, Rasul ×2, the sunnah, Ibn al-Qayyim's quotation); p. 1095 4; p. 1098 7 (the first one after the broken glyphs); p. 1099 5; p. 1100 1 (Ibn Mas'ud's question); p. 1101 3 (Jabir, Buraidah, 'Abdullah ibn Shaqiq). The English has 26 in the same places. "(നബിയേ)" in the v. 102 panel, "തിരുമേനി പറഞ്ഞു" (pp. 1095, 1100, 1101), "തിരുമേനി സ്വീകരിച്ചിരുന്നത്" (p. 1099) and "അവിടുന്ന്" have none printed and none in the English. (r): Ibn 'Umar (p. 1094), Ibn al-Qayyim (p. 1094), Ya'la ibn Umayyah, 'Umar ×2, Muslim (p. 1095), Ibn Mas'ud ×2, Jabir, Buraidah, 'Abdullah ibn Shaqiq (pp. 1100–1101). Right.
- Arabic: Quran quotations byte-exact from `data/quran-uthmani.json` (4:102 وَلۡيَأۡخُذُوٓاْ أَسۡلِحَتَهُمۡۖ, وَلۡيَأۡخُذُواْ حِذۡرَهُمۡ ×2, وَلَا جُنَاحَ عَلَيۡكُمۡ إِن كَانَ بِكُمۡ أَذٗى, إِنَّ ٱللَّهَ أَعَدَّ لِلۡكَٰفِرِينَ; 4:103 فَإِذَا قَضَيۡتُمُ ٱلصَّلَوٰةَ, فَإِذَا ٱطۡمَأۡنَنتُمۡ فَأَقِيمُواْ, إِنَّ ٱلصَّلَوٰةَ كَانَتۡ; and وَخُذُواْ حِذۡرَكُمۡ in the new TN). Hand-typed Arabic as printed, checked on the image: **قَصْر** ×2 (pp. 1093, 1094), **صلوة الخوف** (p. 1094), **والله اعلم** and **زادالمعاد** (p. 1094, the latter with no space), **ليس عليكم جناح** (p. 1094), **الله اعلم** (pp. 1095, 1098), **صَلاَةُ الخَوْف** ×2 (p. 1098, 300 dpi: fatha on ص and on لا, damma on ة, fatha on خ, sukun on و).
- References as printed: "(Na; Ja; Ba; Ibn Hibban)" (ന; ജ; ബ; ഇബ്നു ഹിബ്ബാൻ), "(Al-Baqarah : 158)", "(زادالمعاد)", "Suratul Baqarah verse 239", "(Bu; Mu.)", "(Mu)", "(A; Ti; Na; Ja.)", "(Ti.)". Right.
- **Mirrored as printed, without TN** (all confirmed on the images): the Ibn 'Umar answer opening ‘ and closing ” (p. 1094); 'Umar's report on p. 1095 opening ‘ twice and closed once, by a ‘-shaped mark after "കൊള്ളുവിൻ." (300 dpi), given as ’; the quoted verse "‘നീ അവരിൽ … ചെയ്താൽ" not closed (p. 1098); "മനസ്സലാക്കാം" (p. 1095), "നമസ്കാരത്തിലായിതുകൊണ്ട്" (p. 1099), "സത്യവിശ്വസികളുടെ" (v. 103 table), "എനി" (v. 103 panel and table) (misspellings of obvious words, translated by their sense); the stop after the fragment "ഇതരഗ്രന്ഥങ്ങളിൽ കാണാറുള്ളത് പോലെ." (p. 1099), kept as "As is usually seen in other books.", as part 18 keeps stray stops.
- Glossary: കരുണാനിധി and the other glossary terms do not occur; അഗാധജ്ഞൻ / അഗാധജ്ഞാനി "the Profoundly Knowing" and യുക്തിമാൻ "the Sagacious" as Al-Baqarah 06, 20, 36.

## Corrections made (before → after)

### TN removed (broken glyphs)

1. p. 1098 "\ _ ŋﷺയെ അഭിമുഖീകരിച്ചുകൊണ്ട്": the TN on the broken glyphs of നബി was removed; the English keeps "addressing the Prophet ﷺ". The intended word is certain (text layer നബി, and the verse addresses the Prophet), and An-Nisa' part 10 (garbled glyphs, p. 1021) and part 12 (dropped ണ്ട glyph, p. 1034) use no marker in such a case.

### TN added (Arabic quoted from elsewhere in the verse)

2. p. 1100 point (3) "എന്നാലും ശത്രുക്കളെക്കുറിച്ചുള്ള ജാഗ്രത കൈവിടരുത്. (وَلْيَأْخُذُوا حِذْرَهُمْ) എന്ന കാര്യം പ്രത്യേകം ഓർമിപ്പിച്ചിരിക്കുന്നു.": the print clearly has حِذْرَهُمْ. A TN now says that these words come from the earlier part of verse 102 (the second section), and that the words following the exemption for rain and sickness are وَخُذُواْ حِذۡرَكُمۡ (from the data file). The Arabic stays as printed; the TN only points out the printed difference, as rule 7 asks.

### Rendering aligned with earlier parts

3. v. 101 (`verses.json`) "പ്രത്യക്ഷമായ ശത്രു": "a manifest enemy" → "an open enemy" (Al-Baqarah 168 and 208 "പ്രത്യക്ഷ ശത്രു" "an open enemy"); table مُّبِينٗا "സ്പഷ്ടമായ, പ്രത്യക്ഷമായ": "clear, manifest" → "manifest, open" (പ്രത്യക്ഷമായ "open" in Al-Baqarah 26, 33 and Ali 'Imran 18; സ്പഷ്ടമായ "manifest" in An-Nisa' 11).

### Layout

4. `commentary.md`: a double blank line before the Ibn Mas'ud paragraph reduced to one (no change on the page).

No dropped sentences, reversed negations, changed numbers or added honorifics were found.

## Points the translator asked about

1. **TN p. 1098 (broken glyphs of നബി).** Confirmed on the image; TN removed (correction 1).
2. **Quote-mark mismatches pp. 1094, 1095, 1098.** Confirmed and mirrored (see above).
3. **Mirrored slips** മനസ്സലാക്കാം, സത്യവിശ്വസികളുടെ, എനി, നമസ്കാരത്തിലായിതുകൊണ്ട്, the fragment with a stop on p. 1099: all confirmed and kept.
4. **p. 1100 وَلۡيَأۡخُذُواْ حِذۡرَهُمۡ.** Printed so; TN added (correction 2).
5. **Page markers, ﷺ count (26), hand-typed Arabic, Quran quotations, references.** Confirmed (see above).
6. **Section 16 and its introduction.** Rightly left for part 20 (see Boundaries).
7. **New terms.** Checked by grep (see below). സാമഗ്രികൾ "materials" and ഉപകരണം "means" follow An-Nisa' part 18 (v. 102 table "വിഭവം, സാമഗ്രികൾ, ഉപകരണം" "goods, materials, means"); Al-Baqarah 40, Ali 'Imran 20 and An-Nisa' 16 have സാമഗ്രി(കൾ) "goods". Kept as part 18, the reviewer may wish to settle one rendering.

## Open doubts for the reviewer

- TN p. 1100: the author quotes وَلۡيَأۡخُذُواْ حِذۡرَهُمۡ where the words after the rain-and-sickness exemption are وَخُذُواْ حِذۡرَكُمۡ.
- For the reviewer's preference: സാമഗ്രികൾ "materials" (as An-Nisa' 18) against "goods" (Al-Baqarah 40, Ali 'Imran 20, An-Nisa' 16).
- Earlier open doubts still apply.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ക്വസ്വ്ർ / ചുരുക്കി നമസ്കരിക്കൽ | qasr (قَصْر) | qasr / praying shortened (new) |
| ഭയത്തിന്റെ നമസ്കാരം / ഭയപ്പെട്ടുകൊണ്ടുള്ള നമസ്കാരം | salat al-khawf (صلوة الخوف, صَلاَةُ الخَوْف) | the prayer of fear / the prayer performed in fear (new) |
| ആഞ്ഞടി | maylah | onslaught (new) |
| ജാഗ്രത | hidhr | vigilance (as An-Nisa' 15) |
| സാമഗ്രികൾ / ഉപകരണം | amti'ah | materials / means (as An-Nisa' 18) |
| യുക്തികൾ | — | rationales (new) |
| ചൊടി / ചുണ / വീറ് | — | briskness / pluck / zeal (new) |
| സ്വദക്വഃ | sadaqah | sadaqah (a gift) |
| ജമാഅത്ത് | jama'ah | jama'ah |
| ബലഹീനർ / ദുർബ്ബലർ | — | feeble / weak (as Ali 'Imran 15, An-Nisa' 03) |
| നിന്ദാകരമായ | muhin | humiliating (as An-Nisa' 09) |
| അഗാധജ്ഞൻ, അഗാധജ്ഞാനി / യുക്തിമാൻ | hakim | the Profoundly Knowing / the Sagacious (as Al-Baqarah 06, 20) |
