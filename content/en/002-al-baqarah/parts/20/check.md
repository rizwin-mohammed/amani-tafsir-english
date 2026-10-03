# Check: Al-Baqarah part 20 (verses 126–132)

Checked on 2026-10-03 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 196–206 (book pp. 367–377). Each page was rendered at 150 dpi and read once in full, including the two footnote blocks (pp. 369, 375). The amanithafseer.com text was used only as a reading aid; the image was the authority throughout. The `ml2uni.py` text layer was used for spelling on p. 370 (word gaps) and p. 376 (verse 132). Crops (300 dpi): the p. 369 Arabic (ثَّمَرَات and the Ibrahim 37 quotation), and two crops of the verse 132 panel on p. 376 that missed the intended line (wrong coordinates).
- **Boundaries.** Part 19 ends at the top of p. 367 with "… ഈ വചനത്തിൽ അടങ്ങിയിരിക്കുന്നു."; the verse 126 panel follows directly, and this part starts there. This part ends on p. 377 with "… പാത്രമായിത്തീരും.", directly above the verse 133 panel. Both boundaries confirmed.
- `part.json`, `verses.json` (verses 126–132), `words.json` (93 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added. Both footnotes are present, each after the paragraph that carries its marker: (\*) p. 369 after the paragraph ending "… إن شاء الله"; (\*) and (\*\*) p. 375 after the Bukhari hadith paragraph.
- `verses.json` and every `words.json` gloss were compared with the images (word tables pp. 367, 371, 376–377). After the corrections below they match.
- `[p. N]` markers: 368, 369, 371, 372, 373, 374, 375, 377. P. 367 needs none (the part starts at its verse panel; part 19 carries the marker). P. 370 holds only the verse 127–129 panels and p. 376 only the verse 130–132 panels and word table, so neither has a marker (point g). [p. 369], [p. 372], [p. 374] and [p. 375] fall mid-sentence and sit at the matching point.
- Group markers: *[Verse 126]*, *[Verses 127–129]*, *[Verses 130–132]*, matching the author's panels. "### Section – 16" renders the printed "വിഭാഗം – 16" above the verse 130 panel on p. 375 (point g).

## Corrections made (before → after)

### Malayalam not as printed (point a and visible gaps)

1. Verse 128, "ആരാധനാ / കർമങ്ങൾ" falls at a line break on p. 370; the files had joined it as on the site. The book itself writes the phrase as two words in the word table (ആരാധനാ കർമങ്ങളെ, p. 371) and the commentary (ആരാധനാ കർമങ്ങൾ, pp. 372–373): "ആരാധനാകർമങ്ങൾ" → "ആരാധനാ കർമങ്ങൾ".
2. Verse 129, "അവരിൽ / നിന്ന്" falls at a line break; the book writes അവരിൽ നിന്ന് with a space in verse 126 and in the word tables: "അവരിൽനിന്ന് (തന്നെ)" → "അവരിൽ നിന്ന് (തന്നെ)".
3. Visible gaps inside words in the p. 370 panels (also in the text layer). The translator kept one, "(ത്യാഗ കർമ ങ്ങൾ)", and closed the others; following part 18 (which kept such gaps), all are now kept: verse 127 "(അതിന്റെ)" → "(അതി ന്റെ)"; verse 128 "സ്വീകരിക്കുകയും" → "സ്വീകരി ക്കുകയും", "നിശ്ചയമായും നീ" → "നിശ്ചയ മായും നീ". (Gaps that show only in the text layer, not on the image, e.g. സ്വീകരിക്കേണ മേ, were not added.)

### Same Malayalam, different English

4. p. 369, the gloss of فَأُمَتِّعُهُۥ قَلِيلٗا ثُمَّ (സുഖമനുഭവിപ്പിക്കുകയും), rendered "make him enjoy comfort" in the verse and word table: "(But I will let him enjoy comfort a little, …" → "(But I will make him enjoy comfort a little, …".
5. p. 369, ഇന്നാകട്ടെ (ആകട്ടെ is "for his part / as for" in verse 130; "indeed" renders തന്നെ): "Today, indeed, all kinds of food resources …" → "As for today, all kinds of food resources …".

### -ഉം future rendered as present

6. p. 372, … ഉൾപ്പെടുമെങ്കിലും (as part 17 corrected ഉൾപ്പെടും): "the Arabs, who are the line of descendants of Isma'il (a), are included" → "… will be included".
7. p. 375, … ഒരു കൊടി നാട്ടുകയും ചെയ്യും: "They also plant a flag at their door" → "They will also plant a flag at their door".

### Dropped -ഉം

8. p. 377, പരലോകത്തിലോ, … അടിയാൻമാരിൽ ഒരാളുമാകുന്നു: "In the Hereafter, he is one of the good servants of Allah." → "In the Hereafter, he is also one of the good servants of Allah."

### TN wording (point c)

9. p. 372, request (2): the translator's TN put its own words in round brackets (reserved for the author's additions) and retyped the Arabic. "The Arabic printed here is that of request (3) below (وَمِنْ ذُرِّيَّتِنَا أُمَّةً مُسْلِمَةً لَكَ). The Malayalam rendering beside it (make the two of us submissive to You) is that of …" → "The Arabic printed here is the same as that of request (3) below. The Malayalam rendering beside it, “make the two of us submissive ones to You – Muslims –”, is that of رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ (2:128), evidently the words intended." The substance is unchanged.

