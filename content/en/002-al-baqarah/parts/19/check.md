# Check: Al-Baqarah part 19 (verses 124–125)

Checked on 2026-10-03 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 186–196 (book pp. 357–367). Each page was rendered at 150 dpi and read once in full, including the five footnotes. The amanithafseer.com text was used only as a reading aid; the image was the authority throughout. Crops (300–1200 dpi): إمَام (p. 359), the Maryam 5 quotation (p. 359), the last line of p. 359 (Ankabut 27), لا يَنَالُ and the Saffat 113 quotation (p. 360), the 2:125 phrase and the Tahrim 5 quotation (p. 362), Al Imran 97 (p. 361) and Al Imran 68 (p. 359). Several crops had to be redone because the coordinates were wrong.
- **Boundaries.** Part 18 ends on p. 357 with "… ബാധ്യസ്ഥരാണല്ലോ. അല്ലാഹു പറയുന്നു:". The verse 124 panel follows directly below it, and this part starts there. This part ends at the top of p. 367 with "… ഈ വചനത്തിൽ അടങ്ങിയിരിക്കുന്നു.", directly above the verse 126 panel. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 124–125), `words.json` (31 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The p. 359 fragment "ഓരോ സമുദായവും … അഭിമാനപൂർവ്വം പറയുന്നതും." is kept as a fragment, as printed (point d).
- `verses.json` Malayalam and every `words.json` gloss match the images. Printed forms kept: the stray ")" in "ഉണ്ടാക്കേണമേ !)’" and the space in "അവൻ പറഞ്ഞു :" (v. 124), "നിർഭയ (സ്ഥാന)വും" (v. 125), "(പ്രദക്ഷിണം)ചെയ്യുന്നവർക്ക്" and "(സാഷ്ടാംഗ നമസ്കാരം)ചെയ്യുന്നവരായ" (word table), "നേതാവ് , മുമ്പൻ".
- `[p. N]` markers 358–367: each was checked against the printed page numbers and breaks. P. 358 and p. 361 begin with the rest of a verse panel or word table, so their markers stand at the start of the commentary, as in earlier parts.
- Footnotes (point e): (\*) p. 359 comes after the paragraph ending "… that put him to trial (\*)"; (\*) p. 362 after the paragraph ending "… from that day on."; (\*) p. 364 after the paragraph about King Faisal; (\*\*) and (\*\*\*) after the Kurdi paragraph, which ends on p. 365 ("… red and yellow."). All are correct.
- ﷺ (point g): the book prints it five times (pp. 362, 362 footnote, 363, 365 twice), and the English has exactly these five. The English has (r) wherever (റ) is printed and nowhere else: none for Ibn Kathir's "I (Ibn Kathir)", Abdullah ibn Wahab or King Faisal. All nine തിരുമേനി are rendered "the noble Prophet" or "the noble Rasul" (റസൂൽ തിരുമേനി), and none is dropped.

## Corrections made (before → after)

### Added punctuation
1. p. 359, end (Ankabut 27): the print has only "അല്ലാഹു പറയുന്നു: وَجَعَلْنَا … وَالْكِتَابَ", with nothing after the Arabic (300 dpi). The ":-" in the English comes from the site text. "**وَجَعَلۡنَا … وَٱلۡكِتَٰبَ** :- *[p. 360]* –**العنكبوت: ٢٧**" → "**وَجَعَلۡنَا … وَٱلۡكِتَٰبَ** *[p. 360]* –**العنكبوت: ٢٧**".

### Arabic as printed
2. p. 362, Tahrim 5: at 1200 dpi the print has عَسَى with no superscript alif. The rest (رَبُّهُ إِنْ طَلَّقَكُنَّ) is as transcribed. "**عَسَىٰ رَبُّهُ إِنْ طَلَّقَكُنَّ**" → "**عَسَى رَبُّهُ إِنْ طَلَّقَكُنَّ**". Because of this, `npm run check` now lists the phrase as a second Al-Baqarah "close but not exact" item (66:5, 83%), beside تَابَ إِلَى الله (part 06). This is expected: the printed form has no superscript alif. The check still passes. If the reviewer prefers the data-file form, the phrase goes back to عَسَىٰ.

### Earlier rendering (point c)
3. p. 362, തിർമദി: part 01 rendered the same printed spelling (തിർമദീ, p. 179) as "Tirmidhi", and so do `about.md` (Ti. = Tirmidhi) and the surah intro. "Tirmadi" → "Tirmidhi". This is a fixed English form for the compiler's name, not a correction of the author.

No dropped small words, may/will errors, wrong tense, changed voice, reversed negations, added pronouns, added ﷺ, translator words in round brackets, or misplaced footnotes were found.

## Points the caller asked about

- **(a) Arabic.** These were confirmed on crops as transcribed (as printed): إمَام (no kasra), وَإِنِّي خِفْتُ الْمَوَالِيَ مِنْ وَرَائِي (sukun on مِنْ), لا يَنَالُ عَهْدِي الظَّالِمِينَ (no fatha on لا), وَمِنْ ذُرِّيَّتِهِمَا مُحْسِنٌ وَظَالِمٌ لِنَفْسِهِ مُبِينٌ (sukun on مِنْ, no shadda on لِ), وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى (1200 dpi: shadda and tanwin on لّ; same on pp. 363 and 365), and عَسَى (correction 2). Al Imran 97 (وَمَنْ دَخَلَهُ كَانَ آمِنًا) was only partly legible on the crop; nothing contradicts the transcription. The data-file form is kept for 53:37 and 20:29 (full verses), and for 3:68, 29:27 and مَثَابَةٗ, whose printed words and vowels equal the verse (only ordinary spelling differs, e.g. ا for the superscript alif). Other Arabic is unvowelled or as printed: امن, بَيْتُ الله, الْبَيْت, إن شاء الله, إبن كثير, ركن الحجر, والله أعلم, عَاكِفِين, عكوف, كما فى المفردات, اِعْتِكَاف, مَقَام, بَيْتِي, الرُّكَّعِ السُّجُود, فِيهِ آيَاتٌ بَيِّنَاتٌ مَقَامُ إِبْرَاهِيمَ.
- **(b) Slips** translated by their evident meaning, with no TN: സാധാരണക്കാരയ, പ്രബോധനത്തന്, തുടരുവീൻ, ഏതായലും, എനി, പ്രസിദ്ധീകൃതകമായത്, പുർണമായി, the stray ")" in v. 124. The meaning is certain in each case. Left.
- **(c)** See correction 3.
- **(d)** The fragment is kept; correct.
- **(e)** Footnotes: see above.
- **(f) Terms.** The distinct Malayalam words stay distinct: സങ്കേതം "resort", അഭയം "shelter", അഭയ സ്ഥാനം "place of shelter", നിർഭയം "security" / നിർഭയ (സ്ഥാനം) "secure (place)", സമാധാനം "peace", രക്ഷാകേന്ദ്രം "centre of safety". കർമം is "rite(s)" in every ritual use here (ഹജ്ജിന്റെ കർമങ്ങൾ, ഹജ്ജ് കർമം, ഉംറഃ കർമം, നമസ്കാരം … മുതലായ കർമങ്ങൾ), as part 17 did for ഉംറഃകർമം; ചേലാകർമം is "circumcision". നമസ്കരിക്കുക is "perform the prayer". ശുദ്ധമാക്കുക "purify" (verse, word table, p. 366) and ശുദ്ധിയാക്കുക "make clean" (p. 366) are kept apart. സ്വീകരിക്കുവിൻ "take" (2:125 glosses in the hadith and Qatadah) and ഏർപ്പെടുത്തുക "establish" (verse, p. 365) are kept apart. വംശപിതാവ് "father of the race" (part 18) and കുലപിതാവ് "patriarch" (p. 367) are kept apart.
- **(g)** See above.

## Checked and left as they are

- p. 358, "Without a hadith or the agreed opinion of the scholars, nothing may be said definitely" (പാടില്ല): left as "may not" in the sense of permission.
- p. 362, "Abdullah ibn Wahab" (p. 363, വഹബ്): kept as printed. There is no earlier occurrence; the reviewer may prefer the usual "Wahb".
- p. 362, "When one side was completed, he would move it" (നീക്കും, no subject printed): "he" (Ibrahim) is implied by the passage. Left.
- p. 365, "Apart from a few, when the door … is opened …, entering inside it …" (ചുരുക്കം ചിലർ … നമസ്കരിക്കുന്നതല്ലാതെ): follows the Malayalam order. Left.
- p. 366, "it is stated in the next surah, 96" (അടുത്ത സൂറത്ത് 96–ൽ): as printed (that is, Al Imran 96). Left.
- `part.json` verses "124-125", pages "357-367", PDF pages "186-196": correct.

## Open doubts for the reviewer

1. No new doubts in this part. "Wahab" (above) is a spelling question only.
2. **Earlier open doubts still apply** (not in this part): see parts 13–18.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഇമാം / നേതാവ് / മുമ്പൻ | imam | imam / leader / foremost one |
| കരാർ / വാഗ്ദത്തം | 'ahd | pact / promise |
| അക്രമികൾ | al-zalimin | wrongdoers (as parts 09, 14) |
| സുകൃതവാൻമാർ | muhsin | well-doers |
| സന്തതികൾ / സന്താനപരമ്പര | dhurriyyah | progeny / line of descendants |
| സങ്കേതം | mathabah | resort |
| അഭയം / നിർഭയം / സമാധാനം / രക്ഷാകേന്ദ്രം | amn | shelter / security / peace / centre of safety |
| മക്വാമു (മകാമു) ഇബ്റാഹീം | maqam Ibrahim | Maqamu Ibrahim |
| നമസ്കാര സ്ഥാനം | musalla | place of prayer |
| ത്വവാഫ് / പ്രദക്ഷിണം | tawaf | tawaf / circumambulation |
| ഭജനമിരിക്കുക / ഇഅ്തികാഫ് | i'tikaf / 'akifin | sit in devotion / i'tikaf |
| സാഷ്ടാംഗം കുമ്പിടുക | al-rukka' al-sujud | bow down in prostration |
| കർമം (ritual) | — | rite |
| കഅ്ബാലയം / പരിശുദ്ധാലയം | — | Ka'bah abode / holy abode |
| ഹറം | haram | Haram |
| ഖുലഫാഉർറാശിദീൻ | — | Khulafa' al-Rashidin |
| കുലപിതാവ് | — | patriarch |
| പളുങ്ക് കൂട് / ക്വുബ്ബ | — | crystal case / qubbah |
