# Check: Al-Baqarah part 39 (verses 234–239)

Checked on 2026-10-16 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 394–404 (book pp. 565–575). Each page was rendered at 150 dpi and read once in full (this part has no footnotes). The full `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary, and `pdftotext -bbox` was used for the vowel marks and word joins of the Arabic on pp. 566, 567, 568, 570, 572, 573 and 574. The amanithafseer.com text was not used beyond the translator's notes on site-vs-book differences. One crop: عَشر on p. 566 (300 dpi).
- **Boundaries.** Part 38 ends on p. 565 with point (12), "… വീക്ഷിച്ചുകൊണ്ടിരിക്കുന്നുണ്ടെന്നും ഓർമിപ്പിക്കുന്നു."; the verse 234 panel follows directly on the same page, and this part starts there. It ends on p. 575 with "… ശരിയായ രൂപത്തിൽ തന്നെ അത് നിർവഹിക്കുകയും വേണം.", directly above the verse 240 panel on the same page. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 234–239), `words.json` (101 entries: 234: 19; 235: 29; 236: 15; 237: 23; 238: 7; 239: 8), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` (panels pp. 565, 567–568, 569, 571, 572–573) and every `words.json` gloss (tables pp. 565–566, 568, 569, 571, 573) match the images in the printed order. The text-layer slips ശ്രഷ്ഠത, നിർബന്ധമത്ര, എന്നത്ര and 143--ാം are all printed ശ്രേഷ്ഠത, നിർബന്ധമത്രെ, എന്നത്രെ and 143-ാം on the images, as the files have them. No ZWNJ is printed in these items.
- `[p. N]` markers 566–570 and 572–575. P. 565 holds only the end of part 38, the 234 panel and the start of its table, and p. 571 only the 237 panel and table, so neither has a marker. [p. 566], [p. 568], [p. 572] and [p. 573] stand at the start of commentaries below the tables. Page turns: [p. 567] "days*[p. 567]*," (ദിവസവുമാണെ/ന്നുള്ളതിൽ); [p. 569] "without violating *[p. 569]*" (ലംഘിക്കാതെ / കാത്തുസൂക്ഷിക്കുന്നത്); [p. 570] before "has not been fixed" (എത്രയാണെന്ന് / ഇരുകൂട്ടരും, as near as the English allows); [p. 574] "Ibn Mas'ud *[p. 574]* (r)" (ഇബ്നുമസ്ഊദ് / (റ)); [p. 575] before the yawning hadith. All are right.
- Groups: *[Verse 234]* | *[Verse 235]* | "### Section – 31" (വിഭാഗം - 31, printed on p. 569 above the 236 panel) | *[Verse 236]* | *[Verse 237]* | *[Verses 238–239]* (one word table for both). Right.

## Corrections made (before → after)

### Pronouns added

1. p. 566, "‘കാലം കഴിഞ്ഞു, കാലഗതി പ്രാപിച്ചു’" (subjectless): "‘his time is over, he attained the course of time’" → "‘time is over, attained the course of time’".
2. v. 239 table, فَإِذَآ أَمِنتُمۡ "… നിർഭയമായാൽ" (subjectless): "if it has become secure" → "if having become secure".

### Translator word inside the author's bracket

3. v. 236 (`verses.json`), "തോതുമത്രെ (ബാധ്യത)-": the bracket holds only ബാധ്യത. "is indeed (the liability)-" → "is indeed the (liability)-" (as part 38, correction 4).

### Doubt settled

4. v. 234 (`verses.json`), ദേഹം "selves": the in-text DOUBT was removed. Part 38's checker settled ദേഹം (nafs) as "self", with parts 08, 12, 13 and 18, and recorded part 36's "with their bodies" (2:228) as its open doubt 5; this part follows that. The doubt stays open for the reviewer below (open doubt 1), as in part 38.

No dropped തന്നെ/-ഉം/എന്നോണം or list items, may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, re-ordered sentences, silently corrected names or misprints, translator words in round brackets (apart from 3), or added Arabic were found.

