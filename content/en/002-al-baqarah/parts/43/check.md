# Check: Al-Baqarah part 43 (verses 255–257)

Checked on 2026-10-21 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 431–440 (book pp. 602–611). Each page was rendered at 150 dpi and read once in full, including the footnote on p. 610, beside the full `ml2uni` text layer. `pdftotext -bbox` was used for the vowel marks of every Arabic phrase, and blank-ink gaps were measured at 600 dpi (computed, not viewed) for every Arabic join (≥ 1.8 pt a word space, ≤ 1.44 pt joined, as the brief sets). The amanithafseer.com text was not used beyond the translator's notes on site-vs-book differences. Crops: two at 300 dpi (the p. 608 line with لَيْسَ كَمِثْلِهِ شَيْءٌ and the 112:4 phrase, for their order; the Yunus 99 line on p. 610, for its marks).
- **Boundaries.** Part 42 ends on p. 602 with "… എന്നൊക്കെ അല്ലാഹു ഓർമിപ്പിക്കുന്നു."; the verse 255 panel follows directly on the same page (no heading). This part starts there. It ends on p. 611 with "… കാലാകാല നരകശിക്ഷയും!", directly above the heading "വിഭാഗം - 35" and the verse 258 panel on the same page. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 255–257), `words.json` (63 entries: 255: 31; 256: 16; 257: 16), `commentary.md`.
- Groups: *[Verse 255]* (panel pp. 602–603, table p. 603, commentary from the foot of p. 603) | *[Verses 256–257]* (256 panel and table pp. 608–609, 257 panel and table p. 609, then one combined commentary from p. 609). Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added (apart from correction 1).
- `verses.json` and every `words.json` gloss match the images in the printed order. The table gloss of بِشَيۡءٖ is "യാതൊന്നിനെപ്പറ്റിയും" (the text layer's "ആ" before it is the ب glyph). Text-layer slips അവനത്ര, ആൾക്കാരത്ര, ശ്രഷ്ഠത, പ്രാത്സാഹിപ്പിക്കപ്പെട്ടിരിക്കുന്നതായും, കാര്യമത്ര, മെതത്തിൽ are printed correctly on the images. The 257 panel prints the first പുറത്തുകൊണ്ടുവരുന്നു joined and the second "പുറത്തുകൊണ്ടു വരുന്നു" spaced mid-line; the files follow the print. No ZWNJ is printed in these items.
- `[p. N]` markers 603–611. P. 602 holds only the end of part 42 and the start of the 255 panel, so it has no marker. [p. 603] and [p. 609] stand at the start of commentaries below the tables. Page turns: [p. 604] before "this verse is known" (… പ്രസ്താവിക്കുന്നതുകൊണ്ട് / ‘ആയത്തുൽ …); [p. 605] "of all of it *[p. 605]* the actual centre" (അതിന്റെയെല്ലാം / സാക്ഷാൽ); [p. 606] "concerning that *[p. 606]* mighty intercession" (ആ / വമ്പിച്ച); [p. 607] "opi*[p. 607]*nions" (അഭിപ്രാ/യങ്ങൾ); [p. 608] "most holy meaning *[p. 608]* only" (അർത്ഥത്തിൽ / മാത്രമേ); [p. 610] "straight *[p. 610]* path" (നേരായ / മാർഗം); [p. 611] "cre*[p. 611]*ate" (ഉണ്ടാക്കു/വാനും). Markers falling inside a Malayalam word are placed inside the English word, as parts 30–42 do ("iba*[p. 472]*dah", "say*[p. 598]*s", "every*[p. 600]*one"). All are right.
- Footnote: the p. 610 note (\*) on setting a seal has its marker after "മുദ്രവെക്കുകയും" in the Ibn Kathir paragraph that ends "… ഉദ്ധരിക്കുകയും ചെയ്തിരിക്കുന്നു."; the note follows that paragraph. Right.

## Corrections made (before → after)

### Added word

1. v. 255, `verses.json` ("അവ രണ്ടിന്റെയും സംരക്ഷണം അവനെ ഭാരപ്പെടുത്തുന്നുമില്ല."): the -ഉം is already rendered by "either"; the sentence-opening "And" had no Malayalam behind it. "And the protection of them both does not burden Him either." → "The protection of them both does not burden Him either."

### Comparison word for a plain connective

2. p. 605, "അങ്ങനെ, സ്വയം നിലകൊള്ളുന്നവനും … എന്നത്രെ സർവ്വനിയന്താവ് (الْقَيُّومُ) എന്നതുകൊണ്ട് വിവക്ഷ.": അങ്ങനെ is "thus, so", not a comparison. "Likewise, what is meant by the Controller of all …" → "Thus, what is meant by the Controller of all …".

### Same English for two Malayalam words

3. p. 611, "‘മുറിഞ്ഞ് പോകാത്ത ബലവത്തായ പിടിക്കയർ മുറുകെ പിടിച്ചു’": the English had "that does not snap off", the rendering of അറ്റുപോകൽ in the same verse; the v. 256 table renders the bracketed മുറിഞ്ഞ് "being cut". "… a strong handhold rope that does not snap off’" → "… a strong handhold rope that does not get cut off’".

### Punctuation added

4. p. 611, the meanings of وَلِى: the print has "… സഖി, ചങ്ങാതി, എന്നിങ്ങനെ സന്ദർഭോചിതം …" with no dash. "comrade *[DOUBT …]*, – in many meanings" → "comrade *[DOUBT …]*, in many meanings".

### Quran quotations: data-file form only where the print equals the verse

The rule as the earlier parts applied it: a quotation (full verse or part) stays in the `data/quran-uthmani.json` form when its printed letters and vowels equal the verse and differ only in Uthmani signs (parts 19, 23, 26–30); when the printed vowels differ, it is transcribed as printed, full verses included (part 25, corrections 4–5: 72:18 and 12:106, both full verses).

5. p. 610, Yunus 99 (a full verse), copied by the translator from the data file. The bbox and a 300 dpi crop show the print differs in vowels: no fatha on the lam of لآمَنَ (the data file has لَأٓمَنَ) and no fatha on the hamza of الأرْضِ (data ٱلۡأَرۡضِ); the words are also run together (blank ink: أَفَأَنْتَ | تُكْرِهُ 1.80 pt and يَكُونُوا | مُؤْمِنِينَ 1.92 pt are the only word spaces; every other gap ≤ 1.44 pt). Transcribed as printed: **وَلَوۡ شَآءَ رَبُّكَ لَأٓمَنَ مَن فِي ٱلۡأَرۡضِ كُلُّهُمۡ جَمِيعًا أَفَأَنتَ تُكۡرِهُ ٱلنَّاسَ حَتَّىٰ يَكُونُواْ مُؤۡمِنِينَ** → **وَلَوْشَاءَرَبُّكَلآمَنَمَنْفِيالأرْضِكُلُّهُمْجَمِيعًاأَفَأَنْتَ تُكْرِهُالنَّاسَحَتَّىيَكُونُوا مُؤْمِنِينَ**. (The translator's copy had also dropped the data file's waqf sign after جَمِيعًا.) No brackets are printed round this Arabic; none are added.
6. p. 608, Al-Ikhlas 4 (a full verse), transcribed by the translator as printed (وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ). Its printed letters and vowels equal the verse (no sukun on ن, shadda and fatha on ل, damma on ه, damma on ك and ف, fathatan on و, fatha on أ and ح, dammatan on د); the only differences are Uthmani signs (sukun shape, small waw, the iqlab form of the tanwin). As a full verse it takes the data-file form, as parts 19 and 26 did: → **وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ**.

The 18:29 phrase (p. 609) is a part of a verse and stays as printed, run together (every gap ≤ 1.32 pt) with sukun on ن of both مَنْ, as parts 40 and 41 kept run-together phrases. لَيْسَ كَمِثْلِهِ شَيْءٌ (42:11, part of a verse) equals the verse and stays as transcribed (as printed), which the rule allows.

No dropped തന്നെ/-ഉം/എന്നോണം or list items, may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced notes, translator words in round brackets, or added Arabic were found apart from the above.

## Points the caller asked about

- **(1) DOUBTs.**
  - "[ദുർമൂർത്തികളു] / മാകുന്നു;-" (257 panel): confirmed at a line end with no text-layer hyphen; written joined; -ഉം "too" with the alternative ("in turn"). Kept.
  - മിടിയിട (p. 605): clearly printed; the DOUBT gives the reading and the possible slip (ഇമയിട). Kept.
  - പാരമ്യത്യം (p. 607): clearly printed, not a known word; "dependence" with the alternative പാരമ്യം. Kept.
  - നാമവിശേഷണങ്ങൾ / ക്രിയാവിശേഷണങ്ങൾ "name-attributes / action-attributes" (p. 607): kept; the grammatical sense is given.
  - ലക്ഷ്യങ്ങൾ "evidences" (p. 610): the standing doubt of parts 01–42. Kept.
  - The quote opened before "അതിരുവിട്ടു," and never closed (p. 611): the English is not readable as printed, so the DOUBT is about the sense, not mere punctuation. Kept.
  - ചങ്ങാതി "comrade" (p. 611): മിത്രം "friend" stands in the same list (and is "friend" in parts 16 onwards), so the two need different English; part 42 had ചങ്ങാതി "friend" where മിത്രം was absent. Kept.
  - وهوالموفق والمعين وهويهدى السبيل (p. 608) and كما فى مفردات الراغب و فى القاموس (p. 611): in the established form of parts 07–42 (Arabic as printed, the likely meaning inside the DOUBT). The second names only the works the author's own Arabic names. Neither DOUBT names a source the author does not give. Kept.
  - Table gloss of ٱلۡقَيُّومُ "സ്വയം നില / കൊള്ളുന്നവൻ": split at a line end, but the text layer marks the break with a hyphen (as it does only for breaks inside a word on these pages), and p. 605 prints "സ്വയം നിലകൊള്ളുന്നവനും" joined; written joined without a DOUBT. Left.
- **(2) Full-verse quotations**: corrections 5 and 6.
- **(3) Page markers**: see "What was compared".
- **(4) Honorifics, footnote, table.** ﷺ is printed 3 times (p. 604 നബിﷺ; p. 605 നബി തിരുമേനിﷺയുടെ; p. 606 മുഹമ്മദ് തിരുമേനിﷺയോട്); the English has exactly 3, none at the bare തിരുമേനി (p. 606, three times, "the noble Prophet"). (r) is printed 9 times: Ubayy ibn Ka'b, Bukhari (p. 604), "Bukhari, Muslim (r)" once (p. 606), Ibn Kathir (p. 608), Ibn Kathir ×5 (p. 610, one of them written ഇബ്നുകഥീർ); the English has the same 9. (Mu.) once (p. 604). (a): none printed, none in the English. The p. 610 footnote is in place. 63 word-table entries.
- **(5) Arabic as printed**, from bbox marks and 600 dpi blank-ink gaps (codepoints compared):
  - آيَةُالكُرْسِى (p. 604): ة|ا ink 0.84 pt (joined; bbox 1.4 pt); damma on ة, none on ل, damma on ك, sukun on ر, kasra on س. As in the file.
  - اعظْم اية في كتاب الله (p. 604): sukun on ظ; four word spaces; Allah printed as the ﷲ ligature, kept bare as parts 32 and 35 did.
  - اللَّهُلاإِلَهَإِلاهُوَ (pp. 604, 608): every gap ≤ 1.44 pt; joined. الْحَيُّ الْقَيُّومُ: 2.04 pt, spaced. الذات المقدسة, العرش: bare.
  - لاتَأْخُذُهُسِنَةٌ وَلانَوْمٌ (p. 605): ة|و 1.80 pt (spaced), the rest joined. لَهُمَافِيالسَّمَاوَاتِ وَمَافِيالأرْضِ: ت|و 1.80 pt (spaced), the rest ≤ 1.08 pt; no fatha on the hamza. مَنْذَاالَّذِييَشْفَعُعِنْدَهُإِلابِإِذْنِهِ: largest gap 1.44 pt, joined. الشَفَاعَة الكُبْرَى: no shadda on ش, ة bare, 3.4 pt spaced.
  - يَعْلَمُمَابَيْنَأَيْدِيهِمْوَمَاخَلْفَهُمْ, وَلايُحِيطُونَبِشَيْءٍمِنْعِلْمِهِإِلابِمَاشَاءَ, وَسِعَكُرْسِيُّهُالسَّمَاوَاتِوَالأرْضَ (p. 606), وَلايَئُودُهُحِفْظُهُمَا, وَهُوَالْعَلِيُّالْعَظِيمُ (p. 607): all gaps ≤ 1.44 pt; joined. As in the file.
  - لَيْسَ كَمِثْلِهِ شَيْءٌ (p. 608): spaced; fatha on ل, sukun on ي, fatha on س; fatha on ك, kasra on م, sukun on ث, kasra on ل and ه; fatha on ش, sukun on ي, dammatan on ء. The order (this phrase, then "അവനോട് കിടയൊത്ത ഒരാളും ഇല്ല.", then the 112:4 phrase) is confirmed by bbox positions and a crop.
  - وهوالموفق والمعين وهويهدى السبيل (p. 608): وهو|الموفق 1.08 pt and وهو|يهدى below 1.0 pt (joined); الموفق|والمعين 1.92, والمعين|وهو 1.80, يهدى|السبيل 2.04 pt (spaced); يهدى with د (the site's يهذى is wrong) and final ى. As in the file.
  - قَدْتَبَيَّنَ الرُّشْدُمِنَالْغَيِّ (p. 609): 1.92 pt after تبين, the rest joined; no sukun on the ل of الرشد. فَمَنْشَاءَفَلْيُؤْمِنْوَمَنْشَاءَفَلْيَكْفُرْ: joined. لاإِكْرَاهَفِيالدِّينِ (p. 610): joined. الدِّين, طَّاغُوت, طَغَى, كما فى مفردات الراغب و فى القاموس (spaced), وَلِى, اَوْلِيَاء (p. 611): as in the file.
- **(6) Terms**, checked by grep against earlier word tables and check.md term tables:
  - Names of Allah in 255: no earlier part renders الحي, القيوم, العلي or العظيم, and the glossary has no entry; the renderings are new and used consistently (panel, table and commentary): ജീവത്തായുള്ളവൻ "the One who is living", ജീവിച്ചിരിക്കുന്നവൻ "One who is alive", സർവ്വ(-)നിയന്താവ് "the Controller of all", സ്വയം നിലകൊള്ളുന്നവൻ "One who subsists by Himself", ഉന്നതൻ "the Exalted", മഹത്തായുള്ളവൻ "the One who is great", മഹാൻ "the Great" / "great" (as മഹാൻമാർ "great men" in the earlier term table).
  - As earlier parts: രക്ഷാധികാരി / ബന്ധു / മിത്രം "guardian / kinsman / friend" and സഹായകൻ "helper" (parts 16 onwards); കൈകാര്യകർത്താവ് "manager of the affairs", കൈകാര്യക്കാർ "managers" (part 38); ദുർമാർഗം / നേർമാർഗം / നേർവഴി / സൻമാർഗം "misguidance / the straight way / the right path / right guidance"; ശ്രേഷ്ഠത "superiority"; ആഭിചാരികൾ "sorcerers"; ആചാരം "custom", അനുഷ്ഠാനം "practice" (part 27); അനുവാദം / അനുമതി "leave / permission"; മഹാൻമാർ "great men"; ലക്ഷ്യം "evidence" (standing DOUBT).
  - Checked and left (open doubts 3–6): ഗുണവിശേഷങ്ങൾ "distinctive qualities", ജീവൻ "life-force", രക്ഷ "salvation", വലിയവൻ "great".

## Checked and left as they are

- p. 605, "it does not intend, in the ordinary meaning- a life": mirrors the printed dash after "സാധാരണ അർത്ഥത്തിലുള്ള-". Left.
- p. 604, the missing full stop after "അവന്റെ ജീവിതം" ("… foreign to it In other words"), p. 611 "… way of salvation The plural …", the unclosed ‘കുർസിയ്യി (p. 607), the stray opening ‘ before "തുടർന്നുകൊണ്ട്" (p. 610), no stop before the (9) Arabic and a comma before the (10) Arabic (p. 607): mirrored as printed. Left.
- p. 611, "طَّاغُوت (താഗൂത്ത്)": the print has ത, not ത്വ, inside the bracket; the English "(Taghut)" uses the same letters the project uses for ത്വാഗൂത്ത്, so nothing is corrected or lost. Left without a TN.
- p. 610, "സൂ: യൂനുസ് 99" → "Su: Yunus 99": the printed colon is kept (earlier parts have "Su." where the book prints a stop).
- `part.json` verses "255-257", pages "602-611", PDF pages "431-440": correct.

## Open doubts for the reviewer

1. **DOUBTs in the text**: the 257 panel line-end split and its -ഉം; മിടിയിട; പാരമ്യത്യം; നാമവിശേഷണങ്ങൾ / ക്രിയാവിശേഷണങ്ങൾ; ലക്ഷ്യങ്ങൾ "evidences"; the unclosed quote before അതിരുവിട്ടു; ചങ്ങാതി "comrade"; the two Arabic phrases printed without a Malayalam rendering.
2. **Quran quotations**: Yunus 99 now as printed (correction 5) and Al-Ikhlas 4 now in the data-file form (correction 6). `npm run check` now lists Yunus 99 among the "close but not exact" items (14 for Al-Baqarah: the 13 known ones and this one, 96% same letters), as expected for a quotation transcribed as printed.
3. **ഗുണവിശേഷങ്ങൾ "distinctive qualities"** (pp. 603, 605, 607): part 25 rendered it "attributes" (and ഗുണങ്ങൾ "attributes" too); part 33 has ഗുണ വിശേഷണങ്ങൾ "qualities and attributes". Here വിശേഷണങ്ങൾ is "attributes" in the same paragraph, so "attributes" for ഗുണവിശേഷങ്ങൾ would merge two words. Left.
4. **ജീവൻ "life-force"** (p. 604): the author lists ജീവൻ, ജീവസ്സ്, ജീവിതം as three words, so they need three renderings; earlier parts render both ജീവൻ and ജീവിതം "life" (part 27, open doubt 6).
5. **രക്ഷ "salvation"** (pp. 610–611): part 10's term table has രക്ഷ "deliverance" / മോക്ഷം "salvation"; part 21 used both for രക്ഷ by context ("salvation" for രക്ഷ കിട്ടുകയില്ല). Left.
6. **വലിയവനാണ് "is great"** (p. 607) beside മഹാൻ / മഹത്തായുള്ളവൻ "great": earlier tables render വലിയ both "great" (a great matter) and "big". Left for the reviewer.
7. **Earlier open doubts still apply** (not in this part): see parts 13–42.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ജീവത്തായുള്ളവൻ / ജീവിച്ചിരിക്കുന്നവൻ | al-hayy | the One who is living / One who is alive |
| സർവ്വ(-)നിയന്താവ് / സ്വയം നിലകൊള്ളുന്നവൻ | al-qayyum | the Controller of all / One who subsists by Himself |
| ഉന്നതൻ / മഹത്തായുള്ളവൻ / മഹാൻ | al-'aliyy / al-'azim | the Exalted / the One who is great / the Great |
| സ്വയംഭൂ | — | self-existent |
| പരിശുദ്ധ സത്ത | al-dhat al-muqaddasah | holy Essence |
| മയക്കം / ഉറക്കം / നിദ്ര | sinah / nawm | drowsiness / sleep / slumber |
| കുർസിയ്യ് / ആയത്തുൽ കുർസിയ്യ് | kursiyy | Kursiyy / Ayatul Kursiyy |
| രാജപീഠം / പീഠം / ഇരിപ്പിടം | — | royal seat / seat / sitting-place |
| സിംഹാസനം / അർശ് | 'arsh | throne / 'Arsh |
| സംരക്ഷണം / സൂക്ഷിക്കൽ / കാക്കൽ / ഭാരപ്പെടുത്തുക | hifz / ya'uduhu | protection / keeping / watching over / burden |
| നിർബന്ധം / ബലാൽക്കാരം / വഴികേട് | ikrah / ghayy | compulsion / coercion / going astray |
| ത്വാഗൂത്ത് / ദുർമൂർത്തി | taghut | Taghut / evil deity |
| ചെകുത്താൻ / ദുർഭൂതങ്ങൾ / സ്വേച്ഛാധിപതി / പ്രശ്നക്കാർ | — | fiend / evil spirits / despot / soothsayers |
| ആരാധ്യവസ്തുക്കൾ | — | worshipped things |
| കാര്യകർത്താക്കൾ / രക്ഷാകർത്താവ് / സഹായി | — | stewards / custodian / aider |
| സഖി / അയൽക്കാരൻ / ചങ്ങാതി | — | confidant / neighbour / comrade (DOUBT) |
| വലിയ്യ് / ഔലിയാഉ് | waliyy / awliya' | waliyy / awliya' |
| അന്ധകാരം / പ്രകാശം | zulumat / nur | darkness(es) / light |
| ജീവിതം / ജീവൻ / ജീവസ്സ് | — | life / life-force / vitality (open doubt 4) |
| ഗുണവിശേഷങ്ങൾ / മഹൽഗുണങ്ങൾ | — | distinctive qualities / noble qualities (open doubt 3) |
| നാമവിശേഷണങ്ങൾ / ക്രിയാവിശേഷണങ്ങൾ | — | name-attributes / action-attributes (DOUBT) |
| പിടിക്കയർ / പിടിബന്ധം | 'urwah | handhold rope / handhold bond |
| അറ്റുപോകൽ / മുറിഞ്ഞ് പോകുക | infisam | snapping off / get cut off (correction 3) |
| രക്ഷ / രക്ഷാമാർഗം | — | salvation / way of salvation (open doubt 5) |
| കാലാകാല | — | perpetual |
| മുദ്രാവാക്യം / ഉരുവിടുക | — | watchword / repeat |
| മഹ്ശർ / സലഫുസ്സ്വാലിഹ് | mahshar / al-salaf al-salih | Mahshar / Salafussalih |
| കപ്പം / ആചാരാനുഷ്ഠാനങ്ങൾ | — | tribute / customs and practices |
| അന്തർ ദൃഷ്ടി / ആന്തരേന്ദ്രിയങ്ങൾ | — | inner sight / inner senses |
| ഔന്നത്യം / മഹത്വം | — | loftiness / greatness |
| ഭരണാധിപത്യം / ഭരണാധികാരം | — | ruling sovereignty / ruling authority |
| ലോകാലോകങ്ങൾ / മഹച്ഛക്തി / യന്ത്രവാഹനം | — | worlds upon worlds / great power / motor vehicle |
| ഉപമാലങ്കാരവാക്ക് | — | word of simile |
| 1-ാമതായി | — | 1stly |
