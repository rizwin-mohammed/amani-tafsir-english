# Check: Al-Baqarah part 13 (verses 80–88)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 129–139 (book pp. 300–310), rendered at 150 dpi and read in full, including the one footnote (p. 309). PDF page 140 (book p. 311) was also looked at. The verse panels and word tables (pp. 300–302, 304–305, 306–307, 309) were re-read at 300 dpi; the Arabic الاَوْس وَالخَزْرَج and قَيْنُقَاع، نَضِير، قُرَيْظَة (p. 305), حسان بن ثابت ـ رضـ (p. 308) and the Ha-Mim Sajdah 5 quotation (p. 309) at 600–1200 dpi. The `ml2uni.py` text layer was used only for spelling.
- Scope: the part starts at the verse 80–82 panel on p. 300, directly after part 12's "അല്ലാഹു നമ്മെ കാത്തു രക്ഷിക്കട്ടെ. ആമീൻ", and ends on p. 310 with "രണ്ട് വ്യാഖ്യാനവും പരസ്പരം എതിരല്ലതാനും." ("Moreover, the two interpretations are not contrary to each other."), directly above the verse 89 panel. Both boundaries confirmed.
- `part.json`, `verses.json` (verses 80–88), `words.json` (148 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. No sentence is missing or added. The footnote of p. 309 (marker (\*) after "points its finger at this fact", in the paragraph that runs on to p. 310) is placed right after that paragraph, i.e. after "… thus Allah informs the Prophet ﷺ."; correct.
- `verses.json` Malayalam and every `words.json` gloss were compared with the images; they match after correction 1. Printed slips kept in the Malayalam and translated by their evident (certain) meaning without a note: തിരിഞ്ഞുളയുന്നവരു|മാകുന്നു (v. 83, for തിരിഞ്ഞുകളയുന്ന-; the word table has തിരിഞ്ഞു (അവഗണിച്ചു)കളയുന്നവരാണ്), നി പറയുക (word table v. 80, for നീ), തമ്മതമ്മിൽ (v. 84, for തമ്മിൽതമ്മിൽ), ബന്ധുകൾക്കും (v. 83, for ബന്ധുക്കൾക്കും). In each the intended word is certain from the words around it, as with the slips left silently in parts 08–09.
- Quran quotations (point g). Each printed phrase was compared with its verse in `data/quran-uthmani.json`: لَا تَعۡبُدُونَ (2:83), إِنَّآ أَنزَلۡنَا ٱلتَّوۡرَىٰةَ .... وَٱلۡأَحۡبَارُ (5:44), وَمُصَدِّقٗا لِّمَا بَيۡنَ يَدَيَّ مِنَ ٱلتَّوۡرَىٰةِ (3:50), وَأَيَّدۡنَٰهُ بِرُوحِ ٱلۡقُدُسِ (2:87), نَزَّلَهُۥ رُوحُ ٱلۡقُدُسِ مِن رَّبِّكَ (16:102), إِذۡ أَيَّدتُّكَ … وَكَهۡلٗا (5:110), بَل لَّعَنَهُمُ ٱللَّهُ بِكُفۡرِهِمۡ (2:88), بَلۡ طَبَعَ ٱللَّهُ عَلَيۡهَا بِكُفۡرِهِمۡ (4:155): the printed words are the same as the verse (ordinary spelling only), so they stay in the data-file form, as in parts 04 and 08–12. The 41:5 phrase had a printed word missing (correction 2). `npm run check` reports for Al-Baqarah only the one known "close but not exact" item (تَابَ إِلَى الله, part 06).
- Arabic as printed (point f), at 900–1200 dpi: الاَوْس وَالخَزْرَج (fatha on the alif, sukun on و; fatha on خ, sukun on ز, fatha on ر), قَيْنُقَاع، نَضِير، قُرَيْظَة (printed here with final ع, unlike قينقاء on p. 190), حسان بن ثابت ـ رضـ (unvowelled, long dash before رضـ). All as transcribed.
- `[p. N]` markers 301–303, 305–310 checked against the printed page numbers and page breaks. P. 304 holds only the verse 85–86 panels and word table, so it has no marker. The [p. 306], [p. 308] and [p. 310] markers fall mid-sentence (ദേഹം | പോലെ; യഹൂ|ദികൾ; അല്ലാ|ഹുവിന്റെ) and sit at the nearest matching point. The author's headings വിഭാഗം – 10 (p. 302) and വിഭാഗം – 11 (p. 306) are present as "### Section – 10" and "### Section – 11".
- Glossary renderings (Rabb where the author writes റബ്ബ്, (a), ﷺ) and earlier parts' renderings (pact, assurance for ഉറപ്പ്, Children of Isra'il, the Israelites, the people of Hell, permanent dwellers, good deeds, true faith, belief, Paradise, Hell, the Hereafter, the Day of Qiyamah, unmindful, transgression, curse and wrath, set a seal / stamp a seal, the right path for നേർവഴി, guidance for മാർഗദർശനം, make out to be false / treat as lies, the noble Prophet, self / selves for ദേഹം in the verses) are used.

