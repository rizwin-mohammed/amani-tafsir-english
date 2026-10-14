# Check: Al-Baqarah part 37 (verses 229–230)

Checked on 2026-10-14 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 374–384 (book pp. 545–555). Each page was rendered at 150 dpi and read once in full, including the footnotes on pp. 551, 554 and 555. `pdftotext -bbox` was used for the vowel marks and word joins of every Arabic item (pp. 548–552, 554). The amanithafseer.com text was not used beyond the translator's notes on site-vs-book differences. Crops: الطَّلاقُمَرَّتَانِ on p. 549 (400 dpi; a first crop missed the line, two in all) and حَتَّىتَنْكِحَ زَوْجًاغَيْرَهُ on p. 552 (400 dpi); three crops in all.
- **Boundaries.** Part 36 ends on p. 545 with "… അല്ലാഹുവിൽ ശരണം!"; the heading "വിഭാഗം - 29" and the verse 229 panel follow directly on the same page, and this part starts there. This part ends on p. 555 with the San'ani quotation closing "… സന്ദർഭങ്ങളിലാകുന്നു.’"; the verse 231 panel follows directly on the same page, and the two footnotes (\*) and (\*\*) stand at its foot. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 229–230), `words.json` (47 entries: 229: 29; 230: 18), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` (panels pp. 545–546) and every `words.json` gloss (table pp. 546–547) match the images, in the printed order. No ZWNJ is printed in these items.
- `[p. N]` markers 547–555. P. 545 holds only the end of part 36, the heading and the start of the 229 panel, and p. 546 only the panels and the start of the table, so neither has a marker. [p. 547] stands at the start of the commentary, below the end of the table. Page turns: [p. 548] after "violating them" (നൽകുകയും / ചെയ്തിരിക്കുന്നു); [p. 549] at "(One:)"; [p. 550] before "to the old bond" (മുഖേന / പഴയബന്ധത്തിലേക്ക്); [p. 551] "gi*[p. 551]*ve" (കൊടു/ക്കുവാൻ); [p. 552] "no question *[p. 552]* of taking back" (പ്രശ്ന/മില്ല); [p. 553] "some *[p. 553]* fools" (ചില / വിഡ്ഢികൾ); [p. 554] before "In case one explains" (new sentence on the page); [p. 555] at the start of the quotation. All are right.
- Groups: "### Section – 29" (വിഭാഗം - 29, printed above the 229 panel) | *[Verses 229–230]*. One word table covers both verses; right.
- Footnotes: (\*) on خلع (p. 551) has its marker after "… സാങ്കേതികമായി പറയപ്പെടുന്നത്." and follows that paragraph (ending "… അഭിപ്രായപ്പെട്ടിരിക്കുന്നു."); (\*) راجع فتح الباري وغيره (p. 554) follows opinion (2), which holds its marker; (\*) and (\*\*) on p. 555 follow the quotation that holds both markers. All right.

## Corrections made (before → after)

### may / will

1. p. 548, "അൽപാൽപം വ്യത്യാസം കാണപ്പെടുമെങ്കിലും" (-ഉം future, not -ഏക്കും; compare "സാധുവായേക്കുമെങ്കിലും" "may be valid", p. 552): "Though slight differences may be seen," → "Though slight differences will be seen,".

### Voice changed

2. p. 550, "… കഴിയുകയില്ലെന്ന് കണ്ടാൽ" (active, subjectless): "But, if it is seen that the two of them will not live together …" → "But, if one sees that the two of them will not live together …".

### Order inside the author's bracket

3. p. 551, (നാല്:) "(എനി, അവൻ അവളെ വിവാഹമോചനം നടത്തിയെങ്കിൽ, അവനല്ലാതെ ഒരു ഭർത്താവിനെ അവൾ വിവാഹം കഴിക്കുന്നതുവരെ എനി അവൾ അവന് അനുവദനീയമാകുകയില്ല.)": "(Now, if he has carried out divorce of her, she will not now be permissible to him until she marries a husband other than him.)" → "(Now, if he has carried out divorce of her, until she marries a husband other than him, she will not now be permissible to him.)" (the printed order, as in the v. 230 panel).

