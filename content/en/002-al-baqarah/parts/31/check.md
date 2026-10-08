# Check: Al-Baqarah part 31 (verses 188–195)

Checked on 2026-10-08 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 308–319 (book pp. 479–490). Each page was rendered at 150 dpi and read once in full (this range has no footnotes). The full (untruncated) `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary, and `pdftotext -bbox` was used for the vowel marks and word joins of the Arabic on pp. 479, 481, 482, 485, 488 and 489. The amanithafseer.com text was not needed beyond the translator's list of site-vs-book differences. Crops (300 dpi): وَأْتُوا الْبُيُوتَمِنْ أَبْوَابِهَا (p. 482; two crops, the first missed the line), وَقَاتِلُوهُمْ حَتَّى لاتَكُونَ فِتْنَةٌ (p. 485), وَلاتُلْقُوابِأَيْدِيكُمْ إِلَىالتَّهْلُكَةِ (p. 489).
- **Boundaries.** Part 30 ends on p. 478 with "… (ദാ; ജ.)"; PDF p. 308 (book p. 479) opens with the verse 188 panel, and this part starts there. This part ends on p. 490 with "… അടുത്ത വചനങ്ങളിൽ ഹജ്ജിനെയും ഉംറഃയെയും കുറിച്ച് പറയുന്നു:-", directly above the verse 196 panel on the same page. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 188–195), `words.json` (101 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images (panels pp. 479, 480–481, 482–483, 487, 489; word tables pp. 479, 481, 482, 483–484, 487, 489), with the line-end splits joined (തമ്മതമ്മിൽ, ചോദിക്കുന്നതാണ്, സമയനിർണയങ്ങളാകുന്നു, table സമയനിർണയങ്ങളാണ്, നിങ്ങളുടെമേൽ, (നടത്തപ്പെടുന്നവ)യാകുന്നു), the missing stop after "ചോദിക്കുന്നതാണ്" (v. 189), the stop after the last v. 189 gloss "നിങ്ങൾ വിജയം പ്രാപിക്കുക.", the missing stop after "[പാടില്ല]" (v. 193) and the stray ‘ before "അല്ലാഹുവിനെ" (v. 194) kept as printed. ZWNJ only where the chandrakkala is visible (‘ഫിത്‌ന’, വരുന്നത്‌വരെ); സ്നേഹിക്കുന്നതാണ് is printed as a conjunct (no ZWNJ).
- `[p. N]` markers: 480–482 and 484–490. P. 479 is the first page; p. 483 holds only panels and the start of the 191 table. [p. 481], [p. 484], [p. 488], [p. 489] stand at the start of commentaries whose panels/tables fill the tops of those pages. Page turns: [p. 480] after the word ‘eat’ (p. 479 ends "‘തിന്നുക’ എന്ന"); [p. 482] "determine and know *[p. 482]* the time" (നിർണയിച്ചറിയേ/ണ്ടുന്ന); [p. 485] "the true *[p. 485]* believers" (സത്യവിശ്വാ/സികൾക്കും); [p. 486] "Mus*[p. 486]*lims" (മുസ്‌ലിം/കൾ); [p. 487] "transgression *[p. 487]* is not allowed" (അതിക്രമം / പാടില്ല); [p. 490] "serious*[p. 490]*ly" (ഗൗരവ/പൂർവ്വം). All right.
- Groups: *[Verse 188]* | "### Section – 24" (വിഭാഗം – 24, printed above the 189 panel) | *[Verse 189]* | *[Verses 190–193]* (four panels in one run, one word table) | *[Verse 194]* | *[Verse 195]*. All match the print.
- Paragraph breaks as printed, including before (9) (p. 486) and before "വേണ്ടപ്പെട്ട …" (p. 490), and the break after "… (അ; ബ.)" before the heading.

## Corrections made (before → after)

### Added pronoun

1. v. 188 (`verses.json`), "നിങ്ങൾ അറിഞ്ഞുംകൊണ്ട് (തന്നെ)": "while you know it (indeed)" → "while you know (indeed)".

### Tense

2. p. 479, "പ്രത്യേകം നിരോധിച്ചിരിക്കുകയാണ്" (perfect): "it is specially prohibiting the trying to take …" → "it has specially prohibited the trying to take …".

### Dropped small word (paired എന്നും … എന്നും)

3. p. 479, "… വിധികർത്താക്കളെ സമീപിക്കുക- … സമർപ്പിക്കുക- എന്നും, … കൈക്കൂലി കൊടുക്കുക എന്നും ആകാവുന്നതാണ്": the two readings are set side by side (and "രണ്ടായാലും" follows): "may be to approach the judges …" → "may be both to approach the judges … – and to give them a bribe …".

### Order changed

4. p. 484, (2), "ഇങ്ങോട്ട് യുദ്ധം ചെയ്യണമെന്നുദ്ദേശ്യമില്ലാത്ത -സമാധാനപ്രിയരായ- സഖ്യ ഉടമ്പടികൾ കാരണം അടങ്ങിയിരിക്കുന്ന- കൂട്ടരുടെ നേരെ യുദ്ധത്തിനൊരുങ്ങുക,": "against a party who are peace-loving – who are quiet because of alliance covenants – having no intention of fighting this way; to put to death" → "against a party who have no intention of fighting this way – who are peace-loving – who are quiet because of alliance covenants –, to put to death" (the print's order, and its comma).

### Bracket attached to the wrong word

5. p. 485, "(193-ാം വചനത്തിലെ) ‘ഫിത്ന ഉണ്ടാകാതിരിക്കുന്നതുവരെ …": the bracket qualifies the quoted words, not "said": "has not Allah said (in the 193rd verse) ‘Fight until …" → "has not Allah said the (193rd verse's) ‘Fight until …".

### Arabic as printed (point c)

6. p. 489: the bbox layer puts the ى of إلى and the alif of the article in one word box, and the 300 dpi crop shows no gap between them, while a gap (0.8 pt, visible) stands before إلى: "وَلاتُلْقُوابِأَيْدِيكُمْ إِلَى التَّهْلُكَةِ" → "وَلاتُلْقُوابِأَيْدِيكُمْ إِلَىالتَّهْلُكَةِ".

No may/will errors, -ഉം future rendered as present, voice changes, reversed or "fixed" negations, changed reported speech, dropped തിരുമേനി, added ﷺ, silently corrected names or misprints, misplaced footnotes or translator words in round brackets were found apart from the above.

## Points the caller asked about

- **(a) TN on p. 488.** The image has "ദുൽക്വഅദ്, മുഹർറം എന്നീ തുടർച്ചയായ മൂന്ന് മാസങ്ങളും, റജബ് മാസവുംകൂടി നാല് മാസങ്ങൾ": two names for "three consecutive months". This is a printed omission the reader will notice, so a TN is warranted under rule 7. Its second sentence rests on the book's own next paragraph ("ആദ്യത്തെ മൂന്ന് മാസങ്ങൾ … ദുൽഹിജ്ജഃയിലാണെങ്കിലും … അതിന്റെ മുമ്പും പിമ്പും ഓരോ മാസവും"), not on outside knowledge, and it does not add the missing name to the text. Kept unchanged.
- **(b) DOUBTs.** p. 480 "(ദാ; ജാ; തി.)": the image clearly has ജാ (long ā); the Volume 1 key lists only ജ. DOUBT kept. p. 484 "അവന്റെ വാക്യം": kept ("sentence", with the DOUBT that Allah's word/kalimah is meant). No further DOUBT is needed: every other reading is clear on the images.
- **(c) Arabic**, confirmed with bbox and crops: لاتَأْكُلُواأَمْوَالَكُمْ (p. 479; no mark on لا, joined), لاتَقْتُلُواأَنْفُسَكُمْ (p. 479; joined), تأكُلُوا (p. 479; only the damma on ك), هِلاَل (fatha on the lam-alif), أهِلَّة (no mark on the alif), بِرّ (p. 481), وَأْتُوا الْبُيُوتَمِنْ أَبْوَابِهَا (p. 482; crop: a gap after وَأْتُوا (1.3 pt) and before أَبْوَابِهَا (0.9 pt), البيوت joined to من), الْفِتْنَةُ (p. 485), وَقَاتِلُوهُمْ حَتَّى لاتَكُونَ فِتْنَةٌ (p. 485; all gaps are 0.6–0.7 pt and the crop cannot separate them; the transcription as made is kept, لا without mark and joined), عُدْوَانَ (p. 487), حَرَام، حُرمة (p. 488; no mark on ر of حرمة), حُرُمَاتُ (p. 488), and the 2:195 phrase (correction 6). **Data-file forms**: ٱلشَّهۡرُ ٱلۡحَرَامُ (p. 488): the print has the article on both words (الشَّهْرُ الْحَرَامُ; the bbox shows a 1.5 pt gap between them), and the letters and vowels equal 2:194 (the site's "الشَّهْرُ حَرَام" is wrong); فِي سَبِيلِ ٱللَّهِ (p. 489; printed joined, letters and vowels equal). Kept. `npm run check` now lists seven Al-Baqarah "close but not exact" items: the two known ones (part 06, part 19), the four accepted in parts 26, 29 and 30, and from this part وَقَاتِلُوهُمْ حَتَّى لاتَكُونَ فِتْنَةٌ (2:193, 89%), which is the as-printed transcription (لا joined, no Uthmani signs) and is right under the rule for phrases.
- **(d) ﷺ and (r).** ﷺ is printed 7 times: p. 480 three (റസൂൽ, നബി തിരുമേനി, റസൂൽ), p. 481 two (നബി twice), p. 485 two ((4) നബി, റസൂൽ തിരുമേനി); none on the other pages. The English has exactly these 7. (r) is printed 7 times (Ibn Jarir, Umm Salamah, Ibn 'Umar, Abu Hurairah, Ibn 'Umar, Bukhari, Abu Ayyub al-Ansari); the English has the same 7. (a) once (Ibrahim, p. 486).
- **(e) Groups** and **(f) markers**: see "What was compared".
- **(g)** The v. 189 table split "സമയ/നിർണയങ്ങളാണ്" is joined, as the panel prints സമയനിർണയങ്ങളാകുന്നു. The translator's site-vs-book list was confirmed on the images (the site loses ണ്ട in several words, lacks the heading, drops the article in الشهر الحرام, adds و to لا تقتلوا, runs (8) and (9) together). Unbalanced marks, all mirrored: (4) closing only (p. 485); (5) "‘ഫിത്ന’- കുഴപ്പം- … കഠിനമായതാണ്.’" extra closing; the 193 question opened and never closed (p. 485); (9) a second opening before "അതായത്" and never closed (p. 487); the stray ‘ in v. 194.
- **(h) Terms**, checked by grep against earlier parts' tables: നാശം "ruin" agrees with an earlier table's "woe, ruin" for കഷ്ടം, നാശം (wail); നാശമുണ്ടാക്കുക "cause corruption" (parts 02–05) is a different expression (to make mischief), so "ruin" for the noun here is right. അതിക്രമം "transgression" and അക്രമം "wrong(doing)", അക്രമികൾ "wrongdoers" as earlier parts. പ്രതിക്രിയ "retaliation", പ്രതികാരം "retribution" as part 27. മോക്ഷം "salvation", വിജയം "success" as earlier. വിജ്ഞാനങ്ങൾ "wisdoms" (p. 481) follows വിജ്ഞാനം "wisdom" (parts 20, 23, 25). ശരീരം "frame" is new; ദേഹം is "self"/"body" earlier, so a separate word keeps them apart (open doubt 2). വാക്യം "sentence", വാക്ക് "word", പദം "term", വാചകം "wording" are kept apart in this part.
- **(i) Part 30 lessons.** No dropped verbs in quoted questions (p. 485 the questioner's "has not Allah said" is complete); no words added inside the author's square brackets; imperatives in -ണം are "you must" ((3), (4), v. 195 "you must work good"); the print's word order in pairs (correction 4) and bracket attachment (correction 5) fixed.

## Checked and left as they are

- v. 188 "Do not, you, eat …": mirrors the print's "നിങ്ങൾ, നിങ്ങളുടെ …" with its comma.
- v. 191 "Now, if they fight you (there), then (there) kill them" for "(അവിടെവെച്ച്)": the author's brackets; left.
- p. 479 the comma after "… നിരോധിച്ചിരിക്കുകയാണ്," before "the intention …" (run-on in the print); mirrored.
- p. 484 (1), p. 485 (5), p. 486 (7): the author's subjectless actives after Allah is named are given "He", as parts 29–30.
- p. 488 പുണ്യദിവസങ്ങൾ / പുണ്യസ്ഥലങ്ങൾ "holy days / holy places" while പുണ്യം is "merit": the compounds are idiomatic; left, noted.
- v. 195 "cast" for ഇട്ടേക്കുക against "throw" for ഇടുക (table and commentary): different Malayalam words; left.
- `part.json` verses "188-195", pages "479-490", PDF pages "308-319": correct.

## Open doubts for the reviewer

1. **ജാ** (p. 480, "(Da; Jā; Ti.)"): printed ജാ, the key has ജ (Ibn Majah).
2. **ശരീരം "frame"** (p. 479, "limbs of one single frame"): "body" would be the plain word, but ദേഹം already has "self"/"body".
3. **വാക്യം "sentence"** for Allah's word (p. 484), with its DOUBT.
4. **TN on p. 488** (point a).
5. **The 193 phrase on p. 485**: the spacing of its words cannot be settled from the image.
6. **Earlier open doubts still apply** (not in this part): see parts 13–30.

## New terms (not in the glossary; used consistently in this part)

The translator's list (in the brief), checked against the files:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| സ്വത്ത് / ധനം / സമ്പത്ത് / വസ്തുക്കൾ | amwal | property / wealth / riches / things |
| അന്യായം / ന്യായം | batil | unfairness / fair |
| വിധികർത്താവ് / ഭരണാധികാരി / അധികാരസ്ഥൻ / അധികാരികൾ | hukkam | judge / ruler / those in authority / the authorities |
| വിധി / വിധിക്കുക | hukm | ruling / rule |
| കൈക്കലാക്കുക / കൈവശപ്പെടുത്തുക | — | take into one's hands / take possession of |
| കൈക്കൂലി | rishwah | bribe |
| കുറ്റകരം | ithm | culpable |
| ശരീരം | — | frame (open doubt 2) |
| മാസപ്പിറവി / ബാലചന്ദ്രൻ | hilal / ahillah | new moon / young moon |
| സമയനിർണയം / കാലനിർണയം | mawaqit | time-determination / period-determination |
| പുണ്യം / പുണ്യവാൻ / പുണ്യാചാരം / പുണ്യദിവസം | birr | merit / the meritorious one / meritorious custom / holy day |
| വിജയം / മോക്ഷം | falah | success / salvation |
| യുദ്ധം / യുദ്ധം ചെയ്യുക / ധർമയുദ്ധം / സമരം | qital | war / fight / righteous war / struggle |
| അതിക്രമം / അതിരുവിടുക | i'tida' / 'udwan | transgression / overstep the bounds |
| അക്രമം / അക്രമികൾ / അക്രമകാരികൾ / ആക്രമണം | zulm | wrong(doing) / wrongdoers / perpetrators of wrong / attack |
| കൊല്ലുക / കൊലപ്പെടുത്തുക / വധിക്കുക | qatl | kill / slay / put to death |
| ഫിത്ന / കുഴപ്പം | fitnah | fitnah / disorder |
| ദീൻ / മതം | din | din / religion |
| വിരമിക്കുക | intaha | desist |
| കയ്യേറ്റം / മർദ്ദനം | — | encroachment / oppression |
| ഹറാം / പവിത്രം / അലംഘ്യം / ആദരണീയം / നിഷിദ്ധം | haram | haram / sacred / inviolable / venerable / forbidden |
| ഹുർമത്ത് | hurmah | hurmah |
| പ്രതിക്രിയ / പ്രതികാരം | qisas | retaliation / retribution (as part 27) |
| നാശം / അപായം / ആപത്ത് | tahlukah | ruin / danger / calamity |
| സൂക്ഷിക്കുക | ittaqa | guard against |
| ഇഷ്ടപ്പെടുക / സ്നേഹിക്കുക | ahabba | like / love |
| ഉപമാവാക്യം / അലങ്കാരപ്രയോഗം | — | parable-sentence / figurative usage |
| വാക്ക് / പദം / വാക്യം / വാചകം | — | word / term / sentence / wording |
| ഉദ്ദേശ്യം / വിവക്ഷ | — | intention / what is meant |
