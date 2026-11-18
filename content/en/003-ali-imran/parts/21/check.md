# Check: Ali 'Imran part 21 (verses 191–200, end of the surah)

Checked on 2026-11-18 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/03. Al-'Imran.pdf`, PDF pages 205–215 (book pp. 913–923). I rendered each page at 150 dpi and read it once in full beside the full `ml2uni` text layer. `pdftotext -bbox` was used for the word positions of the p. 915 word table. 300 dpi crops: p. 915 the 192–194 table (two, plus one narrow crop of the 192 line); p. 923 the closing prayer and the colophon.
- **Boundaries.** Part 20 ends on p. 913 with "… അവർ എങ്ങനെയുള്ളവരാണെന്ന് മനസ്സിലാക്കാം:-", directly above the verse 191 panel. This part starts there, with no section heading (the print has none; Section 20 began at verse 190). It ends on p. 923 with "والله الموفق والمعين", the bracketed prayer and the three-line bracketed colophon; the rest of p. 923 is blank. Nothing in between is missing.
- Files compared: `part.json`, `verses.json` (verses 191–200), `words.json` and `commentary.md`. `words.json` has 130 entries (191: 15; 192: 7; 193: 15; 194: 8; 195: 31; 196: 4; 197: 7; 198: 15; 199: 21; 200: 7). Every printed gloss is there, in order.
- Groups:
  - *[Verses 191–194]*: panel 191 begins p. 913; rest of 191 and panels 192–194 p. 914; the one shared table and the start of the commentary p. 915, with the footnote (\*) at the foot of p. 915; commentary pp. 916–917.
  - *[Verse 195]*: panel and the start of the table p. 917; rest of the table and the commentary p. 918.
  - *[Verses 196–198]*: panels 196 and 197 p. 918; the table, panel 198, its table and the commentary p. 919.
  - *[Verse 199]*: panel, table and commentary p. 920; commentary p. 921.
  - *[Verse 200]*: panel, table and the start of the commentary p. 921; commentary pp. 922–923; prayer and colophon p. 923.
  - All of this is right.
- **Word tables 192 and 194 (p. 915).** On this page the table lines are set left to right: each Arabic word stands at the left of its Malayalam gloss (confirmed with `pdftotext -bbox`: e.g. مَنْ تُدْخِلِ at x 132–163 pt, then "ആരെ നീ പ്രവേശിപ്പിക്കുന്നുവോ" from x 172; النار at 328, then "നരകത്തിൽ" at 355; فقد أخزيته at 416, then "നീ" at 471 and "അവരെ അപമാനത്തിലാക്കി" at the start of the next line). Read that way every pair gives the Quran order and fits its meaning, in all of 191–194. The 194 lines are the same (ربنا وآتنا 133 → gloss 181; ما وعدتنا 426 → "നീ / ഞങ്ങളോട് വാഗ്ദാനം ചെയ്തത്"; على رسلك 272 → 319; ولا تخزنا 426 → "നീ / ഞങ്ങളെ അപമാനത്തിലാക്കുക …"; يوم القيامة 133 → 182; إنك 272 → 295; لا تخلف 381 → 418; الميعاد 337 → "കരാർ വാഗ്ദത്തം"). The file's order and pairings are right.
- **Footnote.** The p. 915 note "(\*) ഇതിനെപ്പറ്റി സൂ: അൻബിയാഉ്: 33-ന്റെ വ്യാഖ്യാനത്തിൽ വിവരിക്കുന്നുണ്ട്." follows the paragraph carrying its marker, which ends on p. 916 with "… വെളിച്ചം നൽകുകയും ചെയ്യും.", as parts 19–20 placed such notes. Right.
- I compared every English sentence of the commentary and the footnote with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images in the printed order. Points confirmed as printed: v. 191 "[നിനക്ക് സ്ത്രോത്രം]"; v. 193 "പുണ്യവാൻമാരുടെ കൂടെ [അവരുടെ കൂട്ടത്തിലായി]"; v. 195 "[എല്ലാവരും ഒരുപോലെത്തന്നെയാണ്]:-"; v. 197 "സുഖാനുഭവമത്രെ" (the image has the final െ; the text layer "…മത്ര"); tables "നീ അവരെ അപമാനത്തിലാക്കി" (192), "കരാർ വാഗ്ദത്തം" (194, no comma), "അനുഭവ (സുഖഭോഗ- ഉപയോഗ- (സാധന) മാണ്" (197), "സ്വൈര്യവിഹാരം" (196 table) beside "സ്വൈര വിഹാരം" (196 panel), "നദികൾ" (198) beside "അരുവികൾ" (195). All 130 `ar` entries are found in their verses.
- `[p. N]` markers: 915–923.
  - None for pp. 913 (in part 20) and 914 (panels only).
  - [p. 915], [p. 918], [p. 919] and [p. 920] stand at the start of the commentary below the tables; [p. 917] and [p. 923] at the start of the page's first paragraph or item.
  - Page turns: "skill in creation, *[p. 916]* it becomes possible to understand more" (… ഗുണങ്ങളെക്കുറിച്ച് / കൂടുതൽ മനസ്സിലാക്കുവാൻ); "quickly settling their reckoning, *[p. 921]* to give the reward they deserve" (… വിചാരണവേഗം തീർത്ത് / അവർ അർഹിക്കുന്ന പ്രതിഫലം നൽകുവാൻ); "for success, both worldly and of the Hereafter, *[p. 922]* this is a verse that contains the essence of the ways" (വിജയ / മാർഗങ്ങളുടെ സാരാംശം: the word "ways to success" is split across the page, and the English puts "success" before and "ways" after the marker). These are right.
