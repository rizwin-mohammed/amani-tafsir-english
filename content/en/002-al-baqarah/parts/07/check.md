# Check: Al-Baqarah part 07 (verses 38–41)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 65–76 (book pp. 236–247), rendered at 150 dpi and read in full, including the four footnotes (pp. 238, 240, 241, 244). The verse panels and word tables (pp. 236–237, 243–244) were re-read at 300 dpi; the Arabic words شجرة (pp. 239, 240), شجرة الخلد (p. 241), the Qamus definition (p. 240), علم البلاغة (p. 241 footnote), الآيات الكونية and خوارق العادات (p. 246), الآيات / آية (p. 245) and وممن الله التوفيق (p. 243) at 600–2400 dpi. The `ml2uni.py` text layer was used only for spelling (on these pages it is incomplete).
- Scope: the part starts at the verse 38–39 panel on p. 236, directly after part 06's lead-in "Allah says:", and ends with the first paragraph of p. 247 (Baidawi on فَارْهَبُونِ / فَاتَّقُونِ), directly above the verse 42–43 panel. Both boundaries confirmed.
- `part.json`, `verses.json` (verses 38–41), `words.json` (45 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. No sentence is missing or added. All four footnotes are present, each right after the paragraph holding its (\*): p. 238 ("disposition for good only (\*)"), p. 240 ("and so on. (\*)"), p. 241 ("must not eat from it (\*)"), p. 244 ("twelve tribes. (\*)").
- `verses.json` Malayalam and every `words.json` gloss were compared letter by letter with the images; they match (including ഓർക്കുവീൻ and കരാറ് in verse 40, ചെയ്‌വിൻ and സൂക്ഷിക്കുവീൻ in the word table, മാർഗ ദർശനവും with a space in verse 38).
- Quran quotations (7:27, 18:50, the يُحَرِّفُونَ phrase, 7:19 phrase, 20:121 phrase, 7:19, 14:26 and 14:24 phrases, 5:20 phrase, 2:40 and 2:41 phrases, 4:77 phrase) are copied from `data/quran-uthmani.json`; `npm run check` reports for Al-Baqarah only the one known "close but not exact" item (تَابَ إِلَى الله, part 06).
- `[p. N]` markers 237–247 checked against the printed page numbers and the page breaks. P. 236 holds only the end of part 06 and the verse 38–39 panel, so it has no marker.
- The author's headings are present: വ്യാഖ്യാനക്കുറിപ്പ്-1 ("Explanatory Note – 1"), the two-line heading on Adam and Iblis, and വിഭാഗം-5 ("Section – 5").
- Glossary renderings (Lord, (r), (a), ﷺ) and earlier parts' renderings (signs, ayahs, Hell, Paradise, guidance / right guidance, true believers, mushriks, People of the Scripture, Quran commentators, the noble Prophet, the Day of Qiyamah, sujud, Iblis, Satan / Shaitan, Hawwa', resources, wrongdoers, parable, permanent dwelling) are used.

## Corrections made (before → after)

### Arabic transcribed as printed

1. pp. 239 and 240, شجرة: at 1200–2400 dpi the mark over the ة is the open hook the book uses for sukun (as on the د of عدن in part 06), not tanwin: "**شَجَرَةٌ**" → "**شَجَرَةْ**" (both places).
2. p. 241, شجرة الخلد (2400 dpi): printed with a fatha on ش and on ر only, damma on ة, the wasla sign on the alif of ال, damma on خ, sukun on the ل and on the د. The English had a different vowelling (الْخُلْدُ). "**شَجَرَةُ الْخُلْدُ**" → "**شَجرَةُ ٱلخُلْدْ**", with a new TN giving the Ta-Ha 120 wording (شَجَرَةِ ٱلۡخُلۡدِ) from the data file.
3. p. 244, اذكرو نعمتى is printed without vowels and without the alif after the و. The English had replaced it with the verse 40 text. Following earlier parts (Arabic as printed, with a TN where it differs from the verse): "**ٱذۡكُرُواْ نِعۡمَتِيَ** الخ" → "**اذكرو نعمتى** الخ"; TN "… it is given here from verse 40." → "… in verse 40 the words read ٱذۡكُرُواْ نِعۡمَتِيَ."
4. p. 241 footnote: no kasra is printed under the final ة (1200 dpi): "عِلْمُ الْبَلَاغَةِ" → "عِلْمُ الْبَلَاغَة".
5. p. 246: الكونية is printed with no sukun on the و and no shadda on the ي (1600 dpi): "الْكَوْنِيَّة" → "الْكَونِيَة".
   (Checked and already as printed: تقربا (p. 241, unvowelled), عهد (p. 245, unvowelled), الآيَات, آيَة, خَوَارِقُ الْعَادَات, المعجزات, the Qamus definition, بنو اسرائيل، اسرائيل.)

### Meaning: added or strengthened words