## Points the caller asked about

- **(1) DOUBTs.**
  - ദേഹം "selves" (v. 234): settled, correction 4.
  - Line-end splits "[പത്ത് / ദിവസവും]" (v. 234 panel), "തീർച്ചപ്പെടുത്തുക / (ഉറപ്പിക്കുക)യും" (v. 235 table), "പകുതിയാണ് / (കൊടുക്കേണ്ടത്)" (v. 237 panel) and "ഭയ / ഭക്തിക്ക്" (v. 237 table): all confirmed at line ends on the images; DOUBTs kept, as part 38 kept "മുല / കുടി".
  - സഹനശീലൻ "the Forbearing" (v. 235): consistent with part 36; the DOUBT is kept because part 36's open doubt on this name of Allah is not yet settled.
  - ഞെരുക്ക(തിടുക്ക)ക്കാരന്റെ (v. 236 table): തിടുക്ക is clearly printed; "(hurry)" with the DOUBT kept.
  - പണം "panams" (p. 570): clearly printed; DOUBT kept.
  - "കർമങ്ങളാൽ" (p. 573): clearly printed; translated as printed with the DOUBT.
  - "മനുഷ്യന്റെ ശിർക്ക് കുഫ്റുകളുടെയും ഇടക്കുള്ള" (p. 573): the -ഉം on കുഫ്റുകളുടെയും together with ഇടക്കുള്ള ("between") calls for two terms, man and shirk-and-kufr; "between man's shirk and kufr" would leave ഇടക്കുള്ള with a single term and give no sense. The English "between of man and of shirk and kufr" is kept, and the DOUBT already gives the other reading for the reviewer.
  - മറക്കുക (വിസ്മരിക്കുക) "forget (be oblivious)" (v. 237 table): the gloss holds two verbs, which need two renderings; part 08's വിസ്മരിക്കുക "forget" stood alone. Kept; open doubt 4.
- **(2) Printed oddities mirrored**, all confirmed on the images: the 239 panel ends with a comma; "المحافظةعلى الصلاة നമസ്കാരത്തെപ്പറ്റി സൂക്ഷിച്ചുപോരുക)" has no opening bracket (p. 573); "‘ഉൽകൃഷ്ടമായത്, ‘ഉത്തമമായത്’" has its first quotation unclosed (p. 574); no comma after "തിരിഞ്ഞു മറിഞ്ഞുനോക്കൽ", and "മറ്റ" as printed ("other", p. 574); on p. 572 the bbox has "(" at 141.6 pt before the Arabic and the only ")" after കൈവശമുള്ളവൻ.
- **(3) Arabic as printed**, from the bbox glyph boxes and marks:
  - تَوَفي (p. 566): fatha on ت and و only. عَشر (p. 566): the crop shows the fatha on ع; ش and ر bare.
  - سُبيعِية (p. 567): damma on س, kasra under ع. تَعبدى (p. 567): fatha on ت only.
  - كِتَابُ (p. 568): kasra, fatha and damma as in the file.
  - مُتَعة (p. 570): damma on م, fatha on ت; ع and ة bare.
  - الَّذِيبِيَدِهِعُقْدَةُالنِّكَاحِ (p. 572): every join ≤ 0.5 pt (joined); all marks as in the file.
  - إقَامَةُ الصَّلاةَ (p. 573): no kasra under إ; fatha on ق and م, damma on ة; shadda with fatha on ص, لا bare, fatha on ة. المحافظةعلى الصلاة: bare; ة|ع 1.4 pt, kept joined from the translator's crop.
  - وَالصَّلاةِالْوُسْطَى (p. 574): ة|ال 1.4 pt, kept joined from the translator's crop; fatha on و, shadda with fatha on ص, kasra on ة, sukun on ل and س, damma on و, fatha on ط. الْوُسْطَى: the same marks.
  - والله اعلم (p. 574): bare, as parts 21–32.
  - وَقُومُوالِلَّهِقَانِتِينَ (p. 574): all glyphs overlap (joined); marks as in the file.
