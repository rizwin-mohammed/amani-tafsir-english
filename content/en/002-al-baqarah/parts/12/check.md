# Check: Al-Baqarah part 12 (verses 72–79)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 118–129 (book pp. 289–300), rendered at 150 dpi and read in full. There are no footnotes on these pages. The verse panels and word tables (pp. 290, 295, 297, 298–299) were re-read at 300 dpi; the Arabic on p. 292 (الضَمِير, المَعْنَى المجازى, يُحْيِي, إحْيَاء, المعنى الحقيقى, قرينة, علم البلاغة) at 600–1200 dpi. The `ml2uni.py` text layer was not needed for spelling beyond the images.
- Scope: the part starts with the author's heading വിഭാഗം – 9 and the verse 72–73 panel at the top of p. 290; p. 289 (PDF 118) ends part 11 with the lead-in "അല്ലാഹു പറയുന്നു:" ("Allah says:"). It ends on p. 300 with "അല്ലാഹു നമ്മെ കാത്തു രക്ഷിക്കട്ടെ. ആമീൻ" ("May Allah protect and save us. Amin"), directly above the verse 80–82 panel. Both boundaries confirmed.
- `part.json`, `verses.json` (verses 72–79), `words.json` (106 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. No sentence is missing or added.
- `verses.json` Malayalam and every `words.json` gloss were compared with the images; they match (including the missing full stops after (ഓർക്കുക) in verse 72 and after ജീവിപ്പിക്കുന്നു in verse 73, the spaces before "?" and ":" in verses 76, 77 and 79, ചെയ്‌വാൻ with ZWNJ and അത്മൂലം as printed in the word tables).
- Quran quotations: the phrases of 2:72, 2:73 (كَذَٰلِكَ يُحۡيِ ٱللَّهُ ٱلۡمَوۡتَىٰ, وَيُرِيكُمۡ ءَايَٰتِهِۦ), 2:73 ٱضۡرِبُوهُ بِبَعۡضِهَا, 8:24, 57:17, 50:11, 5:13 (يُحَرِّفُونَ … ذُكِّرُواْ بِهِۦ), 2:74 مِنۡ خَشۡيَةِ ٱللَّهِ and 17:44 (up to تَسۡبِيحَهُمۡ) are from `data/quran-uthmani.json`. Each printed phrase was compared with its verse: the words are the same (the print uses ordinary spelling, e.g. يُحْيِي for يُحۡيِ, full alifs), so they stay in the data-file form, as in parts 04 and 08–10. `npm run check` reports for Al-Baqarah only the one known "close but not exact" item (تَابَ إِلَى الله, part 06).
- `[p. N]` markers 290–296 and 298–300 checked against the printed page numbers and page breaks. P. 297 holds only the verse 76–77 panel and the verse 75–77 word table, so it has no marker. The p. 300 marker sits in "that he *[p. 300]* preaches" (p. 300 begins mid-word: പ്രബോ|ധനം).
- Glossary renderings (Rabb where the author writes റബ്ബ്, ﷺ) and earlier parts' renderings (Children of Isra'il, the Israelites, true believers, signs, ayah, Quran commentators, misinterpretations, riwayahs, the People of the Scripture, hypocrites for കപടന്മാർ, the noble Prophet, the straight way, misguidance, right guidance, paltry for തുച്ഛമായ, the golden calf for സ്വർണപ്പശുക്കുട്ടി as "calf" in part 09, tasbih (singing of praise), skies for ആകാശങ്ങൾ) are used.

## Corrections made (before → after)

### Tense / modality

1. p. 291, പുലർത്തിപ്പോരുന്ന നിലവിലുള്ള ഇസ്റാഈല്യരെ (present continuous: the present Israelites who keep up the tradition): "who … still, with hardened hearts, **kept up** the tradition of misguidance" → "… **have been keeping up** the tradition of misguidance".
2. p. 292, തോന്നിപ്പോകും ("one will be led to feel"; not "may"): "it **may** seem that there are no words …" → "it **will** seem …".
3. p. 292, സമ്മതിക്കുമായിരിക്കും (-ആയിരിക്കും adds presumption): "They too **will** agree that Allah has the power …" → "They too **will presumably** agree …".
4. p. 292, … ഒരു അംഗീകൃത തത്വമത്രെ (അത്രെ = "indeed"; "surely" is kept for -ല്ലോ in this part): "It is, **surely**, an accepted principle in the science of literature" → "It is **indeed** an accepted principle …".

