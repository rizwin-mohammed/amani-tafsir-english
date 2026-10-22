# Check: Al-Baqarah part 48 (verses 275–277)

Checked on 2026-10-22 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 491–500 (book pp. 662–671). Each page was rendered at 150 dpi and read once in full, including the two footnotes on p. 664, beside the full `ml2uni` text layer. `pdftotext -bbox` was used for the vowel marks and word boxes of every Arabic phrase in the commentary. Crops: three small ones on p. 665 at 400 dpi, for the position of the kasra (one showed رِبَا الفَضل, one missed its line, one showed رِبا النقد). The amanithafseer.com text was used only through the translator's notes on site-vs-book differences.
- **Boundaries.** Part 47 ends on p. 662 with "… ധർമമായിത്തീരുന്നതാണ്.’ (ബു; മു.)"; the verse 275 panel follows directly on the same page (no heading). This part starts there. It ends on p. 671 with the lead-in line "പലിശ നിരോധത്തെ തുടർന്ന് … അല്ലാഹു അറിയിക്കുന്നു:-", printed below the 277 word table and directly above the verse 278 panel (no heading). Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 275–277), `words.json` (50 entries: 275: 29; 276: 9; 277: 12), `commentary.md`.
- Groups: *[Verse 275]* (panel p. 662, table pp. 662–663, commentary pp. 663–669) | *[Verse 276]* (panel and table p. 669, commentary pp. 669–671) | *[Verse 277]* (panel and table p. 671; only the lead-in line follows). Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added apart from the corrections below.
- `verses.json` and every `words.json` gloss match the images in the printed order. Line-end spacing decided from the text layer: in the 275 panel the layer joins words broken across lines (എഴു/ന്നേൽക്കുന്ന, തിന്നുന്ന/വർ) but keeps a line break between പറഞ്ഞത് and കൊണ്ടത്രെ, so "പറഞ്ഞത് കൊണ്ടത്രെ" stays spaced; in the 277 panel the same holds for "അവരുടെ മേൽ" (spaced). In the 276 panel the layer breaks at every printed line end, even inside a word (അല്ലാഹു/വാകട്ടെ), so it cannot decide തുടച്ചു/നീക്കുന്നു; it is written joined, like the table's തുടച്ചുനീക്കും. Table line-end splits ((മഹാ-ക/ടുത്ത), നിലനിറുത്തുകയും / ചെയ്തു) follow the print. സക്കാത്ത് (277 table) and സകാത്ത് (277 panel) are both printed so. No ZWNJ is printed in these items or in the files.
- `[p. N]` markers 663–671. P. 662 holds only the end of part 47 and the 275 panel and table start, so it has no marker. [p. 663] and [p. 669] stand at the start of the commentary and of list item (1); page turns: "reprehen*[p. 664]*sion", "one article *[p. 665]* for", "interest de*[p. 666]*als", "whi*[p. 667]*te", "Such and so on *[p. 668]* are", "conse*[p. 670]*quences", "towards him *[p. 671]*". All are right.
- Honorifics: ﷺ printed 18 times (p. 664: 3; p. 665: 6; p. 666: 4; p. 668: 1; p. 669: 4); the English has 18, none at the bare തിരുമേനി (pp. 665, 668, 669, "the noble Prophet") or the bare നബി in നബി വചനം (p. 670, "a saying of the Prophet"). (r) printed 18 times (p. 663 Ibn Jarir; p. 664 Jabir; p. 665 Abu Sa'id twice, Muslim, Bilal; p. 666 Bilal twice; p. 667 Baihaqi; p. 668 Rashid Rida, Ibn Kathir, Abu Hurairah; p. 669 Hasn ibn 'Ali, Wabisah, Jabir, Ibn Mas'ud; p. 670 Ibn Mas'ud, Muslim); the English has 18. (a): none.
- Footnotes (*) (the seven great sins) and (**) (ربا / ربوا) on p. 664: (*) after the paragraph ending "(Ja: Ba.)", (**) after the paragraph ending "That is:". Right.

## Corrections made (before → after)

### Dropped words

1. p. 666, "വുദ്വൂ ചെയ്യുന്നതിന്റെ ഫലമായി ക്വിയാമത്തുനാളിൽ സത്യവിശ്വാസികളുടെ മുഖവും …": ക്വിയാമത്തുനാളിൽ was not rendered. "That as a result of doing wudu the face and the hands …" → "That as a result of doing wudu, on the Day of Qiyamah, the face and the hands …".
2. p. 668, hadith, "അതിന്റെ പൊടിപടലത്തിൽ നിന്നും ബാധിക്കുന്നതാണ്": -ഉം not rendered. "it will befall from its dust.’" → "it will befall from its dust too.’".

