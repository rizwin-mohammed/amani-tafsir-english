# Check: Al-Baqarah part 08 (verses 42–50)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 76–86 (book pp. 247–257), rendered at 150 dpi and read in full, including the one footnote (p. 255). The verse panels and word tables (pp. 247, 249, 250, 251–252, 254), the Arabic on pp. 248 and 251, the word തെണ്ടം (pp. 252, 253), ഇബ്നുഹാതിം (p. 251, also in the text layer), മുഹർറ (p. 257) and the verse 50 panel were re-read at 300–600 dpi. The `ml2uni.py` text layer was used only for spelling (on these pages it is incomplete).
- Scope: the part starts at the verse 42–43 panel on p. 247, directly after part 07's last paragraph (Baidawi on فَارْهَبُونِ / فَاتَّقُونِ), and ends on p. 257 with the paragraph on fasting on 'Ashura' ("… part of the Sunnah of the Prophet ﷺ"), directly above the verse 51–53 panel. Both boundaries confirmed.
- `part.json`, `verses.json` (verses 42–50), `words.json` (81 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. No sentence is missing or added. The footnote (\*) on p. 255 (racial mentality) is present, right after the paragraph holding its marker ("… being lost to them (\*)").
- `verses.json` Malayalam and every `words.json` gloss were compared letter by letter with the images; they match. Printed forms kept: അനുഭവിപ്പിച്ചുക്കൊണ്ടിരിക്കെ (word table v. 49), അങ്ങനെ നിങ്ങൾ നാം രക്ഷപ്പെടുത്തി (word table v. 50, നിങ്ങൾ for നിങ്ങളെ), പ്രായശ്ചിത്തം,തെണ്ടം with no space (word table v. 48), the missing question mark after ചിന്തിക്കുന്നില്ലേ (word table v. 44).
- Quran quotations (2:42–43 phrases, 61:2, 2:153, 39:10, 29:45, 2:45 phrase, 3:110, 2:49 phrase, 21:35, 2:49 phrases) are copied from `data/quran-uthmani.json`; `npm run check` reports for Al-Baqarah only the one known "close but not exact" item (تَابَ إِلَى الله, part 06). The other Arabic (الرُّكُوعْ وَالسُّجُود والْقِيَامْ, الا ستعانة, الصَّلاةِ, ومن الله التوفيق, لخ, الخ) matches the print.
- `[p. N]` markers 247–257 checked against the printed page numbers and page breaks. The author's heading വിഭാഗം – 6 (p. 251) is present as "### Section – 6", before the verse 47–48 panel.
- Glossary renderings (Rabb where the author writes റബ്ബ്, (r), (a), ﷺ) and earlier parts' renderings (true faith, true believers, People of the Scripture, the noble Prophet, the Israelites, Children of Isra'il, right guidance, the God-fearing reverence, the Day of Qiyamah, signs, Fir'aun, Quran commentators / commentators, Explanatory Note, misinterpretations, guard against for സൂക്ഷിക്കുക) are used.

## Corrections made (before → after)

### Strengthened word

1. p. 248, കുറേയൊക്കെ വ്യത്യാസം (as കുറേ → "some" in part 07):
   "there would have been **a good deal of** difference in the modes of performance" → "there would have been **some** difference …".

### Wording / meaning

2. p. 248, رُكُوع (റുകൂഉ്) എന്നാൽ … എന്നൊക്കെയാണ് വാക്കർത്ഥം: the English had a dash in place of എന്നാൽ ("means"):
   "(ruku') – 'to bow' to bend down, to lower the head' and so on is the literal meaning." → "(ruku') **means** 'to bow' to bend down, to lower the head' and so on: that is the literal meaning." (The printed quotation marks are still mirrored.)
3. p. 249, hadith of the Mi'raj, പ്രാസംഗികന്മാർ ("speakers, orators") had been given the same word as പ്രബോധകർ ("preachers") a few lines earlier:
   "These are the **preachers** in your community" → "These are the **orators** in your community".
4. p. 253, ഏറ്റുപറഞ്ഞുകൊണ്ടിരിക്കുന്ന ("keep repeating / declaring"), not reading from a text:
   "which these, who are the later generations, keep **reciting** with pride" → "… keep **repeating** with pride".
5. p. 255 footnote, ജനങ്ങളും ("people", not "nations"):
   "plenty of **peoples** and rulers" → "plenty of **people** and rulers".
6. Word table, verse 48, സൂക്ഷിക്കുക (കാക്കുക): കാക്കുക is "guard, keep", not "beware":
   "and guard against (**beware**)" → "and guard against (**guard**)".

No changes were needed in `verses.json` or `part.json` (apart from the status). No dropped sentences, misplaced footnotes or page markers, reversed negations, may/will or tense errors, added pronouns, or Arabic changed from the print were found.

## Checked and left as they are

- **Misprints translated by their evident reading, without a note** (each confirmed on the image; the reading is certain from the words around it): നം (p. 256, in the 21:35 rendering, for നാം "We"), മുസാ (p. 256, for മൂസാ, in the same paragraph as മൂസാ), വിധേയരായിക്കും (p. 253, for വിധേയരായിരിക്കും "will be subject"), മുഹർറ (p. 257, split മു|ഹർറ at a line end, for മുഹർറം; "the tenth of the month of Muharram").
- **References as printed:** (5:39) on p. 253 and the abbreviation list (അ; ബു; മു; ന; ജ) on p. 257 are given as printed ("Ah.; Bu.; Mu.; Na.; Ja.", as in earlier parts).
- **Arabic in the uthmani form:** single Quran words cited in the commentary (ٱلۡخَٰشِعِينَ p. 251, بَلَآءٞ p. 256) are given from the data file, as rule 4 asks for Quran text; the printed forms differ only in spelling convention (full alif), not in wording.
- **[p. 248] marker** sits before "true faith": p. 248 begins in the middle of സ്വീകരി|ക്കുന്നതിൽ ("accepting"), so the nearest point in English word order is used. **[p. 257]** sits after "stated thus:", since p. 257 begins with കാണാം ("can be seen"), which English puts at the front. Acceptable, as in earlier parts.
- **Verse 49 "your female (children)"** for സ്ത്രീക(ളായ-മക്ക)ളായവരെ: the author's bracket turns "those who are your women" into "those who are your female children"; the English keeps the bracketed part in round brackets. Left.
- **"mighty"** for വമ്പിച്ച with عظيم (verse 49, word table, and "very mighty" on p. 256); part 07 used "enormous" for വമ്പിച്ച ഒരു കയ്യേറ്റം. Both are fair; noted for the reviewer in New terms.
- **Group markers** *[Verses 42–43]*, *[Verse 44]*, *[Verses 45–46]*, *[Verses 47–48]*, *[Verses 49–50]*: **not the author's words**; navigation aids kept as in parts 01–07. They match the author's groups on the images (panels on pp. 247, 249, 250, 251–252, 254). See the note in part 02's `check.md`.
- `part.json` verses "42-50", pages "247-257", PDF pages "76-86": correct.

## Open doubts for the reviewer

All four of the translator's DOUBTs are kept; the images do not settle them:

1. **വേദഗ്രന്ഥത്തിന്റെ പ്രബോധകരുടെ അനുയായികളുമായി** (p. 249). Printed clearly with the genitive -രുടെ ("as followers of the preachers of the scripture"). The -ഉം of അനുയായികളുമായി may point to "as preachers and followers of the scripture". Translated as printed.
2. **ഇബ്നുഹാതിം** (p. 251). Printed so on the image and in the text layer; translated "Ibn Hatim". Whether another name (such as Ibn Abi Hatim) is meant cannot be settled from the page.
3. **തെണ്ടം** (p. 253 and word table v. 48). Printed clearly on both pages (600 dpi). The context (giving it to get free from punishment; paired with പ്രായശ്ചിത്തം) supports "ransom", but please confirm the word.
4. **ദിവ്യത്വം** (p. 255), paired with രിസാലത്ത് in the bracket (നുബുവ്വത്തും രിസാലത്തും). Literally "divinity / divine status"; rendered "divine office". Please confirm.
5. **Earlier open doubts still apply** (not in this part): the hadith abbreviations including ജ (Ja.), which recurs on p. 257 (part 01), പതിച്ചവരാണവർ (part 02), വേദവാദികൾ and അമറാത്തി (part 03), ഇവിടെ അതുകൊണ്ട് വിവക്ഷ (part 04), the word order of Ibn Kathir's Arabic (part 05), السهوانى and "Profoundly Knowing" (part 06), പിൻപറ്റിയേക്കുന്നതാണ്, ലക്ഷ്യം, ദാ, وممن الله التوفيق and شجرة الخلد (part 07), and the group markers (part 02).

## New terms (not in the glossary; used consistently in this part)

Includes the translator's list. Flagged for Rizwin to confirm:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| യഥാർത്ഥം / അയഥാർത്ഥം | al-haqq / al-batil (الحق / الباطل) | the real / the unreal |
| സത്യം / അസത്യം | — | truth / untruth |
| ന്യായം / അന്യായം (word table) | al-haqq / al-batil | the right / the wrong |
| നമസ്കാരം | salah (الصلاة) | prayer (as in "establish the prayer", part 01) |
| സക്കാത്ത് / സകാത്ത് | zakah (الزكاة) | Zakat |
| കുമ്പിടുക / റുകൂഉ് | ruku' (ركوع) | bow / ruku' |
| ദേഹം | nafs (نفس) | self (plural "selves") |
| ആത്മാവ് | nafs | soul |
| പുണ്യകാര്യം | al-birr (البر) | the virtuous deed |
| സൽകാര്യങ്ങൾ | — | good deeds |
| ഭക്തന്മാർ | al-khashi'un (الخاشعين) | the devout |
| വിനീതന്മാർ | — | the humble |
| ശുപാർശ | shafa'ah (شفاعة) | intercession |
| പ്രായശ്ചിത്തം | 'adl (عدل) | atonement |
| തെണ്ടം | — | ransom (see open doubt 3) |
| പരീക്ഷണം | bala' (بلاء) | trial |
| ഫിർഔന്റെ കൂട്ടർ / ആൾക്കാർ | Al Fir'aun (آل فرعون) | Fir'aun's folk / Fir'aun's people |
| കൂട്ടുകാർ (ആൾക്കാർ) (word table) | Al (آل) | companions (people) |
| ക്വിബ്ത്വികൾ (കൊപ്തികൾ) | — | Qibtis (Copts) |
| ഫിർഔൻ (ഫറോവാ) | Fir'aun | Fir'aun (Pharaoh) |
| ലോകർ | al-'alamin (العالمين) | the people of the world |
| ഉപദേഷ്ടാക്കൾ / മതോപദേഷ്ടാക്കൾ | — | counsellors / religious counsellors |
| പ്രബോധകർ | — | preachers |
| പ്രാസംഗികന്മാർ | — | orators |
| ആശൂറാഅ് | 'Ashura' | 'Ashura' |
| വമ്പിച്ച | 'azim (عظيم) | mighty (part 07: "enormous" in another context) |
| ദിവ്യത്വം | — | divine office (see open doubt 4) |