### Dropped or added words

5. p. 292, ഇതിൽ ("in this") was not translated: "can understand that what is meant by the pronoun (الضَمِير) in ٱضۡرِبُوهُ …" → "can understand that, **in this,** what is meant by the pronoun …".
6. p. 292, the author's bracket after بِبَعۡضِهَا is (അതിന്റെ അംശം) "its portion", with no "with" (the earlier bracket for the whole phrase does have കൊണ്ട്): "the pronoun in بِبَعۡضِهَا (**with** its portion)" → "the pronoun in بِبَعۡضِهَا (its portion)".
7. p. 295, കുറെയൊക്കെ അയവും ചലനവും ("some slackening and movement"); "to some extent" doubled the "some": "some slackening and movement does occur **to some extent**." → "some slackening and movement does occur."

### Order of the author's dash clauses (meaning unchanged, structure restored)

8. p. 291, … പറയുകയുണ്ടായെന്നുമാണ്-എതിരായ തെളിവുകളൊന്നുമില്ലാത്ത സ്ഥിതിക്ക്-ആയത്തിന്റെ ശൈലിയിൽ നിന്ന് വ്യക്തമാകുന്നത്: "… such-and-such a person – it is that which becomes clear from the style of the ayah – in the situation where there are no proofs to the contrary." → "… such-and-such a person, is what – in the situation where there are no proofs to the contrary – becomes clear from the style of the ayah."
9. p. 292, the dashes stand round "ഏതെങ്കിലും ഒരു അലങ്കാരാർത്ഥത്തി(المعنى المجازى)ലല്ലാതെ" before the meaning: "… such that the meaning 'bring to life after death' properly comes from them – other than in some figurative meaning (المَعْنَى المجازى) !" → "… such that – other than in some figurative meaning (المَعْنَى المجازى) – the meaning 'bring to life after death' properly comes from them !"

### verses.json

10. Verse 76, അവർ പറയും ഞങ്ങൾ വിശ്വസിച്ചിരിക്കുന്നു എന്ന് is direct speech ("we" are the speakers); "say that we have believed" read as reported speech with a different "we": "they will say **that** we have believed." → "they will say, we have believed." (no quotation marks, as none are printed).
11. Verse 79 (point a). The print is a correlative: അപ്പോൾ, യാതൊരു കൂട്ടർക്കാണ് കഷ്ടം! അവർ തങ്ങളുടെ കൈകൾകൊണ്ട് ഗ്രന്ഥം എഴുതുന്നു : പിന്നീട് … ("Then, woe is to the group who …! They write …"). The English had moved the "!" after "hands" and turned the separate main clause "they write" into the relative clause: "Then, woe is to the group who write the book with their hands! : afterwards they will also say …" → "Then, woe is to the group who …! They write the book with their hands : afterwards they will also say …". The "…" marks that the relative "who" is completed by the next sentence, as in part 04's verse 27 ("those people who: … they break it"). No word was added; the printed "!" and " :" are kept in place. The word table keeps "is to the group who" for യാതൊരുകൂട്ടർക്കാണ്.

No changes were needed in `words.json`. No misplaced page markers, reversed negations, added pronouns, Arabic changed from the print or silently corrected misprints were found.

## Checked and left as they are

