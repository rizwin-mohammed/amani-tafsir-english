# Check: An-Nisa' part 01 (introduction and verses 1–2)

Checked on 2026-11-18 by an independent checker session, following TRANSLATING.md section 5. This check also covers the surah files `meta.json` and `intro.md`.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 1–9 (PDF p. 1 is a blank page numbered 924 with the running head "ഭാഗം 4"; book pp. 925–932 are PDF pp. 2–9). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. Five 300 dpi crops were used: the first line of p. 928 (the hadith and its brackets), the line وان اعوج شيء … (p. 928), خَلقٌ (p. 927, two crops, one mis-aimed) and "(കൂട്ടിച്ചേർത്ത്)അവരുടെ" in the verse 2 panel (p. 931, two crops). PDF p. 273 was rendered at 100 dpi for the last page number. The Volume 2 and 3 front-matter files were read in the text layer only.
- **`meta.json`.** title_ml "സൂറതുന്നിസാഉ്": the title on p. 925 is "4. സൂറതുന്നിസാഉ്" (സൂറതു with one ത, unlike Ali 'Imran's "സൂറത്തു"; the introduction itself writes സൂറത്തുന്നിസാഇലെ). Right. Pages 925–1196: p. 925 is the surah's first page, and PDF p. 273 (the last) shows 1196 under the closing Arabic colophon. Right. **Volume 2**: nothing in the An-Nisa' PDF names a volume (the running head "ഭാഗം 4" … "ഭാഗം 6" is the juz', not the volume). The front-matter files are `00. Vol2_705-708.pdf`, whose text layer reads "വിശുദ്ധ ക്വുർആൻ വിവരണം … വാല്യം 2" (old-font "hmeyw 2"), and `00. Vol3_1209-1219.pdf` ("വാല്യം 3"), so Volume 3 begins at book page 1209 and pp. 925–1196 fall in Volume 2 (which begins at p. 705; Ali 'Imran, pp. 709–923, is also Volume 2). Supported by the file names and page ranges, not by a printed statement in this surah; left as "Volume 2". Status "draft"; left.
- **Boundaries.** The part starts at the very beginning of the surah on p. 925: the Arabic title box (سورة النساء), the title, the line "മദീനയിൽ അവതരിച്ചത് - വചനങ്ങൾ 176 - വിഭാഗം (റുകൂഉ്) 24" and the introduction (p. 925, no footnotes), then the Bismillah (p. 926). There is no "വിഭാഗം - 1" heading, so no Section heading is right. The part ends on p. 932 with "… അതാണ് انه كان حوبا كبيرا (…) എന്ന വാക്യം കുറിക്കുന്നത്."; directly below is the verse 3 panel. Nothing printed between them is missing.
- `intro.md`, `part.json`, `verses.json` (verses 1–2), `words.json` (35 entries: 1: 22; 2: 13), `commentary.md`.
- Groups: *[Verse 1]* (panel and table p. 926, commentary pp. 926–931) | *[Verse 2]* (panel and table p. 931, commentary pp. 931–932). Right.
- Every English sentence of the introduction and the commentary was compared with the Malayalam on the images, in order. No sentence is missing and none is added. There are no footnotes on these pages.
- `verses.json` and every `words.json` gloss match the images in the printed order, including "[ആളിൽ]" (printed spaced "[ആ ളിൽ]" by line justification), "നല്ല (ശുദ്ധമായ) തിനു(പകരം)", "(വിട്ടു)കൊടുക്കുവിൻ", "വ്യാപിപ്പിക്കുക (പരത്തുക - വിതരണം ചെയ്യുക)യും ചെയ്തു", "കുടുംബ (രക്ത)ബന്ധങ്ങളെയും" and the full stop in "മേൽനോട്ടം ചെയ്യുന്നവൻ." (one correction, below).
- `[p. N]` markers 925–932. [p. 925] after the title line and [p. 926] before the Bismillah in `intro.md`, so the verse 1 commentary (also p. 926) has none (as Ali 'Imran). Page turns: "and that *[p. 927]* therefore" (അതു / കൊണ്ട്), "says thus: *[p. 928]* فانهن …", "*[p. 929]* In the first three examples" (ഉദാഹരണങ്ങ / ളിൽ), "asking one another *[p. 930]* (وَٱتَّقُواْ …)" (the Arabic opens p. 930; the English moves "He has said again" earlier), "and *[p. 931]* guarding family ties" (ജീവിക്കുന്നതുകൊണ്ടും, / കുടുംബബന്ധത്തെ), "must give up *[p. 932]* their properties" (അവ / രുടെ). All are right.
- Honorifics: (r) printed 5 times in the introduction (Ibn Mas'ud, Ibn Jarir twice, Hakim, Ibn 'Abbas) and 3 in the commentary (Razi; Abu Muslim Isfahani twice); the English has 5 and 3. (a) printed 9 times (p. 927: 4; p. 928: 3; p. 929: 2; ഹവ്വാഇനെ on p. 928 has none); the English has 9. ﷺ printed twice (pp. 927, 928); the English has 2.
- References as printed: 31-ാം, 40-ാം, 48 ഉം 116 ഉം, 110-ാം, 64-ാം, 26, 27, 28 (intro); 2 : 117, 3:59, ഉൽപത്തി : 2 ൽ 21 - 23, 30:21, 16:72, 42:11, 9:128, 3:164, 49:13, 5, 6, 2 : 220.

## Corrections made (before → after)

### Malayalam and Arabic as printed

1. `verses.json`, v. 2: the 300 dpi crop shows no space after the bracket. "(കൂട്ടിച്ചേർത്ത്) അവരുടെ" → "(കൂട്ടിച്ചേർത്ത്)അവരുടെ".
2. `commentary.md`, p. 927: the crop shows خَلقٌ with no sukun on the lam. "**خَلْقٌ**" → "**خَلقٌ**".

### Dropped word

3. `commentary.md`, p. 932, "… പ്രയാസമുണ്ടെങ്കിൽപോലും അതു വിട്ടുകൊടുത്തേ തീരൂ എന്നില്ല": the പോലും ("even") was not rendered. "if, owing to some special reason, there is difficulty" → "even if, owing to some special reason, there is difficulty".

### Punctuation as printed

4. `commentary.md`, p. 929, "‘നഫ്സ്(نفس)എന്നു വന്നിട്ടുള്ള …": the quotation mark opened before നഫ്സ് is not closed in the print (the ‘വർഗം (جنس)’ beside it is closed). "‘nafs (**نفس**)’ has come" → "‘nafs (**نفس**) has come".

### Doubt added

5. `commentary.md`, p. 931, "അല്ലാഹുവിനോടും കുടുംബങ്ങളോടുമുള്ള കടമകളെല്ലാം": DOUBT added after "towards the families" (the translator's question; see point (5) below).

No dropped തന്നെ/-ഉം or list items, may/will errors, tense or voice changes, reversed negations, changed reported speech, added ﷺ, silently corrected names or misprints, or re-vowelled Quran Arabic were found apart from the above.

## Points the translator asked about

- **(1) Unreferenced Quran phrases printed plain.** On the images: p. 927 "خلق السموات والارض", "يابنى ادم" and "وخلق منها زوجها"; p. 929 "خلق لكم من انفسكم ازواجا", "جعل لكم من انفسكم الخ", "جاءكم رسول من انفسكم", "بعث فيهم رسولا من انفسهم"; p. 930 "(واتقوا الله الذى تساءلون به)", "(والارحام)" twice, "به"; p. 931 "(ان الله كان عليكم رقيبا)"; p. 932 "انه كان حوبا كبيرا" are all printed plain and unvowelled, most without a reference. Ali 'Imran parts 02–21 copy such phrases from the Uthmani text whenever the printed words are exactly a Quran phrase (e.g. part 02's قل من حرم زينة الله, unreferenced, from 7:32; part 21's إِنَّ فِي خَلۡقِ ٱلسَّمَٰوَٰتِ), and only part 01 of Ali 'Imran and Al-Baqarah parts 39–51 kept the plain script. This part follows the later practice. Each copy has exactly the printed words, no more and no less: خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ (the words occur in many verses; 6:1 is one, and the bytes are the same in each), يَٰبَنِيٓ ءَادَمَ (7:26 and others), جَعَلَ لَكُم مِّنۡ أَنفُسِكُمۡ with the printed الخ kept plain (16:72; 42:11 has the same words, and both are among the author's examples), خَلَقَ لَكُم مِّنۡ أَنفُسِكُمۡ أَزۡوَٰجٗا (30:21), جَآءَكُمۡ رَسُولٞ مِّنۡ أَنفُسِكُمۡ (9:128), بَعَثَ فِيهِمۡ رَسُولٗا مِّنۡ أَنفُسِهِمۡ (3:164); the rest are from 4:1–2. The plain والارحام on p. 930 is given as وَٱلۡأَرۡحَامَ; its fatha matches the author's "വൽ അർഹാമ", which is the reading the sentence describes. `npm run check` finds 16 of the 19 longer quotations exact and none close-but-not-exact. Right.
- **(2) Arabic hadith lines and sayings left as printed.** Confirmed on crops and the page: "فانهن خلقن من ضلع(رواه الشيخان)" (p. 928; the "(" before “…. is not closed in the print, mirrored), "وان اعوج شيء من الضلع اعلاه....." (شيء with a final hamza; the print spaces "اعو ج" by a glitch, written joined), "والله اعلم" (printed "و الله اعلم"), "اى من جنسها", "ادمى", "نفس", "انفس", "جنس", "يتيم", "عطف", "الفتح", "الكسر", "معطوف", "الله". These are the three `npm run check` lists as not from the Quran; none is a Quran quotation.
- **(3) Slips copied without TN.** Intro item (2) ends "… 40-ാം വചനവും." with a full stop where the other items have commas: confirmed, mirrored ("make it great."). P. 929 "… (49:13). എന്ന് അല്ലാഹു വ്യക്തമാക്കിയിട്ടുമുണ്ട്": the stray full stop is printed; mirrored as "(49:13). thus Allah has also made it clear." Neither changes the meaning; no TN, as earlier parts did for stray stops.
- **(4) TN p. 927, അവർ for അവൻ.** Confirmed: "(നിങ്ങളെ അവർ ഒരേ ആത്മാവിൽ - ആളിൽ - നിന്നു സൃഷ്ടിച്ചു)". The subject is Allah (the verse and the sentence before have അവൻ). The TN is accurate. Kept.
- **(5) കുടുംബങ്ങളോടുമുള്ള (p. 931).** Clearly printed. Literally "towards the families"; in Malayalam usage കുടുംബങ്ങൾ is also common for "relatives, kinsfolk", which fits the sentence before ("കുടുംബബന്ധമുള്ളവരോടു", "those who have family ties"). The page cannot settle it, so the English keeps "families" and a DOUBT gives both (correction 5).
- **(6) Ordering.** P. 928: the Abu Muslim sentence runs "… ഇസ്ഫഹാനീ(റ) യുടേതാകുന്നു. خَلَقَ مِنۡهَا زَوۡجَهَا എന്ന വാക്യത്തിനു اى من جنسها (…) എന്നാണ് അദ്ദേഹം അർത്ഥമാക്കുന്നത്." The English has both sentences in that order, with the Arabic in its place. Pp. 929–930: the Arabic (وَٱتَّقُواْ ٱللَّهَ ٱلَّذِي تَسَآءَلُونَ بِهِۦ) opens p. 930 and is followed by "എന്നു പിന്നെയും പറഞ്ഞിരിക്കുന്നു"; English word order needs "He has said again" before the clause, so the marker stands before the Arabic. Pp. 930–931: the sentence on guarding against Allah and guarding family ties runs across the page turn; the marker is in the right place. P. 931: the printed order "… ഓർമപ്പെടുത്തുന്നു. (ان الله كان عليكم رقيبا)" (Arabic after the full stop) is mirrored. Right.

## Checked and left as they are

- Intro (5): the print has a comma after "110-ാം വചനവും"; the English has a semicolon before "in the riwayah that Hakim (r) quoted". The sentence is not changed; left.
- ദേഹം: rendered "self" in the word table of v. 1 ("(ദേഹത്തിൽ - ആളിൽ)" "(self - person)"), as Al-Baqarah and Ali 'Imran; and "their own selves" for സ്വന്തം ദേഹങ്ങളോട് (intro). In the list of the meanings of nafs on p. 928 it is "body", because the same list also has താൻ ("self"); left.
- p. 930, "നിയമ നിർദ്ദേശങ്ങൾക്കനുസരിച്ചു" "according to His legal directions": could also be "His laws and directions"; the sense is the same; left.
- p. 931, "വളരെ പ്രാധാന്യം അർഹിക്കുന്ന" "one that deserves very great importance": left.
- p. 927, "ഉൽപത്തി : 2 ൽ 21 - 23" "(Genesis : 2, 21 - 23)": left.
- p. 930, പടച്ചവൻ "the One who created": first occurrence found; left (new terms).
- `part.json` verses "1-2", pages "925-932", PDF pages "2-9": correct (PDF p. 1 is the blank p. 924 and holds nothing of the surah).

## Open doubts for the reviewer

1. **DOUBT in the text**: കുടുംബങ്ങൾ "families" / "relatives" (p. 931).
2. **Volume 2** in `meta.json` rests on the front-matter file names and page ranges (Vol 2 from p. 705, Vol 3 from p. 1209), not on a statement in this surah's PDF.
3. **Earlier open doubts still apply** (not in this part): see the Al-Baqarah and Ali 'Imran parts.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ആത്മാവ് / ദേഹം / ആൾ | nafs | soul / self (body in the list of meanings) / person |
| വർഗം | jins | kind |
| ഇണ | zawj | mate |
| കുടുംബബന്ധങ്ങൾ | al-arham | family ties |
| മേൽനോട്ടം ചെയ്യുന്നവൻ | raqib | One who keeps watch |
| പാതകം | hub | crime |
| അനാഥകൾ / യത്തീം | yatama / yatim | orphans / yatim |
| അനന്തരാവകാശനിയമങ്ങൾ | — | laws of inheritance |
| ആധുനികപ്രിയർ | — | modernity-lovers |
| യുക്തി ന്യായങ്ങൾ / യുക്തിവാദങ്ങൾ | — | rational arguments / rationalist arguments |
| ഊന്നുവടി | — | walking stick |
| പടച്ചവൻ | — | the One who created |
| തന്റേടം | rushd | firmness of mind |
| നിയോഗിക്കുക | ba'atha | commission (as Ali 'Imran) |
