# Check: Ali 'Imran part 20 (verses 181–190)

Checked on 2026-11-18 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/03. Al-'Imran.pdf`, PDF pages 195–205 (book pp. 903–913). I rendered each page at 150 dpi and read it once in full beside the full `ml2uni` text layer. 300 dpi crops: p. 907 "( بعل )"; p. 908 "ചെയ്യപ്പടുന്നതാണ്" (v. 186 panel) and "അവർ ഭാഗ്യം പ്രാപിച്ചു" (v. 185 table). 600 dpi crops: p. 913 "أولوا الألبَابِ" (see correction 2).
- **Boundaries.** Part 19 ends on p. 903 with "… എന്നൊക്കെയാണ് അവസാനം അല്ലാഹു ഓർമിപ്പിക്കുന്നത്.". Directly below it are "വിഭാഗം - 19" and the verse 181 panel, and this part starts there. The p. 903 marker is in part 19. This part ends on p. 913 with the verse 190 commentary, "… അവർ എങ്ങനെയുള്ളവരാണെന്ന് മനസ്സിലാക്കാം:-", directly above the verse 191 panel, which is left for part 21. Nothing in between is missing.
- Files compared: `part.json`, `verses.json` (verses 181–190), `words.json` and `commentary.md`. `words.json` has 123 entries (181: 15; 182: 7; 183: 19; 184: 9; 185: 16; 186: 15; 187: 15; 188: 12; 189: 7; 190: 8). Every printed gloss is there, in order.
- Groups:
  - "### Section – 19" stands above the first group, where the print has "വിഭാഗം - 19" (p. 903).
  - *[Verses 181–182]*: panel 181 p. 903; panel 182, the table and the commentary p. 904.
  - *[Verses 183–184]*: panels and the start of the table p. 905; rest of the table and the commentary p. 906, with the footnote (\*) at the foot of p. 906. The commentary continues on p. 907, with the second footnote (\*) at the foot of p. 907.
  - *[Verses 185–186]*: panels and the start of the table p. 908; rest of the table and the commentary p. 909; commentary p. 910.
  - *[Verses 187–189]*: panels 187 and 188 p. 910; panel 189, the table and the commentary p. 911, with the footnote (\*) at the foot of p. 911 running onto the foot of p. 912. The commentary continues on pp. 912–913.
  - "### Section – 20" and *[Verse 190]*: panel, table and commentary p. 913.
  - All of this is right.
- **Footnotes.** Each footnote is placed after the paragraph that carries its marker, as part 19 did:
  - The p. 906 note follows the paragraph that ends on p. 907 with "അതിന്റെ ചുരുക്കം ഇതാണ് :-". It therefore stands between ":-" and the Bible summary.
  - The p. 907 note follows the paragraph ending "… ശ്രമം നടത്തിയത്. (\*)".
  - The p. 911 note follows the paragraph ending on p. 912 with "… ആദ്യത്തെ വചനത്തിന്റെ സാരം.". Its p. 912 continuation ("ഏർപ്പാട് ചെയ്തുവെന്നും … ഉണ്ടായിട്ടില്ലെന്നത് തീർച്ചയാണ്.") is all present.
  - All three are right.
- I compared every English sentence of the commentary and the three footnotes with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images in the printed order. Points confirmed as printed:
  - v. 181 the opening quotation mark before "കത്തിയെരിയുന്ന" is ’ and there is no closing quotation mark.
  - v. 186 "ചെയ്യപ്പടുന്നതാണ്" (300 dpi crop).
  - v. 188 "വിചാരിക്കേണ്ടാ." and then "വിചാരിക്കേണ്ട.".
  - Tables: "വേദഗ്രന്ഥം നൽകപ്പെട്ട ." (stray stop, v. 186) and "അവർ വാങ്ങിക്കൊണ്ടിരുന്നത്." (v. 187).
  - All 123 `ar` entries are found in their verses, in order.
- `[p. N]` markers: 904, 906, 907, 909, 910, 911, 912, 913.
  - There is no marker for p. 903, which is in part 19.
  - There is none for pp. 905 and 908, which hold only panels and word tables, as earlier parts left such pages.
  - [p. 904], [p. 906], [p. 909] and [p. 911] stand at the start of the commentary below the tables.
  - Page turns: "the People of the *[p. 910]* Book" (വേദ / ക്കാരിൽ); "with their customary practices *[p. 912]* do not accord" (മാമൂലാചാരങ്ങൾക്ക് / നിരക്കാത്തതും); "‘Know, *[p. 913]* to take it" (‘അറി / യുക). These are right. For [p. 907], see correction 3.