- **Paragraph break on p. 917.** The print ends a short line with "ആ പ്രാർത്ഥനകളെ" and starts a new indented paragraph with "അല്ലാഹു വിലയിരുത്തുന്നത് എങ്ങനെയാണെന്ന് …", in the middle of one sentence. That is a layout slip (a paragraph cannot begin inside a clause), so the translator's single paragraph ("How Allah evaluates those prayers, see in the next verse.") is right; a break in the English would cut the sentence in two. Earlier parts likewise followed the sentence, not the line, where words were split by the layout.
- Honorifics, counted page by page:
  - ﷺ is printed 5 times (p. 916: 1; p. 920: 1; p. 921: 2; p. 922: 1). The English has 5. "ഒരു നബി വചനത്തിന്റെ" (p. 921) and "നബി വചനങ്ങളിൽ" (p. 922) are printed without ﷺ and none is added.
  - (r) is printed 6 times (p. 916: Muslim, Ibn 'Abbas twice, Maimunah, 'Abbas; p. 921: Abu Musa). The English has 6.
- Quran quotations, byte-identical to `data/quran-uthmani.json` (`npm run check` lists none of them as close or not found): p. 916 إِنَّ فِي خَلۡقِ ٱلسَّمَٰوَٰتِ; p. 918 وَٱللَّهُ عِندَهُۥ حُسۡنُ ٱلثَّوَابِ; p. 922 يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ, ٱصۡبِرُواْ, وَصَابِرُواْ, وَرَابِطُواْ; p. 923 وَٱتَّقُواْ ٱللَّهَ, لَعَلَّكُمۡ تُفۡلِحُونَ.
- Other Arabic, transcribed from the image: رَبَاطُ (p. 922); اللّه اعلم (p. 922); والله الموفق والمعين (p. 923); the prayer (اللهم لك الحمد ولك المنة والفضل) and the colophon (p. 923, 300 dpi crop).
- **Colophon digits.** The page shows "٧٦/٧/٢٥" and "٧٨/٤/٢٢" with the year at the left. The file stores each as year/month/day, which, as a run of Arabic digits joined by "/", is displayed in the same order, as Al-Baqarah part 51 did. Every word of the colophon matches the crop: "هـالموافق" joined, "١٣٩٨ هـ الموافق" spaced, "والفراع" (no dot), "تبيضها", "الاولى", "م ـ م نى)". I computed 25 July 1976 as a Sunday and 22 April 1978 as a Saturday, as printed.

## Corrections made (before → after)

### Word table

1. v. 199, الحساب "വിചാരണ, കണക്ക് നോക്കൽ": "(in) the reckoning, the checking of the account" → "the reckoning, the checking of the account". The "(in)" was the translator's word in round brackets, which mark only the author's additions; the author's gloss has no "in".

I found no dropped sentences, may/will errors, voice changes, reversed negations, changed reported speech, added honorifics, or silently corrected misprints.

## The translator's open items

- **DOUBTs, all kept:**
  - p. 915 "ഘനനങ്ങൾ": clear on the image and in the text layer, not a known word. "minerals" in the text; the options are given.
  - p. 919 "പുണ്യവാളൻമാർ": clear on the image. "holy ones" in the text; the options are given.
  - v. 194 table "കരാർ വാഗ്ദത്തം": no comma on the image (crop), so it can be read as two glosses or as one phrase. Kept.
  - p. 923 the prayer and the colophon: no Malayalam is printed, so any English is not the author's; offered only inside the DOUBTs, as Al-Baqarah part 51 did. Kept. My tabular-calendar estimate agrees with the DOUBT's statement that the Gregorian dates fall one to two days after the Hijri ones.