- **Arabic as printed (point f)**, checked at 600–1200 dpi: الضَمِير (fatha on ض, kasra under م), المَعْنَى المجازى (fatha on م, sukun on ع, fatha on ن; المجازى unvowelled), يُحْيِي (p. 292, cited word, two ya, as printed), إحْيَاء (sukun on ح, fatha on ي), المعنى الحقيقى, قرينة (1200 dpi: no vowels) and علم البلاغة (unvowelled), والله أعلم, and -الخ after وَيُرِيكُمۡ ءَايَٰتِهِۦ (p. 291). All correct.
- **Isra' 44 and Ma'idah 13 (point g).** The printed Isra' phrase runs تُسَبِّحُ لَهُ السَّمَاوَاتُ السَّبْعُ … وَلَكِنْ لا تَفْقَهُونَ تَسْبِيحَهُمْ, the same words as 17:44 up to تَسۡبِيحَهُمۡ; the printed Ma'idah phrase يُحَرِّفُونَ الْكَلِمَ عَنْ مَوَاضِعِهِ وَنَسُوا حَظًّا مِمَّا ذُكِّرُوا بِهِ has the same words as 5:13. Both stay in the data-file form.
- **Yisrayel / Yisrayil (point b).** p. 294 prints യിസ്റായേൽ മക്കളുടെ (Numbers 19) and യിസ്റായിൽ മക്കളെ (Exodus 32); the two spellings are kept apart as "Yisrayel" and "Yisrayil". Part 10's "Yisra'il" was for a third spelling, യിസ്റാഈൽ.
- **heifer / calf (point c).** "heifer" for പശുക്കിടാവ് / പശുകിടാവ് (Bible quotations, p. 294), "the golden calf" for സ്വർണപ്പശുക്കുട്ടി (as "calf" for പശുക്കുട്ടി in part 09), "cow" for പശു. Distinct Malayalam words, used consistently.
- **uplift / detect / science of literature (point d).** ഉദ്ധരിക്കുക here means "raise up, uplift" (8:24 for men, 57:17 for the earth), the figurative sense of إحياء the author is discussing; the same verb also means "quote" in this part (ഉദ്ധരിച്ചിരിക്കുന്നത് p. 291, ഉദ്ധരിച്ചിട്ടുണ്ട് p. 292) and is rendered "quote" there by sense. "detect" for തെളിയിക്കുക (മരണകാര്യങ്ങൾ തെളിയിക്കുക, കൊലയാളിയെ തെളിയിക്കുക, കൊലക്കുറ്റം തെളിയിക്കുക) is the crime-solving sense and is used consistently. "the science of literature" is the literal rendering of the author's സാഹിത്യശാസ്ത്രം; his Arabic علم البلاغة stands next to it. All left.
- **Bible quotations in Numbers 19 / Deuteronomy 21 (p. 294)**: given without quotation marks, as printed ("must say: we have not shed that blood; our eyes have not seen it either"; the print has a full stop after ചിന്തിയിട്ടില്ല). The quotation marks round "We have not done it, we do not know about it" (p. 293, ഞങ്ങൾ … എന്ന് സത്യം ചെയ്ത് പറയേണ്ടതുണ്ട്) are not printed but mark first-person direct speech that is already in the Malayalam; left.
- **Printed slips mirrored silently or read by their evident sense**: the missing full stop between ഉണ്ടായിരിക്കും and ഏതൊരു വാക്കിനും (p. 292; the English starts a new sentence), the full stop after സൂചനയാണ് in the middle of the sentence on p. 293, the unclosed bracket of the Anfal 24 rendering (p. 293), "അതുപൊലെത്തന്നെ" (p. 293).
- **"this too is an entirely unbelievable quotation like this"** (p. 294, ഇതുപോലെ … ഉദ്ധരണിയാണിതും): literal; left.
- **"the word … is an indication pointing to this second one"** (p. 293): as printed.
- **[p. 291], [p. 293], [p. 296], [p. 300] markers**: pages begin mid-sentence (ഉദ്ധരിച്ചിരിക്കുന്നത്; ഉദ്ധരിക്കുന്ന|തെന്ന; അതിലൂടെ | വെള്ളം; പ്രബോ|ധനം). Each marker sits at the nearest matching point. Acceptable.
- **"### Section – 9"**: the author's heading വിഭാഗം – 9 (p. 290), before the first group marker.
- **Group markers** *[Verses 72–73]*, *[Verse 74]*, *[Verses 75–77]*, *[Verses 78–79]*: **not the author's words**; navigation aids kept as in parts 01–10. They match the author's groups on the images (panels on pp. 290, 295, 296–297, 298–299). See the note in part 02's `check.md`.
- `part.json` verses "72-79", pages "290-300", PDF pages "119-129": correct.

## Open doubts for the reviewer

