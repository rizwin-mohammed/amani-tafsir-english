# Check: Al-Baqarah part 23 (verses 144–152)

Checked on 2026-10-03 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 227–237 (book pp. 398–408). Each page was rendered at 150 dpi and read once in full, including the one footnote (p. 400). The amanithafseer.com text was used only as a reading aid; the image was the authority throughout. `pdftotext -bbox` was used to count and place the printed dots (pp. 399, 406) and to read the vowel marks of two Arabic phrases (pp. 406, 408). Crops (300 dpi): the p. 406 line with لِئَلَا يَكُونَ لِلنَّاسِ (two crops; the first missed the left half), and the p. 408 line with وَيُعَلِّمُكُمْ مَا لَمْ تَكُونُوا (two crops; the first missed the line).
- **Boundaries.** Part 22 ends on p. 398 with "… കാരുണ്യത്തിന് പാത്രമാക്കേണമേ!"; the verse 144 panel follows directly, and this part starts there. This part ends on p. 408 with "… ബുഖാരിയിലും മുസ്ലിമിലും കാണാം.", directly above the heading "വിഭാഗം – 19" and the verse 153 panel. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 144–152), `words.json` (126 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The footnote (\*) of p. 400 (the founding of the Ka'bah and of Bait al-Muqaddas) stands right after the paragraph that carries its marker, which ends "… അല്ലാഹു തുടർന്നു പറയുന്നു:".
- `verses.json` and every `words.json` gloss were compared with the images (word tables pp. 398–399, 401–402, 403, 405, 407). They match.
- `[p. N]` markers: 399, 400, 402, 403, 404, 405, 406, 407, 408. P. 398 needs none (the part starts at its verse panel). P. 401 holds only the verse 145–147 panels and word table, so it has no marker. P. 407 begins with the verse 151–152 panels, and the commentary on those verses starts at the foot of that page, so [p. 407] rightly stands at the start of that commentary (not mid-text). [p. 400], [p. 403], [p. 406] and [p. 408] fall mid-sentence and sit at the matching point.
- Group markers: *[Verse 144]*, *[Verses 145–147]*, *[Verse 148]*, *[Verses 149–150]*, *[Verses 151–152]*, matching the author's panels and word tables. "### Section – 18" renders the printed "വിഭാഗം – 18" above the verse 148 panel on p. 403 (the site lacks it).

## Corrections made (before → after)

### Arabic not as printed (point j)

1. p. 406: the print has no shadda on لا (crops): **لِئَلَّا يَكُونَ لِلنَّاسِ** → **لِئَلَا يَكُونَ لِلنَّاسِ**.
2. p. 408: the print has a sukun on the last م of وَيُعَلِّمُكُمْ and no shadda on مَا (crop and text layer), so it is not the data-file form: **وَيُعَلِّمُكُم مَّا لَمۡ تَكُونُواْ تَعۡلَمُونَ** → **وَيُعَلِّمُكُمْ مَا لَمْ تَكُونُوا تَعْلَمُونَ** (transcribed as printed).

### Same Malayalam, different English (point h)

3. ആകയാൽ was rendered "hence", a new rendering. Parts 03, 09, 10, 13, 14, 17 and 20 render it "therefore" every time (vv. 18, 22, 54, 59, 86, 89, 115, 132), so it is "therefore" again: v. 152 "Hence, remember Me" → "Therefore, remember Me"; word table v. 147 "hence you must certainly not become" → "therefore you must …"; v. 148 "hence advance, get ahead, …" → "therefore advance, …"; v. 152 "hence remember Me" → "therefore remember Me". (This leaves അതിനാൽ and ആകയാൽ both "therefore", as in parts 10, 13 and 15; see open doubts.)

### Line-end split without a DOUBT (point b)

4. v. 151 "പഠിപ്പിച്ചു / തരുകയും" falls at a line end on p. 407, like the two splits the translator marked. It was kept as two words with no DOUBT. The book itself is mixed: this part's commentary prints "കാണിച്ചു തരുവാനായി", "അയച്ചു തന്നിട്ടുണ്ട്" (p. 407) and "നിയമിച്ചു തരുന്നത്" (p. 406) with a space, but "നിയമിച്ചുതരാം" (p. 399) and "തിരിച്ചുതരാം" (v. 144) joined. Kept as two words and a DOUBT added, in the same form as the other two.

### DOUBT wording (point b)

5. v. 148 DOUBT: added that the book prints "അഭിമുഖകേന്ദ്രത്തിന്" joined (word table v. 144, p. 399), so the evidence points both ways.
6. v. 146 DOUBT: added that this part's commentary prints "മറച്ചുവെക്കുക", "മൂടിവെക്കുക" joined. (The word table, p. 402, has "ഒളിച്ചു(മറച്ചു, മൂടി)വെക്കുക", with the bracket inside the compound, which does not settle the space either.)

No dropped small words, may/will errors, -ഉം future rendered as present, wrong tense, changed voice, reversed or "fixed" negations, added pronouns, dropped തിരുമേനി, added ﷺ, translator words in round brackets, changed reported speech, silently corrected names or misprints, misplaced footnotes, or TNs were found. The files contain no TN.

## Points the caller asked about

- **(a) Dots.** `pdftotext -bbox` and the images agree. p. 399: "(….." = five dots, just inside the opening bracket at the left end of the Arabic, touching فَوَلُّوا. p. 406: "(…" = three dots (one ellipsis character), same place, touching خَرَجْتَ. p. 406: "(......" = six dots, same place, touching ظَلَمُوا. The files have 5, 3 and 6 dots, placed after the Arabic, each with the same DOUBT as parts 21–22. Right as recorded.
- **(b) Line-end splits.** v. 146 "ഒളിച്ചു / വെക്കുന്നു" (p. 401) and v. 148 "അഭിമുഖ / സ്ഥാനം" (p. 403, in the verse and in the word table) are real line-end splits. The book's own spellings point both ways (see corrections 5–6), so the choice is not clear and the DOUBTs are needed. The v. 144 joins are settled by the book: "തിരിച്ചു / തരാം" is printed "തിരിച്ചുതരാം" in the word table (p. 399), and "തിരിച്ചു / കൊള്ളുക" is printed "തിരിച്ചുകൊള്ളുക" in vv. 149–150 (p. 404). The other joins in the panels are breaks inside one word. For v. 151, see correction 4.
- **(c) Mid-line gaps.** "പിൻതുടരു ന്നവരുമല്ല" (v. 145) and "അറിയുമായിരുന്നില്ലാ ത്തത്" (v. 151) show a visible gap on the image and are kept. "തിരിഞ്ഞു കൊണ്ടിരിക്കുന്നത്" (v. 144) has a printed space. "തള്ളുകയേവേണ്ടൂ" (p. 406) is joined on the image (the site splits it); it is in the commentary only. v. 146 "അറിയുന്നത്‌പോലെ" is printed with a visible virama before പോ, so the ZWNJ stays (as part 17 "വാക്ക്‌പോലെ").
- **(d)** The p. 403 sentence reads on the image "അതായത്. ഇബ്റാഹീം (അ)ന്റെ ക്വിബ്ലയാണ് കഅ്ബ എന്നും അതാണ് നബിﷺയുടെയും ക്വിബ്ലഃയായിരിക്കേണ്ടതെന്നും അവർക്ക് ശരിക്കറിയാമെന്നാണ് സാരം." The English renders it in full. The heading "### Section – 18" is present.
- **(e) Misprints kept without TN.** "കലപന" (p. 399), "വന്നുകിട്ടയതിനു" (v. 145), the stray stop in "അതായത്." (p. 403, mirrored as "That is. That …"), the missing stop after "നോക്കാറുണ്ടായിരുന്നു" (p. 399, mirrored "… eagerly From the word …"), the missing stop after "കൽപിക്കപ്പെടാറുണ്ട്" (p. 402, mirrored), "ക്വിബ്ല" without ഃ (p. 403), "ചിലർ ," (v. 145). The meaning is certain in each case; no TN is needed. Fine.
- **(f) ﷺ, (അ), (റ).** ﷺ is printed: p. 399 five times, p. 400 twice, p. 402 seven times, p. 403 twice, p. 405 twice, p. 408 twice; none on pp. 404, 406, 407. The English has exactly these. None for "നബിയും വേദക്കാരും" (p. 402), "തിരുമേനി അല്ലാഹുവിന്റെ പ്രവാചകനാണ്" (p. 402), "തിരുമേനിയോട്" (p. 405), "തിരുമേനിയിൽ" (p. 400), where the site adds it. (r) appears for Bukhari and Muslim (p. 399) and Imam Ahmad (p. 408); (a) for Ibrahim only where printed.
- **(g)** See "What was compared".
- **(h) Terms.** Checked by grep against earlier parts. പിൻപറ്റുക "follow" (parts 07, 15, 18, 22) is kept. പിന്തുടരുക / പിൻതുടരുക "go after" is new (no earlier occurrence in verses or word tables), used consistently, and keeps the two words apart in v. 145. ആകയാൽ: see correction 3. ഓർമിക്കുക "keep in mind" (v. 152 word table and the hadith, p. 408) keeps it apart from സ്മരിക്കുക "remember" in the same verse (part 17 has സ്മരിക്കുക "remembered"). But part 11 (v. 63) renders ഓർമിക്കുക "remember", and parts 07, 08, 11, 18 render ഓർക്കുക "remember". Kept and noted. പേടിക്കുക "be afraid of" (v. 150) and ഭയപ്പെടുക "fear" (p. 406) are kept apart (part 07 ഭയപ്പെടുവിൻ "fear Me"; part 17 ഭയപ്പെട്ടവർ "ones who are afraid", noted). ജ്ഞാനം "learning" (word table v. 145) and അറിവ് "knowledge" (v. 145, as part 18 v. 120) are kept apart; വിജ്ഞാനം "wisdom", തത്വജ്ഞാനം "philosophy" (new). നിയോഗിക്കുക "commission" (p. 408) is kept apart from അയക്കുക "send" (v. 151, p. 407), but part 20 (v. 129) renders നിയോഗിക്കുക "send"; noted. സന്ദേഹം / സംശയം are both "doubt" (സംശയാലുക്കൾ "sceptics"), as parts 01 and 04 have സന്ദേഹം "doubt"; noted. തിരുമേനി "the noble Prophet" as in all earlier parts. എനി "now" as part 11.
- **(i)** v. 151 [ലക്ഷ്യം] "evidence" with the DOUBT kept: the same open question as parts 01–02, 07, 17, 20. In v. 148 (word table, ലക്ഷ്യം beside അഭിമുഖ സ്ഥാനം) and p. 404 (ലക്ഷ്യസ്ഥാനം, ലക്ഷ്യത്തിലേക്ക്) it clearly means "aim" and is so rendered.
- **(j) Arabic.** وَحَيْثُمَا is printed joined on pp. 399 and 406 and in the word tables (pp. 399, 405); the commentary keeps it as printed; the word-table `ar` fields keep the data-file form, as `npm run check` requires. تَقَلُّبَ and وَحَيْثُمَا كُنْتُمْ فَوَلُّوا as printed. يَعۡرِفُونَهُۥ (p. 402), وَمِنۡ حَيۡثُ خَرَجۡتَ and إِلَّا ٱلَّذِينَ ظَلَمُواْ (p. 406): the printed words and vowels equal the verse, and the differences are only the Uthmani spelling signs (small waw, wasla, sign on silent alif), so the data-file form stands. For the two phrases whose printed vowels differ, see corrections 1–2.

## Checked and left as they are

- Word table v. 144 وَإِنَّ ٱلَّذِينَ "surely those who" against v. 146 ٱلَّذِينَ യാതൊരുകൂട്ടർ "the group who": earlier parts render യാതൊരു കൂട്ടർ both ways (parts 01, 02, 10 "those who" — part 10 v. 62 has the same "നിശ്ചയമായും യാതൊരു കൂട്ടർ" → "surely those who"; parts 12–18 "the group who"). Left; noted.
- v. 147 "The real is from your Rabb indeed (that it is received)": literal for "…നിന്നത്രെ (ലഭിക്കുന്നത്)". Left.
- p. 400 "But, as some scholars say and practise, it is not, moreover, that …": the English follows the Malayalam order, which carries the same ambiguity. Left.
- p. 402 എനിയൊരിക്കൽ "once again hereafter": the sense is "some time again later". Left.
- പക്ഷേ is "However" (p. 400) and "But" (p. 402); എന്നാൽ is "But". Left; the reviewer may prefer one word for പക്ഷേ.
- അതുകൊണ്ട് / അത്കൊണ്ട് are "Therefore", as അതിനാൽ (pp. 402, 403, 404). Left; noted.
- Word table v. 148 "(വാശിയോടെ)മുമ്പോട്ട് പോകുക" → "go forward (with zeal)": the bracket follows the verb for English order. Left.
- `part.json` verses "144-152", pages "398-408", PDF pages "227-237": correct.

## Open doubts for the reviewer

1. **Line-end splits** kept as two words, each with a DOUBT: v. 146 ഒളിച്ചു വെക്കുന്നു, v. 148 അഭിമുഖ സ്ഥാനം (verse and word table), v. 151 പഠിപ്പിച്ചു തരുകയും.
2. **Position of the dots** before or after the Arabic on p. 399 and twice on p. 406 (the same question as parts 21–22).
3. **[ലക്ഷ്യം]** in v. 151: "evidence" or "aim".
4. **ആകയാൽ / അതിനാൽ / അതുകൊണ്ട്** are all "therefore" (correction 3); the translator had proposed "hence" for ആകയാൽ. If the reviewer wants them apart, parts 03–20 change too.
5. **ഓർമിക്കുക** "keep in mind" here, "remember" in part 11; **നിയോഗിക്കുക** "commission" here, "send" in part 20; **ഭയപ്പെടുക** "fear" here and in part 07, "be afraid" in part 17; **സന്ദേഹം / സംശയം** both "doubt"; **യാതൊരു കൂട്ടർ** "those who" / "the group who".
6. **Earlier open doubts still apply** (not in this part): see parts 13–22.

## New terms (not in the glossary; used consistently in this part)

The translator left no list in the files; this list combines the distinctions the translator chose (as given to the checker) with the files as they stand after this check.

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| പിന്തുടരുക / പിൻതുടരുക | tabi'a | go after |
| പിൻപറ്റുക | ittaba'a | follow (as parts 07, 15, 18, 22) |
| ആകയാൽ / അതിനാൽ | fa- | therefore (noted) |
| ഓർമിക്കുക / സ്മരിക്കുക / സ്മരണ | dhakara | keep in mind / remember / remembrance |
| ഓർമിപ്പിക്കുക | — | remind |
| പേടിക്കുക / ഭയപ്പെടുക | khashiya | be afraid of / fear |
| ജ്ഞാനം / അറിവ് | 'ilm | learning / knowledge |
| വിജ്ഞാനം / തത്വജ്ഞാനം | hikmah | wisdom / philosophy |
| നിയോഗിക്കുക | ba'atha | commission |
| സന്ദേഹപ്പെടുക / സംശയാലുക്കൾ / സംശയം | mumtarin | doubt / sceptics / doubt |
| അഭിമുഖ സ്ഥാനം / അഭിമുഖകേന്ദ്രം / ലക്ഷ്യസ്ഥാനം | wijhah / qiblah | place to be faced / centre to be faced / place of aim |
| നേരെ / ഭാഗം | shatr | toward / side |
| ഒളിച്ചു വെക്കുക / മറച്ചുവെക്കുക / മൂടിവെക്കുക | katama | conceal / hide / cover up |
| ഇച്ഛകൾ / തന്നിഷ്ടങ്ങൾ | ahwa' | desires / self-wills |
| ന്യായം / തെളിവ് / ന്യായവാദം | hujjah | justification / proof / argument |
| ഉത്തമം / ഗുണപ്രദം / ഗുണകരം | — | excellent / beneficial / advantageous |
| ചാഞ്ചല്യം | — | wavering |
| വ്യാമോഹം | — | delusive hope |
| ശുദ്ധഗതിക്കാർ | — | guileless |
| ചാൺ / മുഴം / മാർ | — | span / cubit / fathom |
| നാഴിക | — | nazhika (as part 20) |