- Honorifics, counted page by page:
  - ﷺ is printed 4 times (p. 906: 2; p. 910: 1; p. 911: 1). The English has 4. "മുഹമ്മദിനെ" (p. 906) is printed without ﷺ and none is added.
  - (r) is printed 4 times (p. 910 Ibn Kathir; p. 912 Razi; p. 913 Razi, Ibn Kathir). The English has 4.
  - (a) is printed 3 times (p. 907 Ilyas; p. 912 Musa twice). The English has 3.
- Quran quotations (2), now byte-identical to `data/quran-uthmani.json` (see correction 1):
  - p. 904, 2:245 / 57:11: **مَّن ذَا ٱلَّذِي يُقۡرِضُ ٱللَّهَ قَرۡضًا حَسَنٗا**. The print has مَنْ. The verse text of the data is used, as earlier parts did with similar printed forms (part 03, 4:80).
  - p. 904, 3:182: **أَنَّ ٱللَّهَ لَيۡسَ بِظَلَّامٖ لِّلۡعَبِيدِ**.
- Other Arabic, transcribed from the image:
  - **بعل** (p. 907, unvowelled, 300 dpi crop).
  - **والله الموفق** (p. 910, unvowelled).
  - **أولوا الألبَابِ** (p. 913, correction 2).
- References and keys as printed: "(Look at Judges: 6, at 21; 13, at 20; Leviticus: 9, at 24 and so on.)", "(1. Kings: Ch: 18, 19),", "(Page: 43)", "(in Kings, 2nd book, chapters 22 and 23)", "(Deut; 6, at 4- 7)", "(Deut: 31, at 9- 13)", "Al-Baqarah : the 269th verse".

## Corrections made (before → after)

### Arabic

1. p. 904, the two Quran quotations were not byte-identical to `data/quran-uthmani.json`. In 2:245 the fatha and shadda of مَّن were stored in the opposite order. In 3:182 the quotation had the same kind of mark-order difference. Both are now copied from the data. The text looks the same on screen, but the bytes now match.
2. p. 913, **أُولوا الألبَابِ** → **أولوا الألبَابِ**. The 600 dpi crop shows no damma on the first alif, and the text layer has none either. The rest is as printed: one mark above the لا ligature (its hamza), fatha on the first ب and kasra under the last.

### Page marker

3. p. 906/907, "ആ ദൃഷ്ടാന്തം / കണ്ടിട്ട് പിന്നെയും ആ പ്രവാചകനെ നിഷേധിക്കുകയും കൊലപ്പെടുത്തുവാൻ ശ്രമിക്കുകയും ചെയ്തതിന് ബൈബ്ളിൽ തന്നെ ഉദാഹരണം കാണാം": in the English, seeing the sign, rejecting the prophet and trying to kill him all stood before the [p. 907] marker, although all of it is on p. 907. The sentence was reordered so that only the p. 906 words come before the marker:
   - Before: "an example of rejecting that prophet and trying to kill him, even after seeing that sign, the rite of offering performed by a prophet being consumed by divine fire, *[p. 907]* can be seen in the Bible itself"
   - After: "for that sign, the rite of offering performed by a prophet being consumed by divine fire, *[p. 907]* being seen and still that prophet being rejected and attempts being made to kill him, an example can be seen in the Bible itself"
   - പിന്നെയും is now "still" rather than "even after".

I found no dropped sentences, may/will errors, voice changes, reversed negations, changed reported speech, added honorifics, or silently corrected misprints.

## The translator's open items

- **(1) DOUBT, p. 913, "അല്ലാഹുവിന്റെ വഴിപാടിലും".** The image is clear. In everyday use വഴിപാട് means "offering"; beside "നേരായ വഴി" it evidently stands for obedience (വഴിപ്പെടുക, "submit"). The image cannot settle this, so the DOUBT is kept, with "obedience" in the text.
- **(2) TNs, judged against rules 6–7 and the earlier parts:**
  - v. 185 table "അവർ ഭാഗ്യം പ്രാപിച്ചു" against "അവൻ" in the panel and in the table's own "അവൻ അകറ്റപ്പെട്ടു": confirmed at 300 dpi. A plural where the singular is meant inside a word table was marked with a TN in Al-Baqarah part 32 (കഠിനമായവർ). Kept.
  - "ബാലയുടെ" / "ബാലയെ" (p. 907): the same passage has ബാൽ / ബാലിന്റെ everywhere else, so the name is spelt two ways. Parts 08–19 mark this kind of slip with a TN (part 19, "Hamram"). Kept, with "Bala" as printed.
  - "ആഹാബി രാജാവ്" (p. 907): everywhere else the name is ആഹാബ്. Kept, with "Ahabi" as printed.
  - Jezebel (pp. 907): ഈസബെൽ in the text, ഈസബേൽ and ഈസാബേൽ in the note. All three are clear on the image. The English is the same in each place, so this TN only informs the reader; it follows the same practice as the other name-spelling TNs. Kept. The reviewer may prefer to drop it.
  - "തിൽകിയാവ്" (p. 911 note): Hilkiah is the high priest in the passage the author himself cites (2 Kings 22). A TN comparing the print with the Bible passage it cites has precedent: the "1 Kings 6: 1" and "Herod" TNs in earlier Ali 'Imran parts. Kept, with "Tilkiah" as printed.
  - "ഏഴേഴ് ദിവസം" (p. 912): the author cites Deut 31:9–13, and verse 10 there says every seven years. Same precedent as above. Kept, with "seven-seven days" as printed.
