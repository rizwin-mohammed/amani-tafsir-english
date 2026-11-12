# Check: Ali 'Imran part 17 (verses 156–163)

Checked on 2026-11-12 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/03. Al-'Imran.pdf`, PDF pages 168–178 (book pp. 876–886). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer. Crops at 300 dpi: p. 883 "غلول" (unvowelled, as transcribed); p. 884 the two readings, also at 600 dpi (see item 5). The amanithafseer.com text was used only to compare "അകറിച്ചയും" (it has the same).
- **Boundaries.** Part 16 ends on p. 876 with "… അല്ലാഹു വളരെ പൊറുക്കുന്നവനും, വളരെ സഹനശീലമുള്ളവനുമാണല്ലോ."; directly below are "വിഭാഗം - 17" and the verse 156 panel. This part starts there (p. 876's marker is in part 16). It ends on p. 886 with item (3), the 'Adiyy ibn 'Umairah hadith and "… ഉദാഹരണങ്ങൾ സ്വഹാബികളുടെ ചരിത്രങ്ങളിൽ കാണാവുന്നതാണ്.", directly above the verse 164 panel (left for part 18). Nothing in between is missing.
- `part.json`, `verses.json` (verses 156–163), `words.json` (96 entries: 156: 25; 157: 8; 158: 4; 159: 21; 160: 11; 161: 12; 162: 10; 163: 6; every printed gloss is there, in order), `commentary.md`.
- Groups: "### Section – 17" (p. 876, "വിഭാഗം - 17", directly above the v. 156 panel) | *[Verses 156–158]* (panel 156 begins p. 876; rest of 156, panels 157, 158 and the start of the table p. 877; rest of the table and the commentary p. 878) | *[Verses 159–160]* (panels and the start of the table p. 879; rest of the table and the commentary p. 880; commentary pp. 881–882) | *[Verses 161–163]* (panel 161 p. 882; panels 162, 163, the one shared table and the start of the commentary p. 883; commentary pp. 884–886). Right. The heading stands at the top of the commentary, before the first group, as in parts 02, 09, 12 and 16.
- Every English sentence of the commentary was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The one footnote (p. 885) is present (moved: correction 6).
- `verses.json` and every `words.json` gloss match the images in the printed order, including: v. 156 "കണ്ടറിയുന്നവനുമത്രെ" (the image has the final െ; the text layer "…മത്ര"), "[അതാണിതിന്റെ അനന്തരഫലം.]"; v. 157 "നിന്നു(ണ്ടാകുന്ന)"; v. 158 "മരണപ്പെടുകയോ" (image); v. 159 "(നബിയേ)" (image; the website text "(നീയേ)"), "[സൗമ്യമായിവർത്തിക്കുന്നു.]", "കഠിന ഹൃദയനുമായിരുന്നെങ്കിൽ" (broken "ഹൃദയ / നുമായിരുന്നെങ്കിൽ" inside the word: joined); v. 161 "ക്വിയാമത്തുനാളിൽ" (broken "ക്വിയാ / മത്തുനാളിൽ": joined), "അക്രമിക്കപ്പെടുകയില്ല താനും" (line end, spaced as the text layer); v. 162 "[കോപം നേടിക്കൊണ്ട്]", "‘ജഹന്നം’ [നരകം]"; v. 163 "പല(തരം) പദവികൾ (ഉള്ളവർ)" (broken "(ഉ / ള്ളവർ)": joined); tables "മാർദ്ദവമായിരിക്കുന്നു", "പോകതന്നെ", "ഉത്തമമാണ് നല്ലതാണ്" (no comma, as printed), "(ഒരുമിച്ച് കൂട്ടുന്ന)തിനേക്കാൾ", "അക്രമി[അനീതി]ക്കപ്പെടുകയില്ല", "മടങ്ങിയ(നേടിയ)വനെപ്പോലെ", "ക്രോധവുമായി", "സങ്കേതസ്ഥാനമാകട്ടെ, പ്രാപ്യസ്ഥാനം", "(ആ) പര്യവസാന സ്ഥലം, ചെന്നു ചേരുന്ന സ്ഥാനം", the stops after "കണ്ടറിയുന്നവനുമാകുന്നു.", "കൂട്ടപ്പെടുന്നു." and "ഭരമേൽപിക്കുന്നവരെ.", and v. 163 هُمۡ "അവർ" as its own entry (the image prints هُمْ and അവർ apart from دَرَجَاتٌ). All 96 `ar` are found in their verses (`npm run check`).
- `[p. N]` markers 878, 880–886; none for p. 876 (in part 16) and none for pp. 877 and 879, which hold only panels and word tables (as parts 11–16 left such pages). [p. 878], [p. 880] and [p. 883] stand at the start of the commentary below the tables, as in parts 07–16; [p. 881] at "(1)", [p. 886] at "(3)". Page turns: "its upper part (life) *[p. 882]* will be better" (the word is split inside the bracket, "(ജീ / വിതം)"), "That being so, *[p. 884]* no prophet will ever do it" (എന്നിരിക്കെ, / ഒരു പ്രവാചകനും), "following the path by which pleasure is obtained, *[p. 885]* have become recipients" (പിൻപറ്റിയും കൊണ്ട് / അവന്റെ പ്രീതിക്ക്). Right.
- Honorifics, counted page by page: ﷺ printed 23 times (p. 880: 7, നബിﷺ അവരോട്, നബിﷺയിൽ നിന്നും, നബിﷺയുടെ ഈ, നബിﷺയിൽ ഉണ്ടാ…, നബിﷺക്കും , നബി തിരുമേനി ﷺയുടെ, നബിﷺ അങ്ങേയറ്റം; p. 881: 5, നബിﷺയോടുള്ള, നബിﷺയും, റസൂൽﷺ, നബിﷺക്ക്, നബി തിരുമേനിﷺയോടുപോലും; p. 882: 2; p. 884: 4; p. 885: 3; p. 886: 2; none on pp. 876 (this part's portion), 877, 878, 879, 883); the English has 23, the same on every page. (r) printed 4 times (p. 881 Tirmidhi; p. 885 Abu Humaid al-Sa'idi, Abu Hurairah; p. 886 Sa'd ibn 'Ubadah); the English has 4; the "رضـ" inside the Arabic of p. 886 stays Arabic. (a): none. Bare തിരുമേനി 14 times (p. 880: 6; p. 882: 3; p. 884: 1; p. 885: 2; p. 886: 2), each "the noble one", with no ﷺ, as parts 08, 10, 12–16. Not printed and not added: "നബി വചനങ്ങൾ" (p. 885, "the sayings of the Prophet"), "മുഹമ്മദിന്റെ" in the oath (p. 885).
- References and keys as printed: "(4: 64.)", "(ശൂറാ: 38)" → "(Shura: 38)", "(അ; ബു; മു.)" → "(A; Bu; Mu.)" twice, "(അ; മു; ദാ.)" → "(A; Mu; Da.)", "(155ൽ)" → "(in 155)", "156-ാം വചനം" → "this 156th verse".

## Corrections made (before → after)

### Renderings not as settled in earlier parts

1. പാപപൊറുതി (p. 878, "പാപപൊറുതിയും, കാരുണ്യവുമായിരിക്കും"): Al-Baqarah part 51 (new-terms list: പൊറുക്കൽ / പൊറുതി / പാപപൊറുതി "forgiving / forgiveness / forgiveness for sins"); "pardon" is this part's word for മാപ്പ്. "it is the pardon of sins and the mercy" → "it is the forgiveness for sins and the mercy". പാപമോചനം stays "forgiveness of sins".
2. അനുഗ്രഹം (p. 885, "സ്വർഗീയാനുഗ്രഹങ്ങൾക്കും"): "favour" in Al-Baqarah parts 07, 08, 11, 14, 42 and on pp. 880 and 881 of this part. "deserving of the blessings of Paradise" → "deserving of the favours of Paradise".
3. വേണ്ടാ, (p. 882, "വേണ്ടാ, ഉഹ്ദു സംഭവത്തിൽ തന്നെയും"): Al-Baqarah part 07 ("Let that be;"). "Why, in the Uhud event itself" → "Let that be; in the Uhud event itself".
4. അതല്ല, (p. 884, the Prophet's words "‘അതല്ല, നാം വഞ്ചിക്കുമെന്നും…"): "or else" in Al-Baqarah parts 13, 14, 16, 21, 34; "No," put a denial into the words that the Malayalam does not have. "‘No, what you supposed is" → "‘Or else, what you supposed is" (open doubt 4).

### Names and brackets

5. p. 885 "അസ്ദു ( اَزَد ) ഗോത്രക്കാരനായ": the Arabic printed beside the name has zay; Malayalam സ stands for ز here as in സകാത്ത് "zakah" on the same line. "a man of the Asd ( **اَزَد** ) tribe" → "a man of the Azd ( **اَزَد** ) tribe".
6. Footnote (\*) (p. 885): its marker is in hadith (1) ("…ആടാണെങ്കിൽ അതിന് കരച്ചിലും (*)"); it stood after hadith (2). Moved to follow the paragraph of hadith (1), as TRANSLATING.md rule 1 and parts 04–13 place footnotes.
7. p. 885, end of hadith (2), "ഞാൻ (വിവരം മുമ്പേ) എത്തിച്ച് കഴിഞ്ഞിട്ടുണ്ട്.": the author's one bracket was split in two and "already" (കഴിഞ്ഞിട്ടുണ്ട്, outside his bracket) put inside one. "I have (already beforehand) conveyed (the information).’" → "I have already conveyed (the information beforehand).’"

### Wording

8. v. 163 "പല(തരം) പദവികൾ": പല is "many" in the v. 163 table ("പല പദവികളാണ്" "are many ranks") and throughout the commentary. "various (kinds of) ranks" → "many (kinds of) ranks".

Spacing only (not counted): p. 886 "( **عدى بن عميرة الكندى ـ رضـ**)" → "( **عدى بن عميرة الكندى ـ رضـ** )", as the other bracketed Arabic.

The DOUBT on "അകറിച്ചയും" was reworded to give the second option (item 1 below). No dropped തന്നെ/-ഉം or list items, may/will errors, voice changes, reversed negations, changed reported speech, added ﷺ, silently corrected misprints, or added or re-vowelled Arabic were found.

## The translator's open items

- **(1) DOUBTs.** (a) p. 878 "വീട് വിട്ടുപോയിരുന്നെങ്കിൽ": clearly printed so on the image; the sentence before has "വീടുവിട്ടുപോകാതിരുന്നാൽ" and the sense needs "had they not left". The image does not settle it. DOUBT kept as worded. (b) p. 885 "അകറിച്ചയും": clearly printed so; amanithafseer.com has the same. Not a known word; it may be a slip for അമറിച്ചയും (അമറുക "to low, to bellow"). DOUBT kept and reworded to give that option; "lowing" kept.
- **(2) TNs.** None used, and none needed under the practice of parts 08–16 (TNs only for evident slips such as a misspelt name, a wrong reference or a repeated word). The slips in item 3 are punctuation, quotation marks, short vowels or misspelt common words, and are mirrored or translated by their meaning (part 16 item 2).
- **(3) Slips kept without TN.** All confirmed on the images: p. 881 "(3) കാര്യങ്ങളിൽ അവരുമായി കൂടിയാലോചന നടത്തണമെന്ന്, ഒരു വിഷയത്തിൽ" (comma for a full stop; mirrored "in affairs, When"); p. 881 "(അവരുടെ കാര്യം … ആലോചിക്കപ്പെടുന്നതുമായിരിക്കും (ശൂറാ: 38)" (bracket never closed, no stop before "തിർമദീ"); "സൂ: ശൂറാ" (p. 881) beside "സൂ: ശുറാ" (p. 882), both "Su: Shura"; p. 882 "‘തവക്കുൽ ചെയ്യാത്തവർക്ക് … എന്നും" (quote never closed); p. 883 no stop after "ക്രിയാരൂപങ്ങൾ"; p. 884 "എനി," ("Now,"), "‘അതല്ല, …" (never closed), "ചെയ്തേക്കാം:" (colon), "‘ഒരു പ്രവാചകനും വഞ്ചിക്കപ്പെടുവാൻ പാടില്ല’ -അഥവാ,"; p. 885 "നോക്കരുതോ?:", the outer quotes of Abu Humaid's report (opened at "‘അസ്ദു") and of Abu Hurairah's hadith (opened at "‘നിങ്ങളിലൊരാൾ") never closed; p. 878 "മരണപ്പെടുകയൊ", "കൊല്ലപ്പെടുകയൊ" (short ൊ); p. 886 "(അതുതന്നെ)’" (no stop). Right.
- **(4) Image readings.** v. 159 "(നബിയേ)", v. 158 "മരണപ്പെടുകയോ", "കണ്ടറിയുന്നവനുമത്രെ" (v. 156), "എന്നത്രെ" (pp. 882 and 884), "പ്രസിദ്ധമത്രെ" (p. 882), "നിർവ്വഹിച്ചുവെന്ന്" (p. 885; text layer "നിർവ്വിച്ചു…"): each is so on the image. v. 163 هُمۡ "അവർ" as its own entry: right.
- **(5) Arabic, word table, honorifics, heading.** غلول (unvowelled, 300 dpi crop) and غَلَّ،يغل (p. 883); اَزَد (p. 885); عدى بن عميرة الكندى ـ رضـ (p. 886): right. p. 884: the 600 dpi crop shows **يَغُلُّ** (fatha on ya, damma on ghain, shadda with damma on lam) before "(യഗുല്ലു)" and **يُغَلَّ** before "(യുഗല്ല)"; the transcription is right. The author names the word and its variant reading in their own forms (his transliteration "യഗുല്ലു" has the final u), not quoting the verse, so the printed يَغُلُّ is kept and not replaced by the verse's يَغُلَّ (as part 16 kept the Prophet's call as printed). Quran quotations, each found unchanged in its verse in `data/quran-uthmani.json` with exactly the words printed: وَأَمۡرُهُمۡ شُورَىٰ بَيۡنَهُمۡ (42:38), فَإِذَا عَزَمۡتَ فَتَوَكَّلۡ عَلَى ٱللَّهِ (3:159), وَمَن يَغۡلُلۡ يَأۡتِ بِمَا غَلَّ يَوۡمَ ٱلۡقِيَٰمَةِ (3:161). Footnote marker "(\*)" and "> **Note:**": right. words.json 96 entries, each `ar` in its verse. Honorifics and heading: see above. Hadith keys: see above.
- **(6) New renderings.** Corrections 1–4. Kept: വഞ്ചിച്ചെടുക്കുക "embezzle" (the verb the author gives for غلول; new), വഞ്ചന "deceit" (Al-Baqarah part 30), വഞ്ചിക്കുക "deceive", വഞ്ചകൻമാർ "deceivers" (part 16); കബളിപ്പിക്കുക / കബളിപ്പിച്ചെടുക്കുക "defraud" (Al-Baqarah part 15 has കബളിപ്പിക്കുക "dupe" for deceiving people; here, among the meanings of ghulul and with എടുക്കുക "take", "defraud" is kept: open doubt 6), ചതിക്കുക "cheat"; ‘ഗുലൂൽ’ "ghulul"; ഖേദം "regret" (Al-Baqarah part 25), വിലാപം "lamentation"; പടയെടുക്കുക "go out on a military expedition"; സൗമ്യം "gentle / gentleness", മാർദ്ദവം "soft", മയം "gentleness" (Al-Baqarah part 11) (open doubt 2); പരുഷ സ്വഭാവി "one harsh of character", ദുഷ്ടസ്വഭാവി "one evil of character", കഠിനഹൃദയൻ "one hard of heart"; കൈവെടിയുക "forsake"; ഭരമേൽപിക്കുക "rely", തവക്കുൽ "tawakkul" (part 13); കൂടിയാലോചന "consultation" (Al-Baqarah part 38); പാപമോചനം "forgiveness of sins"; പര്യവസാനം "final end" (Al-Baqarah part 51, part 03), so പര്യവസാന സ്ഥലം "place of final end"; സങ്കേത സ്ഥാനം "place of resort" (സങ്കേതം "resort", part 16); പ്രീതി "pleasure" (Al-Baqarah part 33); കോപം "anger", ക്രോധം "wrath" (open doubt 3); പദവി / പടി "rank / step" (Al-Baqarah parts 36, 42); വില്ലാളികൾ "bowmen", kept apart from അമ്പൈത്തുകാർ "archers" (parts 13, 16); ചുവന്ന പുതപ്പ് "a red blanket"; നിവേദനമാർഗം "route of report" (നിവേദനം "report", part 16); ഉദ്യോഗം "office"; ‘ഹദ്‌യ’ "‘hadyah’ (gift)" (kept apart from ഹദ്‌യ് "hady", Al-Baqarah part 32); സദക്വഃ (സകാത്ത്) "sadaqah (zakah)"; മിമ്പർ "minbar"; മഹ്ശർ "the Mahshar" (Al-Baqarah part 43); കടപ്പാട് "obligation" (Al-Baqarah part 36), വീഴ്ച "lapse"; മാന്യസ്ഥാനം കൽപിക്കൽ "the according of a respectable position"; അധികാരസ്ഥൻമാർ "those in authority" (as അധികാരസ്ഥൻ, Al-Baqarah); കയ്യയവുള്ളവർ "the open-handed"; ഉൽകൃഷ്ട സ്വഭാവം / സ്വഭാവങ്ങൾ "excellent character / excellent traits of character"; ചര്യാചരിത്രങ്ങൾ "conduct and history"; the oath "മുഹമ്മദിന്റെ ആത്മാവ് യാതൊരുവന്റെ കയ്യിലാണോ അവൻ തന്നെയാണ് (സത്യം)!" "He in whose hand is the soul of Muhammad, by Him indeed (I swear)!" (open doubt 5); "the battle of Badr", "the battle of Khandaq", "the Hudaibiyyah event".

## Checked and left as they are

- v. 160 table "നിങ്ങളെ സഹായിക്കുന്ന പക്ഷം" → "in case of helping you": the gloss names no subject (Allah is the next entry); earlier tables give "in case you obey" where the subject is printed. Left.
- p. 878 and p. 883 "…ആയാലും ശരി, …ആയാലും ശരി" → "Whether …, or …": the "ശരി" is carried by "whether … or". Left.
- p. 882 "നിരുപാധികം സ്വീകരിക്കേണ്ടതുണ്ടെന്നു ഉദ്ദേശ്യമില്ല" → "does not mean that …": literally "there is no intent that …". Left.
- p. 886 the order "he must bring (onto the scene) all, small and great, in it (in what is obtained through it)": the Malayalam has "അതിൽ (…) ചെറുതും വലുതുമെല്ലാം (രംഗത്ത്) കൊണ്ടുവരണം"; English word order only, every bracket kept with its word. Left.
- `part.json` verses "156-163", pages "876-886", PDF pages "168-178": correct.

## Open doubts for the reviewer

1. **p. 878, "വീട് വിട്ടുപോയിരുന്നെങ്കിൽ"** ("had they left the house"): the sense seems to need "വിട്ടുപോകാതിരുന്നെങ്കിൽ" ("had they not left"). DOUBT kept: a printing slip, or the author's wording.
2. **സൗമ്യം / മയം**: both are "gentleness" in this part (സൗമ്യം after the verse's "gentle"; മയം after Al-Baqarah part 11), except p. 880 "മയത്തിലും സൗമ്യത്തിലും" "with great gentleness and mildness", where the translator gave സൗമ്യം "mildness" to keep the pair apart. The reviewer may want one fixed rendering for each (e.g. മയം "mildness" throughout).
3. **കോപം "anger" / ക്രോധം "wrath"** (v. 162 panel and table; p. 885): Allah's കോപം (ghadab) is "wrath" in Al-Baqarah parts 10 and 14 and Ali 'Imran part 12; here the translator gave "anger" to keep it apart from the table's ക്രോധം "wrath" (sakhat). Left; the reviewer may prefer കോപം "wrath" and another word for ക്രോധം.
4. **p. 884, "‘അതല്ല, …"** (correction 4): set to the settled "Or else,"; the sense here is "rather" (not that; rather you thought …). The reviewer may prefer "Rather,".
5. **The oath (p. 885)** "അവൻ തന്നെയാണ് (സത്യം)!": "by Him indeed (I swear)!" gives the sense of the oath idiom; literally "He indeed is (the oath)". No earlier rendering to follow.
6. **കബളിപ്പിക്കുക "defraud"** here beside Al-Baqarah part 15's "dupe". The reviewer may want one rendering.
7. **p. 885, "അകറിച്ചയും"**: not a known word; possibly a slip for അമറിച്ചയും. "lowing" from the context.
8. **Printing slips** (item 3) are mirrored or translated by meaning without TN.
9. **Earlier open doubts still apply** (not in this part): see parts 01–16 and the Al-Baqarah parts.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| വഞ്ചിച്ചെടുക്കുക / വഞ്ചന / വഞ്ചിക്കുക / വഞ്ചകൻമാർ | ghulul | embezzle / deceit (as Al-Baqarah part 30) / deceive / deceivers (as part 16) |
| കബളിപ്പിക്കുക / കബളിപ്പിച്ചെടുക്കുക / ചതിക്കുക | — | defraud (open doubt 6) / cheat |
| ‘ഗുലൂൽ’ | ghulul | ghulul |
| ഖേദം / വിലാപം | hasrah | regret (as Al-Baqarah part 25) / lamentation |
| പടയെടുക്കുക | ghuzzan | go out on a military expedition |
| സൗമ്യം / മാർദ്ദവം / മയം | lin | gentle, gentleness / soft / gentleness (as Al-Baqarah part 11) (open doubt 2) |
| പരുഷ സ്വഭാവി / ദുഷ്ടസ്വഭാവി / കഠിനഹൃദയൻ | fazz / ghaliz al-qalb | one harsh of character / one evil of character / one hard of heart |
| കൈവെടിയുക | khadhala | forsake |
| ഭരമേൽപിക്കുക / തവക്കുൽ | tawakkul | rely / tawakkul (as part 13) |
| കൂടിയാലോചന | shura | consultation (as Al-Baqarah part 38) |
| പാപമോചനം / പാപപൊറുതി | maghfirah | forgiveness of sins / forgiveness for sins (as Al-Baqarah part 51; correction 1) |
| പര്യവസാനം / പര്യവസാന സ്ഥലം | al-masir | final end (as Al-Baqarah part 51) / place of final end |
| പ്രീതി / കോപം / ക്രോധം | ridwan / sakhat | pleasure (as Al-Baqarah part 33) / anger / wrath (open doubt 3) |
| പദവി / പടി | darajat | rank / step (as Al-Baqarah part 36) |
| വില്ലാളികൾ | — | bowmen (അമ്പൈത്തുകാർ "archers", parts 13, 16) |
| നിവേദനമാർഗം | — | route of report |
| ഉദ്യോഗം | — | office |
| ‘ഹദ്‌യ’ | hadiyyah | ‘hadyah’ (gift) |
| മിമ്പർ / മഹ്ശർ | — | minbar / the Mahshar (as Al-Baqarah part 43) |
| കടപ്പാട് / വീഴ്ച | — | obligation (as Al-Baqarah part 36) / lapse |
| അധികാരസ്ഥൻമാർ / കയ്യയവുള്ളവർ | — | those in authority / the open-handed |
| ഉൽകൃഷ്ട സ്വഭാവം / ചര്യാചരിത്രങ്ങൾ | — | excellent character / conduct and history |
| അനുഗ്രഹം | — | favour (as Al-Baqarah part 14; correction 2) |
