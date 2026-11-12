# Check: Ali 'Imran part 18 (verses 164–171)

Checked on 2026-11-12 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/03. Al-'Imran.pdf`, PDF pages 178–186 (book pp. 886–894). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer. Crops at 300 dpi: p. 890 the Quran quotation with its dots; p. 892 "بَرْزَخ" and "قَبَر" (see item 1b and 4). The amanithafseer.com text was used only to compare "മുസ്ലിംകളിലൂടെ", "ക്വബ്റി ( قَبَر )" and "സ്വർണക്കിനാദി" (it has the same for each).
- **Boundaries.** Part 17 ends on p. 886 with item (3), the 'Adiyy ibn 'Umairah hadith and "… ഉദാഹരണങ്ങൾ സ്വഹാബികളുടെ ചരിത്രങ്ങളിൽ കാണാവുന്നതാണ്."; directly below is the verse 164 panel, with no section heading. This part starts there (p. 886's marker is in part 17). It ends on p. 894 with item 4, "… രാവിലെയും വൈകുന്നേരവും ലഭിക്കുന്നതാണ് എന്നും വന്നിരിക്കുന്നു.", directly above "വിഭാഗം - 18" and the verse 172 panel (left for part 19). Nothing in between is missing.
- `part.json`, `verses.json` (verses 164–171), `words.json` (98 entries: 164: 17; 165: 12; 166: 6; 167: 25; 168: 11; 169: 7; 170: 12; 171: 8; every printed gloss is there, in order), `commentary.md`.
- Groups: *[Verse 164]* (panel and table p. 886; commentary p. 887) | *[Verses 165–168]* (panels 165, 166 and 167 begin p. 887; rest of 167, panel 168 and the start of the one shared table p. 888; rest of the table and the commentary p. 889; commentary p. 890) | *[Verses 169–171]* (panel 169 begins p. 890; rest of 169, panels 170, 171 and the table p. 891; commentary pp. 892–894). Right. No heading: this part continues Section 17.
- Every English sentence of the commentary was compared with the Malayalam on the images, in order. No sentence is missing and none is added. There are no footnotes on these pages.
- `verses.json` and every `words.json` gloss match the images in the printed order, including: v. 164 "‘ആയത്ത്’ [ലക്ഷ്യം]കൾ"; v. 165 "ബാധിപ്പിച്ചിട്ടുണ്ട് നിങ്ങൾ പറയുകയോ:" (no punctuation, as printed); v. 166 panel "കൂട്ടിമുട്ടിയ" beside the table's "കണ്ടുമുട്ടിയ" (both as printed); v. 167 "[ആ കപടൻമാരോട്]", "ചെറുത്ത് നിൽക്കുവിൻ’ അവർ" (no stop), "ഞങ്ങൾ’ അറിഞ്ഞിരുന്നുവെങ്കിൽ" (stray ’); v. 168 "[അതൊന്ന് കാണാമല്ലോ]’"; v. 170 "(അഥവാ ഔദാര്യം നിമിത്തം)"; v. 171 "(സന്തോഷമടയുന്നു)" with no final stop; tables "ചെയ്തി(ട്ടുണ്ട്)", "പറഞ്ഞു(വോ)", "തടുക്കു (ചെറുക്കു)വിൻ", "അവരെ (അവർ അടുത്തതിനെ)ക്കാൾ", "സത്യം പറയുന്നവർ സത്യവാൻമാർ" (no comma), "ആഹാരം ( ഉപജീവനം)" (space, as printed), "സന്തോഷമടയുക (ശുഭാപ്തി വിശ്വാസമടയുക)യും", "പിന്നാലെ (യുള്ളവരിൽ)", "പാഴാക്കുക (വൃഥാവിലാക്കുക)യില്ല (എന്നും)". All 98 `ar` are found in their verses (`npm run check`).
- `[p. N]` markers 887, 889, 890, 892, 893, 894; none for p. 886 (in part 17) and none for pp. 888 and 891, which hold only panels and word tables (as parts 11–17 left such pages). [p. 887], [p. 889] and [p. 892] stand at the start of the commentary below the tables, as in parts 07–17. Page turns: "or else at *[p. 890]* least stand resisting" (the word is split inside "നിൽക്കുകയെ / ങ്കിലും"), "the life well familiar to us *[p. 893]* has come to an end for them" (ആ ജീവിതം / അവർക്ക് അവസാനിച്ചു…), "until he is raised *[p. 894]* (until his janazah is taken up)" (ഉയർത്തപ്പെടുന്നത് / (അദ്ദേഹത്തിന്റെ ജനാസ: എടുക്കപ്പെടുന്നത്) വരെ). Right.
- Honorifics, counted page by page: ﷺ printed 5 times (p. 889: 1, നബിﷺയൊന്നിച്ച്; p. 890: 1, നബിﷺയോട്; p. 893: 2, നബിﷺ അരുളിച്ചെയ്തതായി, റസൂൽﷺ വിലക്കുക…; p. 894: 1, റസൂൽﷺ ഇപ്രകാരം; none on pp. 887, 888, 891, 892, nor in this part's portion of p. 886); the English has 5, the same on every page. (r) printed 6 times (p. 890 Ibn Kathir; p. 893 Anas, Jabir; p. 894 Ibn 'Abbas twice, Ibn Jarir); the English has 6. (a): none. Not printed and not added: "റസൂലിനെ" and "റസൂലും" (p. 889), "റസൂലും" (p. 892), "നബി വചനങ്ങളുടെയും" and "നബി വചനങ്ങളും" (p. 893, "the sayings of the Prophet").
- References and keys as printed: "സൂ:ബക്വറഃ 129" → "Su: Baqarah 129", "സൂ: ജുമുഅഃ" → "Su: Jumu'ah", "154-ാം വചനം" → "the 154th verse", "സൂറത്തുൽ ബക്വറഃ: 154" → "Suratul Baqarah: 154", "(അ; മു.)" → "(A; Mu.)", "(ബു; മു; ന.)" → "(Bu; Mu; Na.)", "(169- 171)", "(അ; ദാ; ഹാ; ഇബ്നുജരീർ)" → "(A; Da; Ha; Ibn Jarir)" (no stop, as printed).

## Corrections made (before → after)

### Meaning

1. p. 890, "…യുദ്ധത്തിന്നിറങ്ങിയതുകൊണ്ടാണെന്നും കപട വിശ്വാസികൾ പറഞ്ഞിരുന്നു": the -ഉം ("also") of "…ആണെന്നും" was dropped; this adds to what the hypocrites said in the paragraphs before. "The hypocrites had said that it was because" → "The hypocrites had also said that it was because".
2. p. 893, "അവർ ജീവിച്ചിരിക്കുന്നവരാണെന്നും അല്ലാഹു പറയുന്ന ആ ജീവിതം": the -ഉം is on "ജീവിച്ചിരിക്കുന്നവരാണെന്നും" (that they are *also* living, though killed), not on Allah's saying. "that that life in which Allah also says that they are ones living" → "that that life in which Allah says that they are also ones living".
3. p. 887, "തത്വോപദേശങ്ങളും": the compound is തത്വ + ഉപദേശം, teachings (advices) of principle; "principles of teaching" reversed it into rules about teaching. തത്വം is "principle" (Al-Baqarah part 20). "the principles of teaching, and the guidance" → "the teachings of principle, and the guidance".

### Words added

4. v. 165 (verses.json): "thus" stood unbracketed in "do you say thus: ‘How is it…’" with nothing in the Malayalam for it ("നിങ്ങൾ പറയുകയോ: ‘…’ എന്ന്!"; the author's own "(ഇങ്ങനെ)" in v. 168 is rendered "(thus)" in brackets). "do you say thus: ‘How is it that this (happened)?’!" → "do you say: ‘How is it that this (happened)?’!"

### Renderings not as settled in earlier parts

5. p. 892 "‘ബർസഖി’ ( بَرْزَخ )ലെ" and "ക്വബ്റി ( قَبَر )ലെ": Al-Baqarah part 09 has ബർസഖ് "barzakh" (lower case, as a transliterated word). "the life in the ‘Barzakh’ … the life in the Qabr" → "the life in the ‘barzakh’ … the life in the qabr" (the author's quotation marks on ‘ബർസഖി’ kept; ക്വബ്റി has none, as printed).

DOUBT wording only (not counted): the p. 892 DOUBT on قَبَر now says that the checker's 300 dpi crop shows the same as the translator's crop, that the amanithafseer.com text has the same, and quotes the author's word as printed ("ക്വബ്റി", not "ക്വബ്റ്"); the p. 890 and p. 894 DOUBTs now say the amanithafseer.com text has the same.

No dropped list items, may/will errors, voice changes, reversed negations, changed reported speech, added ﷺ, silently corrected misprints, or added or re-vowelled Arabic were found.

## The translator's open items

- **(1) DOUBTs.** (a) p. 890 "മുസ്ലിംകളിലൂടെ ഇസ്ലാമികവേഷം അഭിനയിച്ചു": clearly printed so on the image; amanithafseer.com has the same. -ലൂടെ is "through"; the sense may be "among / along with the Muslims". The image does not settle it. DOUBT kept ("through the Muslims"). (b) p. 892 قَبَر: the 300 dpi crop shows a fatha on the qaf and a slanted fatha stroke (not a sukun circle) on the ba; amanithafseer.com has the same قَبَر. DOUBT kept, transcribed as printed (reworded as above). (c) p. 894 "സ്വർണക്കിനാദി (വിളക്കു) കളിൽ": clear on the image, amanithafseer.com the same; കിനാദി is evidently the Arabic قناديل, which the author glosses "(വിളക്കു)". DOUBT kept, "kinadi" as printed.
- **(2) TNs.** None used, and none needed under the practice of parts 08–17 (TNs only for evident slips such as a misspelt name, a wrong reference or a repeated word). The slips in item 3 are punctuation, quotation marks and spacing, and are mirrored.
- **(3) Slips kept without TN.** All confirmed on the images: v. 165 "ബാധിപ്പിച്ചിട്ടുണ്ട് നിങ്ങൾ പറയുകയോ:" (no punctuation between the clauses); v. 167 "ചെറുത്ത് നിൽക്കുവിൻ’ അവർ" (no stop) and "ഞങ്ങൾ’ അറിഞ്ഞിരുന്നുവെങ്കിൽ" (stray ’; English "Had we’ known"); v. 168 table "സത്യം പറയുന്നവർ സത്യവാൻമാർ" (no comma); v. 169 table "( ഉപജീവനം)" (space); v. 171 panel, no final stop; p. 890 the hypocrites' reply opened at "‘ഒരു യുദ്ധം" and never closed (Allah's words quoted later in the same paragraph are closed, and so are they in the English); p. 887 "…ജീവിച്ചുവരുന്ന- ഒരു റസൂലിനെ" (closing dash; English "…right along with them-."). Right.
- **(4) Arabic, word table, honorifics, keys.** p. 890 **هُمۡ لِلۡكُفۡرِ يَوۡمَئِذٍ** is found unchanged in 3:167 in `data/quran-uthmani.json`. The 300 dpi crop shows the printed "...." to the left of يَوْمَئِذٍ, which, in the right-to-left Arabic, is after the phrase: placed after it, as the translator did (the text layer puts it before). بَرْزَخ (fatha, sukun, fatha) and قَبَر: as on the 300 dpi crop. words.json 98 entries, each `ar` in its verse. Honorifics and keys: see above.
- **(5) Renderings.** Kept, as in earlier parts: ഓതിക്കൊടുക്കുക "recite and hand on" (Al-Baqarah parts 15, 20); സംസ്കരിക്കുക "refine" (Al-Baqarah parts 20, 23, 26); വിജ്ഞാനം "wisdom" (Al-Baqarah parts 20, 23, 42); ‘ആയത്ത്’ [ലക്ഷ്യം] "‘ayah’ [evidence]" (Al-Baqarah parts 30, 35, 40; Ali 'Imran part 02; the open question "evidence / aim" stays); നിയോഗിക്കുക "commission" (Al-Baqarah parts 23, 34, 41); സംഘങ്ങൾ "bands" (Al-Baqarah parts 15, 41; part 15); പിൻതിരിപ്പൻമാർ "reactionaries" (Al-Baqarah part 28); യുക്തി രഹസ്യം "wise secret" (Al-Baqarah parts 05, 39); ആഹാരം "provision", ഉപജീവനം "livelihood" (Al-Baqarah parts 10, 20, 38); രക്തസാക്ഷികൾ "martyrs", ശുഹദാക്കൾ "shuhada'", ശഹീദ് "shahid" (Al-Baqarah part 24; part 15); അവതരണഹേതു "the cause of the sending down" (Al-Baqarah parts 24, 26); സമരം "struggle" (Al-Baqarah parts 31, 34, 40); ബാധ / ആപത്ത് / വിപത്ത് "affliction / calamity / disaster" (Al-Baqarah part 24); കാപട്യം "hypocrisy" (Al-Baqarah part 02), so "showed hypocrisy"; കപടവിശ്വാസികൾ / കപടൻമാർ "hypocrites"; മൂടിവെക്കുക "cover up", ഒളിച്ചുവെക്കുക "conceal" (Al-Baqarah parts 23–26, 50); അനുമതി "permission", സമ്മതം "consent" (Al-Baqarah part 38); തടുക്കുക "ward off" (Al-Baqarah part 42); പാഴാക്കുക "waste" (Al-Baqarah part 22); അനുഗ്രഹം "favour", ഔദാര്യം "generosity" (Al-Baqarah parts 39, 42); പുണ്യം "merit" (Al-Baqarah part 27; part 09); അഥവാ "or" (parts 01–16); ദുർമാർഗം "misguidance", സന്മാർഗം "right guidance" (Al-Baqarah parts 01, 02, 26); വഴിപിഴവ് "error"; റബ്ബ് "Rabb"; വേദഗ്രന്ഥം "scripture"; നിവേദനം ചെയ്യുക "report" (part 17). ദേഹങ്ങൾ "persons" (v. 168) is not as earlier parts: open doubt 4. New terms: see the table below.

## Checked and left as they are

- v. 164 table وَيُعَلِّمُهُمُ "അവരെ പഠിപ്പിക്കുകയും" → "and teaching them": the gloss has the -ഉക form without a tense, unlike the "ചെയ്യും" of the entry before; left.
- v. 165 "രണ്ടത്ര" → "twice its like" (panel) and "twice its like (double)" (table, with the author's "(ഇരട്ടി)"). Left.
- p. 887, the long relative clause before "ഒരു റസൂലിനെ" (the Rasul who conveys … - convenient … - born among them … -) is set after "a Rasul" in English; every dash of the author kept. English word order only. Left.
- p. 889 "ദയനീയമായി പിന്നോട്ടോടിച്ചു" → "drove them back pitiably". Left.
- p. 892 ജീവൻ ("what life is") and ജീവിതം ("life") are both "life"; the English cannot keep them apart without a gloss. Left.
- `part.json` verses "164-171", pages "886-894", PDF pages "178-186": correct.

## Open doubts for the reviewer

1. **p. 890, "മുസ്ലിംകളിലൂടെ"** ("through the Muslims"): the sense may be "among the Muslims". DOUBT kept: the author's wording or a printing slip.
2. **p. 892, قَبَر**: printed with a fatha on the ba; the usual vowelling is قَبْر. Transcribed as printed, DOUBT kept.
3. **p. 894, "സ്വർണക്കിനാദി"**: "kinadi" as printed; the word is evidently قناديل (qanadil, lamps). The reviewer may prefer "qanadil".
4. **ദേഹങ്ങൾ "persons" (v. 168 panel; table "സ്വന്തങ്ങളെ (ദേഹങ്ങളെ)" "own selves (persons)")**: ദേഹം for nafs is "self" in Al-Baqarah parts 08, 12, 18 and 38, and "body" in parts 24, 30 and 36. Here the translator gave "persons", to keep it apart from സ്വന്തങ്ങൾ "own selves" in the same gloss. Left; the reviewer may want "selves" (or "bodies").
5. **മാർഗനിർദ്ദേശങ്ങൾ "the guidance" (p. 887)**: മാർഗദർശനം is also "guidance" (Al-Baqarah part 29). The reviewer may prefer "directions" for മാർഗനിർദ്ദേശം (നിർദ്ദേശം is "directions" in Al-Baqarah parts 07 and 13).
6. **തത്വോപദേശങ്ങൾ "teachings of principle"** (correction 3): no earlier rendering to follow.
7. **Printing slips** (item 3) are mirrored without TN.
8. **Earlier open doubts still apply** (not in this part): see parts 01–17 and the Al-Baqarah parts, including ലക്ഷ്യം "evidence / aim".

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ദാക്ഷിണ്യം (കനപ്പെട്ട അനുഗ്രഹം) | mann | graciousness (a weighty favour) |
| മഹാഭാഗ്യം | — | great good fortune |
| തത്വോപദേശങ്ങൾ / മാർഗനിർദ്ദേശങ്ങൾ | — | teachings of principle (correction 3) / the guidance (open doubt 5) |
| സന്മാർഗ നിരതർ | — | devoted to right guidance |
| കാപട്യം കാണിക്കുക | nafaqu | show hypocrisy |
| ചെറുത്ത് നിൽക്കുക / തടുക്കുക (ചെറുക്കുക) | idfa'u | stand resisting / ward off (resist) |
| മൂടിവെക്കുക / ഒളിച്ചുവെക്കുക | yaktumun | cover up / conceal (as Al-Baqarah parts 23–26) |
| അനുമതി / സമ്മതം | idhn | permission / consent (as Al-Baqarah part 38) |
| ദേഹങ്ങൾ | anfus | persons (open doubt 4) |
| സന്തുഷ്ടർ / സന്തോഷമടയുക / സന്തോഷം കൊള്ളുക / സന്തോഷഭരിതരാവുക | farihin / yastabshirun | joyful / rejoice / feel happiness / become filled with happiness |
| ശുഭാപ്തി വിശ്വാസമടയുക | yastabshirun | be filled with hopeful confidence |
| പാഴാക്കുക (വൃഥാവിലാക്കുക) | yudi' | waste (render vain) |
| കഷ്ടനഷ്ടങ്ങൾ | — | hardships and losses |
| അബലകൾ | — | the helpless women |
| തട്ടിപ്പ് / പരിഹാസം | — | trick / mockery |
| ഉള്ളിലിരുപ്പ് | — | inner intent |
| ആത്മീയ ജീവിതം / ഇടക്കാലം / പുനരുദ്ധാരണം | — | spiritual life / the interim / the resurrection |
| ഖണ്ഡിതമായി | — | definitively |
| ‘ബർസഖ്’ / ക്വബ്റ് | barzakh / qabr | ‘barzakh’ (as Al-Baqarah part 09; correction 5) / qabr |
| ശഹാദത്ത് | shahadah | shahadah (of dying as a martyr) |
| ജനാസ | janazah | janazah |
| കിനാദി (വിളക്ക്) | qanadil | kinadi (lamp) (open doubt 3) |
