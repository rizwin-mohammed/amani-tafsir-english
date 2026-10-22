# Check: Al-Baqarah part 46 (verses 261–268)

Checked on 2026-10-22 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 472–481 (book pp. 643–652). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer (this part has no footnotes). `pdftotext -bbox` was used for the vowel marks and word boundaries of every Arabic phrase in the commentary. No crops were needed. The amanithafseer.com text was used only through the translator's notes on site-vs-book differences.
- **Boundaries.** Part 45 ends on p. 642 with "… നൽകി അനുഗ്രഹിക്കട്ടെ. ആമീൻ."; p. 643 opens with the heading "വിഭാഗം - 36" and the verse 261 panel. This part starts there. It ends on p. 652 with "… തിരിച്ചറിയുവാൻ കഴിയുകയുള്ളൂ.", directly above the verse 269 panel on the same page (no heading). Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 261–268), `words.json` (134 entries: 261: 15; 262: 14; 263: 9; 264: 23; 265: 20; 266: 24; 267: 18; 268: 11), `commentary.md`.
- Groups: "### Section – 36" | *[Verse 261]* (panel, table and commentary start p. 643) | *[Verses 262–264]* (panels pp. 644–645, tables pp. 645–646, commentary pp. 646–647) | *[Verse 265]* (panel p. 647, table and commentary p. 648) | *[Verse 266]* (panel pp. 648–649, table and commentary pp. 649–650) | "### Section – 37" | *[Verses 267–268]* (panels p. 650, tables p. 651, commentary pp. 651–652). Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images in the printed order, with the printed slips kept (ധാന്യമണിളയുള്ളതായ in the 261 panel; എനി in the 265 panel and table). The text-layer slips ദ്രാഹി (262–264 panels), പ്രരണ, എന്നത്ര, ഞാനത്ര, മഹത്തരമത്ര, the stray "-" before വിരോധിക്കുന്നു and before താനും are printed correctly on the images (ദ്രോഹി, പ്രേരണ, എന്നത്രെ, ഞാനത്രെ, മഹത്തരമത്രെ, no dash); the files follow the images. The panel and table spacing follows the book where the site joins words at line ends (e.g. "ഒരു മിനുസപ്പാറയുടെ", "അവന്റെ ഉപമ", "എന്നിട്ടത് അതിനെ വിട്ടേച്ചു", "അ(ഇ) പ്രകാരം"); "മേടു/പ്രദേശത്തുള്ള" and "ഭൂമിയിൽനിന്ന്" are single text-layer tokens and are written joined. No ZWNJ is printed in these items or in the files.
- `[p. N]` markers 643–644 and 646–652. P. 645 holds only panels and tables, so it has no marker (as parts 42–45 treat such pages). [p. 646], [p. 648], [p. 649] and [p. 651] stand at the start of commentaries below the tables. Page turns: [p. 644] "the seed's *[p. 644]* quality" (വിത്തിന്റെ / ഗുണം); [p. 647] "ta*[p. 647]*ken" (എടു/ക്കാതിരിക്കുന്നത്); [p. 650] after "an interpretation of this verse", where the page turns between ഒരു / ഹദീഥിന്റെ (the English puts the relative clause first; left); [p. 652] "em*[p. 652]*ploy" (വിനി/യോഗിക്കുവാൻ). The mid-word markers have the same form as parts 43–45 (`opi*[p. 607]*nions` in part 43's file carries the asterisks too). All are right.
- Honorifics: ﷺ printed 3 times (p. 644 നബിﷺ ഇപ്രകാരം, നബിﷺയോട്; p. 647 നബിﷺ ഇപ്രകാരം); the English has exactly 3, none at the bare തിരുമേനി (p. 644, "the noble Prophet") or the bare നബി in "നബി വചനം" ("saying of the Prophet"). (r) printed 6 times (Abu Dharr; Bukhari; 'Umar; Ibn 'Abbas twice; Ibn Kathir); the English has 6. (a): none printed, none in the English.

## Corrections made (before → after)

### Punctuation added

1. p. 643, "… നൂറുമണിവീതമുള്ള ഏഴുകതിർ ഉൽപാദിപ്പിക്കുന്ന ധാന്യം പോലെ എന്ന് പറഞ്ഞത് ശ്രദ്ധേയമാകുന്നു": no quotation marks are printed. "it was said ‘like grain that produces seven ears with a hundred grains each’ is noteworthy" → "it was said like grain that produces seven ears with a hundred grains each is noteworthy".

### Added word

2. p. 647, "… ഉദാഹരണസഹിതം മൂന്നാമത്തെ വചനത്തിലും ചൂണ്ടിക്കാട്ടിയിരിക്കുന്നു": one -ഉം was rendered twice. "He has also pointed out in the third verse too, with an example, …" → "He has pointed out in the third verse too, with an example, …".
3. v. 267, `verses.json` ("അത് നിങ്ങൾ (ഇങ്ങോട്ട്) വാങ്ങുന്നവരല്ലല്ലോ"): "would" has no Malayalam behind it; the table has "ones who take it". "you are not, surely, ones who would take it (hither)." → "you are not, surely, ones who take it (hither)."

### Dropped small word

4. v. 267 table, وَلَسۡتُم "നിങ്ങൾ അല്ലതാനും": താനും was not rendered and "and" was added (താനും is "moreover" in this part: the 266 panel "അവനുണ്ടുതാനും", p. 651 "സ്വീകരിക്കുകയില്ലതാനും", p. 652 "അതാണ് താനും"). "and you are not" → "you are not, moreover".

### Standing DOUBT added

5. v. 263, `verses.json`, "സഹനശീലനുമാണ്": parts 36 and 39 carry the open doubt on സഹനശീലൻ "the Forbearing" in the verse panel (part 39: "because part 36's open doubt on this name of Allah is not yet settled"). Added after "and the Forbearing": "*[DOUBT: സഹനശീലൻ “the Forbearing”, as in parts 36 and 39, where this rendering is used with an open doubt.]*".

No dropped തന്നെ/എന്നോണം or list items, may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced notes, translator words in round brackets, or added or re-vowelled Arabic were found apart from the above.

## Points the caller asked about

- **(1) DOUBTs.**
  - ധന്യൻ "Self-Sufficient" (263 panel, 263 table with അനാശ്രയൻ "the One without dependence", first commentary use p. 647): first occurrence of the word; the rendering follows part 32's സർവ്വധന്യൻ "the wholly Self-Sufficient One" and the author's own brackets (പരാശ്രയം വേണ്ടാത്ത / പരാശ്രയമില്ലാത്ത) and his p. 651 gloss "അവന് ആരുടെയും ഒരുവിധത്തിലുള്ള ആശ്രയവും വേണ്ടാ". "the Rich" would also clash with ധനികനായ ഒരാൾ "a rich person" (p. 650). Kept; the later uses (267 panel and table, p. 651) are plain, as earlier parts do after a first-occurrence DOUBT.
  - ലക്ഷ്യം: the "evidence" DOUBT stands where ലക്ഷ്യം glosses ആയത്ത് (266 panel and table), as parts 01–45. The other occurrences (ഉദ്ദേശ്യലക്ഷ്യം p. 643; "… നേടുകയാണിതിന്റെ ലക്ഷ്യം" p. 646; "ധനം ചിലവഴിക്കുന്നവരുടെ ലക്ഷ്യം എന്തായിരിക്കണമെന്നും" p. 647; ലക്ഷ്യമാക്കിക്കൊണ്ടും p. 648) can only mean "aim" and are rendered "aim" without a DOUBT, as parts 20, 23 and 40 did ("ഓരോ പ്രാർത്ഥനയുടെയും ലക്ഷ്യം", ലക്ഷ്യസ്ഥാനം, "ഉദ്ദേശ്യലക്ഷ്യങ്ങളും" "intentions and aims"). Part 45's lesson concerned a ലക്ഷ്യം that could be "evidence" ("ലക്ഷ്യം മുഖേന ലഭിക്കുന്ന അറിവ്"); none of these four can. Left.
  - സഹനശീലൻ: correction 5.
- **(2) No TNs.** The printed slips are confirmed on the images and kept with no TN, as parts 33, 41 and 44 kept clear misprints whose meaning is certain: ധാന്യമണിളയുള്ളതായ (261 panel), ആതിയായവ (p. 643), സ്വൈര്യക്കേടാ (p. 646), എനി (265 panel and table), സദസ്സിൽവെച്ച (p. 650), and ഒരാൾ … ചെയ്യുന്നു. … അവർ … പ്രവർത്തിക്കുന്നു (p. 650, "A rich person does … they act"), which the English keeps.
- **(3) Markers, headings, counts**: see "What was compared". Headings "### Section – 36" and "### Section – 37" are right. 134 word-table entries.
- **(4) Arabic as printed** (bbox marks and word boxes; codepoints compared with the files):
  - سَبِيلِ اللَّهِ (p. 643): fatha on س, kasra on ب and ل; the ﷲ ligature carries shadda, fatha and kasra. Equals the verse; kept as transcribed, which the rule allows.
  - الْمَنّ (p. 646): sukun on ل, fatha on م, shadda on ن. الاذى and الرياء (one word box, no space): bare. As in the file.
  - واللّه غنى حليم (p. 647): shadda on the graphic الله only, three spaced words. As in the file.
  - طَيِبَات (p. 651): fatha on ط, kasra on ي, fatha on ب, no shadda. As in the file.
  - واللَّهَغَنِيٌّ حَمِيدٌ (p. 651): و|الله 0.5 pt and الله|غني touching (joined), a clear space before حميد; fatha and shadda on الله, fatha on غ, kasra on ن, shadda and dammatan on ي, fatha on ح, kasra on م, dammatan on د. As in the file.
  - الشَّيْطَانُ (p. 652): shadda and fatha on ش, sukun on ي, fatha on ط, damma on ن. As in the file.
  - `npm run check` lists 21 Al-Baqarah "close but not exact" items before and after my edits (the list is identical); this part adds none.
- **(5) Text layer and spacing**: see "What was compared".
- **(6) Terms**, checked by grep against earlier word tables and check.md term tables:
  - As earlier parts: ദ്രോഹം / ഉപദ്രവം "injury / harm" (part 32 onwards); ദാനധർമം / ധർമം "almsgiving / charity" (sadaqah); നിഷ്ഫലം "fruitless"; നീചവൃത്തി "vile conduct" (fahsha'); വാഗ്ദത്തം and വാഗ്ദാനം both "promise" (earlier term tables: കരാർ / വാഗ്ദത്തം "pact / promise", വാഗ്ദാനം "promise"); ഉത്തമം "excellent"; സജ്ജനങ്ങൾ "the righteous"; ദയവ് / അനുഗ്രഹം / ഔദാര്യം "kindness / favour / generosity" (fadl); പാപമോചനം "forgiveness of sins"; വിശാലൻ "Vast" (parts 17, 41); കണ്ടറിയുന്നവൻ "the One who sees and knows"; ഫലവർഗങ്ങൾ / ഫലങ്ങൾ "kinds of fruit / fruits"; സംസ്കരിക്കുക "refine"; തോന്നിയവാസം "licentiousness"; സമ്പ്രദായം "method" (part 45); വ്യസനപ്പെടുകയുമില്ല "nor will they grieve"; റബ്ബ് "Rabb"; ആയത്ത് [ലക്ഷ്യങ്ങൾ] "the ayah [evidences]" (part 40).
  - സഹനശീലൻ "the Forbearing" (parts 36, 39; correction 5); സുശീലൻ "One of good nature" (table gloss of حليم, a different word, so a different English); സ്തുത്യർഹൻ "Praiseworthy" (حميد; no earlier rendering).
  - One English per Malayalam word inside this part: ഉപകാരം / എടുത്തുപറയുക / പ്രത്യുപകാരം; ദ്രോഹം / ഉപദ്രവം / സ്വൈര്യക്കേട്; ഫലം / കനി / നിഷ്ഫലം / ഫലശൂന്യം; പേമാരി / കനത്ത മഴ / ചാറൽ മഴ; മിനുസ / മിനുത്ത / ഉറച്ച; നീചപ്രവൃത്തി / നീചവൃത്തി; മാനം / അന്തസ്സ് / ദുരഭിമാനം / വാഞ്ഛ; ഇപ്രകാരം / അങ്ങനെ / ഇങ്ങനെയുള്ള / അങ്ങനെയുള്ള; ഉത്തമം / ഭേദം; സാധുക്കൾ / സജ്ജനങ്ങൾ: each kept apart. See open doubts 3–6 for cross-part points.

## Checked and left as they are

- 263 panel and p. 647 "Self-Sufficient … and the Forbearing": "the" before Forbearing follows parts 36 and 39 ("is the Forbearing"). Left.
- p. 646, "( الاذى ) The origin …": no full stop is printed after the bracket; mirrored. p. 647, the hadith opens with no quotation mark and closes with ’ after വിറ്റഴിക്കുന്നവനും; mirrored.
- p. 651, "If what is in hand is spent, one will get trapped. That one will suffer …": the print has a full stop after കുടുങ്ങിപ്പോകും; "one" stands for the unexpressed subject. Left.
- p. 650 [p. 650] position: see "What was compared".
- `part.json` verses "261-268", pages "643-652", PDF pages "472-481": correct.

## Open doubts for the reviewer

1. **DOUBTs in the text**: ധന്യൻ "Self-Sufficient" (263 panel, table, p. 647); സഹനശീലൻ "the Forbearing" (263 panel; correction 5); ലക്ഷ്യങ്ങൾ "evidences" (266 panel and table).
2. **ധന്യൻ**: the reviewer may settle it together with part 32's സർവ്വധന്യൻ.
3. **മേട് "upland"** (265 table, p. 648 മേട് പ്രദേശം; 265 panel മേടുപ്രദേശം "upland region"): part 24's term table has മേട് / കുന്ന് "mound / hill" (Safa and Marwah, "two mounds (small hill)s"). Here the word names raised ground on which a garden stands, beside പീഠപ്രദേശം "plateau region"; "upland" was left, but one English for മേട് across parts may be wanted.
4. **സൽക്കാര്യങ്ങൾ / സൽകാര്യങ്ങൾ "good causes"** (pp. 646, 648, 651): part 08's term table has സൽകാര്യങ്ങൾ "good deeds", but this part also has സൽക്കർമങ്ങൾ "good deeds" (pp. 644, 649; the earlier term table also gives സൽക്കർമം "good deeds"), so the two need different English here. Left; the reviewer may settle both parts.
5. **ദുർവൃത്തികൾ "evil conduct"** (p. 652): an earlier term table glosses ദുർന്നടപ്പുകാർ "(those of evil conduct)". Left (വൃത്തി is "conduct" in നീചവൃത്തി "vile conduct" here).
6. **ഉപകാരം "benefaction"** (in ഉപകാരം എടുത്തുപറയുക, ഉപകാരം ചെയ്യുക) beside ഉപകാരം "usefulness" (p. 649) and an earlier table's ഉപകാരം "use": the sense "favour done to someone" needs its own word here.
7. **Earlier open doubts still apply** (not in this part): see parts 13–45.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഉപകാരം / എടുത്തുപറയുക / പ്രത്യുപകാരം | mann | benefaction / bring up / a return benefaction (open doubt 6) |
| ദ്രോഹം / ഉപദ്രവം / സ്വൈര്യക്കേട് | adha | injury / harm (as part 32) / disturbance |
| ധന്യൻ / അനാശ്രയൻ / പരാശ്രയം | ghaniyy | Self-Sufficient (DOUBT) / the One without dependence / dependence on others |
| സ്തുത്യർഹൻ / സുശീലൻ / സഹനശീലൻ | hamid / halim | Praiseworthy / One of good nature / the Forbearing (as parts 36, 39; DOUBT) |
| ദാനധർമം / ധർമം / സൽക്കാര്യങ്ങൾ | sadaqah | almsgiving / charity (as earlier parts) / good causes (open doubt 4) |
| ഫലം / കനി / നിഷ്ഫലം / ഫലശൂന്യം | ukul | fruit / produce / fruitless / void of fruit |
| മേട് / പീഠപ്രദേശം | rabwah | upland / plateau region (open doubt 3) |
| പേമാരി / കനത്ത മഴ / ചാറൽ മഴ | wabil / tall | downpour / heavy rain / drizzle |
| മിനുസ / മിനുത്ത / ഉറച്ച | safwan / sald | smooth / sleek / hardened |
| നീചപ്രവൃത്തി / നീചവൃത്തി | fahsha' | vile work / vile conduct (as earlier parts) |
| വാഗ്ദത്തം / വാഗ്ദാനം | wa'd | promise / promise (as earlier term tables) |
| മാനം / അന്തസ്സ് / ദുരഭിമാനം / വാഞ്ഛ | — | esteem / dignity / false pride / craving |
| മനുഷ്യപ്പിശാച് / സാക്ഷാൽ പിശാച് / ദുർമന്ത്രം | — | human devil / the actual Satan / evil mantra |
| ഇപ്രകാരം / അങ്ങനെ / ഇങ്ങനെയുള്ള / അങ്ങനെയുള്ള | — | in this manner / thus / of this kind / such |
| ഉത്തമം / ഭേദം | khair | excellent / better |
| സാധുക്കൾ / സജ്ജനങ്ങൾ | — | the needy / the righteous (as earlier parts) |
| ദുർവൃത്തികൾ / തോന്നിയവാസങ്ങൾ | — | evil conduct (open doubt 5) / licentiousness |
| ഉദ്ദേശ്യലക്ഷ്യം / ലക്ഷ്യമാക്കുക | — | intention and aim / aim at |
| ദൃഢീകരണം / ദൃഢപ്പെടുത്തൽ | tathbit | firming / making firm |
| ധർമ സമരം | jihad | righteous struggle |
| വാഗ്ദത്തം (താക്കീത്- ഭീഷണി) | ya'id | promise (warning- threat) |
