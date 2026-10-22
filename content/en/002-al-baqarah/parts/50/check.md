# Check: Al-Baqarah part 50 (verses 282–283)

Checked on 2026-10-22 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 506–516 (book pp. 677–687). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer (this part has no footnotes). `pdftotext -bbox` was used for the vowel marks and word boxes of every Arabic phrase in the commentary, and the raw legacy-font glyphs were read where a letter mattered. No crops were needed. The amanithafseer.com text was used only through the translator's notes on site-vs-book differences.
- **Boundaries.** Part 49 ends on p. 676 with "… ചില രിവായത്തുകളിൽ വന്നിരിക്കുന്നു. اللّه اعلم"; p. 677 opens with the heading "വിഭാഗം - 39" and the verse 282 panel. This part starts there. It ends on p. 687 with "… അവസാനം അല്ലാഹു താക്കീത് ചെയ്യുന്നു.", the first two lines of the page, directly above the heading "വിഭാഗം - 40" and the verse 284 panel. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 282–283), `words.json` (107 entries: 282: 85; 283: 22), `commentary.md`.
- Groups: "### Section – 39" (added, correction 1) | *[Verse 282]* (panel pp. 677–679, table pp. 677–680, commentary pp. 680–685) | *[Verse 283]* (panel and table p. 685, commentary pp. 686–687). Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images in the printed order. Spot-checks against text-layer tokens: the 282 panel "അവധി / വരേക്ക്" is a line break with no hyphen token (the layer marks or joins words broken inside a line), so "അവധി വരേക്ക്" stays spaced; "പഠിപ്പിച്ചു കൊടുത്തതുപോലെ", "പറഞ്ഞു കൊടുക്കുവാൻ", "നീതി പൂർവ്വകമായതും" and "അടുപ്പ [സൗകര്യ]മായതുമാകുന്നു" are spaced, "പറഞ്ഞുകൊടുക്കുകയും", "പറഞ്ഞുകൊടുത്തുകൊള്ളട്ടെ", "അതിൽനിന്ന്", "നിങ്ങളുടെമേൽ" and "പഠിപ്പിച്ചുതരുകയാണ്" are joined, as printed. The 282 panel's മറ്റെവളെ: the raw glyphs (`asÄ-hsf`) carry the െ sign before റ്റ, so മറ്റെവളെ is printed; kept (the table has മറ്റേവളെ, also as printed). കടബാദ്ധ്യത (panel, table entry 19) and കടബാധ്യത (table entry 26) are both printed so. No ZWNJ is printed in these items or in the files.
- `[p. N]` markers 680–687. Pp. 677–679 hold only the heading, the 282 panel and the table, so they have no marker (as parts 42–49). [p. 680] stands at the start of the commentary below the table; [p. 684] at "(13)"; [p. 686] at the start of the 283 commentary. Page turns: "the deal *[p. 681]* becoming invalid" (ഇടപാട് / സാധുവല്ലാതാകുകയോ; correction 3), "one who lives abroad *[p. 682]* all of these" (… താമസിക്കുന്നവൻ / ഇവർക്കെല്ലാം), "re*[p. 683]*fuse" (വിസമ്മ/തിച്ചുകൂടാത്തതാകുന്നു), "towards *[p. 685]* them" (അവ/രുടെ; correction 9), "all of them *[p. 687]* Allah will know" (എല്ലാം / അല്ലാഹു അറിയുമെന്നും). All are right.
- Honorifics: ﷺ printed 3 times (p. 682 നബിﷺ സ്ത്രീകളോട്; p. 685 നബിﷺ ഒരു സന്ദർഭത്തിൽ; p. 686 നബി തിരുമേനിﷺ); the English has 3, none at the bare തിരുമേനി (p. 682 twice, "the noble Prophet") or the bare നബി in നബിവചനം (p. 683 twice, p. 686: "a saying of the Prophet", "the sayings of the Prophet"). (r) and (a): none printed, none in the English.

## Corrections made (before → after)

### Heading dropped

1. `commentary.md`: the heading "വിഭാഗം - 39" printed above the 282 panel (p. 677) had no heading in the file. Parts 34, 44 and 46, which also begin at a section heading, open with it. Added "### Section – 39" before *[Verse 282]*.

### Word order changed

2. v. 282, `verses.json`, "ചെറുതാകട്ടെ, വലുതാകട്ടെ അത് അതിന്റെ അവധിവരെ എഴുതിവെക്കുവാൻ നിങ്ങൾ മടിക്കുകയും ചെയ്യരുത്.": the "be it small, be it big" clause stands first. "And do not be reluctant to write it down until its term, be it small, be it big." → "And, be it small, be it big, do not be reluctant to write it down until its term."

