# Check: Al-Baqarah part 25 (verses 161–167)

Checked on 2026-10-07 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 248–259 (book pp. 419–430). Each page was rendered at 150 dpi and read once in full (this range has no footnotes). The amanithafseer.com text was used only as a reading aid; the image was the authority throughout. `pdftotext -bbox` was used to read the vowel marks of every Arabic quotation and the position of the printed dots on p. 429. Crops (300 dpi): إِلٰهٌ and لا إله إلا الله (p. 420); بَاطِلا (p. 423); the 72:18 phrase (p. 427; two crops, the first missed the line); the two 39:3 lines (p. 429); آمين (p. 429).
- **Boundaries.** Part 24 ends on p. 419 with "… ഇതൊക്കെത്തന്നെയാണ്."; the verse 161 panel follows directly, and this part starts there. This part ends at the foot of p. 430 with "… ശാശ്വതമായ നരകശിക്ഷ തന്നെയായിരിക്കും ഫലം."; p. 431 (PDF p. 260) begins with the heading "വിഭാഗം – 21" and the verse 168 panel. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 161–167), `words.json` (94 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The paragraph break before "പക്ഷേ, യഥാർത്ഥ സ്രഷ്ടാവിനെ …" (p. 423) is in the print and in the English.
- `verses.json` and every `words.json` gloss were compared with the images (word tables pp. 419, 420, 421–422, 425). They match, misprints included (see below), apart from correction 1.
- `[p. N]` markers: 420, 421, 422, 423, 425, 426, 427, 428, 429, 430. P. 424 holds only the verse 165–167 panels, so it has no marker (as part 23 p. 401). [p. 422] and [p. 425] stand at the start of the commentary, because those pages begin with the end of a word table / a word table. The others fall mid-sentence and sit at the matching point (as near as English word order allows; [p. 430] stands before "will love", the verb that begins p. 430).
- "### Section – 20" renders the printed "വിഭാഗം – 20" above the verse 164 panel (p. 421). Group markers *[Verses 161–162]*, *[Verse 163]*, *[Verse 164]*, *[Verses 165–167]* match the author's panels and word tables.

## Corrections made (before → after)

### Malayalam in verses.json

1. v. 164: "കീഴ്പ്പെടുത്ത / [നിയന്ത്രിക്ക]പ്പെടുന്ന" is a line-end break inside one word (കീഴ്പ്പെടുത്ത-പ്പെടുന്ന with the bracketed alternative). The author attaches such insertions without a space everywhere in this verse ("ഉപകാരപ്പെടുന്നവ(സ്തുക്കളെ)യും", "ബുദ്ധികൊടു(ത്ത് ഗ്രഹി)ക്കുന്ന", "(മാറി മാറി)വ്യത്യാസപ്പെടുന്നതിലും"). "കീഴ്പ്പെടുത്ത [നിയന്ത്രിക്ക]പ്പെടുന്ന" → "കീഴ്പ്പെടുത്ത[നിയന്ത്രിക്ക]പ്പെടുന്ന". (The site has a space; the English already read it as one word.)

### Arabic not as printed (point c)

2. p. 420: the print has tanwin on the word (crop; text layer ٌ): **إِلٰهُ** → **إِلٰهٌ**.
3. p. 420: the print has a kasra under the alif of إلا (crop; text layer): **لا إِلَهَ إلاالله** → **لا إِلَهَ إِلاالله**.
4. p. 427, Al-Jinn 18: the text layer has only two fathas over ف / لا / ت, and the crop shows them on ف and ت, none on لا. So the printed vowels differ from the verse (فَلَا), and the phrase is transcribed as printed: **فَلَا تَدۡعُواْ مَعَ ٱللَّهِ أَحَدٗا** → **فَلا تَدْعُوا مَعَ اللَّهِ أَحَدًا**.
5. p. 428, Yusuf 106: the text layer has a sukun on the final م of أكثرهم and of وهم, no shadda on إلا and no shadda on the م of مشركون (the same kind of difference as part 23, correction 2). Transcribed as printed: **وَمَا يُؤۡمِنُ أَكۡثَرُهُم بِٱللَّهِ إِلَّا وَهُم مُّشۡرِكُونَ** → **وَمَا يُؤْمِنُ أَكْثَرُهُمْ بِاللَّهِ إِلا وَهُمْ مُشْرِكُونَ**.

### DOUBTs resolved from the image (point a)

6. p. 423, Al 'Imran 191, بَاطِلا: the text layer gives every other vowel of the phrase as a separate mark (رَبَّنَا مَاخَلَقْتَ هَذَا بَاطِلا: fatha on ب, kasra on ط) and no mark at all over لا; the 300 dpi crop also shows no tanwin. The phrase stays as printed (بَاطِلا) and the DOUBT was removed.
7. p. 429, آمين: the crop shows the madda clearly. **آمين** stays and the DOUBT was removed.

### Same English for two Malayalam words / earlier renderings (point h)

8. വിജ്ഞാനം is "wisdom" in parts 20 and 23, and അറിവ് "knowledge" (p. 428 here too): p. 422 "the riches of knowledge" → "the riches of wisdom" (വിജ്ഞാന സമ്പത്തുക്കൾ).
9. ജ്ഞാനം is "learning" in part 23: p. 425 "great men who are of subtle knowledge" → "… of subtle learning" (സൂക്ഷ്മജ്ഞാനികൾ).
10. പിന്തുടരുക / പിൻതുടരുക is "go after" and പിൻപറ്റുക "follow" (part 23): word table v. 166 ٱتَّبَعُواْ (അവർ പിൻതുടർന്നിരിക്കുന്നു) "they have followed" → "they have gone after" (the verse and the next entry use പിൻപറ്റിയവർ "those who followed").
11. ന്യായവാദം is "argument" in part 23: p. 427 "interpretations and reasonings" → "interpretations and arguments".
12. വിരോധം is "hostility" in part 24: p. 423 വൈരാഗ്യപൂർവ്വം "out of hostility" → "out of rancour".
13. ഉപദ്രവം is "harm" (part 15; pp. 423 and 429 here): ദോഷം was also "harm". p. 428 "the power to do good and harm" → "good and ill"; p. 429 "the power to do good or harm to them" → "good or ill"; p. 429 "able to do good and harm" → "good and ill".
14. രക്ഷ is "protection" (p. 428, "for help and for protection"; കാത്തു രക്ഷിക്കുക "guard and protect", p. 423): കാവൽ was also "protection". p. 427 "The protection of Allah and of the shuhada'" → "The safekeeping of Allah and of the shuhada'".
15. അപ്പോൾ is "Then" everywhere else in this part (pp. 426 twice, 429, 430): p. 419 "So, it can be understood from this" → "Then, it can be understood from this".

### Added words (point f)

16. Word table v. 165 وَلَوۡ يَرَى (കണ്ടിരുന്നെങ്കിൽ, no subject printed; the subject is the next entry ٱلَّذِينَ ظَلَمُوٓاْ): "if they had seen" → "if … had seen", as part 03 (v. 20, ഉദ്ദേശിച്ചിരുന്നെങ്കിൽ "had … willed").
17. p. 422, രാത്രി ഇരുട്ട് മൂടുന്നു: "the night covers it in darkness" → "the night covers with darkness" ("it" is not printed).
18. v. 166, "(സന്ദർഭം)": "(– the occasion)" → "– (the occasion)" (the translator's dash stood inside the author's round bracket).

No dropped small words, may/will errors, -ഉം future rendered as present, wrong tense, changed voice, reversed or "fixed" negations, dropped തിരുമേനി, added ﷺ, changed reported speech, silently corrected names or misprints, or changed sentence order were found.

## Points the caller asked about

- **(a) The four DOUBTs.** 3:191 بَاطِلا and آمين: resolved and removed (corrections 6–7). Yusuf 106 തങ്ങൾക്ക്: printed clearly; its sense in "തങ്ങൾക്ക് ശിർക്ക് പ്രവർത്തിക്കുന്നവരായും കൊണ്ടല്ലാതെ" is not certain, so the DOUBT stays as worded. Dots at 39:3 (p. 429): the visible "...." (text layer "…." at x 351–362) stands between "പറയുന്നു:" and the Arabic, touching أَوْلِيَاءَ at the left end of the phrase: the same situation as parts 21–23, so the DOUBT stays. (The text layer also has a second "…." just right of إِلَى on the next line, but the crop shows nothing printed there; the English rightly has no dots there.) No further DOUBT is needed.
- **(b) TN on p. 430.** The image prints "ഞങ്ങളെവരെ പിഴപ്പിച്ചതല്ലെന്നും". The only reading that makes sense with "അവർ സ്വയം പിഴച്ചുപോയതാണെന്നും" is ഞങ്ങളവരെ ("we … them"); the TN states what is printed and how it was read, without opinion. Kept. (A TN is warranted here, unlike the other slips, because the printed form read literally would change who is meant.)
- **(c) Arabic.** Data-file form, compared mark by mark with the text layer: 1:5 إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ, 39:36 أَلَيۡسَ ٱللَّهُ بِكَافٍ عَبۡدَهُۥ, the second piece of 39:3 إِلَى ٱللَّهِ زُلۡفَىٰٓ, 2:165 يُحِبُّونَهُمۡ كَحُبِّ ٱللَّهِ and وَلَوۡ يَرَى ٱلَّذِينَ ظَلَمُوٓاْ: the printed letters and vowels equal the verse; the only differences are Uthmani signs (sukun shape, wasla, small waw, dagger alif and madda on final ى, sign on silent alif), so the data-file form stands, as part 23 decided. 72:18 and 12:106 differ in vowels and are now as printed (corrections 4–5). As printed and confirmed: 3:191 رَبَّنَا مَا خَلَقْتَ هَذَا بَاطِلا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ، (no dagger alif on هذا); first piece of 39:3 وَالَّذِينَ اتَّخَذُوا مِنْ دُونِهِ أَوْلِيَاءَ; 10:18 (no fatha on لا of مالا and ولا); 3:31 قُلْ إِنْ كُنْتُمْ … (sukun on ن of إن and كنتم, unlike the verse); وَالَّذِينَ آمَنُوا أَشَدُّ حُبًّا لِلَّهِ (no shadda on the first lam); الرَّحْمَٰنُ الرَّحِيمُ (p. 420, damma endings); أَنْدَاد; مَا شَاءَ الله وَ شئت; مَا شَاءَ الله وَشاء فلا ن; كَفربواح; نعوذ بالله; إن شاء الله. `npm run check` still shows only the two known Al-Baqarah "close but not exact" items.
- **(d) Misprints kept, no TN.** v. 161 gloss അല്ലാഹുവിന്റ; v. 163 എക (panel) and അവനല്ലതെ (word table); v. 164 panel കാററുകളുടെയും, v. 166 gloss പിൻപററപ്പെട്ടവർ; commentary കൃതിമങ്ങളുമാണ് (p. 421), സമുദ്രങ്ങളിലുടെ, എർപ്പെടുത്തിയതും (p. 422), പ്രവർത്തികളിലോ (p. 425), ചിഹനങ്ങളോ (p. 426), എർപ്പെടുത്തലാണെന്ന് (p. 427), ദുർമാഗത്തിന്റെയും (p. 430), എതായാലും (p. 420), രാത്രികള്ളൻമാർ (p. 426); stray full stops "പറഞ്ഞിരുന്നതും." (p. 428) and "ചെയ്യപ്പെടുന്ന പക്ഷം." (p. 429), and the missing stop before "ഇങ്ങിനെയുള്ളവരാണ്" (p. 428), all mirrored in English; the unclosed brackets after the 3:191, 12:106 and 39:3/10:18 glosses, mirrored. Meaning certain in each case.
- **(e) Site differences.** All resolved toward the book, confirmed on the images: p. 422 "അവ രണ്ടും" (site "അവരും"); p. 429 the book prints "...." in 39:3 (the site fills in the verse); p. 426 "അപ്പോൾ തിരുമേനി പറഞ്ഞു" with no ﷺ (site adds it); p. 423 paragraph break; v. 164 കീഴ്പ്പെടുത്ത[…] (correction 1). ﷺ is printed: p. 420 once, p. 426 four times; the English has exactly these 5. (r) only where (റ) is printed (Ibn 'Abbas twice, Hudaifah, Ibn Abi Hatim, Ibn Mas'ud, Baidawi).
- **(f) Additions.** "I wish to bring some points to attention here" (p. 428, ആഗ്രഹിക്കുന്നു, no subject printed): English needs a subject and the author is speaking; kept, but the reviewer may prefer "we" or a passive. "if they had seen" in the verse is right (അവർ is printed); in the word table it is corrected (16). "for one" (p. 428, three times) renders the benefactive -തരും (സാധിപ്പിച്ചു തരും "accomplish for [the speaker]"), as against -കൊടുക്കും "for them" (p. 429); it translates a printed word and is kept. "as they love Allah" (v. 165 verse and word table, അല്ലാഹുവിനെ സ്നേഹിക്കുന്നതുപോലെ): English needs a subject; kept, noted.
- **(g)** No [p. 424] (panels only) — confirmed. "### Section – 20" before v. 164 — confirmed.
- **(h) Terms.** കാരുണ്യവാൻ (v. 163, first occurrence in the repo) "the Merciful" is kept apart from the glossary's പരമകാരുണികൻ "the Most Compassionate" and കരുണാനിധി "the Ever-Merciful" (glossary; as Al-Fatihah 1 and 3 and Al-Baqarah parts 06, 09, 20, 24); it also matches കാരുണ്യം "mercy" (part 22). ഇലാഹ് "Ilah", as Al-Fatihah's commentary. ന്യായം "plea" here (pleas put forward to justify shirk), keeping it apart from ന്യായീകരണം "justification" in the same paragraph; part 23 rendered ന്യായം "justification" (hujjah, v. 150). Noted for the reviewer. നിത്യവാസികൾ "permanent dwellers" (as parts 04, 13); ശാശ്വത വാസികൾ "everlasting dwellers", ശാശ്വതമായ "everlasting" (p. 430). പടച്ചവൻ "the One who created" and സ്രഷ്ടാവ് "the Creator" (as part 09). തിരുമേനി "the noble Prophet". ഓർമിക്കുക is "remember" here (p. 423), as part 11, while part 23 has "keep in mind"; ഓർക്കുക "remember" (pp. 427, 430), as parts 07–18. Noted, not changed.
- **(i) Intensifiers, "or"/"that is", commas.** അഥവാ "Or" (p. 422, p. 429), അതായത് "That is" (p. 423), as part 22. തന്നെ "indeed" throughout. No comma changes who is meant.

## Checked and left as they are

- v. 167 "കാണിച്ചു / കൊടുക്കുന്നതാണ്" (p. 424, line end) kept as two words: the book prints the same construction "കാണിച്ചു തരുവാനായി" with a space mid-line (p. 407, part 23).
- v. 161 "അവിശ്വാസികളായും / കൊണ്ട്" (line end) kept as two words; the verse's other joins are breaks inside one word.
- Word table v. 167 ഒഴിഞ്ഞുമാറിയിരുന്നു "we would have drawn away": the form is past perfect, but in this counterfactual it carries the sense "would have". Left.
- p. 426 ഗൂഢമായ "hidden" and p. 426 നിഗൂഢങ്ങൾ "hidden": the same root (ni- intensifier). Left; the reviewer may want "obscure" for the second.
- p. 425 ഗുണവിശേഷങ്ങൾ and p. 428 ഗുണങ്ങൾ (of Allah) are both "attributes". Left.
- p. 428 "Most people among them" for അധികമാളുകളും, and "the greater part of mankind" for അധികഭാഗവും: the -ഉം of quantity is not "too". Left.
- `part.json` verses "161-167", pages "419-430", PDF pages "248-259": correct.

## Open doubts for the reviewer

1. **തങ്ങൾക്ക്** in the Yusuf 106 gloss (p. 428): sense not certain.
2. **Position of the dots** in 39:3 (p. 429): the same question as parts 21–23.
3. **ന്യായം** "plea" here, "justification" in part 23.
4. **ഓർമിക്കുക** "remember" here and in part 11, "keep in mind" in part 23.
5. **"I"** as the subject of ആഗ്രഹിക്കുന്നു (p. 428).
6. **Earlier open doubts still apply** (not in this part): see parts 13–24.

## New terms (not in the glossary; used consistently in this part)

The translator left no list in the files; this list is drawn from the files as they stand after this check.

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഇലാഹ് / ആരാധ്യൻ / ദൈവം | ilah | Ilah / object of worship / god |
| കാരുണ്യവാൻ | al-Rahman (v. 163 gloss) | the Merciful |
| ശാപം / ശപിക്കുക | la'nah | curse (as part 24) |
| നിത്യവാസികൾ / ശാശ്വത വാസികൾ | khalidin | permanent dwellers / everlasting dwellers |
| ലഘൂകരിക്കുക / ലഘുവാക്കുക / ലഘുത്വം | yukhaffaf | lighten / lightening |
| ഇടകൊടുക്കുക / അവധി / ഇടവേള | yunzarun | give respite / reprieve / interval |
| സമൻമാർ / സമൻ / അൻദാദ് | andad / nidd | equals / equal / andad |
| സമപ്പെടുത്തുക / സമത്വം കൽപിക്കുക | — | make equal / ascribe equality |
| ദൃഷ്ടാന്തങ്ങൾ | ayat | signs |
| ഒഴിഞ്ഞുമാറുക / നിരപരാധിത്വം നടിക്കുക | tabarra'a | draw away / feign innocence |
| ബന്ധങ്ങൾ / കൂട്ടുകെട്ടുകൾ | al-asbab | ties / alliances |
| ഖേദങ്ങൾ / ചേതങ്ങൾ | hasarat | regrets / losses |
| നേതാക്കൾ / തലവൻമാർ / അനുയായികൾ | — | leaders / chiefs / followers |
| മഹാത്മാക്കൾ / മഹാൻമാർ / പുണ്യാത്മാക്കൾ | — | great souls / great men / holy souls |
| ശുപാർശ / ശുപാർശക്കാർ | shafa'ah / shufa'a' | intercession / intercessors |
| നേർച്ച / നേർച്ചക്കാർ / നേർച്ചവഴിപാടുകൾ | — | vow / those to whom vows are made / vows and offerings |
| ന്യായം / ദുർന്യായം / ന്യായീകരണം / ന്യായവാദം | — | plea / bad plea / justification / argument |
| സ്രഷ്ടാവ് / പടച്ചവൻ | — | the Creator / the One who created |
| നിരീശ്വരവാദികൾ / ദൈവവാദികൾ | — | atheists / theists |
| വിജ്ഞാനം / ജ്ഞാനം / അറിവ് | — | wisdom / learning / knowledge (as part 23) |
| ദോഷം / ഉപദ്രവം | — | ill / harm |
| കാവൽ / രക്ഷ | — | safekeeping / protection |
| വൈരാഗ്യം / വിരോധം | — | rancour / hostility |
| ഭക്തി / ബഹുമാനം | — | devotion / honour |
| അനീതി / അക്രമം | zulm | injustice / wrong, wrongdoing |
| തൗഫീക്വ് | tawfiq | tawfiq |
| രിവായത്ത് | riwayah | riwayah |
| ബർക്കത്ത് | barakah | barakah |
