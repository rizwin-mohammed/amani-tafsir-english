# Check: Al-Baqarah part 44 (verses 258–259)

Checked on 2026-10-21 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 440–450 (book pp. 611–621). Each page was rendered at 150 dpi and read once in full (this part has one footnote, (\*) on the Talmud, pp. 613–614), beside the full `ml2uni` text layer. `pdftotext -bbox` was used for the vowel marks of every Arabic phrase and for the line-end hyphen tokens of the panels and tables, and blank-ink gaps were measured at 600 dpi (computed, not viewed) for every Arabic join, with row profiles to see which ink closes a gap. The amanithafseer.com text was not used beyond the translator's notes on site-vs-book differences. Crops: one at 300 dpi (the two Arabic lines on p. 613, أَنَا رَبُّكُمُ الْأَعْلَى and مَا عَلِمْتُلَكُمْ …).
- **Boundaries.** Part 43 ends on p. 611 with "… കാലാകാല നരകശിക്ഷയും!"; the heading "വിഭാഗം - 35" and the verse 258 panel follow directly on the same page. This part starts there. It ends on p. 621 with "… അടുത്ത വചനത്തിൽ പ്രസ്താവിക്കുന്നത്:-", directly above the verse 260 panel on the same page (no heading). Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 258–259), `words.json` (67 entries: 258: 27; 259: 40), `commentary.md`.
- Groups: "### Section – 35" | *[Verse 258]* (panel pp. 611–612, table p. 612, commentary pp. 612–615) | *[Verse 259]* (panel pp. 615–616, table pp. 616–617, commentary pp. 617–621). Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The footnote follows the paragraph that carries its marker (after തൽമൂദിൽ, the paragraph ending "… الله اعلم" on p. 614). The paragraph breaks at "ഇവിടെ ഒരു സംശയം" (p. 619) and "നൂറുകൊല്ലക്കാലം" (p. 620) are printed so (the site merges both) and are kept.
- `verses.json` and every `words.json` gloss match the images in the printed order. Joins checked against the text-layer tokens: v. 258 panel "കിഴക്കുഭാഗത്തു-/നിന്നു" (hyphen token, joined), "കൊണ്ടുവരുന്നു", "ഭാഗത്തുനിന്ന്", "കൊണ്ടുവരുക"; v. 258 table "അസ്തമയ-/സ്ഥാനത്തുനിന്ന്" (hyphen token), "ഉദയസ്ഥാനത്തുനിന്ന്"; v. 259 panel "ചത്തു(നിർജ്ജീവമായി)" (no space before the bracket), "(കി-/ടത്തി)" and "കഴിഞ്ഞു-/കൂടിയിരിക്കുന്നു;-" (hyphen tokens; the text layer's ";--" is a single ";-" on the image), "ചെയ്യുന്നു/വെന്ന്"; v. 259 table "യാതൊരുവന്റെ മാതിരി," and "എങ്ങനെ/യായിരിക്കും," with their commas, "നിർജ്ജീവമായതിനുശേഷം", "പൊക്കിക്കൊണ്ടുവരുന്നു". Final stop of the 258 panel is printed. The text-layer slip റബ്ബത്ര is റബ്ബത്രെ on the image (panel and table); the files follow the image. No ZWNJ is printed in these items.
- `[p. N]` markers 612–615 and 617–621. P. 611 holds only the end of part 43, the heading and the start of the 258 panel, and p. 616 only the 259 panel and table, so neither has a marker. [p. 612] and [p. 617] stand at the start of commentaries below the tables; [p. 620] at "(2)", which opens the page; [p. 621] before the Arabic that opens the page. Page turns: [p. 613] "the one who carried on dispute with him, *[p. 613]* that king" (… തർക്കം നടത്തിയ / ആ രാജാവിന്); [p. 614] "In any *[p. 614]* case" (ഏതാ/യാലും); [p. 615] inside ഖണ്ഡനമാകുന്നി/ല്ലെന്ന്, placed before "is plain indeed"; [p. 618] "the said country *[p. 618]* was Bait al-Muqaddas"; [p. 619] "a half-death *[p. 619]*" (അർദ്ധമരണ/മായ). All are right.

## Corrections made (before → after)

### Arabic join as printed

1. p. 615, the 2:258 phrase: the 1.20 pt blank between يَأْتِي and بِالشَّمْسِ is narrowed only by the kasra under the ب (row profile: the diagonal kasra stroke reaches 438.8 pt); the letter bodies stand 1.92 pt apart, a word space, as the page also shows. "**فَإِنَّ اللَّهَيَأْتِيبِالشَّمْسِ.....**" → "**فَإِنَّ اللَّهَيَأْتِي بِالشَّمْسِ.....**". (I checked the other 1.20–1.44 pt "joined" gaps in this part, إله|غيري on p. 613, ربكما|يا on p. 614, فلما|تبين and شيء|قدير on p. 621, و|الله and يهدي|القوم on p. 615: none is narrowed by a mark, so they stay joined.)

### Translator's note resting on outside knowledge

2. p. 619, "(3: 49; 5: 113)": the TN "In the Quran text used here, giving life to the dead by 'Isa (a) is in 5:110; 5:113 is printed." points out a slip that can be seen only by checking the Quran text outside the book. Earlier parts keep such printed references without a note (part 11 "Ma'idah 63", part 14 "5:20", part 35 "Ma'idah : 93, 94": "a note would rest on outside knowledge"). The TN is removed; the printed reference stays as it is: "(3: 49; 5: 113) *[TN: …]*." → "(3: 49; 5: 113)." (This also brings the (a) count to the printed 19.)

### Same English for two Malayalam words

3. നാസ്തികന്മാർ (p. 614): parts 03 and 25 render നിരീശ്വരവാദികൾ "atheists". "Only for the atheists who …" → "Only for the godless who …".
4. വിവാദം (p. 613): തർക്കം is "dispute" (parts 02–23 term tables, and in this part: "carried on dispute", "the dispute of Namrud"). "This dispute is not seen referred to in the Bible." → "This controversy is not seen …".
5. അഹന്ത (pp. 614, 615): part 06's term table gives അഹങ്കാരം "conceit"; part 33's word table gives അഹങ്കാരം "arrogance", which this part uses for അഹങ്കാരം (and അഹങ്കാരപൂർവം "arrogantly", അഹങ്കാര വാക്ക് "word of arrogance"). "conceit" for അഹന്ത would merge it with part 06's അഹങ്കാരം. "Does the conceit of Namrud …" → "Does the egotism of Namrud …"; "only from conceit and from haughtiness" → "only from egotism and from haughtiness".

### Renderings brought into line with earlier parts

6. വിശദീകരിക്കുക (p. 615): part 42 renders വിവരിക്കുക / വിശദീകരിക്കുക "describe / elucidate". "or to explain the words that he himself had said" → "or to elucidate the words …".
7. അലങ്കാര പ്രയോഗങ്ങൾ (p. 619): earlier parts render അലങ്കാര- "figurative" (അലങ്കാര രൂപത്തിൽ "in a figurative form", അലങ്കാരാർത്ഥം "figurative meaning"), and this part renders പ്രയോഗം "usage" (p. 618). "figures of speech" → "figurative usages".
8. Bible names given in the author's brackets (pp. 614, 617): part 09 ("Moses (Musa)"), part 10's policy (usual English names where the author gives no gloss), part 15 (നെബോഖദ്നേസർ "Nebuchadnezzar") and this part's own "Bukhtunassar ( بختنصر Nebuchadnezzar)" give the usual English form. "the Law of Moshe" → "the Law of Moses"; "Armiya (Yirmeya)" → "Armiya (Jeremiah)"; "Hasqil (Yehezkel)" → "Hasqil (Ezekiel)"; "'Uzair ( عزير Esra)" → "'Uzair ( عزير Ezra)". The author's Arabic-based forms (Armiya, Hasqil, 'Uzair, Bukhtunassar) and Yerushalem (part 10's form for യെരൂശലേം) stay.

### Added word

9. p. 615, "അതൊന്ന് കാണട്ടെ": ഒന്ന് is "just" in this part (panel "(ഒന്ന്) കൊണ്ടുവരുക" "(just)"; p. 617 "ഇതൊന്ന് ശ്രദ്ധിക്കുക" "just pay attention to this"); "once" was added. "Let that be seen just once *[DOUBT: … it may be “let me see that just once”.]*" → "Let that just be seen *[DOUBT: … it may be “let me (us) just see that”.]*".
10. v. 259, `verses.json` ("… ആക്കുവാൻ വേണ്ടിയും (കൂടി) ആകുന്നു (ഇത്)."): the subject is the author's bracketed (ഇത്); the English added "It" beside it. "It is in order that We make you a sign for mankind too (as well) (this)." → "In order that We make you a sign for mankind too (as well) is (this)."
### Dropped തന്നെ

11. p. 614, "അതുപോലെത്തന്നെ, …" "Likewise, although scientists may venture …" → "In just the same way, although scientists may venture …".

### Punctuation as printed

12. p. 620, "(ബു;മു.)" is printed without a space: "(Bu; Mu.)" → "(Bu;Mu.)".

No dropped -ഉം/എന്നോണം or list items, may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി (none is printed), added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced footnote, translator words in round brackets, or added Arabic were found apart from the above.

## Points the caller asked about

- **(1) DOUBTs** (none names a source the author does not give).
  - ന്യായം "justice" (p. 612, "സത്യത്തിന്റെയും ന്യായത്തിന്റെയും പ്രകാശം"): beside "truth" the sense is justice/right; part 40 (and the earlier term table ന്യായം / തെളിവ് / ന്യായവാദം "justification / proof / argument") has "justification", which this part keeps for "ഊഹിക്കുവാൻ ന്യായമുണ്ട്" (p. 615). The DOUBT is real. Kept.
  - ദൈവവാദികൾ "claimants to godhood" (p. 613): part 25's term table has നിരീശ്വരവാദികൾ / ദൈവവാദികൾ "atheists / theists"; here the context is kings who claimed to be gods, so the DOUBT is real. Kept.
  - "ഔദ്ധത്യവും അധികാരവും" (p. 613): clearly printed; rendered as printed, the possible slip given only inside the DOUBT, resting on the book's own p. 614 wording. Kept.
  - "....." (p. 615): the dots touch the left end of the Arabic (1.3 pt), which is both where the Malayalam before it would sit and where the Arabic ends, so the page cannot tell. Kept.
  - അതൊന്ന് കാണട്ടെ: kept, reworded (correction 9).
  - "ഒരിക്കൽ സംഭവിക്കുക അസംഭവ്യമാണെന്നും" (p. 617): clearly printed; word for word with the DOUBT. Kept (the author's p. 619 "ചുരുങ്ങിയത് ഒരിക്കലെങ്കിലും" supports the first option).
  - വീണമ്പുക (p. 618): clearly printed; "fall" with the DOUBT. Kept.
  - ലക്ഷ്യങ്ങൾ "evidences" (p. 618) and ശരീരം "frame" (p. 619): the standing doubts. Kept.
  - ( عَالمُ البرزخ ൽവെച്ച്) (p. 619): the likely meaning stays inside the DOUBT. Kept.
- **(2) TNs.** "Talmud (Talmud)" (note, p. 614: "(Talmud)" printed in Latin italic after the ▶▶ / ◀◀ turn) and "cell (Cell)" (p. 621, Latin letters): in the form of part 41's "Goliath (Goliath)"; they point out only what is printed. Kept. The 5:113 TN: removed (correction 2). സതംഭിച്ചുപോയി (p. 615): printed so; the meaning is certain; kept with no TN (part 41's ശ്ത്രുക്കൾ, part 33's misprints). Unclosed quotes and brackets kept as printed: the 258 panel ‘എന്നാൽ, …; the 259 panel ‘അല്ലാഹു … അറിയുന്നു.; p. 614 "(മൂസാ, അപ്പോൾ … ആരാണ്? എന്നും,"; p. 614 "… എനിക്കറിയില്ല; എന്ന്" (semicolon in place of the closing quote). The p. 614 Arabic is followed by no dash on the image (the text layer's ")-" is wrong); the English has none.
- **(3) Quran phrases** (marks from bbox, codepoints compared; joins from 600 dpi blank ink: ≤ 1.44 pt joined, ≥ 1.5 pt a space):
  - أَنَا رَبُّكُمُ الْأَعْلَى (p. 613, 79:24 part): fatha on أ, ن, ر; shadda+damma on ب; damma on ك, م; sukun on ل, fatha on أ, sukun on ع, fatha on ل, ى bare. أنا|ربكم 1.56, ربكم|الأعلى 1.92 (the crop shows a narrow space after أنا). As printed; "not found" in `npm run check` because of the vowel and Uthmani-sign differences. Expected.
  - مَا عَلِمْتُلَكُمْ مِنْإِلَهٍغَيْرِي (p. 613): 2.16 / touching / 1.56 / 1.20 / 1.44. As in the file. أَنْ آتَاهُ اللَّهُالْمُلْكَ (p. 613): 1.68 / 2.04 / no blank. As in the file.
  - فَمَنْ رَبُّكُمَايَا مُوسَى (p. 614, 20:49 part): fatha on ف, م; sukun on ن; fatha on ر; shadda+damma on ب; damma on ك; fatha on م, ي; damma on م; fatha on س; ى bare. 1.68 / 1.32 / 1.68. As printed; "close but not exact" (83%). Expected.
  - وَمَا رَبُّ الْعَالَمِينَ (1.80 / 1.92), رَبِّيَالَّذِي يُحْيِيوَيُمِيتُ (0.48 / 1.92 / overlap / 0.84) (p. 614); وَاللَّهُلايَهْدِيالْقَوْمَ الظَّالِمِينَ (p. 615; لا bare; 1.08 / 0.96 joined, 3.00 spaced); أَلَمْتَرَ, أَوْكَالَّذِي (p. 617); وَهِيَخَاوِيَةٌعَلَىعُرُوشِهَا (p. 618, all ≤ 0.96): as in the files. فَإِنَّ اللَّهَيَأْتِي بِالشَّمْسِ: correction 1.
  - ولنجعلك اية للناس (p. 620, 2:259 part): bare; لنجعلك|اية 1.80, اية|للناس 2.76 (the 2.28 pt blank inside اية follows the non-joining alif). As printed; "close but not exact" (85%). Expected.
  - فَلَمَّاتَبَيَّنَلَهُ قَالَأَعْلَمُأَنَّاللَّهَعَلَىكُلِّ شَيْءٍقَدِيرٌ (p. 621, 2:259 part): 1.44 / touching / 2.04 / 0.72 / 0.36 / … / كل|شيء 1.68 / شيء|قدير 1.32; ى bare, kasratan on ء, dammatan on ر. As printed; "close but not exact" (93%). Expected.
  - All four are part-verse phrases transcribed as printed, the rule part 43 applied (data-file form only for full verses identical to the data file). After the corrections `npm run check` lists 17 Al-Baqarah "close but not exact" items: the 14 from earlier parts (the 13 known ones and part 43's Yunus 99) and these 3; and أَنَا رَبُّكُمُ الْأَعْلَى among "not found". No new item comes from my edits.
  - Other Arabic: نَمْرُود, عزير, بختنصر, اصحاب الكهف, عَالمُ البرزخ (two marks; the 4.3 pt blank before the final خ follows the non-joining ز, so one word), أَعْلَمُ, إعْلَم (no kasra printed), عِلم, and the graphic اللّه اعلم (as parts 40 and 42): as in the file.
- **(4) Markers and counts.** Page markers as above. ﷺ printed once (p. 620 നബിﷺക്കുണ്ടായ); the English has 1. (r) printed twice (Ibn Kathir, Sayyid Qutb); the English has 2. (a) printed 19 times; the English now has 19 (the 20th was in the removed TN). 67 word-table entries.
- **(5) Panel and table spacing**: see "What was compared"; all confirmed with text-layer tokens.
- **(6) Terms**, checked by grep against earlier word tables and check.md term tables:
  - As earlier parts: ന്യായവാദം "argument" (part 23 term table), തർക്കം "dispute", ആരാധ്യൻ "object of worship", ഉസൈർ "'Uzair", ബൈത്തുൽ മുക്വദ്ദസ് "Bait al-Muqaddas", യെരൂശലം "Yerushalem" (part 10), ഇസ്റാഈല്യർ "the Israelites", തൗറാത്ത് "Tawrat", അഥവാ "or" (parts 01–02), തന്നെ "indeed", (ഒന്ന്) "(just)", കണ്ടറിയുക "know by seeing" (കണ്ടറിയുന്നവൻ "the One who sees and knows"), കൊല്ലം "years" (parts 14, 38, 40), വേദപുസ്തക നിഘണ്ടു "the Bible Dictionary" (part 41).
  - വർഷം "years" (panel and table) beside കൊല്ലം "years" (commentary): വർഷം does not occur in earlier parts; English has no second plain word for "year", so both stay "years". Open doubt 4.
  - യഹൂദി / യഹൂദമത "Jewish / Jewish religion" (stem of യഹൂദികൾ "Jews"), യെഹൂദ "Judaic", യൂദ "Judean": part 42 has യെഹൂദ "Judah" (the name) and യഹൂദ്യർ "Judeans". Open doubt 3.
  - New and used consistently: റബ്ബിമാർ "rabbis", ശാസ്ത്രിമാർ "scribes", ന്യായപ്രമാണം "the Law", തൽമൂദ് "Talmud", ഭൗതിക "material", സത്യാന്വേഷി "seeker of truth", ആസ്വദിക്കുക "enjoy", അഗ്നികുണ്ഡം "fire-pit", ഗുഹാവാസികൾ "cave-dwellers", സ്മൃതിപഥം "path of memory", വർത്തമാന ക്രിയ / ശാസനാ ക്രിയ "present-tense verb / imperative verb", കോശം "cell", ജീവശാസ്ത്രജ്ഞന്മാർ "biologists", ബുഖ്ത്തുനസ്വർ (നെബൂഖദ്നേസർ) "Bukhtunassar (Nebuchadnezzar)", ബാബിലോണ്യ "Babylonia", ബാബിലോണ്യൻ "Babylonian", അർമിയാ / ഹസ്ക്വീൽ "Armiya / Hasqil".

## Checked and left as they are

- p. 615, "It is well known, surely, both that he was thrown into the fire-pit, and that in the end he renounced the country and went on Hijrah.": the Malayalam has അദ്ദേഹം (Ibrahim, respectful) right after a sentence about Namrud (അവൻ); English "he" cannot show the difference. Adding a name would add a word. Left; noted for the reviewer.
- p. 621, മന:പാഠം and കാണാപാഠം are both "by heart": two words with one meaning ("learnt by heart"); no English pair keeps them apart without adding sense. Left.
- p. 613, footnote "If one is to know evidently about the Judaic traditions" for "തെളിവായി അറിയണമെങ്കിൽ": "evidently" in its sense "clearly, with evidence". Left.
- p. 614, "Or, it may have been a word of arrogance like the one in which Fir'aun arrogantly said ‘I do not know … except me; (Allah knows.)": the English order puts the quotation last, so the printed full stop after വാക്കായിരിക്കാം falls away before "(Allah knows.)". Left.
- p. 620, ശ്രദ്ധിക്കുക "observe" (the giving of life) beside "pay attention" on p. 617. Left.
- v. 259 table, بَل لَّبِثۡتَ "പക്ഷേ (എന്നാൽ)" "but (rather)" while എന്നാൽ elsewhere is "then": the gloss gives a second word for بل; "rather" is its sense there. Left.
- `part.json` verses "258-259", pages "611-621", PDF pages "440-450": correct.

## Open doubts for the reviewer

1. **DOUBTs in the text**: ന്യായം "justice"; ദൈവവാദികൾ "claimants to godhood"; ഔദ്ധത്യവും അധികാരവും; the "....." on p. 615; അതൊന്ന് കാണട്ടെ; ഒരിക്കൽ സംഭവിക്കുക അസംഭവ്യമാണെന്നും; വീണമ്പുക; ലക്ഷ്യങ്ങൾ "evidences"; ശരീരം "frame"; عَالمُ البرزخ ൽവെച്ച്.
2. **Arabic joins** in the 1.5–1.7 pt range (أنا|ربكم, لكم|من, أن|آتاه, فمن|ربكما, يا|موسى, كل|شيء) are written as spaces and those of 1.2–1.44 pt as joined, as the translator and part 43 did; the p. 615 join was corrected because a mark, not a letter, closed the gap (correction 1).
3. **യഹൂദി / യെഹൂദ / യൂദ "Jewish / Judaic / Judean"**: part 42 renders യഹൂദ്യർ "Judeans" and യെഹൂദ "Judah", so "Judean" now stands for two Malayalam forms across parts. The reviewer may wish to settle one set.
4. **വർഷം and കൊല്ലം both "years"** (see Terms).
5. **അഹങ്കാരം**: part 06's term table has "conceit", part 33's word table and this part "arrogance"; അഹന്ത is now "egotism" (correction 5).
6. **Bible names** (correction 8): see part 41, open doubt 5.
7. **"he" for അദ്ദേഹം** on p. 615 (see above).
8. **Earlier open doubts still apply** (not in this part): see parts 13–43.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| വർഷം / കൊല്ലം | 'am | years / years (open doubt 4) |
| യഹൂദി / യെഹൂദ / യൂദ | — | Jewish / Judaic / Judean (open doubt 3) |
| റബ്ബിമാർ / ശാസ്ത്രിമാർ | — | rabbis / scribes |
| ന്യായപ്രമാണം / മോശെ | — | the Law / Moses (correction 8) |
| തൽമൂദ് | — | Talmud |
| നാസ്തികന്മാർ | — | the godless (correction 3; നിരീശ്വരവാദികൾ is "atheists") |
| ഭൗതിക | — | material |
| സത്യാന്വേഷി | — | seeker of truth |
| ആസ്വദിക്കുക | — | enjoy |
| അഗ്നികുണ്ഡം | — | fire-pit |
| ഗുഹാവാസികൾ | ashab al-kahf | cave-dwellers |
| അലങ്കാര പ്രയോഗങ്ങൾ | — | figurative usages (correction 7) |
| സ്മൃതിപഥം | — | path of memory |
| കണ്ടറിയുക | — | know by seeing |
| വർത്തമാന ക്രിയ / ശാസനാ ക്രിയ | — | present-tense verb / imperative verb |
| കോശം / ജീവശാസ്ത്രജ്ഞന്മാർ | — | cell / biologists |
| ബുഖ്ത്തുനസ്വർ (നെബൂഖദ്നേസർ) / ബാബിലോണ്യ | Bukhtunassar | Bukhtunassar (Nebuchadnezzar) / Babylonia |
| അർമിയാ (യിരെമ്യാ) / ഹസ്ക്വീൽ (യെഹെസ്കേൽ) / ഉസൈർ (എസ്രാ) | 'Uzair | Armiya (Jeremiah) / Hasqil (Ezekiel) / 'Uzair (Ezra) (correction 8) |
| യെരൂശലം / തൗറാത്ത് | — | Yerushalem (as part 10) / Tawrat |
| (ഒന്ന്) / അഥവാ / തന്നെ | — | (just) / or / indeed |
| വിവാദം / തർക്കം / ന്യായവാദം | hajja | controversy (correction 4) / dispute / argument |
| അഹന്ത / അഹങ്കാരം / ഔദ്ധത്യം / ദുർവാശി | — | egotism (correction 5) / arrogance / haughtiness / obstinacy |
| ലോകരക്ഷിതാവ് / ആരാധ്യൻ | rabb al-'alamin | Lord of the worlds / object of worship |
| വിശദീകരിക്കുക | — | elucidate (as part 42; correction 6) |
| മരണപ്പെടുത്തുക / മരിപ്പിക്കുക | amata | cause to die / put to death |
| ഉത്തരം മുട്ടുക / സ്തംഭിക്കുക | buhita | be at a loss for an answer / be stunned |
