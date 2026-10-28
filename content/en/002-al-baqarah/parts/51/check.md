# Check: Al-Baqarah part 51 (verses 284–286)

Checked on 2026-10-28 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 516–525 (book pp. 687–696). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer (this part has no footnotes). `pdftotext -bbox` was used for the word gaps of the Arabic phrases in the commentary and for the raw glyph codes where a letter or digit mattered. Nine 300–400 dpi crops were used: the word-table gloss കീർത്തിക്കുകയില്ല (p. 691; two, the first mis-aimed), آمَنَ الرَّسُولُ … (p. 692), طَاقَتَهَا، مُقَدُورَهَا (p. 693), and the closing prayer, colophon and dates (p. 696, five). PDF pp. 526–528 were looked at only at 30 dpi, to confirm what follows the surah. The amanithafseer.com text was used only to confirm spellings.
- **Boundaries.** Part 50 ends on p. 687 with "… അവസാനം അല്ലാഹു താക്കീത് ചെയ്യുന്നു.", the first two lines of the page; directly below are the heading "വിഭാഗം - 40" and the verse 284 panel. This part starts there and opens with "### Section – 40" (as parts 34, 44, 46 and 50, which also begin at a heading). It ends on p. 696 with the 2:286 quotation "… - الآية", the bracketed prayer "[ اللهم ربنا ولك الحمد ولك المنة والفضل ]" and the four-line bracketed colophon; the rest of p. 696 is blank. PDF p. 526 (book p. 697) is the title page "പടങ്ങൾ" (maps), p. 527 is blank and the maps follow; they are not part of the surah's commentary. Nothing printed after the last translated line is missing.
- `part.json`, `verses.json` (verses 284–286), `words.json` (65 entries: 284: 15; 285: 20; 286: 30), `commentary.md`.
- Groups: "### Section – 40" | *[Verse 284]* (panel and table p. 687, commentary pp. 687–690) | *[Verses 285–286]* (panels pp. 690–691, one table pp. 691–692, commentary pp. 692–696). Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images in the printed order. Spot-checks: the 285 panel ends "അടുക്കലേക്കത്രെ" (the text layer has "…ത്ര"; the image has ത്രെ, as in the file); "റസൂലിന്ന്" (panel) with double ന്ന; "(നന്മ)അതിന്" with no space, "ഞങ്ങളെ (ക്കൊണ്ട്)" spaced, "പൊറുത്തു തരുകയും" spaced, "അതിന്റെമേൽ" joined, as printed; table "അവതരിപ്പിക്ക (ഇറക്ക)പ്പെട്ടതിൽ", "പൊറുത്തു കൊടുക്കും" (spaced), "ഞങ്ങളെക്കുറിച്ച (ഞങ്ങൾക്ക്)" (no virama on ച), "അതിന്റെ മേലും തന്നെ, അതിന് തന്നെ". In the table the typesetting puts قَدِيرٌ before عَلَى كُلِّ شَيْءٍ (p. 687) and مِنْ قَبْلِنَا before كَمَا حَمَلْتَهُ (p. 691) on the page; the text layer order (each Arabic word before its own gloss) is the file's order. The opening quote of the 286 supplication (after "(പ്രാർത്ഥിക്കുക:)") is not closed in the print; mirrored. No ZWNJ is printed in these items or in the files.
- `[p. N]` markers 687–690 and 692–696. P. 691 holds only the end of the 286 panel and the word table, so it has no marker (as parts 42–50). [p. 687] stands at the start of the 284 commentary below the table; [p. 692] at the start of the 285–286 commentary below the table. Page turns: "hi*[p. 688]*de" (മറ/ച്ചുവെക്കുന്നതുമായ), "deser*[p. 689]*ving" (അർഹ/രെന്ന്), "bringing them into action *[p. 690]* care needs to be taken" (… അടക്കി നിറുത്തുവാൻ / സൂക്ഷിക്കേണ്ടതുണ്ട്), "scrip*[p. 693]*tures" (വേദഗ്ര/ന്ഥങ്ങളിൽ), "towards religion *[p. 694]* occur" (മതത്തോട് വെറുപ്പും അറപ്പും / തോന്നുകയും), "in mistake, *[p. 695]* came to be done" (അബദ്ധത്തിലോ / ചെയ്തുപോയ), "recited them, *[p. 696]* immediately" (ഓതിയപ്പോൾ, / ഓരോ വാക്യത്തിന്റെയും ഉടനെ). All are right.
- Honorifics: ﷺ printed 21 times (p. 688: 2; p. 689: 4; p. 692: 6; p. 694: 5; p. 695: 4); the English has 21, none at the bare തിരുമേനി (p. 689 three times: "the noble Prophet") or റസൂൽ തിരുമേനിക്കും (p. 692: "the noble Rasul"), or at the bare നബി in നബി വചനം (p. 689: "a saying of the Prophet"). "the noble Rasul" 3 and "the noble Prophet" 4, as printed. (r) printed 10 times (p. 688: Muslim, 'Asqalani; p. 689: Bukhari and Muslim, Muslim; p. 694: Ibn 'Abbas; p. 695: Ibn Mas'ud, Muslim; p. 696: Ibn 'Abbas, Mu'adh, Ibn Jarir); the English has 10. (a): Jibril (p. 694), 1 and 1.
- References as printed: (Baihaqi, Hakim, Ibn Jarir.), 4: 150, 2: 91, (2: 93), (22: 78.), (A'raf: 157), (Mu. Na), (Mu. Ti.).

## Corrections made (before → after)

### Word order changed

1. v. 286, `verses.json`, "ഞങ്ങളുടെ മുമ്പുള്ളവരുടെ മേൽ നീ ചുമത്തിയതുപോലെ, ഞങ്ങളുടെ മേൽ നീ ഭാരം ചുമത്തുകയും ചെയ്യരുതേ!": the "as" clause stands first (as part 50 correction 2). "Our Rabb! And do not impose a burden upon us, as You imposed upon those before us!" → "Our Rabb! And, as You imposed upon those before us, do not impose a burden upon us!"

### Renderings brought into line / one English per Malayalam word

2. Word table entry 38, إِلَّا وُسْعَهَا, "അതിന്റെ നിവൃത്തി (സൗകര്യം- കഴിവ്) അല്ലാതെ": സൗകര്യം is "convenience" in this part's commentary (p. 693 "what is convenient", "convenience and means") and in parts 29, 32, 49, 50. "except its means (facility- ability)" → "except its means (convenience- ability)".
3. Word table entry 41, وَعَلَيْهَا, "അതിന്റെ മേലും തന്നെ, അതിന് തന്നെ": the dative അതിന് is "for it" in entry 39 and in the 286 panel ("will be for it indeed"); "against" is not printed. "and upon it indeed, against it indeed" → "and upon it indeed, for it indeed".
4. Word table entry 62, أَنْتَ مَوْلَانَا, "നീ ഞങ്ങളുടെ യജമാനനാകുന്നു, തമ്പുരാനാണ്": "Lord" is the glossary's rendering of രക്ഷിതാവ് (Rabb), used in this same table (entry 33, "ഞങ്ങളുടെ രക്ഷിതാവേ", "our Lord"). തമ്പുരാൻ occurs nowhere else in the translated parts. "You are our Master, are our Lord" → "You are our Master, are our Sovereign" (open doubt 2).

### DOUBTs (the brief's points 1–5)

5. Word table entry 36 (കീർത്തിക്കുകയില്ല): kept; reworded to say what the image shows, and put in the `*[DOUBT: …]*` form of the recent parts' word tables. See "Points the caller asked about" (1).
6. p. 690, **والله الموفق والمعين**: DOUBT removed (Arabic kept). Transcription certain; this closing formula stands bare, with no DOUBT, in parts 32 and 40 (as اللّه اعلم and إن شاء الله do throughout).
7. p. 696, **رَبَّنَالَاتُؤَاخِذْنَاإِنْ نَسِينَا أَوْ أَخْطَأْنَا - الآية**: DOUBT removed (Arabic kept). It is a Quran quotation (2: 286) whose meaning is the author's own panel rendering of that verse, so nothing is uncertain; Quran quotations printed without Malayalam stand bare in earlier parts (e.g. part 24 "( **إِنَّالِلَّهِ-الخ** )"; in this part "( **وَالْمُؤْمِنُونَ** )").
8. p. 696, **[ اللهم ربنا ولك الحمد ولك المنة والفضل ]**: DOUBT kept (as part 50's اللهم فلك الحمد حتى ترضى and part 43's وهوالموفق والمعين وهويهدى السبيل): the transcription is confirmed, but any English meaning would be words the author did not print, so it stays offered only inside the DOUBT for the reviewer. Reworded to say the transcription was checked.
9. p. 696, colophon: DOUBT kept and extended with the date discrepancy below (point (2)).

No dropped തന്നെ/-ഉം/എന്നോണം or list items, may/will errors, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, silently corrected names or misprints, misplaced markers, translator words in round brackets, or added or re-vowelled Arabic were found apart from the above.

## Points the caller asked about

- **(1) കീർത്തിക്കുകയില്ല (table entry 36, p. 691).** The 300 dpi crop reads plainly "അല്ലാഹു ശാസിക്കുകയില്ല, നിർബന്ധിക്കുകയില്ല, കീർത്തിക്കുകയില്ല"; the raw glyphs are `IoÀ¯n-¡p-I-bnÃ` (ക ീ ർ ത്ത ി ക്ക ു ക യ ി ല്ല), and the amanithafseer.com word list has the same word. So it is printed കീർത്തിക്കുകയില്ല ("will not praise"). Since it does not fit the sense of the verse, it may be a printing slip (e.g. for കൽപിക്കുകയില്ല), but that cannot be settled from the page: DOUBT kept, English follows the print.
- **(2) Arabic lines without Malayalam.**
  - والله الموفق والمعين (p. 690): bare, three words, own line below the paragraph; as in the file (correction 6).
  - رَبَّنَا … - الآية (p. 696): bbox order right to left ربنا |0.8| لاتؤاخذنا |0.6| إن |2.7| نسينا |0.9| أو |0.9| أخطأنا |6.4 (dash)| الآية; five sukuns (ذْ نْ وْ خْ أْ) in the layer, no shadda on the ن of نَسِينَا. As in the file (spacing as the translator read the gaps; see below). Correction 7.
  - [ اللهم ربنا ولك الحمد ولك المنة والفضل ] (p. 696): seven words, bare, spaced 2.6–3.4 pt, square brackets with inner spaces; checked letter by letter on the crop. As in the file.
  - Colophon (p. 696; a font with no usable Unicode, read from two 300 dpi crops and one 400 dpi crop): "[يقول افقر العباد الى رحمة الله محمد بن حسن الامانى انتهى تبييض / النسخة المسودة لهذه السورة العظيمة ليلة الثلاثاء السادسة من / ربيع الاول سنة ١٣٩٨ هـ (الموافق ١٩٧٨/٢/١٣ م) بعد ان كان الفراغ منها / ليلة السبت ١٥ جماد الاخرى ١٣٩٦هـ الموافق ١٩٧٦/٥/١٤ م]". Every word matches the file: الى, الامانى, انتهى, الاخرى with final ى; جماد (not جمادى); "١٣٩٨ هـ" spaced but "١٣٩٦هـ" joined; brackets as printed. **Numerals:** the glyph runs (in left-to-right order) are `7=8:` = ١٣٩٨, `789:;<;7=` = ١٩٧٨ / ٢ / ١٣, `@A7=8D` = ١٣٩٦هـ, `7E` = ١٥ and `789D;E;7F` = ١٩٧٦ / ٥ / ١٤ (the digit codes agree across all five numbers), so the year stands at the left of each Gregorian date on the page; the file's strings reproduce that order. **Dates:** by the tabular Islamic calendar, 6 Rabi' al-Awwal 1398 = Monday 13 February 1978 (the "night of Tuesday" is Monday evening), so the first pair agrees; but 15 Jumada al-Akhirah 1396 = about 12 June 1976, while 14 May 1976 (a Friday, whose evening is the "night of Saturday") is about 15 Jumada al-Ula 1396. One of the second pair may be a printing slip; added to the colophon DOUBT (correction 9), transcribed as printed.
- **(3) Arabic spacing.** As in parts 39–50, word spacing in the commentary's Arabic follows the printed gaps (bbox), not the Quran text: joined forms such as آمَنَ الرَّسُولُبِمَاأُنْزِلَإِلَيْهِ مِنْرَبِّهِ (p. 692; the crop shows the words run together), كُلٌّ آمَنَبِاللَّهِ …, إِلاوُسْعَهَا, وَمَاجَعَلَ … مِنْحَرَجٍ, لَهَا مَاكَسَبَتْوَعَلَيْهَا مَااكْتَسَبَتْ, عَنْهُمْإِصْرَهُمْ were left as the translator had them (gaps of 0.6–0.8 pt or none are joined, 0.9 pt and more spaced). Marks spot-checked against the layer: وقَالُوا سَمِعْنَا وَاَطَعْنَا (و of وقالوا bare; plain alif with fatha in وَاَطَعْنَا), وَمَاجَعَلَ … (9 fathas, 4 kasras, 1 damma, kasratan), نَسْخ, قَدْ فُعِلَتْ, آمِين. طَاقَـتَـهَا، مُقَدُورَهَا (p. 693, crop): the damma on د and the tatweels are printed so, and the bracket opened before طاقتها is not closed (next line "പോലെയുള്ള"); mirrored, no TN (the vowelling مُقَدُورَهَا is as printed).
- **(4) Quran quotations.** These are kept in the printed ordinary script, as in parts 39–50 (TRANSLATING.md rule 4 asks for the Uthmani text; the recent parts keep the print and `npm run check` counts them as matching). The `npm run check` report is identical before and after my edits; this part adds no "close but not exact" item. Its "not from the Quran" items are وحق له ان يؤمن, the prayer and the colophon (none is a Quran quotation). Every `words.json` "ar" is in its verse.

## Checked and left as they are

- v. 286, "If we forget, or make a mistake" for "… മറന്നുപോകുകയോ, … ചെയ്യുകയോ ചെയ്തുവെങ്കിൽ" (past conditional), and table entries 45–46 "if we forgot", "if we made a mistake": the English conditional; left.
- p. 693, "(We heard, and we show disobedience too. (2: 93)": "we" is not printed in the second clause, English needs a subject; the bracket is not closed in the print (mirrored).
- p. 688, the round bracket opened before "മുൻഗാമികൾ" is not closed in the print; mirrored.
- p. 694, "The Prophet ﷺ has stated that …, it also becomes clear from many Quran verses.": the print joins the two clauses with a comma; mirrored.
- p. 687, "Allah explained up to now" for "വിവരിച്ചു തന്നു": the benefactive തന്നു ("to us") is not rendered; the same verb is "explains" on p. 688 ("വിവരിച്ചു തരുന്നു"). Left.
- p. 695, എന്നുവേണ്ട "In short" and p. 694 യഥാർത്ഥത്തിൽ "In real fact" (വാസ്തവത്തിൽ is "In reality", p. 688, as part 49): kept apart; left.
- Table entry 49, "ഞങ്ങളുടെ മേൽ, ഞങ്ങൾക്ക്" "upon us, on us": left (ഞങ്ങൾക്ക് is "for us" / "to us" elsewhere; "on us" follows the sense of the verb).
- `part.json` verses "284-286", pages "687-696", PDF pages "516-525": correct.

## Open doubts for the reviewer

1. **DOUBTs in the text**: table entry 36 കീർത്തിക്കുകയില്ല (printed so; possible slip); the prayer [ اللهم ربنا ولك الحمد ولك المنة والفضل ] (no Malayalam given); the colophon (no Malayalam given; the Jumada al-Akhirah 1396 / 14 May 1976 mismatch).
2. **തമ്പുരാൻ "Sovereign"** (correction 4): new word; "Lord" is reserved for രക്ഷിതാവ് (Rabb) by the glossary. The reviewer may prefer another word (e.g. "liege lord").
3. **കഴിവ് "ability" / "capacity"**: this part has "ability" (commentary, table entry 38) but "there is no capacity" for കഴിവില്ല (table entry 57, as in part 41's table); parts 38, 39 and 41 have "capacity" in word tables, parts 29 and 49 "ability". Not changed here; the reviewer may choose one.
4. **പ്രാർത്ഥന / പ്രാർത്ഥിക്കുക "supplication / supplicate"**: this part uses "supplicate" (286 panel "(Supplicate:)", commentary). Part 30's term table has പ്രാർത്ഥിക്കുക "pray" and earlier word tables "pray", while many earlier commentaries have "supplicate". One rendering should be chosen.
5. **Earlier open doubts still apply** (not in this part): see parts 13–50.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| വിചാരണ ചെയ്യുക / വിചാരണ നടത്തുക | yuhasib | reckon with / carry out reckoning (as part 33's വിചാരണ "reckoning") |
| വിചാരവികാരങ്ങൾ / വിചാരങ്ങൾ / തോന്നലുകൾ | — | thoughts and feelings / thoughts / impressions |
| ദുർബോധനങ്ങൾ / ശങ്കാവിചാരങ്ങൾ | — | evil promptings / doubtful thoughts |
| നസ്ഖ് / മൻസൂഖ് | naskh / mansukh | naskh / mansukh (in quotes as printed) |
| വിട്ടുകൊടുക്കുക | — | remit (as earlier parts) |
| ശാസിക്കുക | kallafa | charge (as earlier parts) |
| നിവൃത്തി / സൗകര്യം / സാധ്യത / കഴിവ് | wus' / taqah | means / convenience (correction 2) / possibility / ability, capacity (open doubt 3) |
| ഭാരം / ഞെരുക്കം | isr | burden / straitness |
| യജമാനൻ / യജമാനത്വം / തമ്പുരാൻ | mawla | Master / mastership / Sovereign (open doubt 2) |
| പൊറുക്കൽ / പൊറുതി / പാപപൊറുതി | ghufran | forgiving / forgiveness / forgiveness for sins |
| പ്രാർത്ഥന / പ്രാർത്ഥിക്കുക / അപേക്ഷ | du'a | supplication / supplicate (open doubt 4) / request |
| നില / നിലപാട് | — | stand / position |
| മുത്തക്വി | muttaqi | ‘muttaqi’ / muttaqis |
| പ്രകാശം | nur | light |
| കർമാചാരങ്ങൾ / കുടുക്കുബന്ധങ്ങൾ | aghlal | customs of deeds / shackling bonds |
| ലഘൂകരിക്കുക | — | lighten |
| കോട്ടം | — | damage |
| ഭയഭക്തി | taqwa | God-fearing reverence (as earlier parts) |
| കൃപ | — | grace (as part 33) |
| എന്നുവേണ്ട / യഥാർത്ഥത്തിൽ | — | in short / in real fact |
