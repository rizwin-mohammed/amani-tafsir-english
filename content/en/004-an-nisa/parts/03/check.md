# Check: An-Nisa' part 03 (verses 5–10)

Checked on 2026-11-18 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 19–30 (book pp. 942–953). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. 300/600 dpi crops: p. 946, the first two lines (the quotation ‘വിവാഹത്തിങ്കൽ എത്തുക (بلغ النكاح), three crops, one mis-aimed); p. 951, the verse 8 panel word ഹാജറുണ്ടായാൽ (three crops, compared with the ര of അവരോട് on the next line).
- **Boundaries.** Part 02 ends on p. 942 with "… അതിൽ മടി കരുതേണ്ടതില്ല എന്നും അല്ലാഹു അറിയിക്കുന്നു.", directly above the verse 5 panel. This part starts with that panel and ends on p. 953 with "… സൂക്ഷിക്കുവാൻ വേണ്ടിയായിരിക്കും. الله أعلم", directly above "വിഭാഗം - 2" (left for part 04). Nothing between is missing.
- Files: `part.json`, `verses.json` (verses 5–10), `words.json` (91 entries: 5: 14; 6: 30; 7: 15; 8: 11; 9: 11; 10: 10), `commentary.md`.
- Groups: *[Verses 5–6]* (panels pp. 942–943, table pp. 943–944, commentary pp. 944–947) | *[Verse 7]* (panel and table p. 948, commentary pp. 948–950) | *[Verses 8–10]* (panels and table p. 951, commentary pp. 952–953). Right. No headings are printed; no footnotes on these pages.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images in the printed order, including "(മാർഗം)ആക്കിത്തന്നിട്ടുള്ള", "[അതുവഴി]", "ഭോഷൻമാർക്ക്" (panel) / "ഭോഷന്മാർക്ക്" (table), "അവൻ(അതുപയോഗിക്കാതെ)", "(ഏൽപിച്ചു)കൊടുക്കുമ്പോൾ" (joined) beside "(ഏൽപിച്ചു) കൊടുക്കുവിൻ" (spaced), "പുരുഷൻമാർക്ക്" (v. 7 panel) / "പുരുഷന്മാർക്കുണ്ട്" (table), "(നിശ്ചയം-നിർബ്ബന്ധം)", "ഒരോഹരി", "ഹാജറുണ്ടായാൽ" (v. 8 panel, റ confirmed at 600 dpi; the table has ഹാജരായാൽ), "തിന്നു(നിറക്കു)ന്നത്". `npm run check`: all 91 `ar` entries are in their verses.
- **Joins across line ends** (no hyphen is printed in Malayalam, so a space cannot be seen): v. 6 panel "പാലിച്ചു / കൊള്ളട്ടെ" → "പാലിച്ചുകൊള്ളട്ടെ"; v. 7 panel "വിട്ടേച്ചു / പോയതിൽ" (2nd) → "വിട്ടേച്ചുപോയതിൽ" as the 1st, which is on one line; v. 7 table "വിട്ടു / പോയ (ഉപേക്ഷിച്ച) തിൽനിന്ന്" (the space before തിൽനിന്ന് is printed, kept); v. 9 panel "വിട്ടേച്ചു പോയി / രുന്നാൽ"; v. 9 table "പേടിച്ചും / കൊള്ളട്ടെ" → "പേടിച്ചുംകൊള്ളട്ടെ". All acceptable; the reviewer may prefer spaces in പാലിച്ചു കൊള്ളട്ടെ and പേടിച്ചും കൊള്ളട്ടെ (the panel prints "തിന്നു കൊള്ളട്ടെ" spaced within a line).
- `[p. N]` markers 944–950, 952–953. No marker for p. 943 (only panel and table) or p. 951 (only panels and table), as part 02 has none for p. 932. Page turns: "In this two *[p. 945]* hints" (രണ്ടു / സൂചനകൾ), "the general *[p. 946]* opinion" (അഭി / പ്രായം, split word), "from the income of the property. *[p. 947]* It must not be taken", "a very regrettable fact. *[p. 949]* It is by exploiting" (പരമാർത്ഥമാകു / ന്നു, split word; the English sentence ends before the marker), "special *[p. 950]* laws", "sought from the Prophet ﷺ *[p. 953]* permission" (അനുവാ / ദം, split word). All right.
- Honorifics: ﷺ printed 6 times (p. 947: 2; p. 952: 1; p. 953: 3); the English has 6. (r) printed 5 times (p. 945 Shafi'i; p. 947 Ibn Jarir, Ibn Kathir, Abu Dharr; p. 952 Sa'd ibn Abi Waqqas); the English has 5. "(മു.)" → "(Mu.)" as earlier parts.
- Quran Arabic (printed plain in the commentary) is copied from the Uthmani text where the printed words are exactly a Quran phrase, as parts 01–02 do: اموالهم, اموالكم, التى جعل الله لكم قياما (p. 944), the two clauses of v. 6 (p. 946), وكفى بالله حسيبا (p. 947), للرجال نصيب، وللنساء نصيب, مما ترك (pp. 949), مما ترك الوالدان والاقربون, مما قل منه او كثر, نصيبا مفروضا (p. 950). `npm run check`: none close-but-not-exact. Plain Arabic kept as printed: بلغ النكاح (p. 946; not the verse's wording بَلَغُواْ), رشد (p. 945), اكل, معروف (p. 946), الله أعلم (pp. 947, 953).

## Corrections made (before → after)

### Meaning and aspect

1. p. 945, "പരീക്ഷിച്ചുകൊണ്ടിരിക്കേണ്ടതാണ് … നൽകിക്കൊണ്ടിരിക്കേണ്ടതുണ്ട്" (continuous): "they must be tested beforehand itself" → "they must keep being tested beforehand itself"; "must also be given" → "must also keep being given".
2. p. 946, "നേരത്തെത്തന്നെ വല്ലതും പാട്ടിലമർത്തിവെക്കുവാനോ": "to secretly put away anything beforehand itself" → "to press anything into one's own grip and keep it beforehand itself" ("secretly" is not in the Malayalam; പാട്ടിൽ = in one's grip / control).
3. p. 949, "‘പുരുഷന്മാർക്കും ഓഹരിയുണ്ട്, സ്ത്രീകൾക്കും ഓഹരിയുണ്ട്": the two -ഉം were dropped. "‘For men there is a share, and for women there is a share," → "‘For men too there is a share, and for women too there is a share,".
4. p. 953, "… സൂക്ഷിക്കുവാൻ വേണ്ടിയായിരിക്കും": "may be in order that" → "will be in order that".

### Rendering and word order

5. p. 945: the sentence is restructured as on p. 944 ("Look at His having said … without saying …"), and ഉപജീവനം is given "livelihood" as in verse 5 and its table (was "Provision"). "This can be understood from His having said, without saying ‘Provision and clothing must be given from it.’, ‘provision and clothing must be given through it - by way of it -’." → "This can be understood from His having said ‘Livelihood and clothing must be given through it - by way of it -’, without saying ‘Livelihood and clothing must be given from it.’"
6. p. 952, തിടുക്കക്കാർ: "hard-pressed ones" → "people in a hurry" (literal, by the rule "faithful, not paraphrased", as part 02 rendered തൽപരപ്രിയന്മാർ literally), with the DOUBT reworded to give "hard-pressed ones" as the other option.

### Brackets and punctuation as printed

7. p. 947, "ഫുക്വഹാക്കളുടെ": "the fuqaha' (jurists)" → "the fuqaha'" (the round bracket is not the author's; an earlier part has plain "the fuqaha'").
8. p. 946, "‘വിവാഹത്തിങ്കൽ എത്തുക (بلغ النكاح) എന്നാണ്": the quotation mark is not closed in the print (300 dpi crop). "‘reaching marriage (**بلغ النكاح**)’." → "‘reaching marriage (**بلغ النكاح**)." (as part 01 mirrored an unclosed quote).
9. Five stray line breaks before page markers (pp. 945, 946, 947, 949, 950) where the print runs on in the same paragraph: joined with a space. No change to the text.

No dropped sentences, reversed negations, number errors, voice changes or added honorifics were found apart from the above.

## Points the translator asked about

- **Joins** (v. 6 പാലിച്ചുകൊള്ളട്ടെ, v. 9 table പേടിച്ചുംകൊള്ളട്ടെ): see above; acceptable, cannot be settled from the image.
- **Spellings as printed**: ഭോഷൻമാർ (panel) / ഭോഷന്മാർ (table and commentary) confirmed; v. 7 table "വിട്ടുപോയ (ഉപേക്ഷിച്ച) തിൽനിന്ന്" confirmed (space before തിൽ).
- **Markers in split words** [p. 946], [p. 949], [p. 953]: right (above).
- **Unclosed quote p. 949** (‘പുരുഷന്മാർക്കും … ഓഹരിയുണ്ട്, (…) എന്ന്): confirmed, mirrored. A second unclosed quote on p. 946 was found and mirrored (correction 8).
- **p. 945 word order**: corrected (5).
- **അടുത്ത കുടുംബങ്ങൾ** (v. 7, its table, p. 950): "near relatives" fits al-aqrabun and the sentence; the DOUBT on p. 950 is kept for the reviewer together with part 01's DOUBT on കുടുംബങ്ങൾ. കുടുംബങ്ങൾക്കോ (p. 949) and കുടുംബങ്ങളോ (p. 952) stay "the families" / "families", as part 01.
- **തിടുക്കക്കാർ** (p. 952): clearly printed; now literal (6), DOUBT kept.
- **Quotation marks added by the translator** around clearly direct speech or glossed terms, e.g. p. 945 ‘Ought we not to be allowed …?’ (printed without quotes) and p. 946 ‘use’ / ‘what is reckoned as proper …’: left; they do not change the meaning, and the reviewer may remove them.

## Checked and left as they are

- v. 6 "And test the orphans" for പരീക്ഷിച്ചു നോക്കുകയും ചെയ്യുക; "if you perceive sense of affairs in them" for അവരിൽ നിന്ന് … കണ്ടറിഞ്ഞുവെങ്കിൽ (the table has "from them"). Left.
- p. 946, അബലകൾ "the helpless" (the word is also used for "women", literally "the weak"). Left.
- p. 952, "ഒരു തോട്ടക്കാർക്കു" "some garden-owners". Left.
- `part.json` verses "5-10", pages "942-953", PDF pages "19-30": correct.

## Open doubts for the reviewer

1. **DOUBT in the text**: അടുത്ത കുടുംബങ്ങൾ "near relatives" / "near families" (p. 950; also v. 7 and its table), tied to part 01's DOUBT on കുടുംബങ്ങൾ.
2. **DOUBT in the text**: തിടുക്കക്കാർ "people in a hurry" / "hard-pressed ones" (p. 952).
3. Line-end joins പാലിച്ചുകൊള്ളട്ടെ (v. 6) and പേടിച്ചുംകൊള്ളട്ടെ (v. 9 table): joined or spaced (not marked in the text).
4. Earlier open doubts (parts 01–02 and before) still apply.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഭോഷന്മാർ | sufaha' | fools |
| നിലനിൽപ് | qiyam | mainstay |
| കാര്യബോധം / തന്റേടം | rushd | sense of affairs / firmness of mind (as part 01) |
| മാന്യത പാലിക്കുക | ista'fafa | keep decency |
| മര്യാദ / മര്യാദപ്പെട്ട | ma'ruf | propriety / proper |
| കണക്കു നോക്കുന്നവൻ | hasib | one who checks the account |
| അടുത്ത കുടുംബങ്ങൾ | al-aqrabun | the near relatives (DOUBT) |
| കുടുംബക്കാർ | ulu al-qurba | kinsfolk |
| സാധുക്കൾ | masakin | the poor |
| ഓഹരി | nasib | share |
| അനന്തരാവകാശം / അനന്തരസ്വത്ത് | — | inheritance / inherited property |
| വസ്വിയ്യത്ത് | wasiyyah | wasiyyah |
| സ്ഥിതിസമത്വവാദം | — | doctrine of equality of condition (socialism) |
| കത്തിജ്ജ്വലിക്കുന്ന നരകം | sa'ir | the blazing Hell |
