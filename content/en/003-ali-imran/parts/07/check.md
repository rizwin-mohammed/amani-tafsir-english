# Check: Ali 'Imran part 07 (verses 58–68)

Checked on 2026-11-04 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/03. Al-'Imran.pdf`, PDF pages 68–78 (book pp. 776–786). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer. 300 dpi crops: p. 782, the mark between "مِنْ دُونِ اللَّهِ" and "(അവർ-" (correction 2; one earlier crop of that spot was mis-aimed). The PDF text layer (without conversion) was used to tell the two printed forms of the au-sign apart on p. 784 (see item 2 below). The amanithafseer.com text was not needed.
- **Boundaries.** Part 06 ends on p. 776 with "… മേൽ വിവരിച്ച വിഷയങ്ങളെ ചൂണ്ടിക്കൊണ്ടു അടുത്ത വചനത്തിൽ അല്ലാഹു പറയുന്നു:"; directly below is the verse 58 panel. This part starts there (p. 776's [p. N] marker is in part 06). It ends on p. 786 with "… അദ്ദേഹവുമായി നിങ്ങൾക്ക് ബന്ധമില്ലാതായിരിക്കുന്നു എന്ന് താൽപര്യം."; directly below is the verse 69 panel. Nothing is missing. "വിഭാഗം - 7" is printed on p. 780 after "… 63-ാം വചനത്തിൽ അടങ്ങിയിരിക്കുന്നത്." and directly before the verse 64 panel; "### Section – 7" stands there, before *[Verse 64]*. Right.
- `part.json`, `verses.json` (verses 58–68), `words.json` (113 entries: 58: 6; 59: 11; 60: 4; 61: 19; 62: 9; 63: 4; 64: 20; 65: 8; 66: 14; 67: 8; 68: 10), `commentary.md`.
- Groups: *[Verse 58]* (panel, table and commentary p. 776) | *[Verses 59–60]* (panels, table and commentary p. 777; commentary ends p. 778) | *[Verses 61–63]* (panels p. 778; table and commentary p. 779; commentary ends p. 780) | *[Verse 64]* (panel begins p. 780 after the section heading; end of panel, table and commentary p. 781; commentary to p. 783) | *[Verses 65–67]* (panel 65 begins at the foot of p. 783; panels 65–67 and the one table for all three on p. 784; commentary p. 785) | *[Verse 68]* (panel and the first table entry p. 785; rest of table and commentary p. 786). Right.
- Every English sentence of the commentary was compared with the Malayalam on the images, in order. No sentence is missing and none is added. There are no footnotes in these pages.
- `verses.json` and every `words.json` gloss match the images in the printed order, including: v. 61 "ശേഷം,അതിൽ" (no space after the comma) and the closing ’ with no stop after "ആ(ക്കുവാൻ പ്രാർത്ഥി)ക്കുക"; v. 59 "(അതാ)അതുണ്ടാകുന്നു!"; v. 64 the opening ‘ before "വേദക്കാരേ" closed after "(ഉള്ളതിലേക്ക്).’", and the second ’ after "വഹിച്ചുകൊള്ളുവിൻ." with no opening quote of its own; v. 65 "(എന്നിരിക്കെ)!"; v. 67 "‘മുശ്‌രിക്ക്’ [ബഹുദൈവവിശ്വാസി]കളിൽപെട്ടവനായിരുന്നതുമില്ല."; table entries "അതുനാം ഓതിതരുന്നു", "ആയത്ത് (ദൃഷ്ടാന്തം)കളായിട്ടു", "എനി (അതിനാൽ) വല്ലവരും", "ഉള്ളഴിഞ്ഞപേക്ഷിക്കുക (നമുക്ക് ഭക്തിയോടെ പ്രാർത്ഥിക്കാം)", "സ്വന്ത(ദേഹ)ങ്ങളെയും", "എന്നിട്ട് (എനി) അവർ തിരിഞ്ഞുകളഞ്ഞെങ്കിൽ", "ഇറക്കപ്പെട്ടിട്ടുമില്ല താനും, ഇറക്കപ്പെടാത്ത സ്ഥിതിക്ക്" (space printed mid-line), "ഹേ (അറിയുക) നിങ്ങൾ", "മുസ്‌ലിമായ, കീഴൊതുങ്ങിയവൻ", "യാതൊരുകൂട്ടർ തന്നെ", "രക്ഷാധികാരി (ബന്ധു- സഹായി- മിത്രം) ആകുന്നു". All 113 `ar` are found in their verses (`npm run check`).
- `[p. N]` markers 777–783 and 785–786. P. 784 holds only the verse 65–67 panels (after the first lines of panel 65 on p. 783) and their word table, with no commentary: no marker, as part 06 left p. 767 (panels and table only) without one. Confirmed. [p. 777], [p. 779], [p. 781], [p. 785] and [p. 786] stand at the start of the commentary below the panels and tables, as in part 06. Page turns: "as regards Him *[p. 778]*" (അവനെ / സംബന്ധിച്ചിടത്തോളം), "with the Prophet ﷺ, *[p. 780]* to go back" (ചെയ്ത് / തിരിച്ചുപോകുകയുമാണ്), "concur in *[p. 782]*" (… പറഞ്ഞിരിക്കുന്ന / ത്.), "the Sunnah of the Prophet ﷺ *[p. 783]*" (എതിരാ / ണെന്ന്). All right.
- Honorifics, counted page by page: ﷺ printed 16 times (p. 776: 2; p. 777: 1; p. 779: 4; p. 780: 1; p. 781: 3; p. 782: 3; p. 783: 1; p. 785: 1; none on pp. 778, 786); the English has the same on every page. (a) printed 14 times (p. 776: 2; p. 777: 4; p. 779: 1; p. 783: 2; p. 785: 4; p. 786: 1); the English has 14. (r) printed 4 times (p. 779 Ali, Fatimah, Hasan, Husain; p. 782 'Adiyy ibn Hatim; p. 783 Baidawi; p. 785 Muhammad ibn Ishaq); the English has 4. None added at the bare "തിരുമേനി" (p. 782), "നബി വചനവും" (p. 783) or "മുഹമ്മദ് നബിയും" (p. 786).
- References as printed: 61st verse, 63rd verse, (الانبياء: ٢٥) in Arabic, (Anbiya'), Suratut Tawbah, (9: 31), (Ti).

## Corrections made (before → after)

### A clause not translated

1. p. 782–783, "… അത് അല്ലാഹുവിന്റെ ക്വുർആനും, നബിﷺ യുടെ സുന്നത്തിനും എതിരാണെന്ന് വ്യക്തമായിരുന്നാലും": വ്യക്തമായിരുന്നാലും ("even if it is clear") had not been rendered. "even if it is against Allah's Quran and the Sunnah of the Prophet ﷺ" → "even if it is clear that it is against Allah's Quran and the Sunnah of the Prophet ﷺ".

### Meaning

2. p. 776, "… മതിയായ ലക്ഷ്യങ്ങളും, ക്വുർആന്റെ ഉൽബോധനങ്ങളുമായിക്കൊണ്ട് നബിﷺ ക്കു അല്ലാഹു അവതരിപ്പിച്ചു കൊടുക്കുന്നതാണ് …": -ആയിക്കൊണ്ട് says the information itself *is* the evidences and admonitions (as the English of verse 58 has it, "as evidences, and as wise admonition"), not that it comes "along with" them. "sends down to the Prophet ﷺ along with evidences sufficient for … and with the admonitions of the Quran" → "sends down to the Prophet ﷺ as evidences sufficient for … and as the admonitions of the Quran".

### Printed mark not mirrored

3. p. 782, a closing ’ is printed between the Arabic of 9:31 and "(അവർ- വേദക്കാർ- …" (300 dpi crop: "مِنْ دُونِ اللَّهِ’(അവർ-"). Other stray quotation marks are mirrored in this part and in part 06 (e.g. "….. **الصف**’"). "**… مِّن دُونِ ٱللَّهِ** (They - the People of the Scripture - …" → "**… مِّن دُونِ ٱللَّهِ**’ (They - the People of the Scripture - …".

### Wording (translator's item 4)

4. v. 64, "… റബ്ബുകളാക്കാതിരിക്കുകയും ചെയ്യുക എന്ന് (ഉള്ളതിലേക്ക്).’": "thus (to what is)" did not read as English. The author's bracket completes "come to a word …": "(to that which is) so". The words are kept and only the order of the two is turned, so that it reads "to what is thus". "besides Allah, thus (to what is).’" → "besides Allah, (to what is) thus.’"

No dropped തന്നെ/-ഉം or list items, may/will errors, tense or voice changes, reversed or "fixed" negations, changed reported speech, added ﷺ, silently corrected names or misprints, or added or re-vowelled Arabic were found apart from the above.

## The translator's open items

- **(1) Slips kept as printed without TN.** All confirmed on the images: p. 778 "അതങ്ങുണ്ടാകുകയായി അല്ലാഹു തുടരുന്നു:-" (no full stop after ആയി; the English "It just comes into being Allah continues:-" mirrors it); p. 781 "പാടില്ലെന്നും . അവന്" (stray " ." mid-sentence); p. 781 "‘വാക്ക്’ എന്ന് പദവും" (for എന്ന പദവും; the sense "the word ‘word’" is not in doubt); p. 781 the bracket opened before "ഞാനല്ലാതെ ഒരു ഇലാഹുമില്ല" and never closed ("… അയച്ചിട്ടില്ല. (അൻബിയാഉ്) അതുകൊണ്ട് …"); p. 782 "(അവർ- വേദക്കാർ- … റബ്ബുകളാക്കിത്തീർത്തു (9: 31)." with only the reference bracket closed; p. 782 "(എന്നിരിക്കെ, എന്താണിതിന്റെ ഉദ്ദേശ്യം? ) ‘നബിﷺ മറുപടി പറഞ്ഞു" (stray opening quote before നബി); p. 786 "അകന്നുപോയിരിക്കകൊണ്ട്" (for -പോയിരിക്കുകകൊണ്ട്). None changes the meaning; no TN needed. Kept.
- **(2) Line-break spacing and the old sign.** "ഒരു ഇലാഹുമില്ല | താനും" (v. 62 table), "പറഞ്ഞു | കൊള്ളുക" (v. 64, across the page turn pp. 780–781), "ശുദ്ധ | മനസ്കനും" (v. 67 panel) and "മുശ്‌രിക്കുകളിൽ | പെട്ട(വൻ)" (v. 67 table) each fall at a line end, so the image cannot show whether a space is meant; the text layer cannot settle it either. Following amanithafseer.com is a reasonable choice and the spaced forms are also used by the author mid-line elsewhere ("ഇറക്കപ്പെട്ടിട്ടുമില്ല താനും" in the v. 65 table). Kept. "അഗാധ | ജ്ഞനായ" (v. 62 panel) is one word (the table prints "അഗാധജ്ഞനായ" on one line): joined, right. "[ബഹുദൈവവിശ്വാസി] | കളിൽപെട്ടവനായിരുന്നതുമില്ല": the suffix after a bracket, as "‘മുസ്‌ലിം’കളാണ്" in v. 64; joined, right. v. 65 table "തൌറാത്ത്": the raw text layer has the e-prefix form here (`sXu-dm¯v`) and the plain form in the panel (`Xudm¯pw`, തൗറാത്തും), so the print really differs; kept as printed.
- **(3) Honorifics.** Bare "തിരുമേനി" (p. 782, "The noble one"), "നബി വചനവും" (p. 783, "the saying of the Prophet") and "മുഹമ്മദ് നബിയും" (p. 786, "the Prophet Muhammad") are printed without ﷺ; the English adds none. Right.
- **(4) Wording.** v. 64: see correction 4. p. 782 "അദ്ദേഹം: ‘അതെ’ എന്ന് സമ്മതിച്ചു." → "He agreed: ‘Yes’." The colon is printed after അദ്ദേഹം; English word order needs the verb before the quotation, and the colon then stands before ‘Yes’. Nothing is lost; kept.
- **(5) Quran quotations in the commentary.** Each compared with the printed words; no more and no less in any: p. 781 أَهۡلَ ٱلۡكِتَٰبِ (3:64); the whole of 21:25, with the author's Arabic reference "( الانبياء: ٢٥ )" kept; p. 782 9:31 from ٱتَّخَذُوٓاْ to مِّن دُونِ ٱللَّهِ, as printed. Non-Quran Arabic as printed: مباهلة (twice), الله اعلم, كلمة, والله اعلم. `npm run check` now counts 55 longer quotations in the surah: 48 exact, 0 close-but-not-exact, 7 not from the Quran (none of them from this part). words.json: 113 entries, each `ar` found in its verse.
- **(6) Renderings.** ഉൽബോധനം "admonition" (v. 58 and p. 776; ദിക്ർ glossed ഉൽബോധനം, പ്രസ്താവന "admonition, statement"); ഉപമ "parable" (as Al-Baqarah); "Mubahalah" for മുബാഹലഃ, with ശാപപ്രാർത്ഥന "prayer of curse" (the Ali 'Imran intro has "‘Mubahalah’ (to performing a mutual prayer of curse)"); നാശകാരികൾ "corrupters" and നാശകാരികളും കുഴപ്പക്കാരും "corrupters and makers of disorder"; രക്ഷാധികാരി "guardian" and ബന്ധു- സഹായി- മിത്രം "kinsman – helper – friend" (as Al-Baqarah parts 16 and 43); റബ്ബാക്കൽ "making Rabb"; പാതിരി "padre" (as parts 01 and 05) and നസ്രാണി "Nasrani" (as Al-Baqarah part 21, നസ്റാനി "Nasrani"); ഹിറക്വലിയൂസ് "Heraclius"; ബൈള്വാവീ "Baidawi" (as Al-Baqarah); അദിയ്യുബ്നുഹാതിം "'Adiyy ibn Hatim". ഇറക്കപ്പെടുക "be brought down" keeps ഇറക്കുക "bring down" apart from അവതരിപ്പിക്കുക "send down", as Ali 'Imran part 01 decided (its new term 2; Al-Baqarah parts 01–38 have "send down"). ശുദ്ധ മനസ്കൻ "one pure of mind" (v. 67), ശുദ്ധഹൃദയൻ "one pure of heart" (p. 785) and ഋജുമാനസൻ "one upright-minded" (v. 67 table; Al-Baqarah part 21 has ഋജുമാനസൻ "upright-minded", ശുദ്ധ ഹൃദയൻ "pure-hearted"): three Malayalam words, three renderings kept apart. All kept.

## Checked and left as they are

- v. 62 "And there is not any object of worship other than Allah, moreover." "And" and "moreover" both render താനും; part 06 v. 56 does the same ("and for them there will not, moreover, …"); left.
- p. 776, "he ought, surely, to have some special ranks" for "… ഉണ്ടായിരിക്കേണ്ടതല്ലെ" (a question expecting yes, "ought he not to have …"); the English keeps the sense with "surely"; left.
- p. 786, "such indeed are this prophet, the Prophet Muhammad" for "ഈ പ്രവാചകനായ മുഹമ്മദ് നബിയും"; left.
- `part.json` verses "58-68", pages "776-786", PDF pages "68-78": correct.

## Open doubts for the reviewer

1. **No DOUBT or TN markers in the text** of this part. The printing slips listed under item (1) are mirrored without TN.
2. **Line-end spacing** (item 2): four Malayalam forms follow amanithafseer.com where the line break hides whether a space is printed.
3. **Quran quotations in the commentary** copied from the Uthmani text (TRANSLATING.md rule 4), as parts 02–06 (part 02 open doubt 3).
4. **ഇറക്കുക "bring down" / അവതരിപ്പിക്കുക "send down"**: still differs from Al-Baqarah parts 01–38 (part 01 new term 2); one choice may be wanted.
5. **Earlier open doubts still apply** (not in this part): see parts 01–06 and the Al-Baqarah parts.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| മുബാഹലഃ / ശാപപ്രാർത്ഥന | mubahalah | Mubahalah / prayer of curse |
| ഉൽബോധനം | dhikr | admonition |
| ഉപമ | mathal | parable |
| നാശകാരികൾ / കുഴപ്പക്കാർ | mufsidun | corrupters / makers of disorder |
| രക്ഷാധികാരി (ബന്ധു- സഹായി- മിത്രം) | wali | guardian (kinsman – helper – friend) |
| റബ്ബാക്കൽ | — | making Rabb |
| ശുദ്ധ മനസ്കൻ / ശുദ്ധഹൃദയൻ / ഋജുമാനസൻ | hanif | one pure of mind / one pure of heart / one upright-minded |
| പാതിരി / നസ്രാണി | — | padre / Nasrani |
| ഹിറക്വലിയൂസ് | Hiraql | Heraclius |
| അദിയ്യുബ്നുഹാതിം | — | 'Adiyy ibn Hatim |
