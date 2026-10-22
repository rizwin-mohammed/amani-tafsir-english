# Check: Al-Baqarah part 47 (verses 269–274)

Checked on 2026-10-22 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 481–491 (book pp. 652–662). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer (this part has no footnotes). `pdftotext -bbox` was used for the vowel marks and word boxes of every Arabic phrase in the commentary, and the raw presentation-form glyphs were read where a join mattered. No crops were needed. The amanithafseer.com text was used only through the translator's notes on site-vs-book differences.
- **Boundaries.** Part 46 ends on p. 652 with "… തിരിച്ചറിയുവാൻ കഴിയുകയുള്ളൂ."; the verse 269 panel follows directly on the same page (no heading). This part starts there. It ends on p. 662 with "… ധർമമായിത്തീരുന്നതാണ്.’ (ബു; മു.)", directly above the verse 275 panel on the same page (no heading). Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 269–274), `words.json` (79 entries: 269: 10; 270: 8; 271: 14; 272: 17; 273: 19; 274: 11), `commentary.md`.
- Groups: *[Verse 269]* (panel and table p. 652, commentary pp. 653–654) | *[Verses 270–271]* (panels, tables and commentary start p. 655, commentary to p. 657) | *[Verse 272]* (panel and table p. 657, commentary p. 658) | *[Verse 273]* (panel pp. 658–659, table and commentary p. 659, commentary to p. 661) | "### Section – 38" | *[Verse 274]* (panel, table and commentary start p. 661, commentary ends p. 662). Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added. اللّه اعلم on p. 657 stands inside the paragraph, as printed.
- `verses.json` and every `words.json` gloss match the images in the printed order. The text-layer slips എന്നത്ര / വെന്നത്ര, പ്രരിപ്പിക്കലും / പ്രരിപ്പിക്കുവാനും, ദരിദ്രർക്കത്ര, ഇങ്ങനെയുള്ളവർക്കത്ര and "(-ലുബ്ബ്" are printed correctly on the images (-ത്രെ, പ്രേ-, "(ലുബ്ബ്)"); the files follow the images. Spot-checks against text-layer tokens: the 269 panel "(സൽ)" ends a line and "ബുദ്ധിയുള്ളവരല്ലാതെ" begins the next with no hyphen token, so it stays spaced; the 269 table "ബുദ്ധി/മാൻമാർ" is a word split at a table line end (as "ദരി/ദ്രൻമാർക്ക്", "തേടി/ക്കൊണ്ടല്ലാതെ", "നിറവേറ്റ/പ്പെടും" in the other tables) and stays joined; the 271 panel "മൂടിവെ(ച്ചുമാപ്പാ)ക്കുകയും" is one token; the 271 table "ഉത്തമമാണ്" has two മ glyphs in the text layer (the justified spacing makes it look longer on the image); the 270 table "വല്ല / ചിലവും" is spaced; the 273 panel has ധനികന്മാരായി (ന്മ) and the table ധനികൻമാരെന്ന് (ൻമ), both as printed. No ZWNJ is printed in these items or in the files.
- `[p. N]` markers 653–662. P. 652 holds only the end of part 46 and the 269 panel and table, so it has no marker. [p. 653], [p. 655], [p. 658] and [p. 659] stand at the start of commentaries below the tables or rules. Page turns: [p. 654] after "this word" (… ഈ വാക്ക് / ഉപയോഗിച്ചിട്ടുള്ള); [p. 656] "Nothing *[p. 656]* will fail" (ഒന്നും / അവന്റെ കണക്കിൽ); [p. 657] "that it *[p. 657]* be for the poor" (ദരിദ്രൻമാർക്കായി/രിക്കുക); [p. 660] at "(1)"; [p. 661] before "(on the Day of Qiyamah)"; [p. 662] before "Allah announces". All are right.
- Honorifics: ﷺ printed 9 times (p. 653 നബിﷺ പറയുന്നു; p. 654 നബിﷺ പറയുന്നു; p. 656 നബിﷺ ഇപ്രകാരം, നബിﷺ ഒന്ന്; p. 658 നബിﷺയുടെ, നബി ﷺയും; p. 659 നബി തിരുമേനിﷺയുടെ; p. 661 നബി ﷺ പറഞ്ഞതിന്റെ; p. 662 നബിﷺ അരുളിച്ചെയ്ത); the English has exactly 9, none at the bare തിരുമേനി (p. 656 "the noble Prophet has also said", p. 658 "the liability of the noble Prophet") or the bare നബി in നബിചര്യ and നബി വചനം. (r) printed 15 times (p. 653: Malik, Ibn Kathir, Muslim; p. 654: Malik, Ibn Kathir, Raghib twice; p. 658: Ibn Abi Hatim; p. 660: Bukhari, Abu Hurairah, Muslim twice; p. 661: Khabisah; p. 662: Sa'd, Ibn Mas'ud); the English has 15. (a): none printed, none in the English.

