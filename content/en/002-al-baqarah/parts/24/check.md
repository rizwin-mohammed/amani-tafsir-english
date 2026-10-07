# Check: Al-Baqarah part 24 (verses 153–160)

Checked on 2026-10-07 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 237–248 (book pp. 408–419). Each page was rendered at 150 dpi and read once in full (this range has no footnotes). The amanithafseer.com text was used only as a reading aid; the image was the authority throughout. `pdftotext -bbox` was used to read the vowel marks of شَعَائِرُ الاِسْلَام (p. 416) and لَعَنة (p. 418). Crops (300 dpi): the Umm Salamah dua line (p. 413; two crops, the first missed the line), and the شَعَائِرِ اللَّهِ شَعَائِرُ الاِسْلَام phrase (p. 416).
- **Boundaries.** Part 23 ends on p. 408 with "… ബുഖാരിയിലും മുസ്ലിമിലും കാണാം."; the heading "വിഭാഗം – 19" and the verse 153 panel follow directly, and this part starts there. This part ends on p. 419, six lines down, with "… ഇതൊക്കെത്തന്നെയാണ്.", directly above the verse 161 panel. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 153–160), `words.json` (80 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss were compared with the images (word tables pp. 408, 409, 411, 414, 417). They match, misprints included.
- `[p. N]` markers: 409–419 all present. P. 411, p. 414 and p. 418 begin with verse panels or word tables, so their markers stand at the start of the commentary, as in part 23. [p. 409], [p. 410], [p. 413], [p. 415], [p. 417] and [p. 419] fall mid-sentence and sit at the matching point (as near as English word order allows).
- "### Section – 19" renders the printed "വിഭാഗം – 19". Group markers *[Verse 153]*, *[Verse 154]*, *[Verses 155–157]*, *[Verse 158]*, *[Verses 159–160]* match the author's panels and word tables.

## Corrections made (before → after)

### Same English for two Malayalam words (point g)

1. ഗുണം was "benefit", but this part also renders പ്രയോജനം "benefit" (p. 412, "there is no benefit merely from having uttered it", as part 18 പ്രയോജനപ്പെടുക "be of benefit"). Parts 15 and 16 render ഗുണം "good". So:
   - p. 409 hadith: "Then that becomes a benefit for him." → "Then that becomes good for him."; "Then that too becomes a benefit for him." → "Then that too becomes good for him."
   - Word table v. 158 (خَيۡرٗا, ഒരു നന്മയെ, വല്ല ഗുണവും): "a good, some benefit" → "a goodness, some good" (the pair part 16 used for the same two words, ഗുണം "good" / നന്മ "goodness").
   ഗുണകരം "advantageous" (as part 23) is unchanged.

### Possible dropped list item (point h)

2. p. 412, item (4): the print has "രോഗം പകർച്ച വ്യാധികൾ, അപകടങ്ങൾ, …" with no comma after രോഗം. The English "disease epidemics" reads as one item; it may be two ("disease, epidemics"). A DOUBT was added after "disease epidemics".

No dropped small words, may/will errors, -ഉം future rendered as present, wrong tense, changed voice, reversed negations, added pronouns, dropped തിരുമേനി, added ﷺ, translator words in round brackets, changed reported speech, silently corrected names or misprints, misplaced footnotes, or TNs were found. The files contain no TN.

## Points the caller asked about

- **(a) No DOUBTs or TNs; line-end splits.** Each resolution is supported by the book itself:
  - v. 155 "വല്ലതും / കൊണ്ട്" (p. 410, line end): p. 412 prints "അവയിൽ അൽപം വല്ലതും കൊണ്ട് പരീക്ഷണം നടത്തും" with a space in mid-line. Two words is right.
  - v. 156 "അവങ്കലേക്ക് / തന്നെ" (p. 411, line end): p. 412 quotes the verse's rendering in mid-line as "ഞങ്ങൾ അവങ്കലേക്ക് തന്നെ മടങ്ങുന്നവരുമാണ്", with a space. (The word table has "അവനിലേക്കുതന്നെ" joined, but that is a different form.) Two words is right.
  - v. 156 "യാതൊരു / കൂട്ടർക്ക്" (p. 410, line end): the word table of this verse (p. 411) prints "യാതൊരു കൂട്ടർക്ക്" with a space. Right.
  - v. 159 "മാർഗ / ദർശനമായും" (p. 417, line end): the word table of this verse prints "മാർഗദർശനവും" joined. Joined is right.
  - The other joins in the panels are breaks inside one word (തേടിക്കൊ/ള്ളുവിൻ, മാർ/ഗത്തിൽ, ജീവി/ച്ചിരിക്കുന്നവരാകുന്നു, സ്വത്തുക്ക/ളിലും, അനു/ഗ്രഹാശിസ്സുകളും, സൻ/മാർഗം, അതി/നാൽ, ഭവന/ത്തിങ്കൽ, പശ്ചാ/ത്താപം, കരുണാ/നിധിയുമായുള്ളവൻ and others).
  No other DOUBT or TN is needed, apart from correction 2.
- **(b) "മറച്ചുവെ ക്കുന്നവർ"** (v. 159): the gap is visible in mid-line on the image (and in the text layer). Kept, as part 23 kept "പിൻതുടരു ന്നവരുമല്ല".
- **(c) Misprints kept without TN.** ചിഹനങ്ങളിൽ (v. 158 panel, p. 413) and ചിഹന(അടയാള)ങ്ങളിൽപെട്ടതാണ് (word table, p. 414); കൈക്കൊ (p. 410); രക്ഷിതാവിങ്കിൽ, നൽകിയിരിക്കുയാണ് (p. 413); കർമവുമല്ലാം (p. 415); the unclosed bracket after "(സുമർ 10)" (p. 413) and after "(21:35)" (p. 411), both mirrored; the missing full stops in v. 153 (after തേടിക്കൊള്ളുവിൻ), at the end of v. 155 and at the end of v. 158, all mirrored in English. The meaning is certain in each case; no TN is needed.
- **(d) Site-vs-book differences.** All resolved toward the book, confirmed on the images: p. 410 "കൊണ്ടല്ലാതെയും" (site: കൊല്ലാതെയും); p. 412 "കാര്യങ്ങളെക്കൊണ്ടും"; v. 158 "ആ രണ്ടിലൂടെയും" (site: ആരിലൂടെയും); p. 411 the 21:35 quotation stands in brackets (site: "?"); v. 158 panel ചിഹനങ്ങളിൽ (site: ചിഹ്നങ്ങളിൽ). ﷺ is printed: p. 409 twice, p. 410 twice, p. 413 three times, p. 415 once, p. 416 once, p. 417 once, p. 418 three times; none on pp. 411, 412, 414, 419. The English has exactly these 13. None for "നബി വചനത്തിൽ" (p. 411) or "ഒരു നബി വചനത്തിൽ" (p. 418), where the site adds it. (r) appears only where (റ) is printed (Ahmad and Ibn Majah jointly, Umm Salamah, Muslim, Ibn 'Abbas, Bukhari, 'Urwah, 'A'ishah, Abu Hurairah, Abu Umamah); (a) only where (അ) is printed.
- **(e) Arabic as printed.** شَعَائِرِ اللَّهِ شَعَائِرُ الاِسْلَام (p. 416, crop and text layer); the dua اللَّهُمَّ اَجَرْنِى فِى مصِيبَتِى وَاخْلف لى خَيرا منها (p. 413, crop: fatha on ج, no vowel on خ of خيرا or in منها); لا جُنَاحَ (p. 415); لَعَنة (p. 418, text layer: a fatha on ل and on ع). As in the files. The Quran phrases whose words equal the verse (2:154 end, 2:155, 2:156, 21:35, 39:10, 2:158 phrases, 22:32) are transcribed and their words equal the verses; إن شاء الله, اساف, نائلة, منات, سعى, اِسْتِرْجَاع, شَعِيرَة, والله اعلم as printed.
- **(f) Markers and heading.** See "What was compared".
- **(g) Terms.**
  - ക്ഷമ "patience" (v. 153 panel, commentary; part 08 v. 45 "patience") and സഹനം "forbearance" (v. 153 word table, p. 409, p. 411): kept apart. Right.
  - ഗുണം: see correction 1.
  - ചിഹ്നം "emblem" (as part 22) and അടയാളം "mark" (as part 13): kept apart.
  - വിരോധം is "objection" in the idiom വിരോധമില്ല (word table v. 158; p. 415 "no objection to not doing it") and "hostility" in "വെറുപ്പും വിരോധവും" (p. 418). The sense differs with the context; left, noted.
  - ഭവനം "abode" (v. 158, as part 14 പരലോക ഭവനം; part 13 has ഭവനങ്ങൾ "homes") and വീട് "house" (word table v. 158, as parts 19–20): kept apart.
  - വിവക്ഷ "the intended sense" (p. 418), as part 08.
  - അടിമ "slave" (p. 412) and അടിയാൻ "servant" (p. 413, as parts 04 and 14): kept apart.
- **(h) Intensifiers, "or"/"that is", commas.** അഥവാ is "Or" (pp. 416, 419) and അതായത് "That is" (v. 156), as part 22 settled. തന്നെ is "indeed" throughout. See correction 2.

## Checked and left as they are

- p. 412 (5), കായ്കനികൾ "fruits and produce of trees": one compound word given two English nouns, to keep it apart from ഫലങ്ങൾ "fruits". Left; the reviewer may prefer a single word.
- p. 418 "‘Allah will curse; those who curse will also curse’": the print has no mark between the two clauses; the semicolon only separates them for English. Left.
- v. 154 word table أَمۡوَٰتُۢ "ones who have passed away – thus" for മരിച്ചുപോയവർ എന്ന്: "thus" renders the quotative എന്ന്. Left.
- Word table v. 158: നന്മ is now "goodness" there (correction 1), while the verse's "വല്ല നന്മയും" and the commentary keep "good" for നന്മ, as parts 02 and 13. Left; the reviewer may want one rendering for നന്മ.
- `part.json` verses "153-160", pages "408-419", PDF pages "237-248": correct.

## Open doubts for the reviewer

1. **രോഗം പകർച്ച വ്യാധികൾ** (p. 412): one item or two (correction 2).
2. **ഗുണം / നന്മ** "good / goodness" in the v. 158 word table, following part 16; നന്മ is "good" elsewhere (correction 1).
3. **വിരോധം** "objection" / "hostility" by context.
4. **Earlier open doubts still apply** (not in this part): see parts 13–23.

## New terms (not in the glossary; used consistently in this part)

The translator left no list in the files; this list is drawn from the files as they stand after this check.

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ക്ഷമ / ക്ഷമിക്കുന്നവർ / ക്ഷമാലുക്കൾ / ക്ഷമയുള്ളവർ | sabr / sabirun | patience / those who are patient / the patient / those who have patience |
| സഹനം | sabr (word table) | forbearance |
| അക്ഷമ / ക്ഷമകേട് / വേവലാതി | — | impatience / lack of patience / agitation |
| രക്തസാക്ഷികൾ / ശുഹദാക്കൾ / ശഹീദുകൾ | shuhada' | martyrs / shuhada' / shahids |
| ബാധ / ആപത്ത് / വിപത്ത് | musibah | affliction / calamity / disaster |
| അനുഗ്രഹാശിസ്സുകൾ | salawat | blessings |
| സന്മാർഗികൾ / സൻമാർഗം പ്രാപിച്ചവർ | al-muhtadun | the rightly guided / those who have attained right guidance |
| ഇസ്തിർജാഉ് | istirja' | istirja' |
| ചിഹ്നം (ചിഹനം) / അടയാളം | sha'irah | emblem / mark |
| പ്രദക്ഷിണം ചെയ്യുക / ചുറ്റിനടക്കുക | tawaf | circumambulate / walk around |
| സഅ്യ് | sa'y | sa'y |
| മേട് / കുന്ന് | — | mound / hill |
| ബിംബം / വിഗ്രഹം | — | image / idol |
| ഭവനം / വീട് | al-bait | abode / house |
| തെറ്റില്ല / വിരോധമില്ല | la junah | there is no wrong / there is no objection |
| സ്വമേധയാ / ഐച്ഛികം | tatawwu' | voluntarily / optional |
| പുണ്യം / പുണ്യകർമം | — | what is meritorious / meritorious deed |
| ഗുണം / നന്മ (word table) | khair | good / goodness |
| ഗുണകരം / പ്രയോജനം | — | advantageous / benefit |
| മറച്ചുവെക്കുക / മൂടിവെക്കുക | katama | hide / cover up (as part 23) |
| ശാപം / ശപിക്കുക | la'nah | curse |
| വെറുപ്പ് / വിരോധം | — | loathing / hostility |
| വിവക്ഷ | — | the intended sense (as part 08) |
| അടിമ / അടിയാൻ | — | slave / servant |
| അവതരണഹേതു | sabab al-nuzul | the cause of the sending down |
| താക്കീത് | — | warning |