### Dropped small word

4. p. 552, "ആ ഭാര്യാഭർത്താക്കൾ തമ്മിൽ മേലിൽ … രഞ്ജിപ്പോടെ കഴിഞ്ഞുകൂടുമെന്നുള്ള": the second തമ്മിൽ was not rendered: "will henceforth live on in amity," → "will henceforth live on with each other in amity,".

### Wording

5. p. 551, "എന്തെങ്കിലും വിഷമം കൂടാതെ": "without some trouble" → "without any trouble".

### Renderings brought into line

6. p. 549, "നല്ല നിലയിൽ": the same paragraph uses "manner" for രീതി ("മാന്യമായ രീതിയിൽ" "in a decent manner"), and the table has (നല്ലനിലക്ക്) "(in a good way)": "or releasing her while doing good – in a good manner.)" → "… – in a good way.)".
7. അനാചാരം: part 32's term table and part 17's commentary have അനാചാരങ്ങൾ "improper customs", and this part uses "practice" for സമ്പ്രദായം (as part 36) and "custom" for ആചാരം (v. 229 table): p. 550 "talaq that is an improper practice ( طَلَاق بدعة )" → "talaq that is an improper custom ( … )"; p. 554 "bid'ah (an improper practice)" → "bid'ah (an improper custom)".
8. തെണ്ടം (v. 229 table, ٱفۡتَدَتۡ "അവൾ സ്വയം മോചിതയായി, തെണ്ടം നൽകി"): parts 08, 18, 27, 29 and 32 render തെണ്ടം "ransom" with an open doubt: "she freed herself, gave a fine" → "she freed herself, gave a ransom [DOUBT: …]".

No dropped തന്നെ/-ഉം/എന്നോണം or list items (apart from 4), -ഉം futures rendered as present, tense changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, re-ordered sentences (apart from 3), silently corrected names or misprints, misplaced footnotes, translator words in round brackets, or added Arabic were found.

## Points the caller asked about

- **(1) DOUBTs**, all kept:
  - p. 548 "ലൂക്കോസ്: 16ൽ 18:1. കൊരിന്ത്യർ": printed so; whether "1." belongs to the Corinthians reference cannot be settled from the page alone.
  - p. 550 കൊടുത്തിരുന്നാവും: clearly printed; the English follows the likely കൊടുത്തിരുന്നാലും, and the DOUBT says so.
  - p. 550 the dots of "وَلا يَحِلُّلَكُمْأَنْتَأْخُذُوا.....": the bbox has no word for the dots; on the image they sit between "(രണ്ട്:)" and the Arabic, touching the Arabic's left end, which is the end of the Arabic read right to left but before it read left to right. The ambiguity is real; kept.
  - p. 554 "ള്വാഹിരീ ( الظاهرى )ത്വലാക്വിൽ ഇത് പെടുമോ": printed so, with no stop after the bracket; rendered literally with the DOUBT.
  - p. 554 footnote راجع فتح الباري وغيره: Arabic only; transcribed as printed (bare); the likely meaning is given inside the DOUBT, not as a translation.
