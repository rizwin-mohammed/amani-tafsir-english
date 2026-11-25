# Check: An-Nisa' part 08 (verses 33–35)

Checked on 2026-11-19 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 73–81 (book pp. 996–1004). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. 300/600 dpi crops: p. 997 **مَوَالِي**, **مَوْلَي**, **الصَبَة**, **يَمِين**, **اَيمَان**, **عَقد اليَمِين**, "ആദർബന്ധു"; p. 1001 the two bracketed quotations of v. 34; p. 1003 **إن شاء الله**.
- **Boundaries.** Part 07 ends on p. 996 with "… അസൂയകൊണ്ട് വിവക്ഷ.". This part starts with the verse 33 panel directly below it and ends on p. 1004 with "… നൽകേണ്ടതുണ്ട്.' (മു.)", directly above the verse 36 panel. Nothing between is missing. No footnotes on these pages.
- Files: `part.json`, `verses.json` (verses 33–35), `words.json` (59 entries: 33: 15; 34: 28; 35: 16), `commentary.md`.
- Groups: *[Verse 33]* (panel p. 996, table pp. 996–997, commentary pp. 997–998) | "### Section – 6" (വിഭാഗം - 6, p. 999) | *[Verses 34–35]* (panels pp. 999–1000, table and commentary pp. 1000–1004). p. 999 holds only the heading and panels, so there is no `[p. 999]` marker (as part 06 p. 976). Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- **Verse 34 (sensitive).** Panel, table and commentary were compared word by word. Panel: men are നടത്തിപ്പുകാർ (of affairs) over women; the two reasons in the printed order (Allah's making some excel over others; their spending from their properties), then "[ഇതാണതിനു കാരണം]"; the good women obedient and guarding in absence as Allah has guarded; for those whose estrangement [disobedience] you fear: good counsel, forsaking in the places of lying down, striking, in that order; if they obey, seek no way against them; Allah Exalted, Great. Commentary (3), p. 1002: first good counsel about the consequences ("must ... try"), if it does not take effect keeping her away at the time of lying down ("may"), if even with that the estrangement does not end striking "as a discipline" ("may also"), only a striking that causes no injury (from the hadith below), and once she comes to obedience no further measure, ending the measure at the very point the estrangement ended, no abuse, threats or narrowing of conduct. The modal verbs (കൊടുത്തുനോക്കണം / നിറുത്താം / ചെയ്യാം / പാടുള്ളൂ / സ്വീകരിച്ചുകൂടാ / അവസാനിപ്പിക്കണം) are rendered as printed. p. 1001 (1): the 1st and 2nd reasons, the Bukhari hadith, 2:228 and the occasion of revelation, in the printed order. pp. 1002–1003: the warning to men, the 128th verse, (4) the mediators. Hadiths (1)–(7) pp. 1003–1004. No softening or strengthening was found apart from the bracket additions and wordings corrected below (corrections 3–8).
- `verses.json` and every `words.json` gloss match the images, including "(തന്നെ, തങ്ങളുടെ)", "[സ്വത്തിനു]", "(ദൃക്) സാക്ഷിയാകുന്നു." (v. 33); "[മനുഷ്യരിൽ]", "[പുരുഷന്മാർ]", "[ഇതാണതിനു കാരണം]" with no stop, "[അനുസരണക്കേട്]" (v. 34); "പിളർപ്പു [ഛിദ്രം]", "വിധികർത്താവിനെ [മദ്ധ്യസ്ഥനെ]യും" ×2 (v. 35); table "സ്ഥാപിച്ചു(വോ)", "നിങ്ങളെഅനുസരിച്ചെങ്കിൽ" (no space), "അല്ലാഹു(കാത്തു) സൂക്ഷിച്ചപ്രകാരം, കാത്തതുകൊണ്ട്", "ആൾക്കാരി(കൂട്ടക്കാരി)ൽ", "ഒരു വിധി കർത്താവിനെയും" (spaced).
- **Word tables pp. 996–997 and p. 1000.** Each Arabic word is printed just before its gloss; one at a line end can be displayed at the other end of the line. Pairings checked by meaning and text-layer order, all in Quran order: v. 33 جَعَلۡنَا / مَوَٰلِيَ / مِمَّا تَرَكَ across the line, وَٱلۡأَقۡرَبُونَ "അടുത്ത കുടുംബങ്ങളും (അധികം അടുത്ത ബന്ധുക്കളും)" across the page turn; v. 34 ٱللَّهُ "അല്ലാഹു" / بَعۡضَهُمۡ "അവരിൽ ചിലരെ" / عَلَىٰ بَعۡضٖ "ചിലരെക്കാൾ" / وَبِمَآ أَنفَقُواْ; بِمَا حَفِظَ ٱللَّهُ "അല്ലാഹു(കാത്തു) സൂക്ഷിച്ചപ്രകാരം, കാത്തതുകൊണ്ട്" (both glosses belong to it; وَٱلَّـٰتِي "യാതൊരു സ്ത്രീകൾ" follows); كَانَ عَلِيّٗا / كَبِيرٗا; v. 35 وَإِنۡ خِفۡتُمۡ / شِقَاقَ / بَيۡنِهِمَا. Right.
- `[p. N]` markers 997, 998, 1000–1004. Page turns: "and *[p. 998]* those with whom" (നിങ്ങളുടെ / വലങ്കൈകൾ), "quarrel and dispute *[p. 1001]* arising" (വക്കാ / ണവും), "On this occasion *[p. 1002]* this was revealed" (അവസര / ത്തിലാണിത്), "behaving *[p. 1003]* improperly" (അപമര്യാദയായി / പെരുമാറുക), "pleased with her, *[p. 1004]* she will enter". Acceptable.
- Honorifics: ﷺ printed 8 times (p. 998 ×1, p. 1001 ×3, p. 1002 ×3, p. 1003 ×1); the English has 8. "തിരുമേനിയുടെ" p. 1004 (no ﷺ printed) → "the noble one". (r) printed 4 times (Bukhari p. 1001; Ibn Jarir, Abu Hurayrah, Bayhaqi p. 1002); the English has 4. Abbreviations as printed: (Bu; Mu.) ×2, (Ti.) ×2, (A; Da; Ja), (A; Da), (Mu.). Numbers: 2 : 228, the 128th verse, Surat Nisa' : 34, 35, (1)–(4), hadiths (1)–(7). Right.
- Arabic: Quran words and phrases are in the Uthmani text. **مَا فَضَّلَ ٱللَّهُ بَعۡضَهُمۡ عَلَىٰ بَعۡضٖ** (p. 1001) is printed without بِ and is copied from the verse starting after it, as earlier parts do for quotations printed without a letter (Ali 'Imran: مَآ أُنزِلَ, مَآ أُوتِيَ "each printed without its وَ"; (رَفَعَهُ اللَّهُ إِلَيْهِ) "printed without بَلْ"). The second quotation was treated the same way (correction 2). Hand-typed Arabic confirmed at 300/600 dpi: مَوَالِي (fathah on mim and waw, kasrah under lam), مَوْلَي (correction 1), اَيمَان (fathah on the alif, none on ya), يَمِين, عَقد اليَمِين (fathah on ʿayn only in عقد), الصَبَة, إن شاء الله (p. 1003; unvowelled apart from the hamzah/kasrah under the alif).
- **Mirrored slips without TN** (as earlier parts): p. 1002 "… വിവരിച്ചതിന് ശേഷം. സ്ത്രീകളോട്" (stray stop, mirrored "in detail. Allah warns"); p. 1002 ഭിഷണിപ്പെടുത്തുക (for ഭീഷണി-, meaning clear: "threatening"); p. 1002 "എന്നൊക്കെയാണ്; എന്നിട്ട്" (semicolon before the quoted verse words; English uses a colon there); p. 1004 വിരുപ്പിൽ (for വിരിപ്പിൽ "bed", as spelled correctly on p. 1003). All confirmed on the images. p. 997 الصَبَة keeps the translator's TN (it changes an Arabic word, not only spelling).
- Glossary: (r), ﷺ. No glossary term occurs otherwise. സൂക്ഷിക്കുക with Allah "guard against Allah" as earlier parts (correction 9).

## Corrections made (before → after)

### Arabic as printed

1. p. 997, printed مَوْلَي (dotted ya, fathah on lam; 600 dpi): **مَوْلَى** (alif maqsurah) → **مَوْلَي**.
2. p. 1001, printed (بِمَا أَنفَقُوا مِنۡ أَمۡوَالِهِمۡ) without وَ (300 dpi): **وَبِمَآ أَنفَقُواْ مِنۡ أَمۡوَٰلِهِمۡۚ** → **بِمَآ أَنفَقُواْ مِنۡ أَمۡوَٰلِهِمۡۚ** (copied from the verse after the وَ, as for مَا فَضَّلَ on the same page).

### Additions in round brackets that are not printed

3. Table v. 34 قَوَّـٰمُونَ "നിലകൊള്ളുന്നവരാണ്": "are those who stand (over)" → "are those who stand" (the "(over)" was the translator's, but round brackets are the author's).
4. Table v. 34 بِمَا حَفِظَ ٱللَّهُ "അല്ലാഹു(കാത്തു) സൂക്ഷിച്ചപ്രകാരം": "as Allah has (guarded and) kept safe" → "as Allah has (guarded) kept safe" (only കാത്തു is in the bracket).
5. p. 1004 hadith (4) "(വാക്കുകൊണ്ടോ മറ്റോ) ചീത്തപ്പെടുത്താതിരിക്കുക": "refrain from disgracing (her) (by word or otherwise)" → "refrain from disgracing (by word or otherwise)" (the only printed (അവളെ) is in the next clause, kept there).
6. p. 1004 hadith (7) "പരിക്കു (മുറിവോ ചതവോ) പറ്റാത്ത അടി": "a blow that causes no injury (no wound or bruise)" → "a blow by which no injury (wound or bruise) is caused" (the bracket holds only "wound or bruise").

### Rendering

7. p. 1002 hadith "നീ അവളിൽ നിന്ന് (വിട്ട്) മറഞ്ഞുപോയാൽ": "if you go away hidden (absent) from her" → "if you go (away) out of sight from her" (the bracket is വിട്ട്; "(absent)" was not printed).
8. p. 1003 hadith (1) "പിന്നീട് (ആ) ദിവസത്തിന്റെ അവസാനത്തിൽ അവൻ അവളോടൊപ്പം ശയിച്ചേക്കുമല്ലോ": "For afterwards, …" → "Afterwards, …" (no "for" printed; -അല്ലോ is already "surely").
9. p. 1004 hadith (7) "നിങ്ങൾ അല്ലാഹുവിനെ സൂക്ഷിക്കണം": "You must fear Allah" → "You must guard against Allah" (അല്ലാഹുവിനെ സൂക്ഷിക്കുക "guard against Allah" in all earlier parts).

### Layout

10. p. 1001/1002: a stray line break inside the paragraph before "*[p. 1002]*" joined with a space. No change to the text.

No dropped sentences, reversed negations, changed conditions or steps, number errors, voice changes or added honorifics were found.

## Points the translator asked about

- **v. 33 panel bracket** "എല്ലാവർക്കും (തന്നെ, തങ്ങളുടെ) മാതാപിതാക്കളും": English "For everyone (indeed, their), for what parents …" keeps the bracket next to "everyone", where it is printed; തങ്ങളുടെ "their" in fact belongs to "parents", which English has to move behind "for what". Left; the reviewer may prefer "For everyone, for what (indeed, their) parents and close relatives have left behind …".
- **p. 998 (2)** "(ഭർത്താവാണെങ്കിൽ പകുതിയും; നാലിലൊന്നും; ഭാര്യയാണെങ്കിൽ ഭർത്താവിന്റെ പകുതിയും)" → "(if it is the husband, a half; and a quarter; if it is the wife, half of the husband's)": as printed, semicolons kept. Right.
- **p. 1001 order** (printed on p. 1001, not 1000): the 1st reason with its quotation, the explanation, the prophets and the Bukhari hadith; then "The 2nd is the fact …" with its quotation, mahr etc., "This too …". 2:228: Arabic, (البقرة), then the bracketed Malayalam ending "2 : 228)". Right.
- **"ആദർബന്ধു"** p. 997: clear at 300 dpi, not a known word. The translator's DOUBT is kept; it follows the earlier practice for unknown printed words (DOUBT with the possible readings). The word stands in a list of the senses of مولى with nothing in the context to choose a meaning, so it is given transliterated rather than with a guessed rendering.
- **TN الصَبَة**: confirmed at 300 dpi (alif-lam, sad and ba with fathah, ta marbutah; no ʿayn). Kept.
- Hand-typed Arabic, word-table pairings, slips: see above.

## Open doubts for the reviewer

- p. 997 "ആദർബന്ധു" (translator's DOUBT, kept): ആദരബന്ധു / ആദർശബന്ധു, or another sense of مولى.
- **Two Malayalam words with the same English.** നടത്തിപ്പുകാർ (v. 34 panel and table, new here) is rendered "managers", and earlier parts render കൈകാര്യക്കാർ (awliya') "managers" (Al-Baqarah parts 43, 50; Ali 'Imran) and കൈകാര്യകർത്താവ് "manager (of the affairs)" (Al-Baqarah 38; An-Nisa' 02–03). "managers" was kept because it is the plain meaning and matches നടത്തിപ്പ് "management" (Al-Baqarah 2:164), and because the word is the key word of a sensitive verse. If the reviewer wants the Malayalam words kept apart, options: "administrators", "those who run (affairs)", "those who conduct (affairs)".
- Earlier open doubts still apply.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ബന്ധപ്പെട്ടവർ (അവകാശികൾ) | mawali | those connected (heirs) |
| മൗലാ / മവാലീ | mawla / mawali | mawla / mawali (transliterated) |
| അസ്വബക്കാർ | 'asabah | the 'asabah people |
| സഖ്യബന്ധം / സഖ്യ ഉടമ്പടി | hilf | alliance relationship / alliance covenant |
| നടത്തിപ്പുകാർ | qawwamun | managers (see open doubts) |
| അധികാരസ്ഥന്മാർ | qawwamun | those in authority |
| മേലധികാരം / മേൽനോട്ടം | — | overlordship / supervision |
| സദ്‌വൃത്തകൾ | salihat | women of good conduct |
| പിണക്കം | nushuz | estrangement |
| സദുപദേശം | wa'z | good counsel |
| വിധികർത്താവ് (മദ്ധ്യസ്ഥൻ) | hakam | arbiter (mediator) |
| പിളർപ്പ് (ഛിദ്രം) | shiqaq | rift (discord) |
