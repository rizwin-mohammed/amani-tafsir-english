# Check: Al-Baqarah part 32 (verses 196–199)

Checked on 2026-10-08 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 319–331 (book pp. 490–502). Each page was rendered at 150 dpi and read once in full, including the footnotes on pp. 493 and 495. The full (untruncated) `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary, and `pdftotext -bbox` was used for the vowel marks and word joins of every Arabic phrase on pp. 492–502. The amanithafseer.com text was not needed beyond the translator's list of site-vs-book differences. Crops (300 dpi): أحُْصِرْ (p. 493; two crops, the first missed the line), عَرفَات، عَرْفَة (p. 500; two crops, the first cut the line), ومن الله التوفيق (p. 502).
- **Boundaries.** Part 31 ends on p. 490 with "… ഹജ്ജിനെയും ഉംറഃയെയും കുറിച്ച് പറയുന്നു:-"; the verse 196 panel follows directly on the same page, and this part starts there. This part ends on p. 502 with "… അവയുടെ ജീവൽവശമാകുന്നു. ومن الله التوفيق", directly above the verse 200 panel on the same page. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 196–199), `words.json` (94 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added. Both footnotes on p. 493 ((\*) after item 3, (\*\*) after item 4) and the footnote on p. 495 (after the Ka'b ibn 'Ujrah paragraph, which holds its marker) stand right after their paragraphs and are complete.
- `verses.json` and every `words.json` gloss match the images (panels pp. 490–491 and 496–497; word tables pp. 491–492 and 497–498), with the line-end splits joined (ബലികർമമോ, എത്തുന്നവരെ, ബലിമൃഗത്തിൽ, ഒഴുകിപ്പോരുന്നേടത്തുനിന്ന്) and the printed repetition "‘അറഫാത്തി’ൽനിന്ന് / നിന്ന്" kept. ZWNJ only in ഹദ്‌യ് and തക്വ്‌വ, where the chandrakkala is visible; ‘മുത്അത്’ has none (ത്+അ cannot form a conjunct, so the print looks the same either way).
- `[p. N]` markers: 492–496 and 498–502. P. 491 holds only the end of the verse 196 panel and the start of its table, and p. 497 only panels and the start of the 197–199 table, so neither has a marker. [p. 492] and [p. 498] stand at the start of the two commentaries, whose tables fill the tops of those pages. Page turns: [p. 493] after "( جِعْرانة )," (p. 493 begins "എന്ന പേരിൽ ഇത് അറിയപ്പെടുന്നു"); [p. 494] before "what seems right" (ശത്രുക്കൾ / നിമിത്തമോ); [p. 495] "Then *[p. 495]* the noble Prophet said"; [p. 496] "re*[p. 496]*leased" (ഒഴി/വായി); [p. 499] "intercourse with women*[p. 499]*" (സംസർഗ/മായിരുന്നു); [p. 500] before "in a general meaning"; [p. 501] "Even so, *[p. 501]* dhikr"; [p. 502] after "(Dhikr)". Where English word order differs, each marker stands as near the turn as the sentence allows.
- Groups: *[Verse 196]* | "### Section – 25" (വിഭാഗം – 25, printed above the 197 panel) | *[Verses 197–199]* (three panels, one shared word table). All match the print.

## Corrections made (before → after)

### One English for two Malayalam words

1. p. 492, "സുപ്രസിദ്ധ ഉടമ്പടി", while "പ്രസിദ്ധമായ" (Hajjat al-Wida', same page) is "famous"; the intensifier സു- is now kept: "according to the famous covenant" → "according to the very famous covenant".

### DOUBT added

2. p. 493, "സർവ്വധന്യനാണല്ലോ അവൻ": the word (first occurrence) literally means one wholly rich or wholly blessed; "the wholly Self-Sufficient One" follows the clause that defines it. A DOUBT now gives the options: "the wholly Self-Sufficient One" → "the wholly Self-Sufficient One *[DOUBT: സർവ്വധന്യൻ, literally “one wholly rich” or “one wholly blessed”; …; “the All-Rich One” is the literal option.]*".

No dropped small words, may/will errors, -ഉം future rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced footnotes or translator words in round brackets were found.

## Points the caller asked about

- **(a) TN on شَدِيدُ.** The image clearly has "കഠിനമായവർ" (plural -വർ) in the v. 196 table; the panel itself has the singular "… എടുക്കുന്നവനാണെന്ന്". The English "severe ones" mirrors the print, and without a note a reader would take the plural as said of Allah. The TN only states the form and that the singular appears to be meant, which rests on the book's own panel; it is warranted under rule 7 and neutral. Kept.
- **(b) DOUBTs.** തെണ്ട(ം) "ransom" in v. 196: the open question of parts 08, 18, 27, 29; the author's own bracket പ്രായശ്ചിത്തം "atonement" is noted in it. Kept. The dots after لَيْسَعَلَيْكُمْ جُنَاحٌ (p. 500) touch the left end of the Arabic on the image, as in parts 21–29. Kept. One DOUBT added (correction 2). Nothing else on the images is unclear.
- **(c) Arabic as printed**, confirmed with bbox and crops: حَجةُ الوِدَاع (p. 492; a 1.2 pt gap between the words, damma on ة, no shadda on ج); جِعْرانة (sukun on ع only); والله اعلم and الله اعلم (pp. 493, 495; bare alif, spaced); أحُْصِرْ (p. 493; crop: damma and sukun stacked over ح, bare hamza-alif); هَدْيِ (p. 494; sukun on د, kasra on ي); مَحِل (no shadda); كَعْب بِنُ عُجْرة (1.5 pt gaps, spaced; no mark on ر/ة); مُد, صَاع (footnote); اِحْرَام, تَحلّل, مِيقَات (p. 495); تَمَتَّعَبِالْعُمْرَةِإِلَى الْحَجِّ (p. 496; the glyph boxes overlap at تمتع|بالعمرة and بالعمرة|إلى, so joined; space before الحج); إِفْرَاد, قران, تَمَتَّع, تَمَتُّعْ, هَدْي, والله الموفق والمعين (p. 496); رَفَث, فُسُوق, جِدَال with Latin commas (p. 498); زاد, تَقْوَى (p. 499); وَاتَّقُونِ يَاأُولِيالأَلْبَابِ (p. 500; وا joined 0.4 pt, space 0.8 pt before يا, أولي joined to the article 0.4 pt); وَلِبَاسُالتَّقْوَىذَلِكَ خَيْرٌ (gaps 0.2/0/0.1, space 0.6 pt before خير); عكاظ، مجنة، ذو المجاز (spaced); لَيْسَعَلَيْكُمْ جُنَاحٌ (0.3 pt joined, 0.7 pt space); افاضة; عَرفَات، عَرْفَة (crop: no mark on ر of the first word; the mark on ر of the second has the sukun shape of this font, not the "w" of shadda, and the text layer encodes it as sukun); مُزْدَلِفَة (the 0.8 pt gap follows non-joining د: one word); قُزح; الْمَشْعَرِالْحَرَامِ (joined); ثُمَّ, نَحْنُ الحمس (1.5 pt, spaced), ذِكْر (p. 501); ومن الله التوفيق (p. 502; crop: the small gap after و is the font's spacing after a non-joining letter, much smaller than the 3.0–3.5 pt gaps between the words, so ومن is one word; bare alif in الله as the ﷲ ligature). **Data-file form**: فَرَضَ فِيهِنَّ ٱلۡحَجَّ (p. 498): the print's letters and vowels (sukun on the lam of the article included) equal 2:197 and its words are spaced (0.7 and 1.3 pt); kept.
- **(d) ﷺ and (r).** ﷺ is printed 9 times: p. 492 five (നബി തിരുമേനി, നബി ﷺ യും twice, നബി ﷺ യുടെ, നബി ﷺ ചെയ്തിട്ടുള്ള), p. 493 one, p. 494 three (നബി ﷺ യും, നബി ﷺ യുടെ twice); none on the other pages and none at തിരുമേനി alone (pp. 492, 495). The English has exactly these 9. (r) is printed 11 times (Ibn Jarir, Abu Bakr, Raghib, Bukhari, Ibn 'Abbas, Bukhari, Bukhari, Ibn 'Abbas, Ibn Jarir, 'Umar, Abu Salih); the English has 11. (a) once (Prophet Ibrahim, p. 501).
- **(e) Groups** and **(f) markers**: see "What was compared".
- **(g)** v. 198 "‘അറഫാത്തി’ൽനിന്ന് / നിന്ന്": the word is repeated across the line turn; it is kept in `ml`, and the English gives "from" once. The meaning is certain and the slip is visible in the Malayalam, so neither a DOUBT nor a TN is added (earlier checks did not add TNs for misprints whose meaning is certain); the reviewer may prefer a TN. Place names follow the print (Ji'ir Ranah for ജിഇർ റാനഃ, 'Umrat al-Ji'ir Rana for ഉംറതുൽ ജിഇർ റാന, 'Ukkaz, Majnah, Dhul-Majaz, Quzah). "പ്രസാ." in the p. 495 footnote is "– Publ.". The footnote also prints both സ്വാഉ് and സാഉ്; the English has sa' for both. Unbalanced marks mirrored: Ka'b's reply (closing only, p. 495), Ibn Jarir's report (two openings, one closing, p. 500); the ‘ before "tahallul" closes after the bracket, as printed. The translator's site-vs-book list was confirmed on the images where it touched this part's text (ഹുദൈബിയ്യ, lost ണ്ട, joined words, the site's spaced and Uthmani forms of the Arabic, the missing heading).
- **(h) Terms**, checked by grep against earlier parts: ബലി "sacrifice", ബലികർമം "rite of sacrifice", ബലി കഴിക്കുക "offer in sacrifice"; part 20's table has ബലികാര്യങ്ങൾ "matters of sacrifice", while part 26 used "immolation" for ബലി in a list beside യാഗം "sacrificial rite" (see open doubt 4). അനാചാരങ്ങൾ "improper customs" agrees with part 17's commentary ("superstitions and improper customs"); part 20's check.md list says "improper practices", but no published text uses that phrase. സ്മരിക്കുക "remember" (as part 23's table), ഓർമിക്കുക "keep in mind" (as part 23's table), ഓർക്കുക "bear in mind": kept apart throughout. അനുഷ്ഠിക്കുക / അനുഷ്ഠാനങ്ങൾ "practise / practices" and ആചരിക്കുക / ആചരണം "observe / observances": kept apart throughout (part 29 open doubt 4 on this family still applies). തെറ്റ് "wrong" (as part 28's table "a wrong"); റബ്ബ് "Rabb" (as parts 04–08). മനുഷ്യർ "mankind" (as most earlier tables) and മനുഷ്യൻമാർ (v. 199 panel, first occurrence) "human beings", so the two stay apart.
- **(i) Part 31 lessons.** No added pronoun objects; perfect tenses kept (e.g. "has strictly disallowed", "has favoured", "has commanded"); paired എന്നും … എന്നും kept ("and that … and that …", p. 494, p. 499); clause order in list items as printed; brackets attached as printed; every Arabic join decided (point c).

## Checked and left as they are

- p. 494 "From its having said …", p. 495 "Because it has said …", p. 496 "that it said …", p. 500 "it has said thus in Su: A'raf 26": subjectless എന്ന് പറഞ്ഞ… with the verse as the understood speaker; "it" is a neutral subject, and p. 499 and p. 501 "He has encouraged …", "He also alerts …" follow the earlier convention for subjectless actives after Allah is named.
- p. 500 "the sentence may also be one that embraces the idea in both these interpretations, … in a general meaning": in the print ഉൾക്കൊള്ളുന്ന qualifies "a general meaning"; the English keeps the same sense; left.
- ഉംറഃ കർമം "the 'umrah rite" (lower case, pp. 492, 495), as earlier parts write it; left.
- p. 495 the full stop after الله اعلم: punctuation only; not cropped; left.
- Numeral -ഉം ("ഈ മൂന്ന് കാര്യങ്ങളും", "അവസാനത്തെ രണ്ട് കാര്യങ്ങളും") rendered "these three things", "the last two things": idiomatic "all N"; left.
- `part.json` verses "196-199", pages "490-502", PDF pages "319-331": correct.

## Open doubts for the reviewer

1. **തെണ്ട(ം)** "ransom" (v. 196, word table, commentary), as parts 08, 18, 27, 29.
2. **Position of the dots** after لَيْسَعَلَيْكُمْ جُنَاحٌ (p. 500), as parts 21–29.
3. **സർവ്വധന്യൻ** (p. 493; correction 2).
4. **ബലി** "sacrifice" here (Hajj sacrifice, ബലി കഴിക്കുക "offer in sacrifice") against part 26's "immolation" for ബലി beside യാഗം; part 20 has "sacrifice".
5. **TN on شَدِيدُ** (point a) and the **repeated നിന്ന്** in v. 198 left without a TN (point g).
6. **Earlier open doubts still apply** (not in this part): see parts 13–31.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഹദ്‌യ് / ബലിമൃഗം | hady | hady / sacrificial animal |
| ബലി / ബലികർമം / ബലി കഴിക്കുക | nusuk / hady | sacrifice / rite of sacrifice / offer in sacrifice (open doubt 4) |
| മുടക്ക് / തടസ്സം / തടയുക | ihsar | hindrance / obstruction / prevent, stop |
| സുഖമെടുക്കുക / തമത്തുഅ് | tamattu' | take enjoyment / tamattu' |
| നിർഭയം / നിർഭയാവസ്ഥ | amn | security / state of security |
| ഒഴുകിപ്പോരുക / ഒഴുകി വരുക | ifadah | flow forth / come flowing |
| സ്മരിക്കുക / ഓർമിക്കുക / ഓർക്കുക | dhikr | remember / keep in mind / bear in mind |
| സ്ത്രീ സല്ലാപം / തോന്നിയവാസം / തർക്കം | rafath / fusuq / jidal | amorous talk with women / licentiousness / dispute |
| യാത്രാഭക്ഷണം / വിഭവം | zad | travel-food / provision |
| ശിക്ഷാ നടപടി / നടപടി | 'iqab | punitive action / action |
| ആനുകൂല്യം / പ്രതിവിധി / പരിഹാരമാർഗം | — | concession / remedy / means of redress |
| അനുഷ്ഠിക്കുക, അനുഷ്ഠാനങ്ങൾ / ആചരിക്കുക, ആചരണം | — | practise, practices / observe, observances |
| അനാചാരങ്ങൾ / ദുഃസ്സമ്പ്രദായം | — | improper customs (as part 17) / evil usage |
| സർവ്വധന്യൻ | — | the wholly Self-Sufficient One (open doubt 3) |
| ഐച്ഛികം / ഉടമ്പടി / സന്ധി | — | optional / covenant / truce |
| സന്ദർഭം / അവസരം | — | occasion / juncture |
| തെറ്റ് | junah | wrong |
| റബ്ബ് | rabb | Rabb |
| ഭയഭക്തി / തക്വ്‌വ | taqwa | God-fearing reverence / taqwa |
| സുപ്രസിദ്ധ / പ്രസിദ്ധമായ | — | very famous / famous (correction 1) |
| മനുഷ്യർ / മനുഷ്യൻമാർ | al-nas | mankind / human beings |