- **(2) Footnotes**: see "What was compared".
- **(3) Arabic as printed**, confirmed from the bbox glyph boxes and marks:
  - حُدُودَاللَّهِ (p. 547) and إِنْظَنَّاأَنْ يُقِيمَاحُدُودَاللَّهِ (p. 552): د|الله 0.6 pt (joined); ن|ظ 0.7 (joined); ن|ي 0.8 (space); shadda with fatha on the lam of الله, kasra on ه.
  - (فالى اللّه المشتكى) (p. 548): separate shadda on الله, spaces 1.4 and 1.5 pt, no other marks. ( الطَلَاقُ وَالرجعة ): no shadda in the bbox; fatha on ط and on لا, damma on ق, fatha on و; ق|و 1.4 pt (space), و joined to الرجعة. ومن الله التوفيق: bare, spaced.
  - الطَّلاقُمَرَّتَانِ (p. 549, twice): ق|م 1.4 pt in the first, 1.0 pt in the second; the 400 dpi crop of the first shows only the ordinary gap after final ق, so kept joined in both. Shadda with fatha on ط, لا bare, damma on ق; fatha, shadda with fatha, fatha, kasra on مرتان. فَإِمْسَاكٌبِمَعْرُوفٍأَوْ تَسْرِيحٌبِإِحْسَانٍ, بَيْنُونَة صغرى, خلع, إن شاء الله: as in the file.
  - بَيْنُونَة كبرى, حَيْض, طَلَاق بدعة (no shadda; fatha on ط and لا) (p. 550): as in the file. وَلا يَحِلُّلَكُمْأَنْتَأْخُذُوا: لا|ي 1.0 pt (space), every other join ≤ 0.6 pt, no fatha on لا, all marks as in the file. إِلَّاأَنْ يَخَافَا-الخ: إلا|أن overlap, ن|ي 0.8 pt (space). فَإِنْخِفْتُمْأَلا يُقِيمَا-الخ: ن|خ 0.6 (joined), لا|ي 0.9 (space), لا bare.
  - فَلاجُنَاحَعَلَيْهِمَا فِيمَا افْتَدَتْبِهِ (p. 551): لا|ج 0.6, ح|ع 0.5 (joined); 0.8 and 1.5 pt (spaces); ت|ب overlap. فَإِنْطَلَّقَهَافَلاتَحِلُّلَهُ -الخ: all joined (≤ 0.6 pt); the "-الخ" is printed.
  - حَتَّىتَنْكِحَ زَوْجًاغَيْرَهُ (p. 552): ى|ت 0.5 (joined); ح|ز 1.1 pt; the crop shows this gap a little wider than the gaps between letters, so kept spaced; ا|غ 0.2 (joined). فَإِنْطَلَّقَهَافَلا جُنَاحَ -الخ: فلا|جناح 1.6 pt (space).
  - الظاهرى (p. 554): bare.