- **TNs, judged against rules 6–7 and the earlier parts:**
  - v. 191 "സ്ത്രോത്രം" for സ്തോത്രം: the English depends on reading it as "praise", so the TN tells the reader why. Kept.
  - v. 192 table "അവരെ" against "അവനെ" in the panel: a plural where the singular is meant inside a word table was marked with a TN in part 20 (v. 185) and Al-Baqarah part 32. Kept.
  - v. 197 table, the unclosed bracket: earlier parts have TNs of this kind ("a single round bracket is printed …"), though many unclosed brackets in the commentary are only mirrored. Kept; the reviewer may prefer to drop it.
- **Slips mirrored without TN.** All confirmed on the images:
  - p. 915 "അങ്ങനെ പലതും. പലതും;" (stray stop, "and so many things. many things;"); "വൻകരകൾ ദ്വീപുകൾ", "നാടുകൾ പക്ഷി", "ഉൽപന്നങ്ങൾ ഘനനങ്ങൾ" (no commas).
  - p. 916 the quotation ‘ഞങ്ങളുടെ റബ്ബേ, ഞങ്ങളുടെ റബ്ബേ … never closed; "… വാഗ്ദാനം ചെയ്തകാര്യം കൊണ്ടുദ്ദേശ്യം. സജ്ജനങ്ങൾക്ക് …" (stray stop); the Ibn 'Abbas hadith never closed.
  - p. 918 "… മനുഷ്യവർഗം കർമങ്ങൾക്ക് …" (no stop).
  - p. 920 "ഇല്ലാതില്ലഅവരെപ്പറ്റി" (joined, no stop); "പുണ്യവാൻമാരാണെന്നും. അവരുടെ …" (stray stop).
  - p. 922 hadith 1 has a closing quotation mark with no opening one.
  - p. 923 no stop after "ഇതത്രെ ‘രിബാത്വ്’ (മു; തി)".

## Checked and left as they are

- p. 916 "സത്യവിശ്വാസത്തിലേക്ക് ക്ഷണിക്കുന്ന ആൾ എന്ന് പറഞ്ഞത്" → "By what was said as ‘the one who invites to true faith’": the print has no quotation marks; the English marks the quoted phrase that എന്ന് introduces. Left.
- p. 922 the "(1)", "(2)", "(3)" and then "4." numbering of the counsels is as printed. Left.
- `part.json`: verses "191-200", pages "913-923", PDF pages "205-215". Correct.

## Open doubts for the reviewer

1. **p. 915 "ഘനനങ്ങൾ"**: "minerals" / "solid masses".
2. **p. 919 "പുണ്യവാളൻമാർ"**: "holy ones" / "saintly ones" / "meritorious ones".
3. **v. 194 table "കരാർ വാഗ്ദത്തം"**: two glosses or one phrase.
4. **p. 923 prayer and colophon**: no Malayalam given; the English offered in the DOUBTs is not the author's. The reading of the closing "م ـ م نى" (probably the author's initials) is uncertain.
5. **TNs** on സ്ത്രോത്രം, അവരെ/അവനെ and the v. 197 bracket: the reviewer may drop the last.
6. **Printing slips** listed above are mirrored without TN.
7. **Earlier open doubts still apply** (not in this part): see parts 01–20 and the Al-Baqarah parts.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| പുണ്യവാൻമാർ | al-abrar | the meritorious ones |
| പുണ്യവാളൻമാർ | (al-abrar) | holy ones (DOUBT) |
| സൽക്കാരം | nuzul | hospitality |
| കെട്ടിക്കാക്കുക / കെട്ടിക്കാത്തിരിപ്പ് | rabitu / ribat | keep fast guard / fast guard-keeping |
| രിബാത്വ് | ribat | ribat |
| ക്ഷമയിൽ മികവ് കാണിക്കുക | sabiru | show excellence in patience |

## Note on `npm run check`

In the live working tree `npm run check` stops with ENOENT on `content/en/004-an-nisa/parts/01/part.json`: another session has created An-Nisa's folder with an empty part 01, which is outside this part and was not touched. Run on a copy of the tree without that folder, `npm run check` passes (exit 0): Ali 'Imran 200 of 200 verses, 2399 of 2399 word entries match, and none of this part's Quran quotations is listed as close or not found.