- **(4) Text-layer errors fixed from the image**: see "What was compared".
- **(5) Markers, honorifics, table, heading.** No [p. 565] or [p. 571] (see above). ﷺ is printed 10 times: p. 566 one, p. 567 one, p. 573 one, p. 574 five, p. 575 two; none at the bare തിരുമേനി on p. 574 ("the noble Prophet", as earlier parts). The English has exactly 10. (r) is printed 6 times: Sa'd ibn Khawlah (p. 567), Ibn Mas'ud, Imam Muslim, Zaid ibn Arqam (p. 574), Abu Hurairah, 'A'ishah (p. 575); the English has the same 6. 101 word-table entries. "### Section – 31" is right. No footnotes, no TNs.
- **(6) Terms**, checked by grep against earlier word tables, commentaries and check.md tables:
  - സ്മരിക്കുക "remember" (parts 23, 32, 33), ഓർമിക്കുക "keep in mind" (parts 23, 32), ഓർക്കുക "bear in mind" (part 36): kept apart, as those parts settled. Parts 07, 08 and 18 had ഓർക്കുവിൻ "remember" before the distinction was made.
  - സ്വന്തങ്ങൾ "own selves" (parts 02, 09, 14, 16, 30, 35); ദേഹം "self" (part 38).
  - സുകൃതം ചെയ്യുന്നവർ "those who do well" (parts 10, 16); കണ്ടറിയുന്നവൻ "the One who sees and knows" (parts 14, 16, 38); മാപ്പ് / മാപ്പാക്കുക "pardon" and വിട്ടുവീഴ്ച "letting go" (parts 09, 16, 35); നിർഭയം "secure" (parts 20, 32); ദയവ് "kindness", ഔദാര്യം "generosity" (part 16); ഞെരുക്കം "straitness" (parts 29, 38); വിഭവം "resource" (as an earlier term table); ശ്രേഷ്ഠത "superiority" (part 36); ഭിന്നാഭിപ്രായം "difference of opinion" (part 34); സമ്പ്രദായം "practice" (parts 36–38); അനാചാരം "improper custom" (part 37); നിയമാതിർത്തി "legal boundary", ലംഘിക്കുക "violate" (part 37); തത്വം "principle", യുക്തി രഹസ്യം "wise secret" (earlier term tables); അഥവാ "or" (parts 22 onward); തിരുമേനി "the noble Prophet".
  - The translator's new terms (table below) are used consistently throughout the part.

## Checked and left as they are

- v. 237 "If you have divorced them …, and you have fixed a fixing for them, moreover-": "and" joins the താനും clause to the condition, which is its sense; left.
- v. 239 "if you are in peace (the fear removed)": the author's bracket stands before സമാധാനത്തിലായാൽ; English word order puts it after; nothing added. Left.
- p. 566 the second "to die" in quotation marks (മരണപ്പെടുക എന്ന അർത്ഥത്തിൽ, no marks printed): marks only the cited word, as part 36 left such marks. Left.
- Subjectless verbs whose subject is Allah ("He commands", "He is stating", "He has specially singled out") are rendered with "He", as in earlier parts.
- `part.json` verses "234-239", pages "565-575", PDF pages "394-404": correct.

## Open doubts for the reviewer

