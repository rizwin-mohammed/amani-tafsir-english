# Check: An-Nisa' part 05 (verses 13–21)

Checked on 2026-11-18 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 41–51 (book pp. 964–974). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. 300/600 dpi crops: p. 968 the word **تَوْبَةً** (tanwin fath confirmed); p. 969 **(شرك)** (printed without vowels). The text layer was used for the order of the p. 966 and p. 968 tables.
- **Boundaries.** Part 04 ends on p. 964 with "… പറയുന്നത് നോക്കുക:-". This part starts with the verse 13 panel directly below it and ends on p. 974 with "… അതാണ് സംഭവം.", directly above the verse 22 panel. Nothing between is missing. No footnotes on these pages.
- Files: `part.json`, `verses.json` (verses 13–21), `words.json` (135 entries), `commentary.md`.
- Groups: *[Verses 13–14]* (panel and table p. 964, commentary p. 965) | "### Section – 3" (വിഭാഗം - 3, p. 965) | *[Verses 15–16]* (panels p. 965, table and commentary pp. 966–967) | *[Verses 17–18]* (panels pp. 967–968, table and commentary pp. 968–969) | *[Verse 19]* (panel and table pp. 969–970, commentary pp. 970–972) | *[Verses 20–21]* (panels and table pp. 972–973, commentary pp. 973–974). Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added (apart from the merged sentence fixed in correction 6).
- `verses.json` and every `words.json` gloss match the images, including "നിത്യവാസി / കളായും കൊണ്ട്" (v. 13 panel), "(തടഞ്ഞു) / വെച്ച്കൊണ്ടിരിക്കുവിൻ" (v. 15 panel; വെച്ച്കൊണ്ടിരിക്കുവിൻ is within one line, joined as printed), "(ബാധ്യത)" in the v. 17 panel and table, "അവിശ്വാസികളായുംകൊണ്ട്" (v. 18, joined within a line), "അവരോട് അവരുടെ (സദാചാര) മര്യാദ" (v. 19 panel; text layer agrees), "ഒരുഉറപ്പു" (v. 21 panel).
- **Word-table order** (pp. 964, 966, 968, 969–970, 972): where an Arabic word is printed at the other end of the line from its gloss (e.g. p. 966 فَأَمۡسِكُوهُنَّ / فَإِن شَهِدُواْ, أَوۡ يَجۡعَلَ; p. 968 أَحَدَهُمُ / حَتَّىٰٓ إِذَا حَضَرَ; p. 970 فَإِن كَرِهۡتُمُوهُنَّ, فِيهِ), every pairing was checked by meaning and against the text layer (p. 966: الْمَوْتُ "മരണം" before حَتَّىٰ يَتَوَفَّىٰهُنَّ). All pairings and the Quran order are right.
- **Line-end joins** (no hyphen is printed, so a space cannot be seen): v. 14 table "എതിര് / പ്രവർത്തിക്കുന്നുവോ" (spaced), v. 19 table "നിങ്ങള / വരെ" (joined "നിങ്ങളവരെ") and "(എ / ന്നാൽ)" (joined), v. 16 table "അത് / കൊണ്ടുവരുന്നു" (spaced). All acceptable.
- `[p. N]` markers 965–974. No marker for p. 964 (it is in part 04). Page turns: "unnatural *[p. 967]* vile conducts" (പ്രകൃതിവിരുദ്ധ / മായ), "deliberately do *[p. 969]* wrong" (തെറ്റു / ചെയ്യുകയും), "clear *[p. 971]* evil conducts" (വ്യക്ത / മായ; the English keeps "Another opinion indeed is" at the front of the sentence, as English needs), "of him and of the *[p. 972]* children" (മക്കളു / ടെയും). All right.
- Honorifics: ﷺ printed 8 times (pp. 965, 966, 969, 971 ×2, 972, 973, 974); the English has 8. (r) printed 11 times (Ibn 'Umar p. 969; Ibn 'Abbas p. 970; Ibn Jarir, Ibn Kathir p. 971; 'A'ishah, Ibn 'Abbas, Abu Ya'la, 'Umar ×4 p. 974); the English has 11. Abbreviations (Mu; Da; Ja; Ti), (A; Ti; Ja; Ha), (Bu; Da; Na.), (Ti; Ja.), (Mu), (Mu.) as printed.
- Numbers: verses 48, 116, 3 : 135 (p. 969), 2 : 229 (p. 971), 2:228 (p. 971), Ali 'Imran 14, the 4th verse (p. 974), four hundred silver coins, the (20th) verse (p. 974). Right.
- Arabic: Quran phrases are in the Uthmani text (`npm run check`: none close-but-not-exact): ٱلۡفَٰحِشَةَ (p. 966), لَا تَعۡضُلُوهُنَّ لِتَذۡهَبُواْ الخ (p. 970; printed plain لاتعضلوهن لتذهبوا الخ, الخ kept plain, as part 04 did with فان كن نساء فوق اثنتين الخ), فَٰحِشَةٖ (p. 970, printed فَاحِشَةٍ; the verse has بِفَٰحِشَةٖ), وَعَاشِرُوهُنَّ بِٱلۡمَعۡرُوفِ (p. 971), إِمۡسَاكُۢ بِمَعۡرُوفٍ أَوۡ تَسۡرِيحُۢ بِإِحۡسَٰنٖ ×2 (p. 973, from 2:229). Other Arabic kept as printed and confirmed on the images: الله اعلم (p. 967), تَوْبَةً (p. 968), شرك (p. 969), خُلع (p. 971), قِنطَارٍ (p. 974, printed with kasr tanwin, not the verse's قِنطَارٗا).

## Corrections made (before → after)

### Renderings fixed by earlier parts

1. p. 965, "റസൂൽ ﷺ തിരുമേനി": "the Rasul ﷺ" → "the noble Rasul ﷺ" (തിരുമേനി had been dropped; earlier parts use "the noble Rasul").
2. p. 971, "നബി ﷺ തിരുമേനിയുടെ ഗാർഹിക ജീവിതത്തെപ്പറ്റി": "the Prophet ﷺ" → "the noble Prophet ﷺ".

### Meaning

3. p. 970, Ibn 'Abbas, "വേണമെങ്കിൽ വിവാഹം കഴിക്കാതെയുമിരിക്കും": "they would also remain without marrying her off" → "they would also remain without marrying" with a DOUBT ("marrying her off" is not in the Malayalam; the phrase may mean they would leave her unmarried).
4. p. 967, "മനഃപൂർവ്വം ഖേദിച്ച് മടങ്ങുകയും": "sincerely regretting" kept, with a DOUBT (മനഃപൂർവ്വം usually means "deliberately").

### Sentence structure

5. p. 970, "അതായത്, ഒരാൾക്ക് … ഉണ്ടായിത്തീർന്നാൽ, … ചെയ്യാതെ അവളെ കഷ്ടപ്പെടുത്തുക." (a fragment ending in the verbal noun -ുക): "That is, when a man comes to have hatred …, causing her hardship, without …" → "That is, if a man comes to have hatred or dislike for his wife, to cause her hardship, without either treating her well or sending her away in a good manner." The same on p. 973 ("… ആഗ്രഹം തോന്നുമ്പോൾ, … അപ്രീതികാണിക്കുകയും, പെരുമാറ്റം മോശമാക്കിത്തീർക്കുകയും ചെയ്യുക."): "showing displeasure … and making his conduct bad." → "to show displeasure … and to make his conduct bad."
6. p. 971, two sentences had been merged and the second moved to the front ("The gist of what Allah said is indeed: …; if you do so, …"). Put back as printed: "As soon as dislike and hatred arise towards wives, one must keep them forbearingly, without taking a retaliatory measure for it, or hurrying to give divorce. If you do so, it may come about that you experience by it many benefits that you could not envisage beforehand: this indeed is the gist of what Allah said."
7. v. 20, "ഒരു ഇണ [ഭാര്യ]യുടെ സ്ഥാനത്ത് (വേറെ) ഒരു ഇണ [ഭാര്യ]യെ പകരം സ്വീകരിക്കുവാൻ": "to take, in exchange, a mate [wife] (another) in the place of a mate [wife]" → "to take (another) mate [wife] in exchange in the place of a mate [wife]" (the bracket now stands before the word it qualifies).

### Translator's notes added in the word table (as parts 04 and Ali 'Imran 20–21 do for table slips)

8. v. 15 وَٱلَّـٰتِي "യതൊരു സ്ത്രീകൾ": TN, evidently for യാതൊരു.
9. v. 16 يَأۡتِيَٰنِهَا "അത് കൊണ്ടുവരുന്നു(ചെയ്യുന്ന)": TN, finite കൊണ്ടുവരുന്നു where the v. 15 table has the participle കൊണ്ടുവരുന്ന.
10. v. 17 عَلَيۡهِمۡ "അവരുടെ": TN, the panel has അവരുടെ മേൽ ("upon them").

No dropped sentences, reversed negations, number errors, voice changes or added honorifics were found.

## Points the translator asked about

- **Word-table order** pp. 966, 968, 969: right (above).
- **Joins**: acceptable (above).
- **-ഉം in നിത്യവാസികളായും കൊണ്ട് (v. 13) and അവിശ്വാസികളായുംകൊണ്ട് (v. 18)**: rendered without "also". Earlier verses render the form this way (Al-Baqarah 51 "While you were wrongdoers", 161 "died while being disbelievers"); Al-Baqarah part 14 has an open DOUBT on the same form. Left.
- **v. 17 "(ബാധ്യത)"**: printed in both panel and table; "(obligation)" kept.
- **p. 970 Arabic**: right (above).
- **Fragments ending in a bare verb** pp. 970, 973: see correction 5.
- **p. 971 reordering at the page turn**: acceptable.
- **TNs** ഗൗരപൂർവ്വം (p. 968) and വങ്ങും (p. 973): both clear on the images; kept.
- **Table slips**: TNs added (corrections 8–10).
- **വ്യഭിചാരം**: earlier parts are mixed: "fornication" (An-Nisa' part 02, Ali 'Imran parts 05–06), "adultery" (Al-Baqarah part 48, "accusation of adultery"; Ali 'Imran part 14). "fornication" is kept here; the reviewer may want one rendering for all.

## Open doubts for the reviewer

1. **DOUBT** p. 967 മനഃപൂർവ്വം: "sincerely" / "deliberately".
2. **DOUBT** p. 970 വിവാഹം കഴിക്കാതെയുമിരിക്കും: "remain without marrying" / "leave her unmarried".
3. **TN** p. 968 ഗൗരപൂർവ്വം (for ഗൗരവപൂർവ്വം); **TN** p. 973 വങ്ങും (for വാങ്ങും); **TNs** in the v. 15, 16, 17 tables.
4. വ്യഭിചാരം "fornication" vs "adultery" across parts.
5. Earlier open doubts still apply, including Al-Baqarah part 14's on -ആയുംകൊണ്ട്.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| (നിയമ) അതിർത്തികൾ | hudud | bounds (of law) |
| നിത്യവാസി(കൾ) | khalid(in) | permanent dweller(s) |
| നീചവൃത്തി / ദുർവൃത്തി | fahishah | vile conduct / evil conduct |
| വ്യഭിചാരം | zina | fornication |
| വീട്ടുതടങ്കൽ | — | house detention |
| പശ്ചാത്താപം / പശ്ചാത്തപിക്കുക | tawbah / taba | repentance / repent |
| വളരെ പശ്ചാത്താപം സ്വീകരിക്കുന്നവൻ | tawwab | the One who greatly accepts repentance |
| മുടക്കിയിടുക | 'adl | keep obstructed |
| ഖുൽഇ് | khul' | ‘khul'’ (divorce in return for a compensation) |
| സദാചാര മര്യാദ | ma'ruf | propriety of good conduct |
| കൂമ്പാരം | qintar | heap |
| കള്ളാരോപണം | buhtan | false accusation |
| ഉറപ്പ് | mithaq | pledge |
