# Check: An-Nisa' part 18 (verses 94–100)

Checked on 2026-11-25 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 159–170 (book pp. 1082–1093). Pages 159–169 were rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer; of p. 170 the top of the page down to the verse 101 panel was read at 150 dpi. Crops at higher resolution: p. 1083 the commentary lines with ضَرَبَ, السَلاَم, السَلم, مَغْنَم (300 dpi) and مَغَانِمُ (600 dpi); p. 1085 "ശ്രേഷ്ഠരാക്കിയിരിക്കുന്നു" in the v. 95 panel (300 dpi; the text layer drops the േ, the image has it).
- **Boundaries.** Part 17 ends on p. 1082 with "… ക്വുർആനിൽനിന്നും നബിവചനങ്ങളിൽ നിന്നും സംശയരഹിതമായി അറിയപ്പെട്ടതുമാണത്." This part starts directly below it with the verse 94 panel (p. 1082). It ends on p. 1093 with "… അതിശയോക്തിയോ, ന്യായക്കുറവോ ഒന്നും തോന്നുകയില്ല തന്നെ.", directly above "വിഭാഗം - 15" and the verse 101 panel (left for part 19). Nothing between is missing.
- Files: `part.json`, `verses.json` (verses 94–100), `words.json` (116 entries: 94: 26; 95: 24; 96: 7; 97: 22; 98: 8; 99: 7; 100: 22), `commentary.md`.
- Groups: *[Verse 94]* (panel pp. 1082–1083, table and commentary pp. 1083–1085) | *[Verses 95–96]* (panels p. 1085, table pp. 1085–1086, commentary pp. 1086–1087, footnote (*) p. 1087) | "### Section – 14" (p. 1087) | *[Verses 97–99]* (v. 97 panel p. 1087, table pp. 1087–1088, vv. 98–99 panels and tables p. 1088, commentary pp. 1088–1090, footnotes (*) and (**) p. 1089) | *[Verse 100]* (panel and table p. 1091, commentary pp. 1091–1093). Right.
- `[p. N]` markers: 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093. 1083, 1086, 1088 and 1091 open a group's commentary below its panels and table; 1084, 1085, 1087, 1089, 1090, 1092 and 1093 stand where the page turns inside a sentence, at the word where the new page begins. Right.
- Every English sentence was compared with the Malayalam on the images, in order: v. 94 commentary (word notes 9 sentences; paragraphs of 6, 13 with both riwayahs, 12 to "… such is the purport", 1), vv. 95–96 (8, 4, 9 with both definitions), the footnote, vv. 97–99 (5; the Ibn 'Abbas report with the Ankabut and Nahl quotations; both footnotes; the Bukhari report and the two sentences after it; the purport paragraph of 9; the توفى paragraph of 6), v. 100 (5; the two hadiths and the closing sentence; the story; the closing paragraph of 2). No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images, including the v. 94 slip "ജീവിത്തിന്റെ" (for ജീവിതത്തിന്റെ, mirrored as earlier parts mirror misspellings of obvious words), "‘ഗനീമത്ത്’ [ഭാഗമായി ലഭിക്കുന്ന വസ്തു]കൾ", "മനസിലാക്കിക്കൊള്ളുവിൻ" (single സ); v. 95 "നല്ലത്(നൽകുമെന്ന്)" with no space and the closing ":-"; v. 97 the unopened quote before "അല്ലാഹുവിന്റെ ഭൂമി …" and "?!’"; v. 100 "[സ്വദേശം വിട്ടേച്ചു]". Tables: the v. 97 table ends with مَصِيرًا and no gloss (the v. 98 panel follows directly); the v. 100 table prints "എത്തിക്കും".
- Word tables pp. 1083, 1085–1086, 1087–1088, 1091: pairings checked by meaning and table order, all in Quran order. Every `ar` is in its verse in `data/quran-uthmani.json` (`npm run check`: 1618 of 1618 An-Nisa' entries match).
- Honorifics: ﷺ is printed once on p. 1084 ("വിവരം നബിﷺ അറിഞ്ഞപ്പോൾ"), once on p. 1089 ("റസൂൽ തിരുമേനിﷺക്കെതിരിൽ") and 3 times on p. 1092 (the 'Umar hadith, the hadith quoted from Allah, "നബിﷺ പഠിപ്പിച്ചുതരുന്നു") (5); the English has 5 in the same places. "നബിവചനവും" (p. 1087) and "നബി ഉദ്ധരിച്ചത്" (p. 1092) have none printed and none in the English. (r): Miqdad ×3 (p. 1084); Bukhari and Ibn 'Abbas (p. 1086); Ibn Taimiyyah and Raghib (p. 1087); Ibn Jarir … Baihaqi (one (റ) after the four names) and Ibn 'Abbas (p. 1089); Ibn 'Abbas, 'Ikrimah, Bukhari (p. 1089); 'Umar and Ibn 'Abbas (p. 1092). Right.
- Arabic: Quran quotations byte-exact from `data/quran-uthmani.json`: مَغَانِمُ (4:94), غَيۡرُ أُوْلِي ٱلضَّرَرِ (4:95), إِنَّ ٱلَّذِينَ تَوَفَّىٰهُمُ ٱلۡمَلَـٰٓئِكَةُ (4:97, twice), وَمِنَ ٱلنَّاسِ مَن يَقُولُ ءَامَنَّا (29:10), ثُمَّ إِنَّ رَبَّكَ لِلَّذِينَ هَاجَرُواْ (16:110); the two phrases quoted in the v. 97 TN are also from the data file. Hand-typed Arabic as printed, checked on the image: **ضَرَبَ**, **السَلاَم**, **السَلم**, **مَغْنَم** (p. 1083); **غنيمة**, **غنائم** (p. 1084); **جِهَاد**, **مجاهد** (p. 1086); **استفراغ الوسع فى مدافعة العدو** and the footnote **العبودية لابن تيمية رحمه الله — ص٤٦** (p. 1087); **توفى**, **الماضى والمضارع**, **توفيهم الملئكة** (p. 1090).
- References as printed: "(Bu.)", "(Bazzar, Tabarani)" (ബസ്സാർ, ത്വബ്റാനീ), "(Ankabut : 10)", "(Nahl : 110)", "(Bu; Mu.)" twice, "(Bu: Mu.)" (p. 1093, colon printed). Right.
- **Mirrored as printed, without TN** (all confirmed on the images): "മുസ്‌ലികളുടെ", "ആയാൾക്ക്" (p. 1084), "ബുദ്ധമുട്ടില്ലാത്തവർ" (p. 1086), "മരണപ്പടുത്തുന്നതിനെ" (p. 1090) (misspellings of obvious words, translated by their sense); the stop in "… ബാധിച്ചാൽ. ജനങ്ങളുടെ …" (p. 1089); the closing quote with no opening one after "… സൂക്ഷിക്കേണ്ടതാണ്.’" (p. 1085); the Raghib definition closing with ’ and no full stop (p. 1087); the Ibn 'Abbas report (p. 1089) and the Bukhari report (p. 1089–1090) not closed; the Nahl bracket "(പിന്നെ നിന്റെ റബ്ബ് …" not closed (p. 1089); "എനി" for ഇനി (p. 1092); the missing full stop after "… ഇവിടെ അതുള്ളത്" (p. 1083, correction 1).
- Glossary: റബ്ബ് "Rabb" (p. 1089); കരുണാനിധി "the Ever-Merciful" (vv. 96, 100, tables, p. 1089). Right.

## Corrections made (before → after)

### TN removed (missing full stop)

1. p. 1083 "… ഇവിടെ അതുള്ളത് السَلاَم എന്നതിന്റെ …": "that it is here *[TN: no full stop is printed at the end of this sentence.]* In place of" → "that it is here In place of". The missing stop is confirmed (300 dpi), but earlier parts mirror missing full stops silently when the meaning is certain (Al-Baqarah: p. 239, p. 268, p. 292; Ali 'Imran: vv. 72, 73, 141, 142); the meaning here is certain.

### ദേഹം aligned with Al-Baqarah parts 38–39 ("self / selves")

2. v. 95 (`verses.json`): "with their wealth and persons" → "with their wealth and selves"; "with their wealth, and persons, superior" → "with their wealth, and selves, superior". Table (second وَأَنفُسِهِمۡ) "തങ്ങളുടെ ദേഹങ്ങളും": "and their persons" → "and their selves". p. 1086 "ദേഹംകൊണ്ടും ധനംകൊണ്ടും": "with person and with wealth" → "with self and with wealth". p. 1090 "സ്വന്തം ദേഹങ്ങളോട് തന്നെ": "to their own persons themselves" → "to their own selves themselves". Part 38's checker settled ദേഹം (nafs) as "self", part 39 followed, and Ali 'Imran 3:186 "in your properties and in your selves" is the same wealth-and-self pairing. The first وَأَنفُسِهِمۡ table entry "തങ്ങളുടെ സ്വന്തങ്ങളെ (ദേഹങ്ങളെ) കൊണ്ടും" keeps "and with their own selves (persons)", word for word as Ali 'Imran part 18 renders "നിങ്ങളുടെ സ്വന്തങ്ങളെ (ദേഹങ്ങളെ)" "your own selves (persons)", where the two Malayalam words need two English ones.

### Words not printed

3. p. 1086 "അതുകൊണ്ടാണ് അങ്ങിനെയുള്ള ബുദ്ധമുട്ടില്ലാത്തവർ (غير أولي الضرر) എന്നു വിശേഷിപ്പിച്ചിരിക്കുന്നത്.": "That is why He has qualified (them) as those who do not have such hardship" → "That is why the qualification has been made: those who do not have such hardship". "(them)" in round brackets read as the author's own addition, and "He" is not printed (the verb has no subject).
4. p. 1088 "… പ്രസ്താവിച്ച ശേഷം, … മുസ്‌ലിംകളെക്കുറിച്ച് പ്രസ്താവിക്കുകയാണ്.": "After making a statement about …, He is making a statement about the Muslims" → "After the statement about …, a statement is made about the Muslims" (no subject printed; part 16 renders such sentences without a subject).
5. v. 94 (`verses.json`) "‘ഗനീമത്ത്’ [ഭാഗമായി ലഭിക്കുന്ന വസ്തു]കൾ": "‘ghanimah’ [thing]s [obtained as one's portion]" → "‘ghanimah’ [thing obtained as a portion]s" ("one's" is not printed; the author's single bracket is kept whole, with the plural ending after it as printed, as Al-Baqarah 36 "‘qur'’ [menstrual purity]s").

### Word order

6. p. 1086 "നേരെ മറിച്ച് യുദ്ധത്തിൽ പങ്കെടുക്കൽ നിർബ്ബന്ധമായിട്ടുള്ള വ്യക്തികൾ തക്കതായ കാരണം കൂടാതെ ഒഴിഞ്ഞുമാറുകയും, ഒഴികഴിവുകൾ പറയുകയും ചെയ്യുന്നതിനെപ്പറ്റി … അല്ലാഹു ആക്ഷേപിച്ചിരിക്കുന്നത് സൂറത്തുത്തൗബയിൽവെച്ച് കാണാവുന്നതാണ്.": "Conversely, Allah's having reproached in very strong language the individuals for whom … withdrawing …, and making excuses, can be seen in Suratut Tawbah." → "Conversely, it can be seen in Suratut Tawbah that Allah has reproached in very strong language the withdrawing without a proper reason, and the making of excuses, by individuals for whom taking part in battle is obligatory." (The earlier English read as though the individuals themselves were reproached for being obliged; the Malayalam reproaches their withdrawing and excuses.)

### Word table

7. v. 94 table لِمَنۡ أَلۡقَىٰٓ "ഇട്ടുതന്ന(പ്രകടിപ്പിച്ച)വനോട്": "to one who has offered(displayed)" → "to one who has cast(displayed)" (ഇട്ടുതരിക is "throw / cast to"; the author's own bracket gives the sense "displayed").

No dropped sentences, reversed negations, changed numbers or added honorifics were found.

## Points the translator asked about

1. **TN p. 1083 (no stop before السَلاَم).** Confirmed at 300 dpi; TN removed and the missing stop mirrored, as earlier parts do (correction 1).
2. **TN on the v. 97 Arabic panel.** Confirmed on p. 1087: the panel prints قَالُوٓاْ أَلَمۡ تَكُنۡ أَرۡضُ ٱللَّهِ وَٰسِعَةٗ فَتُهَاجِرُواْ فِيهَا on two successive lines and has no فَأُوْلَـٰٓئِكَ … مَصِيرًا; the v. 98 panel follows on p. 1088. The word table (pp. 1087–1088) has the closing words. The TN is kept: Ali 'Imran part 02 (v. 7, p. 713) keeps a TN for a printed Arabic panel that repeats a piece and lacks words, and Al-Baqarah part 36 a TN that "points out a printed difference and rests on the book itself". The site shows the full verse from the data file, so the TN tells the reader why the book differs; the Malayalam panel translates the whole verse once.
3. **مَصِيرًا with no printed gloss (v. 97 table).** Confirmed: مَصِيرًا ends the table's last line with nothing after it. Kept as an entry with empty `ml` and the TN in `en`; `npm run check` accepts it (the `ar` matches the verse). No earlier part has an empty-gloss entry; this keeps the table in the author's order without inventing a gloss.
4. **DOUBT p. 1086 "ഏതെങ്കിലും സമരശാലികൾക്ക്".** Printed clearly so. Kept: the reading "in any case" (as ഏതായാലും, which the same author uses on p. 1082 in this sense) fits the sentence best, but "to some strivers" is grammatically possible.
5. **DOUBT v. 100 table "എത്തിക്കും".** Printed clearly so. Kept.
6. **Hand-typed Arabic.** All confirmed as printed (see above); مَغَانِمُ has a single damma (600 dpi).
7. **Quran quotes** (4:94 مَغَانِمُ, 4:95, 4:97 ×2, 29:10, 16:110): byte-exact.
8. **Mirrored slips and unclosed quotes/brackets.** Confirmed (see above).
9. **ദേഹം "person".** Aligned to "selves" (correction 2).
10. **"നൽകാതിരിക്കുകയില്ല" (p. 1091).** Kept as "Allah will not refrain from giving them a great recompense": a plain double negative stating certainty (unlike part 17's കൂടായ്കയില്ല, which states a possibility), so printed strength is kept.
11. **Footnotes.** All three are placed after the paragraph holding their marker: (*) after the jihad paragraph (p. 1087); (*) and (**) after the Ibn 'Abbas paragraph (p. 1089). Right.
12. **Honorifics.** Confirmed (see above).

## Open doubts for the reviewer

- p. 1086 "ഏതെങ്കിലും സമരശാലികൾക്ക്": "in any case" (as ഏതായാലും) or "to some strivers".
- v. 100 table يَجِدۡ "എത്തിക്കും": printed "will bring / cause to reach"; may stand for എത്തും "will reach".
- TN v. 97: the printed Arabic panel repeats a phrase and lacks the closing words.
- TN v. 97 table: no gloss printed for مَصِيرًا.
- For the reviewer's preference: the first وَأَنفُسِهِمۡ table entry keeps "own selves (persons)" for സ്വന്തങ്ങളെ (ദേഹങ്ങളെ), as Ali 'Imran 18 (correction 2).
- Earlier open doubts still apply (ദേഹം "self" against part 36's "bodies", see Al-Baqarah part 38, open doubt 5).

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഗനീമത്ത് / യുദ്ധമുതൽ | ghanimah, maghanim | ‘ghanimah’ / spoils of war (as earlier parts) |
| ദാക്ഷിണ്യം | mann | graciousness (as earlier parts) |
| സൂക്ഷ്മജ്ഞാനി | khabir | One of minute knowledge (as earlier parts) |
| ജിഹാദ് / മുജാഹിദ് | jihad, mujahid | jihad / mujahid |
| ധർമസമരം / സമരം / സമരശാലി | — | righteous struggle (as "jihad (righteous struggle)" earlier) / struggle / striver |
| (അടങ്ങി) ഇരിക്കുന്നവർ | qa'idun | those who sit (still) |
| ഹിജ്റഃ / പലായനം | hijrah | ‘hijrah’ / flight |
| സങ്കേതം | ma'wa | resort (as earlier parts) |
| പര്യവസാനം | masir | final end (as Al-Baqarah part 51) |
| ആശ്രയസ്ഥാനം | muragham | place of refuge |
| ദാറുൽ ഹർബ് / ദാറുൽ ഇസ്‌ലാം | — | ‘Dar al-Harb’ / ‘Dar al-Islam’ |
| അവതരണ കാരണം / ഹേതു | — | occasion / cause of revelation |
| റഹ്മത്ത് | rahmah | rahmah (mercy) |
| ദേഹം | nafs | self / selves (as Al-Baqarah 38–39) |
