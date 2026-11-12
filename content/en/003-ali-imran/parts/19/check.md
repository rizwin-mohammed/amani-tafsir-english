# Check: Ali 'Imran part 19 (verses 172–180)

Checked on 2026-11-12 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/03. Al-'Imran.pdf`, PDF pages 186–195 (book pp. 894–903). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer. Crops at 300 dpi: p. 896 the end of the footnote's first line ("…അബൂസുഫ്യാൻ", see correction 1); p. 897 the bracket after فَزَادَهُمۡ إِيمَٰنٗا وَقَالُواْ (correction 2) and "( بَدْر الصَغِير )’". The amanithafseer.com text was used only to compare "ഹുസാമും", "ഹംറാഉൽ / ഹംറാംഉൽ", "ക്ഷണനം" and the footnote's first sentence (it has the same for each).
- **Boundaries.** Part 18 ends on p. 894 with item 4, "… രാവിലെയും വൈകുന്നേരവും ലഭിക്കുന്നതാണ് എന്നും വന്നിരിക്കുന്നു."; directly below are "വിഭാഗം - 18" and the verse 172 panel. This part starts there (p. 894's marker is in part 18). It ends on p. 903 with "… എന്നൊക്കെയാണ് അവസാനം അല്ലാഹു ഓർമിപ്പിക്കുന്നത്.", directly above "വിഭാഗം - 19" and the verse 181 panel (left for part 20). Nothing in between is missing.
- `part.json`, `verses.json` (verses 172–180), `words.json` (122 entries: 172: 13; 173: 14; 174: 11; 175: 8; 176: 14; 177: 9; 178: 12; 179: 22; 180: 19; every printed gloss is there, in order), `commentary.md`.
- Groups: "### Section – 18" stands above the first group, where the print has "വിഭാഗം - 18" (p. 894). *[Verses 172–174]* (panels 172, 173 p. 894; panel 174 and the table p. 895; commentary pp. 895–898, with the footnote (\*) on Abu Sufyan at the foot of p. 896, placed after the paragraph that carries its marker, which ends on p. 897 with "അതായത്:") | *[Verse 175]* (panel, table and commentary p. 898) | *[Verses 176–178]* (panel 176 begins p. 898; rest of 176, panels 177, 178 and the start of the table p. 899; rest of the table and the commentary p. 900) | *[Verse 179]* (panel p. 900; table and commentary p. 901) | *[Verse 180]* (panel begins p. 901; rest of panel, table and commentary p. 902; commentary p. 903). Right.
- Every English sentence of the commentary and the footnote was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images in the printed order, including: v. 172 "[പ്രശംസനീയർ] തന്നെ"; v. 173 "(നേരിടുവാൻ ആ) മനുഷ്യർ (ആളുകളെ)"; v. 174 "തിരിഞ്ഞു [മടങ്ങി] വന്നു"; v. 176 "ഏർപെടുത്തിക്കൊടുക്കാതിരിക്കുവാൻ" (single പ, as printed); v. 179 "അല്ലാഹു(വിന് ഉദ്ദേശ്യം)" beside "അല്ലാഹു (വിന് ഉദ്ദേശം)" and "ദുതൻമാരിലും" beside "ദൂതൻമാരിൽ" (all as printed); v. 180 no stop after "…കഴുത്താഭരണമാക്കപ്പെടുന്നതാണ്" and none at the end (as printed; amanithafseer.com adds a final stop, the image has none); tables "മുറിവ് (പരുക്ക്)" (the panel has "പരിക്ക്"), "നമുക്കുമതി", "അങ്ങനെ അവർ മറിഞ്ഞ് (തിരിഞ്ഞു- മടങ്ങി)", "നിശ്ചയമായും അത് (തന്നെ- മാത്രം)", "പിശാച് (തന്നെയാണ്- മാത്രമാണ്)", "ചെയ്കയില്ല", "നാം ഒഴിവ് (താമസം) നൽകുന്നത്", "ഗുണ(കര)മാണെന്ന്", "അവർക്ക് വഴിയെ കഴുത്താഭരണമാക്കപ്പെടും. കണ്ഠമാല ഇടപ്പെടും". All 122 `ar` are found in their verses (`npm run check`).
- `[p. N]` markers 895, 896, 897, 898, 900, 901, 902, 903; none for p. 894 (in part 18) and none for p. 899, which holds only panels and the word table (as parts 11–18 left such pages). [p. 895], [p. 900], [p. 901] and [p. 902] stand at the start of the commentary below the tables, as in parts 07–18. Page turns: "Jabir (r) too was in that group, *[p. 896]* Ibn Ishaq (r) and others have stated" (അക്കൂട്ടത്തിലുണ്ടാ / യിരുന്നതായി); "they were *[p. 897]* not able" (സാധിച്ചി / ല്ല); "that it was with *[p. 898]* favour and generosity from Allah" (അല്ലാഹുവിങ്കൽ നിന്നുള്ള / അനുഗ്രഹവും…; English word order puts "from Allah" after the marker). Right.
- Honorifics, counted page by page: ﷺ printed 16 times (p. 895: 3, നബിﷺക്ക്, നബി ﷺയുടെ, നബിﷺയുടെ; p. 896: 6, including the footnote's നബിﷺയുടെ ശേഷം; p. 897: 3; p. 898: 1, മുഹമ്മദ് നബിﷺ; p. 900: 2, നബി തിരുമേനിﷺക്ക്, നബിﷺയെ; p. 903: 1, നബിﷺ; none on pp. 899, 901, 902, nor in this part's portion of p. 894); the English has 16, the same on every page. Bare തിരുമേനി 4 times (p. 895: 2; p. 896: 2), "the noble one" 4 times; നബി തിരുമേനിﷺ (p. 900) "the noble Prophet ﷺ" (as Al-Baqarah part 02). (r) printed 10 times (p. 895 Jabir; p. 896 Ibn Ishaq, 'Abdullah, Jabir twice, Mu'awiyah; p. 897 Ibn Jarir; p. 898 Ibn 'Abbas, Bukhari; p. 902 Ibn Kathir); the English has 10. (a) once (p. 898 Ibrahim); the English has 1. Not printed and not added: "റസൂലിനും" (v. 172), "റസൂലുകൾക്ക്", "റസൂലുകളിലും" (p. 901), "റസൂലിന്റെയും" (p. 903).
- Quran quotations (5), each byte-identical to `data/quran-uthmani.json`: p. 897 **قَالَ لَهُمُ ٱلنَّاسُ** (3:173), **فَزَادَهُمۡ إِيمَٰنٗا وَقَالُواْ** (3:173), **مِنۢ بَعۡدِ مَآ أَصَابَهُمُ ٱلۡقَرۡحُ** (3:172); p. 898 **حَسۡبُنَا ٱللَّهُ وَنِعۡمَ ٱلۡوَكِيلُ** and **إِنَّ ٱلنَّاسَ قَدۡ جَمَعُواْ لَكُمۡ** (3:173, inside the Bukhari report). The printed "...." stands to the left of the Arabic in the first, second and fifth (in the right-to-left Arabic, after the phrase, as part 18 settled for 3:167): placed after, as the translator did; the third and fourth have no dots, and none in the English. Other Arabic from the image: **بَدْر الصَغِير** (p. 897, 300 dpi crop), **والله اعلم** (p. 898, unvowelled as printed), **غَيْب** (p. 901).
- References and keys as printed: "(9: 55, 85; 23:55, 56; 68:44, 45 …)", "(18:6; 26:3 …)", "സൂ: അൽബക്വറഃ: 3-ാം വചനത്തിന്റെ" → "Su: Al-Baqarah: the 3rd verse", "സൂ: അൻആം: 50; നംല്: 65; ജിന്ന്: 26;" → "Su: An'am: 50; Naml: 65; Jinn: 26;", "(ബു.)" → "(Bu.)", "(ബു; മു.)" → "(Bu; Mu.)".

## Corrections made (before → after)

### Meaning

1. p. 902, "‘അല്ലാഹു അവന്റെ അനുഗ്രഹത്താൽ നൽകിയതിൽ ലുബ്ധത കാണിക്കുക’": -ആൽ is "by" (the verse panel has "അനുഗ്രഹത്തിൽ നിന്ന്", "from"; the author's paraphrase here differs). "what Allah has given out of His favour" → "what Allah has given by His favour".
2. p. 903, "…മാലയിട്ട് ശിക്ഷിക്കുമെന്നും (ബു.) അന്യന്റെ ഭൂമി…": the -ഉം of "ശിക്ഷിക്കുമെന്നും" ("and that") joining the two hadith reports was dropped. "garlanded and punished (Bu.) that on the one who encroached" → "garlanded and punished (Bu.) and that on the one who encroached".

### Printed punctuation not mirrored

3. p. 896 footnote, "ക്വുറൈശീ പ്രമാണികളിലെ ഒരു പ്രധാനിയായിരുന്നു അബൂസുഫ്യാൻ ഇസ്ലാമിനെതിരിൽ…": the 300 dpi crop shows no stop after "അബൂസുഫ്യാൻ" (amanithafseer.com the same); the English had added one. Mirrored as the translator did with the other missing stops: "among the Quraish leaders. It was he who led" → "among the Quraish leaders it was he who led".
4. p. 897, "(അതവർക്ക് വിശ്വാസം വർദ്ധിപ്പിക്കുകയും, …": the text layer has "(-അതവർക്ക്", but the 300 dpi crop shows no dash after the bracket. "(-it both increased faith for them" → "(it both increased faith for them".

### Renderings not consistent within the part

5. p. 903, കെട്ടിപ്പൂട്ടിവെക്കുക: "കെട്ടിപ്പൂട്ടിവെക്കുന്ന സ്വത്തുക്കളെ" was "the properties hoarded up", while "അത് കെട്ടിപ്പൂട്ടിവെക്കുവാനും" in the last paragraph of the same page is "to lock it up and keep it". "the properties hoarded up without spending" → "the properties locked up and kept without spending".

DOUBT wording only (not counted): the p. 896 DOUBT on "ഹുസാം" now says that the amanithafseer.com text has the same.

No dropped list items, may/will errors, voice changes, reversed negations, changed reported speech, added ﷺ, silently corrected misprints, or added or re-vowelled Arabic were found.

## The translator's open items

- **(1) DOUBT.** p. 896 "അബ്ദുല്ലാഹിബ്നു ഹുസാമും (റ)": clearly printed so on the image, and amanithafseer.com has the same. The image does not settle it; Jabir's father is generally known as 'Abdullah ibn 'Amr ibn Haram. DOUBT kept, "Husam" as printed (reworded as above).
- **(2) TNs.** p. 895 ക്ഷണനം: clearly printed; Ali 'Imran part 06 (p. 765) has the same TN for the same printed word, and its checker kept it. Kept. p. 896 ക്ഷണനം again: short TN pointing back; kept (it marks each occurrence, as the first TN announces). p. 897 "ഹംറാംഉൽ അസദ്" against "ഹംറാഉൽ അസദിലെത്തി" on p. 896: both clear on the images and the same in the amanithafseer.com text; a name spelt two ways is the kind of evident slip parts 08–18 mark with a TN. Kept, "Hamram al-Asad" as printed.
- **(3) Slips kept without TN.** All confirmed on the images: p. 896 "പ്രസ്താവിക്കുന്നത്.  എന്നത്രെ പല…" (stray stop; English "… in the 173rd verse. so indeed many …") and "അവർ കരുതി അവർ വേഗം" (no punctuation); p. 897 "( بَدْر الصَغِير )’" (closing quote with no opening one); p. 898 no stop after "വക്താക്കൾ"; p. 901 no stop after "അതറിയുകയില്ല"; v. 180 panel no stop after "…കഴുത്താഭരണമാക്കപ്പെടുന്നതാണ്" and none at the end; p. 903 "മാലയിടപ്പെടുമെന്ന്. (ബു; മു.) മറ്റു നബിﷺ" (stray stop; മറ്റു for മറ്റും, "and so on"); v. 179 "ദുതൻമാരിലും", "ഉദ്ദേശ്യം" / "ഉദ്ദേശം". Two more of the same kind found by the checker: corrections 3 and 4. Right.
- **(4) Arabic, word table, honorifics, heading.** See above: five Quran quotations byte-identical, dots after the bold Arabic as the image shows; words.json 122 entries, each `ar` in its verse; ﷺ 16, (r) 10, (a) 1, bare തിരുമേനി 4 "the noble one"; "### Section – 18" above the verse 172–174 group, where the print has it.
- **(5) Renderings.** Kept, as in earlier parts: സൂക്ഷിക്കുക "be on guard", സൂക്ഷ്മത പാലിക്കുക "observe caution"; നേർമാർഗം "the straight way" (Al-Baqarah parts 04, 11, 26); ആക്ഷേപകരം "reprehensible" (Al-Baqarah part 47); വിവക്ഷ "the intended sense" (Al-Baqarah parts 24, 50); മാനദണ്ഡം "criterion" (Al-Baqarah part 13); നാഴിക "nazhika"; ദാനധർമാദി സൽക്കാര്യങ്ങൾ "good causes such as almsgiving"; അനന്തരാവകാശം "inheritance" (Al-Baqarah parts 28, 38); ചീത്ത "bad" (Al-Baqarah part 46, ٱلۡخَبِيثَ "what is bad"); സൂക്ഷ്മജ്ഞാനി "One of minute knowledge", in line with خَبِير "One who knows minutely" (Al-Baqarah parts 39, 47; part 16); ഭരമേൽപിക്കപ്പെടുന്നവൻ "One relied upon", in line with ഭരമേൽപിക്കുക "rely" (parts 13, 17); നബി തിരുമേനി "the noble Prophet" (Al-Baqarah part 02); രിവായത്ത് "riwayah"; ദൂതൻ "messenger", റസൂൽ "Rasul". The new renderings in the brief are reasonable and used consistently; they are listed below. കെട്ടിപ്പൂട്ടിവെക്കുക: correction 5.

## Checked and left as they are

- v. 172 "[പ്രശംസനീയർ] തന്നെ അവരിൽ നിന്ന്…" → "[praiseworthy ones] indeed for those from among them…": the author's square bracket and the following "തന്നെ" kept in his order. Left.
- v. 173 "അവരോട് മനുഷ്യൻമാർ പറഞ്ഞു … (ആ) മനുഷ്യർ (ആളുകളെ)" → "men said to them … (those) people have gathered (persons)": മനുഷ്യൻമാർ / മനുഷ്യർ / ആളുകൾ kept apart as men / people / persons, and so in the commentary. Left.
- p. 896 "മാത്രമേ വീട്ടിലുള്ളൂ" (present tense) → "were in the house": past for the narrative. Left.
- p. 895 "വിനകൾ" → "harms". Left.
- p. 898 the Bukhari report opens with ‘ before حَسۡبُنَا and closes after "പറയുകയുണ്ടായി."; English the same. "ഞങ്ങൾക്ക്" (exclusive "us") in the gloss → "us". Left.
- p. 903 "അതിന്റെ ഉടമസ്ഥനും മാലയിട്ട് ശിക്ഷിക്കുമെന്നും" → "its owner too will be garlanded and punished": the active "ശിക്ഷിക്കും" with no named subject given as a passive. Left.
- `part.json` verses "172-180", pages "894-903", PDF pages "186-195": correct.

## Open doubts for the reviewer

1. **p. 896, "അബ്ദുല്ലാഹിബ്നു ഹുസാം"** ("Husam"): Jabir's father is generally known as 'Abdullah ibn 'Amr ibn Haram; "ഹുസാം" may be a slip for "ഹറാം". DOUBT kept, translated as printed.
2. **p. 897, "ഹംറാംഉൽ അസദ്"** beside "ഹംറാഉൽ അസദ്" (p. 896): TN, rendered "Hamram al-Asad" as printed. The reviewer may prefer "Hamra' al-Asad" in both places.
3. **ക്ഷണനം** (pp. 895, 896): TN for ക്ഷണം "invitation", as part 06.
4. **Printing slips** (item 3 and corrections 3–4) are mirrored without TN.
5. **Earlier open doubts still apply** (not in this part): see parts 01–18 and the Al-Baqarah parts.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഉത്തരം നൽകുക | istajabu | give answer |
| പ്രശംസനീയർ | — | praiseworthy ones |
| മനുഷ്യൻമാർ / മനുഷ്യർ / ആളുകൾ | al-nas | men / people / persons |
| ഭരമേൽപിക്കപ്പെടുന്നവൻ | al-wakil | One relied upon |
| (കാല) താമസം ചെയ്തുകൊടുക്കുക / ഒഴിവ് (താമസം) നൽകുക | numli | grant (time-)delay / give respite (delay) |
| അപമാനകരമായ / നിന്ദിക്കുന്ന | muhin | disgraceful / abasing |
| ദുഷിച്ചത് / ചീത്ത | al-khabith | the corrupt / the bad |
| ലുബ്ധത / പിശുക്ക് / പിശുക്കൻമാർ | bukhl | miserliness / stinginess / misers |
| കഴുത്താഭരണം / കണ്ഠമാല / മാലയിടുക | sa-yutawwaqun | neck ornament / neck garland / garland |
| അനന്തരാവകാശം | mirath | inheritance (as Al-Baqarah parts 28, 38) |
| സൂക്ഷ്മജ്ഞാനി | khabir | One of minute knowledge |
| സൂത്രം / ഇനാം | — | ruse / prize |
| കുപ്രചരണം / കള്ള പ്രചരണം | — | evil propaganda / false propaganda |
| ത്യാഗസന്നദ്ധത | — | readiness for sacrifice |
| ചെറിയ ബദ്ർ ( بَدْر الصَغِير ) | Badr al-Saghir | the Lesser Badr |
| നിർവീര്യരാക്കുക | — | make devoid of vigour |
| സന്ദേശവാഹകർ | — | message-bearers |
| ആലങ്കാരികപ്രയോഗം / ഗതികേട് | — | figurative usage / plight |
| കെട്ടിപ്പൂട്ടിവെക്കുക | — | lock up and keep (correction 5) |
