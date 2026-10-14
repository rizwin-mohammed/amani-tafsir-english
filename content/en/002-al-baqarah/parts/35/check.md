# Check: Al-Baqarah part 35 (verses 219–223)

Checked on 2026-10-14 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 353–365 (book pp. 524–536). Each page was rendered at 150 dpi and read once in full (this part has no footnotes). The `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary, and `pdftotext -bbox` was used for the vowel marks and word joins of the Arabic on pp. 527, 528, 531 and 535. The amanithafseer.com text was not used beyond the translator's notes on site-vs-book differences. Crops: the 2:219 quotation on p. 527 (300 dpi, one that missed the line, then 300 dpi and 600 dpi) and the Hashr 9 quotation on p. 528 (300 dpi, one that cut the marks, then 300 dpi); six crops in all.
- **Boundaries.** Part 34 ends on p. 523 with "… ‘മുജാഹിദുകൾ’ എന്നും പറയപ്പെടുന്നത്."; p. 524 begins directly with the verse 219 panel, and this part starts there. This part ends on p. 536 with "… സത്യവിരുദ്ധമാണെന്ന് മനസ്സിലായല്ലോ.", directly above the verse 224 panel on the same page. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 219–223), `words.json` (104 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images (panels pp. 524, 529–530, 532; word tables pp. 525, 530, 532–533), in the printed order. ZWNJ only in മുശ്‌രിക്കുകൾക്ക്, മുശ്‌രിക്കിനെക്കാൾ and (മ്‌ളേഛ്‌ചമാണ്), where the text layer has an explicit chandrakkala.
- `[p. N]` markers: 525–531 and 533–536. P. 524 holds only the 219–220 panels and p. 532 only the heading, the 222–223 panels and the start of their table, so neither has a marker. [p. 525], [p. 530] and [p. 533] stand at the start of commentaries whose tables fill the tops of those pages, and [p. 535] at the start of a paragraph. Page turns: [p. 526] "all kinds of *[p. 526]* intoxicating" (എല്ലാ വിധ / ലഹരി); [p. 527] "some temporary *[p. 527]* good points" (താൽക്കാലികമായ / ചില ഗുണങ്ങളും); [p. 528] "spe*[p. 528]*nd" (ചിലവ/ഴിക്കാറുണ്ടായിരുന്നു); [p. 529] "your *[p. 529]* own brothers" (നിങ്ങളുടെ / നേർ); [p. 531] "ka*[p. 531]*fir" (കാ/ഫിറു); [p. 534] after "become pure" (ശുദ്ധി/യാകുക); [p. 536] "fol*[p. 536]*lows" (ഇങ്ങനെയു/മാണ്). All are right.
- Groups: *[Verses 219–220]* | *[Verse 221]* | "### Section – 28" (വിഭാഗം - 28, printed above the 222 panel on p. 532) | *[Verses 222–223]*. All match the print.

## Corrections made (before → after)

### Arabic as printed

1. p. 527, the 2:219 quotation: the bbox has no vowel mark over the hamza of يسألونك (on the same page, in وَيَسْأَلُونَكَمَاذَا, the hamza's fatha is a separate mark), and the 600 dpi crop shows only the hamza on the alif: **يَسْأَلُونَكَ عَنْ الخَمْر والمَيْسَر** → **يَسْألُونَكَ عَنْ الخَمْر والمَيْسَر**. The rest was confirmed: sukun on ن of عن and on م of الخمر, fatha on خ, no kasra on ر, bare article; in المَيْسَر fatha on م and س, sukun on ي. و and الميسر are one bbox word (pixel gap 1.2 pt, within the range of gaps inside joined words), so kept joined.

### Small word misplaced or doubled

2. p. 526, "മദ്യപാനത്തെയും, ചൂതാട്ടങ്ങളെയും നിരോധിച്ചുകൊണ്ടുള്ള കൽപനയും": the -ഉം that gives "too" is on കൽപനയും (the commandment), and the other two are "both … and": "the commandment prohibiting drinking alcohol, and gambling too was put into effect step by step" → "the commandment prohibiting both drinking alcohol and gambling was also put into effect step by step".
3. p. 534, "വേറെ പല ക്വുർആൻ വചനങ്ങളിൽ നിന്നും … മനസ്സിലാകുന്നതുമാണ്": നിന്നും is the usual form of നിന്ന് (as part 34 noted); the -ഉം is rendered once, on the verb: "From many other Quran verses too this reality is also understood" → "From many other Quran verses this reality is also understood".

### Added word

4. p. 527, "മേൽവിവരിച്ചതിൽ നിന്നും മറ്റും സ്പഷ്ടമാണ്": മറ്റും is "and so on", not a place: "from what has been explained above, and elsewhere" → "from what has been explained above, and so on".

### Renderings brought into line with earlier parts

5. കൃഷി: parts 11 and 33 render it "cultivation" in the tables (الحرث "വിളയെ, കൃഷിയെ" / "വിള, കൃഷി" "crop, cultivation"), and earlier commentary uses "cultivation" for it (parts 10, 20, 25). "tillage" → "cultivation" throughout: v. 223 (`verses.json`: "your cultivation (-ground)", "go to your cultivation"), the v. 223 table (حَرۡثٞ "are cultivation (crop-ground)", حَرۡثَكُمۡ "…, to your cultivation"), and the commentary (കൃഷി "cultivation", കൃഷിയിടം "cultivation-ground", കൃഷിസ്ഥലം "cultivation-place"; 10 places on pp. 534–535).
6. p. 526, തോന്നിയവാസങ്ങൾ: part 32 and 33 render തോന്നിയവാസം "licentiousness": "law-breaking, theft, wayward acts, murders" → "law-breaking, theft, licentious acts, murders".
7. p. 530, അനുഷ്ഠിക്കേണ്ടുന്ന: part 32's table keeps അനുഷ്ഠിക്കുക "practise" apart from ആചരിക്കുക "observe" (ഐത്തം ആചരിക്കുക, p. 533, stays "observing"): "rules of procedure and laws that the true believers need to observe" → "… need to practise".
8. p. 527, "സ്വഹാബികളിൽപെട്ട ഒരു കൂട്ടരോട്": part 34 renders കൂട്ടർ "party" (and this part has ഇരു കൂട്ടരും "the two parties", p. 531; അക്കൂട്ടർ "that group", as part 34): "A group belonging to the Companions" → "A party belonging to the Companions".

No may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced footnotes, words added inside the author's brackets or translator words in round brackets were found apart from the above.

## Points the caller asked about

- **(1) "Close but not exact" items.** يَسْألُونَكَ عَنْ الخَمْر والمَيْسَر (2:219): correction 1. وَيُؤْثِرُونَ عَلَىأَنْفُسِهِمْ وَلَوْكَانَبِهِمْ خَصَاصَةٌ (59:9, p. 528): the bbox has only the fatha on ل in the لى region (426–433 pt) and no other mark there; the second crop (the first cut off the marks) shows no dagger alif or madda on ى. عَلَى is joined to أنفسهم (no gap), ولو|كان 0.3 pt (joined), و of ويؤثرون overlaps يؤثرون. Kept as transcribed. `npm run check` lists both as "close but not exact", with no other new item.
- **(2) والله اعلم** (end of the 219–220 commentary, p. 529): the shadda and dagger alif belong to the ﷲ-ligature glyph and are not in the text layer; part 32 kept such ligatures bare. Kept bare. اللهُ اكبر (p. 534) likewise.
- **(3) "Ma'idah : 93, 94"** is printed on both p. 526 and p. 527 (the site's 90, 91 is a silent correction). Kept without a TN, since a TN would rest on outside knowledge. "സൂറത്തുൽ മാഇദഃ 6-ാം വചനത്തിൽ" (p. 531) is likewise kept as printed.
- **(4) വിളക്കൽ** (v. 223 table, حَرۡثَكُمۡ): printed clearly; read as വിള + -ക്കൽ "at the crop", parallel to "കൃഷിയുടെ അടുക്കൽ", or a misprint. The DOUBT is kept.
- **(5) ലക്ഷ്യം DOUBTs** (v. 219, v. 221, v. 219 table): the same open question as parts 01–02, 07, 17, 20, 23 and 30 (part 30's table also has ആയത്ത് (ലക്ഷ്യം- വചനം) "ayah (evidence – verse)s"). Kept.
- **(6) Items kept as printed**, all confirmed on the images: the doubled എന്ന് (p. 533; the English gives the question once), ചെയ്തുവെക്കെണമെന്നാണ് (p. 536), വാക്യകൊണ്ടുദ്ദേശിക്കപ്പെട്ടിരിക്കുന്നതെന്ന് (p. 535), "ഉൻമേഷം. ധൈര്യം" (p. 527; "vigour. courage"), "?! ." before اللهُ اكبر (p. 534), v. 222 "അരുത് അങ്ങനെ," (no stop), v. 219 ending "വേണ്ടി,-", the unclosed ‘ of v. 220 (‘അവർക്ക് …; then ‘നിശ്ചയമായും … ’), the closing ’ with no opening after "ഇഷ്ടപ്പെടുന്നു." (p. 534), and the fragment of point (3) in the 221 commentary ("…, that Allah indeed explained."). All are mirrored in the English and need no TN.
- **(7) Heading and honorifics.** "വിഭാഗം - 28" stands on p. 532 above the 222 panel; "### Section – 28" is right. ﷺ is printed 15 times: p. 525 one, p. 526 one, p. 527 two, p. 528 one (റസൂൽ ﷺ), p. 531 one, p. 533 five (നബി ﷺ four times, നബി തിരുമേനി ﷺ once), p. 534 one, p. 535 two (റസൂൽ ﷺ), p. 536 one; none at തിരുമേനി alone (pp. 526, 531). The English has exactly 15. (r) is printed 11 times: 'Umar twice, Ibn Jarir, Ibn Abi Hatim, Ibn 'Abbas (p. 527); Jabir, Ibn Jarir (p. 528); Muslim (p. 533); Ibn Kathir, Abu Hurairah, Ibn 'Abbas (p. 535). The English has the same 11.
- **(8) Terms**, checked by grep against earlier word tables, commentaries and check.md tables:
  - കുറ്റം "offence", പാപം "sin", ദോഷം "ill", തെറ്റ് "wrong": as parts 13, 26, 28, 31, 33 (കുറ്റം/പാപം) and 25–26, 34 (ദോഷം "ill"); തെറ്റ് "wrong" as parts 28 and 32.
  - പ്രയോജനം "benefit" (as part 28's table pair ഗുണകരം / പ്രയോജനം), ഉപകാരം "use" (new), ഗുണങ്ങൾ "good points" (ഗുണം "good", parts 16, 28).
  - ഉപദ്രവം "harm", ശല്യം "nuisance": as part 32's table for أَذٗى. (മ്‌ളേഛ്‌ചമാണ്) "(is foul)": an earlier part rendered മ്ളേച്ഛം "filthy", but this part uses "filth / filthy" for മാലിന്യം / മാലിന്യവതി, so "foul" keeps the two apart (open doubt 3).
  - തോന്നിയവാസം "licentious(ness)" (correction 6); അക്രമം "wrongdoing / wrongfully", as the tables of parts 10, 14, 23.
  - അനുഷ്ഠിക്കുക "practise" / ആചരിക്കുക "observe" (correction 7); ആചാരങ്ങൾ "customs" (as part 27); സമ്പ്രദായം "usage" (as part 32's ദുഃസ്സമ്പ്രദായം "evil usage"; part 27 had "practice"; open doubt 4). പാലിക്കുക (p. 535, വിധിവിലക്കുകൾ പാലിച്ചുകൊണ്ടും) is "observing", as സൂക്ഷ്മത പാലിക്കുക "observe caution" (parts 01, 03, 11, 30); "observe" thus serves both പാലിക്കുക and ആചരിക്കുക, as before this part (open doubt 4).
  - ജ്ഞാനം "learning" (as part 23); ദാനധർമം "almsgiving" (as part 32); ധർമം "charity"; വിധിവിലക്കുകൾ "injunctions and prohibitions" (as earlier tables).
  - കൂട്ടർ "party" (correction 8).
  - നാശം "corruption" (as parts 02–10, 33); ബുദ്ധിമുട്ടിക്കുക "put to difficulty" (ബുദ്ധിമുട്ട് "difficulty", as part 34); പ്രതാപശാലി / അഗാധജ്ഞൻ "the Majestic / the Profoundly Knowing" (as parts 06, 20, 33); സ്മരണീയം "worth remembering" (സ്മരിക്കുക "remember", parts 23, 32, 33); ഓർമവെക്കുക "keep in memory" (ഓർമ "memory", part 33).
  - ഉപാധി: "conditions" on p. 531 (as part 26's table "condition"), but "means" on p. 534 ("ഒരു ഉപാധി മാത്രമായിട്ടല്ല", an instrument for fulfilling feelings), where "condition" gives no sense. Left; open doubt 5.
  - ശിഷ്ടം "remainder" (v. 219, table, as a noun); the brief notes ശിഷ്ടമായ "good/excellent" earlier, a different form. Left.

## Checked and left as they are

- p. 526 "Following their having drunk alcohol": the Malayalam is subjectless (മദ്യപിച്ചതിനെ തുടർന്ന്); "their" refers to the "some" of the previous sentence, the only possible referent. Left.
- v. 223 "Guard against Allah, and know …" for "… സൂക്ഷിക്കുകയും, … അറിയുകയും ചെയ്യുവിൻ": the paired -ഉം is "and"; left.
- v. 222 table "and you must not approach them" (ചെയ്യരുത് with -ഉം) and the v. 221 table "you must not give in marriage either": both render the -ഉം once; left.
- p. 535 "his deeds … are (all) cut off" for അവന്റെ കർമം (മുഴുവനും): singular collective rendered plural; left.
- p. 536 ":--" before the next paragraph: the image shows the author's ":-" dash; punctuation only; left.
- p. 531 Mumtahinah 10 (لاهُنَّحِلٌّ لَهُمْ وَلا هُمْ …): the glyphs of هم are missing from the text layer, so the join of ولا|هم cannot be measured from the bbox; the translator's crop-based spacing is kept. أُولَئِكَ يَدْعُونَ إِلَى النَّارِ likewise.
- p. 535 وَقَدِّمُوالأنْفُسِكُمْ: bbox confirms no mark on the hamza, sukun on ن; kept (also on p. 536).
- `part.json` verses "219-223", pages "524-536", PDF pages "353-365": correct.

## Open doubts for the reviewer

1. **വിളക്കൽ** (v. 223 table; DOUBT in the text).
2. **ലക്ഷ്യം beside ആയത്ത്** "evidence" or "aim" (v. 219, v. 221, v. 219 table; DOUBTs in the text), as earlier parts.
3. **മ്ളേച്ഛം "foul"** here against "filthy" in an earlier part, because this part needs "filth / filthy" for മാലിന്യം / മാലിന്യവതി.
4. **"observe"** for both ആചരിക്കുക and പാലിക്കുക (the latter as in "observe caution", parts 01–30); **സമ്പ്രദായം "usage"** (part 32) against "practice" (part 27).
5. **ഉപാധി** "conditions" (p. 531) and "means" (p. 534).
6. **Ma'idah "93, 94"** (pp. 526–527) and "6-ാം വചനം" (p. 531) kept as printed without TN.
7. **Earlier open doubts still apply** (not in this part): see parts 13–34.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| കള്ള് / മദ്യം / മദ്യപാനം / ചാരായം / കഞ്ചാവ് | khamr | liquor / alcohol / drinking alcohol / arrack / cannabis |
| മത്ത് / ലഹരി | — | inebriation / intoxication |
| ചൂതാട്ടം / ചൂതുകളി / പന്തയം / ഷോടതി / ഭാഗ്യക്കുറി | maisir | gambling / games of dice / wager / raffles / lotteries |
| കുറ്റം / പാപം / ദോഷം / തെറ്റ് | ithm | offence / sin / ill / wrong (as earlier parts) |
| പ്രയോജനം / ഉപകാരം / ഗുണം | manafi' | benefit / use / good points |
| സൗകര്യപ്പെട്ടത് / ശിഷ്ടം / വിട്ടുവീഴ്ച / മാപ്പ് | al-'afw | what is convenient / remainder / letting go / pardon (as part 30) |
| ഉറ്റാലോചിക്കുക / ഓർമവെക്കുക | yatadhakkarun | reflect intently / keep in memory |
| ബുദ്ധിമുട്ടിക്കുക | a'nata | put to difficulty |
| നന്മ വരുത്തൽ / നന്മയുണ്ടാക്കുന്നവൻ | islah / muslih | bringing about goodness / one who causes goodness |
| അൽഭുതപ്പെടുത്തുക / കൗതുകം / ആശ്ചര്യപ്പെടുത്തുക | a'jaba | amaze / fascination / astonish |
| ആർത്തവം / ആർത്തവകാലം / ഋതുകാലം | mahid | menstruation / menstrual period / menstrual season |
| സംഭോഗം / സംയോഗം / സമീപനം | — | coitus / union / approach |
| മാലിന്യം / വൃത്തിഹീനം / അശുദ്ധി / ശുദ്ധീകരണം / ശുദ്ധി | — | filth / unclean / impurity / purification / purity |
| ഐത്തം ആചരിക്കുക / തീണ്ടുക / സമ്പ്രദായം | — | observe untouchability / defile by touch / usage (as part 32; open doubt 4) |
| കൃഷി / കൃഷിയിടം / കൃഷിസ്ഥലം / വിളയിടം / വിളവ് | harth | cultivation (as parts 11, 33; correction 5) / cultivation-ground / cultivation-place / crop-ground / yield |
| മുൻകൂട്ടി ചെയ്തുവെക്കുക / മുന്നൊരുക്കം | qaddimu | do and lay by beforehand / advance preparation |
| പ്രാരാബ്ധം | — | family burden |
| അർത്ഥവ്യാഖ്യാനം | — | interpretation of meaning |
| സദ്‌വൃത്ത(ൻ) | — | of good conduct |
| പിശാച് | al-shaitan | Satan |
| അരുളിചെയ്യുക | — | declare (as earlier parts) |
| ഉപാധി | — | conditions (p. 531) / means (p. 534) (open doubt 5) |
| അനുഷ്ഠിക്കുക / ആചരിക്കുക / പാലിക്കുക | — | practise / observe / observe (correction 7; open doubt 4) |
| കൂട്ടർ / അക്കൂട്ടർ | — | party / that group (as part 34; correction 8) |
| തോന്നിയവാസം | — | licentiousness (as parts 32–33; correction 6) |