- **(3) Slips kept without TN.** All confirmed on the images:
  - p. 904: the 2:245 bracket "(ആരാണ് … കൊടുക്കുന്നവർ?! (2: 245; 57: 11)" is never closed; and "… കേട്ടുകൊണ്ടിരിക്കുന്നുണ്ട്.’" has a closing quotation mark with no opening one.
  - p. 906 "സാക്ഷിയാണല്ലോ. എന്ന്" (stray stop; English "… surely. thus Allah").
  - p. 907 "എത്രത്തോളം രണ്ട് തോണിയിൽ കാൽവെക്കും." (no question mark) and "ആ ഹാബിന്റെ" (space).
  - p. 911 note "യരൂശലേമി" beside "യെരുശലേമിൽ" (both "Jerusalem").
  - p. 913: the Ibn Kathir quotation is never closed.
  - All of these are mirrored as the translator had them. Right.

## Checked and left as they are

- p. 907, "അദ്ദേഹം ആവശ്യപ്പെട്ടപ്രകാരം … ഒരുമിച്ചുകൂട്ടി" → "as he demanded, he gathered together". The Malayalam names no subject for ഒരുമിച്ചുകൂട്ടി, and the English keeps that ambiguity. Left.
- p. 913, "മറ്റുള്ളവർ തന്നെ വിശേഷിപ്പിക്കണമെന്ന്" → "others should describe him": തന്നെ is the reflexive object ("him(self)"), following "താൻ". Left.
- p. 913, "വേണ്ടപ്പെട്ട കാര്യം" → "a proper thing". Left.
- p. 913, "വേണ്ടാ," → "Let that be;". Left.
- `part.json`: verses "181-190", pages "903-913", PDF pages "195-205". Correct.

## Open doubts for the reviewer

1. **p. 913, "വഴിപാട്"**: rendered "obedience" (of Allah), with "offering" as the other option.
2. **TNs on name spellings** (Bala, Ahabi, Jezebel, Tilkiah) and on "seven-seven days": the reviewer may prefer the standard forms (Baal, Ahab, Hilkiah) and may wish to drop the Jezebel TN.
3. **Printing slips** (item 3) are mirrored without TN.
4. **Earlier open doubts still apply** (not in this part): see parts 01–19 and the Al-Baqarah parts.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ബലി [യാഗ] കർമം / യാഗകർമം | qurban | rite of sacrifice [offering] / rite of offering |
| യാഗം / ഹോമം / പ്രായശ്ചിത്തം | — | offering / burnt offering / atonement |
| യാഗപീഠം | — | altar of offering |
| ദിവ്യാഗ്നി | — | divine fire |
| ജൽപിക്കുക / ജൽപനം | — | babble |
| ഏടുകൾ | al-zubur | pages |
| വഞ്ചനയുടെ വിഭവം | mata' al-ghurur | resource of deception |
| ദൃഢകാര്യങ്ങൾ | 'azm al-umur | firm matters |
| ഉറപ്പ് (കരാറ്) | mithaq | assurance (pact) |
| രാജാധിപത്യം | mulk | sovereign dominion |
| യഹോവ | — | Jehovah |
| ബാൽ | — | Baal |
| ഏലിയാവ് | — | Elijah |
| കൂടാരപ്പെരുന്നാൾ | — | the Feast of Tabernacles |
| വസ്വിയ്യത്ത് | wasiyyah | wasiyyah |
| ഉലുൽ അൽബാബ് / (സൽ) ബുദ്ധിയുള്ളവർ | ulul albab | ulul albab / those who have (good) reason |

## Later consistency fix (2026-11-18)

- വേദക്കാർ was rendered "People of the Book" three times (pp. 904, 909, 912 area); parts 02–19 use "People of the Scripture". Changed to "People of the Scripture" in all three places.
