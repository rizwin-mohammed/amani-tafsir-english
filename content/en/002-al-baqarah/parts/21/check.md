# Check: Al-Baqarah part 21 (verses 133–140)

Checked on 2026-10-03 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 206–217 (book pp. 377–388). Each page was rendered at 150 dpi and read once in full, including the one footnote (p. 385). The amanithafseer.com text was not needed; the image was the authority throughout. Crops (300 dpi): the p. 382 Arabic (سِبط, أَسْبَاط, قَبِيلَة, 7:160), the p. 384 Arabic (فطْرَة اللَّهِ, دِين الفَطرة, فَطْرَةَ الاِسْلَامَ) and the p. 388 line with 2:140. One more crop of p. 382 missed its line (wrong coordinates).
- **Boundaries.** Part 20 ends on p. 377 with "… പാത്രമായിത്തീരും."; the verse 133 panel follows directly, and this part starts there. This part ends at the top of p. 388 with "… അല്ലാഹു നമ്മെ കാത്തുരക്ഷിക്കട്ടെ, ആമീൻ.", directly above the verse 141 panel. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 133–140), `words.json` (119 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The footnote (\*) of p. 385, with all seven numbered items, stands right after the paragraph that ends "… was current (\*)".
- `verses.json` and every `words.json` gloss were compared with the images (word tables pp. 378, 380, 381–382, 386). They match.
- `[p. N]` markers: 379, 380, 382, 383, 384, 385, 386, 387, 388. P. 377 needs none (the part starts at its verse panel). P. 378 holds only the verse 133–134 panels and word table, and p. 381 only the verse 136–138 panels and word table, so neither has a marker. [p. 384], [p. 385], [p. 387] and [p. 388] fall mid-sentence and sit at the matching point (as near as English word order allows).
- Group markers: *[Verses 133–134]*, *[Verse 135]*, *[Verses 136–138]*, *[Verses 139–140]*, matching the author's panels and word tables. There is no section heading in this range.

## Corrections made (before → after)

### Added punctuation
1. p. 385 footnote, item (2): the print has "ബപ്തിസൈൻ (Baptisain)എന്ന പദം", with no quotation marks. "The word ‘baptisain’ (Baptisain) denotes …" → "The word baptisain (Baptisain) denotes …".

### Position of the printed "....." (point d)
2. p. 388: on the image the dots stand at the left end of the Arabic run, touching its last word عِنْدَهُ (crop). This is the same layout as the Al Imran 65 quotation on p. 387, where the dots touch إِبْرَاهِيمَ and the files rightly place them after it. For the same reading: "is the sentence ..... **وَمَنْ أَظْلَمُ مِمَّنْ كَتَمَ شَهَادَةً عِنْدَهُ** (Who …" → "is the sentence **وَمَنْ أَظْلَمُ مِمَّنْ كَتَمَ شَهَادَةً عِنْدَهُ** ..... (Who …". (In a line that mixes Malayalam and Arabic, a row of dots cannot show for certain which side it belongs to. If the reviewer reads it the other way, the dots go back in front of the Arabic.)

No dropped small words, may/will errors, -ഉം future rendered as present, wrong tense, changed voice, reversed negations, added pronouns, dropped തിരുമേനി, added ﷺ, translator words in round brackets, silently corrected names or misprints, or misplaced footnotes were found.

## Points the caller asked about

- **(a) Line-break joins.** All three were checked on the image. v. 138 "അല്ലാഹു / വിനെക്കാൾ": "വിനെക്കാൾ" is not a word, so this is a break inside one word. Joined correctly. p. 382 "ഇസ്റാ / ഈല്യരെ": also a break inside one word. It affects only the English. v. 140 "മറച്ചു / വെച്ചവനെക്കാൾ": this is a whole word ending a line. But the book's own word table for this same verse (p. 386, مِمَّنۡ كَتَمَ) prints മറച്ചുവെച്ചവനെക്കാൾ as one word, so it stays joined (the same method as part 20, corrections 1–2). The other joins in the panels are also breaks inside one word (സന്നിഹി/തരായിരുന്നുവോ, ആരാ/ധിക്കുക, ഇസ്/ഹാക്വും, അല്ലാ/ഹുവോ, പ്രവർത്തിക്കു/ന്നതിനെ, അശ്രദ്ധനൊ/ന്നുമല്ല and others). Gaps printed in the middle of a line are kept: "ആരാധ്യനു മായുള്ളവനെ" (v. 133) and "കക്ഷി പിരിവിൽ" (v. 137; the word table has കക്ഷിപിരിവിൽ).
- **(b) TN on വേ.പു.നി.** The footnote opens by naming the source as "വേദ പുസ്തക നിഘണ്ടു" (rendered "the Bible dictionary"). The closing "(വേ.പു.നി – ‘സ്നാനം’ എന്ന ശീർഷകം നോക്കുക)" takes the first letters of those printed words. The TN rests only on what is printed on the page. Kept.
- **(c) Misprints kept without TN.** In v. 139, "കർമങ്ങളം" stands for കർമങ്ങളും; the parallel "കർമങ്ങളുമാണുള്ളതും" and the word table settle the meaning. On p. 384 the print has a fatha on ف in دِين الفَطرة and in فَطْرَةَ الاِسْلَامَ, confirmed on the crop; the author's own glosses (പ്രകൃതിമതം, ഇസ്ലാമാകുന്ന പ്രകൃതി) settle the meaning. On p. 384 there is a stray full stop in "വ്യാഖ്യാതാക്കളും. പറഞ്ഞു കാണാം"; it is not shown in English. The bracket of the Al Imran 65 gloss (p. 387) is left unclosed, and the English mirrors this. The word table of v. 137 has "(കക്ഷിത്തത്തിൽ)", rendered "partisanship". The meaning is certain in each case, so no TN is needed.
- **(d) Arabic.** The crop shows that 2:140 on p. 388 is printed وَمَنْ أَظْلَمُ مِمَّنْ كَتَمَ شَهَادَةً عِنْدَهُ, with sukuns as transcribed (see correction 2 for the dots). Al Imran 65 is printed in short form, يَا أَهْلَ الْكِتَابِ لِمَ تُحَاجُّونَ فِي إِبْرَاهِيمَ ..... أَفَلَا تَعْقِلُونَ, and the files show it so, not as the full verse. For 7:160 (p. 382, crop), وَٱلۡأَسۡبَاطِ and وَمَآ أُوتِيَ ٱلنَّبِيُّونَ (p. 383), and صِبۡغَةَ ٱللَّهِ / صِبۡغَةَ (pp. 384–385), the printed words and marks equal the verse, so the data-file form stands. These are as printed (crops): سِبط, أَسْبَاط, قَبِيلَة, فطْرَة اللَّهِ, دِين الفَطرة, فَطْرَةَ الاِسْلَامَ. These are as printed at 150 dpi: كَسب, صِبْغَة, مُشَاكلة, والله اعلم.
- **(e) Ishaq.** The verse panels and word tables print ഇസ്ഹാക്വ്; the commentary prints ഇസ്ഹാക് (pp. 379, 382, 383, 387). The Malayalam in the files follows each as printed. Both are "Ishaq" in English.
- **(f) Footnote and markers.** See above.
- **(g) Boundary.** Verse 141 has its own panel and word table (p. 388), and its own short commentary ("ഇതേ മാതിരി ഒരു വചനം 134-ൽ …"). After that come the heading "വിഭാഗം – 17 / ജുസ്ഉ് – 2" and a paragraph about the qiblah, which runs on to p. 389. Verses 139–140 form one group: panels on pp. 385–386 and one word table on p. 386. So stopping after verse 140 does not split a group. Note for the next part: the qiblah paragraph under the heading stands before the next Arabic panel. It belongs with verse 141 or opens the next section; the next part should start at the verse 141 panel.
- **(h) Terms.** (1) أُنزِلَ is glossed അവതരിപ്പിക്കപ്പെട്ടതിലും and then ഇറക്കപ്പെട്ടതിലും (word table v. 136). Both are "sent down", as in earlier parts: അവതരിപ്പിച്ചതിൽ "sent down" in vv. 41, 90, 91, 97, and ഇറക്കപ്പെട്ട "sent down" in parts 01, 14 and 15. The commentary's അവതരിക്കപ്പെട്ട (p. 383) is also "sent down". (2) أُوتِيَ is glossed കൊടുക്കപ്പെട്ടതിലും in the word table and നൽകപ്പെട്ടതിലും in the verse. Both are "given", as നൽകപ്പെട്ട "given" in earlier parts. English has no clearly distinct pair for either, so this is noted for the reviewer. New terms are consistent: സ്നാനം "baptism" everywhere, and സ്നാനകർമം "rite of baptism". ശിഖാക്വ്, glossed കക്ഷിപിരിവ് "schism" (verse and word table), കക്ഷിത്വം / കക്ഷിത്തം "partisanship" (word table, p. 382), ചേരിപിരിവ് "factionalism" and മാത്സര്യം "rivalry" are all kept distinct. ജൂതമതം "the Jewish religion" (pp. 380, 386) and യഹൂദമതം "Judaism" (p. 387) are kept apart, as are ക്രിസ്തീയ മതം "the Christian religion" and ക്രിസ്ത്യാനിസം "Christianity". ജൂതൻമാർ "Jewish people" (word tables) is as in part 17 and kept apart from യഹൂദികൾ "Jews".
- **(i) ﷺ, (റ), (അ).** ﷺ is printed three times (p. 380 നബിﷺയോട്, p. 382 നബിﷺയെയും, p. 383 തിരുമേനിﷺക്ക്), and the English has exactly these three. There is none for "the Rasul of Allah said" (p. 383), where none is printed. (r) appears only where (റ) is printed: Abu Hurairah, Bukhari, Ibn Jarir. (a) appears only where (അ) is printed. "the Prophet Ibrahim and others" (p. 386) has none, as printed.

## Checked and left as they are

- രക്ഷ is rendered "salvation" on p. 379 (… രക്ഷ കിട്ടുകയില്ല) and "deliverance" on pp. 382 and 386 (രക്ഷ നൽകുന്നതാണ്, … എങ്കിലേ രക്ഷയുള്ളൂ). The choice follows the context. Left; the reviewer may prefer one word.
- ഇസ്റാഈലികൾ (p. 383) and ഇസ്റാഈല്യർ are both "Israelites". These are spelling variants of the same word. Left.
- In footnote item (3), സ്നാനം കഴിപ്പിച്ചവർ is rendered "those who underwent baptism with John the Baptist". The causative could also mean "those who had baptism done". The sense is the same. Left.
- p. 384, അല്ലാതെ, … "And not otherwise: his was not a religion that …". Left.
- p. 384, "what many great Quran commentators have stated" for പല … വ്യാഖ്യാതാക്കളും: the -ഉം of "പല … -ഉം" is not rendered "too", as in parts 18 and 20. Left.
- p. 387, ഈസ നബി (printed without ാ) is "'Isa", the usual English form, which is the same for both spellings. Left.
- `part.json` verses "133-140", pages "377-388", PDF pages "206-217": correct.

## Open doubts for the reviewer

1. **Position of "....."** before or after the 2:140 phrase (p. 388): see correction 2.
2. **അവതരിപ്പിക്കപ്പെട്ട / ഇറക്കപ്പെട്ട** are both "sent down", and **കൊടുക്കപ്പെട്ട / നൽകപ്പെട്ട** are both "given" (point h). **രക്ഷ** is "salvation" or "deliverance".
3. **Earlier open doubts still apply** (not in this part): see parts 13–20.

## New terms (not in the glossary; used consistently in this part)

The translator left no list in the files; this list is drawn from the files as they stand after this check.

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| സന്നിഹിതർ | shuhada' | present ones |
| ആരാധ്യൻ | ilah | object of worship |
| പിതൃവ്യൻ | — | paternal uncle |
| പാരമ്പര്യവാദികൾ / പാരമ്പര്യ വാദം | — | traditionalists / claim of tradition |
| സമ്പാദ്യം / സമ്പാദിച്ചുവെച്ചത് | kasb | earnings / what … earned and laid by |
| കർമഫലം | — | fruit of deeds |
| ജൂതൻമാർ / യഹൂദികൾ | hud / al-yahud | Jewish people / Jews |
| ഋജുമനസ്കൻ / ഋജുമാനസൻ / ശുദ്ധ ഹൃദയൻ | hanif | upright-minded / pure-hearted |
| മുശ്രിക്കുകൾ / ബഹുദൈവ വിശ്വാസി | mushrikin | mushriks / polytheist |
| സന്തതികൾ / കുലങ്ങൾ / ഗോത്രങ്ങൾ / പൗത്രപരമ്പര / പൗത്രൻമാർ | asbat | progeny / clans / tribes / line of grandsons / grandsons |
| സിബ്ത് / ക്വബീലഃ | sibt / qabilah | sibt / qabilah |
| ഗോത്രപിതാക്കൾ | — | tribal fathers |
| അവതരിപ്പിക്കപ്പെട്ട / ഇറക്കപ്പെട്ട / അവതരിക്കപ്പെട്ട | unzila | sent down (noted) |
| കൊടുക്കപ്പെട്ട / നൽകപ്പെട്ട | utiya | given (noted) |
| കക്ഷിപിരിവ് / കക്ഷിത്വം (കക്ഷിത്തം) / ചേരിപിരിവ് / മാത്സര്യം | shiqaq | schism / partisanship / factionalism / rivalry |
| വർഗീയത | — | communalism |
| വർണം നൽകൽ / ചായംകൊടുക്കൽ | sibghah | giving colour / giving dye |
| സ്നാനം / സ്നാനകർമം / സ്നാനജലം | — | baptism / rite of baptism / baptismal water |
| ജാതി തിരിക്കുക | — | divide into castes |
| പ്രകൃതി / പ്രകൃതിമതം | fitrah | nature / the religion of nature |
| മുശാകലത്ത് | mushakalah | mushakalat |
| ജൂതമതം / യഹൂദമതം | — | the Jewish religion / Judaism |
| ക്രിസ്തീയമതം / ക്രിസ്ത്യാനിസം | — | the Christian religion / Christianity |
| ന്യായവാദം / തർക്കം / കുതർക്കം | tuhajjun | argue / dispute / quibbles |
| നിഷ്കളങ്കർ / നിഷ്കളങ്കത | mukhlisun | sincere ones / sincerity |
| വേദ പുസ്തക നിഘണ്ടു (വേ.പു.നി) | — | the Bible dictionary (Ve.Pu.Ni) |
| രക്ഷ | — | salvation / deliverance (noted) |
