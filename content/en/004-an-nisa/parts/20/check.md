# Check: An-Nisa' part 20 (verses 105–115)

Checked on 2026-11-25 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 179–190 (book pp. 1102–1113). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. Crops at 300 dpi: p. 1102 the line with **بَنُو ظَفَر** and **أُبَيْرِق**, and **طَعَمَة**; p. 1112 the last line ("വ്യക്തമായ പ്രസ്താവനകളിലെങ്കിലും").
- **Boundaries.** Part 19 ends on p. 1102 with "… ചുണയും നിങ്ങൾക്കുണ്ടായിരിക്കേണ്ടതുണ്ടല്ലോ എന്ന് താൽപര്യം." This part starts directly below it with "വിഭാഗം - 16" and its introduction ("അൻസ്വാരികളിലും യഹൂദികളിലും …"). It ends on p. 1113 with "… നേർമാർഗത്തിലാക്കുവാൻ ആർക്കും സാധ്യമല്ലതാനും.", directly above "വിഭാഗം - 18" and the verse 116 panel (left for part 21). Nothing between is missing. No footnotes in this part.
- Files: `part.json`, `verses.json` (verses 105–115), `words.json` (133 entries: 105: 11; 106: 6; 107: 9; 108: 12; 109: 14; 110: 10; 111: 7; 112: 8; 113: 23; 114: 17; 115: 16), `commentary.md`.
- Groups: "### Section – 16" and its introduction (pp. 1102–1104) | *[Verses 105–108]* (panels p. 1104, table pp. 1104–1105, commentary pp. 1105–1106) | *[Verses 109–112]* (panels p. 1107, table pp. 1107–1108, commentary p. 1108) | "### Section – 17" (foot of p. 1108) | *[Verse 113]* (panel, table and commentary p. 1109, commentary p. 1110) | *[Verses 114–115]* (panels pp. 1110–1111, table and commentary p. 1111, commentary pp. 1112–1113). Right.
- `[p. N]` markers: 1103, 1104, 1105, 1106, 1108, 1109, 1110, 1111, 1112, 1113. Page 1107 holds only panels and the start of a table, so it has no marker. 1105, 1108, 1109 and 1111 open a group's commentary below its table; 1103, 1104, 1106, 1110, 1112 and 1113 stand where the page turns inside a sentence, at the word where the new page begins (1103 "submitted", page begins സമർപ്പിക്കുകയും; 1104 after "in these verses", the turn is inside വചനങ്ങ|ളിൽ; 1106 before "one who argues", page begins വാദിക്കുന്നവനാവരുത്; 1110 moved, correction 4; 1112 before "some individuals", page begins ചില വ്യക്തികളെ; 1113 before "have generally come to accept", page begins സികൾ പൊതുവെ അംഗീകരിച്ചും). Right.
- Every English sentence was compared with the Malayalam on the images, in order: the Section 16 introduction (paragraphs of 3; the story, 13 with the parenthesis; 13 with Qatadah's report; 9 with the Sayyid Qutb paragraph running onto p. 1104), vv. 105–108 (6 with the hadith; 6 and الله اعلم; 2; 8), vv. 109–112 (4 and والى الله المشتكى), v. 113 (8; 3), vv. 114–115 (9; 12 and الله اعلم; the lead sentence; points (1)–(3); the Ibn Kathir paragraph with kinds (1)–(2) and the hadith; 2; 4). No sentence is missing and none is added.
- **Meaning** checked point by point: the occasion of revelation (the coat of Rifa'ah, the sons of Ubairiq of Banu Zafar, Tu'mah or Bashir, the Jew Zaid ibn al-Samin, the food trail, the plea and the verdict on outward evidence, Qatadah's report, the verses 105–114 and 115–116, the thief joining the mushriks in Makkah); judging by outward evidence is no wrong in law; the hint that more careful inquiry was due; the two (and both) views on the command to seek forgiveness; this does not mean the Prophet ﷺ sinned; prophets are protected from sins; the ruling is general though the occasion is particular; the Labid riwayah; the two kinds of differing from the Prophet ﷺ; "Allah will never gather this community together in misguidance". Negatives, conditions and who does what are right (except correction 1).
- `verses.json` and every `words.json` gloss match the images, including "(കക്ഷിപിടിച്ച്)വാദിക്കുന്നവനാവരുത്" with no space (v. 105), "കൂടെയുണ്ട്താനും" (v. 108), "സമ്പാദിച്ചു [പ്രവർത്തിച്ചു]വെക്കുന്ന", "എതിരായിട്ടത്രെ" (v. 111), "സമ്പാദി [പ്രവർത്തി]ക്കുകയും" (v. 112), "അറിയുമായിരുന്നില്ലാത്തത്(പലതും)" (v. 113), "മനസിലാ" with one സ (v. 115). Tables: "നിനക്കുകാണിച്ചു തന്നതുകൊണ്ട്", "വലിയ(മഹാ) വഞ്ചകൻ", "അവരുടെ കൂടെ ഉണ്ട്(താനും)", "വലയം ചെയ്യുന്ന (മുഴുവൻ - സൂക്ഷ്മമായി അറിയുന്ന)വൻ", "എന്നാലവൻ", "വല്ലതെറ്റും", "വ്യക്ത(സ്പഷ്ട)മായ".
- Word tables pp. 1104–1105, 1107–1108, 1109, 1111: pairings checked by meaning (the mixed-direction lines put some Arabic at the far end of a line), all in Quran order. Every `ar` is in its verse in `data/quran-uthmani.json` (`npm run check`: 1841 of 1841 An-Nisa' entries match).
- Honorifics: ﷺ is printed 33 times: p. 1102 2; p. 1103 4; p. 1104 1; p. 1105 4; p. 1106 4; p. 1109 2; p. 1110 6; p. 1111 1; p. 1112 8; p. 1113 1. The English has 33 in the same places (TN and DOUBT texts not counted). None printed and none in the English: the first "നബി ഒന്നിച്ചുണ്ടായിരുന്ന" (p. 1102), "തിരുമേനി എന്നോട്", "തിരുമേനി ആ ആയുധം" (p. 1103), "തിരുമേനി കുറേ കൂടി" (p. 1105), "തിരുമേനിക്ക്" (p. 1110), "തിരുമേനിയുമായി" and "അവിടുന്ന്" (p. 1112). (r): Rifa'ah (p. 1102, one (റ) after both names); Qatadah ×2, Rifa'ah, Sayyid Qutb (p. 1103); Qatadah (p. 1106); Ibn Kathir (p. 1112); Ibn 'Umar and Ibn 'Abbas (p. 1113, one (റ) after both names). Right.
- Arabic: Quran quotations byte-exact from `data/quran-uthmani.json`: إِنَّآ أَنزَلۡنَآ إِلَيۡكَ ٱلۡكِتَٰبَ (4:105), فَسَوۡفَ نُؤۡتِيهِ أَجۡرًا عَظِيمٗا (4:114), وَمَن يُشَاقِقِ ٱلرَّسُولَ (4:115), فَقَدۡ ضَلَّ ضَلَٰلَۢا بَعِيدًا (4:116), وَلَا تُجَٰدِلۡ عَنِ ٱلَّذِينَ (4:107), نُوَلِّهِۦ مَا تَوَلَّىٰ (4:115). p. 1103: the two "from … to …" lines are printed with Arabic and Malayalam in scrambled visual order (on the 115–116 line فَقَدْ ضَلَّ ضَلَالًا بَعِيدًا stands before മുതൽ and وَمَن يُشَاقِقِ الرَّسُولَ before വരെയുള്ള); the English gives them in reading order (from وَمَن يُشَاقِقِ … to فَقَدۡ ضَلَّ …), which is the only sense. Confirmed. **وَلَا تَكُن الخ** (p. 1105, printed وَلاتَكُنْ الخ): the Quran words from the data file with الخ kept as printed, as earlier parts do (e.g. وَإِذَا قَضَىٰٓ أَمۡرٗا....الخ); `npm run check` lists it as "close but not exact" (86 %) only because of الخ, as with such quotations before. Hand-typed Arabic as printed, checked on the image: **أُبَيْرِق**, **بَنُو ظَفَر**, **طَعَمَة** (p. 1102, 300 dpi), **الله المستعان** (p. 1103), **الله اعلم** (pp. 1106, 1112), **والى الله المشتكى** (p. 1108, no gloss printed, as **فالى اللّه المشتكى** earlier), **الكتاب**, **الحكمة** (p. 1110), **نَجْوَى** (p. 1111).
- References as printed: "(Bu; Mu.)" (p. 1105), "(Ti; Ba.)" (p. 1113). Right.
- **Mirrored as printed, without TN** (all confirmed on the images): "എനി" for ഇനി (p. 1104, "Now"), "താക്കിതിന്" for താക്കീതിന് (p. 1112), "മനസിലാ" (v. 115) (misspellings of obvious words, translated by their sense); Rifa'ah's words ‘… സംഭാവനയാണ്’ with no full stop (p. 1103); no stop after "… ഫലവത്താകുകയും ചെയ്തു" before "അധികം താമസിയാതെ…" (p. 1112), joined with "and" as the sense requires; no stop after "… പാത്രമാണെന്നു പറയേണ്ടി വന്നിരിക്കുന്നു" before والى الله المشتكى (p. 1108).
- Glossary: കരുണാനിധി "the Ever-Merciful" (vv. 106, 110, tables); അഗാധജ്ഞൻ "the Profoundly Knowing", യുക്തിമാൻ "the Sagacious" (v. 111) as Al-Baqarah 06, 20 and part 19. Right.

## Corrections made (before → after)

### DOUBT turned into TN (pronoun slip)

1. p. 1109 "സത്യാവസ്ഥ അവർ നബിﷺക്ക് വെളിവാക്കിക്കൊടുക്കുകയും ചെയ്തു.": "They also made the true state clear to the Prophet ﷺ. *[DOUBT: … Translated as printed.]*" → "He also made the true state clear to the Prophet ﷺ. *[TN: the print has അവർ ("they"), evidently a slip for അവൻ ("He").]*". അവർ is clearly printed, but the subject must be Allah: the sentence before has "അല്ലാഹു പാഴാക്കിക്കളഞ്ഞു", the next begins "ഇതുപോലെ … അല്ലാഹു തിരുമേനിക്ക് തുറന്നു കാട്ടിക്കൊടുക്കുകയുണ്ടായിട്ടുണ്ട്", and the people of Tu'mah are the ones who covered the truth up. The TN wording is the one An-Nisa' (p. 927) uses for the same slip.

### ലക്ഷ്യം aligned with the standing open doubt

2. p. 1112 "ലക്ഷ്യങ്ങളും തെളിവുകളും മുഖേന": "through proofs and evidences" → "through evidences *[DOUBT: ലക്ഷ്യങ്ങൾ usually means "aims"; beside തെളിവുകൾ ("proofs") it is taken in its older sense "evidences, indications", as in Al-Baqarah. The option is "aims and proofs".]* and proofs", as Al-Baqarah parts 42–46 and Ali 'Imran render the same pair.

### Words not printed

3. p. 1112 "അധികം താമസിയാതെത്തന്നെ": "and very soon, without much delay," → "and without much delay indeed," ("very soon" doubled the one Malayalam phrase).

### Page marker

4. p. 1110: the page turns after "മനസ്സിലാക്കുവാൻ" and begins "കഴിയാത്ത". "when it was not possible *[p. 1110]* to understand" → "when it was *[p. 1110]* not possible to understand".

### Sentence structure (no change of meaning)

5. p. 1103 "അയ്യോ! അത് പറയേണ്ടിയിരുന്നില്ലെന്ന് ഖേദിച്ചുകൊണ്ടാണ് ഞാൻ മടങ്ങിപ്പോന്നത്.": "It was in regret that I should not have said that, that I came back." → "It was with regret that I ought not to have said that, that I came back."
6. pp. 1105–1106 "… സൂക്ഷ്മാന്വേഷണം നടത്തേണ്ടതുണ്ടായിരുന്നുവെന്നുള്ള സൂചനയാണ് وَلاتَكُنْ الخ (…) എന്നും وَلاتُجَادِلْ عَنِ الَّذِينَ.... (…) എന്നുമുള്ള വാക്യങ്ങളിൽ കാണുന്നത്.": "Nevertheless, it is the hint that, …, the noble one ought to have conducted …, that is seen in the sentences … ." → "Nevertheless, what is seen in the sentences … is the hint that, …, the noble one ought to have conducted somewhat more careful inquiry concerning the real state of the incident." (The cleft sentence with the long hint first was hard to follow; every word is kept.)

No dropped sentences, reversed negations, changed numbers or added honorifics were found.

## Points the translator asked about

1. **DOUBT p. 1104 "അണപ്പിച്ചുകൊണ്ടും".** Printed clearly so. Kept as a DOUBT: an uncommon form (അണയ്ക്കുക / അണപ്പിക്കുക "bring close, gather in"); "taking in (every nook and corner)" fits, but the image does not settle the exact nuance.
2. **DOUBT p. 1109 അവർ.** Turned into a TN (correction 1).
3. **DOUBT p. 1112 "വ്യക്തമായ പ്രസ്താവനകളിലെങ്കിലും".** Confirmed at higher resolution: no ഇല്ല is printed. Kept as a DOUBT, not a TN: the sense (kind (2) is set against kind (1), "contrary to the clear statements") points to "പ്രസ്താവനകളിലില്ലെങ്കിലും" ("even if not in clear statements"), but that needs a whole missing syllable, not a one-letter slip, so the reading is not evident enough for a TN.
4. **p. 1103 scrambled Quran fragments.** Confirmed; reading order is right (see Arabic above).
5. **وَلَا تَكُن الخ.** Kept; the "close but not exact" warning is acceptable (see Arabic above).
6. **Hand-typed Arabic.** All confirmed as printed (see above).
7. **Mirrored slips, text layer against image.** Confirmed (see above). Where the text layer differs (ZWJ chillu forms, broken ണ്ട, garbage Arabic), the image was followed.
8. **ﷺ count 33.** Confirmed (see above).
9. **Page markers placed by sense.** Checked against the printed turns; one moved (correction 4).
10. **Awkward sentences pp. 1103, 1105–1106.** Reworded (corrections 5 and 6).
11. **New terms.** Checked by grep (see below). ഗൂഢസംസാരം, ചേരിപിരിയുക and വക്കീൽ do not occur in earlier parts' tables; രാത്രി പരിപാടിയിടുക (يُبَيِّتُ) was "will plan by night" in An-Nisa' part 16, matching "lay plans at night" here; ചേരിപിരിവ് was "factionalism" in Al-Baqarah 21 (shiqaq), the verb here "break off into another camp" keeps the same image. ലക്ഷ്യങ്ങൾ aligned (correction 2).

## Open doubts for the reviewer

- p. 1104 "അണപ്പിച്ചുകൊണ്ടും": "taking in, covering" or "bringing up close" (the nooks and corners).
- p. 1112 ലക്ഷ്യങ്ങൾ: "evidences" or "aims" (the standing question from Al-Baqarah parts 01–02).
- p. 1112 "വ്യക്തമായ പ്രസ്താവനകളിലെങ്കിലും": printed "even if in clear statements"; the sense suggests "even if not in clear statements".
- TN p. 1109: അവർ printed for അവൻ (Allah).
- Earlier open doubts still apply.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഗൂഢസംസാരം / രഹസ്യഭാഷണം | najwa (نَجْوَى) | secret talk / confidential conversation (new) |
| രാപ്പരിപാടി / രാത്രി പരിപാടിയിടുക | yubayyitun | night-plans / lay plans at night (as An-Nisa' 16 "plan by night") |
| ചേരിപിരിയുക / ചേരിതിരിയുക | yushaqiq | break off into another camp / divide off into a camp (new; ചേരിപിരിവ് "factionalism" in Al-Baqarah 21) |
| വക്കീൽ / കാര്യം ഏൽപിക്കപ്പെടുന്നവൻ | wakil | attorney / one to whom the affair is entrusted (new) |
| വിജ്ഞാനി | hakim | the Wise (new, in the v. 111 table beside അഗാധജ്ഞൻ, യുക്തിമാൻ) |
| വിജ്ഞാനം | hikmah (الحكمة) | wisdom |
| ലക്ഷ്യങ്ങൾ | — | evidences, with DOUBT (as Al-Baqarah) |
| പടയങ്കി / അങ്കി | — | coat of mail / coat (new) |
| കപട വിശ്വാസി / കാപട്യം | munafiq, nifaq | hypocrite / hypocrisy |
| തൗഫീക്വ് | tawfiq | tawfiq |
| വഹ്‌യ് | wahy | wahy |
| അഗാധജ്ഞൻ / യുക്തിമാൻ | hakim | the Profoundly Knowing / the Sagacious (as Al-Baqarah 06, 20) |
| പര്യവസാനം | masir | final end (as part 18) |
