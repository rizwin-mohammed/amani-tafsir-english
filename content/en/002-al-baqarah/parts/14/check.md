# Check: Al-Baqarah part 14 (verses 89–98)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 139–149 (book pp. 310–320), rendered at 150 dpi and read in full, including the one footnote (p. 317). The text layer of these pages is badly broken, so the comparison rests on the images; `ml2uni.py` was used only for spelling. Word tables and verse panels were re-read at 300 dpi; the Arabic تَمَنَّوُا, فَتَمَنَّوُا الْمَوْتَ and مُبَاهَلَة (p. 317), تَمَنَّى and فلله الحجة البالغة (p. 318) and the reference "5:20" (p. 317) at 600–900 dpi.
- Scope: the part starts at the verse 89 panel on p. 310, directly after part 13's "രണ്ട് വ്യാഖ്യാനവും പരസ്പരം എതിരല്ലതാനും.", and ends on p. 320 with "… നേതാവുമായിരുന്നു അബ്ദുല്ലാഹിബ്നു സലാം (റ)." ("'Abdullah ibn Salam (r) was a great scholar and leader …"), directly above the verse 99 panel. Both boundaries confirmed.
- `part.json`, `verses.json` (verses 89–98), `words.json` (146 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. No sentence is missing or added. The footnote of p. 317 (marker (\*) after മുബാഹലഃ (…) ക്കുള്ള, in paragraph (2)) is placed right after that paragraph ("… The summary of the criticism is this:-"); correct.
- `verses.json` Malayalam and every `words.json` gloss were compared with the images; they match (including അക്രമികളായും കൊണ്ട് with its space, (നബിയേ)പറയുക without a space in verse 91, യഥാർത്ഥമാണ്താനും across the page break, and അകറ്റികളയുന്നത് with single ക in the word table against അകറ്റിക്കളയുന്ന in verse 96, both as printed). In the verse 96 word table the bidirectional layout of the last line was checked: بِمُزَحۡزِحِهِۦ / مِنَ ٱلۡعَذَابِ / أَن يُعَمَّرَ in that order, as in the file.
- Quran quotations (point f). Each printed phrase was compared with its verse: ٱشۡتَرَوۡاْ (2:90), سَمِعۡنَا وَعَصَيۡنَا, وَأُشۡرِبُواْ فِي قُلُوبِهِمُ - الخ and بِئۡسَمَا يَأۡمُرُكُم بِهِۦٓ إِيمَٰنُكُمۡ (2:93), ٱلدَّارُ ٱلۡأٓخِرَةُ and فَتَمَنَّوُاْ ٱلۡمَوۡتَ (2:94). The printed words are the same as the verse (ordinary spelling only), so they stay in the data-file form. `npm run check` reports for Al-Baqarah only the one known "close but not exact" item (تَابَ إِلَى الله, part 06).
- Arabic as printed (point e), at 600–900 dpi: تَمَنَّوُا (fatha on ت and م, shadda with fatha on ن, damma on و; printed without the fa, so transcribed, not copied), تَمَنّى (shadda only on ن, undotted final ى), مُبَاهَلَة (damma on م, fatha on ب, ه, ل), فلله الحجة البالغة and الله أعلم (unvowelled). All as transcribed.
- "5:20" (point b) is printed clearly (2:80, 2:111, 5:20); kept without a note, since a note would rest on outside knowledge.
- `[p. N]` markers 311–315 and 317–320 checked against the printed page numbers. P. 316 holds only the verse 95–96 panels and the verse 94–96 word table, so it has no marker. [p. 314], [p. 315], [p. 318] and [p. 320] fall mid-sentence (വിശ്വസി|ക്കുന്നില്ലെന്ന്; വിവരിക്കുക|യുമാണ്; അവരുടെ | വാദത്തിൽ; ഇങ്ങനെ|യായിരുന്നു) and sit at the nearest matching point. The author's heading വിഭാഗം – 12 (p. 318) is present as "### Section – 12".
- Glossary and earlier parts' renderings (Rabb, (a), (r), ﷺ only where printed, the noble Prophet for (നബി) തിരുമേനി, the noble Rasul for റസൂൽ തിരുമേനി, favour for അനുഗ്രഹം as in parts 07, 08, 11, servant(s) for അടിയാൻ(മാർ) as in part 04, book for ഗ്രന്ഥം and scripture for വേദഗ്രന്ഥം / വേദം as in parts 07–13, assurance [pact], the Israelites, curse and wrath, signs for ദൃഷ്ടാന്തങ്ങൾ, monopoly right, become objects of, applicable for ബാധകം as in part 13) are used after the corrections below.

## Corrections made (before → after)

### Same English for two different Malayalam words

1. മോഹം / മോഹിക്കുക had "desire", which also renders ഇച്ഛ (ദേഹേച്ഛകൾ, "desires of their selves", part 13; p. 312 here). Now "yearning / yearn" throughout (point d):
   - verse 96: "one of them [each one] **desires**," → "… **yearns**,"; word table: "**desires**" → "**yearns**"; "the ones with the most **desire** among men" (മോഹമുള്ളവരായി) → "… the most **yearning** among men".
   - p. 317: "cannot possibly be that they **desire** with their minds. Because, if they say ‘we **desire**’ without any **desire** at all in the mind" → "… they **yearn** … ‘we **yearn**’ … without any **yearning** …" (see also correction 5).
   - p. 318: "the **desire** for death" (മരണമോഹം), "do not **desire** to die", "Their **desire** will be" → "**yearning** for death", "do not **yearn** to die", "Their **yearning** will be".
2. p. 312, ദേഹേച്ഛകൾ had "bodily desires" (ദേഹം is "self" in parts 08, 12, 13): "temporary **bodily desires**" → "temporary **desires of the self**" (as part 13's "desires of their selves").
3. p. 315, പ്രവൃത്തി had "deed", the rendering of കർമം ("good deeds" for സൽകർമങ്ങൾ, here p. 315 and part 13); part 13 has "works" for പ്രവൃത്തികൾ: "in words and in **deeds**" → "in words and in **works**"; "by attitude and by **deed**" → "by attitude and by **works**". Conversely p. 318, കർമം had "work": "whose **work** was good" → "whose **deeds** were good" (correction 6).
4. p. 318, ബാധകം had "binding"; part 13 (correction 4) settled "applicable" for ബാധകം: "how is it that you make **binding upon** us that matter which is not **binding upon** you?" → "… make **applicable to** us that matter which is not **applicable to** you?"

### Dropped small word

5. p. 317, മനസ്സിൽ ഒട്ടും മോഹമില്ലാതെത്തന്നെ (തന്നെ untranslated): "without any desire at all in the mind" → "**indeed** without any yearning at all in the mind".

### Sentence order

6. p. 318, … എന്ന് ഹദീഥിൽ വന്നിട്ടുമുണ്ട് (as part 13, correction 7): "It has also come in hadith that the best among you is the one whose life-span was increased and whose work was good." → "That the best among you is the one whose life-span was increased and whose deeds were good has also come in hadith."

### Tense and modality (words.json)

7. Verse 89, يَسۡتَفۡتِحُونَ, അവർ വിജയം (സഹായം) അർത്ഥിക്കും (future/habitual -ഉം): "they ask for victory (help)" → "they **will** ask for victory (help)".
8. Verse 95, عَلِيمُۢ, (വളരെ) അറിയുന്നവനാണ്: the bracket is വളരെ ("greatly", as in parts 06 and 09) and stands before the verb: "is the One who knows **(well)**" → "is the One who **(greatly)** knows".

### Capital letter

9. p. 311, അന്ത്യപ്രവാചകൻ (പ്രവാചകൻ, "prophet", as "that prophet" in the same paragraph; capital "Prophet" is used for നബി): "the last **Prophet**" → "the last **prophet**".

### Doubts

10. Verse 92, അക്രമികളായും കൊണ്ട് (point a): translator's DOUBT kept and extended: the same -ഉംകൊണ്ട് form is in verse 93 ((എന്ന് പറഞ്ഞുംകൊണ്ട്), rendered "(while also saying so)"), and the author's own word table for verse 90 renders കോപവുംകൊണ്ട് simply "with wrath". One rendering should be chosen for all three.
11. Word table verse 91, أَنۢبِيَآءَ ٱللَّهِ, അല്ലാഹുവിന്റെ നബി (പ്രവാചകൻ)മാരെ (point c): earlier parts do not separate the two words in the plural (part 13: "prophets" for both നബിമാർ and പ്രവാചകന്മാർ; verse 91 here also has "prophets" for നബിമാരെ), and the singular നബി is "Prophet" only as a title. Rendering both "prophet" would make the author's gloss empty. The translator's "the Nabi (prophet)s of Allah" is kept, on the model of റസൂൽ "Rasul" beside ദൂതൻ "messenger" (verse 98 word table, part 13), with a new DOUBT giving the alternative "the prophet (prophet)s of Allah".

No reversed negations, added pronouns, added ﷺ, changed reported speech, misplaced footnotes or page markers, silently corrected misprints, or Arabic added, dropped or re-vowelled against the print were found.

## Checked and left as they are

- **"favour" / "favourites"**: അനുഗ്രഹം "favour" (as in parts 07, 08, 11); ഇഷ്ടക്കാർ "favourites" (part 08 has "the children and the favourites of Allah" for the same claim). Different English words.
- **"servants"** for അടിയാൻമാർ (part 04 "Our servant" for അടിയാൻ). ദാസൻ does not occur in this part.
- **"book" / "scripture"**: ഗ്രന്ഥം "book", (വേദ)ഗ്രന്ഥം "(scriptural) book", വേദഗ്രന്ഥം and വേദം / വേദങ്ങൾ "scripture(s)", as in parts 07–13.
- **"counsels"** for ഉപദേശങ്ങൾ (p. 315): the English of parts 02–08 uses "counsel(s)" in places (the Malayalam there was not re-checked); part 13 has "advice". No other Malayalam word is "counsel" in this part; left, but the reviewer may wish to fix one rendering for ഉപദേശം.
- **"liking"** for ഇഷ്ടം (p. 319), **"wish"** for ആഗ്രഹം (p. 317), **"longing / long"** for കൊതി / കൊതിക്കുക, **"passion"** for പ്രേമം, **"love"** for സ്നേഹം: each one Malayalam word.
- **Verse 93, "[love for the calf has also filled them]"** for [പശുക്കുട്ടിയോടുള്ള സ്നേഹം നിറയുക]യും: നിറയുക is intransitive ("become full"); "them" refers to "their hearts" just before. Left.
- **Verse 91 word table "in what has sent down" / "Allah"**: word-by-word, as in earlier parts.
- **Verse 98 word table, അവന്റെ റസൂലുകൾക്കും, ദൂതൻമാർക്കും "and to His Rasuls, and to messengers"**: literal.
- **"from Allah's presence"** for അല്ലാഹുവിന്റെ അടുക്കൽ നിന്ന് (word table v. 89) against "from Allah's side" for പക്കൽ നിന്ന് (verse 89): different Malayalam words, kept apart.
- **"or else"** for അതല്ല (p. 319, the two kinds of riwayahs): acceptable.
- **"Allah, too, is their enemy"** for അല്ലാഹു അവരുടെ ശത്രുവുമാകുന്നു (p. 319): the -ഉം is kept.
- **Printed punctuation mirrored**: no full stop after "(2:80, 2:111, 5:20)", before الله أعلم and after فلله الحجة البالغة; "(Even so)" without a full stop before it in verse 91.
- **Group markers** *[Verse 89]*, *[Verse 90]*, *[Verses 91–92]*, *[Verse 93]*, *[Verses 94–96]*, *[Verses 97–98]*: **not the author's words**; navigation aids kept as in parts 01–13. They match the author's groups on the images (panels on pp. 310, 311, 312–313, 314, 315–316, 318–319). See the note in part 02's `check.md`.
- `part.json` verses "89-98", pages "310-320", PDF pages "139-149": correct.

## Open doubts for the reviewer

1. **അക്രമികളായും കൊണ്ട് (verse 92)**, and with it (എന്ന് പറഞ്ഞുംകൊണ്ട്) (verse 93) and കോപവുംകൊണ്ട് (word table v. 90): "too" or not (correction 10).
2. **നബി (പ്രവാചകൻ)മാരെ (word table v. 91)**: "the Nabi (prophet)s" or another form (correction 11). A glossary decision on നബി / പ്രവാചകൻ would settle it for all surahs.
3. **ഉപദേശം**: "counsel" (this part, and apparently parts 02–08) or "advice" (part 13).
4. **ഇച്ഛ / മോഹം**: "desire" / "yearning" as set here (corrections 1–2); part 09's "bodily desires" may need the same check.
5. **Earlier open doubts still apply** (not in this part): see part 13's list.

## New terms (not in the glossary; used consistently in this part)

Includes the translator's list. Flagged for Rizwin to confirm:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| അനുഗ്രഹം | fadl (فضل) | favour (as parts 07, 08, 11) |
| അടിയാൻമാർ | 'ibad (عباد) | servants (as part 04) |
| ഇടപാട് / ക്രയവിക്രയം / വിൽപന / വാങ്ങൽ | ishtara (اشترى) | deal / buying and selling / sale / buying |
| നിന്ദ്യമായ / നിന്ദ്യകരമായ / അപമാനിക്കുന്ന | muhin (مهين) | abasing / abasing / disgracing |
| ആർത്തി | ahras (أحرص) | avid |
| മോഹം / മോഹിക്കുക / മരണമോഹം | wadda (يود) | yearning / yearn / yearning for death (changed from "desire") |
| ഇച്ഛ (ദേഹേച്ഛകൾ) | — | desires of the self |
| കൊതിക്കുക / കൊതി | tamanna (تمنى) | long for / longing |
| ആഗ്രഹം | — | wish |
| പ്രേമം / സ്നേഹം | — | passion / love |
| പരലോക ഭവനം | al-dar al-akhirah | the abode of the Hereafter |
| ഇഷ്ടക്കാർ / ഇഷ്ടം | — | favourites / liking |
| സ്വർഗാവകാശികൾ | — | rightful heirs of Paradise |
| കുത്തകാവകാശം | — | monopoly right |
| മുബാഹലഃ / ശാപപ്രാർത്ഥന | mubahalah (مباهلة) | mubahalah / prayer of curse |
| അസത്യവാദി / വ്യാജവാദി | — | one that maintains untruth / falsehood |
| വെല്ലുവിളി | — | challenge |
| ന്യൂനത / ദോഷം | — | defect / fault |
| ബാധകം | — | applicable (as part 13) |
| കണ്ടറിയുന്നവൻ | basir (بصير) | the One who sees and knows |
| (വളരെ) അറിയുന്നവൻ | 'alim (عليم) | the One who (greatly) knows |
| ദീർഘായുസ്സ് / ആയുസ്സ് | yu'ammar (يعمر) | long life / life-span |
| ജിബ്‌രീൽ / മീകാഈൽ | Jibril / Mika'il | Jibril / Mika'il |
| റസൂലുകൾ / ദൂതൻമാർ / മനുഷ്യദൂതൻമാർ | rusul | Rasuls / messengers / human messengers |
| ഉത്തരവ് (അനുമതി) | idhn (إذن) | order (permission) |
| പകവെക്കുക | — | bear a grudge |
| കുഫ്റ് / തനി | kufr | kufr / sheer |
| മിത്രം | — | friend |
| ഇസ്റാഈൽ വർഗം | — | the race of Isra'il |
| ഗ്രന്ഥം / വേദഗ്രന്ഥം / വേദം | kitab | book / scripture / scripture |
| റസൂൽ തിരുമേനി / (നബി) തിരുമേനി | — | the noble Rasul / the noble Prophet |
| ഭിന്നാഭിപ്രായം / മുൻഗണന | — | difference of opinion / preference |
| പ്രവൃത്തി / കർമം | — | works / deeds (as part 13) |
| അന്ധവിശ്വാസങ്ങൾ / ദുരാചാരങ്ങൾ | — | superstitions / evil practices |
| ദൃഷ്ടാന്തങ്ങൾ | ayat | signs |