No may/will errors, wrong tense besides the above, reversed negations, changed reported speech, dropped തിരുമേനി, translator words in round brackets in the translation, silently corrected names or misprints, or misplaced footnotes were found.

## Points the caller asked about

- **(a)** See corrections 1–2. On the image both are plain line breaks after a complete word; the book's own spelling of the same words elsewhere settles them.
- **(b) ZWNJ.** ഇബ്റാഹീം, കീഴ്പെട്ട / കീഴ്പ്പെടുന്ന, മുസ്ലിം, സംസ്ക്കരി, ഇസ്മാഈൽ: at 150 dpi nothing plainly shows a separated virama beyond what the font always shows for these clusters. Kept without ZWNJ, as in earlier parts.
- **(c)** Confirmed on the image: under (2) the book prints وَمِنْ ذُرِّيَّتِنَا أُمَّةً مُسْلِمَةً لَكَ (the same Arabic as (3)), followed by "ഞങ്ങളെ രണ്ടാളെയും നിനക്ക് കീഴൊതുങ്ങിയവർ – മുസ്‌ലിംകൾ – ആക്കേണമേ". The main text keeps the printed Arabic. The TN rests only on what is visible (the printed Arabic, the printed Malayalam, and the verse 128 text in this same part). Reworded only (correction 9).
- **(d) Arabic.** 14:35 (p. 368) is printed اجْعَلْ هَذَا البَلَدَ آمِنًا (the site wrongly repeats بَلَدًا); its words equal the verse, so the data-file form ٱجۡعَلۡ هَٰذَا ٱلۡبَلَدَ ءَامِنٗا stands. 14:37 (p. 369, crop) is printed through الْمُحَرَّم; words equal the verse; data-file form stands. 28:57 (p. 369) is printed through مِنْ لَدُنَّا with the reference "-القصص: ٥٧"; as in the English. ثَّمَرَات (p. 369, crop: shadda and fatha on ث) as printed. انا دعوة ابي ابراهيم (p. 373; the site has an extra ا) and لا يعبد الله الا بما شرع (p. 373) are unvowelled, as transcribed. وَلَا تَمُوتُنَّ … (p. 372) is printed with وَ, so it matches 3:102, not 2:132; as in the English. يَتْلُو (p. 374) is printed without the final alif; ordinary spelling, data-file form stands. The Bukhari hadith (p. 369) is transcribed as printed; at 150 dpi the vowel under the last ه of فيه was not legible and was not cropped.
- **(e) ﷺ.** Printed: p. 369 once, p. 373 seven times, p. 374 three times, p. 375 once; the English has exactly these. Not printed (and not in the English): Salman's "(നബി തിരുമേനി)" and "നബി തിരുമേനി വരുത്തിയ സംസ്കരണം" (p. 374), "തിരുമേനി സമുദായത്തിന്" (p. 374), where the site adds it.
- **(f)** Unclosed quotes and brackets mirror the print: Salman's quote (p. 374), the opening ‘ before ഇബ്റാഹീം (p. 377), the 25:74 gloss (p. 372), "… 2–ാം വചനവും നോക്കുക)" (p. 373). Stray full stops: "രൂപകൽപന. നൽകിയാൽപോരാ" (p. 373), "അദ്ദേഹം. വസ്വിയ്യത്ത്" (p. 377) and "പ്രാർത്ഥിക്കേണ്ടത്. പിന്നീടാണ്" (p. 372) are not shown in English; the meaning is certain in each case. The footnote on p. 375 has no full stop between its two sentences; the English mirrors it.
- **(g)** See above.
- **(h) Terms.** ഭോഷൻ (v. 130) and വിഡ്ഢി (word table v. 130, p. 377): earlier parts already render both "fool(s)" (ഭോഷന്മാർ part 02, വിഡ്ഢികൾ part 11), so both stay "fool"; English has no clearly distinct word, noted for the reviewer. ആൾക്കാർ (v. 126) "people" and ജനങ്ങൾ (pp. 372, 374, 375, 377) "the people": earlier parts render both "people" (ആൾക്കാർ parts 07, 13, 17; ജനങ്ങൾ part 09), so they stay; noted. ജനത "a people" (p. 373) and മനുഷ്യർ "mankind" (p. 373) are kept apart. അവസാനത്തെ ദിവസം "the final day" (word table v. 126) is kept apart from അന്ത്യദിനം "the Last Day" (v. 126, p. 368; as part 10). വിജ്ഞാനം "wisdom", തത്വം "principle", യുക്തി "sagacity", യുക്തിമാൻ "the Sagacious", അഗാധജ്ഞൻ "the Profoundly Knowing" (as part 06): one English word each.
- **(i) ലക്ഷ്യങ്ങൾ** (word table v. 129; p. 374 ലക്ഷ്യങ്ങളും, ലക്ഷ്യദൃഷ്ടാന്തങ്ങൾ): beside ദൃഷ്ടാന്തങ്ങൾ "signs" it is rendered "evidences", with the DOUBT kept; on p. 373 (ഓരോ പ്രാർത്ഥനയുടെയും ലക്ഷ്യം) it clearly means "aim" and is so rendered. The same open question as parts 01–02, 07 and 17.