### Reported speech changed

3. p. 669, (1), "ഞാൻ നബിﷺയിൽ നിന്ന് ഇങ്ങനെ പഠിച്ചിരിക്കുന്നുവെന്ന് പറഞ്ഞുകൊണ്ട് ഹസ്നുബ്നുഅലി (റ) ഉദ്ധരിക്കുന്നു:": the print has his own words in the first person. "(1) Hasn ibn 'Ali (r) quotes, saying that he has learnt thus from the Prophet ﷺ:" → "(1) Saying I have learnt thus from the Prophet ﷺ, Hasn ibn 'Ali (r) quotes:".

### Added words, pronoun, punctuation

4. p. 663, "… ഉപജീവന മാർഗം തന്നെ അതായിരുന്നു": one തന്നെ was rendered twice. "that indeed was the very way of livelihood" → "that was the very way of livelihood".
5. p. 665, "കാരക്ക വേറെ ഒരുവിൽപനയായി വിറ്റേക്കുക": "as another, separate sale" doubled വേറെ → "as a separate sale".
6. p. 669, (2), "വിരലുകൾ കൂട്ടിപിടിച്ചു": no possessive is printed. "holding his fingers together" → "holding the fingers together".
7. p. 666, "പിശാച് മറിച്ചു വീഴ്ത്തുക ( يَتَخَبَّطُهُالشَّيْطَانُ ) എന്ന വാക്ക്": no quotation marks are printed. "the word ‘Satan throwing down’ (" → "the word Satan throwing down (".
8. p. 664, footnote (*), "… വ്യഭിചാരാരോപണം നടത്തൽ ഇവയാണ് ആ ഏഴെണ്ണം": no dash is printed (a dash would read as the author's). "women- these are those seven" → "women, these are those seven".

### Reference changed

9. p. 668, "പലിശ ഇടപാടുകളിൽ നിന്നും, അതിന്റെ പൊടിപടലങ്ങളിൽ നിന്നും": അതിന്റെ refers to പലിശ. "and from their dust" → "and from its dust".

### Renderings brought into line with earlier parts / one English per Malayalam word

10. p. 670, പരലോകത്തിലാകട്ടെ: പരലോകം is "the Hereafter" in the earlier term tables (al-akhirah). "In the other world, for its part" → "In the Hereafter, for its part".
11. p. 666, ഭിന്നാഭിപ്രായമില്ല: earlier tables have ഭിന്നാഭിപ്രായം "difference of opinion" (അഭിപ്രായ ഭിന്നത "divergence of opinion"). "no divergence of opinion" → "no difference of opinion".
12. p. 668, അഭിപ്രായവ്യത്യാസങ്ങളും: an earlier table has അഭിപ്രായവ്യത്യാസം "variance of opinion". "differences of opinion" → "variances of opinion".
13. p. 669, വിധിവിലക്കുകൾ: earlier tables have "injunctions and prohibitions". "His commands and prohibitions" → "His injunctions and prohibitions".
14. p. 668, "എത്രമേൽ ഗൗരവപ്പെട്ട അപരാധമായിട്ടാണ്": കുറ്റം is "offence" in the earlier term tables and in this part (കുറ്റക്കാർ "offenders", കുറ്റത്തിൽ, കുറ്റം, കുറ്റമാണെങ്കിൽ; കുറ്റകരം "culpable"); അപരാധം needs its own word. "How very grave an offence" → "How very grave a misdeed" (see open doubt 3).
15. p. 667, "മുതൽ മുടക്കി ആദായം എടുക്കലാണ് പലിശ": മൂലധനം is "capital" on p. 664, and മുതൽ is "property" in this part (പലിശ(മുതൽ), പലിശ മുതൽ, പലിശമുതൽ). "laying out capital" → "laying out property".
16. p. 670, നേട്ടങ്ങൾ: "gain" is this part's word for ആദായം (with അധികാദായം "extra gain", മിച്ചാദായം "surplus gain"). "the gains to be obtained in this world" → "the attainments to be obtained in this world".

No dropped എന്നോണം or list items, may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, dropped or replaced തിരുമേനി, added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced notes, translator words in round brackets, or added or re-vowelled Arabic were found apart from the above.

## Points the caller asked about

- **(1) The lead-in line** "പലിശ നിരോധത്തെ തുടർന്ന് … അല്ലാഹു അറിയിക്കുന്നു:-" (p. 671, below the 277 table, above the 278 panel). Earlier parts end on such lines and start the next part at the panel: part 31 ("… Hajj and 'Umrah are spoken about:-"), part 44 ("… another extraordinary event …:-", with part 45 starting at the 260 panel), and inside parts 40 and 46 the line stays at the end of the group before the panel. It is kept at the end of this part under *[Verse 277]*. Rendered "Following the prohibition of interest, Allah makes known some matters that the true believers ought to know:-"; right.
- **(2) DOUBTs (2).** The dots "…." / "...." touch the left end of the Arabic on p. 666 (لا يَقُومُونَإِلا كَمَا يَقُومُ) and p. 668 (وَمَنْ عَادَفَأُولَئِكَ أَصْحَابُ النَّارِ). On the images they stand between the Malayalam and the left (closing) end of the Arabic, so the reading order cannot be settled; both quotations are cut off verses, which fits dots after them. The DOUBTs state only this. Kept.
- **(3) TN on p. 667.** The bbox confirms the print: وَحَرَّمَا (the alif 0.5 pt from the م) then a 3.1 pt gap before لرِّبَوا, while the other word gaps on the line are 1.6–2.0 pt; الله and the article of البيع share one word box (joined). The TN states only what is visible on the page and compares it with the book's own verse panel (p. 662), not with an outside source, and it is not about punctuation: it explains why the Arabic on the site looks wrong. As the meaning is certain (the verse is printed correctly in the panel), a DOUBT would not fit. Kept as a TN, as part 36 kept a TN that "points out a printed difference and rests on the book itself". `npm run check` lists 22 Al-Baqarah "close but not exact" items: the 21 of earlier parts and this phrase; the list is identical before and after my edits.
- **(4) Markers, counts, footnotes**: see "What was compared". 50 word-table entries; ﷺ 18 and (r) 18 as printed.
- **(5) Printed forms kept**: (മാഇദഃ : 163) with no note (as part 44 ruled for printed references); ബാനീ "Bani"; ഹസ്നുബ്നുഅലി "Hasn ibn 'Ali"; ".." after കൊണ്ടുമിരിക്കുന്നു ("more complicated.."); the closing quote with no opening one (p. 670, Ibn Mas'ud's hadith) and the opening quote with no closing one (p. 665, ‘Where (did you get) this from); the first Abu Sa'id hadith (p. 665) opens and is not closed before (Bu; Mu.). എനി (p. 668, for ഇനി) is printed so; "Now" (meaning certain, no TN, as parts 46–47). "എല്ലാം അവന്റെ അടിമയും ഉടമയിലും" (p. 667) rendered "All are His slaves and in His ownership". The 276 panel join and the 275 panel spacing: see "What was compared".
- **(6) Arabic** (bbox marks and word boxes; codepoints compared with the file):
  - الَّذِينَ يَأْكُلُونَالرِّبَا (p. 663): shadda+fatha on ل, kasra on ذ, fatha on ن; fatha on ي, sukun on أ, dammas on ك and ل, fatha on ن; shadda+kasra on ر, fatha on ب. Word boxes: الذين|يأكلون 1.1 pt, يأكلون|الربا 0.3 pt. As in the file.
  - ربوا (p. 664), ربا النسيئة (bare, spaced), footnote رِبَا (kasra on ر, fatha on ب) and ربوا twice (bare). As in the file.
  - رِبَا الفَضل and رِبا النقد (p. 665), رِبا الفضل (p. 666): the crops show the kasra under ر (and fatha on ب in the first; fatha on ف); رِبا الفضل on p. 666 has the same glyph boxes as رِبا النقد; spaced. As in the file.
  - لا يَقُومُونَإِلا كَمَا يَقُومُ (p. 666): لا|يقومون 1.0 pt, يقومون|إلا overlapping (joined), إلا|كما 1.6 pt, كما|يقوم 1.0 pt; لا and إلا bare (no shadda). As in the file.
  - مَسّ (fatha on م, shadda on س) and يَتَخَبَّطُهُالشَّيْطَانُ (ه|ال 0.5 pt, joined; all marks as in the file) (p. 666).
  - أَحَلَّ اللَّهُالْبَيْعَ وَحَرَّمَا لرِّبَوا (p. 667): see (3); marks as in the file (no mark on و or ا of الربوا).
  - وَأَمْرُهُإِلَىاللَّهِ (p. 668): boxes touch or overlap throughout; marks as in the file. وَمَنْ عَادَفَأُولَئِكَ أَصْحَابُ النَّارِ (p. 668): ومن|عاد 1.5 pt, عاد|فأولئك 0.7 pt (joined), فأولئك|أصحاب 1.0 pt, أصحاب|النار 1.2 pt; marks as in the file.
  - اللّه اعلم (p. 667): graphic, bare, on its own line at the end of the paragraph; placed at the end of that paragraph, as parts 39–47.
- **(7) Site-vs-book differences**: the translator's notes were spot-checked on the images (panel "പലിശ(മുതൽ)", "പലിശപോലെത്തന്നെയാണ്’", "വിരമിച്ചുവോ, -എന്നാലവന്"; table "എഴുന്നേൽക്കുന്നതുപോലെയല്ലാതെ", "പലിശമാതിരിതന്നെയാണ്", "തന്റെ റബ്ബിൽനിന്ന്"; 276 panel "മഹാ പാപിയായ"; 277 table "നിലനിറുത്തുകയും ചെയ്തു"; p. 663 "(പലിശതിന്നുന്നവർ)"). The book is followed in each.
- **(8) Terms**, checked by grep against earlier term tables and word tables:
  - As earlier parts: പലിശ "interest" (part 13); സദുപദേശം "good counsel"; ഉപദേശം "counsel"; വിരമിക്കുക "desist"; നിത്യവാസികൾ "permanent dwellers" and സ്ഥിരവാസികൾ "permanent residents" (kept apart, as earlier tables); ഇടപാട് "deal"; ക്രയവിക്രയം / വിൽപന / കച്ചവടം "buying and selling / sale / trade" (bay'); കുറ്റം "offence"; ന്യായം "justification" (as part 45; both uses here, p. 666 "no justification is seen" and p. 667 "antiquated justification", have that sense); ന്യായവാദം "argument"; ന്യായീകരിക്കുക "justify"; കുതർക്കം "quibbling"; രക്ഷാധികാരി "Guardian"; സ്രഷ്ടാവ് "Creator"; ശാപകോപങ്ങൾ "curse and wrath"; ദോഷകരം "detrimental"; പുണ്യം "merit"; അടിയാൻ "servant" and അടിമ "slave" kept apart; ബർക്കത്ത് "barakah"; താക്കീത് "warning"; ദുർവ്യാഖ്യാനം "misinterpret"; അക്രമം "wrong"; യുക്തിതത്വം "sagacious principle"; രക്ഷിതാവ് "Lord" (glossary). Corrections 10–16.
  - New and kept apart inside this part: ആദായം / അധികാദായം / മിച്ചാദായം / ലാഭം / നേട്ടം / പ്രയോജനം "gain / extra gain / surplus gain / profit / attainment / benefit"; മൂലധനം / മൂലസംഖ്യ / അസൽ സംഖ്യ / മുതൽ "capital / original sum / principal sum / property"; അവധി / കാലാവധി "term / time-limit"; ബാധ / സ്പർശനം / ഭ്രാന്ത് "affliction / touch / madness"; വിരോധിക്കുക / നിരോധിക്കുക / നിരോധം "disallow / prohibit / prohibition"; ദുരുദ്ദേശ്യം / സദുദ്ദേശ്യം "evil intention / good intention"; പ്രേരകം / പ്രചോദനം "prompter / inspiration".

## Checked and left as they are

- p. 663, "Interest, for its part, satanic character." (പലിശയാകട്ടെ, പൈശാചിക സ്വഭാവവും): the -ഉം pairs this with the sentence before (almsgivings represent humane good character); "too" would not read. Left.
- p. 664, "One: … one will both extend the term again and give it …": no subject is printed; "one" is the English's unavoidable subject. Left.
- p. 668, അനുസരണ ബുദ്ധിയോടും "the spirit of obedience": a compound; ബുദ്ധി alone is "intellect" (part 45). Left (open doubt 5).
- `part.json` verses "275-277", pages "662-671", PDF pages "491-500": correct.

## Open doubts for the reviewer

1. **DOUBTs in the text**: the dots touching the Arabic on p. 666 and p. 668.
2. **TN** on p. 667 (وَحَرَّمَا لرِّبَوا): kept; the reviewer may decide whether such word-division slips in Quran phrases should carry a TN (earlier parts transcribed joins and splits silently).
3. **അപരാധം "misdeed"** (correction 14): no earlier rendering of അപരാധം was found. Part 15's commentary has "misdeed" once ("another misdeed of theirs"); its Malayalam was not re-checked.
4. **വിധി "judgement"** (p. 669, "Seek judgement from your own mind", "pronounce (whatever) judgement"): earlier tables give വിധി "ruling" (hukm). Here the sense is a verdict one seeks; left, but "ruling" may be wanted for one English across parts.
5. **അനുസരണ ബുദ്ധി "spirit of obedience"** (p. 668): see above.
6. **നിരോധം "prohibition" and വിധിവിലക്കുകൾ "injunctions and prohibitions"**: "prohibition(s)" now stands for both നിരോധം (lead-in, p. 671; നിരോധിക്കുക "prohibit", p. 667) and the വിലക്കുകൾ half of the earlier compound.
7. **Earlier open doubts still apply** (not in this part): see parts 13–47.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| പലിശ / പലിശക്കാരൻ / പലിശക്കച്ചവടക്കാർ / പലിശ തീറ്റക്കാർ / പലിശപ്രിയൻമാർ | riba | interest (as part 13) / interest-lender / interest-traders / interest-eaters / interest-lovers |
| ربا النسيئة / ربا الفضل / ربا النقد | — | term-interest (അവധിപ്പലിശ) / surplus-interest (മിച്ചപ്പലിശ) / cash-interest (റൊക്കപ്പലിശ) |
| പലിശ (മുതൽ) / പലിശ മുതൽ / മുതൽ മുടക്കുക | — | interest (property) / interest-property / lay out property (correction 15) |
| ഇടപാട് / ഏർപ്പാട് | — | deal (as earlier parts) / practice |
| കച്ചവടം / വിൽപന / ക്രയവിക്രയം | bay' | trade / sale / buying and selling (as earlier parts) |
| ആദായം / അധികാദായം / മിച്ചാദായം / കച്ചവടലാഭം / നേട്ടം | — | gain / extra gain / surplus gain / trade profit / attainment (correction 16) |
| മൂലധനം / മൂലസംഖ്യ / അസൽ സംഖ്യ | — | capital / original sum / principal sum |
| അവധി / കാലാവധി | — | term / time-limit |
| കടക്കാരൻ / കടം | — | debtor / loan |
| ബാധ / സ്പർശനം / ഭ്രാന്ത് | mass | affliction / touch / madness |
| സദുപദേശം / ഉപദേശം | maw'izah | good counsel / counsel (as earlier parts) |
| വിരമിക്കുക | intaha | desist (as earlier parts) |
| നിത്യവാസികൾ / സ്ഥിരവാസികൾ | khalidun | permanent dwellers / permanent residents (as earlier parts) |
| വിരോധിക്കുക / നിരോധിക്കുക / നിരോധം | — | disallow / prohibit / prohibition |
| ചൂഷണം | — | exploitation |
| കുറ്റം / കുറ്റക്കാർ / കുറ്റകരം / അപരാധം | — | offence / offenders / culpable / misdeed (correction 14; open doubt 3) |
| ന്യായം / ന്യായവാദം / ന്യായീകരിക്കുക / കുതർക്കം | — | justification / argument / justify / quibbling (as earlier parts) |
| സ്രഷ്ടാവ് / പരിപാലകൻ / രക്ഷാധികാരി | — | Creator / Sustainer / Guardian |
| ഭിന്നാഭിപ്രായം / അഭിപ്രായവ്യത്യാസം | — | difference of opinion / variance of opinion (corrections 11–12) |
| ശാപകോപം / ദോഷകരം / പുണ്യം | — | curse and wrath / detrimental / merit (as earlier parts) |
| പരലോകം / ഇഹം / ഐഹിക ജീവിതം | — | the Hereafter (correction 10) / this world / worldly life |
| വിധി / വിധിവിലക്കുകൾ | — | judgement (open doubt 4) / injunctions and prohibitions (correction 13) |
| അടിയാൻ / അടിമ | 'abd | servant / slave (as earlier parts) |
| ബർക്കത്ത് | barakah | barakah (prosperity) |
| മഹാപാപം / മഹാപാപി / നന്ദികെട്ട / അവിശ്വാസക്കാരൻ / അവിശ്വാസി | kaffar / athim | great sin / great sinner / ungrateful / man of disbelief / disbelieving |
| ധർമിഷ്ഠൻ | — | the charitable man |
| ദുരുദ്ദേശ്യം / സദുദ്ദേശ്യം / പ്രേരകം / പ്രചോദനം | — | evil intention / good intention / prompter / inspiration |
| താക്കീത് / ദുർവ്യാഖ്യാനം | — | warning / misinterpret (as earlier parts) |
| കാരക്ക / ബാനീ / സ്വാഉ് | — | dried dates / Bani / sa' |
