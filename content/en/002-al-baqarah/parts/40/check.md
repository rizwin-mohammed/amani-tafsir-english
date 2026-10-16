# Check: Al-Baqarah part 40 (verses 240–245)

Checked on 2026-10-16 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 404–413 (book pp. 575–584). Each page was rendered at 150 dpi and read once in full, including the footnotes on pp. 576 and 578–580. The full `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary, and `pdftotext -bbox` was used for the vowel marks and word joins of the Arabic on pp. 577, 578, 580, 582 and 583, and for the word break in the letter-spaced v. 245 panel line. The amanithafseer.com text was not used beyond the translator's notes on site-vs-book differences. Crops: the two اللّه اعلم graphics (p. 577 at 300 dpi; p. 581 at 300 dpi and 600 dpi); two further crops missed their line, five in all.
- **Boundaries.** Part 39 ends on p. 575 with "… ശരിയായ രൂപത്തിൽ തന്നെ അത് നിർവഹിക്കുകയും വേണം."; the verse 240 panel follows directly on the same page, and this part starts there. It ends on p. 584 with "… എന്നൊക്കെയാണ് അവസാനത്തെ വാക്യങ്ങളിൽ ഓർമിപ്പിക്കുന്നത്.", directly above the verse 246 panel on the same page (no heading between). Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 240–245), `words.json` (67 entries: 240: 18; 241: 5; 242: 6; 243: 18; 244: 6; 245: 14), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` (panels pp. 575, 577, 580–581, 582, 583) and every `words.json` gloss (tables pp. 575–576, 577, 580, 581, 582, 583) match the images in the printed order, apart from correction 3. The order of the v. 245 table's fourth line (وَاللَّهُ, يَقْبِضُ, وَيَبْسُطُ) was confirmed from the bbox positions. No ZWNJ is printed in these items.
- `[p. N]` markers 576–584. P. 575 holds only the end of part 39, the 240 panel and the start of its table, so it has no marker. [p. 576] and [p. 581] stand at the start of commentaries below the tables. Page turns: [p. 577] "seven months and *[p. 577]* twenty days" (ഏഴുമാസവും / ഇരുപത്); [p. 578] "determined*[p. 578]*, or" (നിശ്ചയിക്കപ്പെട്ടവരെ/ന്നോ); [p. 579] "known to *[p. 579]* everyone" inside the note (p. 579 is all footnote); [p. 580] inside the note before "<<<" (the footnote's last lines stand at the foot of p. 580, whose main text begins with the 242 panel; everything after the marker in the English is on p. 580, so no second marker is needed); [p. 582] "im*[p. 582]*port" (താൽപ/ര്യവും); [p. 583] "taking part in war *[p. 583]* is" (സമീപിക്കുകയില്ലെന്നു/ള്ളതിന്); [p. 584] "liveli*[p. 584]*hood" (ഉപജീവനമാർഗ/വുമൊക്കെ). All are right.
- Groups: *[Verse 240]* | *[Verse 241]* | *[Verse 242]* | "### Section – 32" (വിഭാഗം - 32, printed on p. 580 below the 242 commentary) with its introductory paragraph | *[Verse 243]* | *[Verse 244]* | *[Verse 245]*, each with its own panel and word table. Right.
- Footnotes: (\*) on naskh (p. 576) has its marker after "… ചെയ്തിരിക്കുന്നു." in paragraph (1) and follows that paragraph; the long italic note (pp. 578–580) has its marker at the end of paragraph (3) ("… വേറെയും അഭിപ്രായമുണ്ട്.(\*)") and follows it, with the printed ">>>>" (end of p. 579) and "<<<" (p. 580) kept escaped. Right.

## Corrections made (before → after)

### Pronoun added

1. p. 578, "ഇദ്ദഃയിലിരിക്കുമ്പോൾ നൽകപ്പെടേണ്ടുന്ന ചിലവുകളാണ്" (subjectless): "the expenses that need to be given while she is in 'iddah.(*)" → "… while in 'iddah.(*)".

### Rendering brought into line

2. വാസസ്ഥലം: part 13 (2:84–85, table and term list) renders it "dwelling-place". p. 581 "ran away leaving their dwelling place." → "… their dwelling-place."

### Malayalam in `verses.json`

3. v. 245 panel: "അവങ്കലേക്കു തന്നെ" → "അവങ്കലേക്കുതന്നെ". The line is letter-spaced, so the image alone does not settle it; but in the bbox the gap between ക്ക and ു splits the line into separate tokens while ു and ത stand in one token ("ുത", 262.4–285.5 pt), so there is no word space there. The table on the same page prints "അവങ്കലേക്കുതന്നെ" joined. The English is unchanged.

No dropped തന്നെ/-ഉം/എന്നോണം or list items, may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി (none is printed), added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced footnotes, translator words in round brackets, or added Arabic were found apart from the above.

## Points the caller asked about

- **(1) DOUBTs.**
  - Line-end splits "പുറത്തു / പോയെങ്കിൽ" (240 panel) and "പുറത്തു / പോയി" (243 panel): both confirmed at line ends. The book prints "പുറത്തുപോയി" joined mid-line on p. 577 and in the 243 table, but "പുറത്ത് പോയെങ്കിൽ" spaced in the 240 table, so the doubt is real; both DOUBTs kept (as parts 38–39 kept such splits). "അറിഞ്ഞു / കൊള്ളുകയും" (244 panel) is also split at a line end; it is written joined without a DOUBT, as the book prints അറിഞ്ഞുകൊള്ളുക joined in parts 31, 33, 38 and 39. Left.
  - "അവർ ചെയ്ത / (ചെയ്യുന്ന)തിൽ" (240 table): split at a line end; DOUBT kept.
  - ലക്ഷ്യം "evidence" / "aim" (242 panel and table): the standing doubt of parts 01–35; kept. The commentary uses ലക്ഷ്യം for "aim" twice ("ഉദ്ദേശ്യലക്ഷ്യങ്ങളും" "intentions and aims", p. 580; "ലക്ഷ്യം നേടി" "gained the aim", p. 579), which the reviewer may weigh.
  - കടമയായി (245 panel), rendered "loan" with the DOUBT: clearly printed. Kept as it is; besides the misprint reading the DOUBT already names, കടമ is also an older Malayalam word for a debt, so "loan" need not be a correction of the print. The reviewer decides between "loan" and "duty".
  - "-പ്രസാ:" (end of the long note) rendered "-Publishers" with the DOUBT: kept.
  - ദേഹംകൊണ്ട് "with the body" (p. 583): the sense is the physical person set against spending wealth, so "body" is the natural English; parts 38–39 use "self" where ദേഹം stands for nafs in the verses. DOUBT kept for the reviewer (see part 38, open doubt 5).
- **(2) TN on p. 579.** The image prints "Maintenance" in Latin italic letters, followed by "അഥവാ ജീവനാംശം". "Maintenance or maintenance" with a TN explaining that the first word is printed in English is right: it points out what is printed and adds no opinion. Kept.
- **(3) Footnotes**: see "What was compared". No [p. 575] marker: right.
- **(4) Printed slips kept without TN**, all confirmed on the images: അർത്ഥ (p. 579, for അർത്ഥം), വിരുപ്പിൽ (p. 583), ഒന്നാമത്തെത് (p. 580), ചെലവ് (p. 579) beside ചിലവ് (elsewhere), 'മതാഅ്' / 'മത്താഅ്' (kept as mata' / matta'), യുസുഫ് / യൂസുഫ് (both "Yusuf"), and the Malayalam bracket "(നിങ്ങൾ എവിടെയായിരുന്നാലും …" on p. 582, never closed before "(4:78.)". Mirrored correctly.
- **(5) Arabic as printed**, from bbox glyph boxes and marks, and crops:
  - اللّه اعلم (p. 577, after "തോന്നുന്നത്"): a graphic, not in the text layer; the crop shows the shadda on the lam, اعلم without hamza, and a full stop after it. As in the file.
  - اللّه اعلم (p. 581, after "ആയിരിക്കാം."): the same graphic; the 600 dpi crop shows the shadda; no stop follows. As in the file.
  - فَإِنْخَرَجْنَفَلاجُنَاحَ - الخ (p. 577): marks as in the file; ن|خ 0.8 pt (kept joined from the translator's crop), every other join ≤ 0.7 pt; the hyphen is missing from the text layer (11 pt gap before الخ).
  - حَقًّا (p. 578): fatha on ح, shadda and tanwin on ق. مَتَاعًا (p. 578): fatha on م and ت, a full alif, tanwin on ع. As in the file.
  - واللّه الموفق والمعين (p. 580): three words, 1.5 pt apart; the shadda sits towards the left of الله (second lam); no other marks. As in the file.
  - أَلَمْ تَرَ (p. 580): م|ت 1.4 pt, spaced as the translator's crop decided; marks as in the file.
  - اَيْنَمَاتَكُونُوايُدْرِكُكُمُالْمَوْتُ وَلَوْ كُنْتُمْفِيبُرُوجٍمُشَيَّدَةٍ (p. 582): every mark as in the file (fatha on the bare alif, damma on the first ك, no shadda on the second ك, no shadda on م of مشيدة); الموت|ولو and ولو|كنتم 1.3 pt (spaces), all other joins ≤ 1.0 pt or touching; the glyphs of كُ (in كم) and تم are missing from the text layer, so those joins rest on the translator's crop. Kept as printed; it differs from `data/quran-uthmani.json` for 4:78, as the brief notes.
  - أبُوالدَحْدَاح – رضـ (p. 583): no mark on أ, damma on ب, fatha on the first د, sukun on ح, fatha on the second د. As in the file.
- **(6) Honorifics, table, heading.** ﷺ is printed twice (p. 582 നബിﷺ; p. 583 നബിﷺയെ); the English has exactly 2. (r) is printed 7 times: Mujahid (p. 576), Mujahid, Ibn Kathir, Ibn Taimiyyah, Ibn 'Abdilbarr (p. 577), Khalid ibnul Walid, Ibn Abi Hatim (p. 583); the English has the same 7. 67 word-table entries, as above; the 245 table glosses مَنْذَا and الَّذِييُقْرِضُ separately, as printed (the site merges them). "### Section – 32" is right.
- **(7) വിധി.** "ruling" for a law (pp. 576, 579; as parts 13, 28, 31) and "decree" for Allah's വിധി on p. 582 ("being pleased with His decree", "avert the decree of Allah"; part 27 has വിധിവ്യവസ്ഥകൾ "decrees and dispositions"). The court's വിധി on p. 579 is "ruling"/"judgment" (വിധിയെഴുതി "wrote the judgment", വിധിയിൽ "in the judgment"). Right.
- **(8) Terms**, checked by grep against earlier word tables and check.md tables:
  - വസ്വിയ്യത്ത് "wasiyyah" (parts 16, 20, 28); മൻസൂഖ് / നസ്ഖ് / ദുർബലപ്പെടുക "mansukh / naskh / become annulled" (parts 16, 28, 29); ഉപാധി "condition" (parts 26, 35); സദാചാരം "good custom" (parts 27, 36, 38); ന്യായം "justification" (parts 10, 13); വാചകം / വാക്യം "statement / sentence" (part 37); പ്രതാപശാലി / അഗാധജ്ഞൻ / യുക്തിമാൻ "the Majestic / the Profoundly Knowing / the Sagacious" (parts 06, 20, 33–36); നന്ദി ചെയ്യുക "give thanks" (parts 09, 24, 26); ബുദ്ധി കൊടുക്കുക "use reason" (part 12); സമരം "struggle" (parts 31, 34), യുദ്ധം "war"/"fight"; അലങ്കാരാർത്ഥം "figurative meaning" (part 12); ഭവനം "home" (part 13); വാസസ്ഥലം "dwelling-place" (part 13; correction 2); അധികമാളുകൾ "most people" (parts 16, 25).
  - മുടക്കം ചെയ്യുക "do hindrance" (p. 576): part 32 has മുടക്കം ചെയ്യപ്പെടുന്ന "hindered" and part 38 മുടക്കിയിടുക "hinder"; "do hindrance" keeps it apart from മുടക്കിയിടുക. Left (open doubt 3).
  - വസതി "residences" (243 table), ജീവനാംശം "maintenance", പാരിതോഷികം "present", ഓശാരം "charity", ദീനി "of the din" ("concern for the din"), നിലപാട് "position", ആശയം "idea", ഗുണപാഠം "moral lesson", മനോവീര്യം / ദൃഢവിശ്വാസം "morale / firm faith", കടം "loan", മരണമടയുക "meet death": new; used consistently.
  - നിർവഹിക്കുക "carry out" (p. 579, family matters by the shari'ah): part 39 has "perform" (prayer) and part 37 "carry out" (its open doubt 4). Left; see open doubt 4.

## Checked and left as they are

- p. 579, "It stressed in the judgment …", "It also stated …", "It specially pointed out …" and "They adopted peaceful methods …": the Malayalam verbs are subjectless continuations whose subject is the bench (or the organisations) named in the previous sentence; English needs a subject. Left.
- p. 579, "was also added" and "when amendment was made" for the subjectless active കൂട്ടിച്ചേർത്തു / ഭേദഗതി വരുത്തിയപ്പോൾ: no agent is named in the Malayalam; the passive adds none. Left.
- p. 580, "If you think, using reason, that it is for your good … that He explains all these like this, you indeed will understand." for "… വിശദീകരിച്ചുതരുന്നതെന്ന് ബുദ്ധികൊടുത്ത് ചിന്തിച്ചാൽ നിങ്ങൾക്കുതന്നെ മനസ്സിലാവും.": the എന്ന് clause stands next to ചിന്തിച്ചാൽ; it could also be read as the object of മനസ്സിലാവും ("if you think using reason, you yourselves will understand that …"). The translator's reading follows the word order; left.
- p. 582, "it may also be that it is a word in a figurative meaning: that, after the generation that died, …": the author's അലങ്കാരാർത്ഥത്തിലുള്ള ഒരു വാക്കാണതെന്നും വരാം is placed after the clause it qualifies, as English needs; nothing added. Left.
- p. 583, "At last, … He will also give recompense in plentiful measure. That is the gist.": the print has a full stop before "എന്ന് സാരം."; mirrored. Left.
- Subjectless verbs whose subject is Allah ("that He explains all these", "It is such things that He reminds of") are rendered with "He", as in earlier parts.
- `part.json` verses "240-245", pages "575-584", PDF pages "404-413": correct.

## Open doubts for the reviewer

1. **DOUBTs in the text**: line-end splits (240 panel, 240 table, 243 panel); ലക്ഷ്യം "evidence" (242 panel and table, as parts 01–35); കടമയായി "loan" (245 panel); "-പ്രസാ:" "-Publishers" (end of the long note); ദേഹംകൊണ്ട് "with the body" (p. 583).
2. **TN on "Maintenance"** (p. 579): kept as a TN.
3. **മുടക്കം ചെയ്യുക "do hindrance"** (p. 576) against "hindered" (part 32) and മുടക്കിയിടുക "hinder" (part 38).
4. **നിർവഹിക്കുക "carry out"** (p. 579) against "perform" in part 39; see part 37, open doubt 4.
5. **Arabic joins** of 0.8 pt (ن|خ in فَإِنْخَرَجْنَ, kept joined) and 1.4 pt (أَلَمْ تَرَ, kept spaced), from the translator's crops; the 4:78 joins at missing glyphs likewise.
6. **Earlier open doubts still apply** (not in this part): see parts 13–39.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| വസ്വിയ്യത്ത് | wasiyyah | wasiyyah (as parts 16, 20, 28) |
| ചിലവ് / ചെലവ് | nafaqah | expenses |
| ജീവനാംശം | — | maintenance |
| പാരിതോഷികം | — | present |
| മൻസൂഖ് / നസ്ഖ് / ദുർബലപ്പെടുക | mansukh / naskh | mansukh / naskh / become annulled (as parts 28–29) |
| ഉപാധി | — | condition (as parts 26, 35) |
| നിലപാട് | — | position |
| ആശയം | — | idea |
| സദാചാരം | ma'ruf | good custom (as parts 27, 36) |
| മുടക്കം ചെയ്യുക | — | do hindrance (open doubt 3) |
| ന്യായം | — | justification (as parts 10, 13) |
| വാചകം / വാക്യം | — | statement / sentence (as part 37) |
| അധികപക്ഷം / ഭൂരിപക്ഷം / അധിക പേര് / അധികമാളുകൾ | akthar | the greater part / the majority / the greater number / most people (as parts 16, 25) |
| മരിക്കുക / മരണപ്പെടുക / മരണമടയുക | mata | die / die / meet death |
| ഭവനം / വസതി / വാസസ്ഥലം | diyar | homes (as part 13) / residences / dwelling-place (as part 13; correction 2) |
| യുദ്ധം / സമരം | qital / jihad | war, fight / struggle (as parts 31, 34) |
| ഗുണപാഠം | — | moral lesson |
| മനോവീര്യം / ദൃഢവിശ്വാസം | — | morale / firm faith |
| അലങ്കാരാർത്ഥം | majaz | figurative meaning (as part 12) |
| ഓശാരം | — | charity |
| ദീനി | — | of the din |
| പ്രതാപശാലി / അഗാധജ്ഞൻ / യുക്തിമാൻ | 'aziz / hakim | the Majestic / the Profoundly Knowing / the Sagacious (as parts 06, 20, 33–36) |
| നന്ദി ചെയ്യുക | shakara | give thanks (as parts 09, 24, 26) |
| ബുദ്ധി കൊടുക്കുക | 'aqala | use reason (as part 12) |
| കടം / കടം കൊടുക്കുക | qard / aqrada | loan / lend |
| വിധി | hukm / qada' | ruling (law) / decree (Allah's; as part 27) |