## Checked and left as they are

- p. 368, "About the second, it may be described further on." (വഴിയെ വിവരിക്കാം, no subject): an earlier part renders the same construction "we can examine further on"; the passive is acceptable. Left.
- p. 368, "alerted him that leadership will not be given to those who are wrongdoers" (നൽകുകയില്ല, no subject) and "(provision may be given to those who disbelieved too)" (നൽകാം): subjectless verbs rendered passive. Left.
- p. 368, "after first taking them to Makkah and placing them there": the object is implied by the sentence before. Left.
- Word table v. 127, وَإِذۡ يَرۡفَعُ "the occasion of raising (when they were lifting)": "they" is implied by the verse. Left.
- p. 369, the hadith and p. 373 sayings carry quotation marks that the print does not have (the Malayalam marks them with എന്ന്), as part 18 accepted. Left.
- p. 372, "(Do not die except while being Muslims)" for നിങ്ങൾ … മരിക്കരുത്: the imperative carries "you". Left.
- p. 374, the dash phrase "– without distinction as important or unimportant" stands after "all spheres of human life" rather than before it; the meaning is unchanged. Left.
- Verse 132 "എന്റെ മക്കളേ": at 150 dpi the vowel sign was unclear; two crops missed the line; the text layer has മക്കളേ, as the files. Left.
- Word table v. 132 പുത്രന്മാരോട് (ന്മ) beside പുത്രൻമാരേ (ൻമ): as the image shows. Left.
- `part.json` verses "126-132", pages "367-377", PDF pages "196-206": correct.

## Open doubts for the reviewer

1. **ലക്ഷ്യങ്ങൾ** (word table v. 129, p. 374): "evidences" or "aims"; same question as parts 01–02, 07, 17.
2. **ഭോഷൻ / വിഡ്ഢി** both "fool", and **ആൾക്കാർ / ജനങ്ങൾ** both "people": English has no clearly distinct pair; the reviewer may wish to pick one.
3. **Earlier open doubts still apply** (not in this part): see parts 13–19.

## New terms (not in the glossary; used consistently in this part)

The translator left no list in the files; this list is drawn from the files as they stand after this check.

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| നിർഭയമായ രാജ്യം | balad amin | a secure country |
| ആൾക്കാർ / നിവാസികൾ / രാജ്യക്കാർ / ജനങ്ങൾ | ahl | people / inhabitants / people of that country / the people |
| ഫലവർഗങ്ങൾ / ഫലങ്ങൾ | al-thamarat | kinds of fruit / fruits |
| അന്ത്യദിനം / അവസാനത്തെ ദിവസം | al-yawm al-akhir | the Last Day / the final day |
| സുഖമനുഭവിപ്പിക്കുക | amatti'u | make enjoy comfort |
| വെള്ളത്താവളം | — | watering place |
| ജനവാസം | — | habitation of people |
| അടിത്തറ / അസ്തിവാരം | al-qawa'id | foundation / base |
| കഅ്ബാമന്ദിരം | — | Ka'bah edifice |
| കീഴൊതുങ്ങിയവർ / കീഴ്പ്പെട്ട | muslim | submissive ones / subdued (as part 17) |
| ആരാധനാ കർമങ്ങൾ / ത്യാഗ കർമങ്ങൾ / ബലികാര്യങ്ങൾ | manasik | rites of worship / rites of self-sacrifice / matters of sacrifice |
| പശ്ചാത്താപം സ്വീകരിക്കുന്നവൻ | al-tawwab | the One who accepts repentance |
| ഓതിക്കൊടുക്കുക / ഓതിക്കേൾപ്പിക്കുക | yatlu | recite and hand on / recite in their hearing |
| വിജ്ഞാനം / തത്വം / യുക്തി | hikmah | wisdom / principle / sagacity |
| അഗാധജ്ഞൻ / യുക്തിമാൻ | al-hakim | the Profoundly Knowing / the Sagacious |
| സംസ്കരിക്കുക / സംസ്കരണം | yuzakki | refine / refinement |
| അതൃപ്തി കാണിക്കുക / അതൃപ്തിപ്പെടുക | raghiba 'an | show discontent / be discontented |
| ഭോഷൻ / വിഡ്ഢി | safiha | fool (noted above) |
| തെളിയിച്ചെടുക്കുക | istafa | pick out clear |
| സജ്ജനങ്ങൾ | al-salihin | the righteous |
| വസ്വിയ്യത്ത് | wasiyyah | wasiyyah |
| മതം / നടപടി ക്രമം | al-din | the religion / the procedure |
| ദൈവദൂതൻ | — | divine messenger |
| അനാചാരങ്ങൾ | — | improper practices |
| ഉൽകൃഷ്ടഗുണങ്ങൾ | — | excellent attributes |
| നാഴിക | — | nazhika |
