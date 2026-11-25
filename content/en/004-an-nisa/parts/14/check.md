# Check: An-Nisa' part 14 (verses 66–70)

Checked on 2026-11-25 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 126–130 (book pp. 1049–1053). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. No higher-resolution crops were needed: the panels, tables and the four hand-typed Arabic words are clear at 150 dpi.
- **Boundaries.** Part 13 ends on p. 1049 with "… അനുകരിക്കുകയും വേണമെന്നത്രെ ഉമർ(റ) പറഞ്ഞതിന്റെ താൽപര്യം.". This part starts directly below it with the verse 66 panel (the panel starts on p. 1049, so there is no `[p. 1049]` marker in this part). It ends on p. 1053 with "… അല്ലാഹു നമ്മെ ആഗ്രഹിക്കട്ടെ. آمين", directly above "വിഭാഗം - 10" (left for part 15). Nothing between is missing. No footnotes in this part.
- Files: `part.json`, `verses.json` (verses 66–70), `words.json` (46 entries: 66: 18; 67: 5; 68: 3; 69: 15; 70: 5), `commentary.md`.
- Groups: *[Verses 66–68]* (panels pp. 1049–1050, table and commentary p. 1050, commentary to p. 1051) | *[Verses 69–70]* (panels and table p. 1051, table end and commentary p. 1052, commentary to p. 1053). No section heading. The `[p. 1050]` and `[p. 1052]` markers open the commentary of each group (the panels and tables on those pages are in `verses.json` / `words.json`), as part 13. Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images, including "സ്വന്ത [ദേഹ]ങ്ങളെ" (line break after സ്വന്ത), "അവർ - (അതെ) … ആളുകളൊഴികെ - അത് ചെയ്യുന്നതല്ല." (v. 66); "ചൊവ്വായ [നേരെയുള്ള]" (v. 68); "(അതെ)‘നബി’മാരും, ‘സ്വിദ്ദീക്വു’കളും, ‘ശഹീദു’കളും, ‘സ്വാലിഹു’കളുമാകുന്ന (അനുഗൃഹീതരുടെകൂടെ)" (v. 69); "അല്ലാഹു(തന്നെ) മതിതാനും!" (v. 70). Table: "വസതി(വീടു-പാർപ്പിടം)കളിൽനിന്ന്", "കുറച്ചു(അൽപം)ആളുകളൊഴികെ", "നമ്മുടെ അടുക്കൽ നിന്ന്(നമ്മുടെ വക)", "അവരെ നാം നടത്തുക (നയിക്കുക - ചേർക്കുക)യും ചെയ്യും", "ചൊവ്വായ, നേരെയുള്ള." (with the stop), "ശഹീദ്(രക്ത സാക്ഷി)കളും", "വളരെ(എത്രയോ) നന്നായിരിക്കുന്നു, നന്നുതാനും". The spaces in "സ്വിദ്ദീക്വുകളും (സത്യസന്ധരും)" (page turn 1051/1052) and "സ്വാലിഹു (സൽക്കർമി)കളും" (line end) fall at breaks; kept, as part 13.
- **Word tables pp. 1050 and 1051–1052.** Pairings checked by meaning and position, all in Quran order. Every `ar` is in its verse in `data/quran-uthmani.json` (`npm run check`).
- `[p. N]` markers 1050–1053. Page turns: "Allah has ordained only what, for them to do, *[p. 1051]* is possible" (ചെയ്‌വാൻ / സാധ്യമാകുന്നതും); "in Allah and in His Rasuls *[p. 1053]*, those people" (റസൂലുകളിലും / വിശ്വസിച്ചുവോ; "believed" stands before the marker because of English word order, the closest place possible). Right.
- Honorifics: ﷺ printed 5 times (p. 1051 ×2: നബിﷺ … പ്രശംസിക്കുക, നബിﷺ പറഞ്ഞതായും; p. 1053 ×3: റസൂൽ തിരുമേനിﷺയുടെ, നബിﷺയോട്, നബി തിരുമേനിﷺയൊന്നിച്ചു); the English has 5. Bare "തിരുമേനി" 3 times on p. 1053 → "the noble one" ×3, as part 13. "അവിടുന്ന്" → "he". (r) printed 2 times (Rabi'ah ibn Ka'b al-Aslami, Anas); the English has 2. References as printed: (സൂ: ഹദീദ് : 19) → (Su: Hadid : 19), (അൻകബൂത്ത് : 9) → (Ankabut : 9), (മുസ്‌ലിം) → (Muslim). The two Quran quotations are given in Malayalam only (no Arabic printed), so none is added.
- Arabic: no Quran Arabic in the commentary. Hand-typed Arabic as printed: **الصديق**, **الشهيد** (p. 1052), **الصالح**, **آمين** (p. 1053); plain letters, no marks, as on the image. The text layer has Persian-style ی / ھ in the first two; in medial position these cannot be told from ي / ه on the image, so the standard Arabic letters are kept. The spacing "siddiq ( **الصديق**)s", "shahid(**الشهيد**)s", "Salih( **الصالح**)s" follows the print.
- **Mirrored as printed, without TN** (all confirmed on the images): v. 69 panel no stop after "(അനുഗൃഹീതരുടെകൂടെ)" (on the page "അക്കൂട്ടർ വളരെ നല്ല സുഹൃത്തുക്കളും!" begins a new panel paragraph beside وَحَسُنَ أُوْلَـٰٓئِكَ رَفِيقٗا, with no stop before it); p. 1052 item (4) "സ്വാലിഹുകൾ (സദ്‌വൃത്തർ) ഇവരാണത്." with no stop before ഇവരാണത്; p. 1053 "‘മറ്റു വല്ലതുമുണ്ടോ? ‘ഞാൻ പറഞ്ഞു:" (an opening quote where a closing one belongs), Rabi'ah's outer quotation never closed, Anas's statement with no opening quote but a closing one, no stop after آمين. These are punctuation slips of the kind earlier parts mirror without TN.
- Glossary: (r), ﷺ. റബ്ബ് "Rabb", റസൂൽ "Rasul", as earlier parts.