### Misplaced page marker

3. p. 680–681, (1): the page turns after "ഇടപാട്" ("… ശിക്ഷക്ക് വിധേയമാകുകയോ, ഇടപാട് / സാധുവല്ലാതാകുകയോ"), not after "അഥവാ". "Or, *[p. 681]* that, only because … or the deal becoming invalid" → "Or, that, only because … or the deal *[p. 681]* becoming invalid".

### Added pronoun

4. p. 681, (3), "എഴുത്തുകാരനോടും സാക്ഷിയോടും ഉപദ്രവം കാണിക്കരുത് എന്ന് അല്ലാഹു പറഞ്ഞിട്ടുണ്ടല്ലോ": no subject is printed. "that you must not show harm both to the writer and to the witness" → "that harm must not be shown both to the writer and to the witness".

### Renderings brought into line with earlier parts / one English per Malayalam word

5. p. 680, (1), "നിയമപരമായ ഒരു നിർബന്ധം- നിബന്ധന-": earlier term tables give നിർബന്ധം "obligation" / "obligatory" ("compulsion" only for ikrah in 2:256, "no compulsion in religion"), and this part itself has നിർബന്ധമായിത്തീരുന്നതാണ് "it will become obligatory" (p. 681). "a legal compulsion- stipulation-" → "a legal obligation- stipulation-". (നിർബന്ധിക്കുക on p. 684 stays "compelling".)
6. p. 681, (4), ഏറ്റുപറയൽ: an earlier term table has ഏറ്റുപറയുക "acknowledge" (aqrartum). "an avowal that he takes up that liability" → "an acknowledgement that he takes up that liability".
7. p. 683, (11), "ഇടപാടിലെ വല്ല വ്യവസ്ഥയെ സംബന്ധിച്ചോ": "provision" is the earlier parts' word for ആഹാരം (rizq). "concerning some provision in the deal" → "concerning some arrangement in the deal" ("arrangement" is not used for another word in earlier term tables).
8. p. 681, (2), "ഇടപാടിന്റെ സ്വഭാവവും നിശ്ചയങ്ങളും": സ്വഭാവം is "character" twice in this part (p. 680 "in character"; p. 686 "the character of those whose heart …") and in part 48. "the nature and the determinations of the deal" → "the character and the determinations of the deal".
9. Word table entry 30, "അവൻ (തന്നെ) വാചകം പറയുവാൻ": "tell the statement" renders വാചകം പറഞ്ഞുകൊടുക്കുക throughout; the shorter പറയുക needs its own verb. "for him (himself) to tell the statement" → "for him (himself) to say the statement".
10. p. 682, (6), مِمَّنْ تَرْضَوْنَ (നിങ്ങൾ തൃപ്തിപ്പെടുന്നവരിൽ നിന്ന്): the same Malayalam as the panel's "നിങ്ങൾ തൃപ്തിപ്പെടുന്നവരിൽ നിന്ന്" ("from those whom you are pleased with"). "(from those with whom you are pleased)" → "(from those whom you are pleased with)".

### Marker form

11. p. 684–685, "അവ/രുടെ നേരെ": the English word is not split, so the marker stands as a plain marker with a space. "towards *[p. 685]*them!" → "towards *[p. 685]* them!"

### DOUBT placement

12. p. 683, (11): the DOUBT stood between "for the deals" and "indeed too" (ഇടപാടുകൾക്ക് തന്നെയും), splitting the rendering of one word. Moved after "indeed too"; its wording is unchanged.

No dropped തന്നെ/-ഉം/എന്നോണം or list items, may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, silently corrected names or misprints, misplaced notes, translator words in round brackets, or added or re-vowelled Arabic were found apart from the above.

## Points the caller asked about

