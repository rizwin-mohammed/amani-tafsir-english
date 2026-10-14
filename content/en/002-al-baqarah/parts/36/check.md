# Check: Al-Baqarah part 36 (verses 224–228)

Checked on 2026-10-14 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 365–374 (book pp. 536–545). Each page was rendered at 150 dpi and read once in full, including the footnote on p. 543. The full (untruncated) `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary, and `pdftotext -bbox` was used for the vowel marks and word joins of every Arabic item on pp. 538, 540–545. The amanithafseer.com text was not used beyond the translator's notes on site-vs-book differences. One crop (300 dpi) of the 2:228 quotation on p. 542 (an earlier crop missed the line; two in all). The text layers of PDF pp. 375–376 were read (no image) for the end boundary.
- **Boundaries.** Part 35 ends on p. 536 with "… സത്യവിരുദ്ധമാണെന്ന് മനസ്സിലായല്ലോ.", and the verse 224 panel follows directly on the same page; this part starts there. This part ends on p. 545 with "… അല്ലാഹുവിൽ ശരണം!", directly above the heading "വിഭാഗം - 29" and the verse 229 panel. The text layers show the verse 230 panel on p. 375 (PDF), followed by one word table that begins with 229 on p. 375 and continues with 230 on p. 376, so 229–230 form one group and stopping before 229 is right. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 224–228), `words.json` (64 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images (panels pp. 536, 537, 538, 539, 540–541; word tables pp. 537, 539, 541), in the printed order (v. 228 table order checked on the image). ZWNJ only in പൊയ്‌വാക്ക് (v. 225 table), where the text layer has an explicit chandrakkala.
- `[p. N]` markers 537–545. P. 536 holds only the end of part 35 and the 224 panel, so it has none. [p. 537], [p. 539] and [p. 541] stand at the start of commentaries whose panels and tables fill the tops of those pages. Page turns: [p. 538] "i*[p. 538]*s" (എന്താ/ണെന്ന്); [p. 540] "kn*[p. 540]*own" (അറിയാ/വുന്നതുപോലെ); [p. 542] "u*[p. 542]*sed" (ഉപ/യോഗപ്പെടാമെന്നതിൽ); [p. 543] "disposi*[p. 543]*tion" (സ്വഭാ/വമാണല്ലോ); [p. 544] "a few *[p. 544]* examples" (ഏതാനും ചില / ഉദാഹരണങ്ങളും); [p. 545] before "the control" (പുരുഷൻമാരായതും / നിമിത്തം; as near as the English allows). All are right.
- Groups: *[Verses 224–225]* | *[Verses 226–227]* | *[Verse 228]*. No heading is printed inside this part. The footnote on p. 543 (معروف, verse 178) has its (\*) after "മതിയാക്കിയിരിക്കുന്നു."; its paragraph ends on p. 544 with "… ലഭിക്കുന്നതാണ്:-", and the note follows that paragraph. Right.

## Corrections made (before → after)

### The same English for two Malayalam words

1. v. 225 (`verses.json` en): the commentary on p. 537 renders മനഃപൂർവ്വമല്ലാതെ "not deliberately" and ഉദ്ദേശ്യപൂർവ്വം / ഉദ്ദേശ്യപൂർവ്വമല്ലാതെ "intentionally / not intentionally", but the panel's (മന:പൂർവ്വമല്ലാത്ത) and (മന:പൂർവ്വം) had "unintentional / intentionally": "On account of the (unintentional) vain word … what your hearts have (intentionally) worked and laid by" → "On account of the (non-deliberate) vain word … what your hearts have (deliberately) worked and laid by".

### Word misplaced (meaning)

2. p. 537, "ചില വ്യക്തികളുടെയും, ചില ഭാഷക്കാരുടെയും സംസാരങ്ങളിൽ": ചില qualifies the languages' speakers as a group ("speakers of some languages"), not some of the speakers of languages: "In the speech of both some individuals, and some speakers of languages" → "In the speech of both some individuals, and speakers of some languages".

No may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced footnotes, words added inside the author's brackets, or translator words in round brackets were found apart from the above.

## Points the caller asked about

- **(1) TN on the v. 224 panel.** The image prints ആകരുത് (spaced "ആക രുത്" by justification); the table on p. 537 prints ആക്കരുത്. With the accusative അല്ലാഹുവിനെ only ആക്കരുത് construes, and the commentary's own paraphrase (p. 538) has വിലങ്ങാക്കരുത്. The TN points out a printed difference and rests on the book itself; kept.
- **(2) DOUBTs.**
  - "(ദ.)" (p. 538): clearly printed; not in the key. DOUBT kept.
  - സഹനശീലൻ "the Forbearing": earlier parts render സഹനം "forbearance" (parts 24–27, kept apart from ക്ഷമ "patience"), so "the Forbearing" agrees with them. The DOUBT is kept because this is the first rendering of this name of Allah; the reviewer may settle it.
  - അവർ at the start of the sentence on p. 542: clearly printed. DOUBT kept.
- **(3) Misprints kept without TN**, all confirmed on the images: (മാഇദ: 92) (p. 538); ന്യായധിപ (p. 540, beside ന്യായാധിപൻ); ഗർഭായങ്ങളിൽ (p. 542, "wombs"); വിരുപ്പിൽ (p. 544, "bedding"); "പറയുന്നു.:" (p. 544, mirrored "says.:"); ‘അല്ലാഹുവിനെത്തന്നെയാണ ഇല്ല’ / ‘… അതെ’ without chandrakkala (p. 538); the unclosed ‘ of "‘നാലുമാസത്തെ കാത്തിരിപ്പുണ്ട്" (p. 539), of "‘അവർ അല്ലാഹുവിലും …" (p. 542) and of Ibn 'Abbas's saying (p. 544); item 5's closing ’ with no opening (p. 544); the outer "(കൂടുതൽ വിവരം …" never closed (p. 545). All are mirrored in the English, as parts 33–35 did.
- **(4)** ‘ക്വർഉ്’ (p. 541): the image prints the a-vowel form, as the sentence itself requires (അകാരം … നൽകി); "‘qar'’" is right. "(ന,ബ- ശുഅബുൽഈമാനിൽ)" (p. 544) is as printed: "(Na,Ba- in Shu'abul-Iman)". "-الخ" after the 228 quotation (p. 542) is printed; the bbox puts the hyphen 1.4 pt after ن and touching الخ, so "يَكْتُمْنَ -الخ" is right.
- **(5) Arabic as printed**, confirmed from the bbox glyph boxes and marks:
  - كُفَارَة (p. 538): damma on ك, fatha on ف and ر, no shadda. كفارَة (p. 540): fatha on ر only. لغو (p. 538): bare.
  - وَلاتَجْعَلُوا اللَّهَعُرْضَةً (p. 538): و|لا|ت overlap (joined); 1.4 pt space before الله; no fatha on لا; sukun on ج and ر, damma on ل and ع, shadda with fatha on الله, fatha on ه, tanwin on ة. The glyphs of عر are missing from the text layer, so the الله|عرضة join rests on the translator's 400 dpi crop; kept.
  - يُؤْلُونَ, اِيلَاء (p. 539): as the translator recorded.
  - قُرُوءٍ, قُرْء, فَتح (p. 541): as transcribed.
  - عِدة (p. 542): kasra on ع only.
  - وَلا يَحِلُّلَهُنَّأَنْيَكْتُمْنَ -الخ (p. 542): 1.0 pt between لا and ي (space); 0.9 pt between ن of لهن and أ of أن, which the 300 dpi crop shows as the ordinary gap after final ن with no word space (kept joined); the rest overlaps or ≤ 0.4 pt. No fatha on لا; marks as in the file.
  - إِنْكُنَّ يُؤْمِنَّبِاللَّهِ وَالْيَوْمِ الآخِرِ (p. 542): إن|كن 0.3 pt (joined), كن|يؤمن 0.8 pt (space), يؤمن|بالله overlap, بالله|و 1.3 pt, و|ال 0.4 pt, اليوم|الآخر 1.5 pt; no sukun on ل of الآخر. `npm run check` lists it as "close but not exact", as expected.
  - وَلَهُنَّمِثْلُالَّذِيعَلَيْهِنَّ (pp. 543 and 544): all joined; every mark as in the file. بِالْمَعْرُوفِ (p. 543) and مَعْرُوف (footnote, no kasra on ف): as in the file.
  - وَلِلرِّجَالِعَلَيْهِنَّ دَرَجَةٌ (p. 544): joined except ن|د 1.2 pt; marks as in the file.
  - إن شاء الله and وَاللَّهُعَزِيزٌحَكِيمٌ (p. 545): bare; joined (largest gap 0.7 pt).
- **(6) Footnote, table, honorifics.** Footnote placement: see "What was compared". 64 word-table entries (224: 10; 225: 11; 226: 10; 227: 4; 228: 29). ﷺ is printed 7 times: p. 538 (നബി), p. 540 (നബിﷺയും), p. 544 five times (items 1, 3, 4, 5, 6); none at നബി വാക്യങ്ങൾ (p. 538) or in item 2. The English has exactly 7. (r) is printed 9 times: 'A'ishah, Ibn Abi Hatim (p. 538); 'Umar–'Uthman–'Ali (one), 'Umar, Imam Malik (p. 540); Raghib, Ibn Jarir (p. 541); Ibn 'Abbas, Waki' (p. 544). The English has the same 9.
- **(7) Terms**, checked by grep against earlier word tables and check.md tables:
  - സത്യം "oath", സത്യം ചെയ്യുക "swear", സത്യവാക്യങ്ങൾ "sentences of oath", ശപഥം "solemn oath", നേർച്ച "vow": new; consistent throughout.
  - പ്രായശ്ചിത്തം "atonement": as parts 08, 18, 29 (tables).
  - പിടികൂടുക "seize": as parts 09 and 33.
  - വ്യർത്ഥവാക്ക് "vain word", അനാവശ്യം "what is needless", പൊയ്‌വാക്ക് "false word": new.
  - വിലങ്ങ് / തടസ്സം / നാട്ടക്കുറി "obstacle / obstruction / target": new.
  - പുണ്യം "merit" (as earlier parts' term tables); പ്രവർത്തിക്കുക "work" / ചെയ്യുക "do".
  - പേരിൽ / നാമത്തിൽ "in the name / in the Name": kept apart.
  - ബാധ്യത "liability", കടമ "duty": as part 28's table (കടമ / മുറ / ബാധ്യത "duty / due / liability"). കടപ്പാട് "obligation": new.
  - മര്യാദ "propriety", വഴക്കം "usage", സദാചാരം "good custom": as part 27 (മര്യാദ(വഴക്കം) "propriety (usage)", സദാചാര പ്രകാരം "according to good custom"). ആചാരമര്യാദ "customary propriety": new.
  - സമ്പ്രദായം "practice" (pp. 538, 545): parts 32 and 35 used "usage", but part 27 used "practice" in the passage where വഴക്കം is "usage", and this part, like part 27, needs "usage" for വഴക്കം (v. 228 table). Kept "practice" so the two words stay apart; open doubt 3.
  - പതിവ് "habit" (p. 539): part 27 has "the usual way"; here "a habit of making a solemn oath existed among the Arabs" reads naturally and no other word in this part takes "habit". Left; open doubt 4.
  - വരൻമാർ "bridegrooms" / ഭർത്താക്കൾ "husbands": kept apart, as printed (panel against table).
  - പദവി / പടി "rank / step"; സ്വഭാവം "disposition"; അഴക് "adornment"; ഗുണകരം "beneficial" (as part 34); ഓർത്തിരിക്കുക "remain mindful" / ഓർക്കുക "bear in mind"; അഭിപ്രായവ്യത്യാസം "variance of opinion" (kept apart from part 34's ഭിന്നാഭിപ്രായം "difference of opinion" and അഭിപ്രായ ഭിന്നത "divergence of opinion"); ശ്രേഷ്ഠത "superiority"; രക്ഷാധികാരം "guardianship" (രക്ഷാധികാരി "guardian", parts 16, 18); നിയന്ത്രണാധികാരം "authority of control" / നിയന്ത്രണം "control".
  - യാതൊരുകൂട്ടർ "the group who" (v. 226 table): the table formula of parts 12–26.
  - യുക്തിമാൻ "the Sagacious": as parts 20 and 35.
  - മനഃപൂർവ്വം "deliberately" / ഉദ്ദേശ്യപൂർവ്വം "intentionally" (correction 1).

## Checked and left as they are

- p. 542 "It is to the opinion ‘the period of purity’ that preference is seen here.": the quotation marks are not printed (ശുദ്ധികാലം എന്ന അഭിപ്രായത്തിനാണ്); they only mark the cited opinion. Left, as parts 30–33 left such marks for the reviewer.
- p. 543 "Continuing, Allah makes known: Like the liability … ( وَلَهُنَّ… )." The closing "എന്ന്." after the Arabic is the quotation marker and needs no word in English. Left.
- p. 539 "There is a waiting of four months" (opening ‘ never closed) and the 'Umar–'Uthman–'Ali (r) single honorific: as printed.
- p. 539 നിയമപരമായ നടപടികൾ "legal proceedings" against നിയമനടപടി "legal procedure" (p. 539, p. 543, as part 33): different Malayalam, different English. Left.
- `part.json` verses "224-228", pages "536-545", PDF pages "365-374": correct.

## Open doubts for the reviewer

1. **"(ദ.)"** (p. 538): source abbreviation not in the key; DOUBT in the text.
2. **സഹനശീലൻ "the Forbearing"** (v. 225 panel and table): first rendering of this name; DOUBT in the text.
3. **സമ്പ്രദായം "practice"** here and in part 27, "usage" in parts 32 and 35; this part needs "usage" for വഴക്കം.
4. **പതിവ് "habit"** here against "the usual way" in part 27.
5. **അവർ** starting the sentence on p. 542; DOUBT in the text.
6. **TN on ആകരുത് / ആക്കരുത്** (v. 224 panel): kept; the reviewer may prefer it as a DOUBT.
7. **Earlier open doubts still apply** (not in this part): see parts 13–35.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| സത്യം / സത്യം ചെയ്യുക / സത്യവാക്യങ്ങൾ | yamin / aiman | oath / swear / sentences of oath |
| ശപഥം / നേർച്ച | ila' / nadhr | solemn oath / vow |
| പ്രായശ്ചിത്തം | kaffarah | atonement (as parts 08, 18, 29) |
| പിടികൂടുക | yu'akhidhu | seize (as parts 09, 33) |
| വ്യർത്ഥവാക്ക് / അനാവശ്യം / പൊയ്‌വാക്ക് | laghw | vain word / what is needless / false word |
| വിലങ്ങ് / തടസ്സം / നാട്ടക്കുറി | 'urdah | obstacle / obstruction / target |
| പുണ്യം | birr | merit |
| പ്രവർത്തിക്കുക / ചെയ്യുക | — | work / do |
| പേരിൽ / നാമത്തിൽ | — | in the name / in the Name |
| മനഃപൂർവ്വം / ഉദ്ദേശ്യപൂർവ്വം | — | deliberately / intentionally (correction 1) |
| ബാധ്യത / കടമ / കടപ്പാട് | — | liability / duty (as part 28) / obligation |
| മര്യാദ / ആചാരമര്യാദ / വഴക്കം / സദാചാരം | ma'ruf | propriety / customary propriety / usage (as part 27) / good custom (as part 27) |
| സമ്പ്രദായം | — | practice (as part 27; open doubt 3) |
| പതിവ് | — | habit (open doubt 4) |
| വരൻമാർ / ഭർത്താക്കൾ | bu'ulah | bridegrooms / husbands |
| പദവി / പടി | darajah | rank / step |
| സ്വഭാവം | — | disposition |
| അഴക് | — | adornment |
| ഗുണകരം | — | beneficial (as part 34) |
| ഓർത്തിരിക്കുക / ഓർക്കുക | — | remain mindful / bear in mind |
| അഭിപ്രായവ്യത്യാസം | — | variance of opinion |
| ശ്രേഷ്ഠത | — | superiority |
| രക്ഷാധികാരം / നിയന്ത്രണം / നിയന്ത്രണാധികാരം | qawwamun | guardianship / control / authority of control |
| സഹനശീലൻ | halim | the Forbearing (open doubt 2) |
| ഈലാഉ് / ത്വലാക്വ് / ഇദ്ദഃ / ക്വുർഉ് / ക്വർഉ് | ila' / talaq / 'iddah / qur' / qar' | ila' / talaq / 'iddah / qur' / qar' |
| ആർത്തവശുദ്ധി / ശുദ്ധികാലം / ആർത്തവം / ആർത്തവകാലം | — | menstrual purity / period of purity / menstruation / menstrual period (as part 35) |
| സംയോഗം / സംസർഗം | — | union / intercourse |