## Corrections made (before → after)

### Words not printed

1. v. 70 panel "(എല്ലാം) അറിയുന്നവനായി അല്ലാഹു(തന്നെ) മതിതാനും!": "And Allah(Himself) is sufficient, moreover, as the One who knows (everything)!" → "Allah(Himself) is sufficient, moreover, as the One who knows (everything)!" (താനും is rendered "moreover"; the extra "And" rendered it a second time. Part 13 renders "കൽപിക്കപ്പെട്ടിട്ടുണ്ട് താനും" "they have been commanded, moreover," without "and".)
2. Table v. 70 وَكَفَىٰ "മതിതാനും": "and is sufficient, moreover" → "is sufficient, moreover" (same reason; an earlier table has "മതി, മതി താനും" "suffices, suffices moreover").

### Number

3. Table v. 69 رَفِيقٗا "സുഹൃത്തു(ക്കൾ), സുഹൃത്തായിട്ട്": "friend(s), as friends" → "friend(s), as a friend" (സുഹൃത്തായിട്ട് is singular).

No dropped sentences, reversed negations, changed conditions, number errors in the commentary, voice changes or added honorifics were found.

## Points the translator asked about

1. **ആഗ്രഹിക്കട്ടെ (DOUBT, p. 1053).** The image is clear: "അല്ലാഹു നമ്മെ / ആഗ്രഹിക്കട്ടെ." (the word starts the last line before آمين). With the accusative നമ്മെ the usual phrase is "അല്ലാഹു നമ്മെ അനുഗ്രഹിക്കട്ടെ", so a slip is likely but not certain, and ആഗ്രഹിക്കട്ടെ is a real word that gives a possible (if unusual) sense. Part 13's practice is a TN for a printed non-word whose reading carries the rendering, and a DOUBT where the reading is uncertain; this is the second case. Kept as the translator wrote it (rendered as printed, with the DOUBT giving both options).
2. **No TNs; slips mirrored without TN; hand-typed Arabic.** All confirmed on the images (see above). No TN is needed.
3. **Honorifics, references, word count, line-break spacing.** Confirmed (see above).
4. **Renderings** (checked against earlier parts by grep):
   - സ്വിദ്ദീക്വ് / ശഹീദ് / സ്വാലിഹ് "siddiq / shahid / salih", plurals "siddiqs, shahids, salihs": agree with Al-Baqarah 05 ("siddiqs") and 24 / 29 (ശഹീദ് "shahid").
   - v. 69 panel ‘നബി’മാരും "the ‘nabi’s" mirrors the author's quote marks around the transliterated stems (as ‘siddiq’s, ‘shahid’s, ‘salih’s); table നബിമാർ "nabis"; commentary നബിമാർ / പ്രവാചകന്മാർ "prophets"; p. 1052 item (1) "നബിമാർ(പ്രവാചകന്മാർ)" "Nabis(prophets)", where the author glosses the one by the other (as Al-Baqarah 14's gloss pair നബി (പ്രവാചകൻ) "Nabi (prophet)"; Al-Baqarah 27 check: നബിമാർ alone is "prophets"). Kept.
   - അനുഗൃഹീതർ "the favoured ones" (from അനുഗ്രഹം "favour", used for أَنۡعَمَ and ٱلۡفَضۡلُ throughout this part); ഔദാര്യം "generosity", ദയവ് "kindness" (as earlier tables: "superiority, worthiness, generosity, kindness"); സത്യസന്ധർ / സത്യസന്ധന്മാർ "the truthful"; സത്യസാക്ഷികൾ "true witnesses" (as Ali 'Imran); രക്ത സാക്ഷി "martyr" (Al-Baqarah 24: രക്തസാക്ഷികൾ "martyrs"); സദ്‌വൃത്തർ "the righteous"; സൽക്കർമി "doer of good deeds"; വസതി "residence" (as earlier tables "from their residences"); നേർമാർഗം "the straight path" and സന്മാർഗം "the right path" (earlier tables: "the straight way, the right path"). All kept.
   - നിയമിക്കുക (كَتَبۡنَا) "ordain": kept; used the same way for നിയമിക്കപ്പെട്ടിരുന്നെങ്കിൽ ("if it had been so ordained") on p. 1051, while നിർദ്ദേശിക്കുക is "prescribe".
   - v. 66 "അത് ചെയ്യുന്നതല്ല" "will not do it": kept; it mirrors the printed future negative (the table has "അതവർ ചെയ്കയില്ല" "they will not do it"). "would not do it" would read more smoothly after "If We had ordained", but the author did not write a conditional form here.

## Open doubts for the reviewer

- **p. 1053 ആഗ്രഹിക്കട്ടെ** (inline DOUBT): printed "അല്ലാഹു നമ്മെ ആഗ്രഹിക്കട്ടെ" ("may Allah wish / will us (to enjoy …)"), rendered "May Allah will for us to enjoy …"; possibly a slip for അനുഗ്രഹിക്കട്ടെ ("may Allah bless us / grant us"), which would read "May Allah grant us to enjoy …".
- Not a doubt in the text, for the reviewer's preference only: the v. 69 panel has no stop between "(together with the favoured ones)" and "those people are very good friends too!", as printed; the English reads as a run-on there. The reviewer may prefer a TN or a stop.
- Earlier open doubts still apply.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| സ്വിദ്ദീക്വ് / സ്വിദ്ദീക്വുകൾ | siddiq | siddiq / siddiqs (as Al-Baqarah 05) |
| ശഹീദ് / ശഹീദുകൾ | shahid | shahid / shahids (as Al-Baqarah 24) |
| സ്വാലിഹ് / സ്വാലിഹുകൾ | salih | salih / salihs |
| അനുഗൃഹീതർ | — | the favoured ones |
| സത്യസന്ധർ / സത്യസന്ധന്മാർ | — | the truthful |
| സത്യസാക്ഷികൾ | — | true witnesses |
| രക്ത സാക്ഷി | — | martyr |
| സദ്‌വൃത്തർ | — | the righteous |
| സൽക്കർമി | — | doer of good deeds |
| ഔദാര്യം / ദയവ് | fadl | generosity / kindness |
| വസതി | diyar | residence |
| നിയമിക്കുക | kataba | ordain |
| നേർമാർഗം / സന്മാർഗം | — | the straight path / the right path |
| സുഹൃത്ത് | rafiq | friend |