- **(1) DOUBTs (2).** ഇടപാടുകൾക്ക് തന്നെയും (p. 683): clearly printed so (line break "ഇടപാടു/കൾക്ക്"; image and text layer). "for the dealers" fits the sense better, but the print is a real word and the sentence can be read as printed, so a DOUBT (not a TN) is right; kept (moved, correction 12). اللهم فلك الحمد حتى ترضى (p. 685): the author gives no Malayalam; the English keeps the Arabic and gives a likely meaning only inside the DOUBT, as part 42 did. Kept.
- **(2) No TNs.** Confirmed on the images and kept as printed, with no TN: the full stop after "ചെറുതാണെന്നുള്ളതുകൊണ്ട് മാത്രം." (p. 681: "Anyhow, only because the deal is merely small. Writing down must not be abandoned."); the full stop after "വെക്കുവാൻ കാരണം." (p. 682, (8)); ഇടുപാടുകളെ (p. 681, (5)) rendered "deals" (the meaning is certain, so no TN); the hadith on p. 682 opens ‘നിങ്ങൾ ദാനധർമങ്ങൾ … and is not closed before "അപ്പോൾ ഒരു സ്ത്രീ"; mirrored. The 282 panel prints "(വേണ്ടി.)" with the full stop inside the bracket. Earlier parts keep a stop inside a bracket when the bracket ends the English sentence (part 39 "(it may be.)", part 45 "(I have believed.)"). Here English word order has to put "for (the sake of)" at the start of the clause, so the bracket cannot end the sentence without added words; the stop is placed at the end of the clause. Left as the translator had it; the reviewer may prefer another way.
- **(3) Markers and counts**: see "What was compared". 107 word-table entries (85 + 22); ﷺ 3 as printed. "re*[p. 683]*fuse" is right (the Malayalam word is split at the page turn). The p. 685 marker is now plain (correction 11).
- **(4) Arabic as printed** (bbox marks and word boxes; codepoints compared with the file):
  - فَإِنْ أَمِنَ بَعْضُكُمْ بَعْضًا (p. 681): fatha on ف, kasra under إ, sukun on ن; fatha on أ, kasra on م, fatha on ن; fatha on ب, sukun on ع, damma on ض and ك, **sukun on the final م** (glyph at 154.4 pt over ﻢ 152.5–158.7 pt; the data file has none); fatha on ب, sukun on ع, fathatan before the alif. Words spaced. As in the file.
  - مِمَّنْ تَرْضَوْنَ (p. 682): kasra on م, shadda+fatha on م, sukun on ن; fatha on ت, sukun on ر, fatha on ض, sukun on و, fatha on ن; 1.5 pt gap (spaced). As in the file.
  - وَلَا يُضَارَّ كَاتِبٌ وَلَا شَهِيدٌ (p. 684): fatha on و and on the lam of لا (both); damma on ي, fatha on ض, bare alif (no madda), shadda+fatha on ر; fatha on ك, kasra on ت, dammatan on ب; fatha on ش, kasra on ه, dammatan on د. Gaps 1.0–1.5 pt (spaced). يُضَارَّ: the same marks. As in the file.
  - ( مَعْرُوف ): fatha on م, sukun on ع, damma on ر, و ف bare; (مَجْهول): fatha on م, sukun on ج, the rest bare; ( كاتب، شهيد ) and ( الفاعل او المفعول ): bare. Bracket spacing as printed. As in the file.
  - إن شاء الله (p. 681) and اللّه اعلم (p. 684): graphics, bare, as parts 39–49. اللهم فلك الحمد حتى ترضى (p. 685): bare, five spaced words, final ى (U+0649) in حتى and ترضى, as in the file.
  - `npm run check` lists 23 Al-Baqarah "close but not exact" items, all from earlier parts (among them تَابَ إِلَى الله, part 06, and عَسَى رَبُّهُ إِنْ طَلَّقَكُنَّ, part 19); the report is identical before and after my edits. This part adds none (فَإِنْ أَمِنَ … and وَلَا يُضَارَّ … are counted as matching).
