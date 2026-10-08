# Check: Al-Baqarah part 29 (verses 183–185)

Checked on 2026-10-08 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 286–298 (book pp. 457–469). Each page was rendered at 150 dpi and read once in full, including the (\*) footnote that runs from the foot of p. 467 to the foot of p. 468. The full (untruncated) `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary, and `pdftotext -bbox` was used to read the vowel marks of every Arabic phrase on pp. 460–467. The amanithafseer.com text was not needed. No crops were needed: every Arabic mark was settled from the bbox layer together with the page images.
- **Boundaries.** Part 28 ends on p. 457 with "… മുസ്‌ലിം സമുദായം ഓർക്കേണ്ടിയിരിക്കുന്നു."; the heading "വിഭാഗം – 23" and the verse 183 panel follow directly, and this part starts there. This part ends on p. 469 with "… ഉൾപ്പെടുത്തി അനുഗ്രഹിക്കട്ടെ. آمين", directly above the verse 186 panel on the same page. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 183–185), `words.json` (61 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images (panels pp. 457–458, word table p. 459), including the book's spacing (v. 185 "അവതരിപ്പിക്കപ്പെട്ടിട്ടുള്ളതാ(യ മാസമാ)കുന്നു;-", "നോമ്പുനോറ്റുകൊള്ളട്ടെ"; table "സ്വമേധയാചെയ്തു", "(ആ)മാസത്തിൽ", "നിയമിക്ക (രേഖപ്പെടുത്ത)പ്പെട്ടിരിക്കുന്നു."). The text layer drops the െ of "ഉത്തമമത്രെ" (v. 184); the image has it, as in the file. The layer carries a ZWNJ in തക്‌ബീർ and സൂക്ഷ്‌മത; the files have none. ക്ബ has no conjunct form, so the print looks the same either way, and സൂക്ഷ്മത is printed as a conjunct; left.
- `[p. N]` markers: 459–469. P. 458 holds only panels, so it has no marker. [p. 459] stands at the start of the commentary (the word table fills the top of p. 459). The others sit where each page turns: [p. 460] before (1); [p. 461] "Allah *[p. 461]* has exempted" (p. 461 begins "ഒഴിവാക്കിയിരിക്കുന്നു"); [p. 462] "(in that month *[p. 462]* whoever was present"; [p. 463] before "we have also quoted"; [p. 464] before (9); [p. 465] after the Surah Dukhan sentence; [p. 466] "so many fasts must *[p. 466]* be observed"; [p. 467] "concerning some *[p. 467]* thing"; [p. 468] "until *[p. 468]* arriving"; [p. 469] "A'ishah *[p. 469]* (r)". All right.
- "### Section – 23" renders "വിഭാഗം – 23"; group marker *[Verses 183–185]* matches the panels and the single word table.

## Corrections made (before → after)

### Voice (subject Allah understood)

1. p. 461, (6): "കൽപിക്കുകയും ചെയ്തിരിക്കുന്നു" is active, continuing "അല്ലാഹു … ഒഴിവാക്കിയിരിക്കുന്നു" (as part 26, correction 7): "It has also been commanded that, as many days' …" → "He has also commanded that, as many days' …".
2. p. 461, (7): "അറിയിച്ചിരുന്നു", active, after "അല്ലാഹു അവർക്ക് അന്ന് അനുവദിച്ചുകൊടുത്ത …": "At the same time, it had also been made known that …" → "At the same time, He had also made known that …".
3. p. 463, (8): "പറഞ്ഞിട്ടില്ല", active, right after "… എന്നാണ് അല്ലാഹു പറഞ്ഞത്": "It has not been said that it must be food …" → "He has not said that it must be food …".

### Dropped small word

4. p. 460, (4): "… എന്നത്രെ സൂക്ഷ്മത പാലിക്കൽ കൊണ്ട് വിവക്ഷ": "What is meant by observing caution is being people …" → "What is meant by observing caution is indeed being people …".

### Sentence structure

5. p. 466, (13): the print has two sentences, and "ഇവിടത്തെ സൂചന" belongs to the second: "… ബുദ്ധിമുട്ടിക്കുവാൻ അല്ലാഹു ഉദ്ദേശിക്കുന്നില്ല. അതുകൊണ്ടാണ് വേറെ ദിവസങ്ങളിൽ എണ്ണം തികച്ചാലും മതി എന്ന് വെച്ചിരിക്കുന്നതെന്നാണ് ഇവിടത്തെ സൂചന." "What is indicated here is that Allah does not intend … on a journey. That is why it has been laid down that it is enough even if one completes the number on other days." → "Allah does not intend … on a journey. That it is for that reason that it has been laid down that it is enough even if one completes the number on other days is what is indicated here."

### Punctuation added by the translator

6. p. 461, (7): the print has no bracket before فَمَنْ شَهِدَ …; its one bracket opens the gloss "(ആ മാസത്തിൽ ആർ ഹാജറുണ്ടായോ അവൻ അതിൽ നോമ്പ് നോൽക്കട്ടെ)", which closes on p. 462 (as everywhere else on pp. 462 and 465, "ARABIC (gloss)"). "(**فَمَنْ شَهِدَ مِنْكُمُ الشَّهْرَ فَلْيَصُمْهُ**) (in that month …" → "**فَمَنْ شَهِدَ مِنْكُمُ الشَّهْرَ فَلْيَصُمْهُ** (in that month …".
7. p. 464, (10): the hadith quotation opens with ‘ but is not closed in the print ("… ഉപേക്ഷിക്കുകയാണ് ചെയ്യുന്നത്. (ബു; മു.)"); the English had closed it. "… because of Me.’ (Bu; Mu.)" → "… because of Me. (Bu; Mu.)", as the other unbalanced quotes of this part are mirrored.

### Same Malayalam, same English

8. നബി is "the Prophet" throughout this part, and parts 04 and 08 render മുഹമ്മദ് നബി "Muhammad, the Prophet ﷺ": p. 460 "the community of Muhammad Nabi ﷺ" → "the community of Muhammad, the Prophet ﷺ".
9. ദോഷം is "ill" in part 26 and on p. 469 of this part ("… is not the only ill in this"): p. 462 "harm will befall the child in the womb" and "harm will befall the child that sucks the breast" → "ill will befall …" (twice); p. 463 "Women who fear that harm will come about" → "… that ill will come about".
10. പുണ്യം is "merit" (part 27) and p. 464 "പുണ്യപ്പെട്ടതാണ്" is "more meritorious": p. 468, hadith 4, "പുണ്യകാര്യത്തിൽപെട്ടതല്ല" "is not among the virtuous deeds" → "is not among meritorious things".
11. ത്വ (Tabarani in the Volume 1 key) is "Tw." in `intro.md`: p. 462 "(Bu; Mu; Da; Ti; Na; Ta. and others)" → "(… Na; Tw. and others)".

No may/will errors, -ഉം future rendered as present, reversed or "fixed" negations, changed reported speech, dropped തിരുമേനി, added ﷺ, silently corrected names, translator words in round brackets or misplaced footnotes were found apart from the above.

## Points the caller asked about

- **(a) The two TNs.** p. 464: the image and the bbox layer show وَمَن (fatha on و and م, no ف); verse 184 has فَمَنْ. TN kept. p. 466: "(മാഇദഃ : 7)" is printed; the words are in 5:6 of `data/quran-uthmani.json`. The TN points only at the difference from the Quran text used on the site; kept.
- **(b) The DOUBTs.** Dots: on p. 461 ((7), وَعلى الذين يطيقونه فدية), p. 464 ((11), شَهْرُ رَمَضَانَ الَّذِي, "…."), p. 465 ((12), وَمَنْ كَانَ …, "......") and p. 466 ((13), يُرِيدُ …, "....."), the text layer and the image put the dots at the left end of the Arabic, touching its last word; the same situation as parts 21–27. Kept. തെണ്ടം "ransom": the open question of parts 08, 18, 27; kept. (كمافى ابن كثير) p. 463: Arabic only, no Malayalam; kept as part 27 handled its Arabic-only footnote. നാഴിക "nazhikas" in the footnote: kept.
- **(c) Arabic as printed**, confirmed mark by mark with the bbox layer: لَعَلَّكُمْ تَتَّقُون (p. 460); أَيَّامًامَعْدُودَاتٍ (pp. 460, 464; printed joined); وَعلى الذين يطيقونه فدية (p. 461; fatha on و only); فَمَنْ شَهِدَ مِنْكُمُ الشَّهْرَ فَلْيَصُمْهُ (pp. 461, 462, 465; no sukun on the lam of the article); طَاقَة, يُطِيقُ, يُطَوَّقُونَ, الذِينَ يُطِيقُونَهُ (p. 462; no shadda, kasra on ذ); كمافى ابن كثير (p. 463; كما and فى 0.6 pt apart, i.e. joined); طَعَامُ مِسْكِين (p. 463); وَمَن تَطَوَّعَ خَيْرًا فَهُوَ خَيْرلَهُ (p. 464; no mark on the second ر); وَأَنْتَصُومُواخَيْرٌلَكُمْ, إِنْ كُنْتُمْ تَعْلَمُونَ, شَهْرُ رَمَضَانَ الَّذِي (p. 464); اللوحُ المَحْفُوظ (p. 465); وَمَنْ كَانَ مَرِيضًا أَوْ عَلَى سَفَرٍ (p. 465); تَكْبِير (p. 467; sukun on ك); كُرَاعُ الغَمِيم, عُسْفَانِ (footnote). All agree with the files. **Data-file forms**, whose letters and vowels equal the print (the only differences are Uthmani signs): 2:184 وَعَلَى ٱلَّذِينَ يُطِيقُونَهُۥ فِدۡيَةٞ (p. 462, Salamah) and the same with "-الخ" (p. 462, Ibn Jarir); 2:185 يُرِيدُ ٱللَّهُ بِكُمُ ٱلۡيُسۡرَ (p. 466); 5:6 مَا يُرِيدُ ٱللَّهُ لِيَجۡعَلَ عَلَيۡكُم مِّنۡ حَرَجٖ (p. 466; the print, like the data, has no sukun on the م of عليكم and a shadda on مِّن); 22:78 وَمَا جَعَلَ عَلَيۡكُمۡ فِي ٱلدِّينِ مِنۡ حَرَجٖ (p. 466; sukun on م, no shadda on مِن, as the data); وَلِتُكۡمِلُواْ ٱلۡعِدَّةَ......وَلَعَلَّكُمۡ تَشۡكُرُونَ (p. 466; the print even has the sign over the silent alif). Kept. سلمة بن الاكوع رضى الله عنه, بعثت بالحنيفية السمحة, القاموس and معاذ الله are unvowelled, as in the files.
- **(d) Footnote (\*) on Kura' al-Ghamim.** It begins at the foot of p. 467 and ends at the foot of p. 468 with "… ഉസ്ഫാനും സ്ഥിതിചെയ്യുന്നു. (القاموس)". The marker is in hadith 1, whose paragraph ends on p. 468 ("… രിവായത്തുണ്ട്."), so the note right after hadith 1 is the right place. It is complete (both sentences and the source). "'Usfani" mirrors the printed ഉസ്ഫാനീ(ൽ), "'Usfan" the printed ഉസ്ഫാൻ.
- **(e)** p. 461 "ആ നോമ്പ് നോറ്റു വിട്ടേണ്ടതുമില്ല": the print has വിട്ടേണ്ട (short i) where the sense, and "നോറ്റു വീട്ടണം" six lines above, give വീട്ടേണ്ട "pay off"; the English "fast that fast to pay it off" carries the certain meaning and English cannot mirror a vowel-length slip, so no TN (as earlier checks did for such misprints). p. 465 "ആ രാത്രിയിലും ആ മാസത്തിലും അവതരിച്ചു എന്ന് പറയുന്നതിന്റെ താൽപര്യം.": printed as a verbless sentence with a full stop; mirrored ("The import of saying that it came down on that night and in that month."). Unbalanced marks, all mirrored as printed: Salamah's quotation (closing ’ only, p. 462), Ibn Jarir's (closing ’ only, p. 463), "‘തയമ്മും," (p. 466), the 5:6 and 22:78 glosses (one bracket not closed, p. 466), hadith 5 (two openings, one closing, p. 468), and now hadith (10) (correction 7). Abbreviations: the Volume 1 key (Mughavura p. 11, text layer) lists ബു, മു, അ, ദാ, തി, ജ, ഹാ, ന, ബ, ത്വ (ത്വബ്‌റാനീ) and has no മാ. ത്വ: correction 11. മാ "Ma" follows part 22 "(Ma;Bu;Mu;Da;)"; see open doubt 3.
- **(f) ﷺ and markers.** ﷺ is printed 17 times: p. 460 three (മുഹമ്മദ് നബി, നബി twice), p. 464 two, p. 466 one (നബി തിരുമേനി ﷺ യും), p. 467 two, p. 468 nine (hadith 1 one, hadiths 2, 4, 5, 6 two each); none on pp. 461–463, 465, 469. The English has exactly 17, at these places. തിരുമേനി is "the noble Prophet" at each printed place (p. 466; p. 468 hadith 1 twice, hadith 7; റസൂൽ തിരുമേനി "the noble Rasul", hadith 6). (r) and (a) only where (റ), (അ) are printed. Markers: see above.
- **(g) Fasting vocabulary**, checked against earlier parts' verses and word tables and used the same way throughout this part: നോമ്പ് "fasting / the fast", നോമ്പ് നോൽക്കുക "observe fasting", നോമ്പ് പിടിക്കുക "keep the fast"; വ്രതം "abstinence" (p. 460, once); ഇളവ് "relaxation" (as part 27); ഒഴിവ് "exemption"; ഞെരുക്കം "straitness", ഞെരുങ്ങി "with straining"; എളുപ്പം "ease"; സൗകര്യം "convenience"; പ്രയാസം "trouble" (പ്രയാസകരം "troublesome"); വിഷമം "hardship" (part 27: വിഷമത "hardship"); ബുദ്ധിമുട്ട് "difficulty"; വിട്ടുവീഴ്ച "accommodation"; തെണ്ടം "ransom" (doubt); പ്രായശ്ചിത്തം "atonement" (as part 27). Corrections 9–10 for ദോഷം and പുണ്യം.
- **(h)** Verse 185 and the word table follow the book's spacing (see "What was compared").

## Checked and left as they are

- v. 184 "… (must be completed) upon those for whom it becomes possible …": the print has no stop after "(പൂർത്തിയാക്കണം)"; mirrored.
- p. 461 "Some hadiths are also quoted below." and p. 463 "We are not venturing here …", p. 465 "this was said earlier": the author's subjectless actives; passive or "we" kept, as in parts 27–28.
- p. 463 "The opinions … (كمافى ابن كثير)": see point (b).
- p. 466 "معاذ الله": the bbox gap is 1.4 pt, the same as the gap between ابن and كثير on p. 463, which the image shows as a space; the space was kept.
- p. 467 അനുഷ്ഠാനകർമങ്ങൾ "acts of ritual observance", മതാനുഷ്ഠാനങ്ങൾ "religious observances" (p. 466), while part 27 rendered അനുഷ്ഠാനം "practice"; part 13 used "observance". Left; see open doubt 4.
- p. 467 സൂക്ഷിക്കുക (64:16 gloss) "be heedful of", distinct from സൂക്ഷ്മത പാലിക്കുക "observe caution". Left.
- p. 469 "some one of these hadiths or events" for "ഹദീഥുകളെയോ സംഭവത്തെയോ" (event singular): the sense is the same; left.
- `part.json` verses "183-185", pages "457-469", PDF pages "286-298": correct.

## Open doubts for the reviewer

1. **Position of the dots** on pp. 461, 464, 465, 466 (point b), as parts 21–27.
2. **തെണ്ടം** "ransom" (v. 184, word table and commentary), as parts 08, 18, 27; **നാഴിക** "nazhikas" (footnote p. 467); **(كمافى ابن كثير)** "as in Ibn Kathir" (p. 463).
3. **മാ "Ma"** (pp. 468, hadiths 3–5): not in the Volume 1 key; probably Malik, as part 22 also left it.
4. **അനുഷ്ഠാനം** family: "observance" here, "practice" in part 27.
5. **TNs** on pp. 464 and 466 (point a).
6. **Earlier open doubts still apply** (not in this part): see parts 13–28.

## New terms (not in the glossary; used consistently in this part)

The translator left no list in the files; this list is drawn from the files as they stand after this check.

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| നോമ്പ് / നോമ്പ് നോൽക്കൽ / നോമ്പ് പിടിക്കുക | siyam / sawm | fasting, the fast / observing (of) fasting / keep the fast |
| വ്രതം | — | abstinence |
| ഇളവ് / ഒഴിവ് / ഒഴിവാക്കുക | rukhsah | relaxation (as part 27) / exemption / exempt |
| ഞെരുക്കം / ഞെരുങ്ങി | 'usr | straitness / with straining |
| എളുപ്പം / സൗകര്യം / ലഘുത്വം | yusr | ease / convenience / lightness |
| പ്രയാസം / വിഷമം / ബുദ്ധിമുട്ട് | haraj | trouble / hardship / difficulty |
| വിട്ടുവീഴ്ച | samhah | accommodation |
| തെണ്ടം / പ്രായശ്ചിത്തം | fidyah | ransom (doubt) / atonement |
| സാധിപ്പുണ്ടാകുക / കഴിവുണ്ടാകുക | ataqa | become possible / come to have ability |
| നോറ്റു വീട്ടുക | qada' | fast to pay off |
| സാധു / പാവം | miskin | needy person / poor one |
| സ്വമേധയാ ചെയ്യുക | tatawwa'a | do voluntarily |
| മഹത്വകീർത്തനം / തക്ബീർ | takbir | glorification / takbir |
| സ്തോത്രകീർത്തനം / കീർത്തനം | tasbih | singing of praise / extolment |
| ഹാജറുണ്ടാകുക | shahida | be present |
| മൻസൂഖ് / നസ്ഖ് / ദുർബ്ബലപ്പെടുക | — | mansukh / naskh / become annulled (as part 28) |
| ദോഷം | — | ill (as part 26) |
| പുണ്യം / പുണ്യപ്പെട്ടത് / പുണ്യകാര്യം | birr | merit / meritorious / meritorious things (as part 27) |
| അനുഷ്ഠാനകർമങ്ങൾ / മതാനുഷ്ഠാനങ്ങൾ | — | acts of ritual observance / religious observances (open doubt 4) |
| അയവ് | — | laxity |
| ചെറിയ പെരുന്നാൾ | 'Id al-Fitr | the Lesser Festival |
| മുദ്ദ് / മർഹല / നാഴിക | mudd / marhalah | mudd / marhala / nazhika (doubt) |
| രിവായത്ത് | riwayah | riwayah |
