# Check: An-Nisa' part 17 (verses 86–93)

Checked on 2026-11-25 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 146–159 (book pp. 1069–1082). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. Crops at higher resolution: p. 1070 every salam formula (400 dpi), p. 1073 "(അതെ)നിങ്ങൾക്കും" (300 dpi), p. 1079 "അവന്ന്‌വമ്പിച്ച" (300 dpi), p. 1080 رَأْسُ (600 and 1200 dpi).
- **Boundaries.** Part 16 ends at the top of p. 1069 with "… പ്രധാനമായും ഇവിടെ ഉദ്ദേശിക്കപ്പെട്ടിരിക്കുന്നതെന്ന് കരുതാം. والله اعلم". This part starts directly below it with the verse 86 panel (p. 1069). It ends on p. 1082 with "… ക്വുർആനിൽനിന്നും നബിവചനങ്ങളിൽ നിന്നും സംശയരഹിതമായി അറിയപ്പെട്ടതുമാണത്.", directly above the verse 94 panel (left for part 18). Nothing between is missing. No footnotes in this part.
- Files: `part.json`, `verses.json` (verses 86–93), `words.json` (157 entries: 86: 9; 87: 11; 88: 15; 89: 19; 90: 26; 91: 24; 92: 40; 93: 13), `commentary.md`.
- Groups: *[Verses 86–87]* (panels and table p. 1069, commentary pp. 1069–1071) | "### Section – 12" (p. 1071) | *[Verse 88]* (panel and table p. 1071, commentary p. 1072) | *[Verses 89–90]* (v. 89 panel pp. 1072–1073, table p. 1073, v. 90 panel pp. 1073–1074, table and commentary pp. 1074–1075) | *[Verse 91]* (panel pp. 1075–1076, table p. 1076, commentary p. 1077) | "### Section – 13" and its intro (p. 1077) | *[Verses 92–93]* (v. 92 panel pp. 1077–1078, table pp. 1078–1079, v. 93 panel and table p. 1079, commentary pp. 1079–1082). Right.
- `[p. N]` markers: 1070, 1071, 1072, 1074, 1075, 1077, 1079, 1080, 1081, 1082. Pages 1073, 1076 and 1078 hold only panels and tables, so they have no marker. 1072, 1074, 1077 and 1079 open a group's commentary; 1070, 1080 and 1082 stand where the page turns inside a sentence, at the word where the new page begins; 1071, 1075 and 1081 open the first paragraph on the page. Right.
- Every English sentence was compared with the Malayalam on the images, in order: vv. 86–87 commentary (paragraphs of 6, 8, 9, 4 and 1 sentences), v. 88 (8 + 5), vv. 89–90 (intro 1, points (1)–(5), the "remember one thing" paragraph of 8 with the hadith), v. 91 (7 + 2 and الله أكبر), Section 13 intro (1), vv. 92–93 (intro 2, (1) with One and Secondly, the Al-Baqarah 178 paragraph, (2) with the 'Ayyash story, (3), (4), the paragraph on the principles, and the closing paragraph of 13). No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images (also compared word by word against a normalised text layer; the three words where the text layer differs, "നിങ്ങളവരെ", "നിങ്ങളിലേക്ക്,", "കണ്ടേക്കും", are right on the image), including "(പ്രകാരം തന്നെ)" (v. 86); "[ഇല്ല, ആരുമില്ല.]" (v. 87); "നിങ്ങൾ(ഇരുകൂട്ടരും)" and "ബന്ധു മിത്രത്തെയാകട്ടെ. സഹായകനെയാകട്ടെ" with the stray stop (v. 89); "ചെയ്തുവെങ്കിൽ. അപ്പോൾ" with the stray stop (v. 90); "എനി(കൊല്ലപ്പെട്ട) അവൻ", "(നിശ്ചയിക്കപ്പെട്ടിട്ടു)ള്ള" (v. 92); "അവന്ന്‌വമ്പിച്ച" (v. 93, correction 4). Tables: ".ആർ, ആരാണ്" (v. 87; the stop printed before the gloss is left out of `ml`, as part 15 did), "ഏല്‌പിച്ചു (വിട്ടു)" with the visible virama (first v. 92 entry, as printed) beside "ഏൽപിച്ചു" (second entry), "ഒരു തെണ്ട (നഷ്ടപരിഹാരം)വും".
- Word tables pp. 1069, 1071, 1073, 1074, 1076, 1078–1079: pairings checked by meaning and table order, all in Quran order. Every `ar` is in its verse in `data/quran-uthmani.json` (`npm run check`).
- **Legal rulings (vv. 92–93, pp. 1079–1082)** checked point by point: two things obligatory on the one who kills a believer by mistake (a believing slave freed; a ransom paid to the heirs); small children who know nothing of Islam do not suffice, in the opinion of some scholars; a hundred camels, or goats and cattle or money when camels are not obtainable; the heirs may waive the ransom but not the freeing of the slave; deliberate killing: retaliation (Al-Baqarah 178), ransom enough if the heirs waive the retaliatory killing; case (2) slave only, no ransom; case (3) truce people: ransom and slave, Muslim or not, the opinion of one section of scholars; case (4) two months' continuous fast, restarted if broken; the slave from the killer's own property, the ransom from the near heirs (عصبة), else the public treasury, and only then from the killer's property; Ibn 'Abbas (r): no tawbah; the majority view; no difference that it is the gravest sin after shirk and kufr. Conditions, numbers, payers and negatives are right, after correction 8.
- Honorifics: ﷺ is printed twice (p. 1075 "നബിﷺ പറഞ്ഞു", p. 1081 "നബിﷺയുടെ സുന്നത്തിൽ"); the English has 2 in the same places. "ഒരു നബി വചനത്തിൽ" (p. 1070) and "നബിവചനങ്ങളിൽ" (p. 1082) have none printed and none in the English. (r): 'Ayyash (r) (p. 1081, also "(عياش ـ رضـ)") and Ibn 'Abbas (r) (p. 1082). Right.
- Arabic: no Quran quotation in the commentary. Hand-typed Arabic as printed, checked on the image: **تَحِيَّة** (pp. 1069, 1070); the salam formulas on p. 1070 (400 dpi): **السَّلَامُ عَلَيكُمْ** (no sukun on ي), **وَعَلَيْكُمْ السَّلام وَرَحْمَةَ الله** (fatha on ة; the text layer's damma is wrong), **السَّلَامُ علَيْكُمْ وَرَحْمَةَ الله**, **وَبَرَكَاتُهُ**, **وعَلَيْكُمْ السَّلَام وَرَحْمَةَ الله وبَرَكَاتُهُ**, **وَرَحْمَةَ الله** on the "ten goods" line (fatha, as printed everywhere on the page); **الله أكبر** (p. 1077); **رَقَبَة** and **رَأْسُ** (p. 1080, correction 5); **(عياش ـ رضـ)** (p. 1081); **(عصبة)** (p. 1081). (دِيَة in the p. 1080 DOUBT is in the note, not in the author's text.)
- References as printed: "(A; Da; Ti; Ba.)" (അ; ദാ; തി; ബ.), "Su: Fatihah", "Al-Baqarah verse 7", "the 98th verse" (p. 1075, rightly: the exemption verse is 98), "(Bu; Mu.)", "Al-Baqarah : 178", "the 93rd verse" (p. 1080), "the 98th verse" (p. 1082, TN).
- **Mirrored as printed, without TN:** p. 1072 "മുതലായവയടെ" (for മുതലായവയുടെ); "എനി" in the panels and tables (for ഇനി, as earlier parts); the stray stops in the v. 89 and v. 90 panels, kept in `ml` and mirrored in the English ("whether a kin friend. Whether a helper …"; "… towards you. Then, …"), as part 16 keeps panel punctuation; "ഏല്‌പിച്ചു" with the visible virama.
- Glossary: no glossary term occurs except the honorifics. Renderings checked against earlier parts by grep (see New terms).

## Corrections made (before → after)

### Words not rendered

1. p. 1072 "മുസ്‌ലിംകളോടെന്നപോലെ അവരോടും പെരുമാറണമെന്നും" and "അവിശ്വാസികളോടെന്നപോലെ അവരോടും": "that they should be treated just as the Muslims are" → "that they too should be treated just as the Muslims are"; the same with "the disbelievers" (the -ഉം of അവരോടും was not rendered). "just as the Muslims are" itself renders -ഓടെന്നപോലെ and is not an addition.

### Renderings aligned with the verse

2. p. 1072 "അല്ലാഹു വഴിപിഴവിലാക്കി; അല്ലാഹു പൂർവ്വസ്ഥിതിയിലേക്ക് മറിച്ചിട്ടു": "Allah led astray; Allah turned back to the former state" → "Allah led into error; Allah turned over to the former state" (the expressions quote v. 88, whose panel and table render വഴിപിഴവിലാക്കുക "lead into error" and മറിച്ചിടുക "turn over").
3. p. 1077 "അതിലേക്കവർ സ്വയം മറിഞ്ഞു വീഴുകയായി": "they set about turning over into it of themselves" → "they fall over into it of themselves" (the v. 91 panel's "(സ്വയം) മറിഞ്ഞു വീഴുന്നു" is "fall over (of themselves)").

### Malayalam and Arabic as printed

4. v. 93 panel `ml`: "അവന്ന് വമ്പിച്ച" → "അവന്ന്‌വമ്പിച്ച" (no space printed, confirmed at 300 dpi; kept closed as part 14 kept "മതിതാനും").
5. p. 1080: **رَأسٌ** → **رَأْسُ** (1200 dpi: sukun on the hamza and a single damma on the sin, not dammatan).

### Paragraphing

6. p. 1081 "ഇസ്‌ലാമിനെ യഥാർഥത്തിൽ …" begins at the left margin without indent, continuing point (2) from p. 1080; it had been made a new paragraph. Joined to (2), with the `[p. 1081]` marker kept at the word where the page begins.

### Meaning

7. p. 1081 "അയ്യാശ്(റ) ആ വിവരം അറിഞ്ഞിരുന്നതുമില്ല.": "'Ayyash (r) did not know that information either." → "Nor did 'Ayyash (r) know that information." ("either" implied that someone else also did not know; the -ഉം joins this to the previous sentence).
8. p. 1081 point (3) "മുസ്‌ലിംകളുമായി സന്ധി നിലവിലുള്ള ജനങ്ങളിൽപെട്ട ഒരാൾ": "a people with whom a truce is in force with the Muslims" → "a people that has a truce in force with the Muslims" (the doubled "with" blurred who has the truce with whom).
9. p. 1082 "അവൻ ഖേദിച്ചു മടങ്ങിയാൽ അല്ലാഹു പൊറുത്തു കൊടുത്തു കൂടായ്കയില്ലെന്നത്രെ ഭൂരിപക്ഷാഭിപ്രായം": "the majority opinion is indeed that … Allah will not fail to forgive him if he turns back in remorse" → "… that … it is not unlikely that Allah will forgive him if he turns back in remorse". -കൂടായ്കയില്ല ("it is not that it may not") states a possibility, not a certainty; "will not fail to" strengthened the author's statement on a disputed point.

### Verse English

10. vv. 90 and 92 panels "നിങ്ങൾക്കും തങ്ങൾക്കുമിടയിൽ വല്ല ഉടമ്പടിയും ഉള്ളതായ ഒരു ജനത": "a people between you and themselves there is some covenant" → "a people that has some covenant between you and themselves" (ഉള്ളതായ "that has"; the earlier English was not a sentence).

### DOUBT markers made consistent

11. തെണ്ടം: the v. 92 panel DOUBT now names the parts where the doubt is open (Al-Baqarah 08, 18, 27, 29, 32, 37; Ali 'Imran 09) in their single-quote form; the first v. 92 table entry (وَدِيَةٞ) has a short pointer "[DOUBT: തെണ്ടം rendered 'ransom'; see the doubt in verse 92]"; the second table entry (فَدِيَةٞ) no longer repeats it; the p. 1080 commentary marker is shortened to a pointer that also says the word stands here for دِيَة. This follows Ali 'Imran 09 (one in the verse, one in the table) and Al-Baqarah 27 (one in the commentary where the ruling is explained).

No dropped sentences, reversed negations, changed numbers or added honorifics were found.

## Points the translator asked about

1. **തെണ്ടം "ransom" (DOUBT).** Printed clearly (panel twice, table twice, commentary six times). Kept as "ransom" with the open doubt, as Al-Baqarah 37 aligned it; markers reduced (correction 11). The author's own gloss here is [നഷ്ടപരിഹാരം] "compensation", which supports the reviewer's eventual decision.
2. **TN p. 1082 "98-ാം വചനം".** Confirmed: the passage quotes verse 93 (Hell, anger, curse, great punishment). The author cites "93-ാം വചനം" for it on p. 1080, and "98-ാം വചനം" on p. 1075 rightly for the exemption from hijrah, which may be where the slip came from. TN kept.
3. **Salam formulas p. 1070.** All confirmed at 400 dpi: fatha on the ة of وَرَحْمَةَ in every formula, including the "ten goods" line; the translator's Arabic is right.
4. **رَأسٌ p. 1080.** Corrected (correction 5).
5. **Hand-typed Arabic** تَحِيَّة, الله أكبر, (عياش ـ رضـ), (عصبة): as printed.
6. **Mirrored slips and stray stops.** മുതലായവയടെ, എനി, ഏല്‌പിച്ചു, the v. 89 and v. 90 panel stops: confirmed and kept (see above). The stop printed before the v. 87 table gloss "ആർ, ആരാണ്" is left out of `ml`, as part 15.
7. **"just as the Muslims are" (p. 1072).** Not an addition: it renders മുസ്‌ലിംകളോടെന്നപോലെ; "too" added for അവരോടും (correction 1).
8. **Literal verse English vv. 89–90.** Kept literal; the one ungrammatical phrase fixed (correction 10).
9. **References, honorifics, page markers.** Confirmed.

## Open doubts for the reviewer

- തെണ്ടം "ransom" (v. 92 panel and table, p. 1080 commentary): the open doubt of Al-Baqarah 08 and later parts; here it renders دية and the author glosses it [നഷ്ടപരിഹാരം] "compensation".
- TN p. 1082: "98-ാം വചനം" printed for verse 93.
- For the reviewer's preference only: correction 9 (കൂടായ്കയില്ല "it is not unlikely that") is the checker's reading of the double negative; please confirm.
- Earlier open doubts still apply.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| അഭിവാദ്യം / അഭിവാദ്യമർപ്പിക്കുക | tahiyyah, hayya | greeting / offer in greeting (new) |
| ഉപചാരം / കാഴ്ച | tahiyyah | courtesy / presentation (new) |
| കണക്കുനോക്കുന്നവൻ | hasib | One who checks the account (as An-Nisa' 4:6) |
| മറിച്ചിടുക | arkasa | turn over (headlong) |
| വഴിപിഴവിലാക്കുക | adalla | lead into error |
| ഉടമ്പടി / കരാർ / ഉറപ്പ് | mithaq | covenant / pact / assurance |
| സമാധാനം / ഒതുക്കം / ശാന്തത | salam | peace / restraint / calm |
| സലാം | — | salam |
| തെണ്ടം / നഷ്ടപരിഹാരം | diyah | ransom (DOUBT) / compensation (as Al-Baqarah 27) |
| പ്രായശ്ചിത്തം | — | atonement (as Al-Baqarah 27) |
| പ്രതിക്രിയ / പ്രതിക്കൊല | qisas | retaliation / retaliatory killing (as Al-Baqarah 27) |
| പശ്ചാത്താപം | tawbah | repentance (as Al-Baqarah 06) |
| പിരടി | raqabah | nape |
| ഘാതകൻ | — | killer |
| അഗാധജ്ഞൻ | hakim | the Profoundly Knowing (as Al-Baqarah 06, 20) |
| ധർമസങ്കടം | — | moral dilemma |
| അടുത്ത അവകാശികൾ (عصبة) | 'asabah | near heirs |
| പൊതുഖജനാവ് (ബൈത്തുൽമാൽ) | bait al-mal | public treasury (Bait al-Mal) |