- **(5) Site-vs-book differences**: the translator's notes were spot-checked on the images (282 panel "അവധി വരേക്ക്", "പറഞ്ഞുകൊടുക്കുകയും", "ഒരു ഭോഷനോ", "നടത്തുന്ന വല്ല", "കാര്യത്തെക്കുറിച്ചും"; table "അവന്റെ മേലാണ് കടബാധ്യത", "പിഴവ് പറ്റുന്നതിന്", "നിയന്ത്രിക്കുന്നു"; p. 681 the Arabic word order; 283 panel "കൈവശം നൽകപ്പെടുന്ന", no stop after "(കൊടുക്കേണ്ടതാണ്)"; 283 table "നിർവഹിച്ചു (പാലിച്ചു) കൊള്ളട്ടെ"). The book is followed in each. P. 682 (8): the image reads മറ്റവൾ where the text layer has മറ്റെവൾ; it is in the commentary only and does not change the English.
- **(6) Terms**, checked by grep against earlier term tables, word tables and verse panels:
  - As earlier parts: ഇടപാട് "deal"; കടമിടപാട് "debt-deal" (part 49 കടമിടപാടുകാർ "debt-dealers"); ഇടപാടുകാർ "dealers"; അവധി / കാലാവധി "term / time-limit" (part 48); നിശ്ചിത / നിർണയിക്കുക / നിശ്ചയം "set / fix / determination" (earlier tables); കൃത്രിമം "artifice" ("artificial" as an adjective, earlier tables); ധിക്കാരം "defiance"; തോന്നിയവാസം "licentiousness" (parts 32–33); കൈകാര്യക്കാരൻ "manager" (earlier table: കൈകാര്യക്കാർ (വലിയ്യുകൾ) "managers (walis)"); ഭോഷൻ / വിഡ്ഢി both "fool" (part 20 kept both "fool", as parts 02 and 11); സൂക്തം "ayah" (part 02 സൂക്തങ്ങൾ "ayahs"); ലക്ഷ്യം "evidence" (earlier table) and "aim" (p. 686; earlier ലക്ഷ്യമാക്കുക "aim at"); ഒളിച്ചുവെക്കുക / മറച്ചുവെക്കുക / മൂടിവെക്കുക "conceal / hide / cover up" (parts 23–24); വാചകം / വാക്യം "statement / sentence" (parts 37 on); വിധികർത്താക്കൾ "judges"; മേടിക്കുക "acquire" (part 49); വാങ്ങുക "take"; യഥാർത്ഥം "what is real"; സൂക്ഷിക്കുക "guard (against)"; റബ്ബ് "Rabb". Corrections 5–9.
  - Kept apart inside this part: വിശ്വാസ്യത / വിശ്വസ്തത "trustworthiness / faithfulness"; മൊഴി / സാക്ഷ്യമൊഴി / സാക്ഷിമൊഴി "spoken word / spoken word of testimony / spoken word of witness"; നിബന്ധന / നിർബന്ധം "stipulation / obligation"; മടി / വൈമനസ്യം "reluctance / unwillingness"; ഓർമിപ്പിക്കുക / ഓർമപ്പെടുത്തുക "remind / recall to memory"; നീതിപൂർവം / നീതിയനുസരിച്ച് "justly / according to justice"; കാരുണ്യം / കരുണ "mercy / compassion"; പണയം / പണയവസ്തു "pledge / pledged article"; ഉദ്ദേശ്യം / താൽപര്യം "intention / import".

## Checked and left as they are

- v. 282, "for (the sake of) error happening …" with the stop at the end of the clause: see point (2).
- v. 283, "If you are both on any journey, and not getting a writer": -ഉം … -ഉം rendered "both … and"; literal. Left.
- p. 683, (9), "He is the one who comes with his (which he took up) testimony": the Malayalam has no subject ("… വരുന്നവനാകുന്നു"); English needs one, and round brackets are the author's. Left (as parts 47 and 49).
- p. 686, (1), "in case a person is not got to write the debt-bond" (ആളെ കിട്ടാത്തപക്ഷം) and "the pledged article has to be obtained by him into possession" (അവന് കൈവശം ലഭിക്കേണ്ടതുണ്ട്): impersonal / dative constructions with no printed subject; left.
- `part.json` verses "282-283", pages "677-687", PDF pages "506-516": correct.

## Open doubts for the reviewer

