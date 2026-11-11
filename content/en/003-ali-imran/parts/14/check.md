# Check: Ali 'Imran part 14 (verses 126–136)

Checked on 2026-11-11 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/03. Al-'Imran.pdf`, PDF pages 139–150 (book pp. 847–858). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer. Crops at 300 dpi: p. 851 the Arabic وَلاَتَأْكُلُواْ أَمْوَالَ اليَتامى (three crops, two of them off target); p. 853 "പറഞ്ഞപ്പോൾ,അത്" (one crop, placed from `pdftotext -bbox`; correction 5). The amanithafseer.com text was not needed for any reading.
- **Boundaries.** Part 13 ends at the top of p. 847 with "… ബാധിക്കുകയും ചെയ്യുമായിരുന്നില്ല.’ ( ابن جرير )", directly above the verse 126 panel. This part starts there (p. 847's marker is in part 13). It ends on p. 858 with "… ഞങ്ങളെ അനുഗ്രഹിക്കണമേ!", directly above the verse 137 panel. Nothing in between is missing.
- `part.json`, `verses.json` (verses 126–136), `words.json` (102 entries: 126: 12; 127: 6; 128: 9; 129: 10; 130: 9; 131: 4; 132: 5; 133: 9; 134: 10; 135: 15; 136: 13; every printed gloss is there, in order), `commentary.md`.
- Groups: *[Verses 126–127]* (panels, table and the start of the commentary p. 847; commentary p. 848) | *[Verses 128–129]* (panels, table and commentary p. 849; commentary to p. 850) | "### Section – 14" (p. 850, "വിഭാഗം - 14", directly above the v. 130 panel, after the Qasas 56 quotation) | *[Verses 130–131]* (panels, table and commentary p. 850; commentary to the top of p. 853) | *[Verses 132–133]* (panels, table and commentary p. 853; commentary p. 854, ending "… ചൂണ്ടിക്കാട്ടുന്നു:-") | *[Verses 134–136]* (panels 134 and 135 p. 854; end of 135, panel 136 and the one word table for 134–136 p. 855; commentary pp. 855–858). Right. The heading stands alone between the end of the v. 128–129 commentary and the v. 130–131 group, as in parts 08, 09 and 13.
- Every English sentence of the commentary was compared with the Malayalam on the images, in order. No sentence is missing and none is added (apart from correction 1). There are no footnotes in these pages.
- `verses.json` and every `words.json` gloss match the images in the printed order, including: v. 126 "ഇല്ലതാനും." (joined in the panel); v. 127 "മുറി(ച്ചു നശിപ്പി)ക്കുവാൻ" and no final stop after "(വേണ്ടിയാണ്)"; v. 128 "(തന്നെ)ഇല്ല" (joined on the image; the text layer's letter-spacing tokens are justification), "[എന്നിരിക്കെ, രണ്ടിനും സാദ്ധ്യതയുണ്ട്.]"; v. 130 "(മുതൽ)തിന്നരുത്" (joined); v. 132 "ചെയ്യുവിൻ- നിങ്ങൾക്ക്"; v. 133 "(കൂടിയ അത്ര)" and "പാലിക്കുന്നവ (രായ ഭയഭക്തന്മാ)ർക്കുവേണ്ടി" (a visible gap mid-line: spaced, as part 13 kept "കാര്യകർത്താവു (അഥവാ സഹായിയു)മാണ്"); v. 135 "ചെയ്യുന്നതാണ്;-", "പൊറുക്കും?!-", "നിൽക്കുകയുമില്ല." and the bracket "[ഇങ്ങനെയുള്ളവർക്കാണ് സ്വർഗം / ഒരുക്കപ്പെട്ടിരിക്കുന്നത്]" (over the page turn, no stop); v. 136 "അക്കൂട്ടർ- (അതെ)"; tables "സഹായം അല്ല / താനും" (line end, no hyphen token: spaced), "പ്രതാപശാലി / യായ" and "ഭൂമി / യിലുള്ളത്" (broken inside the word: joined), "ഇരട്ടിയാക്കപ്പെട്ട (ഇരിട്ടിയിരട്ടിയായി)" (misprint as printed), "നിങ്ങൾ തിന്നരുത് (ഉപയോഗിക്കരുത്)", "അല്ലാഹുവെ" (v. 132), "ഒരുക്ക(തയ്യാറാക്ക)പ്പെട്ടിരിക്കുന്നു", "(ബദ്ധപ്പാട് കാണിക്കുക- ഉത്സാഹം കാട്ടുകയും)", "ഒതുക്കി (മൂടി) വെക്കുന്നവരും", "വല്ല (ഒരു) നീചകൃത്യം", "അവർ ശഠിച്ചു ( വേറിടാതെ) നിൽക്കുകയുമില്ല" (the space after "(" is visible on the image), "അരുവികൾ, നദികൾ". All 102 `ar` are found in their verses (`npm run check`).
- `[p. N]` markers 848–858; none for p. 847 (in part 13). [p. 849] and [p. 855] stand at the start of the commentary below the tables, as in parts 07–13. Page turns: "It is not by number or by strength *[p. 848]* that victory comes to you" (… അല്ല / നിങ്ങൾക്ക്), "a disbeliever and *[p. 850]* a misguided one" (അവിശ്വാസിയും / ദുർമാർഗിയും), "the arrangement of *[p. 851]* subjects" (വിഷയ / ങ്ങളുടെ), "one may *[p. 852]* kill one's own children" (കൊല്ലാ / മെന്നോ), "in Al-Baqarah *[p. 853]* 24" (അൽബക്വറഃ / 24 ലും), "need not be made an authority- *[p. 854]* have forgotten" (വാദിക്കുന്ന / കക്ഷിക്കാർ; English word order), "on the *[p. 856]* contrary" (നേരെമ / റിച്ച്), "while *[p. 857]* standing" (നിറു / ത്തത്തിൽ), "In another Hadith *[p. 858]* the Prophet ﷺ says" (ഹദീഥിൽ / നബിﷺ). Right.
- Honorifics, counted page by page: ﷺ printed 17 times (p. 849: 3; p. 850: 1; p. 851: 1; p. 852: 1; p. 853: 1; p. 854: 1; p. 856: 5; p. 857: 3; p. 858: 1; none on pp. 847, 848, 855); the English has 17, the same on every page. (r) printed 4 times (p. 848: Imam Razi twice; p. 856: Ahmad, Abu Dharr); the English has 4. (a): none. The bare തിരുമേനി (p. 856, p. 857) carries no ﷺ and is "the noble one" (as parts 08, 10, 12, 13); "ഈ നബി വചനപ്രകാരം" (p. 856) has no ﷺ and is "this saying of the Prophet".
- References and keys as printed: "( … – محمد : ٤ )", "– القصص : ٥٦", "(in 4: 80)", "Su: Anfal", "Sura: Hadid 21" / "Suratul Hadid 21", "the 126th / 133rd verse"; hadith keys "(A; Bu; Mu.)", "(Bu.)", "(A; Da.)", "(A.)", "(Da.)", "(Mu.)", "(A; D.)" (open doubt 2), "(Da; Ti.)", "(Bu; Mu.)", as in earlier parts.

## Corrections made (before → after)

### Words not in the print

1. p. 848, "മലക്കുകൾ ഇറങ്ങുന്നതിനെയും,യുദ്ധം ചെയ്യുന്നതിനെയും … നിഷേധിച്ച": the English put an added "(their)" in round brackets, which the site shows as the author's own addition; the print has no bracket. "flatly denied the coming down of angels, and (their) fighting" → "flatly denied angels' coming down, and fighting".

### Renderings not as settled in earlier parts

2. p. 849, "ഇന്നിന്നവർ സൻമാർഗികളാണെന്നും": സന്മാർഗികൾ is "the rightly guided" in Al-Baqarah part 24 (its new-terms table); "the right path" is നേർവഴി. "such and such people are ones on the right path" → "such and such people are rightly guided ones".
3. p. 850, Qasas 56, "(നീ ഇഷ്ടപ്പെട്ടവരെ നീ സൻമാർഗത്തിലാക്കുകയില്ല; എങ്കിലും അല്ലാഹു … സൻമാർഗത്തിലാക്കുന്നു.)": സൻമാർഗത്തിലാക്കുക is "put on right guidance" in Al-Baqarah parts 46, 47 and Ali 'Imran part 01 (v. 8). "You will not put on the right path those whom you have loved; but Allah puts on the right path those whom He wills." → "You will not put on right guidance those whom you have loved; but Allah puts on right guidance those whom He wills."
4. നിരാശർ (v. 127 "നിരാശരായി (പരാജയപ്പെട്ട്)", its table "നിരാശരായി, അപമാനമടഞ്ഞവരായി", p. 848 "പരാജിതരും നിരാശരുമായിത്തീരുകയും"): Al-Baqarah part 45 (correction 4) settled നിരാശനായി as "despairing", and this part's own p. 857 "നിരാശപ്പെടരുത്" is "must not despair". "disappointed (being defeated)" → "despairing (being defeated)"; table "disappointed, as ones who have met with disgrace" → "despairing, as ones who have met with disgrace"; "defeated and disappointed ones" → "defeated and despairing ones".
5. തെറ്റുകുറ്റം / തെറ്റുകുറ്റങ്ങൾ (p. 856 once, p. 857 twice): "faults and offences" in Al-Baqarah parts 10 and 20 and Ali 'Imran part 03. p. 856 "the blunders and the errors and offences" → "the blunders and the faults and offences"; p. 857 "Errors and offences coming about" → "Faults and offences coming about"; "forgive the errors and offences that come from His servants" → "forgive the faults and offences that come from His servants".
6. p. 857, hadith (4), "അല്ലാഹു അവന്റെ ഉള്ളിൽ അഭയവും വിശ്വാസവും വർദ്ധിപ്പിക്കുന്നതാണ്": അഭയം (amn) is "shelter" in the Al-Baqarah new-terms tables (അഭയം / നിർഭയം / സമാധാനം "shelter / security / peace"), which keep it apart from സങ്കേതം "resort". "Allah will increase refuge and faith within him" → "Allah will increase shelter and faith within him".
7. p. 851, "നികൃഷ്ടമോ, നീചമോ ആയ ഒരു കാര്യത്തെക്കുറിച്ച്": നീച- is "vile" in this part (നീചകൃത്യം "vile deed", v. 135, its table and p. 857) and in Al-Baqarah parts 26 and 46 (നീചവൃത്തി "vile conduct"). The two adjectives were swapped so that നീചം stays "vile". "a vile or base matter" → "a base or vile matter".

### Punctuation not as printed

8. p. 853, "സ്വർഗത്തെക്കുറിച്ചും പറഞ്ഞപ്പോൾ,അത് ഒരുക്കിവെക്കപ്പെട്ടിരിക്കുന്നു": the text layer has ",-" in one glyph run, but the 300 dpi crop shows a comma only, with no dash. "in Sura: Hadid 21,- that it has been made ready" → "in Sura: Hadid 21, that it has been made ready".

### Doubts added or widened

9. p. 857, hadith (6), "(അ; ദ.)": clearly printed ദ, while hadiths (3) and (4) above have ദാ. Al-Baqarah part 36 put a DOUBT on the same "(ദ.)" (not in the book's key: ബു, മു, അ, ദാ, തി, ജ, ഹാ, ന, ബ, ത്വ). The same DOUBT is added here after "(A; D.)"; the key is kept as printed.
10. p. 848, DOUBT on "രക്ഷാനടപടി": the print says "അവരിൽ നിന്ന് … രക്ഷാനടപടി എടുക്കുമായിരുന്നു", literally "take protective action from them"; the DOUBT now records this and that "against them" fits both readings. Its first part is kept as the translator wrote it.

No dropped തന്നെ/-ഉം or list items, may/will errors, tense or voice changes, reversed or "fixed" negations, changed reported speech, added ﷺ, silently corrected names or misprints, or added or re-vowelled Arabic were found apart from the above.

## The translator's open items

- **(1) DOUBTs.** (a) p. 848 "രക്ഷാനടപടി": clearly printed, the letters രക്ഷാ beyond doubt on the image. The image does not settle whether it is a slip for ശിക്ഷാനടപടി ("punitive action", Ali 'Imran parts 01 and 02, Al-Baqarah parts 32 and 34); DOUBT kept, widened (correction 10). (b) p. 851 "وَلاَتَأْكُلُواْ أَمْوَالَ اليَتامى": the 300 dpi crop agrees with the translator's transcription as far as the small marks can be read (sukun on م and fatha on ل of أَمْوَالَ are clear; the marks of وَلاَتَأْكُلُواْ are taken with the text layer, which has the same); the print gives no reference. It is not a Quran verse in this form, so it stays as printed (not replaced with Uthmani text), with the DOUBT; `npm run check` lists it among the non-Quran quotations. (c) p. 852 "തട്ടിമൂളിക്കാറുണ്ട്": clearly printed; the same idiom as part 05's തട്ടിമൂളിക്കൽ, whose DOUBT ("murmuring off") is not yet reviewed; DOUBT kept as worded.
- **(2) TNs.** None used, and none needed under the practice of parts 08–13 (part 11 item 2: TNs only for evident slips such as a misspelt name, a wrong reference or a repeated word). "ഇരിട്ടിയിരട്ടിയായി" and "സത്യവിശ്യാസികൾ" are misspelt common words, translated by their meaning (part 11: കുണ്ടിന്റ). The one reference slip, "(അ; ദ.)", gets a DOUBT rather than a TN, as Al-Baqarah part 36 handled the same key (correction 9).
- **(3) Slips kept without TN.** All confirmed on the images: v. 127 no final stop; v. 135 "…ഒരുക്കപ്പെട്ടിരിക്കുന്നത്]" with no stop; v. 130 table "ഇരിട്ടിയിരട്ടിയായി"; p. 848 "പങ്കെടുത്ത് എന്ന്" (for പങ്കെടുത്തു), "കൊല്ലപ്പെട്ടുള്ളൂ.?’", no stop after "…പാടില്ലായിരുന്നു’", and "ഇറങ്ങുന്നതിനെയും,യുദ്ധം" (no space); p. 851 the quote ‘പലിശ തിന്നരുത് ( … never closed, "എന്നുമൊക്ക" (for എന്നുമൊക്കെ), the comma before "അന്യന്റെ ധനം …" (the English mirrors the run-on: "… too, taking and using another's wealth without right is wrong."), and the bracket printed ")" before "ആ കുട്ടി …" (given as "("); p. 852 no opening quote before "ബുദ്ധി ജീവികൾ", the stop before "എന്ന് മാത്രമേ" (two English sentences, "… not possible to agree with this. Only that much is said …"), "സത്യവിശ്യാസികൾ"; p. 853 ",അത്" with no space (and no dash: correction 8); p. 856 no stop before "(അ.)"; p. 857 "(അ; ദ.)" (correction 9) and the stray ’ after "…മാത്രമല്ല."; p. 858 the dash after "തന്നെ-" never closed. None changes the meaning; kept.
- **(4) Malayalam spacing.** v. 128 "(തന്നെ)ഇല്ല" joined, v. 133 "പാലിക്കുന്നവ (രായ" spaced and v. 135 table "ശഠിച്ചു ( വേറിടാതെ)" with the inner space: each as seen on the image. v. 126 table "സഹായം അല്ല താനും": "അല്ല" ends the line and the text layer has no hyphen token there, so spaced, as parts 10–13 wrote such line ends (part 13 open doubt 7). Right.
- **(5) Arabic, quotations, word table, honorifics, heading.** Each Quran quotation has exactly the words printed and is found unchanged in its verse in `data/quran-uthmani.json`: ذَٰلِكَۖ وَلَوۡ يَشَآءُ ٱللَّهُ لَٱنتَصَرَ مِنۡهُمۡ وَلَٰكِن لِّيَبۡلُوَاْ بَعۡضَكُم بِبَعۡضٖ (47:4; the print starts with ذَٰلِكَ too); إِنَّكَ لَا تَهۡدِي … مَن يَشَآءُ (28:56, without وَهُوَ أَعۡلَمُ بِٱلۡمُهۡتَدِينَ, as printed); لَا تَأۡكُلُواْ ٱلرِّبَوٰٓاْ أَضۡعَٰفٗا مُّضَٰعَفَةٗ, لَا تَأۡكُلُواْ ٱلرِّبَوٰٓاْ and أَضۡعَٰفٗا مُّضَٰعَفَةٗ three times (3:130); أُعِدَّتۡ لِلۡكَٰفِرِينَ (3:131) and أُعِدَّتۡ (p. 853); مَّن يُطِعِ ٱلرَّسُولَ فَقَدۡ أَطَاعَ ٱللَّهَ (4:80); وَٱللَّهُ يُحِبُّ ٱلۡمُحۡسِنِينَ (3:134); وَلَمۡ يُصِرُّواْ عَلَىٰ مَا فَعَلُواْ (3:135, with the printed dots after it) and وَمَن يَغۡفِرُ ٱلذُّنُوبَ إِلَّا ٱللَّهُ (3:135). Non-Quran Arabic against the image: إن شاء الله (p. 848), خشية ان يطعم معك and ان تزنى حليلة جارك (p. 851, unvowelled), لاَ تغضب (p. 856), وَلاَتَأْكُلُواْ أَمْوَالَ اليَتامى (item 1b). words.json 102 entries, each `ar` in its verse. Honorifics ﷺ 17, (r) 4, bare തിരുമേനി 2: see above. Heading: see above.
- **(6) New renderings.** Corrections 2–7. Kept: പലിശ "interest" (as Al-Baqarah part 48), മിതപ്പലിശ / ഇരട്ടിപ്പലിശ "moderate interest / double interest", പലിശക്കാർ "interest-dealers" and പലിശക്കച്ചവടക്കാർ "traders in interest" (two Malayalam words, two renderings); മൂലധനം / അസ്സൽ മുതൽ "capital / principal property" (as Al-Baqarah part 49); ദുർമാർഗികൾ "misguided ones" (ദുർമാർഗം "misguidance", as earlier parts); നീചകൃത്യം "vile deed"; കുറ്റം "offence" (as Al-Baqarah part 28), കുറ്റകൃത്യങ്ങൾ "crimes", പാപകൃത്യങ്ങൾ "sinful deeds"; ദാനധർമങ്ങൾ "almsgiving" and ധർമം "charity" (as the Al-Baqarah sadaqah tables); ഊക്കൻ "the mighty one" with the author's "(ശക്തനാ)" "(strong)"; പ്രമാണം "authority"; കക്ഷിക്കാർ "partisans"; ബുദ്ധി ജീവികൾ / ഉൽബുദ്ധർ "intellectuals / enlightened ones" (as part 09), പുരോഗമനേച്ഛുക്കൾ "progressives" (as the Al-Baqarah table); ഭൗതിക താൽപര്യക്കാർ "people of material interest" (ഭൗതിക "material", as Al-Baqarah); അപമാനപ്പെടുത്തുക / അപമാനമടഞ്ഞവർ "disgrace / ones who have met with disgrace" (അപമാനം "disgrace", as Al-Baqarah); കാരുണ്യവാൻ "the Merciful" (as Al-Baqarah part 25) with കരുണാനിധി "the Ever-Merciful" (glossary); വീര്യം (പ്രതാപം) "vigour (majesty)" (പ്രതാപശാലി "the Majestic", as earlier parts); ഉൻമേഷം "zest" (open doubt 5); വീറ് "zeal" and the table's ഉത്സാഹം "zeal" (open doubt 5); പക "grudge" with ശത്രുത "enmity"; സ്വർഗാവകാശികൾ / സ്വർഗത്തിന് അവകാശികൾ "heirs of Paradise" (അവകാശി "heir", as Al-Baqarah); സാരം "The gist:" (as Al-Baqarah); പാകപ്പിഴവുകൾ "blunders" (as part 13's പാകപ്പിഴകൾ); പുണ്യം / പുണ്യകർമം "merit / meritorious deed" (as part 09 and Al-Baqarah); നന്ദികേട് "ingratitude", ധിക്കാരം "defiance" (as earlier parts); അരുളിച്ചെയ്തു "graciously said" (as earlier parts).

## Checked and left as they are

- v. 133 "ആകാശങ്ങളും ഭൂമിയും (കൂടിയ അത്ര) ആകുന്നു" → "is (as much as) the heavens and the earth (together)": the author's one bracket is split in two around the nouns for English word order; nothing is added. Left (as part 13 left a bracket moved for English order).
- p. 857 "സ്വന്തം ദേഹത്തോട് തന്നെയുള്ള അക്രമമോ" → "wrong against one's own self indeed": ദേഹം is literally "body", but here it stands for the verse's أَنفُسَهُمۡ (rendered "their own selves" in v. 135). Left; the reviewer may prefer "one's own body".
- p. 854 "ഏതാണ്ട് ഈ (133-ാം) വചനം പോലെയുള്ള ഒരു വചനം" → "A verse rather like this (133rd) verse": ഏതാണ്ട് "almost, about". Left.
- p. 856 ദാനധർമങ്ങൾ (plural) → "almsgiving" (twice): Al-Baqarah verse tables have the plural "almsgivings"; the running commentary reads better with the mass noun. Left.
- `part.json` verses "126-136", pages "847-858", PDF pages "139-150": correct.

## Open doubts for the reviewer

1. **p. 848, "രക്ഷാനടപടി"** in the author's rendering of Muhammad 4: DOUBT kept and widened (correction 10): "protective action" as printed, or a slip for ശിക്ഷാനടപടി "punitive action".
2. **p. 857, "(അ; ദ.)"**: DOUBT added (correction 9), as Al-Baqarah part 36: a slip for ദാ. (Abu Dawud) or another source.
3. **p. 851, "وَلاَتَأْكُلُواْ أَمْوَالَ اليَتامى"**: not a Quran verse in this form and printed with no reference; kept as printed with its DOUBT (the nearest are An-Nisa' 2 and 10). The reviewer may decide whether the author meant a free summary.
4. **p. 852, "തട്ടിമൂളിക്കാറുണ്ട്"**: DOUBT kept ("are wont to murmur off", following part 05's unreviewed DOUBT).
5. **ഉൻമേഷം "zest", വീറ് "zeal", ഉത്സാഹം "zeal", വീര്യം "vigour"**: Al-Baqarah p. 527 rendered ഉൻമേഷം "vigour", but this part needs "vigour" for വീര്യം (hadith (5), "വീര്യം (പ്രതാപം)"), so ഉൻമേഷം is "zest" here; വീറ് (p. 854) and the table's ഉത്സാഹം (v. 133) are both "zeal". The reviewer may want one rendering for each word.
6. **നിരാശർ "despairing"** (correction 4): خَآئِبِينَ is often "disappointed, frustrated"; the Malayalam word is rendered as in Al-Baqarah part 45 and p. 857 here.
7. **Line-end spacing** (item 4) and the no-dash reading of ",അത്" (correction 8) rest partly on the PDF's text layer (hyphen tokens, glyph runs), as part 13 open doubt 7.
8. **Printing slips** (item 3) are mirrored without TN.
9. **Quran quotations in the commentary** copied from the Uthmani text (TRANSLATING.md rule 4), as parts 02–13.
10. **Earlier open doubts still apply** (not in this part): see parts 01–13 and the Al-Baqarah parts.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| പലിശ / മിതപ്പലിശ / ഇരട്ടിപ്പലിശ | riba | interest (as Al-Baqarah part 48) / moderate interest / double interest |
| പലിശക്കാർ / പലിശക്കച്ചവടക്കാർ | — | interest-dealers / traders in interest |
| മൂലധനം / അസ്സൽ മുതൽ | — | capital / principal property (as Al-Baqarah part 49) |
| ഇരട്ടിയിരട്ടികളായി / ഇരട്ടികളായി / ഇരട്ടിയാക്കപ്പെട്ട | ad'afan muda'afah | in doubles and redoubles / as doubles / that have been doubled |
| സൻമാർഗികൾ / ദുർമാർഗികൾ | — | rightly guided ones (as Al-Baqarah part 24) / misguided ones |
| സൻമാർഗത്തിലാക്കുക | hada | put on right guidance (as Al-Baqarah parts 46, 47; Ali 'Imran part 01) |
| നിരാശർ / നിരാശപ്പെടുക | kha'ibin | despairing (as Al-Baqarah part 45) / despair |
| നീചകൃത്യം / നികൃഷ്ടം, നീചം | fahishah | vile deed / base, vile |
| തെറ്റുകുറ്റം(ങ്ങൾ) / കുറ്റം / കുറ്റകൃത്യങ്ങൾ / പാപകൃത്യങ്ങൾ | — | faults and offences (as Al-Baqarah parts 10, 20; Ali 'Imran part 03) / offence / crimes / sinful deeds |
| ദാനധർമങ്ങൾ / ധർമം | sadaqah | almsgiving / charity (as Al-Baqarah) |
| ഊക്കൻ (ശക്തൻ) | al-shadid | the mighty one (strong) |
| പ്രമാണം | — | authority |
| കക്ഷിക്കാർ | — | partisans |
| ബുദ്ധി ജീവികൾ / ഉൽബുദ്ധർ / പുരോഗമനേച്ഛുക്കൾ | — | intellectuals / enlightened ones (as part 09) / progressives (as Al-Baqarah) |
| ഭൗതിക താൽപര്യക്കാർ | — | people of material interest |
| അഭയം | amn | shelter (as Al-Baqarah) |
| വീര്യം (പ്രതാപം) | 'izz | vigour (majesty) |
| ഉൻമേഷം / വീറ് / ഉത്സാഹം | — | zest / zeal / zeal (open doubt 5) |
| പക / ശത്രുത | — | grudge / enmity |
| സ്വർഗാവകാശികൾ | — | heirs of Paradise |
| കാരുണ്യവാൻ | — | the Merciful (as Al-Baqarah part 25) |
| രക്ഷാനടപടി | intasara | protective action (open doubt 1) |
| തട്ടിമൂളിക്കുക | — | murmur off (DOUBT, as part 05) |
