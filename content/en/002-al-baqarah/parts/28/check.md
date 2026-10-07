# Check: Al-Baqarah part 28 (verses 180–182)

Checked on 2026-10-07 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 281–286 (book pp. 452–457). Each page was rendered at 150 dpi and read once in full (this range has no footnotes of its own; the (\*) footnote at the foot of p. 452 belongs to part 27). The full (untruncated) `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary, and `pdftotext -bbox` was used to read the vowel marks of every Arabic word on pp. 453, 454 and 456. The amanithafseer.com text was used only as a reading aid. Crops (300 dpi): الله اعلم on p. 454 (two crops; the first missed the line), and the abbreviation key in the Volume 1 introduction (see point a).
- **Boundaries.** Part 27 ends on p. 452 with "… ഗ്രഹിക്കുവാൻ കഴിയാത്തതിൽ അൽഭുതമില്ല." and its (\*) footnote ending "… 10. 07. 1978ലെ ലക്കത്തിൽ പ്രസിദ്ധപ്പെടുത്തിയിരിക്കുന്നു."; the verse 180 panel follows directly, and this part starts there. This part ends on p. 457 with "… മുസ്‌ലിം സമുദായം ഓർക്കേണ്ടിയിരിക്കുന്നു.", directly above the heading "വിഭാഗം – 23" and the verse 183 panel. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 180–182), `words.json` (35 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images (panels p. 452, word table p. 453), misprints included: ഭയഭക്തമാരുടെ (v. 180 table), the trailing commas in "വല്ല ചായ്‌വും, മറിവും," and "അവന്റെ മേൽ,", "കരുണാനിധിയാണ്." The text layer drops the െ of "കടമ(യത്രെ അത്)" (v. 180); the image has it, as in the file. ZWNJ in ചായ്‌വും matches the print (visible chandrakkala).
- `[p. N]` markers: 453–457. P. 452 holds only the verse panels. [p. 453] stands at the start of the commentary, because the whole word table is on p. 453. The others sit where each page turns: [p. 454] in "Who the real offenders *[p. 454]* are" (p. 453 ends "ആരാ-"); [p. 455] before "he asked whether one of three parts" (p. 454 ends "എന്നാൽ"); [p. 456] in "in Bukhari *[p. 456]* and in Muslim" (p. 455 ends "ബുഖാ-"); [p. 457] after "Even among those who make wasiyyah," (p. 456 ends "… ചെയ്യുന്നവരിൽ പോലും").
- Paragraphs: the print breaks after "… സിദ്ധിച്ചേക്കുന്നതുമാണ്." (p. 454), before "ഭൂരിപക്ഷം …", before (1) and (2), after "… രേഖപ്പെടുത്തിയിട്ടുള്ളതാണ്." (p. 455), before "മേൽ കണ്ട …", before "ഒരാളുടെ ധനം …" (p. 456), before each of (1)–(5) and before "വസ്വിയ്യത്തിന്റെ പ്രാധാന്യത്തെ …". The English has exactly these breaks (the site runs some of them together).
- Group marker *[Verses 180–182]* matches the panels and the word table. There is no heading in this part.

## Corrections made (before → after)

### DOUBT resolved (point a)

1. p. 454, "(അ; ജ; ബ; ദാ.)": the book's own key to the abbreviations is printed in the introduction of Volume 1 (`00. Vol1_Mughavura_1-140.pdf`, book p. 11, PDF p. 11, item 3); a 300 dpi crop shows "ബ. = ബൈഹക്വി" (Baihaqi), with "ജ. = ഇബ്നുമാജഃ", "അ. = അഹ്‌മദ്", "ദാ. = അബൂദാവൂദ്". Part 25 (p. 429, Hudaifah's hadith) already renders ബ as "Ba" ("(A; Da; Na; Ja; Ba; Ibn Abi Shaibah)"), so the DOUBT's statement that ബ does not occur earlier was not right either. "(A; Ja; Ba; Da.)" stays as printed and the DOUBT was removed.

### Same Malayalam, same English (point g)

2. പാടില്ല is "not allowed" everywhere else in this part (p. 454 "അത് പാടില്ലെന്ന്", p. 456 (1) and (5)): p. 454 "henceforth there must be no wasiyyah to inheritors" → "henceforth wasiyyah to inheritors is not allowed" (മേലിൽ വസ്വിയ്യത്ത് പാടില്ലെന്ന്).
3. ഗൗരവം is "seriousness" in part 11 (its new-terms table): p. 456 (3) "the gravity of this can be understood" → "the seriousness of this can be understood".

### Meaning (point h)

4. p. 456 (3), "ഈ കടമയെകുറിച്ച് നീതിന്യായ കോടതിയിൽ നിയമപരമായി ചോദ്യം ചെയ്യപ്പെടാവതല്ലെങ്കിലും": the sense is that no one can be called to account in court concerning this duty; "this duty cannot be called into question" reads in English as "its validity cannot be disputed". "Though this duty cannot be called into question legally in a court of justice" → "Though, concerning this duty, there can be no legal questioning in a court of justice".

No dropped small words, may/will errors (സിദ്ധിച്ചേക്കുന്നതുമാണ് "may also accrue" is right), -ഉം future rendered as present, wrong tense, reversed or "fixed" negations, added pronouns, dropped തിരുമേനി (none is printed in this part), added ﷺ, changed reported speech, silently corrected names or misprints, misplaced footnotes, translator words in round brackets, or TNs were found. The files contain no TN.

## Points the caller asked about

- **(a) DOUBT on p. 454.** Resolved and removed (correction 1).
- **(b) Further DOUBT or TN.** None is needed. p. 455 "കൈകാട്ടുന്നവരായി" "people who hold out their hands to people" (begging) is clear from the context.
- **(c) Kept as printed (mirrored, no TN; meaning certain):** v. 180 word table ഭയഭക്തമാരുടെ; the full stop after "… വ്യാഖ്യാതാക്കളുടെയും അഭിപ്രായം." (p. 454) with "Is that …" after it; the Ibn Kathir quotation, which has no opening mark after "അതിങ്ങനെ ഉദ്ധരിക്കാം:" (p. 455) and only the closing mark before (ابن كثير) (p. 456); no full stop after "(അത് വസ്വിയ്യത്തിന്റെ വിശദീകരണമല്ല)" (p. 455). All confirmed on the images.
- **(d) ഒസ്യത്ത് "(osyath)" and ഗുണം "good".** "(osyath)" transliterates the author's own bracketed colloquial form of വസ്വിയ്യത്ത് in the word table; right. p. 453 "Among us too, who are people of the Malayalam language, ‘good’ is customarily said meaning wealth": the verse ("any good [any wealth]") and the word table already give ഗുണം as "good", and "people of the Malayalam language" makes clear that the Malayalam word is meant, so the sense is carried. Left; the reviewer may prefer the transliteration added (‘gunam’), which would be a translator's addition.
- **(e) Arabic.** حَقًّا عَلَى ٱلۡمُتَّقِينَ (p. 456): bbox gives fatha on ح, shadda and fathatan on ق, fatha on ع and on ل, sukun on the lam of the article, damma on م, shadda and fatha on ت, kasra on ق, fatha on ن. The letters and vowels equal the verse; the only differences are Uthmani signs (wasla, sukun shape), and the print joins حَقًّاعَلَى without a space. The data-file form stands, as parts 23–27 decided; the string is checked to be exactly in 2:180 of `data/quran-uthmani.json`. As printed and confirmed by bbox: خَيْر (fatha on خ, sukun on ي; p. 453), مَعْرُوف (fatha on م, sukun on ع, damma on ر; p. 453), بِالْمَعْرُوف (kasra on ب, sukun on ل, fatha on م, sukun on ع, damma on ر; pp. 454 and 456), ابن كثير (no vowels; p. 456). الله اعلم (p. 454, crop): Allah is printed as the usual ligature, transcribed without the shadda as part 06 decided; اعلم has no hamza, as in the file.
- **(f) Paragraphs, markers, ﷺ.** See "What was compared". ﷺ is printed four times on p. 454 (once in (1), three times in (2)), once on p. 455, four times on p. 456 (twice after റസൂൽ, at Sa'd's event and in (5)); the English has exactly these 9. None after "അവന്റെ റസൂലും" (p. 457), and none in the English there. (r) only where (റ) is printed ('Amr ibn Kharijah, Sa'd ibn Abi Waqqas twice, Bukhari and Muslim, Ibn Kathir, Ibn 'Umar twice).
- **(g) Renderings against earlier parts.** വസ്വിയ്യത്ത് "wasiyyah" (as part 20's table). ദുർബ്ബലപ്പെടുക / ദുർബലപ്പെടുത്തപ്പെടുക "become annulled / be annulled" (part 16: ദുർബ്ബലപ്പെടുത്തുക "annul"). മൻസൂഖ് "mansukh" (part 16/22: നസ്ഖ് "naskh"); കാലഹരണപ്പെടുക "lapse", used both for the author's main word on p. 454 and for his bracketed gloss of മൻസൂഖ് on p. 455 (the same Malayalam word). ഇജ്മാഅ് "ijma'" (as part 16). ആയത്ത് "ayah", വചനം "verse". അനന്തരാവകാശം "inheritance", അനന്തരാവകാശി "inheritor", അവകാശി "heir", അവകാശം "right", ഓഹരി "share", പങ്ക് "lot": kept apart throughout. കടമ "duty", ബാധ്യത "liability", നിർബന്ധം / നിർബന്ധിത "obligation / obligatory". വിധി "ruling" (part 16's table: വിധികൾ "rulings"); വിധിവിലക്കുകൾ "injunctions and prohibitions" (as earlier parts). ഗൗരവം: correction 3. ഫുക്വഹാക്കൾ "fuqaha'", പിൻതിരിപ്പൻമാർ "reactionaries", വിമതസ്ഥർ "being of a different religion": first occurrences. സമ്പ്രദായം "practice", സദാചാരം "good custom", ആചാരമര്യാദ / (ആചാര) മര്യാദ "customary propriety", as part 27. ഭയഭക്തൻമാർ "the God-fearing", സൂക്ഷ്മത പാലിക്കുന്നവർ "those who observe caution", as earlier parts. ഓർക്കുക "remember" (as part 25).
- **(h) Intensifiers, "or"/"that is", commas.** തന്നെ "indeed" (and "even while" in "പുത്രൻമാരുള്ളപ്പോൾ തന്നെ", p. 457, where it is idiomatic); അല്ലോ "surely"; -താനും "moreover"; അഥവാ "or" in the gloss "ഗുണം അഥവാ നന്മ" (p. 453); അതായത് "That is" (p. 456), as parts 22–27. No comma changes who is meant. Corrections 2–4.

## Checked and left as they are

- p. 454 hadith (1) "‘Surely, to all inheritors their right (share) has already been given.’": the print is active with no subject (കൊടുത്തുകഴിഞ്ഞിട്ടുണ്ട്). English needs a subject, and supplying "Allah" or "He" would add a word (the author names Allah only when he quotes the hadith again on p. 455), so the passive is kept, as part 27 kept "Nothing about this is explained here". Noted for the reviewer.
- p. 455 "Along with that, they may also be poor, and ones who suffer hardship in life." (ദരിദ്രരും … അനുഭവിക്കുന്നവരും ആയിരിക്കാം): the paired -ഉം; left.
- p. 456 "That is: ‘If a person …": the colon after അതായത് is not printed; punctuation only; left.
- p. 453 "in the explanation of the previous verse" (കഴിഞ്ഞ വചനത്തിന്റെ വ്യാഖ്യാനത്തിൽ): earlier parts render this recurring phrase variously ("commentary on", "interpretation of", "explanation of"); left, noted. In this part വിവരിക്കുക "explain", വ്യാഖ്യാനം "explanation", വിശദീകരണം "elucidation".
- "Sa'd ibn Abi Waqqas" for the printed സഅ്ദുബ്നു അബീവക്കാസ് and "'Amr ibn Kharijah" for അംറുബ്നുഖാരിജഃ: ordinary transliteration, first occurrences.
- `part.json` verses "180-182", pages "452-457", PDF pages "281-286": correct.

## Open doubts for the reviewer

1. **ഗുണം "good"** (p. 453): whether to add the transliteration ‘gunam’ (point d).
2. **Supplied passive** in hadith (1) (p. 454).
3. **കഴിഞ്ഞ വചനത്തിന്റെ വ്യാഖ്യാനത്തിൽ**: "explanation" here; earlier parts vary.
4. **The abbreviation key** (Vol. 1 introduction, p. 11) could be added to `content/en/about.md` (which now expands only Mu., Na., Ti.): ബു. Bukhari, മു. Muslim, അ. Ahmad, ദാ. Abu Dawud, തി. Tirmidhi, ജ. Ibn Majah, ഹാ. Hakim, ന. Nasa'i, ബ. Baihaqi, ത്വ Tabarani. Not changed in this check.
5. **Earlier open doubts still apply** (not in this part): see parts 13–27.

## New terms (not in the glossary; used consistently in this part)

The translator left no list in the files; this list is drawn from the files as they stand after this check.

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| വസ്വിയ്യത്ത് / ഒസ്യത്ത് / മരണപത്രം | wasiyyah | wasiyyah / osyath / a will |
| വസ്വിയ്യത്തുകാരൻ | musin | maker of wasiyyah |
| അനന്തരാവകാശം / അനന്തരാവകാശി / അവകാശി | mirath / warith | inheritance / inheritor / heir |
| അവകാശം / ഓഹരി / പങ്ക് / സ്വത്തവകാശം | — | right / share / lot / right to the property |
| കടമ / മുറ / ബാധ്യത | haqq | duty / due / liability |
| നിർബന്ധം / നിർബന്ധിത / നിർബന്ധ | — | obligation / obligatory |
| വിധി / വിധിവിലക്കുകൾ | hukm | ruling / injunctions and prohibitions |
| കാലഹരണപ്പെടുക / മൻസൂഖ് | mansukh | lapse / mansukh |
| ദുർബ്ബലപ്പെടുക / ദുർബലപ്പെടുത്തപ്പെടുക | — | become annulled / be annulled (as part 16) |
| നിറുത്തൽ ചെയ്യുക | — | discontinue (as part 27) |
| ഇജ്മാഅ് | ijma' | ijma' (as part 16) |
| മാറ്റി മറിക്കുക / ഭേദഗതി വരുത്തുക | baddala | alter / make an amendment |
| ചായ്‌വ് / മറിവ് | janaf | leaning / swerving |
| തെറ്റ് / കുറ്റം / പാപം / തെറ്റുകുറ്റം | ithm | wrong / offence / sin / wrong and offence |
| മര്യാദ / മര്യാദകേട് / ആചാരമര്യാദ | ma'ruf | propriety / breach of propriety / customary propriety |
| ഗൗരവം | — | seriousness (as part 11) |
| ഫുക്വഹാക്കൾ | fuqaha' | fuqaha' |
| ക്വുർആൻ വ്യാഖ്യാതാക്കൾ | mufassirun | Quran commentators |
| വിശദീകരണം | — | elucidation |
| പിൻതിരിപ്പൻമാർ / ഗുണകാംക്ഷികൾ | — | reactionaries / well-wishers |
| വിമതസ്ഥർ | — | (being) of a different religion |
| പൗത്രൻമാർ | — | grandsons |
| ജൽപിക്കുക / അപവാദം / ആരോപണം | — | prate / slander / accusation |
