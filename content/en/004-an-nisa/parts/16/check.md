# Check: An-Nisa' part 16 (verses 77–85)

Checked on 2026-11-25 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 135–146 (book pp. 1058–1069). Pages 135–145 were rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer; of p. 146 the whole top of the page down to the verse 86 panel was read at 150 dpi. Crops at higher resolution: p. 1060 "ബാധിച്ചാലൂം" (400 dpi), p. 1062 "ഭൗത്യങ്ങൾ" (400 dpi), p. 1067 "قِيلَ" and "قَالَ" (400 dpi), p. 1068 "ഹേമിക്കപ്പെടുന്നില്ല" (300 and 600 dpi).
- **Boundaries.** Part 15 ends on p. 1058 with "… ദുർമൂർത്തികളുമാണുദ്ദേശ്യമെന്ന് മുമ്പ് ചൂണ്ടിക്കാട്ടുകയും ചെയ്തിരിക്കുന്നു." This part starts directly below it with "വിഭാഗം - 11" and the verse 77 panel (p. 1058). It ends at the top of p. 1069 with "… പ്രധാനമായും ഇവിടെ ഉദ്ദേശിക്കപ്പെട്ടിരിക്കുന്നതെന്ന് കരുതാം. والله اعلم" (four lines), directly above the verse 86 panel (left for part 17). Nothing between is missing. No footnotes in this part.
- Files: `part.json`, `verses.json` (verses 77–85), `words.json` (163 entries: 77: 36; 78: 26; 79: 12; 80: 10; 81: 18; 82: 9; 83: 22; 84: 15; 85: 15), `commentary.md`.
- Groups: "### Section – 11" (p. 1058) | *[Verses 77–79]* (v. 77 panel p. 1058, table and v. 78 panel p. 1059, tables and v. 79 panel p. 1060, commentary pp. 1060–1062) | *[Verse 80]* (panel and table p. 1062, commentary p. 1063) | *[Verse 81]* (panel, table and commentary pp. 1063–1064) | *[Verse 82]* (panel, table and commentary pp. 1064–1065) | *[Verse 83]* (panel pp. 1065–1066, table and commentary pp. 1066–1067) | *[Verses 84–85]* (panels pp. 1067–1068, tables and commentary pp. 1068–1069). Right.
- `[p. N]` markers: 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069. Pages 1058 and 1059 hold only the section heading, panels and tables, so they have no marker. 1060 opens the vv. 77–79 commentary, 1063 the v. 80 commentary and 1066 the v. 83 commentary, as parts 13–15 do; 1061, 1062, 1064, 1065, 1067 and 1069 stand where the page turns inside the commentary, at the word where the new page begins. Right.
- Every English sentence was compared with the Malayalam on the images, in order: vv. 77–79 commentary (pp. 1060–1062, four paragraphs), v. 80 (3), v. 81 (5), v. 82 (two paragraphs, 6 + 6, and "അതായത്:" with the next paragraph of 6), v. 83 (two paragraphs, 11 + 15 including both hadiths and the Abu Dawud saying), vv. 84–85 (4 + 3). No sentence is missing and none is added. The fragment on p. 1066 ("When some information … is heard, spreading it …") is a verbless sentence in the Malayalam too, and is kept so.
- `verses.json` and every `words.json` gloss match the images, including "(യുദ്ധത്തിൽ നിന്നും)" and the unclosed quote after "… അക്രമിക്കപ്പെടുന്നതുമല്ല." (v. 77); "തിന്മകയായിട്ട്" (line break after തിന്മ, joined) and "ബാധിച്ചാലൂം" (long ൂ, confirmed at 400 dpi) (v. 79); "തങ്ങൾ(ആദ്യം)" and no stop after "…[ഗൂഢാലോചന നടത്തുക]യായി" (v. 81); "(മറ്റുവല്ല) വരുടെ" (v. 82); the stop after "മടക്കിയിരുന്നെങ്കിൽ." (v. 83); the stop after "ശുപാർശചെയ്യുന്ന പക്ഷം." (v. 85). Tables: "നിയമിക്ക(നിർബ്ബന്ധമാക്ക)പ്പെട്ടപ്പോൾ" but "നിർബന്ധമാക്കി" (v. 77, both as printed), "നൻമയായിട്ട്" (v. 79), "അത്(അവർ) പറയുന്നു" (v. 81; the text layer's "(-അവർ)" is wrong), "അൽപം (ആളുകൾ) ഒഴികെ." (final stop printed, v. 83), "ഹേമിക്കപ്പെടുന്നില്ല" (v. 84, see doubts).
- **v. 79 "മതി താനും".** In the panel മതി ends a line and താനും begins the next, so the spacing cannot be read from the panel; the v. 79 table prints "മതി താനും" with a space, so the space is kept in both. Part 14's "മതിതാനും" (v. 70) is printed closed there; the two are different printings and each follows its own page.
- **Word tables pp. 1059–1060, 1062–1063, 1064, 1066, 1068.** Pairings checked by meaning and table order, all in Quran order. Every `ar` is in its verse in `data/quran-uthmani.json` (`npm run check`).
- Honorifics: ﷺ is printed 4 times on p. 1061, 3 on p. 1062, 1 on p. 1063, 2 on p. 1064, 1 on p. 1066, 3 on p. 1067, 3 on p. 1068 (17); the English has 17 in the same places. (r) for Mughirah ibn Shu'bah and Abu Dawud (p. 1067). "ഒരു നബിവചനത്തിലെ" (p. 1067) has no ﷺ printed, and "a saying of the Prophet" has none. Right.
- Arabic: Quran quotations copied from `data/quran-uthmani.json`: مَّآ أَصَابَكَ (4:79, p. 1062; printed without the shadda) and Ash-Shura 30 (p. 1062). Hand-typed Arabic as printed, checked on the image: **قِيلَ** and **قَالَ** (p. 1067, confirmed at 400 dpi), **بئس مطية الرجل زعموا** (p. 1067, unvowelled as printed), **والله اعلم** (p. 1069).
- References as printed: "(Shura - 30.)" (ശൂറാ – 30), "Su: Hadid" (സൂ: ഹദീദ്), "Ali 'Imran-7" (ആലുഇംറാൻ-7), "(Mu; Da.)", "(Bu; Mu.)". Right.
- **Mirrored as printed, without TN** (all confirmed on the images): the v. 79 panel slips "തിന്മകയായിട്ട്" and "ബാധിച്ചാലൂം" (misspellings of obvious words, mirrored without TN as parts 08–15 do); the unclosed and unopened quote marks on p. 1067 ("‘ക്വീല ( قِيلَ )", "അവൻ പറഞ്ഞു, ഇവൻ പറഞ്ഞു’", "(‘അവർ പറയുന്നു’ … വാഹനമാണ്.’)") are kept as printed in the English; the unclosed quote at the end of the v. 77 panel is kept.
- **Quotative "എന്ന്." in the panels.** "‘…’ എന്ന്." is rendered "‘…’, thus." (v. 78 twice, v. 81 "‘Obedience’, thus!"), as Ali 'Imran part 13 (3:119 "‘We have believed’, thus."). Kept.
- **Sentences without a printed subject.** pp. 1061 ("ഈ ആരോപണത്തിനും മറുപടി നൽകുവാൻ നബിﷺയോട് കൽപിക്കുന്നു" "The Prophet ﷺ is commanded to …"), 1062 ("… ചൂണ്ടിക്കാട്ടുന്നത്" "is pointed out", twice), 1064 ("… നബിﷺയെ ഉണർത്തുകയും ചെയ്യുന്നു" "the Prophet ﷺ is also alerted"), 1066–1067 ("… ഉണർത്തുകയും ചെയ്യുന്നു" "An alert is also given"), 1068 ("സമാധാനിപ്പിക്കുകയും ചെയ്യുന്നു" "Reassurance is also given"; "… അറിയിക്കുന്നു" "It is made known"). The Malayalam has no subject in each; the passive adds none and changes no one's action (the subject is Allah from context, but it is not printed). Earlier parts render such subjectless clauses in the passive as well. Kept.
- Glossary: റബ്ബ് "Rabb"; റസൂൽ "Rasul"; റസൂൽ തിരുമേനി "the noble Rasul" (as Al-Baqarah and Ali 'Imran). Right.

## Corrections made (before → after)

### Capitalisation for Allah

1. Table v. 77 لِمَ كَتَبۡتَ "എന്തിനാണു നീ നിയമിച്ചത്, നിർബന്ധമാക്കി": "why have you ordained, made obligatory" → "why have You ordained, made obligatory" (the next entries and the panel have "You" for Allah).

### Words not printed

2. Table v. 79 وَكَفَىٰ "മതി താനും": "and sufficient, moreover" → "sufficient, moreover" (താനും is rendered "moreover"; the extra "and" rendered it a second time; as part 14 correction 2).

### Tense

3. Table v. 83 لَٱتَّبَعۡتُمُ "നിങ്ങൾ പിൻപറ്റുകതന്നെ ചെയ്യും": "you would indeed have followed" → "you would indeed follow" ("have" renders -ആയിരുന്നു, which is not printed here; as the same table's لَعَلِمَهُ "അറിയുകതന്നെ ചെയ്യും" "would indeed know").

### Renderings

4. Table v. 85 مُّقِيتٗا "… മേൽനോട്ടം ചെയ്യുന്നവൻ …": "One who exercises supervision" → "One who keeps watch" (An-Nisa' part 01 renders the identical gloss "One who keeps watch"; "One who exercises supervision" stays for the panel's different wording മേൽനോട്ടം വഹിക്കുന്നവൻ).
5. p. 1064 "… എടുത്തുകൊള്ളും, എന്നൊക്കെ നബിﷺയെ ഉണർത്തുകയും ചെയ്യുന്നു.": "the Prophet ﷺ is also alerted to such things" → "the Prophet ﷺ is also alerted in such terms" (എന്നൊക്കെ closes the reported words; p. 1061 renders it "In such terms").

### DOUBT reworded

6. Table v. 84 لَا تُكَلَّفُ: the DOUBT now records the 600 dpi check and gives the options (see below).

No dropped sentences, reversed negations, changed conditions, number errors or added honorifics were found.

## Points the translator asked about

1. **ഹേമിക്കപ്പെടുന്നില്ല (v. 84 table).** Checked at 300 and 600 dpi: the letters are sharp and clearly ഹേ-മി-ക്ക-പ്പെ-ടു-ന്നി-ല്ല; it is not a broken or misread glyph. The v. 84 panel has ശാസിക്കപ്പെടുന്നതല്ല and the commentary ചോദിക്കപ്പെടുകയില്ല; neither resembles it, and no known word such as ക്ലേശിക്കപ്പെടുന്നില്ല differs from it by one glyph. The amanithafseer.com text could not be reached from this session. DOUBT kept, now with options.
2. **TN ഭൗത്യങ്ങൾ (p. 1062).** Confirmed at 400 dpi. The next page (p. 1063) has "അല്ലാഹുവിന്റെ ദൗത്യം" for the same idea, which supports the reading ദൗത്യങ്ങൾ. Since the printed form is not a word, the TN is kept.
3. **Mirrored slips; quote marks; stops; "മതി താനും"; quotative ", thus"; subjectless passives; references; honorifics; page markers; hand-typed Arabic.** All confirmed (see above).
4. **Renderings** (checked against earlier parts by grep):
   - ഓഹരി "share": as all earlier tables. Kept.
   - പങ്ക് "part" (v. 85 panel, table, p. 1068), ഭാഗം "portion" (table v. 85 نَصِيبٞ), വിഹിതം "allotment" (p. 1068): the four words occur together here and need four renderings. ഓഹരി "share" and ഭാഗം as "part" elsewhere (Al-Baqarah, An-Nisa' tables) are the settled ones; പങ്ക് has been "share", "portion", "part" and "lot" in earlier tables (An-Nisa' 03 has "ഓഹരി, വിഹിതം, പങ്ക്" "a share, a portion, a part"). Kept as the translator chose; see open points.
   - ശാസിക്കപ്പെടുക "be charged": as Al-Baqarah 233 and 286. Kept.
   - ശൗര്യം "valour", സമരശക്തി "fighting strength", വീര്യം "vigour", ക്ഷയിപ്പിക്കുക "wear down"; കൊത്തളങ്ങൾ "fortresses", മണിമാളികകൾ "mansions"; രാത്രി പരിപാടിയിടുക "plan by night", ഗൂഢാലോചന "conspiring"; നിരീക്ഷിച്ചെടുക്കുക "work out by observation"; കിംവദന്തി "rumour"; സാത്വികന്മാർ "pious people"; കാര്യവിവരം "knowledge of affairs"; ഭരമേൽപിക്കപ്പെടുന്നവൻ "the One relied upon" (as earlier); ഉറ്റാലോചിക്കുക "reflect intently" (as earlier); ക്വദ്വാക്വദ്ർ "qada'qadr"; ക്വീല / ക്വാല "qila / qala": new or as earlier, faithful. Kept.

## Open doubts for the reviewer

- Table v. 84 لَا تُكَلَّفُ, p. 1068: "ഹേമിക്കപ്പെടുന്നില്ല" is clearly printed but is not a known word. It may be a printing slip; words that would fit include ഭാരമേൽപിക്കപ്പെടുന്നില്ല ("are not burdened"), ക്ലേശിപ്പിക്കപ്പെടുന്നില്ല ("are not put to hardship") or നിയമിക്കപ്പെടുന്നില്ല ("are not assigned"); none is certain. The English "are not burdened" follows the sense of the Arabic. Compare the similar third gloss at Al-Baqarah 286 (കീർത്തിക്കുകയില്ല).
- TN p. 1062: "ഭൗത്യങ്ങൾ" read as ദൗത്യങ്ങൾ ("missions").
- For the reviewer's preference only: the share words. പങ്ക് is "part", ഭാഗം "portion" and വിഹിതം "allotment" here; earlier tables vary for പങ്ക് and once have വിഹിതം "portion". The reviewer may want one fixed set (for example ഓഹരി share, പങ്ക് portion, ഭാഗം part, വിഹിതം allotment) for the glossary.
- Earlier open doubts still apply.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഓഹരി / പങ്ക് / ഭാഗം / വിഹിതം | nasib, kifl | share / part / portion / allotment (see open points) |
| ശുപാർശ / ശുപാർശകൻ | shafa'ah | intercession / intercessor |
| ശൗര്യം / സമരശക്തി | ba's | valour / fighting strength |
| ശാസിക്കപ്പെടുക | tukallafu | be charged (as Al-Baqarah 233) |
| രാത്രി പരിപാടിയിടുക [ഗൂഢാലോചന നടത്തുക] | bayyata | plan by night [conspire] |
| നിരീക്ഷിച്ചെടുക്കുക / ആരാഞ്ഞെടുക്കുക | istanbata | work out by observation / seek out |
| കാര്യ(വിവര)മുള്ളവർ | uli al-amr | those who have the affair (information) |
| കൊത്തളങ്ങൾ | buruj | fortresses |
| മേൽനോട്ടം ചെയ്യുന്നവൻ / മേൽനോട്ടം വഹിക്കുന്നവൻ | muqit | One who keeps watch (as part 01) / One who exercises supervision |
| (മാതൃകാ) ശിക്ഷ | tankil | (exemplary) punishment |
| കിംവദന്തി | — | rumour |
| സാത്വികന്മാർ | — | pious people |
| ക്വദ്വാക്വദ്ർ | qada' wa qadr | 'qada'qadr' (the decree and disposition of Allah) |
| ക്വീല / ക്വാല | qila / qala | 'qila' / 'qala' |