6. p. 238, പുരോഗമനേച്ഛുവാകകൊണ്ട് has no വളരെ here (unlike "വളരെ പുരോഗമനേച്ഛുക്കൾ" on p. 237): "because he is a **great** progressive" → "because he is a progressive".
7. p. 238, കുറേ ഇല: "pluck **a lot of** leaves" → "pluck **some** leaves".
8. p. 239, വമ്പിച്ച ഒരു കയ്യേറ്റം: വമ്പിച്ച is "huge", not "arrogant": "an **arrogant** encroachment" → "an **enormous** encroachment".
9. p. 246, കുറേ വിപുലമായ ആശയം: "a **very** broad idea" → "a **rather** broad idea".

### Meaning: dropped small words, modality, structure

10. p. 238, ഇതു കേവലം ഒരു യഥാർത്ഥ സംഭവമല്ലെന്നുള്ള (കേവലം dropped): "that this is not a real event" → "that this is **simply** not a real event".
11. p. 239, പല ക്വുർആൻ വ്യാഖ്യാതാക്കളും അഭിപ്രായം പറഞ്ഞുകാണുമെന്ന് തീർച്ചയാണ്: "it is certain that many Quran commentators **can be seen giving** opinions" → "it is certain that many Quran commentators **will be found to have given** opinions".
12. p. 242, … വിഭാഗക്കാരാണ്, അഥവാ നമ്മുടെ ദൃഷ്ടിക്കതീതമായ സൃഷ്ടികളൊന്നുമല്ല (അഥവാ dropped): "human beings themselves, not any creatures" → "human beings themselves, **that is,** not any creatures".
13. p. 242, point 1: in അവർ പാരമ്പര്യമായി അംഗീകരിച്ചുവരുന്ന വേദഗ്രന്ഥവും പ്രവാചകൻമാരും both the scripture and the prophets are what "they have traditionally been accepting"; the English attached this to the scripture only: "the principles that the scripture they have traditionally been accepting, and the prophets, have been preaching" → "the principles that the scripture and the prophets they have traditionally been accepting have been preaching".
14. p. 246, വിധിവിലക്കുകൾ ("injunctions and prohibitions"; വിധി was dropped): "Allah's prohibitions, commands and directions" → "Allah's injunctions and prohibitions, commands and directions".
15. p. 246, point 3, വേദവാക്യങ്ങൾ (വേദം = scripture, as elsewhere): "Revealed sentences" → "Scriptural sentences".

### Translator's notes

16. Removed six TNs that only reported unclosed quotation marks or brackets, where the slip does not affect the meaning (earlier parts keep such slips silently):
    - p. 238: "an opening quotation mark is printed before "Man is very excellent"; no closing mark follows."
    - p. 240: "in this paragraph the second quotation (beginning "that word") has a closing mark but no opening mark, and the quotation 'evil has an opening mark but no closing mark; both as printed."
    - p. 240: "the round bracket opened before "Adam and Hawwa'" is not closed."
    - p. 242: "the round bracket opened before "About Iblis" is not closed."
    - p. 245: "in this paragraph the quotations beginning 'signs and 'ayah have opening marks but no closing marks, as printed."
    - p. 247: "no closing quotation mark is printed after the second Arabic phrase."
    The printed punctuation itself is still mirrored in the English.
