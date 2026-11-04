# Check: Ali 'Imran part 08 (verses 69–80)

Checked on 2026-11-04 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/03. Al-'Imran.pdf`, PDF pages 78–89 (book pp. 786–797). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer. 300 dpi crops: p. 791, the words "ചെയ്തുകൂടാ എന്നൊക്കെ" (two crops, the first one line too high; correction 2); p. 795, the Arabic word list (item 4 below). The amanithafseer.com text was used only to see how it spaces words that fall at a line end (item 3 below) and to see that it also has ഉടമയായ (item 1c).
- **Boundaries.** Part 07 ends on p. 786 with "… അദ്ദേഹവുമായി നിങ്ങൾക്ക് ബന്ധമില്ലാതായിരിക്കുന്നു എന്ന് താൽപര്യം."; directly below is the verse 69 panel. This part starts there (p. 786's [p. N] marker is in part 07). It ends on p. 797 with "… 64-ാം വചനത്തിൽ നിന്ന് വ്യക്തമായിക്കഴിഞ്ഞിട്ടുള്ളതാണ്."; directly below is "വിഭാഗം - 9" and the verse 81 panel. Nothing is missing. "വിഭാഗം - 8" is printed on p. 787 after the commentary on verses 69–71, followed by its one-line introduction ("നബിﷺയോടും, … ഒരു കുതന്ത്രം അല്ലാഹു തുറന്ന് കാട്ടുന്നു:-") and then the verse 72 panel; "### Section – 8" and the introduction stand there, before *[Verses 72–74]*. Right.
- `part.json`, `verses.json` (verses 69–80), `words.json` (152 entries: 69: 7; 70: 5; 71: 8; 72: 11; 73: 21; 74: 6; 75: 24; 76: 7; 77: 16; 78: 18; 79: 20; 80: 9), `commentary.md`.
- Groups: *[Verses 69–71]* (panels and v. 69 table p. 786; rest of table and commentary p. 787) | Section 8 heading and introduction (p. 787) | *[Verses 72–74]* (panels pp. 787–788; table and commentary p. 788; commentary to p. 790) | *[Verses 75–76]* (panels and first part of table p. 790; rest of table and commentary p. 791; commentary ends at the top of p. 792) | *[Verse 77]* (panel, table and commentary p. 792; hadiths p. 793) | *[Verse 78]* (panel and table p. 793; last table entry and commentary p. 794) | *[Verses 79–80]* (panel 79 p. 794, end of panel 79, panel 80 and the one table p. 795; commentary pp. 795–797, footnote p. 796). Right.
- Every English sentence of the commentary was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The one footnote (p. 796, marked (*)) is present in full, after the paragraph that ends with (*).
- `verses.json` and every `words.json` gloss match the images in the printed order, including: v. 70 "‘ആയത്ത്’ [ലക്ഷ്യം]കളിൽ"; v. 71 "വേദക്കാരെ" (short e, unlike v. 70 "വേദക്കാരേ"); v. 72 "(അങ്ങ്)"; v. 73 the opening ‘ before "നിങ്ങളുടെ മതത്തെ" closed after "ചെയ്യരുത്", and "കൈവശമത്രെ (ഉള്ളത്.)"; v. 74 the closing ’ after "അനുഗ്രഹമുള്ളവനത്രെ."; v. 75 "‘ക്വിൻത്വാറി’നെ" but "‘ദീനാറിനെ’", and the ‘ before "(വേദക്കാരല്ലാത്ത)" never closed; v. 77 "[പ്രതിജ്ഞക്കും]" and "സംസ്കരി(ച്ചു നന്നാ)ക്കുകയുമില്ല"; v. 79 "അല്ലാഹുവിനല്ലാതെ- എനിക്ക്- അടിയാൻമാരായിരിക്കുവിൻ" and "ആയിത്തീരുവീൻ"; tables "മോഹിക്കയാണ്", "തങ്ങളെത്തന്നെ (സ്വന്തങ്ങളെ)യല്ലാതെ", "അവർ നിങ്ങളെ വഴിപിഴപ്പിച്ചിരുന്നെങ്കിൽ (എന്ന്)", "പകലിന്റെ മുഖത്ത് (മുമ്പിൽ- ആരംഭത്തിൽ)", "ഒരു ദീനാറിനെ (പൊൻപണത്തെ)പ്പറ്റി", "അവർ അറിഞ്ഞുകൊണ്ട്" (v. 75, no stop), "തുച്ഛ വില", "അവരെ സംസ്ക്കരിക്കയുമില്ല", "അവർക്കുണ്ടുതാനും", "നിങ്ങളതിനെ ഗണിക്കു(വിചാരിക്കു)വാൻ വേണ്ടി", "അവർ അറിഞ്ഞുകൊണ്ട്." (v. 78, with stop), "വിജ്ഞാനവും, വിധിയും (അധികാരവും)", "അദ്ദേഹം നിങ്ങളോട് കൽപിക്കുകയും (ഉണ്ടാകുക) ഇല്ല". All 152 `ar` are found in their verses (`npm run check`).
- `[p. N]` markers 787–797; none for p. 786 (in part 07). [p. 787], [p. 788], [p. 791], [p. 794] and [p. 795] stand at the start of the commentary below the panels and tables, as in part 07. Page turns: "outcasts from Islam *[p. 789]*" (ചെയ്യു / ക), "those who are like these *[p. 790]*" (ഇവരെപ്പോലെ / യുള്ളവർക്കും), "(the matter *[p. 792]* of trustworthiness)" (വിശ്വസ്തതയുടെ / കാര്യം), "it has come *[p. 793]* in the hadiths" (കാര്യ / ങ്ങളെക്കുറിച്ചും … വന്നിട്ടുണ്ട്), "the scripture and *[p. 796]* studying" (പഠി / ക്കുകയും), "such as the scholars *[p. 797]*" (പണ്ഡി / തൻമാർ). English word order cannot put the marker exactly at the split in the p. 792 and p. 793 cases; the places chosen are as near as English allows. All right.
- Honorifics, counted page by page: ﷺ printed 10 times (p. 787: 2; p. 789: 3; p. 791: 1; p. 792: 1; p. 793: 3; none on pp. 786, 788, 790, 794–797); the English has the same on every page. (r) printed 3 times (p. 791 Ibn Abi Hatim; p. 793 Abu Dharr; p. 795 Imam Raghib); the English has 3. (a) printed once (p. 796 'Isa); the English has 1. None added at the bare "തിരുമേനി" (p. 793, "The noble one").
- References as printed: the 72nd and 73rd verse, the 14th verse, (Deuteronomy 15: 3, 23: 20) for "(ആവർത്തന പുസ്തകം 15: 3, 23: 20)", Al-Baqarah : the 27th verse, Su: Al-Baqarah 79, the 64th verse.

## Corrections made (before → after)

### Quran quotations not copied exactly

1. All Quran quotations in `commentary.md` had been saved in Unicode-normalised form (the fatha written before the shadda, e.g. in إِنَّ, ٱللَّهِ, رَبِّكُمۡ, أُمِّيِّـۧنَ, تُعَلِّمُونَ), so they were not character-for-character the text of `data/quran-uthmani.json` (TRANSLATING.md rule 4; parts 03–07 keep the order of the verified text). The words were right; each quotation (3:73 two pieces with the printed dots, قُلۡ إِنَّ ٱلۡهُدَىٰ هُدَى ٱللَّهِ, قِنطَارٖ, أُمِّيِّـۧنَ, لَيۡسَ عَلَيۡنَا فِي ٱلۡأُمِّيِّـۧنَ سَبِيلٞ, عَهۡدِ ٱللَّهِ, بِمَا كُنتُمۡ تُعَلِّمُونَ) was recopied from the verse, so each is now found unchanged in it. The rendered text looks the same.

### A mark added that is not printed

2. p. 791, "… പലിശ വാങ്ങുകയോ ചെയ്തുകൂടാ എന്നൊക്കെ യഹൂദികൾ …": the text layer has a dash after ചെയ്തുകൂടാ, but the print has none (300 dpi crop; amanithafseer.com has none either). "or take interest- such things the Jews" → "or take interest, such things the Jews" (the comma as in "… a duty for us, such things." on the same page).

### Meaning

3. p. 796, "ഈസാ നബി (അ)യുടെ അനുയായികളെന്ന് വാദിക്കുന്ന ക്രിസ്ത്യാനികൾ അദ്ദേഹത്തെ റബ്ബായി ഗണിക്കുകയും ആരാധിച്ചുവരുകയും ചെയ്യുന്നതിനെ പ്രത്യേകിച്ചും, … എല്ലാവരേയും പൊതുവായും ആക്ഷേപിച്ചുകൊണ്ടുള്ളതാണ് ഈ വചനങ്ങൾ.": what is reproached "specially" is the Christians' *deeming him Rabb and worshipping him* (ചെയ്യുന്നതിനെ), and "generally" all those people (എല്ലാവരേയും). "reproaching specially the Christians, who claim to be the followers of the Prophet 'Isa (a), deeming him Rabb and keeping on worshipping him, and generally all those who" → "reproaching specially the fact that the Christians, who claim to be the followers of the Prophet 'Isa (a), deem him Rabb and keep on worshipping him, and generally all those who".

### Earlier renderings not followed

4. p. 787, തോന്നിയവാസങ്ങൾ: Al-Baqarah parts 32–50 render തോന്നിയവാസം "licentiousness", and part 35 (its correction 6) changed "wayward acts" to "licentious acts" for this same plural. "such wayward acts" → "such licentious acts". (Al-Baqarah parts 04, 10, 15 had "the wayward / acting waywardly" for തോന്നിയവാസികൾ / fisq; the later rendering is followed here.)
5. pp. 792 and 794, കാര്യലാഭം: Al-Baqarah part 26 has "practical gain". "worldly material gains" → "worldly practical gains" (ഐഹികമായ കാര്യലാഭങ്ങൾ); "a trifling material gain" → "a trifling practical gain" (തുച്ഛമായ കാര്യലാഭത്തിന്).
6. p. 793, the source keys "(അ; മു.)" and "(അ; ബു: മു)": the Al-Baqarah parts write അ as "A" about twenty times ("(A; Mu.)" in parts 26 and 36, "(A; Ti; Na.)", "(A; Da; Ja)" and so on; only Al-Baqarah part 08 once has "Ah."). "(Ah; Mu.)" → "(A; Mu.)"; "(Ah; Bu: Mu)" → "(A; Bu: Mu)". The rest is kept as printed (semicolon, colon, the stop only in the first).

### Line-end spacing (translator's item 3)

7. v. 78 panel, "… നാവുകളെ അവർ വളച്ചു | തിരിക്കും": the break at the line end hides the space. The table prints "വളച്ച് തിരിക്കും" spaced mid-line, and amanithafseer.com has "വളച്ചു തിരിക്കും"; part 07 followed amanithafseer.com in such places. "വളച്ചുതിരിക്കും" → "വളച്ചു തിരിക്കും" (`verses.json`).

### A doubt settled (translator's item 1c)

8. p. 795, "ഉടമയായ ‘അടിമ’ എന്ന അർത്ഥത്തിലും ആരാധകനായ ‘അടിയാൻ’ എന്ന അർത്ഥത്തിലും": ഉടമ means "property, possession" as well as "owner" (Gundert: ഉടമ "property, possession"), so ഉടമയായ ‘അടിമ’ is "the slave who is (someone's) property", in parallel with ആരാധകനായ ‘അടിയാൻ’ "the servant who is a worshipper"; the next sentence (عَبِيد for the first meaning, after Raghib) confirms it. amanithafseer.com has the same word, so it is not a slip of this print. "in the meaning ‘slave’ who is owned *[DOUBT: … ഉടമയായ … or a slip (e.g. for ഉടമയുള്ള …) …]*, and" → "in the meaning ‘slave’ who is property, and".

No dropped തന്നെ/-ഉം or list items, may/will errors, tense or voice changes, reversed or "fixed" negations, changed reported speech, added ﷺ, silently corrected names or misprints, or added or re-vowelled Arabic were found apart from the above.

## The translator's open items

- **(1) DOUBTs.** (a) v. 72 "(അങ്ങ്)" → "(outright)": confirmed printed (also amanithafseer.com). Neither the verse nor the commentary (p. 788, "വൈകുന്നേരമാകുമ്പോൾ ഇസ്‌ലാമിൽ നിന്ന് സ്വയം ഭ്രഷ്ടാകുകയും") settles whether the word is the colloquial intensifier ("just, outright") or "there, away"; the DOUBT is kept as worded, with both options. (b) p. 789 "ഈ കോമരങ്ങളോട്" → "these puppets": confirmed printed; കോമരം is literally the possessed oracle-dancer, and the figurative sense here (puppets, mouthpieces) is not certain; the DOUBT is kept. (c) settled: correction 8.
- **(2) Slips kept as printed without TN.** All confirmed on the images: no full stop p. 789 after "… കണക്കുകൂട്ടൽ" and after "… പരിഭാഷയിൽ സ്വീകരിച്ചതും", p. 792 after "… പ്രധാനമായും ഉദ്ദേശ്യം" (the English mirrors each run-on); v. 79 "ആയിത്തീരുവീൻ" (for ആയിത്തീരുവിൻ); p. 793 "കളളസത്യം" (hadith 2; hadith 1 has കള്ളസത്യം) and "കൊപിച്ചവനായി" (for കോപിച്ചവനായി); p. 795 "വാക്കിന്റ" (for വാക്കിന്റെ); footnote "‘റബ്ബ്’ എന്ന് പദത്തിന്" (for എന്ന പദത്തിന്); the unclosed ‘ in v. 75 and in the footnote ("‘റബ്ബൂന എന്നുപറയും", and the last quotation never closed); the table glosses "അവരെ സംസ്ക്കരിക്കയുമില്ല" (v. 77; "സംസ്ക്ക" ends a line) and "അവർ അറിഞ്ഞുകൊണ്ട്." (v. 78); p. 794 no dash before "വായിക്കുക" (the text layer adds one; the English has none). None changes the meaning; no TN needed. Kept.
- **(3) Line-end spacing.** v. 78 panel: correction 7. v. 78 table: the first "അത | ല്ലതാനും" breaks inside the word, so it is one word: "അതല്ലതാനും", right; the second "അതല്ല | താനും" falls at a line end; amanithafseer.com spaces it: "അതല്ല താനും", kept.
- **(4) Arabic, footnote, honorifics.** The p. 795 word list, letter by letter on a 300 dpi crop and the PDF's Arabic text layer: عَبْد, عِبَاد, عَبِيد, رَبَانِى (no shadda, final ى), رَبَانِيُون (no shadda, damma on the ي), رَب (no shadda), each as printed. The footnote (*) p. 796 is complete (from "ബൈബ്ളിലെ പല വാക്യങ്ങളും" to "… ഉപയോഗിക്കപ്പെട്ടു.", with the printed "...." and the comma after "ഉപയോഗിക്കപ്പെട്ടു,’") and stands after the paragraph that ends with (*). Honorifics: see above (ﷺ 10, (r) 3, (a) 1; bare തിരുമേനി p. 793 without ﷺ).
- **(5) Quran quotations and word table.** Each quotation has exactly the words printed, no more and no less: p. 789 أَن يُؤۡتَىٰٓ أَحَدٞ ………… عِندَ رَبِّكُمۡ (3:73, with the printed dots) and قُلۡ إِنَّ ٱلۡهُدَىٰ هُدَى ٱللَّهِ (3:73); p. 791 قِنطَارٖ and أُمِّيِّـۧنَ (3:75, printed without the article) and لَيۡسَ عَلَيۡنَا فِي ٱلۡأُمِّيِّـۧنَ سَبِيلٞ (3:75); p. 792 عَهۡدِ ٱللَّهِ (3:77); p. 796 بِمَا كُنتُمۡ تُعَلِّمُونَ (3:79). See correction 1 for their character order. `npm run check` now counts 59 longer quotations in the surah: 52 exact, 0 close-but-not-exact, 7 not from the Quran (none of them from this part). words.json: 152 entries, each `ar` found in its verse.
- **(6) Renderings.** നിരക്ഷരജ്ഞർ "the unlettered" (v. 75, table, p. 791 twice); ക്വിൻത്വാർ "qintar" (part 02, p. 726 "qintar") and ദീനാർ "dinar", with the author's brackets കൂമ്പാരം "heap" and പൊൻപണം "gold coin"; റബ്ബാനികൾ "Rabbanis" with മതോപദേഷ്ടാക്കൾ "religious preceptors"; വിധികർത്തൃത്വം "judgeship"; വേദവിജ്ഞാനി "one learned in the scripture"; the meanings of റബ്ബ് (വളർത്തുന്നവൻ, പരിപാലകൻ, നാഥൻ, പരിശീലനം നൽകുന്നവൻ, യജമാനൻ: "one who rears, sustainer, lord, one who gives training, master"); ശാസ്ത്രിമാർ "scribes" (as Al-Baqarah part 44); എന്റെ കർത്താവേ "O my Lord" (കർത്താവ് "the Lord" in Bible quotations, as Ali 'Imran parts 05–06 and Al-Baqarah part 31); കുതന്ത്രം "intrigue" kept apart from ഗൂഢതന്ത്രം "secret stratagem" (as part 06 keeps കുതന്ത്രം "intrigue" and തന്ത്രം "stratagem" apart); കരാർ "pact", ഉടമ്പടി "covenant", പ്രതിജ്ഞ "vow" (as Al-Baqarah parts 11 and 31); സത്യം "oath", ശപഥം "solemn oath" (as Al-Baqarah part 36); കരാറുനിശ്ചയങ്ങൾ "pact settlements"; പാമരമുസ്‌ലിംകൾ "lay Muslims"; ജാഹിലിയ്യത്ത് "the Jahiliyyah" (as Al-Baqarah); അമാനത്ത് "the amanah" with the author's (വിശ്വസ്തതയുടെ കാര്യം) "(the matter of trustworthiness)"; അബ്റാനീ / അബ്രാനി "'Abrani" with "(Hebrew)"; ആരാമ്യ (ആറാമീ) "Aramaic (Arami)". തോന്നിയവാസം and കാര്യലാഭം: corrections 4 and 5. (അ; …): correction 6. All others kept.

## Checked and left as they are

- p. 795, "**عِبَاد** ('Ibad) is the plural of the word **عَبْد** ('Abd)": the print names عَبْد first ("عَبْد (അബ്ദ്) എന്ന വാക്കിന്റ ബഹുവചനമാണ് عِبَاد (ഇബാദ്)"); English needs the subject first; nothing is lost; left.
- v. 73 "(യഥാർത്ഥ)": the image shows "( യ" at a line end in a justified line; the space is spacing, not a printed blank; `verses.json` "(യഥാർത്ഥ)" left.
- v. 69 "they do not lead astray except themselves indeed": "indeed" renders the തന്നെ of തങ്ങളെത്തന്നെ, as the table "themselves indeed (their own selves)"; left.
- p. 794 "They do not alter the letters or the words of the Quran" for "… മാറ്റിമറിക്കാറില്ല" (are not wont to alter); the habitual sense is carried by the context; left.
- `part.json` verses "69-80", pages "786-797", PDF pages "78-89": correct.

## Open doubts for the reviewer

1. **v. 72 "(അങ്ങ്)" → "(outright)"**: DOUBT kept in `verses.json` (options: the intensifier "just, outright", or "there, away").
2. **p. 789 "ഈ കോമരങ്ങളോട്" → "these puppets"**: DOUBT kept in `commentary.md` (options: puppets, mouthpieces).
3. **Printing slips** (item 2) are mirrored without TN.
4. **Line-end spacing** (item 3 and correction 7): two Malayalam forms follow amanithafseer.com where the line break hides whether a space is printed.
5. **തോന്നിയവാസം**: "licentious(ness)" (Al-Baqarah parts 32–50, and now here) and "wayward" (Al-Baqarah parts 04, 10, 15) are both in use; one choice may be wanted.
6. **Quran quotations in the commentary** copied from the Uthmani text (TRANSLATING.md rule 4), as parts 02–07 (part 02 open doubt 3).
7. **Earlier open doubts still apply** (not in this part): see parts 01–07 and the Al-Baqarah parts.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| നിരക്ഷരജ്ഞർ | ummiyyun | the unlettered |
| ക്വിൻത്വാർ (കൂമ്പാരം) / ദീനാർ (പൊൻപണം) | qintar / dinar | qintar (heap) / dinar (gold coin) |
| റബ്ബാനികൾ / മതോപദേഷ്ടാക്കൾ | rabbaniyyun | Rabbanis / religious preceptors |
| വിധികർത്തൃത്വം | hukm | judgeship |
| വേദവിജ്ഞാനി | — | one learned in the scripture |
| വളർത്തുന്നവൻ, പരിപാലകൻ, നാഥൻ, പരിശീലനം നൽകുന്നവൻ, യജമാനൻ | rabb | one who rears, sustainer, lord, one who gives training, master |
| ഗൂഢതന്ത്രം | — | secret stratagem |
| കരാറുനിശ്ചയങ്ങൾ | — | pact settlements |
| കാര്യലാഭം | — | practical gain (as Al-Baqarah part 26) |
| പാമരമുസ്‌ലിംകൾ | — | lay Muslims |
| അമാനത്ത് | amanah | the amanah |
| ഉടമയായ ‘അടിമ’ / ആരാധകനായ ‘അടിയാൻ’ | 'abid / 'ibad | ‘slave’ who is property / ‘servant’ who is a worshipper |
| അബ്റാനീ / അബ്രാനി; ആരാമ്യ (ആറാമീ) | — | 'Abrani (Hebrew); Aramaic (Arami) |
| കോമരങ്ങൾ | — | puppets (DOUBT) |
