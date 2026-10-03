# Check: Al-Baqarah part 17 (verses 113–119)

Checked on 2026-10-03 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 173–182 (book pp. 344–353), rendered at 150 dpi and read in full; PDF page 183 looked at only to confirm the end. There are no footnotes on these pages. Crops at 400–1800 dpi: الله أعلم (p. 350), الرَّحْمَن (p. 350), تعال الله عن ذلك علوا كبيرا (p. 348), وَجْهُ اللهِ / يَدُ اللهِ (p. 349), مَسْجِدٌ / مَسَاجِد / خَرَاب / بَيْت خَرَاب (p. 346), the first line of the verse 115 panel (p. 347), and the word tables of verses 118–119 (pp. 352–353). The `ml2uni.py` text layer was used only for spelling (on these pages it is incomplete).
- **Boundaries.** Part 16 ends on p. 344 with the ihsan hadith "… (മു)" (the last line of its `commentary.md`); directly below come the heading വിഭാഗം – 14 and the verse 113 panel, where this part starts ("### Section – 14"). This part ends on p. 353 with "… എന്ന് സാരം." (Ra'd 40), directly above the verse 120 panel. Nothing is duplicated or lost between parts 16 and 17. Both boundaries confirmed.
- `part.json`, `verses.json` (verses 113–119), `words.json` (98 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. No sentence is missing or added.
- `verses.json` Malayalam and every `words.json` gloss were compared with the images; they match. Printed forms kept: അല്ലാഹുവിന്റെതാണ് (v. 115, confirmed at 600 dpi), ഉണ്ടാകുക (v. 117) against ഉണ്ടാവുക (word table), അവരുടെവാക്ക് and അവയിൽവെച്ച് without a space, ZWNJ (visible virama) in വാക്ക്‌പോലെ (word table v. 118) and താക്കീത്‌കാരനായും (word table v. 119), the spacing in "സ്മരിക്കപ്പെടുന്നതിനെ -തടസ്സപ്പെടുത്തുകയും" (v. 114) and "(ത്തന്നെ)ഇവരുടെ" (v. 118).
- `[p. N]` markers 345–353 checked against the printed page numbers. P. 344 needs no marker here (part 16 carries it; the heading and verse 113 panel start there). The [p. 347] and [p. 349] markers fall mid-sentence and sit at the matching point.
- Group markers (navigation aids, not the author's words; see part 02's `check.md`): *[Verse 113]*, *[Verse 114]*, *[Verse 115]*, *[Verses 116–117]*, *[Verse 118]*, *[Verse 119]*. They match the author's panels (pp. 344, 345–346, 347, 349, 351–352, 353).

## Corrections made (before → after)

### Wrong pronoun / sentence order

1. Verse 113, അതുപോലെ, ഇവരുടെ വാക്കുപോലെ(ത്തന്നെ) അറിവില്ലാത്തവരും പറഞ്ഞിരിക്കുന്നു: ഇവരുടെ is "of these" (as the translator rendered it in verse 118 and word table v. 118), and the "like" phrase comes first: "Likewise, those who have no knowledge too have said like their word (indeed)." → "Likewise, like the word of these (indeed), those who have no knowledge too have said."

### may / will, tense

2. Word table v. 115, تُوَلُّواْ, നിങ്ങൾ തിരിയുന്ന (തായാലും): (തായാലും) is "(even if it be)"; there is no "may": "(it may be that) you turn" → "you turn (even if it be)".
3. p. 345, … അതിൽ ഉൾപ്പെടുമെന്നാണ് (-ഉം future): "all who have not been connected with scriptures are included in it" → "… will be included in it".

### Voice

4. p. 346, … അവകാശമില്ലെന്നും ഈ വചനത്തിൽ അറിയിക്കുന്നു (the verse is the place, not the subject): "… to enter the mosques fearlessly – this verse makes known." → "… to enter the mosques fearlessly – is made known in this verse."

### Sentence order (closing "എന്ന് സാരം / എന്നു താൽപര്യം" moved to the front)

5. p. 348, … ഉൾപ്പെടും എന്ന് സാരം: "The gist is that a deed done turning in whatever direction will be included in His knowledge and attention." → "A deed done turning in whatever direction will be included in His knowledge and attention – that is the gist." (as the translator did for the same words on p. 353).
6. p. 350, (1) … എങ്ങിനെയാണ് ?! എന്നു താൽപര്യം: "The import is: when He is supremely holy … how is it that He has children like creatures ?!" → "When He is supremely holy … how is it that He has children like creatures ?! – that is the import."

### Strengthened / doubled words

7. p. 348, അതിന്റെ തൊട്ടവാചകം തന്നെ (one തന്നെ, rendered twice): "it will suffice to heed indeed its very next sentence" → "it will suffice to heed its very next sentence".
8. p. 352, നിന്റെ മാദ്ധ്യമത്തോട് കൂടിത്തന്നെ ആവണം (തന്നെ "indeed", not "only"): "Why must it be only through your medium?!" → "Why must it indeed be through your medium?!"

### Doubt settled from the image

9. p. 350, الله أعلم: at 600 dpi the print clearly has الله أعلم with no و (the text layer's والله أعلم is wrong; the image wins). It stands at the start of the line after "… ഉപയോഗിച്ചു കാണുന്നത്.", directly before തികച്ചും, and in English it sits between those two sentences whichever of them it is read with, so its placement does not change. The translator's DOUBT was removed; the transcription الله أعلم is kept.

No dropped small words, reversed negations, added pronouns, added ﷺ (every ﷺ is printed: pp. 347, 348, 351, 352), dropped തിരുമേനി ("the noble Prophet", p. 348), translator words in round brackets, silently corrected names, or Arabic differing from the print were found.

## Points the caller asked about

- **(a) DOUBTs.** "(19:88, 91:92, 21:26, 43:17,81)" (p. 350): "91:92" is printed clearly; kept with the translator's DOUBT, which rests only on `data/quran-uthmani.json` (Surah 91 has 15 verses there; 19:91–92 there concern the claim of offspring and use الرحمن), as part 16 did. الله أعلم: see correction 9. ലക്ഷ്യങ്ങൾ (p. 352, beside ദൃഷ്ടാന്തങ്ങളും): DOUBT kept, rendered "evidences"; on pp. 348 (ലക്ഷ്യങ്ങളെ ഉന്നമാക്കി) and 349 (രണ്ടുകൂട്ടരുടെയും ലക്ഷ്യം) the word clearly means "aim(s)" and stays so. This is the same open question as parts 01–02 and 07; one decision should cover all places.
- **(b) Slips translated by sense**, each certain from the words around it: സൂജുദ് (p. 346, sujud), പരമാർശിച്ചു (p. 346, പരാമർശിച്ചു "refers to"), എനി (pp. 348, 352, ഇനി "now"), അതുപൊളിച്ചോ (p. 346, "by its being pulled down"). Left. No TNs added for them.
- **(c) Term clashes.** നാമം (v. 114, pp. 346, 350) and പേർ (word table v. 114, p. 346 പേരാണത്) are both "name": English has no clearly distinct word; left, noted for the reviewer. പ്രാർത്ഥന "supplication" (pp. 346, 348): needed to keep it apart from നമസ്കാരം "the prayer" in the same list; earlier "pray" renders the verb പ്രാർത്ഥിക്കുക; part 01 also has "supplication". Kept. ഇഹലോകം (v. 114), ഇഹം (word table v. 114, pp. 346, 347) and ഈ ലോകം (p. 350) all "this world": no distinct natural English for ഇഹം; left, noted (പരം "the next" and പരലോകം "the Hereafter" are kept apart). ജൂതൻമാർ "the Jewish people" / യഹൂദികൾ "Jews": as part 16; kept.
- **(d) Quran phrases in the data-file form**, compared with the print: الَّذِينَ لا يَعْلَمُونَ (2:113 / 2:118, pp. 345, 352), فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ and إن الله واسع عليم (2:115, pp. 348–349), وَجْهُ اللَّهِ (p. 349), سُبْحَانَهُ, لَهُ مَا فِي السَّمَاوَاتِ وَالأَرْضِ, كُلٌّ لَهُ قَانِتُونَ, بَدِيعُ السَّمَاوَاتِ وَالأَرْضِ, وَإِذَا قَضَى أَمْرًا ....الخ (2:116–117), 6:101, 42:11 (no reference printed; none added), 112:3–4 (printed with a verse-end sign between; rendered as two bold spans), 25:21 (with dots), 13:40: in every case the printed words equal the verse span (ordinary spelling and vowel marks only), so they stay in the data-file form. Also إن الله واسع عليم is printed unvowelled, same words.
- **(e) Arabic as printed** (high dpi): تعال الله عن ذلك علوا كبيرا (no final ى) confirmed; يَدُ اللهِ (fatha, damma, kasra under ه) confirmed; مَسَاجِد with kasra under ج, مَسْجِدٌ, خَرَاب, بَيْت خَرَاب, الرَّحْمَن, عزير, سلف, خلف, لا يخلو منه مكان, ومن الله التوفيق as transcribed.
- **(f)** Verse 113 ഒന്നിലുമില്ല / ഒന്നിലുമല്ല both "are not in anything": the author's own word table glosses عَلَىٰ شَيۡءٖ as ഒരു കാര്യത്തിലും / ഒന്നിലും with "are not" in ക്രിസ്ത്യാനികളല്ല / ജൂതൻമാരല്ല, so one English is consistent with it. Left.

## Checked and left as they are

- "In fact, … the import of that statement" (വാക്യം, p. 348) and "that last sentence" (വാക്യം, p. 349) against "sentence" for വാചകം: kept as translated; noted.
- "His knowledge has encompassed the universe" (അഖിലത്തെയും, p. 348): left.
- "they will say about that house" (എന്നു പറയും, impersonal, p. 346): left.
- Unclosed brackets/quotes mirror the print (An'am 101 gloss p. 350; Furqan 21 gloss p. 353; Bukhari hadith p. 351).
- `part.json` verses "113-119", pages "344-353", PDF pages "173-182": correct.

## Open doubts for the reviewer

1. **(19:88, 91:92, 21:26, 43:17,81)** (p. 350): "91:92" cannot be found as printed.
2. **ലക്ഷ്യങ്ങൾ** (p. 352): "evidences" or "aims"; same question as parts 01–02 and 07.
3. **Earlier open doubts still apply** (not in this part): see parts 13–16.

## New terms (not in the glossary; used consistently in this part)

Translator's list, as it stands in the files after this check:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ജൂതൻമാർ / യഹൂദികൾ / നസ്റാനികൾ / ക്രിസ്ത്യാനികൾ | al-yahud / al-nasara | the Jewish people / Jews / Nasranis / Christians |
| പള്ളി / മസ്ജിദ് | masjid | mosque / masjid |
| ശൂന്യത / ഖറാബ് | kharab | emptiness / kharab |
| നാമം / പേർ | ism | name / name (noted above) |
| പ്രാർത്ഥന | du'a | supplication |
| ഇഹലോകം / ഇഹം / ഈ ലോകം | al-dunya | this world (noted above) |
| പരലോകം / പരം | al-akhirah | the Hereafter / the next |
| ഉദയസ്ഥാനം / അസ്തമയസ്ഥാനം | al-mashriq / al-maghrib | the place of rising / the place of setting |
| ക്വിബ്‌ലഃ | qiblah | qiblah |
| മുൻഗാമികൾ (سلف) / പിൻഗാമികൾ (خلف) | salaf / khalaf | predecessors / successors |
| മഹാ പരിശുദ്ധൻ / പരിശുദ്ധൻ | subhanahu | Supremely Holy / holy |
| കീഴൊതുങ്ങിയവർ / കീഴ്പ്പെട്ടവർ | qanitun | submissive / subdued |
| മാതൃകയില്ലാതെ നിർമിച്ചവൻ | badi' | the One who made without a model |
| സന്താനം / സന്തതി | walad | offspring / progeny |
| ഉൽകൃഷ്ട നാമങ്ങൾ | al-asma' al-husna | excellent names |
| ദൃഷ്ടാന്തം | ayah | sign |
| സന്തോഷവാർത്ത അറിയിക്കുന്നവൻ / താക്കീതു നൽകുന്നവൻ, താക്കീത്കാരൻ | bashir / nadhir | one who announces glad tidings / one who gives warning, warner |
| പ്രബോധനം | al-balagh | preaching |
| കത്തിജ്ജ്വലിക്കുന്ന നരകം | al-jahim | the blazing Hell |
| ഉംറഃകർമം | 'umrah | the 'umrah rite |
| റബ്ബ് | Rabb | Rabb (transliterated as printed; രക്ഷിതാവ് stays "Lord") |
