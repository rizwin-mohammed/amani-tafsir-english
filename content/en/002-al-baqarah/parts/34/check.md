# Check: Al-Baqarah part 34 (verses 211–218)

Checked on 2026-10-14 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 341–352 (book pp. 512–523). Each page was rendered at 150 dpi and read once in full, including the footnote on p. 517. The full (untruncated) `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary, and `pdftotext -bbox` was used for the vowel marks and word joins of every Arabic item (pp. 515, 517, 521, 522, 523) and for the order of the v. 217–218 word table. The amanithafseer.com text was used only to see what the site has for the v. 213 and v. 217 panels and tables. Crops: the Yunus 19 quotation (p. 515, 300 dpi), the Hajj 78 quotation (p. 523, 300 dpi; two crops, the first missed the line), and the top of p. 524 (60 dpi) for the end boundary.
- **Boundaries.** Part 33 ends on p. 512 with "… ചെന്നവസാനിക്കുന്നതും. ( والى اللّهترجع الامور )". The heading "വിഭാഗം - 26" and the verse 211 panel follow directly on the same page, and this part starts there. This part ends on p. 523 with "… ‘മുജാഹിദുകൾ’ എന്നും പറയപ്പെടുന്നത്.". P. 524 (PDF p. 353) was opened: it begins directly with the verse 219 panel, with no heading or commentary above it. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 211–218), `words.json` (164 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The footnote on p. 517 (San'a', Hadramawt) follows the Khabbab paragraph, which holds its (\*) marker after "(ബു.)", and is complete.
- `verses.json` and every `words.json` gloss match the images (panels pp. 512–513, 514, 516, 517–518, 518–519, 519–520; word tables pp. 513, 514–515, 516, 518, 519, 521). ZWNJ only in ‘ഫിത്‌ന’ (as part 31). ഇസ്റാഈൽ and ഹിജ്റഃ are written without ZWNJ, as earlier parts write ഇസ്റാഈൽ.
- **v. 217–218 word table (point e).** The site's text runs the end of this table together (it repeats وَمَن / يَرْتَدِ and drops entries). The order was settled from the glyph positions in `pdftotext -bbox`, line by line: … وَكُفْرٌ بِهِ "അവനിൽ അവിശ്വസിക്കലും" | وَالْمَسْجِدِ الْحَرَامِ "മസ്ജിദുൽ ഹറാമിൽ നിന്നും" | وَإِخْرَاجُ "ബഹിഷ്കരിക്കലും" | أَهْلِهِ | مِنْهُ | أَكْبَرُ | عِندَ اللَّهِ | وَالْفِتْنَةُ | أَكْبَرُ | مِنَ الْقَتْلِ | وَلَا يَزَالُونَ | يُقَاتِلُونَكُمْ | حَتَّى يَرُدُّوكُمْ | عَن دِينِكُمْ | إِنِ اسْتَطَاعُوا | وَمَن | يَرْتَدِدْ | مِنكُمْ | عَن دِينِهِ | فَيَمُتْ | وَهُوَ كَافِرٌ | فَأُولَئِكَ | حَبِطَتْ | أَعْمَالُهُمْ | فِي الدُّنْيَا | وَالآخِرَةِ | وَأُولَئِكَ | أَصْحَابُ النَّارِ | هُمْ فِيهَا | خَالِدُونَ, then the 218 entries. Every entry and its order in `words.json` agree with the print.
- `[p. N]` markers: 513–519 and 521–523. P. 512 holds only the end of part 33, the heading and the start of the v. 211 panel, and p. 520 holds only the panels for verses 217–218, so neither has a marker. [p. 513], [p. 515], [p. 518], [p. 519] and [p. 521] stand at the start of commentaries whose panels or tables fill the tops of those pages. Page turns: [p. 514] "lo*[p. 514]*wer" (താഴേ/ക്കിടയിലായി); [p. 516] after "belief in God" (ദൈവ/വിശ്വാസത്തിലും, as near as the English allows); [p. 517] "attacks, *[p. 517]* and torments" (ആക്രമണങ്ങളും, / യാതനകളും); [p. 522] before "left the company" (നിമിത്തം / കൂട്ടം വിട്ടുപോകയുണ്ടായി); [p. 523] "its *[p. 523]* consequence" (അതിന്റെ / ഭവിഷ്യത്ത്). All are right.
- Groups: "### Section – 26" | *[Verses 211–212]* | *[Verse 213]* | *[Verse 214]* | *[Verse 215]* | *[Verse 216]* | "### Section – 27" (വിഭാഗം - 27, printed above the 217 panel) | *[Verses 217–218]*. All match the print.

## Corrections made (before → after)

### Renderings brought into line with earlier parts

1. p. 515, നേർവഴി: parts 04, 09 and 13 render it "the right path" (part 13's check says "the right path" is only നേർവഴി): "He made them come to be on the right course." → "He made them come to be on the right path."
2. p. 515, നേർമാർഗം (Ibn Kathir's riwayahs): the term tables of parts 04, 11 and 26 give "the straight way": "mankind were all on the straight path" → "mankind were all on the straight way". To keep the two Malayalam forms apart, the other phrase, നേരായ മാർഗം (first sentence of the v. 213 commentary), now takes "path": "It was along the straight way that the human community kept walking" → "It was along the straight path that the human community kept walking". See open doubt 1 (part 33 used "straight path" for നേർമാർഗം).
3. കഷ്ടപ്പാട്: part 27's table renders കഷ്ടപ്പാടിലും "and in suffering" (beside വിഷമത "hardship", കഷ്ടത "adversity", ദുരിതാവസ്ഥ "state of misery", which this part follows). v. 214 table (`words.json`): "and distress, and misery" → "and suffering, and misery"; p. 516: "miseries and distresses such as disease, war, poverty, famine" → "miseries and sufferings such as disease, war, poverty, famine".

### Dropped small word

4. p. 521, "അവരിൽ രണ്ട് പേർ": പേർ ("persons", as in "ഏഴോ എട്ടോ പേരടങ്ങുന്ന" and "രണ്ട് പേർ ബന്ധനസ്ഥരാകുകയും" in the same account) was dropped: "On the way, two of them, because …" → "On the way, two persons among them, because …".

No may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced footnotes, words added inside the author's brackets, or translator words in round brackets were found.

## Points the caller asked about

- **(a) No DOUBTs or TNs were placed.** None is needed:
  - p. 517 "എന്നിട്ടതും അത് അയാളെ … തിരിച്ചുകളയുമായിരുന്നില്ല": the image clearly prints എന്നിട്ടതും. Read as എന്നിട്ട് + അതും ("then, that too"), it parallels the next sentence "അതും … തിരിച്ചുകളയുമായിരുന്നില്ല" ("That too would not …"); read as a slip for എന്നിട്ടും ("even then") it gives the same sense. The literal "Then that too, it would not turn him away from his religion" keeps both the extra അത് and the meaning; left without a DOUBT.
  - p. 515 "അബുൽആലിയ:," – a stray colon before the comma. It is punctuation only; earlier checks add no TN for punctuation slips. The English simply has "Abul 'Aliyah,". Left.
  - p. 522 ഹള്റമി (text layer ഹള്വ്റമി; ള്വ is the book's letter for ض): "al-Hadrami" follows the print; nothing is corrected. Left.
  - v. 213 "വന്നു / കിട്ടിയതിന്" (panel, line end): the text layer cannot decide it (its spaces and hyphens in letter-spaced lines are justification artefacts; compare "സന്തോ- ഷ വാർത്ത", joined in the table as സന്തോഷവാർത്ത). The joined form is kept, as the translator chose; the English ("had come to them") is the same either way. The same holds for "അവിശ്വാസിയായും / കൊണ്ട്" in the v. 217 table (kept spaced, as the translator chose).
- **(b) Arabic as printed**, confirmed from the bbox glyph boxes and marks:
  - وَمَاكَانَ النَّاسُ إِلاأُمَّةًوَاحِدَةًفَاخْتَلَفُوا (p. 515, Yunus 19): و|ما|كان joined; 1.5 pt space before النَّاسُ; 0.8 pt before إلا and 0.7 pt after it; everything after أمة joined (≤ 0.5 pt). Kasra on إ, no shadda on the lam of إلا, tanwin on أمة and واحدة. The 300 dpi crop shows the gaps around إلا at nearly the same width, so the transcription as made (space before, joined after, following the 0.8/0.7 thresholds used in parts 31–33) is kept; see open doubt 4.
  - صنعاء (p. 517 footnote): no marks. حَضَرَ مَوْت: fatha on ح, ض, ر and م, sukun on و, 3.0 pt space between the words.
  - نَخْلَة (p. 521): fatha on ن and ل, sukun on خ (لة is one glyph).
  - غَنِيمَة (p. 522): fatha on غ and م, kasra on ن.
  - فَيَمُتْوَهُوَ كَافِرٌ (p. 523): fatha on ف and ي, damma on م, sukun on ت; the ت and و boxes overlap (joined); 1.3 pt space before كافر; fatha, damma, fatha on وهو; tanwin damma on ر.
  - جِهَاد، مُجَاهدة (2.0 pt space after the comma; only damma on م and fatha on ج in the second word); جَاهَدَ (fatha on ج, ه, د).
  - وَجَاهِدُوافِي اللَّهِحَقَّ جِهَادِهِ (Hajj 78): وا|في joined (0.4 pt); 0.6 pt before الله and 0.6 pt before جهاده, while الله|حق overlap; the crop shows the two small gaps. Kept spaced as transcribed. Every mark (damma on د, shadda with fatha on الله and on ق) as in the file.
  - وَجَاهِدُوابِأَمْوَالِكُمْوَأَنْفُسِكُمْفِيسَبِيلِاللَّهِ (Tawbah 41): every join ≤ 0.4 pt or overlapping; damma on ف of أنفسكم; all marks as in the file.
  - المُفردات (damma on م only); جِهَاد (kasra, fatha).
- **(c) ﷺ and (r).** ﷺ is printed 7 times: p. 521 twice (നബി ×2), p. 522 twice (നബി ×2), p. 523 three times (നബി ×3). There is none at തിരുമേനി alone (pp. 517, 521). The English has exactly these 7. (r) is printed 8 times: Ibn 'Abbas, Hakim, Mujahid, Ibn Kathir (p. 515), Khabbab (p. 517), 'Abdullah ibn Jahsh (pp. 521 and 523), Raghib (p. 523); the English has the same 8. (a) is printed 3 times (Adam and Nuh together, Adam, Nuh; p. 515); the English has the same 3.
- **(d) Groups, markers, footnote**: see "What was compared".
- **(e) v. 217 table**: see "What was compared".
- **(f) Terms**, checked by grep against earlier parts and the glossary:
  - People words: ജനങ്ങൾ "the people" (v. 217 "(the people)", p. 522) and ആൾക്കാർ "people" (v. 217 "its people", "the people of Hell"), as parts 07, 20 and 32 (part 20 noted the pair as weak; open doubt 3). ആളുകൾ "folk" (p. 522) is new; part 08 used "Fir'aun's folk" for ഫിർഔന്റെ കൂട്ടർ, a fixed phrase; in this part കൂട്ടർ is "party" and അക്കൂട്ടർ "that group". പേർ "persons" (correction 4).
  - Guidance family: മാർഗദർശനം "guidance" (part 01); സൻമാർഗം "right guidance" (part 26); നേർമാർഗം "the straight way" (parts 04, 11, 26; corrections 1–2); നേർവഴി "the right path" (parts 04, 09, 13); നേരായ മാർഗം "the straight path" (new).
  - Hardship family: വിഷമത "hardship" and കഷ്ടത "adversity" (as part 27's v. 177 panel); ദുരിതം "misery" (part 27 ദുരിതാവസ്ഥ "state of misery"); കഷ്ടപ്പാട് "suffering" (part 27; correction 3); ബുദ്ധിമുട്ട് "difficulty"; ഞെരുക്കം "strait"; യാതന "torment".
  - നിത്യവാസി "permanent dwellers" (parts 04, 13, 25) and സ്ഥിരവാസി "permanent residents" (part 07): kept apart, as earlier.
  - അലംഘനീയം "unbreachable" (v. 217 table, new) and അലംഘ്യം "inviolable" (p. 522, as part 31): kept apart.
  - വഴിപോക്കൻ "the wayfarer" (v. 215, as part 27) and വഴിയാത്രക്കാർ "wayfarers" (p. 518): one English for two words. An earlier part also has "wayfarers" in the Hajar account (its Malayalam was not checked here). Left (open doubt 2).
  - നബിമാർ and പ്രവാചകൻമാർ are both "prophets", as in earlier parts.
- **(g) Part 33 lessons.** Nothing is added inside the author's brackets ("(straight) upright path", "[those of that place]", "(even) said", "(than that)"). Subjects are supplied only where English needs one and the referent is certain ("he came to deem" = man, p. 515; "He also consoles them", "He also alerts", the convention for subjectless actives after Allah is named; "One will deal with them too", p. 523). -ഉം is attached where the Malayalam attaches it (e.g. "Besides that too", "have also had to undergo" for അനുഭവിക്കേണ്ടിയും, "is to you … also an aversion(-bearing thing)"); no -ഉം is rendered twice. No shadda needed a crop beyond those listed.

## Checked and left as they are

- v. 214: "(Not only that) they also quaked, so that the Rasul, and those who believed along with him, (even) said …": English puts the main clause first; within one sentence, as English requires.
- p. 516 "From the side of the deniers of the truth, the true believers have also had to undergo …": the -ഉം of "നിന്നും" is the usual form of നിന്ന്; the verb's own -ഉം (അനുഭവിക്കേണ്ടിയും) gives "also".
- p. 517: the hadith opens with ‘ and has no closing mark, as printed.
- p. 522: "two persons were taken captive" for ബന്ധനസ്ഥരാകുകയും ചെയ്തു ("became captives"): no agent is added; left.
- p. 523 "One will deal with them too just as indeed with the disbelievers": the Malayalam has no subject (പെരുമാറും); "One" is neutral. Left.
- p. 518 the stop after "(Bear in mind … 190- 193.)" and p. 522 the missing stop after "(… ഓർക്കുക)": mirrored.
- `part.json` verses "211-218", pages "512-523", PDF pages "341-352": correct.

## Open doubts for the reviewer

1. **നേർമാർഗം**: "the straight way" in parts 04, 11 and 26 and now here (correction 2), but "the straight path" in part 33 (pp. 510, 512). നേരായ മാർഗം (new here) is "the straight path". The reviewer may wish to fix one rendering for each and align part 33.
2. **വഴിയാത്രക്കാർ / വഴിപോക്കൻ** both "wayfarer(s)".
3. **ആൾക്കാർ "people" / ജനങ്ങൾ "the people" / ആളുകൾ "folk"**: the first two differ only by the article (as part 20 noted).
4. **Spacing around إلا** in the Yunus 19 quotation (p. 515) and before الله and جهاده in the Hajj 78 quotation (p. 523): gaps of 0.6–0.8 pt that the crops cannot clearly separate; transcribed as made.
5. **എന്നിട്ടതും** (p. 517) kept literally (point a).
6. **Earlier open doubts still apply** (not in this part): see parts 13–33.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| സ്പർദ്ധ / മാൽസര്യം / അസൂയ | baghy | rivalry / spite / jealousy |
| ഗണിക്കുക / ധരിക്കുക | hasiba | deem / suppose |
| കിടിലം കൊള്ളുക / വിറപ്പിക്കപ്പെടുക | zulzilu | quake / be made to tremble |
| വിഷമത / കഷ്ടത | ba'sa' / darra' | hardship / adversity (as part 27) |
| കഷ്ടപ്പാട് / ദുരിതം / ബുദ്ധിമുട്ട് | darra' / ba'sa' | suffering (as part 27; correction 3) / misery / difficulty |
| മാതൃക / മാതിരി | mathal | model / pattern |
| ഭിന്നാഭിപ്രായം / അഭിപ്രായ ഭിന്നത | ikhtilaf | difference of opinion / divergence of opinion |
| ഭിന്നിപ്പ് / പിളർപ്പ് | — | division / split |
| നിയോഗിക്കുക | ba'atha | commission |
| സന്തോഷവാർത്ത അറിയിക്കുക | mubashshirin | announce glad tidings |
| ശിക്ഷാനടപടി | 'iqab | punitive action (as part 32) |
| കണക്കില്ലാതെ | bi-ghairi hisab | without account |
| ഗുണകരം / ദോഷകരം | khair / sharr | beneficial / detrimental |
| വെറുപ്പ് / അനിഷ്ടം | kurh | aversion / dislike |
| നേരായ മാർഗം / നേർമാർഗം / നേർവഴി / സൻമാർഗം / മാർഗദർശനം | huda | straight path / straight way (as parts 04, 11, 26) / right path (as parts 04, 09, 13) / right guidance / guidance (corrections 1–2; open doubt 1) |
| ബഹിഷ്കരിക്കുക / പുറത്താക്കുക | ikhraj | banish / expel |
| ജനങ്ങൾ / ആൾക്കാർ / ആളുകൾ / പേർ | — | the people / people / folk / persons (open doubt 3) |
| പ്രവർത്തനങ്ങൾ / കർമങ്ങൾ | a'mal | actions / deeds |
| നിഷ്ഫലം | habita | fruitless |
| സമരം | jihad | struggle (as part 31) |
| എഴുത്ത് / കത്ത് | — | writing / letter |
| കൂട്ടം / സംഘം / കൂട്ടുകാർ / സ്വഹാബികൾ | — | company / band / comrades / Companions |
| ഗനീമത്ത് | ghanimah | ghanimah |
| ധാതു / ക്രിയാരൂപം / പര്യായപദം | — | root / verb form / synonym |
| ഉൽബോധിപ്പിക്കുക / ഉണർത്തുക / സമാശ്വസിപ്പിക്കുക | — | exhort / alert / console |
| മോടി | — | glitter |
| അലംഘനീയം / അലംഘ്യം | haram | unbreachable / inviolable (as part 31) |
| നിത്യവാസി / സ്ഥിരവാസി | khalidun | permanent dwellers (as parts 04, 13) / permanent residents (as part 07) |
| വഴിപോക്കൻ / വഴിയാത്രക്കാർ | ibn al-sabil | the wayfarer (as part 27) / wayfarers (open doubt 2) |