17. p. 243, وممن الله التوفيق: the TN stated "the usual phrase is ومن الله التوفيق ('and success is from Allah')", which rests on outside knowledge and supplied a meaning the author does not give. At 900 dpi the print is clearly وممن. TN → "*[DOUBT: the Arabic is printed clearly as وممن الله التوفيق (900 dpi) and is transcribed as printed; the author gives no Malayalam rendering of it. As printed, ممن ("from whom") does not read clearly here; it may be a printing slip for ومن. Please check whether to note a printing slip.]*"
18. p. 244 footnote TN on പടം: "the pictures (maps) are at the end of the volume." → "the volume has a section of such pictures (maps), "പടങ്ങൾ", after the end of this surah (book pp. 697–704; see part 01's check)." (now says where this comes from: the volume's own appendix).

No changes were needed in `verses.json`, `words.json` or `part.json` (apart from the status). No misplaced footnotes or page markers, reversed negations or tense errors were found.

## Checked and left as they are

- **TN p. 240 ('Tree, tree')**: the author gives two Malayalam words (വൃക്ഷം, മരം) that both come out as "tree"; the TN explains what is printed. Kept.
- **Verse 38, "– (it) is certain indeed –"**: the Malayalam is വരുന്നപക്ഷം (അത്) - തീർച്ച തന്നെ -, with the bracket before the first dash. The English needs "is"; the sense is the same. Left.
- **Verse 38, "whoever follows"** for ആർ പിൻപറ്റിയോ (past form, generic relative); the word table keeps "followed" for പിൻപറ്റി. Left, as in earlier parts.
- **Printed slips translated silently, meaning not in question**: the missing full stop after ഏർപ്പാടായിരിക്കും (p. 239), ഉണ്ടായിരുന്നവെന്നും (p. 240), അല്ലങ്കിൽ (p. 240 footnote), the full stop after കാരണം (p. 246), ഈസ്റാഈല്യർ (p. 244, rendered "the Israelites").
- **"Let that be;"** for വേണ്ടാ (p. 238) and **"In that situation"** for ആ സ്ഥിതിക്ക് (p. 247): acceptable.
- **"(a)" missing after "the Prophet Adam"** in the paragraph beginning "The strongest proofs" (p. 241): the print has ആദം നബിയുടെയും with no (അ). Correct as is.
- **"Bu. Mu", "Da."**: as printed (ബു. മു, ദാ).
- **Group markers** *[Verses 38–39]*, *[Verses 40–41]*: **not the author's words**; navigation aids kept as in parts 01–06. They match the author's groups on the images (panels on pp. 236 and 243). See the note in part 02's `check.md`.
- `part.json` verses "38-41", pages "236-247", PDF pages "65-76": correct.

## Open doubts for the reviewer

1. **പിൻപറ്റിയേക്കുന്നതാണ്** (p. 243, hadith). Translator's DOUBT kept. The word is printed so (the line breaks after പിൻപ); "may follow" or "are going to follow". The image does not settle it.
2. **ലക്ഷ്യങ്ങൾ** (p. 245) and **ലക്ഷ്യദൃഷ്ടാന്തങ്ങൾ** (p. 246). Translator's DOUBTs kept; same question as parts 01–02 ("evidences" or "aims"). One decision should cover all places.
3. **ദാ (Da.)** (p. 246). Translator's DOUBT kept: the book does not expand it here; most likely Abu Dawud. Same kind of question as the hadith abbreviations in part 01.
4. **وممن الله التوفيق** (p. 243). New DOUBT (correction 17).
5. **شجرة الخلد** (p. 241). Transcribed as printed (correction 2). The one fatha between ج and ر sits over the ر at 2400 dpi; if the reviewer reads it as belonging to the ج, the transcription would be شَجَرةُ. Please confirm.
6. **Earlier open doubts still apply** (not in this part): the hadith abbreviations (part 01), പതിച്ചവരാണവർ (part 02), വേദവാദികൾ and അമറാത്തി (part 03), ഇവിടെ അതുകൊണ്ട് വിവക്ഷ (part 04), the word order of Ibn Kathir's Arabic (part 05), السهوانى and "Profoundly Knowing" (part 06), and the group markers (part 02).

## New terms (not in the glossary; used consistently in this part)

Includes the translator's list. Flagged for Rizwin to confirm:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഇസ്റാഈൽ സന്തതികൾ | Bani Isra'il (بنو إسرائيل) | Children of Isra'il |
| ഇസ്റാഈല്യർ | — | the Israelites |
| കരാർ | 'ahd (عهد) | pact (as listed in part 04) |
| സ്ഥിരവാസികൾ | khalidun (خالدون) | permanent residents (part 04 has "permanent dwellers" for നിത്യവാസികൾ) |
| ശാശ്വതന്മാർ | — | everlasting ones |
| നരകത്തിന്റെ ആൾക്കാർ / നരകക്കാർ | ashab al-nar (أصحاب النار) | the people of Hell / the inmates of Hell |
| വ്യാജമാക്കുക | kadhdhaba (كذب) | make out to be false |
| കളവാക്കുക | kadhdhaba (كذب) | treat as lies |
| സൂക്ഷിക്കുക (എന്നെ സൂക്ഷിക്കുവിൻ) | ittaqu (اتقون) | guard against Me (as "guard against" in part 04) |
| ഭയപ്പെടുക | irhabu (ارهبون) | fear |
| തുച്ഛമായ | qalil (قليل) | paltry |
| ഉപമാവാദം | — | parable theory |
| ദുർവ്യാഖ്യാനങ്ങൾ | — | misinterpretations |
| വ്യാഖ്യാനക്കുറിപ്പ് | — | Explanatory Note |
| ബഹുദൈവാരാധകന്മാർ | — | the worshippers of many gods |
| പ്രവാചകവര്യൻ | — | eminent prophet |
| ഫിർഔൻ | Fir'aun | Fir'aun |
| ബൈത്തുൽ മാൽ | Bait al-Mal | Bait al-Mal (with the author's "(the public treasury)") |
| പുരോഗമനേച്ഛുക്കൾ | — | progressives |
| സങ്കൽപ കഥ | — | imaginary story |
| നിത്യവാസം | khuld (خلد) | permanent dwelling |
| വിധിവിലക്കുകൾ / ആജ്ഞാനിർദ്ദേശങ്ങൾ | — | injunctions and prohibitions / commands and directions |
