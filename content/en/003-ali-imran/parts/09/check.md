# Check: Ali 'Imran part 09 (verses 81–92)

Checked on 2026-11-05 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/03. Al-'Imran.pdf`, PDF pages 89–99 (book pp. 797–807). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer. 300 dpi crops: p. 797, "ഉറപ്പുവാങ്ങിയ" in the verse 81 panel (correction 1); p. 801, "വാക്കുകൾ.അല്ലാഹുവിങ്കൽ" (correction 6); p. 806, the Arabic name بَيْرُحَاء (item 4 below). Word positions from `pdftotext -bbox` were used for the spacing questions (correction 1; v. 90 below). The amanithafseer.com text was used only to compare spacing (item 3).
- **Boundaries.** Part 08 ends on p. 797 with "… 64-ാം വചനത്തിൽ നിന്ന് വ്യക്തമായിക്കഴിഞ്ഞിട്ടുള്ളതാണ്."; directly below are "വിഭാഗം - 9" and the verse 81 panel. This part starts there (p. 797's [p. N] marker is in part 08). It ends at the top of p. 807 with "… എന്ന് പറയുകയുണ്ടായി (ഇബ്നു അബീഹാതിം)"; directly below is the verse 93 panel. Nothing is missing.
- **Headings.** "വിഭാഗം - 9" (p. 797) stands alone: "### Section – 9", before *[Verses 81–82]*. On p. 805, after the hadith that ends the commentary on verses 90–91, the print has "വിഭാഗം - 10" on the left and "ജുസ്ഉ് - 4" on the right of one row (the running head also changes from ഭാഗം 3 to ഭാഗം 4); "### Section – 10 · Juz' – 4" follows Al-Baqarah parts 22 ("Section – 17 · Juz' – 2") and 42 ("Section – 34 · Juz' – 3"). Right.
- `part.json`, `verses.json` (verses 81–92), `words.json` (134 entries: 81: 24; 82: 4; 83: 11; 84: 21; 85: 8; 86: 14; 87: 7; 88: 6; 89: 7; 90: 8; 91: 15; 92: 9), `commentary.md`.
- Groups: Section 9 heading (p. 797) | *[Verses 81–82]* (panels p. 797; table pp. 797–798; commentary pp. 798–799) | *[Verses 83–84]* (panels and table p. 799; rest of table and commentary p. 800; commentary ends on p. 801) | *[Verse 85]* (panel, table, commentary p. 801; commentary ends on p. 802) | *[Verses 86–89]* (panels 86–88 p. 802; panel 89, table and commentary p. 803) | *[Verses 90–91]* (panel 90 begins p. 803; panels, table and commentary p. 804; the hadith at the top of p. 805) | Section 10 · Juz' 4 heading (p. 805) | *[Verse 92]* (panel, table, commentary p. 805; examples and footnote p. 806; end at the top of p. 807). Right.
- Every English sentence of the commentary was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The one footnote (p. 806, (*), "അനസ് (റ)ന്റെ മാതാവിനെ അദ്ദേഹം വിവാഹം കഴിച്ചിരുന്നു.") is present in full, after example 1, whose paragraph carries the (*) at Abu Talhah (r).
- `verses.json` and every `words.json` gloss match the images in the printed order, after corrections 1 and 2, including: v. 81 "അവൻ(അവരോട്)" (no space), "(ഏറ്റു) സമ്മതിക്കുകയും." with the stop inside the question, "[എന്നോടുള്ള കരാറിന്റെ ബാധ്യത]"; v. 82 no final stop; v. 83 the two exclamations "(എന്നിരിക്കെ)!-" and "(എന്നുമിരിക്കെ)!"; v. 84 "(നബിയേ)പറയുക:" (no space), "‘സിബ്ത്ത്വ്’ [സന്തതി]കളുടെയും", "[അല്ലാഹുവിന് കീഴൊതുങ്ങിയ]", and no closing quote; v. 85 "തേടുന്നപക്ഷം,-"; v. 88 the dashes "-അതിൽ … നൽകപ്പെടുകയുമില്ല;-"; v. 89 "[അവർക്ക് രക്ഷയുണ്ടായിരിക്കും]" with no stop after it; v. 90 "വർദ്ധിച്ചുകൊണ്ടിരിക്കുകയും" (one word: the letter-spaced line has no word gap) and "അക്കൂട്ടർതന്നെയാണ്"; v. 91 "തെണ്ടം [പ്രായശ്ചിത്തം]", "ചെയ്താലും ശരി അക്കൂട്ടർ," and the final stop after "ഇല്ലതാനും."; tables "സമ്മതിച്ച്(ഉറച്ച് പറഞ്ഞു. ഏറ്റ് പറഞ്ഞു)വോ", "എന്റെ(എന്നോടുള്ള)ബാധ്യത (കരാർ, ഭാരം)", "നിങ്ങളുടെകൂടെ", "അവന് (തന്നെ)", "നിർബ്ബന്ധപൂർവ്വവും, അനിഷ്ടമായും", "ചെയ്കയില്ല", "മുസ്‌ലിംകളാണ്, കീഴൊതുങ്ങിയവരാണ്.", "അല്ലാഹു (വാകട്ടെ)", "ഒഴിവ് (താമസം- പരിഗണന) കൊടുക്കപ്പെടുക", "കരുണാനിധിയാണ്.", "അവർക്കില്ലതാനും" (the line breaks inside the word, "അവർക്കി / ല്ലതാനും"; amanithafseer.com's space is not in the print), "വല്ലവസ്തുവെയും", "അറിയുന്നവനാണ്.". All 134 `ar` are found in their verses (`npm run check`).
- `[p. N]` markers 798–807; none for p. 797 (in part 08). [p. 798], [p. 800], [p. 803], [p. 804] and [p. 805] stand at the start of the commentary (or of the hadith) below the panels and tables, as in parts 07–08. Page turns: "The wording … is thus *[p. 799]*;" (ഇങ്ങി / നെയാകുന്നു), "specially *[p. 801]* picked out" (പ്രത്യേകം / എടുത്ത്), "intellectuals *[p. 802]*- is in circulation" (ചിലരിൽ നിന്ന് / കേൾക്കപ്പെടുന്ന), "the merit in spending *[p. 806]* it" (ചിലവഴിക്കുന്ന / തിലുള്ള), "The Prophet ﷺ *[p. 807]* said to him" (നബിﷺ / അദ്ദേഹത്തോട്). English word order cannot put the p. 802 marker exactly at the split; the place chosen is as near as English allows. All right.
- Honorifics, counted page by page: ﷺ printed 13 times (p. 798: 2; p. 800: 1; p. 803: 2; p. 805: 1; p. 806: 7; none on pp. 797, 799, 801, 802, 804, 807); the English has the same on every page. (r) printed 10 times (p. 798 Abu Ya'la; p. 806: Anas, Abu Talhah twice, 'Umar, Ibn 'Umar, Zaid ibn Harithah, Usamah, Zaid, and Anas in the footnote); the English has 10. (a) printed 8 times (p. 798 Musa; p. 799 Musa; p. 800 Ibrahim; p. 801: Ya'qub, Ibrahim, "Musa, 'Isa (a)", Musa, 'Isa); the English has 8. The honorific അവിടുന്ന് (p. 803) is "he", without an added ﷺ.
- References and hadith keys as printed: Ra'd, 15: Ha Mim Sajdah: 11; the 19th verse; Suratul Baqarah: 161; 2: 267; "(അ; ബു; മു)" twice → "(A; Bu; Mu)" (as part 08 correction 6); "(ബു; മു.)" → "(Bu; Mu.)"; (ബസാർ) "(Bazzar)"; (ഇബ്നു അബീഹാതിം) "(Ibn Abi Hatim)".

## Corrections made (before → after)

### Malayalam not as printed

1. v. 81 panel, p. 797, "ഉറപ്പുവാങ്ങിയ": the word stands in the middle of the line "രുടെ ഉറപ്പുവാങ്ങിയ സന്ദർഭം", not at a line end. The line is letter-spaced for justification; on the 300 dpi crop and in the PDF word positions the gap between പ്പു and വാ is the same as the gaps between the letters (about 1 pt), while the word gaps on that line are about 10 pt. So it is printed as one word (the same method as Al-Baqarah part 13 correction 1). amanithafseer.com has a space, but the image wins. `verses.json` "ഉറപ്പു വാങ്ങിയ" → "ഉറപ്പുവാങ്ങിയ". (Translator's item 3.)
2. Word table v. 82, p. 798, فَأُوْلَـٰٓئِكَ هُمُ: printed "എന്നാൽഅക്കൂട്ടർ തന്നെ" with no space (image and text layer). Joined printed forms are kept as printed in the earlier parts (Al-Baqarah part 03 "നിങ്ങൾആരാധിക്കുവിൻ", part 10 "മേൽയാതൊരു"). `words.json` "എന്നാൽ അക്കൂട്ടർ തന്നെ" → "എന്നാൽഅക്കൂട്ടർ തന്നെ". (Translator's item 2.)

### Words added that are not in the Malayalam

3. v. 83 and v. 86: the author puts "(എന്നിരിക്കെ)" ("while it is so") in brackets at the end of the clause; the English also put "While" at the start, outside the brackets, and dropped the -ഉം ("also") of കീഴൊതുങ്ങുകയും / മടക്കപ്പെടുകയും. Earlier parts render the bracket alone (Al-Baqarah 2:247, 2:272; Ali 'Imran 3:40, 3:65). v. 83: "While to Him those who … have become submissive (that being so)!- And it is to Him indeed that they are returned (and that also being so)!" → "To Him those who … have also become submissive (that being so)!- It is to Him indeed that they are returned, too (and that also being so)!". v. 86: "While they have testified that the Rasul is real (true), and clear proofs have come to them (that being so)!" → "They have both testified that the Rasul is real (true), and clear proofs have come to them (that being so)!".
4. Word table v. 83, وَلَهُۥٓ, "അവന് (തന്നെ)": "while to Him (indeed)" → "to Him (indeed)".
5. p. 798, "… മാത്രമേ വിശ്വസിക്കുകയുള്ളൂ - വിശ്വസിക്കേണ്ടതുള്ളൂ -": the English had a round bracket the author does not print, and round brackets are kept for the author's own additions (about.md). "- that we need believe only (so) -" → "- that we need to believe only in these -".
6. p. 801, "… എന്നുമാണ് അല്ലാഹു പ്രയോഗിച്ച വാക്കുകൾ.അല്ലാഹുവിങ്കൽ നിന്നുള്ള …": the text layer shows "-" after the stop, but that is the font's line-breaking hyphen mark, which it shows inside many words on every page; the 300 dpi crop shows no dash. "such are the words that Allah has used.- In receiving" → "such are the words that Allah has used. In receiving".

### Meaning

7. p. 804, "… അവസാനത്തെ തീരുമാനം അവന്റെ മരണത്തോട് കൂടിയാണ് തിട്ടപ്പെടുന്നതെന്ന്": a cleft ("it is with his death that … is settled"), not "only". "that the final decision as to whether … is settled only with his death" → "that it is with his death that the final decision as to whether … is settled".

### Earlier renderings not followed

8. ആവശ്യപ്പെടുക (v. 83 يَبۡغُونَ): this part's own commentary renders ആവശ്യം / ആവശ്യപ്പെടുക "demand" (pp. 800, 801), and Al-Baqarah part 10 has "demanding". v. 83 "that they want?" → "that they demand?"; word table "they want" → "they demand".
9. സ്ഥിരവാസികൾ (v. 88): Al-Baqarah parts 07 and 34 and Ali 'Imran part 02 render it "permanent residents", keeping "permanent dwellers" for നിത്യവാസികൾ (as in the v. 88 word table here). "being permanent dwellers in it" → "being permanent residents in it".

### Doubts marked (translator's items 1a and 1b)

10. Word table v. 91, وَلَوِ ٱفۡتَدَىٰ, "അവൻ തെണ്ടം (മോചനമൂല്യം- പ്രായശ്ചിത്തം) നൽകിയാലും": the same word as the DOUBT in the verse; Al-Baqarah parts 08, 18 and 37 also mark it in the word table. Added "[DOUBT: തെണ്ടം rendered 'ransom'; see the doubt in verse 91]".
11. p. 802 DOUBT reworded to say the words are printed so and to give both options (see open doubt 2).

No dropped തന്നെ/-ഉം or list items, may/will errors, tense or voice changes, reversed or "fixed" negations, changed reported speech, added ﷺ, silently corrected names or misprints, or added or re-vowelled Arabic were found apart from the above.

## The translator's open items

- **(1) DOUBTs.** (a) v. 91 "തെണ്ടം [പ്രായശ്ചിത്തം]" → "ransom [atonement]": the word is clearly printed തെണ്ടം (also in the table, p. 804, and the hadith on p. 805, "തെണ്ടമായി", "as a ransom"); the DOUBT follows the open Al-Baqarah doubt and is kept; one added in the word table (correction 10). The hadith on p. 805 is left without a second marker. (b) p. 802 "മറ്റുള്ളവരുടെ ആക്ഷേപത്തിനും എതിർപ്പിനും വിരോധമാകാതിരുന്നാൽ മതി-": confirmed printed so; the text does not settle it; DOUBT kept and reworded with two options (correction 11). (c) p. 805 "അത്തരം വസ്തുക്കൾക്ക് പകരം അവയെക്കാൾ വിലപിടിപ്പുള്ള വസ്തുക്കളെപ്പോലും ചിലവഴിക്കുവാൻ അവയുടെ ഉടമസ്ഥൻ ചിലവാക്കുന്നപക്ഷം": confirmed printed so, in one run with no gap or broken line; whether a word dropped out cannot be settled from the page; DOUBT kept as worded. (d) p. 806 "കൂടുതൽ വീര്യപ്പെട്ടത്": clearly printed വീര്യപ്പെട്ടത്; the other examples use പ്രിയപ്പെട്ടത് / പ്രിയംകരമായ, but a slip cannot be proved; DOUBT kept as worded.
- **(2) Slips kept as printed without TN.** All confirmed on the images: v. 81 the stop inside the question after "സമ്മതിക്കുകയും."; v. 82 no final stop; v. 82 table "എന്നാൽഅക്കൂട്ടർ" joined (now written joined, correction 2); p. 798 "ഉറപ്പുമേടിക്കുകയും." (two English sentences, "Allah has taken … All have also …"); p. 800 the stop after "… പറഞ്ഞതിന്റെ ഉദ്ദേശ്യം." leaving a fragment; p. 802 "വായിലുടെയോ" (for വായിലൂടെയോ); p. 803 no stop after "… വിവരിച്ചിട്ടുണ്ട്"; v. 91 no stop in "ചെയ്താലും ശരി അക്കൂട്ടർ,"; p. 806 example 1 no stop after "(റ) (*)", the unclosed ‘ in "‘ബൈറുഹാ ആകുന്നു", the unclosed bracket "(താങ്കൾ പറഞ്ഞത് …"; p. 807 the unclosed ‘ ("‘താങ്കളുടെ ധർമം …") and no final stop after "(ഇബ്നു അബീഹാതിം)". None changes the meaning; no TN needed. Kept.
- **(3) Line-end spacing.** v. 81 "ഉറപ്പുവാങ്ങിയ" is mid-line and joined (correction 1). Two words do fall at a line end and keep amanithafseer.com's space: v. 86 "നേർമാർഗത്തിലാക്കുകയില്ല / താനും" (the table prints "(താനും)" apart) and v. 92 "പ്രാപിക്കുകയില്ല / തന്നെ." (but the v. 92 table prints "പ്രാപിക്കുകയില്ലതന്നെ" joined, as v. 85 and v. 91 print "സ്വീകരിക്കപ്പെടുകയില്ലതന്നെ"); see open doubt 4.
- **(4) Arabic, footnote, honorifics.** بَيْرُحَاء letter by letter on a 300 dpi crop: fatha on ب, sukun on ي, damma on ر, fatha on ح, alif, hamza; as printed. The footnote (*) is complete and stands after example 1. Honorifics: see above (ﷺ 13, (r) 10, (a) 8). Hadith keys "(A; Bu; Mu)" as part 08 corrected them.
- **(5) Quran quotations and word table.** Each quotation has exactly the words printed and is found unchanged in its verse: p. 801 ٱلۡأَسۡبَاطِ, مَآ أُنزِلَ and مَآ أُوتِيَ (3:84, each printed without its وَ), إِنَّ ٱلدِّينَ عِندَ ٱللَّهِ ٱلۡإِسۡلَٰمُ (3:19); p. 806 لَن تَنَالُواْ (3:92), with the printed dots before it as they stand in the left-to-right line. `npm run check` lists none of them as close-but-not-exact. words.json: 134 entries, each `ar` found in its verse.
- **(6) Renderings.** ഉറപ്പ് "assurance" (as Al-Baqarah parts 11, 13, 14), with കരാർ "pact" and ഉടമ്പടി "covenant" kept apart (part 08); വിജ്ഞാനബോധനങ്ങൾ "teachings of wisdom" (വിജ്ഞാനം "wisdom" as in the verse); ‘സിബ്ത്ത്വ്’ [സന്തതി] "‘sibt’ [progeny]" and സന്തതികൾ "progeny"; ആവശ്യപ്പെടുക: correction 8; (എന്നിരിക്കെ) "(that being so)": correction 3; അനുസരണപൂർവ്വം / നിർബ്ബന്ധപൂർവ്വം "obediently / compulsorily"; തോന്നിയവാസികൾ "the wayward" in the verse and table (as Al-Baqarah part 15, v. 99) but തോന്നിയവാസം "licentiousness" in the commentary (as part 08 correction 4; see open doubt 5); അക്രമികൾ "wrongdoers" (as Al-Baqarah); ഒഴിവ് "respite" (Al-Baqarah 2:162 "respite" for ഇടകൊടുക്കുക); മോചനമൂല്യം "price of release"; പുണ്യം "merit" (Al-Baqarah parts 27, 31); ലക്ഷക്കണക്കിൽ "in lakhs"; ഉൽബുദ്ധർ / ബുദ്ധിജീവികൾ "enlightened ones / intellectuals"; പ്രകൃതിവാദി / ബഹുദൈവവാദി / ദൈവനിഷേധി "naturalist / polytheist / atheist"; അൻസ്വാരികൾ "the Ansaris"; ബൈറുഹാ "Bairuha"; ലാഭകരമായ ധനം "profitable wealth"; ‘വക്ഫാ’ക്കുക "made it a ‘waqf’" (part 01 "waqf"); അവിടുന്ന് "he". സ്ഥിരവാസികൾ: correction 9. All others kept.

## Checked and left as they are

- v. 85 "അവൻ പരലോകത്തിലാകട്ടെ" → "In the Hereafter, for his part, he will also be": the -ആകട്ടെ stands on പരലോകത്തിൽ; English cannot attach it there neatly; nothing of the meaning is lost; left.
- v. 84 "അവന് [അല്ലാഹുവിന് കീഴൊതുങ്ങിയ] മുസ്‌ലിംകളുമാകുന്നു" → "are also Muslims to Him [who have become submissive to Allah]": the bracket follows "Muslims" for English word order; left.
- p. 806 "........ لَن تَنَالُواْ": in the left-to-right Malayalam line the dots stand before the Arabic; kept in that order.
- `part.json` verses "81-92", pages "797-807", PDF pages "89-99": correct.

## Open doubts for the reviewer

1. **v. 91 (and table) തെണ്ടം → "ransom"**: DOUBT kept, the open Al-Baqarah question.
2. **p. 802 "… എതിർപ്പിനും വിരോധമാകാതിരുന്നാൽ മതി"**: DOUBT kept (options: "does not provoke / run against the reproach and opposition of others", or a slip for e.g. വിധേയമാകാതിരുന്നാൽ "does not become subject to").
3. **p. 805 "… ചിലവഴിക്കുവാൻ അവയുടെ ഉടമസ്ഥൻ ചിലവാക്കുന്നപക്ഷം"**: DOUBT kept (a word may have dropped out; the English follows the printed words).
4. **p. 806 "കൂടുതൽ വീര്യപ്പെട്ടത്" → "more valued"**: DOUBT kept (possible slip for പ്രിയപ്പെട്ടത് "dearer").
5. **Line-end spacing** (item 3): v. 86 "നേർമാർഗത്തിലാക്കുകയില്ല താനും" and v. 92 "പ്രാപിക്കുകയില്ല തന്നെ" follow amanithafseer.com; for v. 92 the book's own table prints the phrase joined, so the reviewer may prefer "പ്രാപിക്കുകയില്ലതന്നെ".
6. **തോന്നിയവാസം / തോന്നിയവാസികൾ**: "licentiousness" (commentary) and "the wayward" (verse) are both in use (part 08 open doubt 5); one choice may be wanted.
7. **Printing slips** (item 2) are mirrored without TN.
8. **Quran quotations in the commentary** copied from the Uthmani text (TRANSLATING.md rule 4), as parts 02–08 (part 02 open doubt 3).
9. **Earlier open doubts still apply** (not in this part): see parts 01–08 and the Al-Baqarah parts.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഉറപ്പ് (ഉടമ്പടി, കരാർ) | mithaq | assurance (covenant, pact) (as Al-Baqarah parts 11–14) |
| ബാധ്യത | isr | liability |
| വിജ്ഞാനബോധനങ്ങൾ | — | teachings of wisdom |
| ‘സിബ്ത്ത്വ്’ / സന്തതികൾ | sibt / al-asbat | ‘sibt’ / progeny |
| അനുസരണപൂർവ്വം / നിർബ്ബന്ധപൂർവ്വം | taw'an / karhan | obediently / compulsorily |
| ആവശ്യപ്പെടുക | bagha | demand (correction 8) |
| സ്ഥിരവാസികൾ / നിത്യവാസികൾ | khalidin | permanent residents / permanent dwellers (as earlier parts) |
| ഒഴിവ് (താമസം- പരിഗണന) | yunzarun | respite (delay- consideration) |
| മോചനമൂല്യം | fidyah | price of release |
| പുണ്യം / പുണ്യകർമം | birr | merit / meritorious deed (as Al-Baqarah) |
| ഉൽബുദ്ധർ / ബുദ്ധിജീവികൾ | — | enlightened ones / intellectuals |
| പ്രകൃതിവാദി / ബഹുദൈവവാദി / ദൈവനിഷേധി | — | naturalist / polytheist / atheist |
| ലക്ഷക്കണക്കിൽ | — | in lakhs |
| അൻസ്വാരികൾ | Ansar | the Ansaris |
| ബൈറുഹാ | Bairuha' | Bairuha |
| ലാഭകരമായ ധനം | — | profitable wealth |
| ഗനീമത്ത് | ghanimah | ‘ghanimah’ |
| വക്ഫ് | waqf | ‘waqf’ (as part 01) |
| തെണ്ടം | — | ransom (DOUBT, as Al-Baqarah) |