- **(4) Honorifics, table, heading.** ﷺ is printed 10 times: p. 548 one, p. 549 one, p. 550 one, p. 551 four, p. 552 one, p. 553 two. The English has exactly 10. (r) is printed 10 times: Thabit ibn Qais, Thabit, Bukhari (p. 551); Ibn Qayyim, Ibn 'Abbas, Ishaq ibn Rahawaihi, San'ani (p. 554); 'Umar, Ibn Taimiyyah, Hafiz Ibnul Qayyim (p. 555). The English has the same 10; Ibn Taimiyyah on p. 554 has none, as printed. 47 word-table entries. "### Section – 29" is right.
- **(5) Punctuation mirrored**: the unclosed ‘ of "‘Talaq is two times ( … )" in (1); the closing ’ after the Arabic bracket on p. 552; "(See Matthew: …)" with നോക്കുക moved to the front, as English needs; the split brackets "(thereafter,) … (customary) propriety" for "(പിന്നെ, ആചാര)മര്യാദ"; subjectless -ആം forms as "we may" (സംസാരിക്കാം, ഉദ്ധരിച്ചു മതിയാക്കാം). All kept.
- **(6) Names and sources**: as printed and as earlier parts write them: Ibn Taimiyyah (part 01), (Bu; Mu) (parts 25, 30), (Ti), (A), (Da.), (Ja) as earlier keys; Ibn Qayyim (ഇബ്നുക്വയ്യിം, p. 554) and Hafiz Ibnul Qayyim (ഹാഫിദുബ്നുൽക്വയ്യിമി, p. 555) follow the two printed forms. Thabit ibn Qais, Ishaq ibn Rahawaihi, 'Allamah Muhammad ibn Isma'il San'ani, ‘Bulughul Maram’ and (Ja; Ba; Ha) are new here.
- **(7) Terms**, checked by grep against earlier word tables, commentaries and check.md tables:
  - (നിയമ) അതിർത്തികൾ "(legal) boundaries": as part 30 (2:187). അതിര് "bound" as part 30's table ("bound (boundary)s"); പരിധി "limit", നിയമപരിധി "legal limit", നിയമാതിർത്തി "legal boundary": new, kept apart.
  - വിട്ടുകടക്കുക "go beyond", അതിക്രമിക്കുക "transgress" (as part 31, 2:190), ലംഘിക്കുക "violate", മറികടക്കുക "get past", അതിലംഘിക്കുക "infringe". Parts 04 and 13 render ലംഘിക്കുക "break" where a pact is broken; "violate" is used here for laws and boundaries (open doubt 3).
  - നിലനിറുത്തുക / നിലനിർത്തുക "establish": as parts 01, 08, 13, 16, 27 (tables).
  - തെറ്റില്ല "there is no wrong", കുറ്റമില്ല "there is no offence", വിരോധമില്ല "there is no objection": as parts 24, 26, 28, 32, 33.
  - പ്രതിഫലം "recompense": as parts 08, 18, 31 (tables); parts 10, 15, 16 have "reward" for the reward of deeds.
  - തെണ്ടം "ransom" (correction 8; open doubt 1).
  - വേർപ്പെടുത്തുക "separate": as part 15.
  - വിചാരിക്കുക "think": as part 08; ധരിക്കുക "suppose": as part 34; കരുതുക "consider".
  - ഗൗനിക്കുക "heed": as an earlier term table.
  - അനാചാരം "improper custom" (correction 7).
  - നിർവ്വഹിക്കുക "carry out" (p. 547): part 33 also has "carrying out" for നിർവ്വഹിക്കുക (2:200), while നടത്തുക is "carry out" throughout this part (open doubt 4).
  - സമ്പ്രദായം "practice" (as part 36; that part's open doubt 3 still applies). പതിവ് "habit" (as part 36). ഉപാധി "condition" (as part 35, p. 531).
  - കക്ഷിവഴക്ക് "factional quarrel": p. 551 uses it for a quarrel between wife and husband ("when there is no factional quarrel between them"); kept for consistency within the part (open doubt 5).

## Checked and left as they are

- v. 229 panel "keeping on, or sending off while doing good": the Malayalam -ഉക forms (വെച്ചുകൊണ്ടിരിക്കുക, പിരിച്ചയക്കുക) are rendered as verbal nouns, as the table's പിടിച്ചുവെക്കൽ; left.
- v. 230 table "if both have thought, if supposing" (രണ്ടാളും വിചാരിച്ചെങ്കിൽ, ധരിച്ചാൽ): the second gloss has no subject; "if supposing" adds none. Left.
- p. 550 "Unless, as said below, she both contracts another marriage": "she" is the only possible subject of കഴിക്കുകയും; left.
- p. 554 "There is a wish to quote here …" for the subjectless "… ഉദ്ധരിക്കുവാൻ ആഗ്രഹിക്കുന്നു": no pronoun added; left.
- p. 550 "സു:നിസാഉ്" (short u) against "സൂ: ത്വലാക്" (p. 549): both "Su:"; a spelling variant, no TN.
- `part.json` verses "229-230", pages "545-555", PDF pages "374-384": correct.

## Open doubts for the reviewer

1. **തെണ്ടം "ransom"** (v. 229 table), as parts 08, 18, 27, 29 and 32; DOUBT in the text.
2. **DOUBTs in the text**: the Bible reference (p. 548); കൊടുത്തിരുന്നാവും (p. 550); the place of the dots after وَلا يَحِلُّ… (p. 550); ള്വാഹിരീ ( الظاهرى ) (p. 554); the Arabic-only footnote (p. 554).
3. **ലംഘിക്കുക** "violate" here, "break" in parts 04 and 13 (of pacts).
4. **"carry out"** for both നടത്തുക and നിർവ്വഹിക്കുക (p. 547; part 33 also uses it for നിർവ്വഹിക്കുക).
5. **കക്ഷിവഴക്ക് "factional quarrel"** where the parties are wife and husband (p. 551).
6. **Joins of 1.0–1.4 pt**: ق|م in الطَّلاقُمَرَّتَانِ (kept joined) and ح|ز in حَتَّىتَنْكِحَ زَوْجًا (kept spaced), settled from crops.
7. **Earlier open doubts still apply** (not in this part): see parts 13–36.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| അതിർത്തി / നിയമാതിർത്തി / അതിര് / പരിധി / നിയമപരിധി | hudud | boundary (as part 30) / legal boundary / bound (as part 30) / limit / legal limit |
| വിട്ടുകടക്കുക / അതിക്രമിക്കുക / ലംഘിക്കുക / മറികടക്കുക / അതിലംഘിക്കുക | ta'adda | go beyond / transgress (as part 31) / violate (open doubt 3) / get past / infringe |
| നിലനിറുത്തുക / നിലനിറുത്തിപ്പോരുക / സ്ഥാപിക്കുക | aqama | establish (as earlier tables) / keep on establishing / set up |
| പിരിച്ചയക്കുക / പിരിച്ചുവിടുക / വിട്ടയക്കുക / വിടുക / വേർപ്പെടുത്തുക | tasrih | send off / release / let go / send away / separate (as part 15) |
| പിടിച്ചുവെക്കൽ / വെച്ചുകൊണ്ടിരിക്കുക | imsak | holding back / keeping on |
| മോചിതയാകുക / മോചനം / തെണ്ടം | iftada | free herself / liberation / ransom (as parts 08–32; correction 8; open doubt 1) |
| തെറ്റില്ല / കുറ്റമില്ല / വിരോധമില്ല / വിരോധിക്കുക / നിരോധം | la junaha | there is no wrong / no offence / no objection (as earlier parts) / disallow / prohibition |
| പ്രതിഫലം | — | recompense (as earlier tables) |
| ഖുൽഉ് / മഹ്ർ / വിവാഹമൂല്യം | khul' / mahr | khul' / mahr / marriage-price |
| വേർപാട് | baynunah | separation |
| അനാചാരം / ബിദ്അത്ത് | bid'ah | improper custom (as parts 17, 32; correction 7) / bid'ah |
| ചടങ്ങ് / ചടങ്ങ് നിൽക്കുക / ചടങ്ങ് നിറുത്തൽ | tahlil | ceremony / standing for the ceremony / making stand for the ceremony |
| സാധു(ത) / നിരർത്ഥം | — | valid(ity) / void |
| ശാഖാ വിഷയങ്ങൾ | furu' | subsidiary matters |
| കക്ഷിവഴക്ക് / വഴക്ക് / വക്കാണം | — | factional quarrel (open doubt 5) / quarrel / wrangle |
| ആനുകൂല്യം | — | concession |
| വിചാരിക്കുക / ധരിക്കുക / കരുതുക | zanna | think (as part 08) / suppose (as part 34) / consider |
| ഭയപ്പെടുക / ഗൗനിക്കുക / ഓർമിപ്പിക്കുക | — | fear / heed (as an earlier table) / remind |
| എനി | — | now |
| സംഭാവന / ദാനം | — | donation / gift |
| രഞ്ജിപ്പ് / സ്വരച്ചേർച്ച / വിഘാതം | — | amity / harmony / disruption |
| കോപശാപം | — | wrath and curse |
| രത്നച്ചുരുക്കം / ചുരുക്കം | — | précis / summary |
| വാചകം / വാക്യം | — | statement / sentence |
| കൂറ്റൻ | — | bull |
| സമ്പ്രദായം / പതിവ് | — | practice / habit (as part 36) |
