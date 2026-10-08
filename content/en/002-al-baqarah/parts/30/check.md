# Check: Al-Baqarah part 30 (verses 186–187)

Checked on 2026-10-08 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 298–307 (book pp. 469–478). Each page was rendered at 150 dpi and read once in full, including the (\*) footnote on p. 471. The full (untruncated) `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary, and `pdftotext -bbox` was used for the vowel marks and word joins of the Arabic on pp. 471, 472, 475, 476 and 477. The amanithafseer.com text was not needed. Crops (300 dpi, four small strips): كَمَاكُتِبَ … and هُنَّ لِبَاسٌ … (p. 475), تِلْكَ حُدُودُاللَّهِ فَلاتَقْرَبُوهَا and لاتَقْرَبُوا (p. 477).
- **Boundaries.** Part 29 ends on p. 469 with "… ഉൾപ്പെടുത്തി അനുഗ്രഹിക്കട്ടെ. آمين"; the verse 186 panel follows directly on the same page, and this part starts there. This part ends on p. 478 with hadith 8, "… ഹദീഥിൽ വന്നിട്ടുണ്ട്. (ദാ; ജ.)", the last line of the page; PDF p. 308 opens with the verse 188 panel. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 186–187), `words.json` (61 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images (panels pp. 469 and 473–474, word tables pp. 469–470 and 474–475), misprints included: സ്വന്ത്വങ്ങളോട് (v. 187; the word table has സ്വന്തങ്ങളോട്, as the file), "എനി, ഇപ്പോൾ", the missing stop after "[കൂടിച്ചേരരുത്]", the table's "അവ. അത്" and "നിന്നോടുചോദിച്ചാൽ".
- `[p. N]` markers: 470–478. P. 469 holds the end of part 29, the verse 186 panel and the start of its table, so it has no marker. [p. 470] and [p. 475] stand at the start of the commentary because the word tables fill the tops of those pages; p. 474 holds only the verse panel and table, so it has no marker. The others sit where each page turns: [p. 471] "this verse *[p. 471]* came down"; [p. 472] "'iba*[p. 472]*dah" (ഇബാ/ദത്ത്); [p. 473] "hasten *[p. 473]* for him" (വേഗ/മാക്കിക്കൊടുക്കുക); [p. 476] "has pardoned *[p. 476]* the wrong" (തെറ്റ് മാപ്പ് / ചെയ്കയും); [p. 477] "nothing incongruous *[p. 477]* in it" (ചെയ്തിട്ടു/ണ്ടെങ്കിൽ); [p. 478] "they may observe caution, *[p. 478]* surely" (പാലിച്ചേക്കാമ/ല്ലോ). All right.
- Group markers *[Verse 186]* and *[Verse 187]* match the panels. There is no heading in this part.

## Corrections made (before → after)

### Dropped word

1. p. 470, the A'rabi's question: "എങ്കിൽ അവനോട് നമുക്ക് വിളിച്ച് ചോദിക്കാം": "Then we may call out to Him’" → "Then we may call out and ask Him’".

### Punctuation added by the translator

2. p. 471: the print has no opening quote before "അല്ലാഹുവിനെ വിളിച്ചു, അവനോട് തേടി’" (only the closing one). Mirrored, as part 29 mirrored unbalanced marks: "When one says in Malayalam ‘called Allah, sought of Him’" → "When one says in Malayalam called Allah, sought of Him’".

### Words added inside the author's brackets

3. v. 187: the author's square bracket is "[കൂടിച്ചേരുകയും]" (no "with them"), as "[കൂടിച്ചേരരുത്]" later in the verse is "[do not come together]": "[come together with them]" → "[come together]".

### Same Malayalam, same English / one English for two words

4. ദേഹം (body) was "self", while സ്വന്തം in the verse and on p. 475 is "own self/selves": p. 470 "torments the self by lying in starvation" → "torments the body …" (ദേഹം പീഡിപ്പിച്ചാലേ); p. 472 hadith "show moderation to your selves" → "… to your bodies" (നിങ്ങളുടെ ദേഹങ്ങളോട്).
5. നോമ്പ്(ു) കാലം was "the fasting season" on p. 475 but "the time of fasting" on pp. 470 and 477, while നോമ്പ് സമയങ്ങൾ (p. 477) is "the times of fasting": p. 470 "supplication in the time of fasting" → "supplication in the fasting season"; p. 477 "usually practised in the time of fasting" → "usually practised in the fasting season".
6. "figurative" stood for both വ്യംഗ്യാർത്ഥം and അലങ്കാരവാക്യം (p. 475): "The figurative meaning is intercourse with women too." → "The implied meaning is …"; അലങ്കാരവാക്യം stays "figurative sentence".

### Meaning / order

7. p. 478 hadith 1, "നിങ്ങൾ അത്താഴം … കഴിക്കണം": "‘Eat the night meal" → "‘You must eat the night meal".
8. p. 478 hadith 7, "എല്ലാ കൊല്ലവും (റമദ്വാനിലെ) പത്തു ദിവസം": the bracket qualifies the ten days: "used to do i'tikaf for ten days every year (in Ramadan)." → "used to do i'tikaf every year for ten days (of Ramadan)."
9. p. 475 "ഭാര്യാഭർത്താക്കൾ തമ്മിലുള്ള": "between husband and wife" → "between wife and husband" (the print's order, as in "relationship of wife and husband" for ഭാര്യാഭർത്തൃബന്ധം).

### DOUBT added

10. v. 187 "‘ആയത്ത്’ [ലക്ഷ്യം]കളെ": every earlier occurrence of ലക്ഷ്യം beside ആയത്ത് carries the open "evidence" / "aim" doubt (parts 01–02, 07, 17, 20, 23). The same DOUBT is added after "His ‘ayah’ [evidence]s" in `verses.json`.

No may/will errors, -ഉം future rendered as present, reversed or "fixed" negations, changed reported speech, dropped തിരുമേനി, added ﷺ, silently corrected names or misprints, misplaced footnotes or translator words in round brackets were found apart from the above.

## Points the caller asked about

- **(a) The TN on p. 478.** The image (and the bbox layer) shows لَعَلَّهُمْ يَتَّقُونَ, the words that end verse 187, in a sentence that speaks of verse 183 and glosses it "നിങ്ങൾ സൂക്ഷ്മത പാലിച്ചേക്കുവാൻവേണ്ടിയാണ് അത്" (you). Verse 183 ends لَعَلَّكُمۡ تَتَّقُونَ in `data/quran-uthmani.json`, and the book itself prints لَعَلَّكُمْ تَتَّقُون in its verse 183 commentary (p. 460, part 29). The difference is in the printed text, so a TN is warranted under rule 7; its wording only states the two texts and the gloss, without judging which the author meant. Kept unchanged. The Arabic is kept as printed (its letters and vowels equal 2:187's).
- **(b) DOUBTs.** One added (correction 10). Also considered and left without a doubt: v. 186 "If he calls (and prays to) Me": the verse clause "എന്നെ വിളി(ച്ചു പ്രാർത്ഥി)ച്ചാൽ" has no subject; the word table gives "അവൻ എന്നെ വിളിച്ചാൽ", so "he" follows the author's own gloss. p. 471 "അവരുടെ അപേക്ഷകളെ" "requests", p. 473 "ലജ്ജിക്കുന്നതാണ്" "will … be ashamed": clear. ആഇശാഃ / ആഇശഃ (p. 478, both spellings printed): "A'ishah" throughout, as part 29.
- **(c) Arabic.** As printed, confirmed with bbox and crops: إِذَاسَأَلَكَ عَبِيدى (p. 471; joined except before عبيدى (1.4 pt), ى undotted, fatha on ع, kasra on ب); كَمَاكُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ (p. 475, crop: كما joined to كتب, the other words spaced, every mark as in the file); هُنَّ لِبَاسٌ لَكُمْ وَأَنْتُمْ لِبَاسٌ لَهُنَّ (p. 475, crop: no shadda on the lam of لكم/لهن, every mark as in the file; the gaps between words are small but present); حَتَّى يَتَبَيَّنَلَكُمُ الْخَيْطُالأَبْيَضُمِنَالْخَيْطِالأَسْوَدِ (p. 476: the glyph boxes overlap at every join, with true gaps only after حتى (1.1 pt) and after لكم (1.4 pt), so the joins are as transcribed; vowels as in the file); تِلْكَ حُدُودُاللَّهِ فَلاتَقْرَبُوهَا and لاتَقْرَبُوا (p. 477, crops; no mark on لا; the ~0.5 pt gaps after the non-joining letters ك and د are the font's ordinary spacing, so the bbox alone cannot decide them, and the transcription follows the image); الإِعْتِكَاف (p. 477); دَعَا, دُعَاء, دَعْوَة, عَبْد, عِبَاد، عبيد (p. 471); رَفَث (p. 475); فجر, غروب (p. 476, unvowelled, spaced inside the brackets as printed); إن شاء الله (p. 476). **Data-file forms**, whose letters and vowels equal the print (the print joins words and lacks only Uthmani signs): إِذَا سَأَلَكَ عِبَادِي and فَلۡيَسۡتَجِيبُواْ لِي (p. 471), إِنِّي قَرِيبٌ and أُجِيبُ دَعۡوَةَ ٱلدَّاعِ (p. 472), وَٱبۡتَغُواْ مَا كَتَبَ ٱللَّهُ لَكُمۡ and مِنَ ٱلۡفَجۡرِ (p. 476), لَعَلَّهُمۡ يَتَّقُونَ (p. 478). Kept. `npm run check` lists six Al-Baqarah "close but not exact" items, the same six before and after this check: the two known ones (تَابَ إِلَى الله, part 06; عَسَى رَبُّهُ إِنْ طَلَّقَكُنَّ, part 19), 9:38 (part 26), 2:184 and 2:185 (part 29), all accepted earlier as as-printed quotations, and from this part حَتَّى يَتَبَيَّنَلَكُمُ … الأَسْوَدِ (2:187, 93%), which is the as-printed transcription (joined words) and is right.
- **(d) ﷺ and (r).** ﷺ is printed 18 times: p. 470 one, p. 471 three, p. 472 five, p. 473 two, p. 476 one, p. 477 one, p. 478 five (റസൂൽ, hadiths 4, 6, 7, 8). The English has exactly these 18; none at "the noble Prophet" for തിരുമേനി alone (pp. 472–473, 478), at "നബി വചനങ്ങൾ" (p. 478) or at "റസൂൽ ഇഅ്തികാഫ് ചെയ്യുമ്പോൾ" (hadith 7). (r) is printed 15 times and the English has 15, at the same names.
- **(e) Footnote p. 471.** The (\*) marker stands after "… അന്തർഭവിച്ചിരിക്കുന്നു." in the paragraph that ends "… അതുതന്നെ."; the note follows that paragraph and is complete (both word pairs, the plurals, Imam Raghib (r), Al 'Imran 182).
- **(f) Page markers.** See above.
- **(g) Kept as printed.** സ്വന്ത്വങ്ങളോട് (v. 187); ചൂണ്ടികൊണ്ട് (p. 477; English "pointing to them" carries the certain meaning). Unbalanced marks, all mirrored: the hadith of Abu Musa (two openings, one closing, p. 472), the hadith from Abu Hurairah (closing only, p. 472), Tirmidhi's hadith (opening only, p. 472), "What is making haste?’" (closing only, p. 473), the bracket opened at "(These hadiths …" (p. 476, never closed), the i'tikaf quotation (p. 477, opening only), the verse 183 quotation (p. 478, opening only), hadith 1 (p. 478, opening only); and now p. 471 (correction 2). Hadiths 6–8 on p. 478 are separate numbered paragraphs, as printed.
- **(h) Terms.** പ്രാർത്ഥന "supplication" (as the earlier table, du'a), പ്രാർത്ഥിക്കുക "pray"; അടിയാൻ "servant" and അടിമ "slave" kept apart (as parts 04, 14 and the earlier tables); നോമ്പ് തുറക്കുക "open the fast"; അത്താഴം "night meal"; സംസർഗം "intercourse", സമ്പർക്കം "relations", സ്പർശനം "contact", അടുപ്പം "closeness"; അതിർത്തി "boundary", അതിര് "bound", പരിധി "limit"; ഇഅ്തികാഫ് "i'tikaf", ഭജനമിരിക്കുക "sit in devotion" (as the earlier table); ലക്ഷ്യം "evidence" (with the open doubt, correction 10); ദേഹം "body" (correction 4); പുണ്യകർമം "meritorious deed" (as part 27).
- **(i) Part 29 lessons.** Allah stays the active subject (p. 476 "He fixed a boundary … commanded", p. 477 "He says"); every bracket and phrase is attached to the sentence the print attaches it to (correction 8 for the one exception). ദോഷം does not occur in this part.

## Checked and left as they are

- p. 470 "At the end, glorifying Allah, and showing thanks to Him, were advised." and "many things were stated": the author's subjectless actives; passives kept, as parts 27–29.
- p. 476 "He fixed a boundary for it, ‘until the dawn becomes manifest’," and p. 477 "the word ‘do not approach them’ ( لاتَقْرَبُوا )": the print has no quotation marks around these phrases introduced by എന്ന് / എന്നുള്ള; the English marks only show where the cited words begin and end. Left; the reviewer may prefer them removed.
- p. 470 the quotation ends with seven dots in the print and eight in the English; p. 477 the full stop after ( الإِعْتِكَاف ) is not printed. Punctuation only; left.
- p. 472 "it is One who hears and sees (all)": the bracket stands before "കേൾക്കുന്നവനും" in the print; English word order; left.
- p. 478 hadith 7 "(such as relieving oneself)" after "human needs": the print's bracket stands before മനുഷ്യാവശ്യങ്ങൾ; English word order; left.
- `part.json` verses "186-187", pages "469-478", PDF pages "298-307": correct.

## Open doubts for the reviewer

1. **ലക്ഷ്യം** "evidence" in v. 187 (correction 10), as parts 01–02, 07, 17, 20, 23.
2. **TN on p. 478** (point a).
3. **Supplied quotation marks** on pp. 476 and 477 ("Checked and left").
4. **ദേഹം** "body" (correction 4): the hadith's "show moderation to your bodies" is literal; "yourselves" would follow the Arabic sense but merge ദേഹം with സ്വന്തം.
5. **Earlier open doubts still apply** (not in this part): see parts 13–29.

## New terms (not in the glossary; used consistently in this part)

The translator left no list in the files; this list is drawn from the files as they stand after this check (it includes the terms the caller named).

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| പ്രാർത്ഥന / പ്രാർത്ഥിക്കുക / ദുആ | du'a | supplication / pray / du'a' |
| വിളിക്കുക / വിളിച്ചു പ്രാർത്ഥിക്കുക | da'a | call / call on and pray |
| അടിയാൻ / അടിമ | 'abd | servant / slave (kept apart) |
| സമീപസ്ഥൻ / ദൂരസ്ഥൻ | qarib | one who is near / far |
| നോമ്പ് തുറക്കുക / നോമ്പുതുറക്കൽ | iftar | open the fast / opening of the fast |
| നോമ്പ് കാലം / നോമ്പ് സമയങ്ങൾ | — | the fasting season / the times of fasting |
| അത്താഴം | suhur | the night meal |
| സംസർഗം / സമ്പർക്കം / സ്പർശനം / കൂടിച്ചേരുക / അടുപ്പം | rafath / mubasharah | intercourse / relations / contact / come together / closeness |
| സ്വകാര്യ സല്ലാപം | rafath | private amorous talk |
| സാക്ഷാൽ അർത്ഥം / വ്യംഗ്യാർത്ഥം / അലങ്കാരവാക്യം / ഉപമാലങ്കാരം | — | literal meaning / implied meaning / figurative sentence / simile |
| അതിർത്തി / അതിര് / പരിധി / നിയമാതിർത്തി | hudud | boundary / bound / limit / legal boundary |
| ഇഅ്തികാഫ് / ഭജനമിരിക്കൽ | i'tikaf | i'tikaf / sitting in devotion |
| ലക്ഷ്യം | ayah | evidence (open doubt) |
| ദേഹം / സ്വന്തം / ആത്മാവ് | nafs | body / own self / soul |
| പുണ്യകർമം | — | meritorious deed (as part 27) |
| സന്താനലബ്ധി / സന്താനലാഭം | — | the obtaining of offspring / the gain of offspring |
| ജനാബത്ത് / വലിയ അശുദ്ധി | janabah | janabah / major impurity |
| ബറക്കത്ത് | barakah | barakah |
| വഞ്ചന | khiyanah | deceit |