## Corrections made (before → after)

### Voice / subject changed

1. v. 272, `verses.json` ("നിങ്ങളോട് അനീതി ചെയ്യപ്പെടുകയില്ലതാനും"): the subject is അനീതി, with നിങ്ങളോട് "to you"; the English had made "you" the subject (the table's لَا تُظۡلَمُونَ, where നിങ്ങൾ is the subject, rightly keeps "you will not be … done injustice to"). "you will not be done injustice to, moreover." → "injustice will not be done to you, moreover."

### Added pronoun

2. p. 661, hadith (3), "… അല്ലെങ്കിൽ അധികരിപ്പിക്കുവാൻ ശ്രമിക്കുകയോ (ഇഷ്ടംപോലെ) ചെയ്തുകൊള്ളട്ടെ": no object is printed. "or else try to increase it (at will)" → "or else try to increase (at will)".

### Dropped word / sense

3. p. 653, "കാര്യങ്ങളെപ്പറ്റി വേണ്ടതുപോലെ ചിന്തിച്ചു വിലയിരുത്തുവാനും": -പ്പറ്റി "about" was dropped and ചിന്തിക്കുക, "think" elsewhere in this part (ചിന്തിക്കുമ്പോൾ "thinks", ചിന്തിച്ചറിയുക "know … by thinking"), was "consider". "both to consider and evaluate such matters as is needed" → "both to think about and evaluate such matters as is needed".

### Rendering brought into line with earlier parts

4. v. 271, `verses.json`, ഗുണകരമാകുന്നു (for خَيۡرٞ): parts 34 and 36 render ഗുണകരം "beneficial" (part 34: ഗുണകരം / ദോഷകരം for khair / sharr; part 36 "as part 34"); parts 23–24 had "advantageous", but the later parts settled on "beneficial". "it is (more) advantageous for you" → "it is (more) beneficial for you". ("beneficial" is not used for any other word in this part.)

No dropped തന്നെ/-ഉം/എന്നോണം or list items, may/will errors, -ഉം futures rendered as present, tense changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced notes, translator words in round brackets, or added or re-vowelled Arabic were found apart from the above.

## Points the caller asked about

- **(1) DOUBTs** (all kept; none rests on a source the author does not give).
  - മക്കായിൽ ഹിജ്റഃ വന്നവരും (p. 659): clearly printed so (image and text layer). Rendered as printed, "in Makkah", with the likely sense "from Makkah" given only inside the DOUBT; the context (the same sentence places them at the mosque of Madinah) supports it. Kept.
  - തട്ടം (രണ്ടാം മുണ്ട്) "upper wrap (second cloth)" (p. 660): neither word occurs in earlier parts (grep). The rendering keeps the author's bracket, and the DOUBT gives the options. Kept.
  - ധന്യത "self-sufficiency" (p. 661, twice in one sentence): follows part 46's ധന്യൻ "Self-Sufficient" (open doubt there); the DOUBT stands at the first use only. Kept.
- **(2) No TNs.** Confirmed on the images and kept with no TN, as parts 33, 41, 44 and 46 did: എന്നൊക്കയാണിതിന് (p. 654), പളളിയിൽ (p. 660, double ള in the text layer; the English is unaffected). The name is printed ഖബീസ്വഃ (with (റ)) and, in the vocative, ഖബീസ്വാ (p. 661); it does not occur in earlier parts (grep for ഖബീസ, Khabis, Qabis). "Khabisah" / "Khabisa" follow the print (ഖ, not ക്വ) and are not corrected to the familiar form. Kept.
- **(3) സൽബുദ്ധി "good intellect"** (269 panel "(സൽ) ബുദ്ധിയുള്ളവർ", 269 table, p. 654 three times). Right in my judgement: on p. 654 the author explains സൽബുദ്ധിയുള്ളവർ through lubb, "every lubb is ബുദ്ധി; not every ബുദ്ധി is lubb", and ബുദ്ധി is "intellect" from part 45 on (part 45 correction 7). "good sense" would cut that link. The cost is that part 45's p. 642 സൽബുദ്ധി stays "good sense" (open doubt 3).
- **(4) Markers, heading, counts**: see "What was compared". "### Section – 38" is right; 79 word-table entries; ﷺ 9 and (r) 15 as printed.
- **(5) Arabic as printed** (bbox marks; mark positions read by their fixed offsets from the line: sukun about 9 pt above, fatha about 7 pt below the box top, kasra about 3 pt; codepoints compared with the file):
  - حِكْمَةَ (p. 653): kasra on ح, sukun on ك, fatha on م and on ة. As in the file.
  - وَمَايَذَّكَّرُإِلاأُولُو الألْبَابِ (p. 654): fatha on و, م, ي; shadda+fatha on ذ and ك; damma on ر; kasra under إ; لا bare; damma on أ and ل; sukun on the second ل, fatha on ب, kasra on the final ب; no mark on the first ا or on أ of الألباب. The words before أولو close on non-joining letters, so the joins do not change the letter shapes; the space before الألباب follows the visible gap. As in the file.
  - أُولُوالألْبَابِ (p. 654, first): أولو|الألباب 0.7 pt, joined; sukun on ل, fatha on ب, kasra on the final ب. أُولُوالألْبَاب (p. 654, second): the same without the kasra. لُب: damma on ل. ألْبَاب: sukun on ل (the mark at 305.8 pt belongs to this line), fatha on ب, no mark on أ. As in the file.
  - اهلالعقول،عقلاء (p. 654): bare; word boxes 0.4 pt apart (اهل|العقول) and touching the comma. Written joined, as the translator had and as parts 44–46 write words with no blank between them. Note for the reviewer: the text layer shows the ل of اهل in its final form and the following ا standing alone, so in the print the two words do not join into a لا ligature, as the joined Unicode string will on the site (open doubt 2).
  - إن شاء الله (p. 654) and اللّه اعلم (p. 657): graphics, bare, as parts 39–46.
  - نَذْر (p. 656): fatha on ن, sukun on ذ, ر bare. اَصْحَابُ الصفة (p. 659): fatha on the alif, sukun on ص, fatha on ح, damma on ب; 3 pt space before الصفة (bare). As in the file.
  - `npm run check` lists 21 Al-Baqarah "close but not exact" items before and after my edits (the list is identical); this part adds none.
- **(6) Site-vs-book differences**: the translator's notes were spot-checked on the images (panels and tables above; p. 653 "കൊണ്ടു വന്നു", the closing ’ after കൊടുക്കുന്നത്. and no ‘ before കേവലം; p. 656 "പാടില്ല താനും"; p. 657 اللّه اعلم inline; p. 662 "മുഖത്തെ - പ്രീതിയെ-"). The book is followed in each.
- **(7) Terms**, checked by grep against earlier term tables and word tables:
  - As earlier parts: വിജ്ഞാനം / തത്വം / യുക്തി "wisdom / principle / sagacity" and വിജ്ഞാനം / തത്വജ്ഞാനം "wisdom / philosophy" (hikmah); ജ്ഞാനം / അറിവ് "learning / knowledge"; ഉറ്റാലോചിക്കുക "reflect intently"; ഭയപ്പാട് "fright"; നേർച്ച "vow"; ചിലവ് "expense(s)"; അക്രമികൾ / അക്രമം "wrongdoers / wrong", അനീതി "injustice"; ഉത്തമം "excellent"; ബാധ്യത "liability"; സൻമാർഗം / നേർമാർഗം / ദുർമാർഗം "right guidance / the straight way / misguidance"; ആനുകൂല്യം "concession"; ലക്ഷണം "sign(s)", അടയാളം "mark"; ഗണിക്കുക / ധരിക്കുക "deem / suppose"; മുടക്കുക "hinder"; ഒതുക്കം "composure"; ആക്ഷേപ- "reprehensible"; മുൻഗണന "preference"; ഉപജീവനം "livelihood"; ദീൻ "din"; സ്വഹാബികൾ "Companions"; പുണ്യകർമം "meritorious deed"; പുണ്യം "merit"; നിർബന്ധം "obligatory"; സന്തോഷവാർത്ത "glad tidings"; നിസ്സാരം "trifling"; ബുദ്ധിമാൻമാർ "men of reason"; പരിശുദ്ധ "holy"; പിൻബലം "support"; കാംക്ഷിക്കുക "covet" (the earlier term table for 2:173; here "does not covet anything else other than the pleasure of Allah"; the word's sense here is "desire", see open doubt 6).
  - ഗുണകരം: correction 4.
  - പ്രതിജ്ഞ "pledge" (p. 656): an earlier table has പ്രതിജ്ഞ "vow", but here it stands in the definition of നേർച്ച "vow" ("സ്വയം പ്രതിജ്ഞ ചെയ്യുന്നതിനാണ് نَذْر (നേർച്ച) എന്ന് പറയുന്നത്"), so the two need different English. Left (open doubt 4).
  - പാർപ്പിടം "dwelling-place" (p. 659): this is the earlier parts' rendering of പാർപ്പിടം (mustaqarr, term table), but part 13 also renders വാസസ്ഥലം "dwelling-place", so the two words already share one English across parts. Left as the earlier പാർപ്പിടം (open doubt 5).
  - One English per Malayalam word inside this part: ഹിക്മത്ത് / വിജ്ഞാനം / തത്വജ്ഞാനം / യുക്തി / യുക്തിതത്വം; ബുദ്ധി / സൽബുദ്ധി / ബുദ്ധിമാൻ / ബുദ്ധിശാലികൾ; ഭയപ്പാട് / ഭയം / പേടി; പണി / പ്രവൃത്തി; ബാധ്യത / ചുമതല; രഹസ്യമായി / സ്വകാര്യമായി / പരസ്യമായി; കണക്കാക്കുക / ഗണിക്കുക / ധരിക്കുക; ആത്മാഭിമാനം / അഭിമാനം; ചിലവ് / ധനവ്യയം: each kept apart.

## Checked and left as they are

- p. 658, "Through this verse He informs that that method need not be continued.": അറിയിക്കുന്നു has no printed subject; English needs one, and a bracketed "(Allah)" would put translator words in round brackets. Left.
- v. 270, "or make any vow a vow" for "വല്ല നേർച്ചയും നേർച്ചയാക്കുകയോ": literal, parallel to "spend any expense". Left.
- p. 654, ശുദ്ധഗതിക്കുള്ള ബുദ്ധി "intellect of a wholly pure course": part 23 renders ശുദ്ധഗതിക്കാർ "guileless" (people); here the word describes the intellect's course and "pure course" is literal. Left.
- 274 table ഒരു പേടിയും ഇല്ല "there is no dread at all" beside the panel's യാതൊരു ഭയവുമില്ല "there is no fear at all": ഭയം "fear" and പേടി "dread" are kept apart. Left.
- `part.json` verses "269-274", pages "652-662", PDF pages "481-491": correct.

## Open doubts for the reviewer

1. **DOUBTs in the text**: മക്കായിൽ ഹിജ്റഃ വന്നവരും (p. 659); തട്ടം (രണ്ടാം മുണ്ട്) (p. 660); ധന്യത "self-sufficiency" (p. 661).
2. **اهلالعقول،عقلاء** (p. 654): written joined by the gap rule, but the printed ل of اهل is a final form, so the site's joined string draws a لا ligature the book does not have. "اهل العقول،عقلاء" would show the printed letter shapes. The same question applies to every earlier "joined" pair whose first word ends in a joining letter.
3. **സൽബുദ്ധി**: "good intellect" here, "good sense" in part 45 (p. 642).
4. **പ്രതിജ്ഞ "pledge"** here beside an earlier table's "vow".
5. **പാർപ്പിടം and വാസസ്ഥലം both "dwelling-place"** across parts (not caused by this part).
6. **കാംക്ഷിക്കുക "covet"**: kept from the earlier term table; in this part's sentence the sense is "desire", and "covet" may read as blame.
7. **Khabisah**: printed ഖബീസ്വഃ; kept as printed.
8. **Earlier open doubts still apply** (not in this part): see parts 13–46.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഹിക്മത്ത് / വിജ്ഞാനം / തത്വജ്ഞാനം / യുക്തി / യുക്തിതത്വം | hikmah | hikmah / wisdom / philosophy / sagacity / sagacious principle |
| ജ്ഞാനം / അറിവ് | 'ilm | learning / knowledge (as earlier parts) |
| ബുദ്ധി / സൽബുദ്ധി / ബുദ്ധിമാൻ(മാർ) / ബുദ്ധിശാലികൾ | 'aql / ulu al-albab | intellect / good intellect (open doubt 3) / man (men) of reason / the intelligent |
| ലുബ്ബ് / അൽബാബ് | lubb / albab | lubb / albab |
| ഉറ്റാലോചിക്കുക | yadhdhakkar | reflect intently (as earlier parts) |
| തത്വം / തത്വശാസ്ത്രം | — | principle / philosophical science |
| ഭയപ്പാട് / പേടി / ഭയം | khawf | fright (as earlier parts) / dread / fear |
| നേർച്ച / പ്രതിജ്ഞ | nadhr | vow / pledge (open doubt 4) |
| ചിലവ് / ധനവ്യയം | nafaqah | expense / outlay of wealth |
| അക്രമികൾ / അക്രമം / അനീതി | zalimun / zulm | wrongdoers / wrong / injustice (as earlier parts) |
| ഗുണകരം / ഉത്തമം | khair | beneficial (correction 4) / excellent |
| ബാധ്യത / ചുമതല | — | liability / responsibility |
| പണി / പ്രവൃത്തി / ജോലി | — | task / work(s) / job |
| സൻമാർഗം / നേർമാർഗം / ദുർമാർഗം | huda / dalal | right guidance / straight way / misguidance (as earlier parts) |
| ആനുകൂല്യം | — | concession (as earlier parts) |
| സ്വകാര്യമായി / രഹസ്യമായി / പരസ്യമായി | sirr / 'alaniyah | privately / secretly / openly |
| ലക്ഷണം / അടയാളം | sima | sign / mark (as earlier parts) |
| കണക്കാക്കുക / ഗണിക്കുക / ധരിക്കുക | hasiba | reckon / deem / suppose |
| മുടക്കുക / തടഞ്ഞുവെക്കുക | uhsiru | hinder / restrain |
| ആത്മാഭിമാനം / അഭിമാനം | ta'affuf | self-respect / honour |
| ഒതുക്കം / മാന്യമായ / ആക്ഷേപകരം | — | composure / decent / reprehensible |
| മുൻഗണന / ഉപജീവനം / പാർപ്പിടം | — | preference / livelihood / dwelling-place (open doubt 5) |
| ദീൻ / സ്വഹാബികൾ / സ്വുഫ്ഫത്തുകാർ | ashab al-suffah | din / Companions / the Suffah people |
| കാംക്ഷിക്കുക / നിർബന്ധം / പുണ്യകർമം | — | covet (open doubt 6) / obligatory / meritorious deed |
| സന്തോഷവാർത്ത / അരുളിച്ചെയ്യുക / നിസ്സാരം | — | glad tidings / declare / trifling |
| ധന്യത | — | self-sufficiency (DOUBT) |
| തട്ടം (രണ്ടാം മുണ്ട്) / കരിമ്പടം (കമ്പിളി) | — | upper wrap (second cloth) (DOUBT) / coarse blanket (woollen blanket) |
| നിശ്ചയമായും | inna | surely |
