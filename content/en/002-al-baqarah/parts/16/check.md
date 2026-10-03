# Check: Al-Baqarah part 16 (verses 104–112)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 162–173 (book pp. 333–344), rendered at 150 dpi and re-read in full at 250 dpi in two halves per page, including the one footnote (p. 338). PDF page 174 was not needed: the part ends on p. 344 above the heading വിഭാഗം – 14. The verse 104–105 panel (p. 333) was re-read at 300 dpi; the Arabic نَسخْ, آيَة, نُنسِهَا (p. 336) at 900–1800 dpi, الصحف (p. 338) at 900 dpi, and the two hadiths on p. 344 at 600 dpi. The `ml2uni.py` text layer was used only for spelling.
- **Boundaries.** Part 15 ends at the foot of p. 333 with "… നമുക്കിപ്പോൾ മതിയാക്കാം.” ( فى ظلال القرآن )" (the last line of its `commentary.md`); directly below on the same page come the heading വിഭാഗം – 13 and the verse 104–105 panel, where this part starts ("### Section – 13"). Nothing is duplicated or lost between the two parts. The part ends on p. 344 with the ihsan hadith "… (മു)", directly above the heading വിഭാഗം – 14 and the verse 113 panel. Both boundaries confirmed.
- `part.json`, `verses.json` (verses 104–112), `words.json` (117 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. No sentence is missing or added. The footnote (\*) of p. 338 (marker after "… one-eighth.") is placed after its paragraph, which runs on to p. 339 and ends "(In reality there is no division)"; correct.
- `verses.json` Malayalam and every `words.json` gloss were compared with the images; they match after correction 12. Printed forms kept: ഉൻദ്വുർനാ (verse 104) against ഉൻള്വുർനാ (word table and commentary), നിനക്കറിഞ്ഞുകൂടെ (v. 106) / നിനക്കറിഞ്ഞുകുടേ (word table v. 107), ആയികൊണ്ട് (word table v. 112), the space before "?!" in v. 107 and before "!" in vv. 109 and 111.
- `[p. N]` markers 334–340 and 342–344 checked against the printed page numbers and page breaks. P. 341 holds only the verse 109–110 panels and word table, so it has no marker. The [p. 335], [p. 338] and [p. 339] markers fall mid-sentence and sit at the nearest matching point.
- Group markers (navigation aids, not the author's words; see part 02's `check.md`): *[Verses 104–105]*, *[Verses 106–107]*, *[Verse 108]*, *[Verses 109–110]*, *[Verses 111–112]*. They match the author's panels (pp. 333–334, 335, 339, 341, 342–343).

## Corrections made (before → after)

### Arabic as printed

1. p. 336, نسخ: at 1800 dpi the print has a fatha on ن, no mark on س and a sukun on خ: "**نَسْخَ**" → "**نَسخْ**".

### Changed voice (point a)

2. p. 339 (Ibn Hajar): the print is active (… ഇജ്മാഉ് (…)കൊണ്ട് അദ്ദേഹം ഖണ്ഡിക്കുകയും ചെയ്തിരിക്കുന്നു), with no object. The English had turned it into the passive. Now translated as printed, with the DOUBT kept and reworded: "He has also been refuted by the ijma' (…) that the Islamic shari'ah has made naskh of all the earlier shari'ah (code of religious law)s. *[DOUBT: … Rendered "has been refuted"; please confirm.]*" → "By the ijma' (…) that the Islamic shari'ah has made naskh of all the earlier shari'ah (code of religious law)s, he has also refuted. *[DOUBT: the verb is printed active, with no object …; translated as printed. The passage … would suit the passive "he has also been refuted by the ijma'". Please confirm.]*"

### Same English for different Malayalam words / earlier renderings

3. p. 336, വായനയിൽ നിന്നും (വായന "reading"; "recitations" renders പാരായണങ്ങൾ on p. 337): "removing them from recitation and from hearts" → "… from reading and from hearts".
4. p. 337, ആകാശ ഭൂമികളും (part 05: "the heavens" for ആകാശഭൂമികൾ; "skies" is ആകാശങ്ങൾ, as in v. 107): "‘The skies and the earth and all that is in them" → "‘The heavens and the earth and all …".
5. p. 337, രക്ഷാകർതൃത്വം (part 03: രക്ഷാ കർത്തൃത്വം "lordship"): "Ownership, rule and guardianship" → "Ownership, rule and lordship" ("guardian" stays for രക്ഷാധികാരി, v. 107).
6. വമ്പിച്ച with عظيم is "mighty" (part 08); "immense" was a third rendering: word table v. 105 "great, immense" → "great, mighty"; p. 335 "very great and immense" → "very great and mighty"; p. 342 "an immense reward" → "a mighty reward".
7. സകാത്ത് / സക്കാത്ത് is "Zakat" (part 08 and later): verse 110 "give zakat" → "give Zakat"; word table "zakat" → "Zakat"; p. 342 "the prayer and zakat" → "the prayer and Zakat".

### Sentence structure

8. p. 337, … ദുർബ്ബലപ്പെടുത്തി. അല്ലെങ്കിൽ … വിസ്മരിപ്പിച്ചുകളഞ്ഞു എന്നിരിക്കട്ടെ, എന്നാൽ …: എന്നിരിക്കട്ടെ stands after the second clause; the English had moved "let it be" to its front: "Or let it be that He caused it to be entirely forgotten … in recitations, then He also brings" → "Or He caused it to be entirely forgotten … in recitations – let it be so; then He also brings".
9. p. 343, … കീഴടങ്ങുന്നവരാരോ അവർക്കാണ് (ungrammatical English "Whoever surrender … it is for them"): → "Whoever they are who surrender completely to Allah's injunctions and prohibitions, doing acts of well-doing, it is for them …".

### Tense (words.json)

10. v. 112, يَحۡزَنُونَ, അവർ വ്യസനിക്കും (-ഉം future, as part 15 correction 22): "they grieve." → "they will grieve."

### Doubts

11. p. 340, "(Ma'idah : 104,105)" (point d): new DOUBT after the reference. It rests only on the quotation in the same place: the printed Arabic (يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَسْأَلُوا عَنْ أَشْيَاءَ إِنْ تُبْدَ لَكُمْ تَسُؤْكُمْ …… كَافِرِينَ) is word for word the opening of 5:101 and the last word of 5:102 in `data/quran-uthmani.json`, and the author's gist follows 5:101–102. The reference is kept as printed (as part 10 did for "Ma'idah 72").

### Malayalam as printed

12. Word table v. 109, وَٱصۡفَحُواْ: the print has ചെയ്‌വിൻ with the visible virama (ZWNJ, as kept in parts 04, 07, 08): "ചെയ്വിൻ" → "ചെയ്‌വിൻ".

No dropped small words, may/will errors, reversed negations, added pronouns, added ﷺ, dropped തിരുമേനി, moved "Allah says" / "in hadith" clauses or misplaced footnotes were found.

## Points the caller asked about

- **(a)** Verse 112 -ഉംകൊണ്ട് DOUBT ("while also being") kept, same open question as parts 14–15. Note the word table v. 109 renders അവന്റെ കൽപനയും കൊണ്ട് "with His commandment" without "also", as part 14's word table did for കോപവുംകൊണ്ട്; one decision should cover all. Word table 112 بَلَىٰ DOUBT kept (follows part 13). p. 339 voice: see correction 2.
- **(b)** ഉൻദ്വുർനാ (verse panel, p. 333) "Undhurna" and ഉൻള്വുർനാ (word table p. 334, commentary p. 334) "Unzurna": both spellings confirmed on the images; kept apart.
- **(c)** Printed slips translated by their evident meaning, each certain from the words around it: മറ്റുകയോ (p. 336, for മാറ്റുകയോ "change"), പ്രരിപ്പിച്ചു (p. 340; at 250 dpi it reads പ്രേരിപ്പിച്ചു, so perhaps not a slip at all), തങ്ങൾമാത്രണെന്നുള്ള (p. 343, "they alone are"), അവന നീ (p. 344, "you … Him"), നിനക്കറിഞ്ഞുകൂടെ / നിനക്കറിഞ്ഞുകുടേ ("do you not know"). Left. Word table v. 108, فَقَدۡ ضَلَّ, "എന്നാൽ തീർച്ചയായും **അവർ** വഴി പിഴച്ചു": printed so; the English keeps "they" literally ("then surely they strayed"), so nothing was corrected. Left.
- **(d)** See correction 11.
- **(e)** Terms: ഗുണം "good" (v. 105 and p. 337 "goodness and good") is consistent with part 15 ("no good at all" for യാതൊരു ഗുണവും, p. 329); നന്മ is "goodness" here and in part 10. ജൂതന്മാർ "Jewish people" (v. 111) is kept apart from യഹൂദികൾ "Jews" (word table v. 111, commentary) — acceptable. രക്ഷ "deliverance" (p. 343) as part 10. ആക്ഷേപം "reproach" as parts 12–13.
- **(f)** Arabic spot-checked at 600–1800 dpi: the hadiths of p. 344 (من عمل عملا ليس عليه أمرنا فهو رد; أن تعبد الله كأنك تراه فإن لم تكن تراه فإنه يراك, both unvowelled) and الصحف (unvowelled) are as transcribed; آيَة as transcribed; نسخ corrected (correction 1). والله أعلم as printed.
- **(g)** Cited Quran phrases compared with the print: رَاعِنَا / انْظُرْنَا (2:104), نُنسِهَا (2:106), مُحْسِنٌ (2:112), the Ma'idah quotation (5:101 … 5:102) and وَقَدِمۡنَآ إِلَىٰ مَا عَمِلُواْ ....... مَّنثُورًا (25:23) have the same words as the verses (ordinary spelling only), so they stay in the data-file form. `npm run check` lists for Al-Baqarah only the known "close but not exact" item تَابَ إِلَى الله (part 06).

## Checked and left as they are

- **"to hear properly what the Prophet ﷺ says. and to understand"** (p. 334): mirrors the full stop printed after കേട്ടു.
- **"Some divine books – leaves ( الصحف ) –"** (p. 338): the print has one dash, before ഏടുകൾ; the second dash only closes the apposition. Left.
- **സൽകാര്യങ്ങൾ "virtuous things"** and **സൽക്കർമങ്ങൾ "good deeds"** (p. 343): kept apart in this part; part 08 had "good deeds" for സൽകാര്യങ്ങൾ. Noted for the reviewer.
- **"Possessor of great favour"** (അനുഗ്രഹശാലി, v. 105) against "the One who has favour (kindness, generosity)" (word table): different Malayalam, left.
- **"Most people"** for അധികമാളുകളും (v. 109): left.
- `part.json` verses "104-112", pages "333-344", PDF pages "162-173": correct.

## Open doubts for the reviewer

1. **സുകൃതം ചെയ്യുന്നവനായും കൊണ്ട്** (verse 112): "while also being" or "being"; with അവന്റെ കൽപനയും കൊണ്ട് (word table v. 109). Same as parts 14–15.
2. **بَلَىٰ, ഇല്ലാതെ (ഉണ്ട്)** (word table v. 112): as part 13.
3. **ഖണ്ഡിക്കുകയും ചെയ്തിരിക്കുന്നു** (p. 339): active as printed; passive sense likely (correction 2).
4. **(Ma'idah : 104,105)** (p. 340): new DOUBT (correction 11).
5. **Earlier open doubts still apply** (not in this part): see parts 13–15.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| റാഇനാ / ഉൻദ്വുർനാ / ഉൻള്വുർനാ | ra'ina / unzurna | Ra'ina / Undhurna / Unzurna |
| ഗൗനിക്കുക | — | heed |
| ബഹുദൈവ വിശ്വാസികൾ | al-mushrikin | the polytheists (മുശ്‌രിക്കുകൾ stays "mushriks") |
| ഗുണം / നന്മ | khair | good / goodness |
| അനുഗ്രഹശാലി | dhu al-fadl | the Possessor of great favour |
| നസ്ഖ് / ദുർബ്ബലപ്പെടുത്തുക | naskh | naskh / annul |
| വിസ്മരിപ്പിക്കുക | nunsiha | cause to be forgotten |
| രാജാധികാരം / രാജാധിപത്യം | mulk | sovereign authority / sovereign dominion |
| രക്ഷാധികാരി / ബന്ധു / മിത്രം | wali | guardian / kinsman / friend |
| രക്ഷാകർതൃത്വം | — | lordship (as part 03) |
| സഹായകൻ | nasir | helper |
| മാപ്പ് ചെയ്യുക / തിരിഞ്ഞുകളയുക (അവഗണിക്കുക) | 'afw / safh | pardon / turn away (disregard) |
| അസൂയ | hasad | jealousy |
| ജൂതന്മാർ / യഹൂദികൾ | hud | Jewish people / Jews |
| സുകൃതം ചെയ്യുന്നവൻ | muhsin | one who does well |
| ഇഹ്സാൻ | ihsan | ihsan |
| ഇജ്മാഉ് / തഖ്സ്വീസ് / ശരീഅത്ത് | ijma' / takhsis / shari'ah | ijma' / takhsis / shari'ah |
| വസ്വിയ്യത്ത് / ഇദ്ദകാലം | wasiyyah / 'iddah | wasiyyah / 'iddah period |
| ഏടുകൾ | al-suhuf | leaves |
| വമ്പിച്ച | 'azim | mighty (as part 08) |
