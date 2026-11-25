# Check: An-Nisa' part 02 (verses 3–4)

Checked on 2026-11-18 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 9–19 (book pp. 932–942). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. 300/600 dpi crops: p. 940 the line with ഒരുകൂട്ടി and the Arabic ام ولد (three crops); p. 941 the lines with مهر, صدقة, صداق, نحلة (three crops, two mis-aimed).
- **Boundaries.** Part 01 ends on p. 932 with "… എന്ന വാക്യം കുറിക്കുന്നത്.", directly above the verse 3 panel. This part starts with that panel (p. 932, continued at the top of p. 933) and ends on p. 942 with "… അതിൽ മടി കരുതേണ്ടതില്ല എന്നും അല്ലാഹു അറിയിക്കുന്നു.", directly above the verse 5 panel. No section heading is printed. Nothing between is missing.
- Files: `part.json`, `verses.json` (verses 3–4), `words.json` (29 entries: 3: 18; 4: 11), `commentary.md`.
- Groups: *[Verse 3]* (panel pp. 932–933, table and commentary p. 933, commentary to p. 941) | *[Verse 4]* (panel, table and start of commentary p. 941, commentary p. 942). Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The one footnote (p. 938, ബഹുഭാര്യത്വം(\*)) is present.
- `verses.json` and every `words.json` gloss match the images in the printed order, including "അനാഥകളുടെകാര്യത്തിൽ" (joined in the panel), "നന്നാ(യിത്തോന്നി)യവരെ", "യോജിച്ചതത്രെ" (image; text layer "…തത്ര"), "നന്നായത്(നന്നായി തോന്നിയത്), തൃപ്തിയായത്", "ഈരണ്ടു (വീതം)", "[മഹ്റുകളെ]", "(തൃപ്തിപ്പെട്ട് വിട്ടു)തരുന്ന", "[ഉപയോഗിച്ചു]", "(ഇഷ്ട - ഔപചാരിക - നിർബന്ധ) ദാനമായി", "തിന്നു(ഉപയോഗിച്ചു)കൊള്ളുവിൻ". `npm run check`: all 29 `ar` entries are in their verses.
- `[p. N]` markers 933–942 (no marker for p. 932: only the verse 3 panel). Page turns: "in the 127th verse, *[p. 934]*" (സൗന്ദ / ര്യവും: the word "beauty" is split; the English sentence order puts the marker before 'A'ishah (r)), "slave *[p. 935]* women" (സ്ത്രീക / ളെക്കൊണ്ട്), "orphans, *[p. 936]* there is not much substance" (പറയുന്ന / തിൽ), "in the proper way, *[p. 937]* for those who … their own ideas" (സ്വന്തം / ആശയങ്ങൾ), "this is: *[p. 938]* ‘The policy", "*[p. 939]* (2)", "This is *[p. 940]* not the fault of the Quran" (ക്വുർ / ആന്റെയോ: the word is split; left), "and *[p. 941]* the reply", "commonly used. *[p. 942]* Taking into account" (ഈ പദ / ത്തിന്റെ). All acceptable.
- Honorifics: ﷺ printed 4 times (p. 936: 1; p. 938: 3); the English has 4. (r) printed 27 times (p. 933: 9; p. 934: 8; p. 935: 3; p. 938: 6; p. 941: 1, Shafi'i); the English has 27, in the same places ("ബുഖാരി, മുസ്‌ലിം(റ)" has one (r), as in the English).
- Quran quotations (all printed plain) are copied from the Uthmani text, as parts 01 and Ali 'Imran do: p. 934 وَإِنۡ خِفۡتُمۡ أَلَّا تُقۡسِطُواْ فِي ٱلۡيَتَٰمَىٰ, مِّنَ ٱلنِّسَآءِ; p. 937 فَإِنۡ خِفۡتُمۡ … أَيۡمَٰنُكُمۡ; p. 940 مَا مَلَكَتۡ; p. 941 ذَٰلِكَ أَدۡنَىٰٓ أَلَّا تَعُولُواْ. `npm run check` finds none close-but-not-exact.
- Other Arabic, as printed on crops: إن شاء الله (pp. 934 in brackets, 937, 939), مهر, صدقة, صداق, نحلة (all unvowelled), ام ولد (printed with the م joined to the و, "امولد", a typesetting slip; written with the space, as part 01 normalised "و الله اعلم").

## Corrections made (before → after)

### Additions in round brackets (round brackets mark only the author's words)

1. p. 934, "അധീനത്തിലും ബന്ധത്തിലും പെട്ട": "under (their) control and relation" → "under their control and relation".
2. p. 940, “ഉടമപ്പെടുത്തിയത്”: "“what (they) have owned”" → "“what have owned”" (as the word table of v. 3).

### Meaning

3. p. 935, "അവരുടെ സ്വത്ത് കൈകാര്യം ചെയ്യുന്ന വിഷയത്തിൽ അതിന്റെ കൈകാര്യകർത്താക്കൾ": "their managers" → "its managers" (അതിന്റെ, of the property).
4. p. 940, "ഈരണ്ടോ മുമ്മൂന്നോ നന്നാലോ": "two or three or four may be" → "two each or three each or four each may be" (the distributive was dropped).

### Punctuation and placement

5. p. 936, "ഇവരുടെ ഭാഷയിൽ ‘നേർക്കുനേരെയുള്ള’ ഇത്തരം കണ്ടുപിടുത്തങ്ങൾ": the print has no dashes; the translator's "- ‘straightforward’ in their language -," looked like the author's dash-parenthesis → commas.
6. Footnote (\*) of p. 938: it stood after item (1); moved to after the paragraph that carries its marker ("The gist of the statements … Only some general hints may be given:-"), as earlier parts place notes.
7. p. 937 TN: added "; the Quran text is given here." to match the wording earlier parts use for a misprinted Quran quotation.

No dropped sentences, reversed negations, may/must errors, voice changes or added honorifics were found apart from the above.

## Points the translator asked about

- **Modernist sentence (p. 935).** The print runs: quotation opened ‘ (never closed) … "എന്നൊക്കെ തന്റെ പാണ്ഡിത്യം സമർത്ഥിച്ചുകൊണ്ട് അദ്ദേഹം അവതരിപ്പിച്ച ആ വ്യാഖ്യാനത്തിന്റെ ചുരുക്കം ഇങ്ങിനെയാകുന്നു: ‘…’". The English keeps the order of the claims, the unclosed quotation, and renders എന്നൊക്കെ "with such words"; the " - " before "the gist" is the translator's, needed because the English cannot end the claims with "so saying". Meaning and order unchanged. Left.
- **(2) list (p. 936).** The print has three sentences ending in "…നയം.", "…മാത്രം." and "…താനും എന്നൊക്കെയാണ് … സമർത്ഥിക്കാറുള്ളത്."; the English "That…; that…; that…: it is such things that…" gathers them under the one എന്നൊക്കെ. Nothing added or lost. Left.
- **Verse 3.** "two each, three each and four each" = ഈരണ്ടും, മുമ്മൂന്നും, നന്നാലുമായി: right. "one woman (only, you should marry)" for ഒരുവളെ (മാത്രം വിവാഹം കഴിക്കുക): the bracket's imperative is given as "you should marry", like the next "(you should take)". Acceptable; left.
- **Verse 4.** "the mind being good" for മനസ്സു നന്നായി: literal, matches the table's "mind, with the mind" and "if they are good". Left.
- **"Indo-Western" (p. 937)** for ഇന്തോ പാശ്ചാത്യൻ സംസ്കാരങ്ങൾ: literal and as ambiguous as the Malayalam. Left. Also on p. 937, പാശ്ചാത്യൻസംസ്കാര പരിഷ്ക്കാരങ്ങൾ "the reforms of Western culture": പരിഷ്കാരം can mean "reform" or "modern fashion" (part 01: പരിഷ്കാരപ്രിയന്മാർ "modernity-lovers"); left for the reviewer.
- **TN p. 937.** Confirmed: the print has "(وان خفتم انلا تعدلوا فواحدة او ماملكت ايمانكم)". Earlier parts give the Uthmani text with a TN naming the printed slip (e.g. Ali 'Imran's بِسُوَرٍ, Al-Baqarah's وَمَن for فَمَن). Same practice; wording aligned (correction 7).
- **TN p. 940.** Confirmed on a 300 dpi crop: "ഒരുകൂട്ടി ജനിക്കുന്നപക്ഷം"; "a child" fits ‘കുട്ടിയുടെ ഉമ്മ’ and "കുട്ടി സ്വതന്ത്രനുമായിരിക്കും". Kept.
- **DOUBT തൽപരപ്രിയന്മാർ (p. 941).** Clearly printed. Kept. A further option: p. 940 has ചില തൽപര കക്ഷികൾ "some interested parties", so it may simply mean "interested (biased) people".
- **കൈകാര്യകർത്താവ്.** Earlier parts: കൈകാര്യകർത്താവ് "manager of the affairs", കൈകാര്യക്കാർ (വലിയ്യുകൾ) "managers (walis)" (Ali 'Imran / Al-Baqarah check.md). "manager(s)" here, and "the managers (the wali)" on p. 942, are consistent with that. Left.

## Open doubts for the reviewer

1. **DOUBT in the text**: തൽപരപ്രിയന്മാർ (p. 941): "lovers of (their) interest" / "self-interested ones" / "interested parties" / slip for പരിഷ്കാരപ്രിയന്മാർ.
2. പരിഷ്ക്കാരങ്ങൾ "reforms" (p. 937), see above (not marked in the text).
3. Earlier open doubts (parts 01 and before) still apply.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| കൈകാര്യകർത്താവ് / കൈകാര്യകർത്താക്കൾ | wali | manager / managers (as earlier "manager(s) of the affairs") |
| മഹ്ർ / വിവാഹമൂല്യം | mahr, saduqat | mahr / marriage-price |
| പാരിതോഷികം / ഇഷ്ടദാനം | nihlah | present / voluntary gift |
| ഏകഭാര്യത്വം / ബഹുഭാര്യത്വം | — | monogamy / polygamy |
| അടിമസ്ത്രീ | — | slave woman |
| സഹധർമിണി | — | consort |
| കുട്ടിയുടെ ഉമ്മ | umm walad | mother of the child |
| ആധുനിക തൽപരൻ / പുരോഗമനാശയക്കാർ | — | one fond of modernity / people of progressive ideas |
| ഭരണകർത്താക്കൾ | — | rulers |
