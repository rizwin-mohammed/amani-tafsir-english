# Check: An-Nisa' part 10 (verses 43–46)

Checked on 2026-11-20 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 89–100 (book pp. 1012–1023). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. 300/600 dpi crops: p. 1017 **مَسّْ**; p. 1018 **لَمَسْتُمُ**, **تَيَمُّمْ**; p. 1021 the garbled glyphs in the word table.
- **Boundaries.** Part 09 ends on p. 1012 with "അല്ലാഹു നമ്മെ കാത്തു രക്ഷിക്കട്ടെ, ആമീൻ.". This part starts directly below it with "വിഭാഗം - 7" and the verse 43 panel, and ends on p. 1023 with "… പ്രതീക്ഷിക്കേണ്ടതില്ല എന്നു കൂടി അല്ലാഹു അറിയിക്കുന്നു.", directly above the verse 47 panel. Nothing between is missing. No footnotes except the (\*) footnote on p. 1019 (present, after its paragraph).
- Files: `part.json`, `verses.json` (verses 43–46), `words.json` (72 entries: 43: 32; 44: 10; 45: 7; 46: 23), `commentary.md`.
- Groups: "### Section – 7" (വിഭാഗം - 7, p. 1012) | *[Verse 43]* (panel pp. 1012–1013, table p. 1013, commentary pp. 1013–1019) | *[Verses 44–46]* (panels and table start p. 1020, table and commentary pp. 1021–1023). p. 1012 holds only the heading and panel and p. 1020 only panels and table, so there are no `[p. 1012]` / `[p. 1020]` markers. Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images, including "അറിയു(വാൻ കഴിയു)ന്നത് വരെ", "(മലമൂത്ര)", "(എങ്കിൽ)", "(അഥവാ മണ്ണിനെ)" (v. 43); "(വിലക്ക്)" (v. 44); "നല്ലവണ്ണം അറിയുന്നവനത്രെ", "(അഥവാ രക്ഷകർത്താവായി)" (v. 45); "(അതെ)യഹൂദരായവരിൽപെട്ടവർ (തന്നെ)", "[ആക്ഷേപിച്ചു] കൊണ്ടും!", "എന്നും. 'ഉൻള്വുർനാ'" (stop as printed), "അല്പ(മാത്ര)മല്ലാതെ" (v. 46); table "നിങ്ങൾ(ക്ക്)", "കടന്നുപോകുന്ന (വിട്ടു കടക്കുന്ന)വരായിട്ടല്ലാതെ", "കരുതി(അന്വേഷിച്ചു)കൊള്ളുവിൻ", "സഹായകനായി," (comma printed), "യഹൂദരായവരിൽപ്പെട്ട(വർ)", "ഉൻള്വുർനാ (ഞങ്ങളെ നീ ഗൗനിക്കണം)എന്നും" (no space).
- **v. 43 panel "'ജനാബത്ത്'കാരായിക്കൊണ്ടും".** On p. 1012 the quoted word ends a line and "കാരായിക്കൊണ്ടും" begins the next; this print breaks words across lines without a hyphen (e.g. "നമ / സ്ക്കാരത്തെ" two lines above), and the table and p. 1015 have the same word joined (ജനാബത്തുകാരായും, ജനാബത്തുകാരായിക്കൊണ്ടും). The translator's joined form is right.
- **p. 1021 garbled glyphs.** In the table, v. 44 أَن تَضِلُّواْ "നിങ്ങൾ പിഴച്ചുപോകു" ends a line and the next line begins with Latin-looking glyphs "h m̃" (300 dpi) instead of Malayalam. The text layer has "വാൻ" there, and the panel (p. 1020) prints "പിഴച്ചുപോകുവാൻ" in full. The gloss "നിങ്ങൾ പിഴച്ചുപോകുവാൻ" is kept with no marker (a font fault, not a word of the author).
- **Word tables pp. 1013 and 1020–1021.** Pairings checked by meaning and text-layer order, all in Quran order: v. 43 إِلَّا عَابِرِي / سَبِيلٍ / حَتَّىٰ تَغۡتَسِلُواْۚ / وَإِن كُنتُم across the line; كَانَ / عَفُوًّا / غَفُورًا on the last line; v. 44 مِّنَ ٱلۡكِتَٰبِ across the page turn ("(വേ / ദ)ഗ്രന്ഥത്തിൽ നിന്ന്"); v. 46 لَكَانَ / خَيۡرٗا / لَّهُمۡ / وَأَقۡوَمَ. Right.
- `[p. N]` markers 1013–1019, 1021–1023. Page turns: "or whether *[p. 1015]*" (എന്താണെന്ന്, / അവ ക്രമത്തിൽ), "it is a long journey or not, *[p. 1016]*" (പറഞ്ഞിട്ടില്ലാത്ത / തുകൊണ്ട്), "Except some rational arguments. *[p. 1017]*", "**مَسّْ** (mass) *[p. 1018]*" ((മ / സ്സ്)), "(a place *[p. 1019]* for praying)", "and in reality *[p. 1022]*", "rejection of the truth and *[p. 1023]* of disbelief". Acceptable. The p. 1014 marker was moved (correction 1).
- Honorifics: ﷺ printed 18 times (p. 1014 ×1, p. 1015 ×1, p. 1017 ×3, p. 1018 ×2, p. 1019 ×5, p. 1021 ×1, p. 1022 ×5); the English has 18. (r) printed 27 times (pp. 1015–1019); the English has 27. "നബി തിരുമേനിﷺ" p. 1015 → "the noble Prophet ﷺ". Abbreviations as printed: (A; Mu.), (Bu.), (A; Bu; Mu.), (Mu.).
- Numbers and references: Al-Baqarah : 219; Ma'idah : 93, 94; 2 : 236, 237; Surat al-Ma'idah : 7; Ma'idah 41; 2: 75, 79; 2 : 104; the four situations (1)–(4), the four matters (1)–(4), the three examples (1)–(3). Right as printed; for the Ma'idah references see TNs below.
- Arabic: every Quran quotation in the commentary is byte-exact from `data/quran-uthmani.json` (after correction 9). Quotations printed without their leading و / أَوۡ (لَٰمَسۡتُمُ ٱلنِّسَآءَ p. 1016; ٱسۡمَعۡ غَيۡرَ مُسۡمَعٖ, ٱسۡمَعۡ, ٱنظُرۡنَا, أَطَعۡنَا pp. 1022) are copied from the verse after that letter, as earlier parts do (part 08: مَا فَضَّلَ, بِمَآ أَنفَقُواْ; Ali 'Imran: مَآ أُنزِلَ). Single words given in their printed form where it is a Quran word (سَفَر, صَعِيد, غَآئِطِ, طَيِّبٗا). Hand-typed Arabic as printed: **الله اعلم** ×2 (pp. 1014, 1019 footnote) and **والله اعلم** ×2 (pp. 1015, 1016), **كما فى ابن جرير و غيره** (spaced و), **تُرَاب، تربة**, **نجس**, **ايدى**, **مَسّْ**, **لَمَسْتُمُ**, **تَيَمُّمْ** (corrections 6–8).
- **Mirrored as printed, without TN** (as earlier parts): p. 1015 no stop after "(كما فى ابن جرير و غيره)"; p. 1016 no opening quote before "മറക്കിരിക്കുന്ന സ്ഥലം …'"; p. 1018 മാഹാന്മാർ (for മഹാന്മാർ, "great men"), no opening quote before "ഭൂമിയുടെ ഉപരിതലം …'"; p. 1019 the hadith opened with ' is not closed; p. 1022 ഉപദേശിമ്പോൾ (for ഉപദേശിക്കുമ്പോൾ), comma before "ഇതിന് മൂന്നു ഉദാഹരണങ്ങളും", "എന്നു മാത്രം. പറയുകയും" (stray stop: "say only ٱسۡمَعۡ (do hear). and,"); p. 1023 "ഒന്നും, പ്രതീക്ഷിക്കേണ്ടതില്ല" (stray comma). p. 1014 and p. 1018 എനി is taken as ഇനി ("now"), as part 09. All confirmed on the images.
- Glossary: (r), ﷺ. No other glossary term occurs.

## Corrections made (before → after)

### Page marker and word order

1. p. 1013/1014: the quotation "'ലഹരി / ബാധിച്ചവരായിക്കൊണ്ട് നമസ്കാരത്തെ സമീപിക്കരുത്' എന്നാണ് അല്ലാഹു പറഞ്ഞ വാക്ക്" runs across the page turn, after "… മറ്റോ പറയാതെ,". "‘Do not approach prayer as ones affected by intoxication’ is the word that Allah said, without saying ‘Do not pray …’ or the like. *[p. 1014]* From this" → "Without saying ‘Do not pray as ones affected by intoxication’ or the like, ‘Do not approach prayer as ones *[p. 1014]* affected by intoxication’ is the word that Allah said. From this" (printed order, marker at the turn).
2. p. 1014 "മദ്യപാനം മുഖേനയല്ലാതെ - മറ്റു വല്ലതു മുഖേനയും - ലഹരി ബാധിച്ചാലും": "by means of something - other than by means of the drinking of alcohol -" → "other than by means of the drinking of alcohol - by means of some other thing -" (the dashes are around മറ്റു വല്ലതു മുഖേനയും).

### Additions not printed

3. p. 1014 "ജമാഅത്തായി നടത്തപ്പെടലായിരുന്നു": "held in congregation (jama'ah)" → "held as jama'ah" (no bracket printed; "jama'ah" unbracketed as Al-Baqarah).
4. p. 1021 "… ദുർവ്യാഖ്യാനം ചെയ്യലും അവരുടെ പതിവായിരുന്നു": "was also their custom" → "was their custom" (no -ഉം).
5. p. 1022 "… ആദരവുമാണല്ലോ": "For that is, surely, the mark" → "That is, surely, the mark" (no "for" printed; -അല്ലോ is "surely"; as part 08 correction 8).

### Arabic as printed

6. p. 1017 printed مَسّْ (fathah, shaddah with sukun; 600 dpi): **مَسَّ** → **مَسّْ**.
7. p. 1018 the variant reading, hand-typed: **لَمَسۡتُمُ** → **لَمَسْتُمُ** (plain sukun U+0652, as hand-typed Arabic in earlier parts; it is not in the Uthmani text).
8. p. 1018 **تَيَمُّمۡ** → **تَيَمُّمْ** (same reason).
9. p. 1016 **غَآئِطِ** was typed with the precomposed آ (U+0622); recopied from 4:43 (ا + ٓ) so it is byte-exact.

### Renderings aligned with earlier parts

10. p. 1014 കള്ള് ×2: "toddy" → "liquor" (Al-Baqarah 2:219 table: കള്ളിനെ (മദ്യത്തെ)പ്പറ്റി "about liquor (alcohol)"); മദ്യം stays "alcohol".
11. ഗൗനിക്കണം / ഗൗനിക്കണേ ("regard us" → "heed us", as Al-Baqarah 2:104 '"റാഇനാ' [ഞങ്ങളെ ഗൗനിക്കണം]" "[heed us]"): v. 46 panel "[do regard us]" → "[do heed us]"; table وَٱنظُرۡنَا "(you must regard us)" → "(you must heed us)"; p. 1022 "can mean ‘do regard us’" → "can mean ‘heed us’", "**ٱنظُرۡنَا** (do regard us)" → "(heed us)".
12. Table v. 44 مِّنَ ٱلۡكِتَٰبِ "(വേദ)ഗ്രന്ഥത്തിൽ നിന്ന്": "of the (revealed) Book" → "of the (scriptural) book" ((വേദ)ഗ്രന്ഥം "the (scriptural) book" in earlier tables).
13. Table v. 44 ٱلضَّلَٰلَةَ "ദുർമാർഗം, വഴികേട്, വഴിപിഴവ്": "misguidance, going wrong, straying from the way" → "misguidance, going astray, error" (Al-Baqarah: വഴികേട് "going astray", വഴിപിഴവ് "error").
14. Table v. 45 وَلِيّٗا "ബന്ധുവായി, മിത്രമായി, കാര്യകർത്താവായി": "as a relative, as a friend, as a manager of affairs" → "as a kinsman, as a friend, as One in charge of affairs" (ബന്ധു "kinsman" Al-Baqarah; കാര്യകർത്താവ് "the One in charge of the affairs" Ali 'Imran 3:122, keeping it apart from "manager(s)" for കൈകാര്യകർത്താവ് / നടത്തിപ്പുകാർ).
15. Table v. 46 وَأَقۡوَمَ "കൂടുതൽ ചൊവ്വായ (നേരെയുള്ളതും)": "more upright (and more straight)" → "more upright (and straight)" (കൂടുതൽ is outside the bracket).

### Translator's notes added

16. Three Ma'idah references, as earlier parts did for printed references that differ from the numbering of the site's Quran text (Al-Baqarah part 02 "5: 14" → 5:13; part 05; part 29 "Ma'idah : 7" → 5:6). Translated as printed, each with a TN:
    - p. 1013 "മാഇദഃ : 93, 94": the prohibition of wine is 5:90–91 (Arabic copied from them).
    - p. 1019 "സൂറത്തുൽ മാഇദഃ : 7" (washing up to the elbows in wudu'): 5:6 (same TN wording as Al-Baqarah part 29 for the same reference).
    - p. 1019 "മാഇദഃ 41" (ايدى used for the palms): 5:41 has no such word; the cutting off of the thief's hands (أَيۡدِيَهُمَا) is 5:38.
    The offsets differ (+3, +1, +3), so the book appears to follow another verse count for Al-Ma'idah; the notes only state where the words are in the site's text. Al-Baqarah part 35 rendered the same "verse 93, 94 of Suratul Ma'idah" (2:219 commentary) without a TN; the reviewer may wish to add one there too for consistency.

No dropped sentences, reversed negations, changed conditions, number errors, voice changes or added honorifics were found. The legal content of v. 43 (the four situations, the condition "not getting water" and which situations it applies to, the opinions on touching women, the substances for tayammum, one strike or two, palms or elbows) was compared step by step and is rendered as printed.

## Points the translator asked about

- Ma'idah references 93, 94; 7; 41: TNs added (correction 16).
- p. 1021 garbled glyphs: settled from the text layer and the panel (see above); no marker.
- "'ജനാബത്ത്'കാരായിക്കൊണ്ടും": the join is right (see above).
- Mirrored slips, hand-typed Arabic, quotations without و / أَوۡ: see above.

## Open doubts for the reviewer

- No inline DOUBT markers in this part; none was needed.
- Table v. 46 കേൾക്കണം / ഗൗനിക്കണം are rendered "(you must hear)" / "(you must heed us)" (obligative -ണം, with നീ "you" printed in the second), while the commentary renders the same forms "do hear" / "heed us" and the panel's -ണേ forms "[do hear]" / "[do heed us]". Left; the reviewer may prefer one English for -ണം throughout.
- v. 43 فَتَيَمَّمُواْ കരുതിക്കൊള്ളുവിൻ "resort to" (panel, table) and p. 1018 കരുതിച്ചെല്ലുക "to go resolving on": കരുതുക here is "to aim for, make for"; the reviewer may prefer "make for (the clean face of the earth)".
- Earlier open doubts still apply.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ജനാബത്ത് / ജനാബത്തുകാരൻ | janabah / junub | janabah / the person in janabah (as Al-Baqarah) |
| വലിയ അശുദ്ധി | — | the major impurity (as Al-Baqarah) |
| തയമ്മും | tayammum | tayammum (as Al-Baqarah) |
| വുദ്വൂ | wudu' | wudu' (as Al-Baqarah) |
| മദ്യം / മദ്യപാനം / കള്ള് | khamr | alcohol / the drinking of alcohol / liquor (as Al-Baqarah) |
| ലഹരി ബാധിച്ചവർ | sukara | ones affected by intoxication |
| ജമാഅത്ത് | jama'ah | jama'ah (as Al-Baqarah) |
| സ്വഈദ് / ഭൂമുഖം | sa'id | sa'id / the face of the earth |
| വിസർജ്ജന സ്ഥലം | al-gha'it | the place of excretion |
| സംയോഗം | — | intercourse |
| അന്യ സ്ത്രീകൾ | — | strange women |
| രക്ഷകർത്താവ് | wali | guardian (note: രക്ഷാധികാരി is also "guardian" in Al-Baqarah) |
| കാര്യകർത്താവ് | wali | One in charge of affairs (as Ali 'Imran) |
