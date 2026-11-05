# Check: Ali 'Imran part 11 (verses 102–109)

Checked on 2026-11-05 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/03. Al-'Imran.pdf`, PDF pages 108–117 (book pp. 816–825). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer (p. 825 only its top part, through "വിഭാഗം - 12"). 300 dpi crops: p. 822, the word table glosses of فَفِي رَحۡمَةِ and خَٰلِدُونَ and the Arabic مَعْرُوفِ / مُنْكَر at the head of the commentary. The amanithafseer.com text was compared for spelling only (it also has "ശ്വാശ്വതൻമാരായിരിക്കുന്നതാണ്", "അല്ലാഹു നമ്മെ അല്ലാഹു അറിയിക്കുന്നു" and "105-109").
- **Boundaries.** Part 10 ends on p. 816 with "… ഉൾപ്പെടുമെന്നുള്ളതിൽ സംശയമില്ല.(*)" and its footnote; directly below are "വിഭാഗം - 11" and the paragraph ending "… ഉപദേശ നിർദ്ദേശങ്ങളും നൽകുന്നു:-". This part starts there (p. 816's [p. N] marker is in part 10). It ends at the top of p. 825 with "… ഒരു പ്രസിദ്ധ ഹദീഥത്രെ.", directly above "വിഭാഗം - 12" and the verse 110 panel. Nothing in between is missing.
- `part.json`, `verses.json` (verses 102–109), `words.json` (86 entries: 102: 6; 103: 25; 104: 11; 105: 10; 106: 13; 107: 7; 108: 8; 109: 6; every printed gloss is there, in order), `commentary.md`.
- Groups: "### Section – 11" with its introduction (p. 816) | *[Verses 102–103]* (panels p. 817; table pp. 817–818; commentary pp. 818–820, ending "… വീണ്ടും അല്ലാഹു തുടരുന്നു:-") | *[Verses 104–109]* (panels 104–105 p. 820; table pp. 820–821; panels 106–108 p. 821 and 109 p. 822 with no commentary between; table p. 822; commentary pp. 822–825). Right.
- Every English sentence of the commentary was compared with the Malayalam on the images, in order. No sentence is missing and none is added. There are no footnotes in this part.
- `verses.json` and every `words.json` gloss match the images in the printed order, including: v. 102 "മരണമടയുകയും ചെയ്യരുത്."; v. 103 "(ഒരുമിച്ചുകൊണ്ട്)", no punctuation after "അരുത്", "കുണ്ടിന്റ" (without the final െ), "‘ആയത്തു’ [ലക്ഷ്യം]കൾ", "വിവരിച്ചു തരുന്നു-"; v. 104 the opening "(സത്യവിശ്വാസികളേ)", "നിങ്ങളിൽ നിന്നും", "വിജയികളും."; v. 105 "അരുത്:", "ശിക്ഷയുമുണ്ടായിരിക്കും;-"; v. 106 "ചിലമുഖങ്ങൾ" (no space), "അവർ,-", "അവിശ്വസിച്ചുവോ?!", the closing ’; v. 107 "ശ്വാശ്വതൻമാരായിരിക്കുന്നതാണ്."; v. 108 "[മേൽ പറഞ്ഞതൊക്കെ]", "ആയത്തു [ലക്ഷ്യം]കളാകുന്നു;" (no quotes here), no stop after "ഓതിത്തരികയാണ്", the comma in "അല്ലാഹു, ലോകരോട്"; v. 109 "അല്ലാഹുവിനുള്ളതത്രെ,"; tables "ഭിന്നിക്കുക (ഛിദ്രിക്കുക)യും അരുത്", "നിങ്ങളുടെ മേൽ (ചെയ്ത)", "ഒരു കുണ്ടിന്റെ, കുഴിയുടെ" (with െ here), "നരകമാകുന്ന തീയിനാലുള്ള", "അവന്റെ ആയത്ത് (ലക്ഷ്യം)കളെ", "സദാചാരത്തിന്, സൽകാര്യം കൊണ്ട്", "ദുരാചാരത്തെ (ദുഷ്കാര്യത്തെ)പ്പറ്റി", "അവർ (അഭിപ്രായ) വ്യത്യാസത്തിലാകുകയും ചെയ്തു", "എന്നാൽ (അതിനാൽ- എനി) നിങ്ങൾ ആസ്വദിക്കുവിൻ", "കാരുണ്യ(അനുഗ്രഹ)ത്തിലായിരിക്കും", "ശാശ്വതൻമാരായിരിക്കും" (spelt correctly in the table), "യഥാർത്ഥ (മുറ) പ്രകാരം", "ഒരനീതിയും, അക്രമത്തെ", "അല്ലാഹുവിങ്കലേക്ക് (തന്നെ)". All 86 `ar` are found in their verses (`npm run check`).
- `[p. N]` markers 818, 819, 820, 822, 823, 824, 825; none for p. 816 (in part 10). P. 817 holds only the panels of verses 102–103 and the start of their table, and p. 821 only the end of the 104–105 table and the 106–108 panels: no marker, as parts 01–10 left such pages (part 01 p. 714, part 02 pp. 725 and 729, part 07 p. 784). Confirmed. [p. 818] and [p. 822] stand at the start of the commentary below the tables, as in parts 07–10. Page turns: "Between the Muhajirs from Makkah and them, for its part, *[p. 820]* a companionship-life of a kind that has no match anywhere in world history" (എവി / ടെയും; English word order puts "anywhere in world history" after the marker); "that is called ‘munkar’ *[p. 823]*.’" (പറയു / ന്നത്); "By Him in whose *[p. 824]* hand my soul is" (എന്റെ ആത്മാവ് / യാതൊരുവന്റെ കയ്യിലാണോ); "Except *[p. 825]* one" (ഒന്നൊ / ഴിച്ച്). Right.
- Honorifics, counted page by page: ﷺ printed 4 times (p. 823: 3; p. 824: 1); the English has 4, on the same pages. (r) printed 11 times (p. 818: Ibn Mas'ud, Ibn Abi Hatim; p. 819: Ibn Jarir, Imam Razi; p. 822: Imam Raghib, Ibn Jarir; p. 823: Ibn Mas'ud, Abu Sa'id al-Khudri, Hudhaifah ibn al-Yaman; p. 824: Mu'awiyah; p. 825: Imam Ahmad); the English has 11. (a) printed once (p. 823, after ഈസാ); the English has 1. നബി വചനം / നബി വാക്യങ്ങൾ / തിരുവചനം carry no ﷺ in the print and none in the English.
- References and keys as printed: "സൂ: തഗാബുൻ, 16" "Su: Taghabun, 16"; "(അൻഫാൽ, 46)" "(Anfal, 46)"; "110-ാം വചനത്തിന്റെ" "the 110th verse"; "105-109 വചനങ്ങളിൽ" "verses 105–109"; "(മു.)" "(Mu.)"; "(ദാ ; തി.)" "(Da ; Ti.)" (with the space before the semicolon); "(ദാ; തി.)" "(Da; Ti.)"; "(അ; തി; ജ.)" "(A; Ti; Ja.)" (അ as "A", as part 08 correction 6).

## Corrections made (before → after)

### Renderings not as settled in earlier parts

1. സദാചാരം / ദുരാചാരം (ma'ruf / munkar): Al-Baqarah part 27 settled "good custom / evil custom" (its table of new terms: "ആചാരം / സദാചാരം / ദുരാചാരം | ma'ruf / munkar | custom / good custom / evil custom"), and parts 28 and 36 kept it; this part itself renders അനാചാരദുരാചാരങ്ങൾ (p. 820) "wrong customs and evil customs". "good conduct" → "good custom" and "evil conduct" → "evil custom" in v. 104 (verse and table), the p. 823 Malayalam renderings (correction 5), the p. 823 hadith ("an evil custom (a detested thing)") and the p. 824 hadith.
2. മുറപ്രകാരം / മുറക്ക് / (മുറ): Al-Baqarah part 18 ("according to the proper manner") and part 01 of this surah (യഥാർത്ഥപ്രകാരം, മുറപ്രകാരം "according to the real, according to the proper manner") settled "proper manner". "according to the due manner" → "according to the proper manner" in v. 102 (verse and table) and four times in the p. 818 commentary; table v. 108 "according to the real (due manner)" → "according to the real (proper manner)".
3. p. 818, "അല്ലാഹുവിന്റെ വിധി വിലക്കുകൾ": Al-Baqarah parts 07, 28, 35, 48 and 49 render വിധിവിലക്കുകൾ "injunctions and prohibitions" (കൽപനകൾ, two sentences earlier, is "commands"). "obeying the commands and prohibitions of Allah" → "obeying the injunctions and prohibitions of Allah".
4. p. 823, "ജിഹാദിൽ (ധർമ സമരത്തിൽ)": Al-Baqarah part 46 renders ധർമ സമരം "righteous struggle". "jihad (righteous war)" → "jihad (righteous struggle)".

### Translator's notes that do not point to a printing slip

5. p. 823, "മലയാളത്തിൽ ’സദാചാരം, ദുരാചാരം’ എന്നിങ്ങിനെയും, ‘സൽകാര്യം, ദുഷ്കാര്യം’ എന്നിങ്ങനെയും …": the English gave the Malayalam words in transliteration with two TNs explaining them; TRANSLATING.md allows a TN only to point out something in the print. Where the author names Malayalam renderings, Al-Baqarah part 05 ("the renderings 'successor, one who comes after, representative and so on may be given in Malayalam") and part 07 of this surah ("The word ‘word’ in Malayalam") translate them. "as ’sadacharam, duracharam’ *[TN: …]*, and as ‘salkaryam, dushkaryam’ *[TN: …]*, and so on" → "as ’good custom, evil custom’, and as ‘good thing, evil thing’, and so on" (the printed opening ’ kept).
6. Missing stops: parts 06–10 mirror a missing stop without a TN (part 08 "the English mirrors each run-on"; part 09 p. 803; part 10). The three TNs were removed and the run-ons kept: v. 103 "do not become divided, either *[TN: …]* remember" → "do not become divided, either remember"; v. 108 "according to the real *[TN: …]* Allah," → "according to the real Allah,"; p. 819 "counselling one another *[TN: …]* Making" → "counselling one another Making".
7. p. 824, "അല്ലാഹു നമ്മെ അല്ലാഹു അറിയിക്കുന്നു": the TN is kept (a repeated word is an evident slip; part 02, v. 19, has a TN for a repeated ആരെങ്കിലും), but there the word is translated twice, "Translated as printed", while here the English gave it once. "Allah also makes known to us *[TN: … printed twice here: …]* that" → "Allah also makes known to us, Allah *[TN: … printed twice here: …; the second appears to be a printing slip. Translated as printed.]*, that".

### Words dropped

8. v. 103, "അല്ലാഹുവിന്റെ പാശത്തെ മുറുകെ പിടിക്കുകയും ചെയ്യുവിൻ": the -ഉം was not rendered (the next two clauses render theirs as "either" and "too"; the table has "and hold fast"). "All of you (together), hold fast to the rope of Allah;" → "All of you (together), hold fast, too, to the rope of Allah;".

### Arabic and its placement

9. Quran quotations in the commentary: six of the eight (فَٱتَّقُواْ ٱللَّهَ مَا ٱسۡتَطَعۡتُمۡ, لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَا, حَبۡلِ ٱللَّهِ, وَلَا تَفَرَّقُواْ, Anfal 46 and كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ) had shadda and its vowel stored in the other order (fatha or kasra + shadda instead of the shadda + vowel of `data/quran-uthmani.json`), so they looked the same but were not the verse text character for character (as part 10 correction 10). Each was replaced by the exact substring of 64:16, 2:286, 3:103 or 8:46; all eight (with جَمِيعٗا and وَأُوْلَـٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ, already exact) are now found unchanged.
10. p. 820, "(كَذَٰلِكَ يُبَيِّنُ اللّٰهُ.....)": the dots follow الله in the Arabic (they stand at its left end in the right-to-left print). Parts 02–09 and Al-Baqarah write the dots after the bold Arabic. "( .....**كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ** )" → "( **كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ**..... )".

No may/will errors, tense or voice changes, reversed negations, changed reported speech, added ﷺ, silently corrected names or misprints, or added or re-vowelled Arabic were found apart from the above.

## The translator's open items

- **(1) DOUBT p. 823, hadith (1).** "ദാവൂദ്, സുലൈമാൻ, ഈസാ (അ) എന്നീ നബിമാരുടെ" is clearly printed (also in the text layer and on amanithafseer.com). The hadith of Ibn Mas'ud as usually quoted (Abu Dawud, Tirmidhi), like Ma'idah 78, names Dawud and 'Isa son of Maryam only. Kept as printed; DOUBT kept as worded.
- **(2) TNs.** v. 103, v. 108 and p. 819 missing stops: confirmed on the images; TNs removed, run-ons mirrored (correction 6). p. 823 the two explanatory TNs: removed, the Malayalam renderings translated (correction 5). p. 824 "അല്ലാഹു" twice: confirmed; TN kept and the word now translated twice (correction 7). The TN practice now matches parts 08–10: TNs only for evident slips such as a misspelt name, a wrong reference or a repeated word; missing stops, quote marks and brackets mirrored without TN.
- **(3) Slips kept without TN.** All confirmed on the images: v. 103 "കുണ്ടിന്റ" (the table has "കുണ്ടിന്റെ"; "of a … pit"); v. 107 "ശ്വാശ്വതൻമാരായിരിക്കുന്നതാണ്" (the table has "ശാശ്വതൻമാരായിരിക്കും"); p. 824 "അവൻ തന്നെയാണ സത്യം!" ("by Him indeed!"); p. 819 the bracket opened before "അല്ലാഹുവിനെയും" in the Anfal 46 rendering and never closed ("You (obey Allah and His Rasul."); p. 824 "ആമീൻ," followed by the next sentence ("Amin, Mu'awiyah (r) made known …"); p. 823 the opening ’ (not ‘) before "സദാചാരം"; p. 824 "105-109 വചനങ്ങളിൽ" (the group is 104–109, but v. 104 was explained on p. 823; translated as printed). Also as printed: p. 819 "അല്ലാഹു നമ്മെ രക്ഷിക്കട്ടെ ആമീൻ." has no comma ("May Allah save us, Amin." left: the comma is English punctuation only); p. 823 hadith (1) no stop after "(ഛിദ്രിപ്പിച്ചു)"; p. 823 "(ഭരണാധിപന്റെ) … പറയൽ’ (ദാ; തി.)" with no stop; p. 825 "‘ജമാഅത്ത്’. (യഥാർത്ഥ മുസ്‌ലിം സംഘം)" with the stop before the bracket. None changes the meaning; kept.
- **(4) Non-Quran Arabic and keys.** مَعْرُوفِ (fatha on م, sukun on ع, damma on ر, kasra under ف) and مُنْكَر (damma, sukun, fatha) checked on the 300 dpi crop of p. 822; the same forms on p. 823. الله اعلم (p. 824): plain alif without hamza, as printed. Keys: see above; "(A; Ti; Ja.)" as part 08 correction 6. Honorifics: see above.
- **(5) Quran quotations and word table.** Quotations: correction 9; references as the author gives them (64:16 is named "Su: Taghabun, 16"; 2:286 has no reference in the print and none is added). words.json: 86 entries, each `ar` found in its verse.
- **(6) Renderings.** See corrections 1–4 and the new terms below. Kept: "good thing / evil thing" for സൽകാര്യം / ദുഷ്കാര്യം (no earlier occurrence); "wrong customs and evil customs" for അനാചാരദുരാചാരങ്ങൾ; പാശം / കയർ "rope / cord"; സൂക്ഷിക്കുക "guard against" with (തക്വ്‌വാ) "(taqwa)"; ഭിന്നിക്കുക / ഛിദ്രിക്കുക "become divided / split apart"; ജാതി മുസ്‌ലിം "a Muslim by caste"; ഏകോദര സഹോദരങ്ങൾ "brothers of one womb"; ലക്ഷ്യദൃഷ്ടാന്തങ്ങൾ "evidences and signs"; ഉലവ് "slackening"; തന്നിഷ്ടങ്ങൾ "self-wills"; മാർഗക്കാർ- തൽപര കക്ഷികൾ "people of ways- self-interested parties"; ‘ജമാഅത്ത്’ "‘the Jama'ah’"; വാസന (വീര്യം) "scent (vigour)"; ഇബ്നുഅബീഹാതീം "Ibn Abi Hatim" (as earlier parts); ഹുദൈഫത്തുബ്നുൽ യമാൻ "Hudhaifah ibn al-Yaman"; ഇസ്റാഈൽ സന്തതികൾ "the Children of Isra'il" (as earlier parts); (രിവായത്തുകളുടെ) മാർഗങ്ങൾ "routes" (as part 10). All kept.

## Checked and left as they are

- p. 819, "‘അല്ലാഹുവിന്റെ കിതാബ് … കയറാണ്.’ എന്ന് ഇബ്നുജരീർ (റ) മുതലായവർ ഉദ്ധരിച്ച ഒരു ഹദീഥിൽ വന്നിരിക്കുന്നു." → "It has come in a Hadith that Ibn Jarir (r) and others have quoted: ‘…’": English order puts the source first; nothing is lost. Left.
- p. 818, the Ibn Mas'ud saying is printed with no punctuation between its three clauses; the English separates them with commas and a colon before "these are it". Left.
- v. 106 "Then, those people …" / v. 107 "But, those people …" (both എന്നാൽ): either fits; the table glosses എന്നാൽ (അപ്പോൾ) / അപ്പോൾ (എന്നാൽ) "then (so)" / "so (then)". Left.
- `part.json` verses "102-109", pages "816-825", PDF pages "108-117": correct.

## Open doubts for the reviewer

1. **p. 823, hadith (1), "Dawud, Sulaiman and 'Isa (a)"**: DOUBT kept (Sulaiman is clearly printed; the usual wording of the hadith and Ma'idah 78 have Dawud and 'Isa only).
2. **സദാചാരം / ദുരാചാരം → "good custom / evil custom"** (correction 1), following Al-Baqarah part 27; "good conduct / evil conduct" was the translator's choice and may read better for ma'ruf / munkar in commanding and forbidding. A glossary decision would settle it for all surahs.
3. **p. 823 Malayalam renderings translated** (correction 5): the reviewer may prefer the Malayalam words shown in transliteration, since the author is naming Malayalam words.
4. **Printing slips** (item 3) are mirrored without TN; the repeated "അല്ലാഹു" (p. 824) has a TN.
5. **Quran quotations in the commentary** copied from the Uthmani text (TRANSLATING.md rule 4), as parts 02–10.
6. **Earlier open doubts still apply** (not in this part): see parts 01–10 and the Al-Baqarah parts.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| സദാചാരം / ദുരാചാരം | ma'ruf / munkar | good custom / evil custom (as Al-Baqarah part 27) |
| സൽകാര്യം / ദുഷ്കാര്യം | ma'ruf / munkar | good thing / evil thing |
| അനാചാരദുരാചാരങ്ങൾ | — | wrong customs and evil customs |
| പാശം / കയർ | habl | rope / cord |
| മുറപ്രകാരം / മുറ | haqq | according to the proper manner / proper manner (as Al-Baqarah part 18 and part 01) |
| ഭിന്നിക്കുക / ഛിദ്രിക്കുക | tafarraqa | become divided / split apart |
| ജാതി മുസ്‌ലിം | — | a Muslim by caste |
| വിധി വിലക്കുകൾ | — | injunctions and prohibitions (as Al-Baqarah) |
| ഏകോദര സഹോദരങ്ങൾ | — | brothers of one womb |
| ജിഹാദ് (ധർമ സമരം) | jihad | jihad (righteous struggle) (as Al-Baqarah part 46) |
| ലക്ഷ്യദൃഷ്ടാന്തങ്ങൾ | — | evidences and signs |
| ഉലവ് | — | slackening |
| തന്നിഷ്ടങ്ങൾ | ahwa' | self-wills |
| മാർഗക്കാർ / തൽപര കക്ഷികൾ | — | people of ways / self-interested parties |
| ജമാഅത്ത് | jama'ah | ‘the Jama'ah’ |
| വാസന (വീര്യം) | rih | scent (vigour) |
| ഹുദൈഫത്തുബ്നുൽ യമാൻ | — | Hudhaifah ibn al-Yaman |
