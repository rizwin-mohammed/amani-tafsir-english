# Check: Al-Baqarah part 42 (verses 250–254)

Checked on 2026-10-16 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 423–431 (book pp. 594–602). Each page was rendered at 150 dpi and read once in full (this part has no footnotes of its own; the footnotes on p. 594 belong to part 41). The full `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary, and `pdftotext -bbox` was used for the vowel marks and word joins of every Arabic phrase in the commentary (pp. 596–601) and for the word break "യഥാർത്ഥപ്രകാരം" in the letter-spaced v. 252 panel. The amanithafseer.com text was not used beyond the translator's notes on site-vs-book differences. Crops: two (كَلِيمُ اللَّهِ on p. 600 at 300 dpi; the first missed its line).
- **Boundaries.** Part 41 ends on p. 594 with "… ക്ഷമയുള്ളവർക്കായിരിക്കും അല്ലാഹുവിന്റെ സഹായം ലഭിക്കുക എന്ന് താൽപര്യം."; the panel for verses 250–251 follows directly on the same page, and this part starts there. It ends on p. 602 with "… എന്നൊക്കെ അല്ലാഹു ഓർമിപ്പിക്കുന്നു.", directly above the verse 255 panel on the same page. Both boundaries are confirmed. The next heading in the book, "വിഭാഗം - 35", is on p. 611 (PDF p. 440), as the TN says.
- `part.json`, `verses.json` (verses 250–254), `words.json` (85 entries: 250: 13; 251: 19; 252: 7; 253: 33; 254: 13), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The p. 596 line "വിജ്ഞാനം (الْحِكْمَةَ) കൊണ്ടുദ്ദേശ്യം പ്രവാചകത്വം കൂടി ഉൾക്കൊള്ളുന്നതായിരിക്കാം.", missing from the text layer, is translated in its place ("The intention by wisdom ( الْحِكْمَةَ ) may be inclusive of prophethood as well."), before اللّه اعلم.
- `verses.json` (panels pp. 594–595, 598, 598–599, 601–602) and every `words.json` gloss (tables pp. 595, 598, 599, 602) match the images in the printed order. The text-layer slips ശ്രഷ്ഠ (pp. 598–601), എന്നത്ര (pp. 596, 597, 600) are printed ശ്രേഷ്ഠ and എന്നത്രെ on the images; the files follow the images. No ZWNJ is printed in these items. In the panel, "യഥാർത്ഥപ്രകാരം" is joined: the bbox gap between യഥാർത്ഥ and പ്ര (0.85 pt) equals the letter-spacing gaps in the same line (0.7–0.9 pt), against 7.8 pt for the word space after "പ്രകാരം,".
- `[p. N]` markers 596–602. P. 594 holds only the end of part 41 and the start of the 250 panel, and p. 595 only the panels and the table, so neither has a marker. [p. 596], [p. 599] and [p. 602] stand at the start of commentaries below the tables; [p. 601] at the start of the paragraph that opens the page. Page turns: [p. 597] before "But, as he had not been accustomed" (പക്ഷേ, അതൊന്നും opens the page); [p. 598] "say*[p. 598]*s" (പറ/യുന്നു); [p. 600] "every*[p. 600]*one" (എല്ലാ/വരും). All are right.
- Groups: *[Verses 250–251]* (one panel group and one word table) | *[Verse 252]* | "### Section – 34 · Juz' – 3" | *[Verse 253]* | "### Section – 34" with its TN | *[Verse 254]*. Right.

## Corrections made (before → after)

### Arabic left untranslated by the author: brought to the established form

1. p. 596, ( ومالنصر الامن عند الله ): the DOUBT named the phrase as Quranic and gave verse numbers (3:126, 8:10), which the author does not give and which rest on outside knowledge (part 07, correction 17). Brought into the form of parts 07, 11, 27 and 37 (Arabic transcribed as printed, a DOUBT noting that no Malayalam rendering is printed and giving the likely meaning): "*[DOUBT: this Arabic is printed without a Malayalam rendering, bare and with الامن written as one word; it is likely the Quranic phrase “and help is not except from Allah” (3:126, 8:10).]*" → "*[DOUBT: the Arabic is printed without a Malayalam rendering and is transcribed as printed (bare, with الامن written as one word). It most likely means: “And help is not except from Allah.”]*"
2. p. 597, ( وَقَتَلَدَاوُدُاِلَىقَوْلِهُ مِمَايَشَاء ): "*[DOUBT: this Arabic is printed without a Malayalam rendering; it is likely a citation meaning “And Dawud killed … up to His saying: of what He wills”.]*" → "*[DOUBT: the Arabic is printed without a Malayalam rendering and is transcribed as printed. It most likely means: “And Dawud killed … up to His saying: of what He wills.”]*"

In both places the author's own sentences carry no added words; the translator's meaning stands only inside the DOUBT.

### Renderings brought into line with earlier parts (`words.json`)

3. v. 253, ٱلَّذِينَ "യാതൊരു കൂട്ടർ": "the party who" → "the group who" (the identical gloss in parts 13, 17, 26, 39 and 40; part 34 has "a party who" once).
4. v. 252, بِٱلۡحَقِّ "യഥാർത്ഥപ്രകാരം, മുറയനുസരിച്ച്": part 26 renders the identical gloss (2:176) "according to the real, in accordance with the proper manner". "… in accordance with due order" → "… in accordance with the proper manner".
5. v. 251, دَفۡعُ ٱللَّهِ "അല്ലാഹുവിന്റെ തടവ്, തടുക്കൽ": the only earlier തടവ് (part 11, 2:66) is "a restraint". "Allah's check, warding off" → "Allah's restraint, warding off".

No dropped തന്നെ/-ഉം/എന്നോണം or list items, may/will errors (വന്നെത്തിയേക്കും "may arrive"), -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced notes, translator words in round brackets, or added Arabic were found apart from the above.

## Points the caller asked about

- **(1) Headings and TN (pp. 598, 601).** P. 598 prints "വിഭാഗം - 34" on the left and "ജുസ്ഉ് - 3" on the right of one row; "### Section – 34 · Juz' – 3" follows part 22's "### Section – 17 · Juz' – 2". P. 601 prints "വിഭാഗം - 34" alone; "### Section – 34" with the TN is right. The TN states only what is printed (the repeated number, and the next heading's number, 35, which I confirmed on PDF p. 440); it calls nothing a slip and adds no opinion. Kept.
- **(2) DOUBTs.**
  - "ഉറപ്പിച്ചു / തരുകയും" (250 panel): split at a line end; p. 596 prints "പാദം ഉറപ്പിച്ചു തരുവാനും" spaced mid-line (confirmed on the image), while the same panel has "ചൊരിഞ്ഞുതരുകയും" joined. DOUBT kept.
  - "‘മുർസലു’ / കളിൽ" (252 panel): line-end split; DOUBT kept.
  - "യഥാർത്ഥ / പ്രകാരം" (252 table): line-end split; the panel's joined form is confirmed (bbox, above). DOUBT kept.
  - second "ശണ്ഠ / കൂടുകയില്ലായിരുന്നു" (253 panel): line-end split; the same panel has ശണ്ഠകൂടുകയില്ലായിരുന്നു joined mid-line, the table ശണ്ഠ കൂടുകയില്ലായിരുന്നു spaced. DOUBT kept.
  - "കൂടുക / (യുദ്ധം …)" (253 table): line-end split; DOUBT kept.
  - ലക്ഷ്യം "evidence" (252 panel): the standing doubt of parts 01–40. Kept.
  - ഇച്ഛാ സ്വാതന്ത്ര്യം "freedom of will" (p. 601): earlier parts render ഇച്ഛ "desire" (parts 14, 18, 23), so the DOUBT is real. Kept (the second occurrence on p. 601 has the same rendering without a repeated DOUBT).
  - ദേഹങ്ങൾ "selves" (p. 602): part 39 settled ദേഹം "self" for nafs; part 40 kept "with the body" with a DOUBT where the physical person is meant. Here, "struggling … wealth too is needed, just as selves are" stands for the Quran's "with your wealth and your selves" sense; "selves" follows part 39, and the DOUBT gives the other reading. Kept.
- **(3) Arabic without a Malayalam rendering**: corrections 1–2.
- **(4) Arabic as printed**, from bbox glyph boxes and marks (the codepoints in the file were compared one by one):
  - ومالنصر الامن عند الله (p. 596): bare; gaps 1.5 / 1.5 / 1.2 pt (spaced); وما and لنصر are one token. As in the file.
  - الْحِكْمَةَ (p. 596): sukun on ل and ك, kasra on ح, fatha on م and ة. As in the file.
  - وَعَلَّمَهُمِمَّايَشَاءُ (p. 596): ه|م 0.3 pt (joined); fatha on و, ع; shadda with fatha on ل; fatha on م; damma on ه; kasra on م; shadda with fatha on م; fatha on ي and ش; damma on ء. As in the file.
  - بيتلحم (p. 596): ت|ل 0.55 pt (joined); bare. As in the file.
  - وَقَتَلَدَاوُدُاِلَىقَوْلِهُ مِمَايَشَاء (p. 597): single و in داود; kasra under the alif of اِلَى, fatha on its ل; sukun on و, kasra on ل, damma on ه of قوله; kasra and fatha on the two م (no shadda); fatha on ي and ش; ء bare. ى, ه and part of ل are missing from the text layer, so the joins there rest on the translator's ink measurements. As in the file.
  - وَلَوْلادَفْعُ اللَّهِ النَّاسَ (p. 597): لا bare; gaps 1.5 / 1.4 pt (spaced). As in the file.
  - اللَّهُ وَلَوْلا دَفْعُ اللَّهِ النَّاسَ بَعْضَهُم بِبَعْضٍلَّهُدِّمَتْ صَوَامِعُ (p. 598): word gaps 2.2–3.3 pt; no sukun on the م of بَعْضَهُم; kasratan on ض; ل and ه of لهدمت missing from the text layer (joined from the translator's measurement); ت|ص 1.2 pt (spaced); full alif in صَوَامِعُ. As in the file; it differs from the data file for 22:40 and is kept as printed.
  - كَلِيمُ اللَّهِ (p. 600): 1.3 pt; the م tail hides the blank; the crop shows a small gap; spaced, as other 1.2–1.5 pt gaps in this font. خلِيلُ اللَّهِ: no fatha on خ (kasra on the first ل, damma on the second), 1.5 pt. عِيسي ابن مريم: kasra on ع only; gaps 1.5 / 1.1 pt (ن tail); the dotted final ي rests on the translator's crop. رُوحُ القُدْس: damma on ر, ح, ق; sukun on د; 1.4 pt. All as in the file.
  - اِخْتِلَاف, فَمِنْهُمْمَنْآمَنَوَمِنْهُمْمَنْكَفَرَ (all joins ≤ 1.0 pt, joined), لايُسْأَلُعَمَّايَفْعَلُ وَهُمْيُسْأَلُونَ (ل|و 1.4 pt, spaced), وَلَكِنَّاللَّهَيَفْعَلُ مَا يُرِيدُ (ل|م 1.3 pt; ا|ي 0.8 pt box gap, but the alif's box carries its side-bearing and the translator measured 2.16 pt of blank ink, so spaced) (p. 601): every mark as in the file.
  - اللّه اعلم (p. 596, graphic) and إن شاء الله (pp. 600, 601): bare, as parts 39–40.
- **(5) Text-layer slips**: see "What was compared".
- **(6) Markers, honorifics, table.** [p. 596]–[p. 602], none for pp. 594–595. ﷺ is printed 4 times (p. 598 തിരുമേനിﷺയെ; p. 599 തിരുമേനിﷺയും; p. 600 തിരുമേനിﷺയുടെ, നബിﷺക്ക്); the English has exactly 4, none at the bare തിരുമേനി / നബി. (a) is printed 11 times (p. 596 ×3, p. 597, p. 600 ×7); the English has 11. (r): none printed, none in the English. 85 word-table entries, as above.
- **(7) Bible names.** David (ദാവീദ്), Jesse (യിശ്ശായി), Bethlehem (ബെത്ത്ലെഹെം), Judah (യെഹൂദ), Judeans (യഹൂദ്യർ), "the people of Judea" (യെഹൂദ്യക്കാർ, a different word), Samuel (ശമവേൽ once, ശമുവേൽ twice, in one paragraph), Saul (ശൗൽ; ശൌൽ once, p. 596, the old way of writing the same letters), Goliath, Philistines, Yisrayel, Yisra'ilites (യിസ്രാഈല്യർ), the Israelites (ഇസ്റായീല്യർ, as ഇസ്റാഈല്യർ). This follows part 41. ശൌൽ and ശൗൽ are the same spelling in two scripts, so nothing is lost. ശമവേൽ beside ശമുവേൽ is a spelling variant of the same Bible name in the same Bible summary; giving both as "Samuel" hides only that the book spells it two ways (part 41 treated ഫെലിസ്ത്യർ / ഫെലസ്ത്യർ the same way, while it kept the Arabic-based ശമവീൽ "Shamawil" apart). Left; the reviewer may want one policy (open doubt 3).
- **(8) Terms**, checked by grep against earlier word tables and check.md term tables:
  - ക്ഷമ / സഹനം "patience / forbearance" (parts 08, 24); ഉറപ്പിക്കുക "make firm" (part 39); ലോകർ "the people of the world" (part 08); ദയവ് / അനുഗ്രഹം / ഔദാര്യം "kindness / favour / generosity" (parts 16, 32, 39, 40); വിജ്ഞാനം "wisdom" (parts 20, 23, 38); ദൈവദൂതൻ "divine messenger" (earlier term table); ഭിന്നിക്കുക "divide" (part 34); പദവി, പടി "rank, step" (part 36); ക്രയവിക്രയം / വിൽപന "buying and selling / sale" (earlier term table); കച്ചവടം "trade" (part 02); ശുപാർശ "intercession" (parts 08, 18); ഉണർത്തുക "alert" (earlier term tables); കൂട്ടർ "party" (earlier term table); അനുമതി / അനുവാദം "permission / leave" (parts 14–41); ദൈവഹിതം "the divine will" → ഹിതം "will"; ബലപ്പെടുത്തുക "strengthen" and പരിശുദ്ധാത്മാവിനെക്കൊണ്ട് "with the Holy Spirit" (part 13); തെളിവ് "proof" (parts 13–29); ശ്രേഷ്ഠരാക്കുക "make superior" (parts 08, 18); നാശമുണ്ടാക്കുക "cause corruption" (earlier) beside നാശപ്പെടുക "go to ruin" here, ദുഷിക്കുക "become corrupt" (as ദുഷിച്ചത് "corrupt"). തടവ് "restraint" (correction 5).
  - New and used consistently: ചൊരിയുക "pour" (വർഷിക്കുക "shower down" kept apart), സ്ഥിരപ്പെടുത്തുക "make steadfast", പാദം / കാൽപതറൽ "foot / faltering of step", പ്രത്യക്ഷപ്പെടുക / രംഗത്തുവരിക "appear / come onto the scene", തോൽപിക്കുക / പരാജയപ്പെടുത്തുക / പൊട്ടിക്കുക "vanquish / defeat / break", തടുക്കുക "ward off", ലോകജനത "the world's people", മുർസൽ "Mursal", ദിവ്യദൗത്യം "divine mission", ശണ്ഠ കൂടുക / കലഹം "quarrel / strife", ഭിന്നിപ്പ് / ഭിന്നവാസന "division / diverse inclination", ചങ്ങാതിത്തം / ചങ്ങാതി / സുഹൃൽ ബന്ധം "friendship / friend / bond of fellowship", ഉപദേശിക്കുക "counsel", വിവരിക്കുക / വിശദീകരിക്കുക "describe / elucidate", ദേവാലയം "sanctuary", ജൽപനം "prattling", പടയങ്കി "war-coat", ഭൂലോകം "the terrestrial world".

## Checked and left as they are

- "He came to make statements" (p. 599, പ്രസ്താവിക്കുകയുണ്ടായി) and "prophethood too came to be received by him" (p. 596, ലഭിക്കുകയുണ്ടായി): the -ഉണ്ടായി past is rendered the same way twice in the part; the subjectless verb takes "He" (Allah), as in earlier parts. Left.
- p. 600, "That indeed is the gist …" for the printed "… നൽകിയിട്ടുണ്ട്. എന്നത്രെ … സാരം.": the print has a full stop before എന്നത്രെ; the English starts a new sentence there. Left. Likewise "It is this. The cause both of …" (p. 601, "ഇതാണ്. പ്രസ്തുത … കാരണം.") mirrors the print.
- p. 600, the unclosed quotation in "( ‘Khalilullahi = the friend of Allah)" and, on p. 598, the "(Gist: …" bracket that the printed "(Hajj: 40)" does not close: mirrored, as printed.
- The 254 table "ഹേ വിശ്വസിച്ചവരേ," keeps the printed comma; the panel has ചിലവഴിക്കുവിൻ and the table ചെലവഴിക്കുവിൻ, both "spend", as part 40 treated ചിലവ് / ചെലവ്.
- `part.json` verses "250-254", pages "594-602", PDF pages "423-431": correct.

## Open doubts for the reviewer

1. **DOUBTs in the text**: line-end splits (250 panel, 252 panel and table, 253 panel and table); ലക്ഷ്യം "evidence" (252 panel, as parts 01–40); ഇച്ഛാ സ്വാതന്ത്ര്യം "freedom of will" (p. 601); ദേഹങ്ങൾ "selves" (p. 602; see part 38 open doubt 5 and part 40); the two Arabic phrases printed without a Malayalam rendering (pp. 596, 597), with their likely meanings.
2. **TN on the repeated heading "വിഭാഗം - 34"** (p. 601).
3. **Bible names**: ശമവേൽ / ശമുവേൽ both "Samuel"; see part 41, open doubt 5.
4. **Arabic joins** resting on the translator's ink measurements where glyphs are missing from the text layer (ى|ق in p. 597; ض|ل in لهدمت, p. 598), and the 1.3 pt كَلِيمُ اللَّهِ (kept spaced).
5. **യാതൊരു കൂട്ടർ "the group who"** (correction 3) while കൂട്ടർ alone is "party" (here "Saul and party", "One party … Another party"); part 34 has "a party who" once. The reviewer may wish to settle one rendering.
6. **Earlier open doubts still apply** (not in this part): see parts 13–41.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ക്ഷമ / സഹനം | sabr | patience / forbearance (as parts 08, 24) |
| ചൊരിയുക / വർഷിക്കുക | afrigh | pour / shower down |
| ഉറപ്പിക്കുക / സ്ഥിരപ്പെടുത്തുക | thabbit | make firm (as part 39) / make steadfast |
| പാദം / കാൽപതറൽ | aqdam | foot / faltering of step |
| പ്രത്യക്ഷപ്പെടുക / രംഗത്തുവരിക | baraza | appear / come onto the scene |
| തോൽപിക്കുക / പരാജയപ്പെടുത്തുക / പൊട്ടിക്കുക | hazama | vanquish / defeat / break |
| തടുക്കുക / തടവ് | daf' | ward off / restraint (as part 11; correction 5) |
| നാശപ്പെടുക / ദുഷിക്കുക | fasadat | go to ruin / become corrupt |
| ദയവ് / അനുഗ്രഹം / ഔദാര്യം | fadl | kindness / favour / generosity (as parts 16, 40) |
| ലോകർ / ലോകജനത | al-'alamin | the people of the world (as part 08) / the world's people |
| വിജ്ഞാനം | hikmah | wisdom (as parts 20, 23) |
| റസൂൽ / ദൈവദൂതൻ / മുർസൽ | rasul / mursal | Rasul / divine messenger / Mursal |
| ദിവ്യദൗത്യം | — | divine mission |
| ശണ്ഠ കൂടുക / കലഹം | iqtatala | quarrel / strife |
| ഭിന്നിക്കുക / ഭിന്നിപ്പ് / ഭിന്നവാസന | ikhtalafa / ikhtilaf | divide (as part 34) / division / diverse inclination |
| പദവി / പടി | darajat | rank / step (as part 36) |
| ക്രയവിക്രയം / വിൽപന / കച്ചവടം | bay' | buying and selling / sale / trade |
| ചങ്ങാതിത്തം / ചങ്ങാതി / സുഹൃൽ ബന്ധം | khullah / khalil | friendship / friend / bond of fellowship |
| ശുപാർശ | shafa'ah | intercession (as parts 08, 18) |
| ഉപദേശിക്കുക | — | counsel |
| ഉണർത്തുക | — | alert (as earlier parts) |
| വിവരിക്കുക / വിശദീകരിക്കുക | — | describe / elucidate |
| ദേവാലയം | — | sanctuary |
| ജൽപനം | — | prattling |
| പടയങ്കി | — | war-coat |
| ഭൂലോകം | — | the terrestrial world |
| കൂട്ടർ / യാതൊരു കൂട്ടർ | — | party / the group who (correction 3; open doubt 5) |
| അനുവാദം / അനുമതി | idhn | leave / permission (as part 34) |
| ഹിതം | — | will |
| ഇച്ഛാ സ്വാതന്ത്ര്യം | — | freedom of will (DOUBT) |
