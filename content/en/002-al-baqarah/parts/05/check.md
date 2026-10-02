# Check: Al-Baqarah part 05 (verses 28–30)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 46–56 (book pp. 217–227), rendered at 150 dpi and read in full. There are no footnotes on these pages. The verse panels and word tables (pp. 217, 218, 220) were re-read at 300–600 dpi; the Arabic of Raghib (p. 221), Ibn Kathir (p. 222), السلطان العظيم and the other Arabic words on p. 221, the word കരുതിവശായ (p. 218) and the ellipsis on p. 219 at 500–1600 dpi. The `ml2uni.py` text layer was used only for spelling (on these pages it is incomplete).
- Scope: p. 227 (PDF 56) ends the verse 30 commentary with the author's lead-in sentence "Allah points out the basis of man's superiority:", and the verse 31–33 panel follows lower on that page. So the part ends on a complete group, as the translator said.
- `part.json`, `verses.json` (verses 28–30), `words.json` (49 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. No sentence is missing or added.
- `verses.json` Malayalam and every `words.json` gloss were compared letter by letter with the images; they match. Printed forms kept: ‘ഖലീഫ:യെ’ with a colon (see below), ’തക്വ്ദീസ്’ with a closing-type mark at the start, ‘ഞാൻ … with no matching close in verse 30.
- Quran quotations (76:1, 30:27, 7:29, 2:29 phrases, 79:30, 2:30 phrases, 35:39, 27:62, 43:60, 19:59, 15:28, 21:27, 38:26, 6:165, 6:91) are copied from `data/quran-uthmani.json`; `npm run check` reports 0 "close but not exact" for this part (the one close match it lists, تَابَ إِلَى الله, is in part 06).
- `[p. N]` markers 217–227 checked against the printed page numbers. Glossary renderings (Rabb where the author writes റബ്ബ്, Lord for രക്ഷിതാവ്, (r), (a), ﷺ) and the renderings of parts 01–04 (cause corruption, Quran commentators, ayahs, mushriks, wahy, guidance) are used.

## Corrections made (before → after)

### Arabic transcribed as printed (p. 221, p. 222)

1. Raghib (p. 221), checked at 900–1200 dpi: the image prints عَن with no kasra on the nun, الْغَيرِ with no sukun on the ya, اللَّه with shadda and no damma, and الأَرْضِ with no sukun on the lam.
   "عَنِ الْغَيْرِ" → "عَن الْغَيرِ"; "اسْتَخْلَفَ اللهُ" → "اسْتَخْلَفَ اللَّه"; "فَى الْأَرْضِ" → "فَى الأَرْضِ". The printed فَى (fatha, not فِي) and الْمَنْدُوبِ عَنْهُ are as printed and were kept.
2. p. 221, السلطان العظيم (1600 dpi): there is no kasra under the ظ. "الْعَظِيمُ" → "الْعَظيمُ".
3. Ibn Kathir (p. 222), 1600 dpi. The vowels were made as printed: أَي (no sukun), قَوْما (no tanween), بَعْد (no vowel on the dal, twice), قَرْنً (second قرن printed with -an and no alif), وَجِيلاً, جِيل (no tanween).
   "أَيْ قَوْمًا يَخْلُفُ بَعْضُهُمْ بَعْضًا قَرْنًا بَعْدَ قَرْنٍ وَجِيلًا بَعْدَ جِيلٍ" → "أَي قَوْما يَخْلُفُ بَعْضُهُمْ بَعْضًا قَرْنًا بَعْد قَرْنً وَجِيلاً بَعْد جِيل", and a DOUBT was added about the word order (see open doubt 1).

### Additions not in the Malayalam

4. p. 226, വഹ്‌യ് മുഖേനയും has no bracket on this page (the "(divine revelation)" gloss was the author's in part 04, not here; round brackets mark the author's additions):
   "through wahy (divine revelation) and through the scriptures" → "through wahy and through the scriptures".
5. Word table, verse 30, وَإِذۡ قَالَ = പറഞ്ഞ സന്ദർഭം. "(He)" was the translator's word in round brackets:
   "the occasion when (He) said" → "the occasion of saying".
6. p. 223, the author's bracket is "(അദ്ദേഹം തുടരുന്നു)" with no colon: "(He continues:) 'When" → "(He continues) 'When".
7. p. 220, the Malayalam has no possessive (… ജീവിതം നൽകിയതിനെയും, … സൃഷ്ടിച്ചതിനെയും), and കൽപിച്ചിട്ടുള്ള is "has ordained":
   "of **His giving** life to man … and in the 29th of **His creating** the resources … that Allah **had** ordained" → "of **having given** life to man … and in the 29th of **having created** the resources … that Allah **has** ordained".

### Meaning, tense, word order

8. p. 223, 21:27 rendering മുൻ കടക്കുകയില്ല is "will not", like ഒന്നും പറയുകയില്ല just before it (already "will not say"):
   "(They **do not** go ahead of Him in speech. (21: 27)." → "(They **will not** go ahead of Him in speech. (21: 27)."
9. Verse 30 (verses.json): the first അതിൽ belongs to നാശമുണ്ടാക്കുക (അതിൽ നാശമുണ്ടാക്കുകയും, രക്തം ചിന്തുകയും ചെയ്യുന്നവരെ നീ അതിൽ ഏർപ്പെടുത്തുകയോ), as the commentary on p. 223 also renders it:
   "those who cause corruption and shed blood in it?!" → "those who cause corruption in it and shed blood?!".
10. p. 224, പുറകിൽ വന്ന ആൾ: "came after" → "came behind", as പുറകിൽ / പിന്നിൽ വരിക is "come behind" everywhere else in this part:
   "(the one who came after)" → "(the one who came behind)".

No dropped sentences, misplaced page markers, reversed negations or may/will errors were found.

## Checked and left as they are

- **ഖലീഫ:യെ (verse 30 panel).** At 600 dpi the mark after ഫ is two solid square dots, the same shape as the colon after പറഞ്ഞു: in the next line, not the visarga ഃ of the word table (ഖലീഫഃ, printed in the lighter font with two small rings). The text layer also gives ":". Kept as a colon.
- **Raghib's الْمَنْدُوبِ عَنْهُ** (p. 221): printed exactly so (900 dpi); kept.
- **TN p. 217, unclosed quote before 76:1:** a single ‘ stands before هل أتى and no closing mark follows. Correct.
- **TN p. 217, "28" for 30:27:** the image prints (وَهُوَ أَهْوَنُ عَلَيْهِ – الروم :٢٨). Correct.
- **TN p. 218, കരുതിവശായ:** confirmed at 600 dpi; the printed word is കരുതിവശായ. The TN is fine.
- **The plural pair (p. 221):** the image prints خلفاء to the right of خلائف (read right to left: خُلَفَاءُ، خَلَائِفُ), matching the Malayalam order (ഖുലഫാഉ്, ഖലാഇഫ്). Correct. قُدَّامْ is printed with sukun; correct.
- **'khilafah alone, 'khala'if, 'successor … representative and so on** (unclosed quotes): they mirror the printed ‘ഖിലാഫത്തിനു, ‘ഖലാഇഫ്-, ‘പിൻഗാമി, … with no closing mark. Left.
- **"…." after ٱلسَّمَآءِ (p. 219):** the image prints four dots inside the bracket. Left.
- **[p. 221], [p. 222], [p. 224], [p. 227] markers:** these pages begin mid-sentence (ആരംഭിക്കുന്ന പതിവ്; ത്തുന്ന ആൾ; ഉദ്ധരിക്കാം; വാക്യം മുഖേന). Each marker sits at the nearest matching point in the English. Acceptable.
- **"as an unknown thing"** (p. 217, അജ്ഞാതനായി): literally "as an unknown one"; the sense is the same. Left.
- **Heading "### Section – 4"**: the author's വിഭാഗം–4 (p. 220), correctly placed after the end of the verse 29 commentary and before the verse 30 panel.
- **Group markers** *[Verse 28]*, *[Verse 29]*, *[Verse 30]*: **not the author's words**; navigation aids kept as in parts 01–04. They match the author's groups on the images (panels on pp. 217, 218, 220). See the note in part 02's `check.md`.
- `part.json` verses "28-30", pages "217-227", PDF pages "46-56": correct.

## Open doubts for the reviewer

1. **Word order of Ibn Kathir's Arabic** (p. 222). New DOUBT. The phrase is printed as two pieces with a wide gap: قَرْنًا بَعْد قَرْنً وَجِيلاً بَعْد جِيل stands at the right (next to the Malayalam bracket), أَي قَوْما يَخْلُفُ بَعْضُهُمْ بَعْضًا at the left. Read right to left, the قرنا piece would come first; but أي ("that is") must open the explanation, and Ibn Kathir's own text reads أي قوما يخلف بعضهم بعضا قرنا بعد قرن وجيلا بعد جيل. It is given in that order. Please confirm. The second قرن is printed قَرْنً (the usual form is قَرْنٍ); transcribed as printed.
2. **Earlier open doubts still apply** (not in this part): ലക്ഷ്യം (parts 01–02), the hadith abbreviations (part 01), പതിച്ചവരാണവർ (part 02), വേദവാദികൾ and അമറാത്തി (part 03), ഇവിടെ അതുകൊണ്ട് വിവക്ഷ (part 04), and the group markers (part 02).

## New terms (not in the glossary; used consistently in this part)

Includes the translator's list. Flagged for Rizwin to confirm:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഖലീഫഃ / ഖിലാഫത്ത് | khalifah / khilafah (خليفة / خلافة) | khalifah / khilafah (plural "khalifahs" for ഖലീഫഃകൾ / ഖലീഫഃമാർ) |
| ഖലാഇഫ് / ഖുലഫാഉ് / ഖൽഫ് | khala'if / khulafa' / khalf | khala'if / khulafa' / khalf |
| പിൻഗാമി / അനന്തരഗാമി / പ്രതിനിധി | — | successor / one who comes after / representative |
| പിൻഗാമിത്വം / പ്രാതിനിധ്യം | — | successorship / representation |
| മലക്കുകൾ | mala'ikah | angels |
| തസ്ബീഹ് (സ്തോത്രകീർത്തനം) | tasbih | tasbih (singing of praise) |
| തക്വ്ദീസ് (പരിശുദ്ധി വാഴ്ത്തൽ) | taqdis | taqdis (extolling of holiness) |
| യുക്തിരഹസ്യങ്ങൾ | hikmah | wise secrets |
| ക്വുർആൻ വ്യാഖ്യാതാക്കൾ | mufassirun | Quran commentators |
| നിർജ്ജീവികൾ / നിർജ്ജീവാവസ്ഥ | amwat (أموات) | lifeless / the lifeless state |
| ആകാശങ്ങൾ | samawat (سماوات) | skies (verse 29 and its commentary); "the heavens" for ആകാശഭൂമികൾ (the heavens and the earth) |
| അത്രെ | — | indeed (e.g. "He indeed is the One who …") |
| സുജൂദ് | sujud | sujud |
| സ്വിദ്ദീക്വുകൾ / ശുഹദാക്കൾ | siddiqun / shuhada' | siddiqs / martyrs |
| ഔലിയാഅ് | auliya' | 'auliya'' (with the author's "the people who are His friends") |
| ജിന്ന് വർഗം | — | the race of the jinn |
| ഹവ്വാഅ് | Hawwa' | Hawwa' |