1. **ദേഹം "self/selves"** here and in parts 08–18 and 38, against "with their bodies" in part 36 (2:228); see part 38, open doubt 5.
2. **DOUBTs in the text**: the line-end splits (v. 234 panel, v. 235 table, v. 237 panel and table); സഹനശീലൻ "the Forbearing" (v. 235, as part 36); തിടുക്ക "(hurry)" (v. 236 table); പണം "panams" (p. 570); "കർമങ്ങളാൽ" (p. 573); "മനുഷ്യന്റെ ശിർക്ക് കുഫ്റുകളുടെയും ഇടക്കുള്ള" (p. 573).
3. **Arabic joins of 1.4 pt** in المحافظةعلى and وَالصَّلاةِالْوُسْطَى, kept joined from the translator's crops.
4. **വിസ്മരിക്കുക "be oblivious"** inside the gloss മറക്കുക (വിസ്മരിക്കുക) (v. 237 table), against "forget" in part 08, where it stood alone.
5. **ഓർക്കുവിൻ "bear in mind"** (v. 239 table, as part 36) against "remember" in parts 07, 08 and 18; സ്മരിക്കുക takes "remember" in the same verse.
6. **Earlier open doubts still apply** (not in this part): see parts 13–38.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഇദ്ദഃ ആചരിക്കുക / ദുഃഖാചരണം | 'iddah / ihdad | observe 'iddah / observance of mourning |
| വിവാഹാർത്ഥന / വിവാഹാഭ്യർത്ഥന / വിവാഹാലോചന | khitbah | marriage request / marriage solicitation / marriage proposal |
| സൂചന | ta'rid | indication |
| വാഗ്ദാനം | muwa'adah | promise |
| രഹസ്യമായി / സ്വകാര്യത്തിൽ | sirran | secretly / in private |
| മുത്അത്ത് | mut'ah | mut'ah |
| വിഭവം / ഉപഭോഗവസ്തു | mata' | resource (as an earlier table) / article of use |
| തോത് / അളവ് | qadar | rate / measure |
| നിവൃത്തിയുള്ളവൻ / ഞെരുക്കമുള്ളവൻ | al-musi' / al-muqtir | one who has means / one who has straitness (as parts 29, 38) |
| നിർണയം / നിശ്ചയം / നിർബന്ധം | faridah | fixing / determination / obligation |
| സ്പർശിക്കുക / സ്പർശനം / സംയോഗം | massa | touch / contact / union (as part 36) |
| മാപ്പാക്കുക / വിട്ടുവീഴ്ച | 'afw | pardon / letting go (as parts 16, 35) |
| സൂക്ഷ്മത / ഭയഭക്തി | taqwa | caution / God-fearing reverence |
| ഭക്തി / ഭക്തർ / ഒതുക്കം / അച്ചടക്കം | qunut | devotion / devout ones / composure / discipline |
| ശ്രേഷ്ഠത / ഔദാര്യം / യോഗ്യത / ദയവ് / മാന്യത | fadl | superiority (as part 36) / generosity / worthiness / kindness (as part 16) / decency |
| സ്മരിക്കുക / ഓർക്കുക / ഓർമിക്കുക | dhikr | remember / bear in mind / keep in mind (as parts 23–36; open doubt 5) |
| ശ്രദ്ധിക്കുക / കാക്കുക / സൂക്ഷിക്കുക | hadhira / hafiza | be attentive / watch over / guard |
| സൂക്ഷ്മമായി അറിയുന്നവൻ | khabir | One who knows minutely |
| സുകൃതം ചെയ്യുന്നവർ / സുകൃതവാൻമാർ | muhsinun | those who do well (as part 10) / well-doers |
| പ്രയോഗം / വിവക്ഷ / വാക്കർത്ഥം / സാക്ഷാൽ അർത്ഥം | — | usage / what is meant / literal meaning / actual meaning |
| മാമൂൽ / അന്ധവിശ്വാസം / അനാചാരം | — | convention / superstition / improper custom (as part 37) |
| യുക്തി രഹസ്യം | hikmah | wise secret (as an earlier table) |
| നിർവഹിക്കുക / നടത്തുക | — | perform / carry out |
| മുൻതൂക്കം | — | preponderance |
| കാൽനടക്കാർ / വാഹനമേറിയവർ / വാഹനക്കാർ | rijal / rukban | ones on foot / ones mounted on conveyances / conveyance-riders |
| സമാധാനം / നിർഭയം / ഭയപ്പാട് | amn | peace / secure (as parts 20, 32) / fright |
| അവതരിക്കുക | — | come down |
| താനും | — | moreover |
| മറക്കുക / വിസ്മരിക്കുക | nasiya | forget / be oblivious (open doubt 4) |
| ഇണകൾ | azwaj | mates |
