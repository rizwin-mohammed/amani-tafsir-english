# Check: Ali 'Imran part 10 (verses 93–101)

Checked on 2026-11-05 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/03. Al-'Imran.pdf`, PDF pages 99–108 (book pp. 807–816). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer. 300 dpi crops: p. 813, the Arabic name اَقرع بنِ حاَبِس رض (several small crops of the one spot, plus the positions of its dark marks measured on the 300 dpi crop; correction 9). Word positions and line-end hyphen tokens from `pdftotext -bbox` were used for the line-end spacing questions (pp. 807, 809, 815; corrections 1–2 and item 4 below). The amanithafseer.com text was compared for spelling only: its spaces fall wherever the PDF has a hyphenation token (e.g. "ബഹു ദൈവവിശ്വാസി", "അക്കൂ ട്ടര്‍", "അവ തരിപ്പിക്കപ്പെടുന്നതിന്"), so it is no evidence for spacing.
- **Boundaries.** Part 09 ends at the top of p. 807 with "… എന്ന് പറയുകയുണ്ടായി (ഇബ്നു അബീഹാതിം)"; directly below is the verse 93 panel. This part starts there (p. 807's [p. N] marker is in part 09). It ends on p. 816 with "… ഉൾപ്പെടുമെന്നുള്ളതിൽ സംശയമില്ല.(*)" and its footnote; directly below are "വിഭാഗം - 11" and the paragraph ending "… ഉപദേശ നിർദ്ദേശങ്ങളും നൽകുന്നു:-", left for part 11 with the verse 102 panel (PDF p. 109). Nothing before that point is missing. No section heading falls inside this part.
- `part.json`, `verses.json` (verses 93–101), `words.json` (95 entries: 93: 15; 94: 7; 95: 8; 96: 9; 97: 16; 98: 7; 99: 13; 100: 8; 101: 12; every printed gloss is there, in order; the figure of 103 in the brief was a miscount), `commentary.md`.
- Groups: *[Verses 93–95]* (panels and v. 93 table p. 807; table pp. 807–808; commentary pp. 808–809) | *[Verses 96–97]* (panels pp. 809–810; table p. 810; commentary pp. 810–814, ending "… അല്ലാഹു നബിﷺയോട് പറയുന്നു:-") | *[Verses 98–99]* (panels, table and commentary p. 814; commentary ends on p. 815) | *[Verses 100–101]* (panels, table, commentary p. 815; commentary ends on p. 816). Right.
- Every English sentence of the commentary was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The three footnotes are present in full and placed after the paragraph that carries their marker: p. 811 (*) on ‘ബക്ക’ and (**) on 1 Kings (both after the paragraph ending "… ആക്ഷേപിക്കുവാനും ന്യായമൊന്നുമില്ല."), p. 816 (*) on the Orientalists (after the last paragraph).
- `verses.json` and every `words.json` gloss match the images in the printed order, after corrections 1 and 2, including: v. 93 "ഭക്ഷണ (പദാർത്ഥ)വും", "അനുവദനീയമായിരുന്നു;-", "കൊണ്ടുവന്ന്" (mid-line, letter-spaced, one word), no closing quote; v. 94 "എന്നാൽ, അക്കൂട്ടർ"; v. 95 "ഇബ്റാഹീമിന്റെ- (അദ്ദേഹം)", "(സ്വീകരിച്ച- നടപടി)", "പെട്ടവനായിരുന്നില്ലതാനും.’" (broken inside the word, with a hyphen token); v. 96 "ബക്കഃ [മക്കഃ]യിലുള്ളത്"; v. 97 "ദൃഷ്ടാന്തങ്ങളുണ്ട്- (വിശിഷ്യ)", "[ഇബ്റാഹീം നിന്ന സ്ഥലം.]", "‘ഹജ്ജ്’", "സാധിച്ച് കിട്ടിയവർക്ക്-", the stop in "അല്ലാഹു. ലോകരെ"; v. 98 "‘ആയത്ത്’ [ലക്ഷ്യം]കളിൽ" (the line breaks after "]"; the suffix is written joined, as part 07 "[ബഹുദൈവവിശ്വാസി]കളിൽ"), "(ദൃക്ക്)സാക്ഷിയാണല്ലോ!", no closing quote; v. 99 the opening ’, "ആഗ്രഹിച്ചു കൊണ്ട്-" (spaced mid-line), "തട്ടിക്കളയുന്നത്?-", no final stop; v. 100 "സത്യവിശ്വാസ (സ്വീകരണ)ത്തിനുശേഷം", "[അത് സൂക്ഷിക്കണം]"; v. 101 "‘ആയത്ത്’ [ലക്ഷ്യം]കൾ", "ഓതികേൾപ്പിക്കപ്പെട്ടു വരുന്നു;", "ഉണ്ട് (എന്നിരിക്കെ)!", "(നേരെ) ചൊവ്വായ"; tables "അനുവദനീയം (ഹലാൽ) ആയിരുന്നു", "ഇസ്റാഈൽ (യഅ്ക്വൂബ്)", "മുശ്‌രിക്കുകളിൽപെട്ട(വൻ)", "ശുദ്ധ (ഋജു) മനസ്കനായ നിലയിൽ", "ബക്ക (മക്ക)യിലുള്ള", "(ആ) വീട്ടിനെ കരുതിച്ചെല്ലൽ (ഹജ്ജ്- തീർത്ഥാടനം- ചെയ്യൽ)", "ധന്യനാണ്, അനാശ്രയനാണ്", "സാക്ഷികളാണ്,", "അല്ലാഹു അല്ല താനും", "നിങ്ങളിലുണ്ടുതാനും", "മുറുകെ പിടിക്കുന്നതായാൽ , രക്ഷ പ്രാപിച്ചാൽ" (space before the comma, as printed), "എന്നാലവൻ നയിക്കപ്പെട്ടു". All 95 `ar` are found in their verses (`npm run check`).
- `[p. N]` markers 808–816; none for p. 807 (in part 09). [p. 808] and [p. 810] stand at the start of the commentary below the panels and tables, as in parts 07–09. Page turns: "self-made law which they had been accepting traditionally, *[p. 809]* and that" (നിയമം / മാത്രമാണെന്നും; correction 7), "the *[p. 811]* purport of the reply" (മറു / പടിയുടെ താൽപര്യം), "several *[p. 812]* thousand years" (പല / ആയിരം), "does it *[p. 813]* need to be done obligatorily" (അത് / നിർബന്ധമായി), "being unready *[p. 814]* to accept" (തയ്യാറാകാ / തിരിക്കുകയും), "seeing and *[p. 815]* knowing" (കണ്ടറി / ഞ്ഞുകൊണ്ടിരിക്കുന്നു), "disbelief *[p. 816]* itself" (അവിശ്വാസത്തിലേക്ക് / തന്നെ). In two places English word order puts a p. N+1 clause before the marker: "the noble Prophet ﷺ too has stated" (printed at the top of p. 813) and "Allah commands the Prophet ﷺ to warn them" (printed at the top of p. 815). The places chosen are as near as English allows; see the honorific count.
- Honorifics, counted page by page: ﷺ printed 14 times (p. 808: 2; p. 809: 1; p. 810: 1; p. 811: 1; p. 812: 1; p. 813: 3; p. 814: 3; p. 815: 1; p. 816: 1; none on p. 807); the English has 14, the same on every page except the two clauses named above (one ﷺ each that the English places just before the p. 813 and p. 815 markers). (a) printed 19 times (p. 808: 7; p. 809: 2; p. 810: 1; p. 811: 7 in the text and 2 in footnote (**)); the English has 19. (r) printed 3 times (p. 813: Abu Hurairah twice, Ibn 'Abbas); the English has 3. The "رض" and "رح" inside the Arabic name and book title stay in Arabic. നബി വചനം / നബിചര്യ / തിരുവചനം carry no ﷺ in the print and none in the English. അവിടുന്ന് (p. 810) is "he"; തിരുമേനി alone (p. 813) is "the noble one".
- References and keys as printed: Nisa', 160; An'am, 146; the 95th verse; Su: Al-Baqarah 109; Suratul Baqarah: 125; "(ബു; മു)" three times → "(Bu; Mu)"; "(അ; ന: ദാരിമി)" → "(A; Na: Darimi)"; (കെ.എൻ.എം) "(K.N.M)".

## Corrections made (before → after)

### Malayalam not as printed (line-end spacing)

1. v. 95 panel, p. 807, "[ബഹുദൈവ / വിശ്വാസി]കളിൽ": the line ends after "[ബഹുദൈവ". On these pages the text layer ends a line with a hyphen token when a word continues on the next line (here "പെട്ടവനായിരുന്നി- / ല്ലതാനും" two lines further on, "അനു- / വദനീയ", "അവ- / തരിപ്പി…"), and has none after a whole word; after "[ബഹുദൈവ" there is none, so the print breaks at a space (the method of Al-Baqarah parts 43, 44 and 50). Al-Baqarah part 21 also prints "ബഹുദൈവ വിശ്വാസി]" spaced (part 07 prints it joined, mid-line). `verses.json` "[ബഹുദൈവവിശ്വാസി]കളിൽ" → "[ബഹുദൈവ വിശ്വാസി]കളിൽ". (Translator's item 4.)
2. v. 96 panel, p. 809, "മാർഗദർശനമായും / കൊണ്ട്": by the same test the text layer ends the line with a hyphen token ("…am-bpw-"), so the typeset text is one word; amanithafseer.com's space is not evidence (see above). `verses.json` "മാർഗദർശനമായും കൊണ്ട്" → "മാർഗദർശനമായുംകൊണ്ട്". (Translator's item 4.) The other line ends of item 4 have no hyphen token and keep their space: v. 100 "സത്യവിശ്വാസ / (സ്വീകരണ)", v. 101 "ഉണ്ട് / (എന്നിരിക്കെ)", v. 97 "[ഇബ്റാഹീം / നിന്ന", v. 100 "അനുസരിക്കുന്ന / പക്ഷം".

### Words added that are not in the Malayalam

3. v. 95: "മുശ്‌രിക്ക്" is printed without quotation marks here (part 07, v. 67, prints ‘മുശ്‌രിക്ക്’ with them). "the ‘mushrik’ [polytheist]s" → "the mushrik [polytheist]s".
4. v. 101: "…ഓതികേൾപ്പിക്കപ്പെട്ടു വരുന്നു; നിങ്ങളിൽ അവന്റെ റസൂലും ഉണ്ട് (എന്നിരിക്കെ)!" has no "and" (the -ഉം is "too"). "; and His Rasul too is among you (that being so)!" → "; His Rasul too is among you (that being so)!".
5. Word table v. 97, مَّقَامُ إِبۡرَٰهِيمَ, "ഇബ്റാഹീമിന്റെ (നിന്ന) സ്ഥലം": the English split the author's one bracket into two and made "where" look like the author's addition. "the place (where) Ibrahim (stood)" → "Ibrahim's place (where he stood)".

### Wording and markers

6. p. 808, "നബിﷺ ഇബ്റാഹീം (ന്റെ) മാർഗം കൈവെടിഞ്ഞുവെന്നുള്ള": the bracket is the genitive ending, so "of … ('s)" said it twice. "has abandoned the way of Ibrahim ('s)" → "has abandoned Ibrahim ('s) way".
7. p. 808/809 page turn: everything up to "…അംഗീകരിച്ചു പോന്ന ഒരു സ്വയംകൃത നിയമം" is on p. 808; p. 809 begins "മാത്രമാണെന്നും". "a self-made law which they *[p. 809]* had been accepting traditionally, and that" → "a self-made law which they had been accepting traditionally, *[p. 809]* and that".
8. p. 809, "(ലേവ്യപുസ്തകം, 11 ൽ 4-6; ആവർത്തനം, 14 ൽ 7)": the same printed form as the footnote's "(1 രാജാക്കൾ: 6ൽ 21)", which this part and Al-Baqarah part 10 ("1 Kings 19, at 8–10") render with "at". "(Leviticus, 11: 4-6; Deuteronomy, 14: 7)" → "(Leviticus, 11, at 4-6; Deuteronomy, 14, at 7)".

### Arabic not as printed

9. p. 813, the name after "അക്വ്റഉബ് നുഹാബിസ": on the 300 dpi crop the separate marks are a fatha over the first alif, a kasra under the ن of بن, a fatha over the alif after ح, and a kasra under the ب of حابس; the ق has only its two dots, and there is nothing under ر or ع. "اَقَرِع بن حاَبس رض" with its DOUBT → "اَقرع بنِ حاَبِس رض", DOUBT removed (translator's item 1a, settled).
10. Quran quotations in the commentary (all seven: مُبَارَكٗا وَهُدٗى لِّلۡعَٰلَمِينَ, فِيهِ ءَايَٰتُۢ بَيِّنَٰتٞ, مَّقَامُ إِبۡرَٰهِيمَ, وَلِلَّهِ عَلَى ٱلنَّاسِ حِجُّ ٱلۡبَيۡتِ, وَمَن كَفَرَ فَإِنَّ ٱللَّهَ غَنِيٌّ عَنِ ٱلۡعَٰلَمِينَ and the two already exact): five had kasra and shadda stored in the other order (kasra + shadda instead of the shadda + kasra of `data/quran-uthmani.json`), so they looked the same but were not the verse text character for character. Each was replaced by the exact substring of 3:96 or 3:97; all seven are now found unchanged in their verse.

No dropped തന്നെ/-ഉം or list items, may/will errors, tense or voice changes, reversed or "fixed" negations, changed reported speech, added ﷺ, silently corrected names or misprints, or added or re-vowelled Arabic were found apart from the above.

## The translator's open items

- **(1) DOUBTs.** (a) p. 813 Arabic name: settled from the crop (correction 9). (b) p. 816 "(ജ: അമാനി മൗലവി …": clearly printed "ജ:"; ജനാബ് is the likely expansion, and the note names Amani Moulavi in the third person, but the page does not spell it out; DOUBT kept as worded. (c) p. 816 "(പ്രസാ:)": clearly printed; the third-person "ജ: അമാനി മൗലവി" fits a publishers' note, but the abbreviation is not expanded on the page; DOUBT kept, as Al-Baqarah part 40 kept "-പ്രസാ:".
- **(2) TNs.** p. 811 "ഇബ്റാബീം": confirmed on the image (ബ for ഹ, in "ഇബ്റാബീം നബി (അ)യുടെ ശേഷം"); the same name is spelt ഇബ്റാഹീം everywhere else on the page; TN kept. Footnote (**) "(1 രാജാക്കൾ: 6ൽ / 21)" ("21" begins the next line): the words quoted ("…നാനൂറ്റി എൺപതാം സംവൽസരത്തിൽ … പണിയുവാൻ തുടങ്ങി") are 1 Kings 6: 1; TN kept.
- **(3) Slips kept without TN.** All confirmed on the images: v. 93 and v. 98 no closing quote; v. 97 the stop in "അല്ലാഹു. ലോകരെ" ("Allah. is One without dependence"); v. 99 the opening ’ and no final stop; p. 808 "വായിക്കുവീൻ"; p. 810 "ആരാധാ മന്ദിരങ്ങളേക്കാൾ"; p. 811 the fragment "ഈ യാഥാർത്ഥ്യം … അവിശ്വാസികളാണെന്നും."; p. 811 footnote "രാജാക്കൾ"; p. 813 the closing ’ after "…പ്രതിഫലവുമില്ല." with no opening (the gist is introduced by "സാരം:"); p. 816 footnote "(ജ:" never closed. Also as printed: p. 813 "’ഞാൻ ‘അതേ’…" opens with the ’ glyph (the English uses ‘), p. 811 "ബക്കാ എന്ന (*)" (long ā; "Bakka"), p. 812 "മർവാ,മിനാ". None changes the meaning; kept.
- **(4) Spacing.** "കൊണ്ടുവന്ന്" (v. 93): mid-line, letter-spaced, one word; right. "പെട്ടവനായിരുന്നില്ലതാനും" (v. 95): hyphen token at the break; joined, right. "[ബഹുദൈവവിശ്വാസി]കളിൽ" (v. 95): correction 1. "[ലക്ഷ്യം]കളിൽ" / "[ലക്ഷ്യം]കൾ" (v. 98, v. 101): break after "]"; the suffix joined, as part 07; right. "മാർഗദർശനമായും കൊണ്ട്" (v. 96): correction 2. "സത്യവിശ്വാസ (സ്വീകരണ)" (v. 100) and "ഉണ്ട് (എന്നിരിക്കെ)" (v. 101): no hyphen token; spaced, right.
- **(5) Footnotes, honorifics, names, non-Quran Arabic.** Footnotes: see above. Honorifics ﷺ 14, (a) 19, (r) 3: see above. Bible names in footnote (**): യിസ്റായേൽ "Israel", മിസ്റയീം "Mizraim", ശാലോമോൻ "Solomon", യഹോവ "Jehovah" (the Bible's own forms, as printed); right. Book title on p. 816: "السنة ومكانتها فى التشريع الاسلامى للدكتور مصطفى السباعى — رح" letter for letter against the image (dotless ى in فى, الاسلامى, مصطفى, السباعى; no hamza on الاسلامى; the long dash before رح); right.
- **(6) Quran quotations and word table.** Quotations: correction 10. The commentary prints مَقَامُ without the shadda (it stands alone there); the quotation keeps the verse text مَّقَامُ, as TRANSLATING.md rule 4 asks. words.json: 95 entries (not 103), each `ar` found in its verse.
- **(7) Renderings.** അനാശ്രയൻ "One without dependence" (Al-Baqarah part 46 "the One without dependence") and ധന്യൻ "Self-Sufficient" (Al-Baqarah part 46, with its open doubt "the Rich"); ‘ആയത്ത്’ [ലക്ഷ്യം] "‘ayah’ [evidence]" (as Al-Baqarah parts 01–40); സത്യവാൻമാർ "truthful" (verse, as Al-Baqarah parts 04, 16) and സത്യവാദികൾ "those who speak the truth" (commentary, a different word); ആശീർവദിക്കപ്പെട്ട "blessed" and അനുഗ്രഹീതം "favoured"; അഭയസ്ഥാനം "place of refuge"; നിർഭയൻ "free from fear" (നിർഭയം of a place is "secure" in Al-Baqarah 2:125–126; this is of a person); തീർത്ഥാടന കേന്ദ്രം "centre of pilgrimage"; ആരാധനാ മന്ദിരം "house of worship" (the same English in Al-Baqarah part 23); പ്രവാചകവര്യൻ "eminent prophet"; മഹാന്മാർ "great men" (the same English throughout Al-Baqarah); (രിവായത്തുകളുടെ) മാർഗങ്ങൾ "routes" (the same English in Al-Baqarah parts 19, 25, 45–48); ആനപ്പട്ടാളം "the elephant army"; ‘ഫർദ്വ്’ "‘fard’"; ഐഛിക കർമം "voluntary act"; തിരുവചനം "sacred saying"; സ്ത്രീ സല്ലാപം "dalliance with women"; തോന്നിയവാസം "licentiousness" (as parts 08–09 in the commentary); ഓറിയന്റലിസം / ഓറിയന്റലിസ്റ്റുകൾ "Orientalism / Orientalists"; നബിചര്യ "Sunnah of the Prophet" (the same English in Al-Baqarah parts 08, 32 and part 07); ‘ഇബ്റാഹീം മക്വാം’ "‘Ibrahim Maqam’" in the printed word order (the verse prints ‘മക്വാമു ഇബ്റാഹീം’ "‘Maqamu Ibrahim’", as Al-Baqarah part 19); ബൈത്തുൽ മുക്വദ്ദസ് "Bait al-Muqaddas" (as Al-Baqarah); ദുൽക്വഅദ് "Dhul-Qa'dah" (as Al-Baqarah parts 31–32); മക്കാഹറം "the Makkah Haram" (as Al-Baqarah). All kept.

## Checked and left as they are

- v. 93 / v. 94 "സ്വന്തം പേരിൽ" / "അല്ലാഹുവിന്റെ പേരിൽ" → "in his own name" / "in the name of Allah": literal and consistent with each other; the table gives "upon his own self" for عَلَىٰ نَفۡسِهِۦ. Left.
- v. 96: the English moves "is indeed the one that is in Bakkah [Makkah]" before "as blessed, and as guidance for the worlds"; nothing is lost. v. 97: the dash after "…കിട്ടിയവർക്ക്-" stands in the English after "for mankind-", because English puts "(a liability) to Allah" earlier. Left.
- v. 99 "desiring crookedness for it-?-": the author's dashes and "?-" kept in the English order. Left.
- p. 808 "…മുഹമ്മദ് എന്നല്ലേ അവൻ പറയുന്നത്." → "Is it not that he says … ?": എന്നല്ലേ is a question; the printed stop is a question in English. Left.
- p. 811 "Bakka (\*)" / footnote "‘Bakka’" / v. 96 "Bakkah" / table "Bakka": as printed (ബക്കാ, ‘ബക്ക’, ബക്കഃ, ബക്ക). Left.
- `part.json` verses "93-101", pages "807-816", PDF pages "99-108": correct.

## Open doubts for the reviewer

1. **p. 816 footnote "ജ:" → "Ja:"**: DOUBT kept (most likely ജനാബ്, an honorific like "Mr."; not expanded in the print).
2. **p. 816 footnote "(പ്രസാ:)" → "(Publishers"**: DOUBT kept (most likely പ്രസാധകർ, making the note the publishers'; as Al-Baqarah part 40).
3. **Line-end spacing** (corrections 1–2) rests on the PDF text layer's hyphen tokens, not on anything visible on the page; the reviewer may prefer the other spelling ("[ബഹുദൈവവിശ്വാസി]", as v. 67 in part 07; "മാർഗദർശനമായും കൊണ്ട്").
4. **ധന്യൻ → "Self-Sufficient"** (v. 97 table, p. 813 "the Self-Sufficient One"): the open Al-Baqarah part 46 doubt ("the Rich" is the literal option) applies here too.
5. **Printing slips** (item 3) are mirrored without TN; the two evident slips have TNs.
6. **Quran quotations in the commentary** copied from the Uthmani text (TRANSLATING.md rule 4), as parts 02–09 (part 02 open doubt 3); here this also adds the shadda of مَّقَامُ, which the commentary prints without.
7. **Earlier open doubts still apply** (not in this part): see parts 01–09 and the Al-Baqarah parts.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| അനാശ്രയൻ / ധന്യൻ | ghani | One without dependence / Self-Sufficient (as Al-Baqarah part 46) |
| സത്യവാൻമാർ / സത്യവാദികൾ | — | truthful (verse) / those who speak the truth (commentary) |
| ആശീർവദിക്കപ്പെട്ട / അനുഗ്രഹീതം | mubarak | blessed / favoured |
| നിർഭയൻ | amin | free from fear |
| അഭയസ്ഥാനം | — | place of refuge |
| തീർത്ഥാടന കേന്ദ്രം / ആരാധനാ കേന്ദ്രം | — | centre of pilgrimage / centre of worship |
| ആരാധനാ മന്ദിരം | — | house of worship |
| പ്രവാചകവര്യൻ | — | eminent prophet |
| മഹാന്മാർ | — | great men |
| (രിവായത്തുകളുടെ) മാർഗങ്ങൾ | — | routes |
| ആനപ്പട്ടാളം | — | the elephant army |
| ഫർദ്വ് | fard | ‘fard’ |
| ഐഛിക കർമം | — | voluntary act |
| തിരുവചനം | — | sacred saying |
| സ്ത്രീ സല്ലാപം | — | dalliance with women |
| ഓറിയന്റലിസം / ഓറിയന്റലിസ്റ്റുകൾ | — | Orientalism / Orientalists |
| നബിചര്യ | sunnah | Sunnah of the Prophet |
| ‘ഇബ്റാഹീം മക്വാം’ / ‘മക്വാമു ഇബ്റാഹീം’ | maqam Ibrahim | ‘Ibrahim Maqam’ (printed order) / ‘Maqamu Ibrahim’ (as Al-Baqarah part 19) |
| ബൈത്തുൽ മുക്വദ്ദസ് | Bait al-Maqdis | Bait al-Muqaddas (as Al-Baqarah) |
| ദുൽക്വഅദ് | Dhul-Qa'dah | Dhul-Qa'dah (as Al-Baqarah parts 31–32) |
| മക്കാഹറം | al-Haram | the Makkah Haram (as Al-Baqarah) |
| ബക്ക / ബക്കഃ | Bakkah | Bakka / Bakkah (as printed) |
