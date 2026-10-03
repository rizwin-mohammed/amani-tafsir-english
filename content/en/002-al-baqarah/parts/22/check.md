# Check: Al-Baqarah part 22 (verses 141–143)

Checked on 2026-10-03 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 217–227 (book pp. 388–398). Each page was rendered at 150 dpi and read once in full, including the one footnote (p. 390). The amanithafseer.com text was used only as a reading aid; the image was the authority throughout. The `ml2uni.py` text layer was used for the v. 134/141 spelling question, and `pdftotext -bbox` for the order of the v. 143 word-table entries. One crop (300 dpi): the first three lines of the v. 143 word table (p. 392).
- **Boundaries.** Part 21 ends at the top of p. 388 with "… അല്ലാഹു നമ്മെ കാത്തുരക്ഷിക്കട്ടെ, ആമീൻ."; the verse 141 panel follows directly, and this part starts there. This part ends on p. 398 with "… കാരുണ്യത്തിന് പാത്രമാക്കേണമേ!", directly above the verse 144 panel. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 141–143), `words.json` (56 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The heading "വിഭാഗം – 17 / ജുസ്ഉ് – 2" is rendered "### Section – 17 · Juz' – 2"; the two qiblah paragraphs under it end "… അല്ലാഹു പറയുന്നു:" ("Allah says:"), as printed (the site drops it). The footnote (\*) of p. 390 (naskh) stands after the paragraph that carries its marker, which ends on p. 391 ("… 115-ാം വചനത്തിന്റെ വ്യാഖ്യാനത്തിൽ … ഓർക്കുക)").
- `verses.json` and every `words.json` gloss match the images (word tables pp. 388, 389–390, 392).
- `[p. N]` markers 389–398 checked against the printed page breaks. [p. 390] and [p. 392] stand at the start of the commentary, because those pages begin with the end of a word table / verse panel.
- Group markers: *[Verse 141]*, *[Verse 142]*, *[Verse 143]*, matching the author's panels.

## Corrections made (before → after)

### Meaning
1. p. 389, അറബികളായ മുസ്ലിംകൾക്കോ? (restrictive: "the Arab Muslims"): "for the Muslims, who were Arabs?" → "for the Muslims who were Arabs?" (the comma made it say that all Muslims were Arabs).
2. p. 390, സ്വയം നിർമിക്കുന്ന മതം (no subject printed; added pronoun): "a religion that he makes himself" → "a self-made religion".
3. p. 396, കുറേ അതിരുകവിഞ്ഞതായി ("somewhat" weakened കുറേ): "gone somewhat beyond bounds" → "gone quite some way beyond bounds".

### Same Malayalam, different English / two Malayalam words, same English
4. അഥവാ: parts 01–02 render it "or" ("(or a roof)", "(or the pact with Him)", sentence-initial "Or, …"), and in this part "That is," renders അതായത്. Verse 143: "a middle (that is, excellent) community" → "a middle (or excellent) community"; p. 393 (2): "That is, it is by making your moral life …" → "Or, it is by making …"; p. 393 (3): "That is, you are ones who have to bear witness." → "Or, you are ones who have to bear witness." (In these places അഥവാ restates: "or, in other words".)

### Position of the printed "....." (point a)
5. Five places: p. 390 (سَيَقُولُ السُّفَهَاءُ), p. 391 (يَهْدِي مَنْ يَشَاءُ), p. 393 (لِتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ, dots just inside the opening bracket), p. 394 twice (وَكَذَلِكَ جَعَلْنَاكُمْ at a line start; وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً after "അല്ലാഹു പറഞ്ഞത്."). In every case the dots stand at the left end of the Arabic, touching its last word; the text layer has them in the Malayalam font, in the stream before the Arabic, as on p. 388 (part 21). The side cannot be told for certain, so the translator's placement (after the Arabic; the sense of a cut-off quotation) is kept and a short DOUBT was added after each, as part 21 did.

No dropped small words, may/will errors, -ഉം future rendered as present, wrong tense, changed voice, reversed negations, dropped തിരുമേനി, added ﷺ, translator words in round brackets, silently corrected names or misprints, or misplaced footnotes were found.

## Points the caller asked about

- **(a)** See correction 5.
- **(b) v. 143 word table.** `pdftotext -bbox` gives the x-positions on the line: شُهَدَاءَ (130) സാക്ഷികൾ (156) عَلَى النَّاسِ (213) മനുഷ്യർക്ക്, മനുഷ്യരുടെമേൽ (254) وَيَكُونَ الرَّسُولُ (389) റസൂൽ (456), with ആയിരിക്കുവാനും on the next line. This is verse order, as in the files. Confirmed; no doubt needed.
- **(c)** في ظلال القرآن (p. 397) is printed with the dotted ي at 150 dpi. As in the files.
- **(d)** p. 396 "ഈ വചനത്തിലും" covers both "a great matter" (v. 143) and "the places of rising and setting are Allah's" (v. 142). The author may mean the passage as a whole, so this is not an evident slip; no TN. Left for the reviewer to judge.
- **(e)** v. 141 പ്രവർത്തിച്ചുകൊണ്ടിരിക്കുന്നതിനെപ്പറ്റി (present continuous) → "what they keep doing"; v. 134 has പ്രവർത്തിച്ചുകൊണ്ടിരുന്നതിനെപ്പറ്റി → "what they used to be doing". The difference is in the print. Right.
- **(f) Misprints kept without TN.** അടങ്ങിയിക്കുന്നു (p. 392), പ്രാവാശ്യം (p. 394), അദ്ദേഹത്തന്റെ (p. 396), stray full stops (p. 390 "ഉപയോഗിച്ചത് .", p. 391 "തന്നനുഗ്രഹിച്ചിരിക്കുന്നു. എന്നൊക്കെയാണ്"), missing stops after കഴിഞ്ഞുപോയി (v. 141) and അസ്തമയ സ്ഥാനവും (v. 142), "Yes then" (p. 394). The meaning is certain in each case; the English mirrors the missing stops. Fine.
- **(g) Line-break joins.** v. 141 "പ്രവർത്തിച്ചു / കൊണ്ടിരിക്കുന്നതിനെപ്പറ്റി": പ്രവർത്തിച്ചു is a whole word, but the book prints the same form joined in v. 134 (text layer of PDF p. 207), so it stays joined (part 21's method). v. 142 "ഉദയ / സ്ഥാനവും": the word table prints ഉദയസ്ഥാനം joined; stays joined. Other joins are mid-word (നിങ്ങൾക്കുമു/ണ്ടായിരിക്കും, യാതൊ/രു, ക്വിബ്ലഃ/യിൽ, ആയിരു/ന്നുവോ, ഏർപ്പെടുത്തി/യിട്ടില്ല, നേർമാർഗത്തി/ലാക്കിയവർ, p. 398 ബന്ധനസ്ഥരായ/വരുടെ). Printed spaces are kept ("അസ്തമയ സ്ഥാനവും", "വേണ്ടി (യത്രെ അത്)").
- **(h)** See "What was compared".
- **(i) ﷺ.** Printed: p. 388 twice, p. 389 twice, p. 391 once, p. 393 twice, p. 394 twice, p. 395 four times, p. 397 twice, p. 398 once. The English has exactly these; none where only തിരുമേനി or "the Rasul too" is printed (the site adds many). (r) appears only where (റ) is printed (Ibn Jarir, Muslim, Anas, 'Umar, Tirmidhi, Ahmad, Abu Sa'id, Ibn 'Umar, Abu Hurairah, Bukhari).
- **(j) Terms.** കുതി(മടമ്പ്)കാലുകളിൽ "on his heel(heel)s": the author puts the synonym മടമ്പ് inside the compound കുതികാൽ; English has no second word for "heel", so this is kept and noted. ജൂതൻമാർ / ജൂതർ "the Jewish people" and യഹൂദികൾ "the Jews", as in parts 17 and 21. നബിമാർ / പ്രവാചകന്മാർ are both "prophets", as in earlier parts (noted). The families are kept distinct: മദ്ധ്യമ / മദ്ധ്യനില "middle / of the middle position", ഉത്തമ "excellent", ശ്രേഷ്ഠ "superior", മിത / മിതത്വം "moderate / moderation"; പാഴാക്കിക്കളയുക "waste away", പാഴാക്കുക "waste", വിഫലമാക്കുക "make futile", വെറുതെയാക്കുക "make void"; ദയാലു "Kind", ദയ "kindness", കാരുണ്യം "mercy", വാത്സല്യം "affection", കരുണാനിധി "the Ever-Merciful" (glossary).

## Checked and left as they are

- v. 143 (വന്നപാടെ) "(just as they came)": the sense is "as soon as they came"; the English can be read that way. Left; the reviewer may prefer "(as soon as they came)".
- v. 143 മടമ്പുകളിൽ "on their heels": English needs the possessive. Left.
- p. 394, "Then Muhammad will be brought" for മുഹമ്മദിനെ വരുത്തും (no subject printed): passive, as earlier parts accept. Left.
- p. 398, ഇവൾ / ഇവളുടെ rendered "this woman / this woman's" throughout the hadith: literal and clear. Left.
- Arabic: the short phrases whose words equal the verse (2:142, 2:143 phrases, 2:143 end) stay in the data-file form; نسخ, وَسَط, في ظلال القرآن as printed.
- `part.json` verses "141-143", pages "388-398", PDF pages "217-227": correct.

## Open doubts for the reviewer

1. **Position of "....."** in five places (correction 5); the same question as part 21, p. 388. Note: the text layer of p. 388 also has those dots in the Malayalam stream before the Arabic, so it does not settle the question either way.
2. **"ഈ വചനത്തിലും"** on p. 396 (point d): whether it is a slip for the previous verse; no TN added.
3. **അഥവാ** is now "or" in this part, following parts 01–02 (correction 4); the reviewer may prefer "that is" for its restating use, in which case അതായത് needs another rendering.
4. **കുതി(മടമ്പ്)കാലുകളിൽ** "heel(heel)s", **നബിമാർ / പ്രവാചകന്മാർ** both "prophets".
5. **Earlier open doubts still apply** (not in this part): see parts 13–21.

## New terms (not in the glossary; used consistently in this part)

The translator left no list in the files; this list is drawn from the files as they stand after this check.

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ക്വിബ്ലഃ / അഭിമുഖകേന്ദ്രം | qiblah | qiblah / centre to be faced |
| ഭോഷന്മാർ / ഭോഷത്വം | al-sufaha' | fools / foolishness |
| ഉദയസ്ഥാനം / അസ്തമയസ്ഥാനം | al-mashriq / al-maghrib | the place of rising / the place of setting |
| മദ്ധ്യമ / മദ്ധ്യനിലയിലുള്ള | wasat | middle / of the middle position |
| ഉത്തമ / ശ്രേഷ്ഠ / മിത (മിതത്വം) | — | excellent / superior / moderate (moderation) |
| സാക്ഷികൾ / സാക്ഷി / സാക്ഷ്യം വഹിക്കുക | shuhada' / shahid | witnesses / witness / bear witness |
| മടമ്പുകൾ / കുതി(മടമ്പ്)കാലുകൾ | 'aqibayh | heels / heel(heel)s |
| പാഴാക്കിക്കളയുക / പാഴാക്കുക / വിഫലമാക്കുക / വെറുതെയാക്കുക | yudi' | waste away / waste / make futile / make void |
| ദയാലു / ദയ / കാരുണ്യം / വാത്സല്യം | ra'uf / rahim | Kind / kindness / mercy / affection |
| നസ്ഖ് | naskh | naskh |
| വഹ്യ് | wahy | wahy |
| ജനാസ | janazah | janazah |
| പ്രബോധനം | — | propagation |
| ചിഹ്നങ്ങൾ | sha'a'ir | emblems |
| യാഥാസ്ഥിതികത്വം | — | conservatism |
| അജമികൾ | 'ajam | 'Ajamis |
