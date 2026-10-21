# Check: Al-Baqarah part 45 (verse 260)

Checked on 2026-10-21 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 450–471 (book pp. 621–642). Each page was rendered at 150 dpi and read once in full, including the footnotes (pp. 625, 632, 634, 636, 638, 639), beside the full `ml2uni` text layer. `pdftotext -bbox` was used for the vowel marks of the Arabic, and blank-ink gaps were measured at 600 dpi (computed, not viewed). The amanithafseer.com text was not used beyond the translator's notes on site-vs-book differences. Crops: three (p. 625, the (രണ്ട്) Arabic line at 300 dpi; p. 634, الله|بعد in the 2:259 phrase at 600 dpi; p. 641, the 2:260 phrase at 400 dpi).
- **Boundaries.** Part 44 ends on p. 621 with "… അടുത്ത വചനത്തിൽ പ്രസ്താവിക്കുന്നത്:-"; the verse 260 panel follows directly on the same page (no heading). This part starts there. It ends on p. 642 with "… നൽകി അനുഗ്രഹിക്കട്ടെ. ആമീൻ.", the last text on the page; p. 643 (PDF p. 472) opens with the heading "വിഭാഗം - 36" and the verse 261 panel (checked in the text layer). Both boundaries are confirmed.
- `part.json`, `verses.json` (verse 260), `words.json` (25 entries), `commentary.md`.
- One group: *[Verse 260]* (panel pp. 621–622, table p. 622, commentary pp. 623–642, with the heading on p. 628). P. 622 holds only the panel and the table, so the commentary starts at *[p. 623]*; no marker is needed for p. 622 (as parts 42–44 treat pages with only panels and tables).
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The paragraph breaks the site merges are printed in the book and are kept: "ഈ പ്രസ്താവനയും തന്നെ, …" (p. 633), "(അവർ തുടരുന്നു:)" (p. 637), the "‘ജുസ്ഉ് …" paragraph after (5thly) (p. 640), and the last three paragraphs on p. 642.
- `verses.json` and every `words.json` gloss match the images in the printed order (panel ഇല്ലാതെ, table ഇല്ലാതേ (ഉണ്ട്); table "… വശീകരി/ക്കുക, ക്ഷണിച്ചെടുക്കുക" at a line end, written joined). No ZWNJ is printed in these items.
- `[p. N]` markers 623–642, all at the right places (page turns inside a word are placed inside the English word, as parts 30–44 do).
- Footnotes: p. 625 (تضمين) after the (One) paragraph; p. 632 (Ibn Jarir's Arabic not quoted) after the Ibn Jarir paragraph; p. 634 (A'raf 143, ending إن شاء الله) after the paragraph with (2:55; 4:153; 7:143); p. 636 (the moon) after Rashid Rida's paragraph; p. 638 (Razi's Arabic) after the paragraph that ends on p. 639 "(Imam Zamakhshari … Mutakallims.)"; p. 639 (Fath al-Bari Arabic) after the 'Asqalani paragraph. All right.
- Honorifics: ﷺ printed 5 times (p. 623 നബി തിരുമേനിﷺക്ക്; p. 637 നബിﷺയെ, നബിﷺയുടെ; p. 638 നബിﷺയുടെ, നബിﷺയെ); the English has exactly 5, none at the bare തിരുമേനി on p. 638 ("the noble Prophet's speaking"). (a) printed 35 times, (r) 46 times; the English has 35 and 46, page by page (the p. 638 footnote's (r) sits after the p. 639 paragraph, as its note does). Bold labels (1stly:-), (2ndly:-), (3rdly:) … (7thly:) and the panel labels (One), (Two:), (Three:) are bold as printed.

## Corrections made (before → after)

### Sentence order

1. p. 623, "… ചങ്ങാതിയാക്കിയിരിക്കുന്നു. ( … ) എന്നും, … കാണിച്ചുകൊടുത്തിരുന്നു. … എന്നുമുള്ള രണ്ട് വചനങ്ങൾ മാത്രം മതി, …": the English had moved "Only" to the front. "Only the two verses, that Allah has made him … , are enough, …" → "The two verses, that Allah has made him … , alone are enough, …".

### Same English for two Malayalam words; renderings brought into line

2. p. 628, നയതന്ത്രങ്ങളും: "using many tactics" → "using many diplomacies" (the same word is "diplomacies" on pp. 635 and 637).
3. p. 628, അംഗീകരിച്ചു വരുന്ന: "have generally been accepting" → "have generally been acknowledging" (സ്വീകരിക്കുക is "accept" throughout this part; അംഗീകാരം / അംഗീകരിക്കുക are "acknowledgement / acknowledge" on pp. 641–642).
4. p. 628, നിരാശനായി: "having become despondent" → "having become despairing" (p. 635 നിരാശനായിട്ടാണ് "having become despairing"; p. 628 നിരാശപ്പെടേണ്ടതില്ല "no need to despair").
5. p. 634, തൗറാത്ത്: "receive the Tawrah" → "receive the Tawrat" (parts 01, 21, 26, 41, 44).
6. p. 635, പുനഃരുത്ഥാന സമ്പ്രദായം: "the procedure of resurrection" → "the method of resurrection" (സമ്പ്രദായം is "method" on p. 633, and നടപടി സമ്പ്രദായം "procedural method").
7. p. 624, നിഷ്പക്ഷ ബുദ്ധിയോടും: "with impartial reason" → "with impartial intellect" (ബുദ്ധി is "intellect" on pp. 635, 636, 639, and "reason" is this part's word for കാരണം).

### Added pronoun

8. p. 630, "… കൂട്ടിക്കൊണ്ടുവരുവാൻ കൂടി കൽപിച്ചതിന് കാരണമായി": no subject is printed. "as the reason for His having commanded" → "as the reason for having commanded".

### Added word

9. p. 638, "ആ ജനതയാണെങ്കിൽ ഇബ്റാഹീം (അ)ന്റെ സന്തതികളും …": -ആണെങ്കിൽ is "as for", not "moreover". "That people, moreover, are both the progeny …" → "As for that people, they are both the progeny …".

### Punctuation as printed

10. p. 638, Razi's words "… സാരം ഞാനത് … വേണ്ടിയാണ്’ എന്നുമാകുന്നു": the print has the closing quote only. "is ‘I have believed it …" → "is I have believed it …".
11. p. 633, "ചെയ്തത് .... ’": "give him life …. ’" → "give him life .... ’".
12. p. 625, the bold label "(ഒന്ന്):": "**(One)**:" → "**(One):**" (as "**(Two):**").

### DOUBTs

13. p. 624, the reply ‘അല്ലാഹുവേ, ഇല്ലാതേ!’: the image (and the text layer) print ഇല്ലാതേ, not ഇല്ലാതെ. "*[DOUBT: ഇല്ലാതെ is literally “without”; …]*" → "*[DOUBT: ഇല്ലാതേ (printed so here; ഇല്ലാതെ in the verse panel) is literally “without”; …]*".
14. p. 638, "ലക്ഷ്യം മുഖേന ലഭിക്കുന്ന അറിവിൽ": the standing doubt of parts 01–44 was missing. Added after "knowledge obtained through evidence": "*[DOUBT: ലക്ഷ്യം usually means “aim”; with “knowledge obtained through” it is taken in its older sense “evidence”, as in parts 42–44. The option is “aim”.]*".
15. p. 639, the Arabic footnote (ونص عباته …): brought into the established form of parts 07–44 (Arabic as printed, likely meaning inside the DOUBT). "*[DOUBT: this Arabic footnote is printed without a Malayalam rendering and is transcribed as printed, including the spellings عباته and ان سأل, which may be printing slips. Its first part matches the words of 'Asqalani quoted in the text above; the rest is a reference to Fath al-Bari, the sixth part.]*" → "*[DOUBT: the Arabic is printed without a Malayalam rendering and is transcribed as printed (with عباته and ان سأل as printed). It most likely means: “His wording is: And farther than it is what Qurtubi the commentator reported from some Sufis, that he asked his Lord to show him how He gives life to the hearts, etc. See Fath al-Bari, the sixth part, chapter of His saying: And inform them about the guests of Ibrahim, etc.”]*".

### Grammar

16. p. 642, "ഇവർ തന്നെ സമ്മതിക്കുന്ന പല മഹാൻമാരും വ്യക്തമാക്കിയത്": "many great men whom these themselves agree to have made clear both that …" → "many great men to whom these themselves agree have made clear both that …".

No dropped തന്നെ/-ഉം/എന്നോണം or list items, may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, silently corrected names or misprints, misplaced notes, translator words in round brackets, or added Arabic were found apart from the above.

## Points the caller asked about

- **(1) DOUBTs.**
  - ഇല്ലാതെ "Not without!" (panel), ഇല്ലാതേ (ഉണ്ട്) (table) and ഇല്ലാതേ (p. 624): the same rendering and doubt as parts 13 and 16 (verified by grep). Kept; the p. 624 wording corrected (13).
  - اضمعهن / اضعمهن (p. 625): both printed so (the list has اضمعهن; the gloss line has اضعمهن, its alif standing apart). The DOUBT gives اضممهن as a possible word from the author's own p. 632 (اضممهن "join together"), not from an outside source. Kept.
  - Baidawi's Arabic (p. 630): printed "إليك (فصرهن إليك)فأملهن" at the right end of the line, "واضممهن" opening the next line; the DOUBT explains the reading order from the page layout only and gives the likely meaning. Kept.
  - മനക്കുകയും (p. 630): clearly printed (image and text layer). Kept.
  - راجع فتح الباري … الخ (p. 632): in the established form. Kept.
  - ولى (p. 636, the hadith): clearly printed; the DOUBT rests on the author's own rendering "അർഹരാണ്". Kept.
  - p. 639 footnote: corrected to the established form (15).
  - None of the DOUBTs names a source the author does not give.
- **(2) TNs.**
  - മബുസ്സുഊദ് (p. 630): printed so (image and text layer); the TN states only what is printed and the book's own spelling അബുസ്സുഊദ് on pp. 629 and 630. Rendering "Mabus-Su'ud" keeps the print and the TN prevents a silent correction. Kept.
  - بقطهعن (p. 631): printed so; the TN states the printed Arabic and the printed Malayalam rendering (قطعهن) beside it. Kept.
  - بالضم والفتح (p. 632) after ‘ഉ’ കാരത്തിലോ ‘ഇ’ കാരത്തിലോ: the TN states only the printed Arabic and the printed Malayalam. Kept.
  - None rests on outside knowledge (part 44 lesson).
- **(3) Quran phrases.** `npm run check` lists 21 Al-Baqarah "close but not exact" items: the 17 from earlier parts (the 13 known ones, part 43's Yunus 99 and part 44's three) and this part's four. My edits add none.
  - ثُمَّ اجْعَلْ عَلَى كُلِّ جَبَلٍ مِنْهُنَّ جُزْءًا (p. 625): marks from bbox (damma and shadda+fatha on ثم; sukun on ج and ل of اجعل, fatha on ع; fatha on ع and ل of على; damma on ك, shadda+kasra on ل of كل; fatha on ج, ب, kasratan on ل; kasra only on م of منهن (no shadda), sukun on ن, damma on ه, shadda+fatha on ن; damma on ج, sukun on ز, fathatan). Part of 2:260 transcribed as printed. Joins: blank ink 0.6–1.0 pt between several words, but the 300 dpi crop shows a visible gap between every word; spaced as the translator had (see open doubt 2).
  - على كُلّ جبل (p. 626): bare except damma and shadda on كل; spaced. As printed.
  - فصر هن أي:أملهن … (p. 631, Raghib): not Quran; transcribed as printed (فصر هن spaced).
  - اجْعَلْ عَلَى كُلِّ جَبَلٍمِنْهُنَّجُزْءًا (p. 641): marks as on p. 625 (kasra only on م; no mark on the first alif). The 400 dpi crop shows visible gaps after اجعل, على and كل, and جبل|منهن|جزءا touching or nearly so; kept as the translator had (open doubt 2).
  - No full verse is quoted: 4:125 phrase (printed "النسآء: ١٣٥"; the printed reference is kept without a note, as part 44 ruled), 6:75 phrase (the verse continues), 2:259 phrase أَنَّى يُحْيِي هَذِهِ اللَّهُ بَعْدَ مَوْتِهَا (p. 634; the 600 dpi crop confirms the space between اللهُ and بَعْدَ, which the 0.96 pt body-band ink gap would have hidden: the damma's tail closes it), 7:143 and 2:259 phrases (pp. 634, 635), 21:68, 37:97 and 15:44 (references only, no Arabic).
- **(4) Markers, counts, layout.** See "What was compared". 25 word-table entries. Unmatched brackets and quotes kept as printed: the opening ‘ before ഇബ്റാഹീം നബി (p. 628), "(ഫസ്വുർഹുന്ന ഇലൈക’)" (p. 629), "(‘സ്വർഹുന്ന" (p. 631), Ibn Jarir's closing ’ (p. 632), ‘സൂക്ഷ്മ ചിന്തകൻമാരായ and ‘സംശയത്തിന് (p. 633), ‘എന്റെ റബ്ബേ … with no closing quote (p. 634), ‘സൂഫിസം and "(തുടർന്നുകൊണ്ട് …" (p. 639), the lone ")" after സ്പർശിക്കുന്നുമുണ്ട് (p. 640), "صر هن എന്ന വാക്കിന്)" (p. 642), and Razi's quote (correction 10).
- **(5) Arabic joins.** See (3). عطفتفسير (p. 629) and أنالمراد (p. 638 footnote) joined as printed; the graphic اللّه اعلم (p. 627) and إن شاء الله (pp. 629, 634) kept bare, as parts 39–44.
- **(6) Terms**, checked by grep against earlier word tables and check.md term tables: ഉപമ "parable" (earlier table), ചെപ്പടിവിദ്യ "sleight of hand" (part 13 table), യോഗ്യത "worthiness" and ശ്രേഷ്ഠത "superiority" (earlier table), പിൻബലം / പിൻതുണ "support / backing" (earlier table), സന്തതി "progeny" (earlier table), മഹാനുഭാവൻ "great personage" and പ്രവാചകവര്യൻ "eminent prophet" (earlier table), കൃത്രിമം "artifice" (earlier table), വർഷം / കൊല്ലം "years" (part 44, open doubt 4 there), Zamakhshari for both സമഖ്ശരീ and സമക്ശരീ (the same name in two spellings). Corrections 2–7 above. ന്യായം: here "justification / justified" in every place (pp. 626, 630, 634, 638, 640, 641); part 44's "justice" stood beside "truth" ("സത്യത്തിന്റെയും ന്യായത്തിന്റെയും"), a different sense, so the two parts do not conflict; see open doubt 5.

## Checked and left as they are

- "– that is the import" for "എന്ന് താൽപര്യം" (pp. 624, 626) and "– that indeed is it" (p. 627): the dash follows parts 41–42's rendering of the same formula. Left.
- p. 625, "A translation in Malayalam may be given: to the word …": the English brings "may be given" forward inside one sentence; nothing is moved between sentences. Left.
- p. 628, "if man can do this, he can surely give life …": the dative മനുഷ്യന് governs both കഴിയും. Left.
- p. 633, "both rejecting it and understanding the reason for it" (മനസ്സിലാക്കുകയും): literal. Left.
- `part.json` verses "260", pages "621-642", PDF pages "450-471": correct.

## Open doubts for the reviewer

1. **DOUBTs in the text**: ഇല്ലാതെ / ഇല്ലാതേ (panel, table, p. 624); اضمعهن / اضعمهن (p. 625); Baidawi's word order (p. 630); മനക്കുകയും (p. 630); راجع فتح الباري (p. 632); ولى (p. 636); ലക്ഷ്യം "evidence" (p. 638); the p. 639 Arabic footnote.
2. **Arabic joins in the 2:260 phrase** (pp. 625 and 641): the blank-ink gaps on the two lines are much alike (p. 625: 0.96 / 0.72 / 0.60 / 0.72 / 0.96 pt; p. 641: 0 / 1.56 / 1.20 / 0.60 / 0 pt), and marks or tails close several of them, but the crops show every word spaced on p. 625 and جبل|منهن|جزءا run together on p. 641. Both are kept as the crops show; the reviewer may want one look at both lines.
3. **TNs**: Mabus-Su'ud (p. 630), بقطهعن (p. 631), والفتح (p. 632).
4. **സ്നേഹിതൻ "companion"** (p. 639): earlier word tables use "companions" for കൂട്ടുകാർ, and "Companions" (capital) is സ്വഹാബികൾ; ചങ്ങാതി is "friend" on p. 623. Left; the reviewer may prefer another word.
5. **ന്യായം**: "justification" here, "justice" (with a DOUBT) in part 44 beside "truth".
6. **നാഥാ! "Lord!"** (p. 635, in the opponents' words) beside രക്ഷിതാവേ "My Lord" (p. 623; glossary: രക്ഷിതാവ് "Lord"). "Master" is this part's word for യജമാനൻ (p. 636), so no other word was free. Left.
7. **ബുദ്ധി "intellect"** (correction 7): earlier parts render ബുദ്ധി "reason" (ബുദ്ധികൊടുക്കുക "use reason", ബുദ്ധിമാൻമാർ "men of reason"); in this part "reason" is needed for കാരണം. സൽബുദ്ധി "good sense" (p. 642). ‘ബുദ്ധിജീവി’കൾ "‘intellectual’s" (p. 629) beside part 06's "rational beings" (a different context).
8. **അംഗീകരിക്കുക "acknowledge"** (correction 3): part 13 rendered the same phrase (അംഗീകരിച്ചുവരുന്ന) "have been accepting".
9. **Earlier open doubts still apply** (not in this part): see parts 13–44.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ദർശനം / വെളിപാട് / കാഴ്ചപ്പാട് | mukashafat / tajalli | beholding / disclosure / vision |
| ഗോപ്യാർത്ഥം / സൂചനാർത്ഥം | ishara | esoteric meaning / sense of allusion |
| ഉപമ | mathal | parable (as earlier parts) |
| സംശയനിവൃത്തി / സംശയനിവാരണം | — | removal of doubt / dispelling of doubt |
| അസ്വാസ്ഥ്യം / അസ്വാസ്ഥ്യത / അസ്വസ്ഥൻ | — | disquiet / disquietude / disquieted |
| സമാധാനമടയുക / സമാധാനപ്പെടുക / സമാധാനിക്കുക / മനസ്സമാധാനം | itminan | become at peace / be set at peace / be at peace / peace of mind |
| പുനഃരുത്ഥാനം | ba'th | resurrection |
| നയതന്ത്രം | — | diplomacy (correction 2) |
| ചെപ്പടിവിദ്യ | — | sleight of hand (as part 13) |
| യോഗ്യത / ശ്രേഷ്ഠത | — | worthiness / superiority (as earlier parts) |
| മഹാനുഭാവൻ / പ്രവാചകവര്യൻ | — | great personage / eminent prophet (as earlier parts) |
| തിരുമേനി | — | the noble Prophet |
| പിതാമഹൻ / സന്തതികൾ | — | forefather / progeny |
| പിൻബലം / പിൻതുണ | — | support / backing (as earlier parts) |
| ന്യായം / ന്യായീകരിക്കുക / നീതീകരണം | — | justification / justify / vindication (open doubt 5) |
| മതിയാക്കുക | — | leave it at |
| ഭാഷ്യം / വ്യാഖ്യാനം / ദുർവ്യാഖ്യാനം | — | exposition / interpretation / misinterpretation |
| ഇണക്കുക / ഇണക്കം / പിണക്കം / മെരുക്കുക / വശപ്പെടുത്തുക | amil | domesticate / domestication / estrangement / break in / tame |
| സ്നേഹിതൻ | — | companion (open doubt 4) |
| ആധുനികപ്രിയൻ / പുരോഗമനാശയക്കാർ | — | modernity-lover / ‘progressive-idea’ people |
| കമ്പിസന്ദേശം | — | telegraph |
| ഉള്ളുകള്ളി / ഒളിച്ചുകളി | — | inside story / hide-and-seek |
| അംഗീകരിക്കുക / അംഗീകാരം / സമ്മതിക്കുക | — | acknowledge / acknowledgement / agree (correction 3; open doubt 8) |
| സ്വീകരിക്കുക | — | accept |
| ബുദ്ധി / സൽബുദ്ധി / ‘ബുദ്ധിജീവി’കൾ | 'aql | intellect / good sense / ‘intellectual’s (correction 7; open doubt 7) |
| കൃത്രിമം / പൊള്ളത്തരം | — | artifice (as earlier parts) / hollowness |
| വർഷം / കൊല്ലം | — | years / years (as part 44) |
| സമ്പ്രദായം / നടപടി സമ്പ്രദായം | sunnah | method / procedural method (correction 6) |
| അവ്യയം / സകർമകക്രിയ / ശാസനാരൂപം | harf / muta'addi | particle / transitive verb / imperative form |
| ധാതു / പര്യായപദങ്ങൾ | — | root / synonyms |
| അറബി സാഹിത്യശാസ്ത്രം | 'ilm al-balaghah | Arabic literary science |
| മുതകല്ലിമുകൾ / തസവ്വുഫ് / സൂഫിസം | — | Mutakallims / tasawwuf / Sufism |
| അമാനുഷിക ദൃഷ്ടാന്തങ്ങൾ | mu'jizat | superhuman signs |
| ഉറപ്പായ അറിവ് / ഉറപ്പായ അനുഭവം / അനിവാര്യമായ അറിവ് | 'ilm al-yaqin / 'ayn al-yaqin / al-'ilm al-daruri | certain knowledge / certain experience / necessary knowledge |
| ജുസ്ഉ് / അംശം | juz' | juz' / portion |
| സ്വുർ / സ്വിർ / അമിൽ | sur / sir / amil | sur / sir / amil |
| Zamakhshari | — | for both സമഖ്ശരീ and സമക്ശരീ |
