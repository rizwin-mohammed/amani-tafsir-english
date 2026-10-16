# Check: Al-Baqarah part 38 (verses 231–233)

Checked on 2026-10-16 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 384–394 (book pp. 555–565). Each page was rendered at 150 dpi and read once in full (this part has no footnotes of its own; the two footnotes on p. 555 belong to part 37). The full `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary, and `pdftotext -bbox` was used for the vowel marks and word joins of the Arabic on pp. 557, 559, 560, 562, 563, 564 and 565. The amanithafseer.com text was not used beyond the translator's notes on site-vs-book differences. Crops: the v. 233 word table on p. 561 (300 dpi) and the two مثل ذلك quotations on p. 564 (400 dpi); two crops in all.
- **Boundaries.** Part 37 ends on p. 555 with the San'ani quotation "… സന്ദർഭങ്ങളിലാകുന്നു.’"; the verse 231 panel follows directly on the same page, with part 37's footnotes (\*) and (\*\*) at the page foot. This part starts there. It ends on p. 565 with point (12), "… വീക്ഷിച്ചുകൊണ്ടിരിക്കുന്നുണ്ടെന്നും ഓർമിപ്പിക്കുന്നു.", directly above the verse 234 panel on the same page. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 231–233), `words.json` (96 entries: 231: 31; 232: 23; 233: 42), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` (panels pp. 555–556, 558, 560–561) and every `words.json` gloss (tables pp. 556, 558–559, 561–562) match the images in the printed order, apart from correction 1. ZWNJ only in ചെയ്‌വിൻ (v. 231 table, a misprint for ചെയ്യുവിൻ, kept), where the text layer has an explicit chandrakkala.
- `[p. N]` markers 556–560 and 562–565. P. 555 holds only the end of part 37 and the start of the 231 panel, and p. 561 only the end of the 233 panel and the word table, so neither has a marker. [p. 556], [p. 559] and [p. 562] stand at the start of commentaries below the tables. Page turns: [p. 557] "ta*[p. 557]*king back" (എടു/ക്കുന്ന); [p. 558] after "talaq" (ത്വലാക്വും / (വിവാഹവും); [p. 560] "another *[p. 560]* way" (മറ്റൊരു / വിധത്തിൽ); [p. 563] "two years of age *[p. 563]* are fulfilled" (വയസ്സ് / തികയും); [p. 564] "pos*[p. 564]*sible" (നിവൃ/ത്തിയില്ലാതെ); [p. 565] "is *[p. 565]* not allowed" (ചെയ്യുവാൻ / പാടില്ലെന്ന്). All are right.
- Groups: *[Verse 231]* | "### Section – 30" (വിഭാഗം - 30, printed on p. 558 above the 232 panel) | *[Verse 232]* | *[Verse 233]*. Right.

## Corrections made (before → after)

### Gloss dropped from the word table

1. v. 233 table, كَامِلَيۡنِ: the gloss is printed "(ര" at the end of one line and "ണ്ട്) പൂർണമായ" at the start of the next (image, crop and text layer agree), i.e. "(രണ്ട്) പൂർണമായ". ml "പൂർണമായ" → "(രണ്ട്) പൂർണമായ"; en "complete" → "(two) complete".

### Dropped small word

2. p. 558, "ഈ മൂന്ന് വിഷയവും നടക്കുന്നത്": "whether these three subjects take place" → "whether all these three subjects take place".

### Strengthened / changed meaning

3. p. 559, Ma'qal's report "… ആവശ്യം അല്ലാഹു അറിഞ്ഞു": "Allah came to know the need" → "Allah knew the need" (അറിഞ്ഞു is plain "knew"; "came to know" adds a sense of learning that the Malayalam does not state).

### Translator word inside the author's bracket

4. v. 233 (`verses.json`), "… ആഹാരവും, വസ്ത്രങ്ങളും (ബാധ്യത) ഉള്ളത്": the bracket holds only ബാധ്യത. "provision, and garments, (as liability) lie." → "provision, and garments, lie as (liability)."

### Renderings brought into line with earlier parts

5. അന്ത്യനാൾ: part 27 renders both അന്ത്യനാൾ and അന്ത്യദിനം "the Last Day" (noted there as synonyms). "the Day of the End" → "the Last Day" in the v. 232 table (وَٱلۡيَوۡمِ ٱلۡأٓخِرِ "and in the Last Day") and on p. 559 ("in Allah and in the Last Day that good counsel is given").
6. ദേഹം (nafs): the v. 233 table gloss "ഒരു ദേഹവും, ആത്മാവും" is word for word the gloss of part 08 (2:48) "any self, any soul", and parts 12, 13 and 18 also render ദേഹം (nafs) "self". Table "any body, any soul" → "any self, any soul"; v. 233 "No body will be charged" → "No self will be charged". (Part 36 has "with their bodies" for ദേഹങ്ങളുമായി in 2:228; part 13's check.md has "body" once where the sense is physical; both left.)
7. "നിങ്ങൾ പ്രവർത്തിക്കുന്നതിനെപ്പറ്റി": parts 12, 13, 16, 21 and 23 render this formula "about what you do". v. 233 "about what you work" → "about what you do", and the table بِمَا تَعۡمَلُونَ likewise. പ്രവർത്തിക്കുക stays "work" elsewhere in this part ("working wrong", v. 231), as in part 36.
8. അതിരുവിടുക: parts 26, 27 and 31 render അതിരുവിട്ട / അതിരുവിട്ടാൽ / അതിരുവിട്ടു "overstep the bounds". v. 231 table, لِّتَعۡتَدُواْ: "so that you leave the bound" → "so that you overstep the bounds". അതിര് വിട്ടുപോകുക (v. 231 panel, "go off the bound") and അതിരുകവിയുക (p. 557, "exceeds the bound") are different verbs and are left.

No may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി (none is printed), added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced footnotes, or added Arabic were found apart from the above.

## Points the caller asked about

- **(1) TN on v. 233.** The image prints "അവ cpsS" (Latin glyphs) where the text layer reads അവരുടെ; the sentence requires അവരുടെ and the bracket [മുലകൊടുക്കുന്നവരുടെ] explains it. The TN points out a printed fault and rests on the page itself; kept, with അവരുടെ in `ml`.
- **(2) DOUBT on الرضاعة** "മുല / കുടി": confirmed split at a line end on p. 561 (the same table prints "മുല കൊടുപ്പിക്കുവാൻ" spaced, the panel prints മുലകുടി joined). DOUBT kept.
- **(3) Arabic as printed**, from the bbox glyph boxes and marks:
  - وَلاتُمْسِكُوهُنَّضِرَارًا-الخ (p. 557): و|لا|ت joined; sukun on م, damma on ت, ك, ه; shadda with fatha on ن, which overlaps ض (joined); kasra on ض, fatha on ر, tanwin on the second ر; the hyphen glyph is missing from the text layer (3.4 pt gap before الخ). As in the file.
  - اَزْوَاجَهُنَّ (p. 559): fatha on the bare alif, sukun on ز, fatha on و and ج, damma on ه, shadda with fatha on ن. As in the file.
  - وَإِذَاطَلَّقْتُمْ-الخ (p. 559): kasra in إ, fatha on ذ, shadda with fatha on ل, sukun on ق, a second sukun over the missing glyphs of تم (on م). ا|ط 0.9 pt: kept joined, as the translator's crop decided (open doubt 4).
  - (وَاللَّهُيَعْلَمُوَأَنْتُمْلاتَعْلَمُونَ) (p. 560): every measurable join ≤ 0.6 pt (the glyph of ت in تم is missing). As in the file.
  - وَالْوَالِدَاتُيُرْضِعْنَأَوْلادَهُنَّ (p. 562): joins overlap or touch. وَعَلَى الْمَوْلُودِلَهُ-الخ (p. 563): the glyphs of لى and له are missing; the image shows a space after على. بِالْمَعْرُوفِ (p. 563): as in the file.
  - وَعَلَىالْوَارِثِمِثْلُذَلِكَ (p. 564): ث|م 1.1 pt, ل|ذ touching; the second مِثْلُذَلِكَ has ل|ذ 1.2 pt. The 400 dpi crop shows both phrases set like single words, no dagger alif on ذ. Kept joined (open doubt 4). الوَارث (fatha on و only) and العصبة (bare): as in the file.
  - وَإِنتَعَاسَرْتُمْفَسَتُرْضِعُ لَهُ أُخْرَى (p. 565): no mark over ن, ن|ت 0.5 pt (joined); no mark over ى; damma on أ, sukun on خ, fatha on ر; all other marks as in the file. The glyphs of تم and لَهُ are missing, so the joins م|ف and the spaces before له and أخرى rest on the translator's crop; kept.
- **(4) Misprints kept without TN**, all confirmed on the images: ചെയ്‌വിൻ (v. 231 table), വിവാഹലോചന (p. 559, beside വിവാഹാലോചന), വിശ്വസമില്ലാത്ത (p. 559), അതിങ്ങനെയാണ്ഃ (p. 559, "It is like this:"), അല്ലാഹുവിനെത്തന്നെയാണ! (p. 559, "It is by Allah indeed!", as part 36), "ജീവിതമാർഗം. ജീവിതരീതി," (p. 563, mirrored "means of living. way of living,").
- **(5) Markers, honorifics, table, heading.** No [p. 561] (see above). ﷺ is printed twice, both on p. 557 (നബി ﷺ മുഖാന്തരമോ; നബിﷺ ഇപ്രകാരം); the English has exactly 2. (r) is printed 5 times: Bukhari, Ma'qal ibn Yasar, Ma'qal twice (p. 559), Sayyid Rashid Rida (p. 564); the English has the same 5. 96 word-table entries. "### Section – 30" is right.
- **(6) Names and sources** as printed: Ma'qal ibn Yasar (r) (മഅ്ക്വലുബ്നുയസാർ), Sayyid Rashid Rida (r) (സയ്യിദ് റശീദുരിദ്വാ), ‘Tafsirul Manar’ (‘തഫ്സീറുൽമനാറി’ൽ), Su: Talaq 6 (സൂ:ത്വലാക്വ് 6), (Da; Ti; Ja.) (ദാ; തി; ജ.), (Bu; Ti; Ja; Da.) (ബു; തി; ജ; ദാ.). Right.
- **(7) The hadith "കാര്യവും കാര്യം തന്നെ തമാശയും കാര്യംതന്നെ"** (p. 557): here കാര്യം is the opposite of തമാശ "jest", and the author's own explanation (p. 558) has "കാര്യമായിട്ടായാലും, തമാശയായിട്ടായാലും"; "matter" would make no sense. "earnest too is indeed earnest, jest too is indeed earnest" and "in earnest, or in jest" are right; kept.
- **(8) Terms**, checked by grep against earlier word tables and check.md tables:
  - ദ്രോഹം / ദ്രോഹിക്കപ്പെടുക "injury / be injured", kept apart from ഉപദ്രവം "harm" (part 32's table): new; consistent.
  - അതിര് വിട്ടുപോകുക "go off the bound", അതിരുവിടുക "overstep the bounds" (correction 8), അതിരുകവിയുക "exceed the bound" (part 02 has അതിരുകവിയൽ "transgression of bounds" in a table; left).
  - മുടക്കിയിടുക "hinder": as part 32 (മുടക്കം ചെയ്യപ്പെടുന്ന "hindered").
  - അവധി "term", കാലാവധി "time-limit": new; consistent.
  - അന്ത്യനാൾ "the Last Day" (correction 5); അന്ത്യദിനം "the Last Day" (parts 10, 27, 36).
  - സംശുദ്ധം / വൃത്തി / വെടിപ്പ് "thoroughly pure / clean / tidy": new; consistent.
  - തൃപ്തിപ്പെടുക "be pleased" (as parts 18, 23); പരസ്പര തൃപ്തി "mutual pleasure".
  - കൂടിയാലോചന "consultation", ആലോചന "deliberation", ആലോചിക്കുക "deliberate"; സമ്മതം "consent" / അനുമതി "permission" (part 03 has ഉത്തരവ് (അനുമതി) "order (permission)").
  - മുലകുടി / മുലകൊടുക്കുക / മുലകുടിപ്പിക്കുക / പിരിക്കുക "suckling / give suck / have suckled / part": new; consistent.
  - സന്താനം "offspring" (as the earlier term table), കുട്ടി "child", ശിശു "infant", കുഞ്ഞുങ്ങൾ "little ones".
  - മാതാവ് "mother"; അമ്മമാർ "mums" (p. 562): see open doubt 2.
  - ആഹാരം "provision" (as parts 10, 20; parts 03–04 have "food"), ഭക്ഷണം "food", ഉപജീവനം "livelihood" (as part 20), വസ്ത്രം "garment".
  - ശാസിക്കപ്പെടുക "be charged": new.
  - ദേഹം "self" (correction 6).
  - അനന്തരാവകാശി / അവകാശി "inheritor / heir"; കൈകാര്യകർത്താക്കൾ "managers of the affairs", കൈകാര്യക്കാർ (വലിയ്യുകൾ) "managers (walis)", പക്ഷക്കാർ "partisans", ഭാഗക്കാർ "those on the … side": new; consistent.
  - പ്രവർത്തിക്കുക "work" / ചെയ്യുക "do", but "what you do" for the formula നിങ്ങൾ പ്രവർത്തിക്കുന്നതിനെപ്പറ്റി (correction 7).
  - വേതനം "pay", കൂലി "wage", നിശ്ചിത "set", നിർണയിക്കുക "fix", നിശ്ചയിക്കുക "determine"; വക "wherewithal"; ഞെരുക്കം "straitness" (as part 29); കൃത്രിമം "artifice" (കൃത്രിമാഹാരങ്ങൾ "artificial provisions", കൃത്രിമ രേഖകൾ "artificial documents"); പരിഷ്കാരം "refinement"; ഭിന്നിപ്പ് "division" (beside അഭിപ്രായ വ്യത്യാസം "variance of opinion", as part 36); കർമശാസ്ത്രം "jurisprudence"; ഉണർത്തുക "alert"; ഇഹം / പരം "this world / the next"; പരിഗണിക്കുക "regard"; ആഭിമുഖ്യം / അഭിമുഖീകരിക്കുക "address"; സൂക്ഷിക്കുക "guard against" / "guard".
  - ദു:സ്സമ്പ്രദായങ്ങൾ "evil practices" (p. 557): part 32 has ദുഃസ്സമ്പ്രദായം "evil usage", but parts 36–37 render സമ്പ്രദായം "practice", as this part does (p. 557, "the practice that … Muslims keep on resorting to"). Left; part 36's open doubt 3 covers it.

## Checked and left as they are

- p. 557 "(Do not hold them back so as to do injury such as exceeds the bound)" for "(അതിരുകവിയുമാറ് ദ്രോഹം ചെയ്യാനായിട്ട് അവരെ പിടിച്ചുവെക്കരുത്)": the Malayalam names no subject for അതിരുകവിയുക; the English adds none. Left.
- p. 556 "it is on two matters that the subject is leaning" for "രണ്ട് കാര്യത്തിലാണ് ഊന്നി നിൽക്കുന്നത്": literal; left.
- v. 232 table لَا تَعۡلَمُونَ "you will not know" for അറിയുകയില്ല: part 24 also has "will not know"; parts 12 and 17 have "do not know". The panel's അറിഞ്ഞുകൂടാ is "you do not know", so the table keeps "will not know" to keep the two apart. Left.
- Subjectless verbs whose subject is Allah ("In some past verses He stated …", "He first alerts", "He reminds") are rendered with "He", as in earlier parts.
- p. 563 "Approaching the courts with artificial documents – both those on the mother's side …, and … those on the father's side … – is, surely, the habit of many": the Malayalam subject list is moved around its verbal noun as English needs; nothing added or dropped.
- `part.json` verses "231-233", pages "555-565", PDF pages "384-394": correct.

## Open doubts for the reviewer

1. **TN on "അവ cpsS"** (v. 233): kept as a TN; the reviewer may prefer it as a DOUBT.
2. **അമ്മമാർ "mums"** (p. 562), beside മാതാക്കൾ "mothers": the author switches to the everyday word, and "mums" keeps the two apart, but it is more colloquial in English than അമ്മമാർ is in Malayalam. Please choose ("mums", "mothers", or another word).
3. **മുല / കുടി** (v. 233 table, الرضاعة): split at a line end; DOUBT in the text.
4. **Arabic joins of 0.9–1.2 pt**: ا|ط in وَإِذَاطَلَّقْتُمْ (p. 559), ث|م and the second ل|ذ in the مثل ذلك phrases (p. 564); all kept joined from crops.
5. **ദേഹം "self"** here (as parts 08, 12, 13, 18) against "bodies" in part 36 (2:228, ദേഹങ്ങളുമായി).
6. **"what you do"** for പ്രവർത്തിക്കുന്നത് in the closing formula (parts 12–23) while പ്രവർത്തിക്കുക is otherwise "work" (part 36 and this part).
7. **Earlier open doubts still apply** (not in this part): see parts 13–37.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ദ്രോഹം / ദ്രോഹിക്കപ്പെടുക / ഉപദ്രവം | dirar / tudarr | injury / be injured / harm (as part 32) |
| അതിര് വിട്ടുപോകുക / അതിരുവിടുക / അതിരുകവിയുക | i'tida' | go off the bound / overstep the bounds (as parts 26, 27, 31; correction 8) / exceed the bound |
| മുടക്കിയിടുക | 'adl | hinder (as part 32) |
| അവധി / കാലാവധി | ajal | term / time-limit |
| അന്ത്യനാൾ / അന്ത്യദിനം | al-yawm al-akhir | the Last Day (as part 27; correction 5) |
| സംശുദ്ധം / വൃത്തി / വെടിപ്പ് | azka / athar | thoroughly pure / clean / tidy |
| തൃപ്തിപ്പെടുക / പരസ്പര തൃപ്തി | taradi | be pleased (as parts 18, 23) / mutual pleasure |
| കൂടിയാലോചന / ആലോചന / ആലോചിക്കുക | tashawur | consultation / deliberation / deliberate |
| സമ്മതം / അനുമതി | — | consent / permission |
| മുലകുടി / മുലകൊടുക്കുക / മുലകുടിപ്പിക്കുക / പിരിക്കുക | rada'ah / fisal | suckling / give suck / have suckled / part |
| സന്താനം / കുട്ടി / ശിശു / കുഞ്ഞുങ്ങൾ | awlad / walad | offspring (as earlier parts) / child / infant / little ones |
| മാതാവ് / അമ്മമാർ | walidah | mother / mums (open doubt 2) |
| ആഹാരം / ഭക്ഷണം / ഉപജീവനം / വസ്ത്രം | rizq / kiswah | provision (as parts 10, 20) / food / livelihood (as part 20) / garment |
| ശാസിക്കപ്പെടുക | tukallafu | be charged |
| ദേഹം | nafs | self (as parts 08–18; correction 6; open doubt 5) |
| അനന്തരാവകാശി / അവകാശി | warith | inheritor / heir |
| കൈകാര്യകർത്താക്കൾ / കൈകാര്യക്കാർ (വലിയ്യുകൾ) / പക്ഷക്കാർ / ഭാഗക്കാർ | — | managers of the affairs / managers (walis) / partisans / those on the … side |
| പ്രവർത്തിക്കുക / ചെയ്യുക | — | work / do; "what you do" in the closing formula (correction 7; open doubt 6) |
| വേതനം / കൂലി / നിശ്ചിത / നിർണയിക്കുക / നിശ്ചയിക്കുക | — | pay / wage / set / fix / determine |
| വക | — | wherewithal |
| ഞെരുക്കം | ta'asur | straitness (as part 29) |
| കൃത്രിമം | — | artifice (artificial, as an adjective) |
| പരിഷ്കാരം | — | refinement |
| ഭിന്നിപ്പ് / അഭിപ്രായ വ്യത്യാസം | — | division / variance of opinion (as part 36) |
| കർമശാസ്ത്രം | fiqh | jurisprudence |
| ഉണർത്തുക | — | alert |
| ഇഹം / പരം | — | this world / the next |
| പരിഗണിക്കുക | — | regard |
| ആഭിമുഖ്യം / അഭിമുഖീകരിക്കുക | — | address |
| സൂക്ഷിക്കുക | ittaqa | guard against / guard |
| ദു:സ്സമ്പ്രദായം / സമ്പ്രദായം | — | evil practice / practice (as parts 36–37; part 32 has "evil usage") |