No new doubts. The translator raised none; on a full search (point e) nothing was found that the images leave open: the print is clear throughout, the Arabic is clear at high dpi, and the Bible references and verse numbers (8:24, 57:17, Qaf 11, Ta-Ha 97, Exodus 32:20, Numbers 19:1–10, Deuteronomy 21:1–9, Ma'idah 13, Isra' 44) match their content.

1. **Verse 79 punctuation** (correction 11): please confirm the "…!" form is acceptable to you; the alternative is to drop "who" ("Then, woe is to that group! They write …"), which loses the author's correlative.
2. **Earlier open doubts still apply** (not in this part): the hadith abbreviations including ജ (part 01), പതിച്ചവരാണവർ (part 02), വേദവാദികൾ and അമറാത്തി (part 03), ഇവിടെ അതുകൊണ്ട് വിവക്ഷ (part 04), the word order of Ibn Kathir's Arabic (part 05), السهوانى and "Profoundly Knowing" (part 06), പിൻപറ്റിയേക്കുന്നതാണ്, ലക്ഷ്യം, ദാ, وممن الله التوفيق and شجرة الخلد (part 07), the four doubts of part 08, the seven of part 10, and the group markers (part 02). ലക്ഷ്യം on p. 291 and p. 299 clearly means "aim".

## New terms (not in the glossary; used consistently in this part)

Includes the translator's terms from the commentary and word table. Flagged for Rizwin to confirm:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ദേഹം [ആൾ] | nafs (نفس) | self [person] (as "self" in part 08) |
| ഒഴിഞ്ഞുമാറുക / ആരോപണം നടത്തുക | iddara'tum (فادارأتم) | evade / make accusations |
| ബുദ്ധികൊടുക്കുക | ta'qilun (تعقلون) | use reason |
| ഗ്രഹിക്കുക | 'aqala / faqiha | understand / comprehend |
| കടുക്കുക / കടുപ്പം / കാഠിന്യം | qasat / qaswah | become hard / hardness / severity |
| അരുവികൾ / നീരുറവകൾ / ഉറവകൾ | al-anhar | streams / springs |
| അശ്രദ്ധൻ | ghafil (غافل) | unmindful |
| മാറ്റിമറിക്കുക | tahrif (يحرفونه) | alter |
| ന്യായവാദം നടത്തുക | yuhajjukum (ليحاجوكم) | argue |
| അക്ഷരജ്ഞാനമില്ലാത്തവർ | ummiyyun (أميون) | those who have no knowledge of letters |
| വ്യാമോഹങ്ങൾ | amaniyy (أماني) | delusions |
| ഊഹിക്കുക / ഊഹാപോഹങ്ങൾ | yazunnun | conjecture / conjectures and suppositions |
| കഷ്ടം, നാശം | wail (ويل) | woe, ruin |
| ഘാതകൻ / കൊലയാളി | — | slayer / murderer |
| ദുർന്യായങ്ങൾ | — | specious arguments |
| അലങ്കാരാർത്ഥം | al-ma'na al-majazi | figurative meaning |
| സാക്ഷാൽ അർത്ഥം | al-ma'na al-haqiqi | actual meaning |
| അടയാളം | qarinah (قرينة) | mark |
| സാഹിത്യശാസ്ത്രം | 'ilm al-balaghah | the science of literature |
| ഉദ്ധരിക്കുക (sense of إحياء) | ihya' | uplift ("quote" in its other sense) |
| തെളിയിക്കുക (a murder) | — | detect |
| സർവ്വനാമം | al-damir (الضمير) | pronoun |
| പശുഭക്തി | — | devotion to the cow |
| യാഗകർമം / പാപയാഗം | — | sacrificial rite / sin-sacrifice |
| പശുക്കിടാവ് (Bible) | — | heifer |
| മൂപ്പൻമാർ / ന്യായാധിപൻമാർ / പുരോഹിതന്മാർ (Bible) | — | elders / judges / priests |
| പണ്ഡിത പുരോഹിതൻമാർ | — | scholar-priests |
| മനഃശാസ്ത്ര തത്വം | — | principle of psychology |
| ഗുണദോഷിക്കുക | — | admonish |
| കപടൻമാർ | — | hypocrites (as in part 03) |
| സംഖ്യാപുസ്തകം / ആവർത്തന പുസ്തകം / പുറപ്പാട് | — | Numbers / Deuteronomy / Exodus |
