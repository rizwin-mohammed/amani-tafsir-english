# Check: Al-Baqarah part 33 (verses 200–210)

Checked on 2026-10-09 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 331–341 (book pp. 502–512). Each page was rendered at 150 dpi and read once in full, including the footnotes on pp. 505 and 508. The full (untruncated) `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary, and `pdftotext -bbox` was used for the vowel marks and word joins of every Arabic item on pp. 503–505 and 508–512. The amanithafseer.com text was used only through the translator's list of site-vs-book differences. Crops (four in all): ايام التشريق on p. 505 (one that missed the line, then 300 dpi and 600 dpi), and اسماء الله وصفاتة on p. 511 (300 dpi).
- **Boundaries.** Part 32 ends on p. 502 with "… അവയുടെ ജീവൽവശമാകുന്നു. ومن الله التوفيق". The verse 200 panel follows directly on the same page, and this part starts there. This part ends on p. 512 with "… ചെന്നവസാനിക്കുന്നതും. ( والى اللّهترجع الامور )", directly above the heading "വിഭാഗം - 26" and the verse 211 panel. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 200–210), `words.json` (115 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order, and the verse 210 commentary (pp. 511–512, which is not on the amanithafseer site) was compared sentence by sentence. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images (panels pp. 502, 504–506, 509, 510; word tables pp. 502–503, 505, 506–507, 509–511). Line-end splits are joined (ഐഹിക/മായ, ത/ന്നെ, തീരുമാ/നിക്ക). The misprint ധൃതിപ്പെട്ടുപൊരുന്ന (v. 203) is kept as printed, and the full stop after "നോക്കൽ." (v. 202 table) is kept. ZWNJ is used only in നിങ്ങൾക്ക്‌വന്നതിന് (v. 209 table), as printed.
- `[p. N]` markers: 503–505 and 507–512. P. 502 holds only the end of part 32, the panels and the start of the table. P. 506 holds only the panels for verses 204–207 and the start of their table. Neither page has a marker. [p. 503], [p. 505], [p. 507], [p. 510] and [p. 511] stand at the start of commentaries whose word tables fill the tops of those pages, and [p. 512] stands at the start of a paragraph. The other markers stand at the page turns: [p. 504] "will also *[p. 504]* keep praying" (വേണ്ടി / പ്രാർത്ഥിച്ചുകൊണ്ടുമിരിക്കും); [p. 508] after "defiance" (പ്രേരിപ്പിക്കു/കയുമായിരിക്കും); [p. 509] "th*[p. 509]*at" (എന്ന/തിൽ). All are right.
- Groups: *[Verses 200–202]* | *[Verse 203]* | *[Verses 204–207]* | *[Verses 208–209]* | *[Verse 210]*. No heading is printed inside this part, and this matches the print. The footnote on p. 505 (Jamrah) follows the verse 203 paragraph. The footnote on p. 508 (Suhaib) follows the paragraph that holds its marker, which ends on p. 509. Both are complete.

## Corrections made (before → after)

### Arabic as printed

1. p. 505, التشريق: a 600 dpi crop shows a single fatha over the ت and no shadda. The ي of ايام has shadda with fatha, and the text layer agrees (fatha only on ت). The Arabic is corrected and the DOUBT is removed: "( **ايَّامُ التَّشريق** ). *[DOUBT: … Transcribed with the shadda.]*" → "( **ايَّامُ التَشريق** )."

### Malayalam as printed

2. v. 203 (`verses.json` ml): the panel's line on p. 504 ends with "രണ്ട് ദിവസം", and p. 505 begins "കൊണ്ട് ധൃതിപ്പെട്ടുപൊരുന്ന". These are two words separated by the page turn, and the commentary on the same page prints "രണ്ട് ദിവസം കൊണ്ട്" with a space: "ദിവസംകൊണ്ട്" → "ദിവസം കൊണ്ട്".

### Words added inside the author's square brackets

3. v. 204 (`verses.json` en): the bracket is "[ആത്മാർത്ഥതയെ]", and "-പ്പറ്റി" stands outside it, so "about what is in his heart [about his genuineness]" → "about what is in his heart [genuineness]". This follows part 30, correction 3.

### Added pronoun

4. p. 509, "ഈ വിവരം അറിഞ്ഞപ്പോൾ നബി ﷺ പറഞ്ഞു". Its only subject is the Prophet, and the added "he" could be read as Suhaib: "When he came to know this news, the Prophet ﷺ said" → "On coming to know this news, the Prophet ﷺ said".

### Small word misplaced or doubled

5. p. 512, "ചില വ്യാഖ്യാതാക്കൾ ഇങ്ങനെയാണതിന് അർത്ഥം കൽപിക്കുന്നതും": the -ഉം belongs to the clause, not to the commentators: "It is thus that some commentators too assign it a meaning." → "It is also thus that some commentators assign it a meaning."
6. v. 210 (`verses.json` en) and its quotation on p. 512, "കാര്യം തീരുമാനം ചെയ്യപ്പെടുകയും ചെയ്തിരിക്കുന്നു" and "(കാര്യം തീരുമാനിക്കപ്പെടുകയും ചെയ്തിരിക്കുന്നു)". The single -ഉം was rendered twice, as "And … also". It now reads as the word table ("and has been judged") and the future gloss on p. 512 ("‘and will be decided’") read it: "And the matter has also been decided" → "And the matter has been decided" (both places).

No may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced footnotes, or translator words in round brackets were found apart from the above.

## Points the caller asked about

- **(a) Verse 210 commentary.** It was compared sentence by sentence with the images of pp. 511–512 and with the text layer. Every sentence is present and in order, the (1)/(2) paragraphs are as printed, and the hadith quotation (opening ‘….. and the inner ‘ … ’) is mirrored. The only changes are corrections 5 and 6.
- **(b) DOUBTs.**
  - التشريق: settled by the crop (correction 1).
  - p. 511 "തീരുമാനങ്ങളെയും": the image clearly prints it. The book's own bracket (اسماء الله وصفاتة, "names … and attributes") and the whole following discussion are about Allah's names and attributes, so the DOUBT rests on the book itself and is kept as written. The reviewer may prefer it as a TN.
  - p. 511 "അവ ഉപയോഗിച്ച് സന്ദർഭങ്ങളിൽ നിന്ന്": the image clearly has ഉപയോഗിച്ച് with the chandrakkala. The likely intended ഉപയോഗിച്ച ("the contexts in which they were used") changes the sense, so the DOUBT is kept.
  - No other place on the images is unclear.
- **(c) Misprints kept without TN.** These are ധൃതിപ്പെട്ടുപൊരുന്ന (v. 203; English "hastens and comes away"), ക്ലപന (p. 510; English "command", as കൽപന elsewhere on the page), തന്നയാണല്ലോ (p. 512; English "indeed") and وصفاتة (p. 511; ة for ه, kept as printed). Their meaning is certain, and earlier checks (part 32, point g) added no TN for misprints of this kind, so none is added. The spelling صُحَيْب (p. 508 footnote) is kept as printed. A TN on it would rest on outside knowledge, because the Malayalam സ്വുഹൈബ് does not conflict with it.
- **(d) Arabic**, confirmed from the bbox glyph boxes and marks:
  - مَنَاسِك (p. 503).
  - رَبَّنَا آتِنَافِيالدُّنْيَا (p. 503): gaps 1.1 after ربنا, 0.4 and 0.3 inside.
  - رَبَّنَا آتِنَافِيالدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً (p. 504): spaces 1.1, 1.6, 1.3, 1.5 and 1.8 pt. The joins after آتنا (0.6) and في (0.4) are non-joining-letter spacing. Tanwin is on the first حسنة.
  - وَقِنَاعَذَابَالنَّارِ (p. 504): all joined.
  - رَبَّنَا آتِنَافِي الدُّنْيَاحَسَنَةًوَفِيالآخِرَةِ حَسَنَةً وَقِنَاعَذَابَ النَّارِ (p. 504): spaces 1.1, 1.3, 1.4, 3.4 and 1.4 pt, the rest joined (≤ 0.5). Every mark is as in the file.
  - أَيَّام مَعْدُودَات (p. 505): 2.2 pt gap, sukun on ع.
  - ايَّامُ التَشريق (p. 505): correction 1. The alif of ايام has no mark.
  - جَمْرَة (p. 505 footnote).
  - وَإِذَاتَوَلَّى (p. 508): joined, shadda with fatha on ل.
  - صُحَيْب (p. 508).
  - وَاللَّهُرَءُوفٌبِالْعِبَادِ (p. 509): all joins ≤ 0.4 pt.
  - إِنَّمَا يَدْعُو حِزْبَهُ لِيَكُونُوا مِنْ أَصْحَابِ السَّعِيرِ (p. 510, Fatir 6, no reference printed): spaces 2.0, 1.5, 1.7, 3.1, 1.7 and 1.2 pt. There is no alif after يدعو, and every mark is as in the file.
  - سِلْم (p. 510).
  - اسمَاء اللّه وصفاتة (p. 511, crop): fatha on م, a shadda printed over the الله ligature (a separate mark in the text layer), and spaces 1.5 and 1.1 pt. و is joined to صفاتة in one word box.
  - إن شاء الله (p. 511).
  - وَقُضِيَالأمْرُ (p. 512): joined at 0.3 pt, hamza in the lam-alif with no vowel on it, and sukun on م.
  - قُضِيَ (p. 512).
  - والى اللّهترجع الامور (p. 512): spaces 1.4 and 1.6 pt, and ترجع joined to الله (0.4 pt), with shadda as on p. 511.
  - `npm run check` lists the two 2:201 quotations as "close but not exact" because they are as-printed transcriptions (joined words, no Uthmani signs). They are right under the rule for phrases.
- **(e) p. 511 "അവക്ക് ---------".** The image shows only a wider space after "അവക്ക്", with no dashes. The English has nothing there, which is right.
- **(f) ﷺ and (r).** ﷺ is printed 4 times: p. 504 (നബി), p. 505 (നബി), p. 509 (നബി) and p. 511 (മുഹമ്മദ് നബി തിരുമേനി). There is none at തിരുമേനിയുടെ alone (p. 504). The English has exactly these 4. (r) is printed 5 times: Rabi' (p. 508), Suhaib (pp. 508 and 509), Ibn Jarir and Abu Hurairah (p. 511). The English has the same 5. (a) does not occur. "(അ)" on p. 504 is the hadith-source abbreviation, "(A)", as in part 30.
- **(g) Groups, markers, footnotes:** see "What was compared".
- **(h) Terms**, checked by grep against earlier parts:
  - നാശം: "corruption" where it renders fasad. Parts 02, 04, 05 and 10 have "cause corruption" for നാശമുണ്ടാക്കുക, and part 02's v. 11 table has "നാശം (കുഴപ്പം) ഉണ്ടാക്കരുത്" "do not cause corruption (disorder)". Parts 12, 17 and 31 have "ruin" where it renders hilak/tahlukah. In this part നാശപ്പെടുത്തുക is "bring to ruin" and നശിപ്പിക്കുക "destroy". The split follows the Arabic term the author glosses (open doubt 3).
  - സ്മരിക്കുക "remember" / ഓർമിക്കുക "keep in mind" / ഓർമ "memory", kept apart as in parts 23 and 32.
  - സ്തോത്ര കീർത്തനം "singing of praise" (p. 511), as the tables of parts 05 and 06. കീർത്തനം alone is "extolment".
  - പ്രതിഫലം "recompense", as parts 08, 13, 18, 31 and the glossary's "Day of Recompense". Parts 10, 15 and 16 have "reward" in other contexts.
  - പ്രതാപശാലി "the Majestic" and അഗാധജ്ഞൻ "the Profoundly Knowing", as parts 06 and 20.
  - ധിക്കാരം "defiance", as part 10.
  - പിശാചിന്റെ കാലടികൾ "the footsteps of Satan", as part 26.
  - ദയ "kindness", as the earlier table for رءوف.
  - ദേഹം "body", as part 30.
  - തോന്നിയവാസം "licentiousness", as part 32.
  - ബലി കഴിക്കുക "offer in sacrifice", as part 32.
  - ത്യാഗകർമങ്ങൾ / ആരാധനാകർമങ്ങൾ "rites of self-sacrifice / rites of worship", as part 20.
- **(i) Part 32 lessons.** Intensified forms keep their own English: അതിമഹത്തായ "exceedingly great", സുപ്രതീക്ഷ "good hope", മഹാവഴക്കുകാരൻ "great wrangler", മഹിത മഹത്വം "exalted greatness", പരമ ശത്രു "supreme enemy", മഹാ ശിക്ഷ / വൻശിക്ഷ "great / huge punishment". This part has no new uncertain rendering of a name of Allah. പ്രതാപശാലി and അഗാധജ്ഞൻ are settled earlier, and "very gracious" for കൃപയുള്ളവൻ is descriptive.

## Checked and left as they are

- p. 503: "‘my father, my mother’" has quotation marks that the print does not have (എന്റെ ബാപ്പാ, എന്റെ ഉമ്മാ എന്നൊക്കെ). They only mark the cited words. They are left, as parts 30–31 left such marks for the reviewer.
- Unbalanced marks are mirrored: p. 503 the quotation ‘Rabb, … in this world! has no closing mark; p. 505 ‘Ayyam al-Tashriq is never closed; p. 504 the closing ’ stands after the bracketed Arabic, as printed.
- p. 503 "When one has finished …, He is commanding …" and p. 505 "He alerts …", "He again reminds …": these are subjectless actives after Allah is named, rendered with "He" as in parts 29–32.
- p. 508: "– as Qatadah, Mujahid, Rabi' (r) and others have stated –" stands between the dashes exactly where the print has it, and its attachment stays as ambiguous as in the Malayalam.
- p. 509: "If you want, you may go with your own body" (വേണമെങ്കിൽ സ്വന്തം ദേഹവുമായി പോകാം) is the Quraish's reported speech, whose "നീ" is given in the preceding sentence. Left.
- p. 511: "qualities and attributes" for ഗുണ വിശേഷണങ്ങൾ. Left.
- v. 206 / p. 507: പ്രതാപം "majesty" is said of the wicked man (with the author's own "(or rage)"). This keeps one English for പ്രതാപം, as in പ്രതാപശാലി "the Majestic" (open doubt 4).
- `part.json` verses "200-210", pages "502-512" and PDF pages "331-341" are correct.

## Open doubts for the reviewer

1. **തീരുമാനങ്ങളെയും** (p. 511): printed "decisions", while the bracket says "names". The DOUBT is in the text.
2. **ഉപയോഗിച്ച്** (p. 511): the DOUBT is in the text.
3. **നാശം** is "corruption" (fasad, as parts 02–10) here, but "ruin" in parts 12, 17 and 31: one Malayalam word with two renderings, chosen by the Arabic it glosses.
4. **പ്രതാപം "majesty"** for العزة in v. 206 (the author adds "or rage"; the table adds "false pride, arrogance"). It is kept the same as in പ്രതാപശാലി "the Majestic".
5. **Supplied quotation marks** on p. 503 ("Checked and left").
6. **Earlier open doubts still apply** (not in this part): see parts 13–32.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ആരാധനാകർമങ്ങൾ / ത്യാഗകർമങ്ങൾ | manasik | rites of worship / rites of self-sacrifice (as part 20) |
| ബലി കഴിക്കുക | — | offer in sacrifice (as part 32) |
| സ്മരണ / സ്മരിക്കുക / ഓർമിക്കുക / ഓർമ | dhikr | remembrance / remember / keep in mind / memory |
| കീർത്തനം / ധ്യാനം / സ്തോത്ര കീർത്തനം | — | extolment / meditation / singing of praise (as parts 05–06) |
| ഐഹിക / പാരത്രിക / ലൗകിക | — | worldly / otherworldly / mundane |
| വിചാരണ / കണക്ക് നോക്കൽ | hisab | reckoning / checking of the account |
| പ്രതിഫലം | — | recompense |
| നാശം / കുഴപ്പം | fasad | corruption / disorder (open doubt 3) |
| പ്രതാപം / പ്രതാപശാലി | 'izzah / 'aziz | majesty / the Majestic (open doubt 4) |
| കൃപ / ദയ / കനിവ് | ra'uf | grace / kindness / tenderness |
| പ്രീതി / പൊരുത്തപ്പാട് | mardat | pleasure / approval |
| ആത്മാർത്ഥത / നിഷ്കളങ്കർ | — | genuineness / sincere ones |
| കുതർക്കി / കുതർക്കം / വഴക്ക് / വഴക്കുകാരൻ | aladd al-khisam | quibbler / quibbling / wrangling / wrangler |
| വൈരാഗ്യം | — | rancour |
| ഊക്ക് / ധിക്കാരം | — | force / defiance (as part 10) |
| ഗുണദോഷിക്കുക | — | admonish |
| സമാധാനം / കീഴൊതുക്കം | silm | peace / submission |
| കാലടികൾ / ചവിട്ടടികൾ | khutuwat | footsteps / treads (as part 26) |
| വഴുതുക / ഇടറുക | zalla | slip / stumble |
| മേഘത്തണലുകൾ | zulal min al-ghamam | shades of cloud |
| മുൻഗാമികൾ / പിൻഗാമികൾ | salaf / khalaf | predecessors / successors |
| മുതകല്ലിമുകൾ | mutakallimun | Mutakallims |
| വ്യവസ്ഥപ്പെടുത്തുക / വ്യവസ്ഥ ചെയ്യുക | — | ordain |
| സ്വാർത്ഥങ്ങൾ / സ്വാർത്ഥ താൽപര്യങ്ങൾ | — | selfish ends / selfish interests |
| അവസരം / സന്ദർഭം | — | juncture / occasion (as part 32) |
| ജംറഃ | jamrah | Jamrah |
| അയ്യാമുത്തശ്രീക്വ് | ayyam al-tashriq | Ayyam al-Tashriq |
| വലിയ പെരുന്നാൾ | — | the Great Festival |
| ഹാജ്ജുമാർ | — | hajjis |
| നിയമനടപടി / നടപടി ക്രമങ്ങൾ | — | legal procedure / procedural orders |
