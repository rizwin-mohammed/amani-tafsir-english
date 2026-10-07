# Check: Al-Baqarah part 26 (verses 168–176)

Checked on 2026-10-07 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 260–271 (book pp. 431–442). Each page was rendered at 150 dpi and read once in full, including the two footnotes on p. 438. The amanithafseer.com text was used only as a reading aid; the image was the authority throughout. The full text layer (`ml2uni` conversion, untruncated) was compared with `verses.json` and `words.json`, and `pdftotext -bbox` was used to read the vowel marks of every Arabic phrase checked below (pp. 432, 435, 437, 438, 439, 441). Crops (300 dpi): لَحْمَ الْخِنْزِيرِ (p. 437) and the كلوا phrase on p. 435.
- **Boundaries.** Part 25 ends at the foot of p. 430 with "… ശാശ്വതമായ നരകശിക്ഷ തന്നെയായിരിക്കും ഫലം."; p. 431 begins with the heading "വിഭാഗം – 21" and the verse 168 panel, and this part starts there. This part ends on p. 442 with "… ന്യായ സാധുതയിൽ നിന്നും അതിവിദൂരംതന്നെ!", directly above the heading "വിഭാഗം – 22" and the verse 177 panel. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 168–176), `words.json` (107 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added (apart from correction 6).
- `verses.json` and every `words.json` gloss were compared with the images (word tables pp. 431, 433, 434, 436, 440–441). They match, misprints included.
- `[p. N]` markers: 432–439, 441, 442 (after correction 1). P. 440 holds only the verse 174–176 panels and the start of the word table, so it has no marker (as part 25 p. 424). [p. 441] stands at the start of the commentary, because that page begins with the end of the word table. The others fall mid-sentence and sit at the matching point (as near as English word order allows).
- "### Section – 21" renders the printed "വിഭാഗം – 21". Group markers *[Verses 168–169]*, *[Verses 170–171]*, *[Verse 172]*, *[Verse 173]*, *[Verses 174–176]* match the author's panels and word tables.

## Corrections made (before → after)

### Page markers

1. p. 432 begins "വഴി മനുഷ്യനെ വഴിപിഴപ്പിക്കുവാൻ …" (the end of the first commentary paragraph); the marker was missing. Added: "… open enemy; *[p. 432]* Satan is one who has set out to lead man astray by way of evil counsels".
2. p. 435 ends with "റസൂലുകളോട്" and p. 436 begins "കൽപിച്ച പ്രകാരം തന്നെ അല്ലാഹു സത്യവിശ്വാസികളോടും കൽപിച്ചിരിക്കുന്നു." The marker stood before "the Rasuls", the only word of the sentence on p. 435. "Allah has commanded the true believers too just as He commanded *[p. 436]* the Rasuls." → "*[p. 436]* Allah has commanded the true believers too just as He commanded the Rasuls."

### Arabic not as printed (point c)

3. p. 437: the text layer has a sukun on the lam of the article (x 206, as on الْمَيْتَة above it), and the crop shows it: **لَحْمَ الخِنْزِيرِ** → **لَحْمَ الْخِنْزِيرِ**.
4. p. 441, Tawbah 38: the text layer has a sukun on the lam of الحياة (x 324), the same position as in لَحْمَ الْخِنْزِيرِ: **فَمَا مَتَاعُ الحَيَاةِ الدُّنْيَا …** → **فَمَا مَتَاعُ الْحَيَاةِ الدُّنْيَا …**. Every other mark agrees with the files (no shadda on إلا; dammatan on قليل). See point (c) below.

### Tense / voice / added word

5. p. 435, hadith: "വിശിഷ്ടമായതല്ലാതെ അവൻ സ്വീകരിക്കുകയുമില്ല" is the -ഉം + negative future: "He also does not accept other than what is excellent." → "He will also not accept other than what is excellent."
6. p. 438: the sentence begins "ഹജ്ജിലോ ഉംറഃയിലോ തൽബിയത്ത് (*) പറയുന്നവൻ …"; nothing is printed for "That". "That, because one who says the talbiyah (\*) …" → "Because one who says the talbiyah (\*) …".
7. p. 431: "ഓർമിപ്പിക്കുന്നു" is active with Allah as the understood subject (the paragraph ends "… മനുഷ്യരെ ഉണർത്തുകയാണ് അല്ലാഹു"); the English had turned it passive. "After that, it is brought to mind that the Giver of food too is He indeed, …" → "After that, He reminds that the Giver of food too is He indeed, …".

### Same Malayalam, different English (point g)

8. ഹേ, വിശ്വസിച്ചവരേ is "O you who have believed" in parts 16 and 24 and in this part's word table: v. 172 "O, you who have believed, eat …" → "O you who have believed, eat …"; the same in the quotation on p. 436.

### TN on p. 439 (point a), reworded

9. The image prints, with a full stop and no question form: "എന്നാൽ, ഇത്തരം അക്രമ പ്രവർത്തനങ്ങൾ തെറ്റായത് കൊണ്ട് ഒരാൾ അയാളുടെ ജീവനെ പട്ടിണിയിട്ട് കൊല്ലുകയെന്ന തെറ്റ് ഇല്ലാതാകുന്നു. അത്കൊണ്ട് നിർബന്ധിതാവസ്ഥയിലുള്ള ഈ ആനുകൂല്യം അവർക്കും ബാധകം തന്നെയാണെന്നുമാണ് ഇബ്നു ജരീർ(റ) മുതലായവരുടെ അഭിപ്രായം." The paragraph sets Ibn Jarir's view against the view that the concession does not apply to wrongdoers; read as printed ("the wrong … ceases to exist"), the sentence does not lead to "therefore, this concession … is applicable to them too", and no other reading of the printed words gives that sense. So a TN is warranted. The English translates what is printed. The TN no longer calls it "evidently a printing slip"; it now reads: *[TN: The book prints ഇല്ലാതാകുന്നു “ceases to exist”, translated as printed. The conclusion that follows (“therefore, this concession … is applicable to them too”) would follow from the negative, ഇല്ലാതാകുന്നില്ല “does not cease to exist”.]*

No dropped small words, may/will errors, -ഉം future rendered as present (apart from 5), reversed or "fixed" negations, added pronouns, dropped തിരുമേനി, added ﷺ, changed reported speech, silently corrected names or misprints, misplaced footnotes, or translator words in round brackets were found.

## Points the caller asked about

- **(a) TN on p. 439.** See correction 9.
- **(b) DOUBTs.** None is needed. The line-end joins in the panels are settled by the book: v. 170 "ബുദ്ധി / കൊടു(ത്തുഗ്രഹി)ക്കാതെയും" (line end) is printed joined mid-line in v. 171 "ബുദ്ധികൊടു(ത്തുഗ്രഹി)" (p. 433); v. 173 "ഉയർത്തപ്പെട്ട / [അറുക്കപ്പെട്ട]തും" keeps the space, as "ഹറാമാക്കി [നിഷിദ്ധ" in the same verse is printed with a space mid-line; v. 174 "തിന്നു (നിറക്കു) / ന്നില്ല" and "സംസ്കരി (ച്ചുശുദ്ധമാ) / ക്കുകയുമില്ല" keep the printed spaces before the brackets; "ഭിന്നാഭി / പ്രായം", "നിശ്ചയ / മായും", "അവനെ / ത്തന്നെയാണ്" are breaks inside one word.
- **(c) Arabic.**
  - Tawbah 38 (p. 441): with correction 4 it is now exactly as printed. It differs from the verse in its vowels (sukun forms, no shadda on إلا, ordinary spelling), so `npm run check` lists it as "close but not exact" (9:38, 92%). That is expected for an as-printed quotation and is acceptable. The two older Al-Baqarah items (تَابَ إِلَى الله, part 06; عَسَى رَبُّهُ إِنْ طَلَّقَكُنَّ, part 19) are unchanged.
  - Data-file forms, compared mark by mark with the text layer: 23:51 in full (p. 435), 23:51 opening with "-الخ" (p. 436), and 2:175 فَمَآ أَصۡبَرَهُمۡ عَلَى ٱلنَّارِ (p. 442). The printed letters and vowels equal the verse; the only differences are Uthmani signs (sukun shape, wasla, sign on silent alif, tanwin shape, madda in فَمَآ), so the data-file form stands, as parts 23 and 25 decided. The 23:51 quotation is a full verse in any case.
  - As printed and confirmed with the text layer: كُلُوا مِمَّافِي الأَرْضِ (pp. 432, 435; the crop shows the fatha on أ, which the text layer folds into the glyph), حَلالا طَيِّبًا, كُلُوا مِنْ طَيِّبَاتِ مَارَزَقْنَاكُمْ (p. 435), يَا أَيُّهَا الَّذِينَ آمَنُوا كُلُوا مِنْ طَيِّبَاتِ -الخ (p. 436), الْمَيْتَة (fatha on ت, none on ة), الدَّم, فَانَّهُ رِجْس, مَاأُهِلَّ بِهِ لِغَيْرِ اللَّهِ (pp. 437–439), مُهِلّ, إهْلال, استهلال (no vowels), لَبَيْكَ اللَّهُمَّ لَبَيْك (no shadda on either ب; fatha on both), تَلْبِيَة, ولعن الله من ذبح لغير الله, من شرح مسلم, the 5:3 fragment فَمَنِ اضْطُرَّ فِي مَخْمَصَةٍ غَيْرَ مُتَجَانِفٍ لِّإِثْمٍ فَإِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ (every mark matches), ومن الله التوفيق, إن شاء الله. Correction 3 for لَحْمَ الْخِنْزِيرِ.
- **(d) Misprints kept without TN.** ഉപദ്രകരവുമല്ലാത്തതുമായ (p. 432), നലെണ്ണം, സുറഃ, ആൻആം (p. 437), വിശേഷിച്ചിട്ടില്ല, അനുവദ നീയമായത് (p. 435), ആളുടെയൊ, വ്യാഖ്യാനിച്ചുക്കൊണ്ട് (p. 439), "അതായത്. മൽസ്യവും" (p. 437, mirrored "That is. Fish …"), v. 170 പിതാക്കൾയാതൊന്നും and പിൻപററുമോ, word tables പിൻപററുകയും, തിന്നുകൊളളുവിൻ, കൽപിക്കുകയുളളൂ, v. 176 table കക്ഷിത്തത്തിൽ; "1)" without opening bracket (p. 441); v. 171 ending with a comma; the unclosed brackets after the 23:51 gloss (p. 435), after "(ശബ്ദം ഉയർത്തുന്നവർ" (p. 438) and after the 9:38 gloss (p. 441); missing stops (p. 432 "നല്ലത് ശുദ്ധമായത്" without comma, footnote (\*), end of (3) p. 441, the 5:3 gloss p. 439). All mirrored; the meaning is certain in each case.
- **(e) Footnotes and ﷺ.** The footnotes (\*) and (\*\*) of p. 438 stand right after the paragraph that carries both markers (ending "… ഈ കൂട്ടത്തിൽപെട്ടതാണ്. (\*\*)"), before "ഇബ്നു ജരീർ (റ)ന്റെ പ്രസ്താവനയിൽ …". ﷺ is printed: p. 435 once, p. 437 twice, p. 439 once, p. 441 once; the English has exactly these 5. None at "(തിരുമേനി തുടർന്നു:)" (p. 436) or "ഒരു നബി വചനത്തിൽ" (p. 438). (r) and (a) only where (റ) and (അ) are printed.
- **(f) Markers and heading.** See "What was compared" and corrections 1–2.
- **(g) Terms.** Checked by grep against earlier parts' verses and word tables:
  - നിഷിദ്ധം "forbidden" (as part 13) / ഹറാം "haram" / നിരോധം, നിരോധിച്ച "prohibition, prohibited" / നിയമവിരുദ്ധം "unlawful" / വിരോധിക്കപ്പെട്ട "disallowed" / വിലക്ക് "ban": kept apart.
  - അനുവദനീയം "permissible" / നിയമാനുസൃതം "lawful" / അനുവദിക്കുക "permit": kept apart.
  - ദോഷം "ill" (as part 25) / ദോഷകരം "detrimental" / ഉപദ്രവകരം "harmful" / വൃത്തികെട്ട "dirty" / മ്ളേച്ഛം "filthy": kept apart.
  - ഉപമ "parable" (as parts 03–04) / ഉദാഹരണം "example": kept apart.
  - മറച്ചുവെക്കുക "hide" / മൂടിവെക്കുക "cover up" / ഒളിച്ചുവെക്കുക, ഒളിപ്പിച്ചുവെക്കുക "conceal": as parts 08, 23, 24.
  - കുറ്റം "offence" / പാപം "sin" / തെറ്റ് "wrong" (as part 24) / പാതകം "crime" / അക്രമം "wrongdoing" (as part 25).
  - ശുദ്ധം "pure" / ശുദ്ധമാക്കുക "purify" / വിശുദ്ധ "holy" (p. 435) / പരിശുദ്ധി "purity" (p. 442): see open doubt 2.
  - കക്ഷിപിരിവ് "schism" and കക്ഷിത്തം "partisanship", as part 21. സംസ്കരിക്കുക "refine", as parts 20 and 23. നന്ദി കാണിക്കുക "show thanks" (as part 23) / നന്ദി ചെയ്യുക "give thanks" (as parts 09, 24): kept apart. സഹനം "forbearance", as part 24. വഴിപിഴവ് "error" (as part 04), ദുർമാർഗം "misguidance" (as part 02), നേർമാർഗം "the straight way", സൻമാർഗം "right guidance".
- **(h) Intensifiers, "or"/"that is", commas.** അഥവാ "Or" (pp. 435, 439, 441, 442), അതായത് "That is" (pp. 436, 437, 438, 442), as parts 22–25. തന്നെ / അത്രെ "indeed" throughout. No comma changes who is meant.

## Checked and left as they are

- v. 171 "… except a call and a driving (at an animal)": the author's "(മൃഗത്തോട്)" belongs to "കേട്ടറിയാത്തതിനോട്" ("at what does not hear and know"); in English it stands after "driving", where it could be read as "driving at an animal". The sense is the same; left.
- v. 173 "– only these has He made haram": "these" gathers the four listed items for English word order (Malayalam "…ഉം മാത്രമേ … ഹറാമാക്കിയിട്ടുള്ളൂ"). Left.
- Word table v. 173 فَلَآ إِثۡمَ "എന്നാൽ കുറ്റമില്ല" "then there is no offence", while فَمَنِ "എന്നാൽ വല്ലവനും" is "but whoever": എന്നാൽ carries both senses; left.
- p. 434 "the way they had been *[p. 434]* adopting": p. 434 begins with "മാർഗം" ("way"), which English places before the p. 433 words; left.
- p. 436 hadith "He will stretch out his hands": കൈനീട്ടും has no number or possessive printed; English needs both. Left.
- `part.json` verses "168-176", pages "431-442", PDF pages "260-271": correct.

## Open doubts for the reviewer

1. **p. 439, ഇല്ലാതാകുന്നു**: translated as printed, with the TN (correction 9).
2. **വിശുദ്ധ / പരിശുദ്ധി**: വിശുദ്ധ വസ്തുക്കൾ is "holy things" (p. 435) and പരിശുദ്ധി "purity" (p. 442), while ശുദ്ധം is "pure" (v. 168 word table) and parts 13 and 17 render പരിശുദ്ധൻ / പരിശുദ്ധാത്മാവ് "holy". The reviewer may want one rendering per word.
3. **Earlier open doubts still apply** (not in this part): see parts 13–25.

## New terms (not in the glossary; used consistently in this part)

The translator left no list in the files; this list is drawn from the files as they stand after this check.

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| അനുവദനീയം / അനുവദിക്കുക | halal | permissible / permit |
| നിയമാനുസൃതം / നിയമവിരുദ്ധമാക്കുക | — | lawful / make unlawful |
| വിശിഷ്ടം / വിശിഷ്ടൻമാർ | tayyib | excellent / the excellent |
| നല്ലത് / ശുദ്ധം / ഹൃദ്യം | tayyib (word table) | good / pure / pleasing |
| ചീത്ത / ദുഷിച്ചത് / മ്ളേച്ഛം | khabith | bad / corrupt / filthy |
| വിശുദ്ധ / പരിശുദ്ധി | — | holy / purity (open doubt 2) |
| നിഷിദ്ധം / ഹറാം | haram | forbidden / haram |
| നിരോധം / നിരോധിച്ച / വിലക്ക് / വിരോധിക്കപ്പെട്ട | — | prohibition / prohibited / ban / disallowed |
| വിരോധമില്ല | — | there is no objection (as part 24) |
| ദോഷം / ദോഷകരം / ഉപദ്രവകരം / വൃത്തികെട്ട | — | ill / detrimental / harmful / dirty |
| ഉപമ / ഉദാഹരണം | mathal | parable / example |
| കാലടികൾ / ചവിട്ടടികൾ | khutuwat | footsteps / treads |
| തിൻമ / നീചവൃത്തി | su' / fahsha' | evil / vile conduct |
| ദുരുപദേശം / ഉപദേശം / സത്യോപദേശം | — | evil counsel / counsel / counsel of truth |
| അനുകരണം / പാരമ്പര്യം | taqlid | imitation / tradition |
| പൂർവ്വികൻമാർ / പിതാക്കൾ | aba' | forefathers / fathers |
| ബുദ്ധികൊടു(ത്തുഗ്രഹി)ക്കുക / ഗ്രഹിക്കുക | 'aqala | use reason (and understand) / understand |
| വിളി / തെളി / സംബോധനം | du'a' / nida' | call / driving / address |
| ബധിരർ, ബധിരൻമാർ / ഊമകൾ / അന്ധൻമാർ | summ / bukm / 'umy | deaf / dumb / blind |
| നന്ദി കാണിക്കുക / നന്ദി ചെയ്യുക | shakara | show thanks / give thanks |
| ശവം / രക്തം / പന്നിമാംസം | maitah / dam / lahm al-khinzir | carrion / blood / swine-flesh |
| ശബ്ദം ഉയർത്തുക / ഉറക്കെ ശബ്ദിക്കുക | ahalla / ihlal | raise the sound / sound aloud |
| നേർച്ച / വഴിപാട് / യാഗം / ബലി | — | vow / offering / sacrificial rite / immolation |
| നിർബന്ധിതൻ / നിർബന്ധിതാവസ്ഥ / ആനുകൂല്യം / ഉപാധി | idtirar | compelled / state of compulsion / concession / condition |
| കാംക്ഷിക്കുക / ധിക്കാരം / അതിക്രമം / അതിരുവിടുക | bagh / 'ad | covet / defiance / transgression / overstep the bounds |
| കുറ്റം / പാപം / തെറ്റ് / പാതകം | ithm | offence / sin / wrong / crime |
| അക്രമം | — | wrongdoing (as part 25) |
| മറച്ചുവെക്കുക / മൂടിവെക്കുക / ഒളിച്ചുവെക്കുക | katama | hide / cover up / conceal (as parts 23–24) |
| സംസ്കരിക്കുക | zakka | refine (as parts 20, 23) |
| സഹനം | sabr ('ala al-nar) | forbearance (as part 24) |
| വഴിപിഴവ് / ദുർമാർഗം / നേർമാർഗം / സൻമാർഗം | dalalah / huda | error / misguidance / the straight way / right guidance |
| പാപമോചനം | maghfirah | forgiveness of sins |
| കക്ഷിപിരിവ് / കക്ഷിത്തം | shiqaq | schism / partisanship (as part 21) |
| കാര്യലാഭം / സ്വാർത്ഥ താൽപര്യം | — | practical gain / selfish interest |
| വേദവിജ്ഞാനം / മതസത്യങ്ങൾ | — | scriptural wisdom / religious truths |
| അവതരണഹേതു / അവതരണ കാരണം / അവതരണ സന്ദർഭം | sabab al-nuzul | the cause / the reason / the occasion of the sending down |
| തൽബിയത്ത് | talbiyah | talbiyah |
| മതഭ്രഷ്ടൻ | — | outcast from the religion |
