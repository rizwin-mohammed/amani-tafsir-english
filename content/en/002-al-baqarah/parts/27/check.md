# Check: Al-Baqarah part 27 (verses 177–179)

Checked on 2026-10-07 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 271–281 (book pp. 442–452). Each page was rendered at 150 dpi and read once in full, including the footnotes on pp. 447 and 452. The full (untruncated) `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary, and `pdftotext -bbox` was used to read the vowel marks of the Arabic on pp. 445, 447, 448, 449 and 450. The amanithafseer.com text was used only as a reading aid. Crops (300 dpi): the two أُولَئِكَ lines on p. 447, and يَاأُولِي الألْبَابِ on p. 450 (two crops; the first missed the line).
- **Boundaries.** Part 26 ends on p. 442 with "… ന്യായ സാധുതയിൽ നിന്നും അതിവിദൂരംതന്നെ!"; the heading "വിഭാഗം – 22" and the verse 177 panel follow directly, and this part starts there. This part ends on p. 452 with "… ഗ്രഹിക്കുവാൻ കഴിയാത്തതിൽ അൽഭുതമില്ല.", directly above the verse 180 panel; its (\*) footnote (the Malayala Manorama report) stands at the foot of the same page. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 177–179), `words.json` (71 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images (word tables pp. 443–444, 448), misprints included (സുക്ഷ്മത, v. 179 table). The text layer shows a dash after "ആർ" (فَمَنۡ) and drops the െ of "അക്കൂട്ടരത്രെ"; the image has no dash and has the െ, as in the files.
- `[p. N]` markers: 444–452. P. 443 holds only the verse 177 panel and word table, so it has no marker. [p. 444] and [p. 448] stand at the start of the commentary (those pages begin with the end of the word table / the verse panels). The others sit where each page turns: [p. 445] before (4); [p. 446] after "(Mu)."; [p. 447] before "reminds" (p. 447 begins "ഓർമിപ്പിക്കുന്നു"); [p. 449] before "is the usual way" (തായിരിക്കുകയാണ് പതിവ്); [p. 450] "in one … incident"; [p. 451] before "that address indicates"; [p. 452] in "ten or a hundred … in an hour" (p. 452 begins with the second half of the word കണ/ക്കിലായിരിക്കും; as near as English word order allows).
- "### Section – 22" renders "വിഭാഗം – 22". The line "വിശ്വാസകാര്യങ്ങളിൽ പ്രധാനമായത് ഇവയാണ് :" (p. 444) is printed in large type on its own line as a heading, so "###" is right. Group markers *[Verse 177]* and *[Verses 178–179]* match the panels.

## Corrections made (before → after)

### Arabic not as printed (point c)

1. p. 447, (1): the print has no shadda on the lam of الذين (crop; the text layer has none either, while the p. 444 word table, which does print it, has one in the layer), no sukun on the waw and a plain fatha on the lam of أولئك. Since the vowels differ from the verse, it is transcribed as printed: **أُوْلَـٰٓئِكَ ٱلَّذِينَ صَدَقُواْ** → **أُولَئِكَ الذِينَ صَدَقُوا**.
2. p. 450: the print has no fatha on the hamza of الألباب (crop and text layer; sukun on the second lam, fatha on ب, kasra on the final ب): **يَاأُولِي الأَلْبَابِ** → **يَاأُولِي الألْبَابِ**.

### Renderings of earlier parts / one English for two Malayalam words (point h)

3. p. 445, (5) നബിമാരിൽ വിശ്വസിക്കുക: earlier parts render നബിമാർ "prophets" (parts 13, 22; "Nabi" only in the part 14 gloss pair നബി (പ്രവാചകൻ)). "Believing in the Nabis" → "Believing in the prophets".
4. താൽപര്യം is "import" in parts 17, 19, 23 and 24: p. 446 "– that is the purport." → "– that is the import."; p. 449 "The purport of saying:" → "The import of saying:".
5. "practice" stood for three words: അനുഷ്ഠാനം (matters of practice), സമ്പ്രദായം (the practice of begging / of killing) and സദാചാരം / ദുരാചാരം (good / evil practice), while ആചാരം was "observances" (p. 444), "custom" (p. 449) and "customary" (v. 178, p. 450). ആചാരം and its compounds are now "custom" throughout:
   - p. 444 "by practising some outward observances" → "by practising some outward customs";
   - p. 449 "good practice, custom, propriety … evil practice, impropriety" → "good custom, custom, propriety … evil custom, impropriety";
   - p. 450 "the propriety of good practice" (twice) → "the propriety of good custom"; "the proper manner of good practice" → "the proper manner of good custom";
   - word table v. 178 بِٱلۡمَعۡرُوفِ (സദാചാര പ്രകാരം) "according to good practice" → "according to good custom".
6. പതിവ് is "the usual way" at the top of p. 449; "customary" now belongs to ആചാര: p. 449 "The practice of killing in exchange for killing was customary earlier" → "… was usual earlier".
7. p. 445, (1) heading കുടുംബന്ധമുള്ളവർ (a misprint for കുടുംബബന്ധമുള്ളവർ, the verse's word): "Those who have family tie" → "Those who have family ties", as in the verse.

### Footnote (point b)

8. p. 447 footnote: Arabic only, no Malayalam rendering. It was left untranslated with no note. Part 11 handled an Arabic-only footnote by transcribing it as printed and adding a DOUBT giving its meaning, so the same is done here: the Arabic stays exactly as printed (يعنىأن without a space, الصابر ين split, no vowels, as on the image), followed by *[DOUBT: … It appears to mean: “That is, His word al-sabirin (those who are patient) is in the accusative by way of praise and urging; that is why it was not put in the nominative and was not joined by a conjunction of sequence (‘atf al-nasaq).” Please confirm whether this English should be shown.]*

No dropped small words, may/will errors, -ഉം future rendered as present, reversed negations, dropped തിരുമേനി, added ﷺ, translator words in round brackets, changed reported speech, silently corrected names or misprints, misplaced footnotes, or TNs were found. The files contain no TN.

## Points the caller asked about

- **(a) DOUBTs.** p. 446 തിടുക്കം "urgency": printed clearly; in "ബുദ്ധിമുട്ടും തിടുക്കവുമുണ്ടെങ്കിലും" it may mean "pressing need"; kept. p. 449 തെണ്ടം "ransom": printed "പ്രായശ്ചിത്തം- തെണ്ടം-കൊണ്ട്"; the open question of parts 08 and 18; kept. p. 450 dots: "...." stands at the left end of فَمَنۡ عُفِيَ … شَيۡءٞ at the start of an indented line, touching the Arabic: the same situation as parts 21–25; kept. One DOUBT added (correction 8).
- **(b) Footnote p. 447.** See correction 8. The transcription matches the image (italic, two lines, no vowel marks).
- **(c) Arabic.** Data-file form, compared mark by mark with the text layer (bbox): 2:178 كُتِبَ عَلَيۡكُمُ ٱلۡقِصَاصُ (p. 449; damma, kasra, fatha on كتب; fathas on ع and ل, sukun on ي; dammas on كم; sukun on the lam of al-; kasra on ق, fatha on ص, damma at the end), فَمَنۡ عُفِيَ لَهُۥ مِنۡ أَخِيهِ شَيۡءٞ (p. 450; every vowel matches, incl. sukun on ن of من twice, sukun on ي of شيء, dammatan) and فَمَنِ ٱعۡتَدَىٰ بَعۡدَ ذَٰلِكَ (p. 450; kasra on ن, sukun on ع twice): the only differences are Uthmani signs (sukun shape, wasla, small waw, dagger alif, tanwin shape), so the data-file form stands, as parts 23–26 decided. 2:177 أُوْلَـٰٓئِكَ ٱلَّذِينَ صَدَقُواْ differs (no shadda) and is now as printed (correction 1). As printed and confirmed: أُولَئِكَ هُمُ الْمُتَّقُونَ (no و; kasra on ئ; sukun on the lam of al-); يَاأُولِي الألْبَابِ (correction 2); بِرّ, عَدْل (p. 444); القضاءوالقدر (p. 445; bbox gap 1.3 pt, i.e. printed without a space); كَتَبَ, كُتِبَ, كِتَاب, مَجْهُول (p. 448); مَعْرُوف, مُنْكَر (p. 449, bbox: sukun on ع and on ن); إن شاء الله (p. 449, at the start of the last line, after "… കാണാവുന്നതുമാകുന്നു."); آمين (p. 447). `npm run check` lists only the two known Al-Baqarah "close but not exact" items (تَابَ إِلَى الله, part 06; عَسَى رَبُّهُ إِنْ طَلَّقَكُنَّ, part 19) plus 9:38 from part 26, which part 26's check accepted as an as-printed quotation. Nothing from this part is listed.
- **(d) Heading and footnotes.** The heading is right (see above). Footnote (\*) of p. 447 stands after the paragraph that carries the marker (ending "… specially mentioned."); footnote (\*) of p. 452 after the paragraph ending "… realities of this sort.". Both right.
- **(e) Page markers.** See "What was compared". No change needed.
- **(f) Supplied subjects.** "we are not entering into it here" (p. 449, പ്രവേശിക്കുന്നില്ല, no subject): English needs one and the author is speaking; kept, as part 25 kept "I"; the reviewer may prefer a passive. "they have discontinued the death penalty" (p. 451, നിറുത്തൽ ചെയ്യുകയും, no subject): kept; same note. p. 449 "they would also release the killer" (ഒഴിവാക്കുകയും ചെയ്യും, no subject): kept. p. 449 "Nothing about this is explained here" for the subjectless active "വിവരിക്കുന്നില്ല": kept, noted.
- **(g) Verse 177.** അടിമ/കളുടെ, ഇങ്ങിനെ/യുള്ളവനാണ്, അന്ത്യ/ദിനത്തിലും, യാതൊ/രുവനാണ്, വേദഗ്ര/ന്ഥത്തിലും, നിറ/വേറ്റുന്നവരും, സത്യം പറഞ്ഞ/വർ are breaks inside one word; joined is right. "നിലനി റുത്തുകയും": the gap is visible in mid-line on the image (and in the text layer); kept, as part 24 kept "മറച്ചുവെ ക്കുന്നവർ".
- **(h) Terms.** നബിമാർ: correction 3 (പ്രവാചകൻമാർ "prophets" in the same sentence; the two words now share "prophets", as in parts 13 and 22). പുണ്യം "merit", പുണ്യവാൻ "meritorious one", പുണ്യകർമങ്ങൾ "meritorious deeds" (part 24 had പുണ്യം "what is meritorious"). പ്രതിക്രിയ "retaliation", പ്രതിക്കൊല "retaliatory killing", പ്രതികാരം "retribution": kept apart. ആചാരം family: corrections 5–6; മര്യാദ "propriety", ദുർമര്യാദ "impropriety", വഴക്കം "usage". താൽപര്യം: correction 4. ജീവിതം / ജീവൻ both "life" (p. 451 "a life … for their life there is protection"): English has no second word; left, noted. ബുദ്ധിമാൻമാർ "men of reason" here (word table and commentary); part 25 rendered it "the intelligent" in a paraphrase of 3:190; left, noted. അന്ത്യനാൾ (p. 444) and അന്ത്യദിനം (verse) are both "the Last Day": synonyms; left, noted. അനുഷ്ഠാനം "practice" (part 13 had "observance" for its compounds) and സമ്പ്രദായം "practice" still share one English word, because "observe" is taken by പാലിക്കുക (observe caution, observe equality); left, noted.
- **(i) Intensifiers, "or"/"that is", commas.** തന്നെ / അത്രെ "indeed", അല്ലോ "surely" throughout. അഥവാ "Or" (pp. 446, 447), അതായത് "That is" (pp. 444, 446, 450, 452), as parts 22–26. No comma changes who is meant. p. 447: "making a slight change in the grammatical style …" may attach either to the meaning of the style or to Allah's adopting it; the sense is the same; left.
- **ﷺ and (r).** ﷺ is printed four times on p. 445 (മുഹമ്മദ് തിരുമേനി ﷺ, three times നബി ﷺ) and once on p. 446; the English has exactly these 5. None at "നബി വചനങ്ങളും" or "സുപ്രസിദ്ധ നബി വചനം" (p. 446). തിരുമേനി is printed at "മുഹമ്മദ് തിരുമേനി" (the text layer drops it) and at the end of p. 445; both "the noble Prophet". (r) only where (റ) is printed (Imam Raghib, 'Umar, Bukhari).

## Checked and left as they are

- Misprints mirrored or kept without TN, meaning certain: എന്നൂം (p. 444), കുടുംബന്ധമുള്ളവർ (p. 445; see correction 7), word table സുക്ഷ്മത (v. 179); the missing comma in "പുണ്യവാൻ നന്മ ചെയ്യുന്നവൻ" (p. 444, mirrored); missing stops after "എന്നിങ്ങിനെയുള്ള വിശ്വാസങ്ങൾ" (p. 444), "… പഠിപ്പിക്കുന്നത്" (p. 445), "(59:9)" (p. 445), "(എന്ന നിലക്ക്)" in v. 178; the unclosed quote "'അവന്റെ സഹോദരനിൽ നിന്ന് …" (p. 450). 12,000 a year and "32 persons daily" (p. 452 footnote) are translated as printed.
- p. 449 "Giving authority to the heirs …" for നൽകിയിരിക്കുന്നതും (perfect): the English gerund is close enough; left.
- p. 449 "But, if a free man, or else the reverse, put a slave to death, a man, or else the reverse, a woman?": follows the Malayalam order; the sense is clear; left.
- p. 445 ഉണ്ടായിരിക്കുന്നതുമല്ല "there is also not": left.
- `part.json` verses "177-179", pages "442-452", PDF pages "271-281": correct.

## Open doubts for the reviewer

1. **തിടുക്കം** "urgency" (p. 446).
2. **തെണ്ടം** "ransom" (p. 449), as parts 08 and 18.
3. **Position of the dots** at فَمَنۡ عُفِيَ … شَيۡءٞ (p. 450), as parts 21–25.
4. **Footnote p. 447**: whether to show the suggested English (correction 8).
5. **ബുദ്ധിമാൻമാർ** "men of reason" here, "the intelligent" in part 25.
6. **അനുഷ്ഠാനം / സമ്പ്രദായം** both "practice"; **ജീവിതം / ജീവൻ** both "life"; **അന്ത്യനാൾ / അന്ത്യദിനം** both "the Last Day".
7. Supplied **"we"** (p. 449) and **"they"** (pp. 449, 451).
8. **Earlier open doubts still apply** (not in this part): see parts 13–26.

## New terms (not in the glossary; used consistently in this part)

The translator left no list in the files; this list is drawn from the files as they stand after this check.

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| പുണ്യം / പുണ്യവാൻ / പുണ്യകർമങ്ങൾ | birr | merit / the meritorious one / meritorious deeds |
| സദ്വൃത്തൻ | — | of virtuous conduct |
| നീതി / നീതിമാൻ | 'adl | justice / one who is just |
| വിശ്വാസകാര്യങ്ങൾ / അനുഷ്ഠാനകാര്യങ്ങൾ | — | matters of belief / matters of practice |
| ആചാരം / സദാചാരം / ദുരാചാരം | ma'ruf / munkar | custom / good custom / evil custom |
| മര്യാദ / ദുർമര്യാദ / വഴക്കം | ma'ruf | propriety / impropriety / usage |
| സമ്പ്രദായം | — | practice |
| വിധിവ്യവസ്ഥകൾ | al-qada' wa al-qadar | decrees and dispositions |
| നബിമാർ / പ്രവാചകൻമാർ | nabiyyun | prophets (as parts 13, 22) |
| അനാഥ(കുട്ടി)കൾ / യതീം | yatama | orphan (child)ren / yatim |
| അഗതികൾ / മിസ്കീൻ | masakin | the destitute / miskin |
| വഴിപോക്കൻ | ibn al-sabil | the wayfarer |
| ദാനധർമം / ധർമം | sadaqah | almsgiving / charity |
| ചാർച്ച ബന്ധം / കുടുംബബന്ധം | — | kinship / family ties |
| ക്ഷമ / സഹനം | sabr | patience / forbearance (as part 24) |
| സാക്ഷ്യപത്രം | — | testimonial |
| പ്രതിക്രിയ / പ്രതിക്കൊല / പ്രതികാരം | qisas | retaliation / retaliatory killing / retribution |
| പ്രായശ്ചിത്തം / തെണ്ടം / നഷ്ടപരിഹാരം | diyah | atonement / ransom (doubt) / compensation |
| കൊടുത്തുവീട്ടൽ / കൊടുത്തുതീർക്കൽ | ada' | paying off / paying off fully |
| ഇളവ് / ലഘൂകരണം | takhfif | relaxation / lightening |
| അതിരുവിടുക / അതിക്രമം | i'tada | overstep the bounds / transgression |
| ഘാതകൻ / അവകാശികൾ | — | the killer / the heirs |
| ബുദ്ധിമാൻമാർ | ulu al-albab | men of reason |
| താൽപര്യം / സാരം | — | import (as parts 17–24) / gist |
| കർമണി പ്രയോഗം | majhul | passive usage |
| ശിക്ഷാനിയമങ്ങൾ / കൊലശിക്ഷ | — | penal laws / death penalty |
