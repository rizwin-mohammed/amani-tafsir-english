# Check: Al-Baqarah part 09 (verses 51–57)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 86–96 (book pp. 257–267), rendered at 150 dpi and read in full. There are no footnotes on these pages. The verse panels and word tables (pp. 257, 258–259, 262, 265) were re-read at 300 dpi; the Arabic المُعْجِزَات (p. 258), اقْتُلُوا أَنْفُسَكُمْ (p. 260), أَخَذَتهم الصَّاعِقَةُ (p. 263), بَرْزَخْ (p. 264) and the word ഇടിത്തീ in the verse 55 word table at 900–2400 dpi. The `ml2uni.py` text layer was used only for spelling (on these pages it is incomplete).
- Scope: the part starts at the verse 51–53 panel on p. 257, directly after part 08's 'Ashura' paragraph ("… part of the Sunnah of the Prophet ﷺ"), and ends at the top of p. 267 with والله أعلم, directly above the verse 58–59 panel. Both boundaries confirmed.
- `part.json`, `verses.json` (verses 51–57), `words.json` (70 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. No sentence is missing or added.
- `verses.json` Malayalam and every `words.json` gloss were compared with the images; they match (including നിങ്ങൾ അക്രമികളായും കൊണ്ട്. in verse 51, എഴുന്നേൽപിച്ചു.നിങ്ങൾ with no space in verse 56, നിങ്ങൾ(ആയിക്കൊണ്ട്) in the verse 51 word table, അങ്ങിനെ in the verse 54 word table, and ഇടിത്തീ with the long ീ in the verse 55 word table).
- Quran quotations: the 7:155 quotation (p. 262) and the cited verse phrases of 53, 54, 56 and 57 are from `data/quran-uthmani.json`; `npm run check` reports for Al-Baqarah only the one known "close but not exact" item (تَابَ إِلَى الله, part 06).
- `[p. N]` markers 258–267 checked against the printed page numbers and page breaks. P. 257 holds the end of part 08 and the verse 51–53 panel; the commentary begins at its foot, so it has no marker.
- Glossary renderings (Lord / Rabb where the author writes റബ്ബ്, the Ever-Merciful, (r), (a), ﷺ) and earlier parts' renderings (pact, wrongdoers, the One who greatly accepts repentance, the Israelites, Children of Isra'il, Fir'aun, right guidance, true believers, riwayah, Quran commentators, the Day of Qiyamah, signs, mighty for വമ്പിച്ച, (Allah knows) for (അല്ലാഹുവിനറിയാം), resources for വിഭവം) are used.

## Corrections made (before → after)

### Meaning

1. p. 264, 'Abduh's words: in അവർ നിശ്ശേഷം നശിച്ചേക്കുമെന്ന് കരുതപ്പെടുകയും the verb is -ഏക്കും ("may"), not "will":
   "it had been thought that they **would** perish completely" → "it had been thought that they **might** perish completely".
2. p. 264, ഞങ്ങൾ അല്ലാഹുവിനെ കാണുക തന്നെവേണം: തന്നെ goes with the verb ("must indeed see"); "Himself" was an added word:
   "we must see Allah **Himself** indeed" → "we must indeed see Allah".
3. p. 266, the bracket after كُلُواْ مِن طَيِّبَٰتِ مَا رَزَقۡنَٰكُمۡ reads നിങ്ങൾക്ക് നാം നൽകിയ ("that We gave"), not നൽകിയിട്ടുള്ള as in the verse (as in the word table, "that We gave you"):
   "(eat of the good things that We **have given** you)" → "(eat of the good things that We **gave** you)".

### Translator's notes

4. p. 261 (the brief said p. 260; the sentence is on p. 261, after the [p. 261] marker): removed the TN on the full stop after മടിച്ചു നിന്ന അവർ. The sentence as printed reads as a phrase in the author's list ("Their asking …", "His replying …", "They who hesitated …"), and the meaning is clear either way, so the full stop does not affect meaning (part 07 removed TNs of this kind). Removed: "*[TN: a full stop is printed after അവർ ("they"), in the middle of this sentence; the clause runs on into the next sentence ("… what they said to the Prophet Musa (a) was this"). Translated as printed.]*". The printed full stop is still mirrored in the English.

No changes were needed in `verses.json` or `words.json`. No dropped sentences, misplaced page markers, reversed negations, added pronouns or Arabic changed from the print were found.

## Checked and left as they are

- **Cited Quran phrases (point a).** Following parts 04 and 08 (the 57:21 phrase in part 04, ٱلۡخَٰشِعِينَ and بَلَآءٞ in part 08): when the author cites a verse phrase whose words are the same as the verse, it is given from `data/quran-uthmani.json` even though the print uses ordinary spelling (full alif); when the printed wording differs from the verse, it is transcribed as printed (part 07, اذكرو نعمتى). Applied here:
  - From the data file (same words, only the spelling convention differs): ٱلۡكِتَٰبَ وَٱلۡفُرۡقَانَ (p. 258, printed الْكِتَابَ وَ الْفُرْقَانَ), ذَٰلِكُمۡ خَيۡرٞ لَّكُمۡ عِندَ بَارِئِكُمۡ (p. 261, printed in the Uthmani font), ثُمَّ بَعَثۡنَٰكُم مِّنۢ بَعۡدِ مَوۡتِكُمۡ, وَأَنتُمۡ تَنظُرُونَ, مِّنۢ بَعۡدِ مَوۡتِكُمۡ (pp. 263–264), ٱلۡغَمَامَ, كُلُواْ مِن طَيِّبَٰتِ مَا رَزَقۡنَٰكُمۡ, وَمَا ظَلَمُونَا (pp. 266). Left.
  - As printed (wording differs from the verse): اقْتُلُوا أَنْفُسَكُمْ (p. 260; the verse has فَٱقۡتُلُوٓاْ; at 2400 dpi the hook over ق is the book's sukun, no vowel on the alif) and أَخَذَتهم الصَّاعِقَةُ (p. 263; not the wording of 2:55, no sukun on the ت). Both correct as they are.
  - Other Arabic as printed: المُعْجِزَات (p. 258, 1200 dpi), الله أعلم / والله أعلم, والله الموفق للصواب, بَرْزَخْ (p. 264, 900 dpi), تفسير المنار, (الاعراف ). Correct.
- **Printing slips translated by their evident reading, without a note (point b)**: അവക്ക് (p. 260, in the Nisa' 153 rendering, for അവർക്ക് "to them"), ജീവർ (p. 261, for ജീവൻ "lives", in ജീവർ ത്യജിക്കുന്നത് "give up their lives"), ഇടിത്തി (p. 263, for ഇടിത്തീ "thunderbolt", the same word four times in the paragraph). Each confirmed on the image; the intended word is certain from the words around it. Left, as in part 08.
- **"it is His compassion and generosity that thinking true believers will be able to see in it"** (p. 261, ആയിരിക്കും … കഴിയുക): the future is carried by "will be able"; the sense is the same. Left.
- **"who were his children and successors"** (p. 260, മക്കളും പിൻഗാമികളുമായ ഇസ്ഹാക്, യഅ്ക്വൂബ്): as printed; not corrected.
- **"they said it"** (p. 263, അവർ പറഞ്ഞു എന്ന് മൊത്തത്തിൽ പ്രസ്താവിച്ചിരിക്കുന്നത്): as printed.
- **Unclosed quotation marks** (p. 261 'your Rabb, p. 263 'Ought not …, p. 264 'The event …): mirrored silently, as in earlier parts.
- **"(1) Making the cloud a shade for them."** (p. 266, printed with a comma after കൊടുത്തത്): heading-like phrase; left.
- **Group markers** *[Verses 51–53]*, *[Verse 54]*, *[Verses 55–56]*, *[Verse 57]*: **not the author's words**; navigation aids kept as in parts 01–08. They match the author's groups on the images (panels on pp. 257, 258, 262, 265). See the note in part 02's `check.md`.
- `part.json` verses "51-57", pages "257-267", PDF pages "86-96": correct.

## Open doubts for the reviewer

No new doubts; the translator raised none, and none was found that the images leave open.

1. **Earlier open doubts still apply** (not in this part): the hadith abbreviations including ജ (part 01), പതിച്ചവരാണവർ (part 02), വേദവാദികൾ and അമറാത്തി (part 03), ഇവിടെ അതുകൊണ്ട് വിവക്ഷ (part 04), the word order of Ibn Kathir's Arabic (part 05), السهوانى and "Profoundly Knowing" (part 06), പിൻപറ്റിയേക്കുന്നതാണ്, ലക്ഷ്യം, ദാ, وممن الله التوفيق and شجرة الخلد (part 07), the four doubts of part 08, and the group markers (part 02). On p. 258 ലക്ഷ്യം clearly means "aim" ("the aim is indeed their attaining right guidance").

## New terms (not in the glossary; used consistently in this part)

Includes the translator's list. Flagged for Rizwin to confirm:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| കരാർ നിശ്ചയം നടത്തുക | wa'adna (واعدنا) | settle a pact |
| നിശ്ചയം (ചെയ്യുക) | — | appointment / appoint |
| വിവേചനം | al-furqan (الفرقان) | discrimination |
| പശുക്കുട്ടി | al-'ijl (العجل) | the calf |
| അമാനുഷിക ദൃഷ്ടാന്തങ്ങൾ | al-mu'jizat (المعجزات) | superhuman signs |
| സ്രഷ്ടാവ് | bari' (بارئ) | Creator |
| ഇടിത്തീ | al-sa'iqah (الصاعقة) | thunderbolt |
| ഘോരമായ ഇടിനാദം | — | a terrible thunderclap |
| ബോധക്ഷയം | — | loss of consciousness |
| ബർസഖ് | barzakh (برزخ) | barzakh |
| മന്ന / സൽവാ | al-mann / al-salwa (المن والسلوى) | manna / salwa |
| കാടപ്പക്ഷി | — | quail |
| കട്ടിത്തേൻ | — | thick honey |
| നന്ദി ചെയ്യുക | tashkurun (تشكرون) | give thanks |
| മാപ്പ് ചെയ്യുക / നൽകുക | 'afa (عفا) | pardon / grant pardon |
| മർഹൂം | — | the late |
| സാമിരീ | — | Samiri |
| ഹാറൂൻ | — | Harun |
| ഉസൈർ | — | 'Uzair |
| ബൈത്തുൽ മുക്വദ്ദസ് | — | Bait al-Muqaddas |
| മേഘത്തണലുകൾ | — | shades of cloud |
| വിവരണം / പ്രസ്താവന (Bible) | — | account / statement |