1. **DOUBTs in the text**: ഇടപാടുകൾക്ക് തന്നെയും (p. 683); اللهم فلك الحمد حتى ترضى (p. 685), no Malayalam given by the author.
2. **പണയം "pledge" and part 47's പ്രതിജ്ഞ "pledge"**: പണയം (rahn) can only be "pledge"; part 47 rendered പ്രതിജ്ഞ "pledge" (already its open doubt 4). Not changed here (other parts may not be edited); the reviewer may change part 47's word (e.g. "solemn promise").
3. **രക്ഷിതാക്കൾ "guardians"** (p. 682, the people who conduct the affairs of a fool, a child and so on): the glossary's രക്ഷിതാവ് "Lord" is for Rabb and cannot stand here; earlier tables give രക്ഷാധികാരി "guardian" (wali), so two Malayalam words now share "guardian(s)".
4. **കക്ഷി "party"** (ഉഭയ കക്ഷികൾ "both parties", മറുകക്ഷി "the other party", കക്ഷികൾ, ഇരുകക്ഷികൾ) beside earlier parts' കൂട്ടർ "party" (parts 34 and later, with യാതൊരു കൂട്ടർ "the group who"). "party" is the natural legal word for കക്ഷി; the reviewer may move കൂട്ടർ to "group".
5. **താൽപര്യം**: "import" where it means the intended sense (p. 684, as parts 17–24), but "concern" where it means interest (p. 681 "his own concern", p. 683 "how much concern Allah has", p. 684 "the concern that Allah has"). One English would not fit both senses.
6. **ഒഴിവ് "leisure"** (p. 684, "those who have no leisure and convenience") beside part 49's ഒഴിവ് "exemption": two senses of one word.
7. **വ്യവസ്ഥ "arrangement"** (correction 7): no earlier rendering of വ്യവസ്ഥ alone was found (വിധിവ്യവസ്ഥകൾ "decrees and dispositions"; "disposition" is also an earlier table's word for സ്വഭാവം).
8. **സ്വഭാവം "character"** (correction 8): one earlier table has "disposition".
9. **Earlier open doubts still apply** (not in this part): see parts 13–49.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| കടമിടപാട് / ഇടപാടുകാർ / കടപത്രം | dayn | debt-deal / dealers / debt-bond |
| മുതലിടപാട് / ധനപരമായ ഇടപാട് | — | property-deal / financial deal |
| റൊക്ക ഇടപാട് / റൊക്കമിടപാട് / റൊക്കക്കച്ചവടം | tijarah hadirah | cash deal / cash deal / cash trade |
| കടബാദ്ധ്യത / കടബാധ്യത / കടസംഖ്യ | al-haqq | debt-liability / debt-liability / debt-sum |
| അധമർണൻ / ഉത്തമർണൻ | — | the obligor / the obligee |
| പണയം / പണയവസ്തു | rihan | pledge / pledged article (open doubt 2) |
| വാചകം പറഞ്ഞുകൊടുക്കുക / വാചകം പറയുക | yumlil / yumill | tell the statement / say the statement (correction 9) |
| വിശ്വാസ്യത / വിശ്വസ്തത / വിശ്വാസവഞ്ചന | amanah | trustworthiness / faithfulness / breach of trust |
| ഒളിച്ചുവെക്കുക / മറച്ചുവെക്കുക / മൂടിവെക്കുക | katama | conceal / hide / cover up (as parts 23–24) |
| മൊഴി / സാക്ഷ്യമൊഴി / സാക്ഷിമൊഴി | — | spoken word / spoken word of testimony / spoken word of witness |
| നിശ്ചിത / നിർണയിക്കുക / നിശ്ചയം | musamma | set / fix / determination (as earlier parts) |
| നിബന്ധന / നിർബന്ധം / നിർബന്ധിക്കുക | — | stipulation / obligation (correction 5) / compel |
| കക്ഷി / മറുകക്ഷി / ഇരുകക്ഷികൾ / പക്ഷം | — | party / the other party / both parties / side (open doubt 4) |
| താൽപര്യം | — | import / concern (open doubt 5) |
| ഏറ്റുപറയൽ | — | acknowledgement (correction 6) |
| വിശേഷണം | — | attribute |
| വ്യവസ്ഥ | — | arrangement (correction 7; open doubt 7) |
| കൃത്രിമം | — | artifice / artificial (as earlier parts) |
| വിവേകം / അവിവേകി | — | discretion / the indiscreet |
| ധിക്കാരം / തോന്നിയവാസം | fusuq | defiance / licentiousness (as earlier parts) |
| വൈമനസ്യം / മടി | sa'm | unwillingness / reluctance |
| കൈകാര്യക്കാരൻ / രക്ഷിതാക്കൾ / പ്രതിനിധികൾ | wali | manager (as earlier parts) / guardians (open doubt 3) / representatives |
| സൂക്തം | ayah | ayah (as part 02) |
| ക്രിയാരൂപം / കർത്താവ് / കർമം | — | verb-form / doer / object |
| ഒഴിവ് | — | leisure (open doubt 6) |
| ഭോഷൻ / വിഡ്ഢി | safih | fool / fool (as part 20) |
| ഓർമിപ്പിക്കുക / ഓർമപ്പെടുത്തുക / ഓർമത്തെറ്റ് | tudhakkir | remind / recall to memory / lapse of memory |
| വിധികർത്താക്കൾ / മദ്ധ്യസ്ഥൻമാർ | — | judges / arbitrators |
| ലക്ഷ്യം | — | evidence / aim (as earlier parts) |
| സ്വഭാവം | — | character (correction 8; open doubt 8) |