## Corrections made (before → after)

### Malayalam as printed (verses.json)

1. Verse 83: the print has no word space in അടു|ത്തബന്ധുകൾക്കും (the line is letter-spaced for justification; the gaps are the same as between the letters; the text layer also has no space): "അടുത്ത ബന്ധുകൾക്കും" → "അടുത്തബന്ധുകൾക്കും". (The word table's അടുത്ത | ബന്ധമുള്ളവർക്കും falls across a line break and is left with its space.)

### Arabic dropped (commentary.md, p. 309)

2. Ha-Mim Sajdah 5: the image (600 dpi) prints … مِمَّا تَدْعُونَا إِلَيْهِ..... ; the English had stopped at تَدۡعُونَآ and dropped إِلَيۡهِ. Now copied from 41:5 in the data file: "**وَقَالُواْ قُلُوبُنَا فِيٓ أَكِنَّةٖ مِّمَّا تَدۡعُونَآ.....**" → "**… مِّمَّا تَدۡعُونَآ إِلَيۡهِ.....**".

### Same English for two different Malayalam words

3. Verse 81 and its word table: നേടി / നേടിവെക്കുക had "earned", which in this part (pp. 301–302, "earned disbelief", "earned evil") and part 12 renders സമ്പാദിക്കുക: verse "whoever has **earned** and laid up evil" → "whoever has **gained** and laid up evil"; word table "whoever (anyone) **earned**" → "whoever (anyone) **gained**". The commentary keeps "earned" for സമ്പാദിക്കുക.
4. p. 303, ബാധകമായ ("applicable") had "binding", next to ബാധ്യസ്ഥർ "bound" in the following sentence; on p. 306 the same word ബാധകമാകുന്നു is "apply": "is not a pact **binding** on them alone" → "is not a pact **applicable** to them alone".
5. p. 308, പിൻബലം had "backing", the rendering of പിൻതുണ in verse 85 ("giving backing"): "the one that has the **backing** of the Quran and of hadith" → "… the **support** of the Quran and of hadith".

### Tense

6. p. 305, the author's habitual future (-ഉം) is "will" throughout the paragraph ("will join", "will carry out", "will collect"); two places had "would": "wars **would** keep taking place now and then" (നടന്നുകൊണ്ടിരിക്കും) → "wars **will** keep taking place …"; "their reply **would** be this" (ഇതായിരിക്കും) → "their reply **will** be this".

### Sentence order

7. p. 308, Hassan ibn Thabit hadith: the English had moved "It has come in hadith" to the front. Put back in the author's order (… നു വേണ്ടി … എന്ന് തിരുമേനി പ്രാർത്ഥിച്ചതായും, ‘… പറഞ്ഞതായും’ ഹദീഥിൽ വന്നിരിക്കുന്നു (ബു. മു)):
   "It has come in hadith that the noble Prophet prayed for Hassan ibn Thabit (…), who was the famous poet of the noble Prophet ﷺ, ‘O Allah, …!’, and ‘that the noble Prophet told him that Jibril will be with him’ (Bu. Mu)" → "That, for Hassan ibn Thabit (…), who was the famous poet of the noble Prophet ﷺ, the noble Prophet prayed ‘O Allah, strengthen him with Ruh al-Quds!’, and ‘that the noble Prophet told him that Jibril will be with him’ has come in hadith (Bu. Mu)".

### Doubts

8. p. 305, tribes and alliances (point c): new DOUBT after "… and the third tribe with the Aws." The text is translated as printed. The DOUBT cites only the book itself: on p. 190 (part 02) the author says the first tribe (Qainuqa') was allied with the Khazraj and the last two with the Aws. This follows the earlier checkers' rule (a note may rest on the book's own words, as in part 11's Surat al-Isra'il TN, never on outside knowledge). Because it cannot be known from the book which of the two statements is the slip, it is a DOUBT, not a TN.
9. Word table v. 81, بَلَىٰ (point a): the translator's DOUBT is kept, reworded to say what the English adds: "*[DOUBT: ഇല്ലാതെ (ഉണ്ട്) is literally "without (there is)"; it may mean "on the contrary (it is so)". Translated literally.]*" → "*[DOUBT: ഇല്ലാതെ (ഉണ്ട്) is literally "without (there is)"; "not" is added in the English to make the sense of an affirming reply ("how not! (there is)"). It may mean "on the contrary (it is so)". Please confirm the rendering.]*" (The English "not without" was not a literal rendering, as the old note said.)

No dropped sentences or small words, misplaced footnotes or page markers, reversed negations, may/will errors, added pronouns, added ﷺ, or silently corrected misprints were found.

## Checked and left as they are

- **ദേഹം "body" on p. 305 (point d).** In "ഒരേ മതാവലംബികളായ സമുദായം ഒരേ ദേഹം പോലെയാണെന്നും അതിലെ അംഗങ്ങൾ …" the author uses the body-and-members image (അംഗങ്ങൾ "members"); "a single body" is the plain sense. Elsewhere ദേഹം renders nafs and is "self" (part 08, part 12; ദേഹങ്ങൾ "selves" in verse 87, ദേഹേച്ഛകൾ "desires of their selves" on p. 307). Left as "body", because "a single self" would lose the image the next clause builds on; flagged for the reviewer (open doubt 3).
- **"lighten" for both ലഘൂകരിക്കുക (verse 86) and ലഘുവാക്കുക (word table)** (point e): the same root ലഘു ("light"), both "make light"; acceptable, like "curse" for ശാപം / ശപിക്കുക.
- **New-terms set (point e)** checked for one English word used for two Malayalam words: apart from corrections 3–5, none found. "the right path" is only നേർവഴി (as in parts 04, 09) and "right guidance" does not occur in this part; "advice" is only ഉപദേശങ്ങൾ (pp. 307, 309); "prophets" for both പ്രവാചകന്മാർ and നബിമാർ follows earlier parts; "Ruh al-Qudus" (റൂഹുൽ ക്വുദുസ്) and "Ruh al-Quds" (റൂഹുൽ ക്വുദ്സ്) mirror the two printed spellings. "because of" serves both നിമിത്തം and മൂലം (small connectives; left).
- **Verse 85 "But if they come …"** for വന്നാലാകട്ടെ (the word table has വന്നാലോ "but if"): the contrast of ആകട്ടെ is carried by "But". Left.
- **Verse 87 / commentary "We strengthened you" (5:110 gist)**: the author's Malayalam has നാം ("We"); kept as his rendering.
- **ശിക്ഷ(യിൽവെച്ച്) "punishment (in)"** (word table v. 85): literal; left.
- **Printed slips mirrored silently**: the unclosed "(Gist:" brackets of 5:44, 3:50, 5:110; the closing ’ without opening in the 5:44 gist; "(Nahl :102)" inside an unclosed bracket; no full stop after "(Bu. Mu)" and after "more than one interpretation has been given".
- **Group markers** *[Verses 80–82]*, *[Verse 83]*, *[Verses 84–86]*, *[Verse 87]*, *[Verse 88]*: **not the author's words**; navigation aids kept as in parts 01–12. They match the author's groups on the images (panels on pp. 300–301, 302, 303–304, 306–307, 309). See the note in part 02's `check.md`.
- `part.json` verses "80-88", pages "300-310", PDF pages "129-139": correct.

## Open doubts for the reviewer

1. **بَلَىٰ gloss, ഇല്ലാതെ (ഉണ്ട്)** (word table v. 81). Translator's DOUBT kept (correction 9).
2. **Tribes and alliances** (p. 305 against p. 190). New DOUBT (correction 8). Note also that p. 305 prints قَيْنُقَاع (with ع) where p. 190 printed قينقاء.
3. **ദേഹം "body" (p. 305) against "self" for ദേഹം elsewhere**: please confirm.
4. **Earlier open doubts still apply** (not in this part): the hadith abbreviations including ജ (part 01), പതിച്ചവരാണവർ (part 02), വേദവാദികൾ and അമറാത്തി (part 03), ഇവിടെ അതുകൊണ്ട് വിവക്ഷ (part 04), the word order of Ibn Kathir's Arabic (part 05), السهوانى and "Profoundly Knowing" (part 06), പിൻപറ്റിയേക്കുന്നതാണ്, ലക്ഷ്യം, ദാ, وممن الله التوفيق and شجرة الخلد (part 07), the four doubts of part 08, the seven of part 10, the doubts of parts 11 and 12, and the group markers (part 02). ലക്ഷ്യം on p. 307 clearly means "aim".

## New terms (not in the glossary; used consistently in this part)

Includes the translator's list. Flagged for Rizwin to confirm:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| കുത്തകാവകാശികൾ | — | holders of the monopoly right (part 10: "monopoly claim" for കുത്തകാവകാശവാദം) |
| വിജയം / മോക്ഷം | — | success / salvation |
| ആഭിജാത്യം / വർഗീയം / വർഗം | — | nobility of birth / racial / race |
| മാനദണ്ഡം | — | criterion |
| ദുഷ്പ്രവൃത്തികൾ / സൽപ്രവൃത്തികൾ / സൽകർമങ്ങൾ | — / — / al-salihat | evil works / good works / good deeds |
| നേടുക (നേടിവെക്കുക) / സമ്പാദിക്കുക | kasaba (كسب) | gain (gain and lay up) / earn |
| രക്ഷാമാർഗം | — | way of deliverance |
| നിസ്സാരം | — | trifling |
| നിരോധാജ്ഞ | — | prohibitive command |
| വകുപ്പുകൾ | — | clauses |
| ബാധകം / ബാധ്യസ്ഥർ / നിർബന്ധർ | — | applicable (apply) / bound / obliged |
| വിശ്വാസാചാരങ്ങൾ | — | beliefs and practices |
| അനുഷ്ഠാന കർമങ്ങൾ / അനുഷ്ഠാനമുറകൾ / മതാനുഷ്ഠാനങ്ങൾ | — | acts of ritual observance / modes of observance / religious observances |
| നിർബന്ധ കർമം | fard | obligatory act |
| കൽപനകൾ | — | commandments (as in part 04) |
| പഴയ നിയമം | — | the Old Testament |
| ഭവനങ്ങൾ / വീട് / വാസസ്ഥലം | diyar (ديار) | homes / house / dwelling-place |
| മോചനമൂല്യം | fida' (تفادوهم) | price of release |
| തടവുകാർ / ബന്ധനസ്ഥർ / ബന്ധനം / ചിറ | usara (أسارى) | captives / those made captives / bonds / captivity |
| പിൻതുണ നൽകുക / പിൻബലം | tazaharun (تظاهرون) / — | give backing / support |
| കുറ്റം / അതിക്രമം | ithm / 'udwan | offence / transgression |
| അപമാനം (നിന്ദ്യത) | khizy (خزي) | disgrace (abasement) |
| ഇഹലോക ജീവിതം / ഐഹിക / പാരത്രിക | al-hayat al-dunya | the life of this world / worldly / otherworldly |
| ലഘൂകരിക്കുക / ലഘുവാക്കുക | yukhaffaf (يخفف) | lighten (both; same root) |
| സഖ്യകക്ഷി / സഖ്യബന്ധം | — | ally / alliance |
| വിഗ്രഹാരാധകർ | — | idol-worshippers |
| ഏകോദര സഹോദരന്മാർ | — | brothers born of one womb |
| വിധികൾ / മതവിധി | ahkam | rulings / religious ruling |
| വിരോധാഭാസങ്ങൾ | — | paradoxes |
| പലിശ | riba | interest |
| നിഷ്കർഷത | — | strictness |
| നേർവഴി / തന്റേടം | — | the right path (as in parts 04, 09) / firmness of mind |
| ദൂതന്മാർ / റസൂൽ | rusul / rasul | messengers / Rasul |
| പരിശുദ്ധാത്മാവ് / റൂഹുൽ ക്വുദുസ് / റൂഹുൽ ക്വുദ്സ് | ruh al-qudus | the Holy Spirit / Ruh al-Qudus / Ruh al-Quds (two printed spellings) |
| ഇൻജീൽ | Injil | Injil |
| ജിബ്രീൽ / മലക്ക് | Jibril | Jibril / angel |
| റബ്ബാനീകൾ / പുണ്യപുരുഷന്മാർ / പണ്ഡിതന്മാർ | rabbaniyyun / — / ahbar | rabbanis / pious men / scholars |
| നിയമസംഹിത / നടപടിക്രമങ്ങൾ / ഭേദഗതി | — | code of law / procedures / amendment |
| ദൗത്യകാലം | — | period of his mission |
| ദിവ്യദൃഷ്ടാന്തങ്ങൾ | — | divine signs |
| അഹംഭാവം നടിക്കുക / അഹംഭാവം കാണിക്കുക / ഗർവ്വിഷ്ടർ / അഹംഭാവികൾ | istakbartum | put on arrogance / show arrogance / full of pride / arrogant |
| ദേഹേച്ഛകൾ / തന്നിഷ്ടം | — | desires of their selves / self-will |
| ദേഹം (p. 305) | — | body (see open doubt 3) |
| വ്യാജമാക്കുക / കളവാക്കുക | kadhdhaba | make out to be false / treat as lies (as in part 07) |
| വധിക്കുക / കൊലപ്പെടുത്തുക | qatala | put to death / kill |
| ഉറയിട്ട് / മൂടപ്പെട്ട / മൂടികൾ | ghulf / akinnah | encased / covered / coverings |
| ശാപം / ശാപകോപം / ശപിക്കുക | la'nah | curse / curse and wrath / curse |
| പാത്രമാകുക | — | become objects of |
| പരിഹാസം | — | mockery |
| ആക്ഷേപാർഹം / ആക്ഷേപിക്കുക | — | reprehensible / reproach |
| കൽപിച്ചുകൂട്ടി | — | deliberately |
| ന്യായം | — | justification (as in part 10) |
| പ്രബോധനം / ശിക്ഷണം | — | preaching / training |
| നിയമനിർദ്ദേശങ്ങൾ / ഉപദേശങ്ങൾ | — | legal directions / advice |
| ഏറ്റുസമ്മതിക്കുക / ഏറ്റുപറയുക | aqrartum | accept and agree / acknowledge |
