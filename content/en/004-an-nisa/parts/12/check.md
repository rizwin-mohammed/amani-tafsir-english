# Check: An-Nisa' part 12 (verses 58–59)

Checked on 2026-11-21 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 109–118 (book pp. 1032–1041). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. 300/600 dpi crops: p. 1037 **أولوالأَمْرِ**; p. 1039 **الاجتهادوالاستنباط**.
- **Boundaries.** Part 11 ends on p. 1032 with the hadith "… അവനത് മുറിച്ചുകടന്നുപോകയില്ല.' (ബു: മു.)". This part starts directly below it with the verse 58 panel, and ends on p. 1041 with "… അടുത്ത വചനങ്ങളും കൂടി ഇതോടൊപ്പം മനസ്സിരുത്തുക:-", directly above "വിഭാഗം - 9" and the verse 60 panel. Nothing between is missing.
- **Footnotes.** p. 1037 (\*) (al-Siba'i's book; marker after "… ബാധകവുമല്ല.") and (\*\*) (كما فى فتح الباري; marker after "ചില മഹാന്മാർ"): both present, each after its paragraph. p. 1041 (\*) on ta'bir: it is printed at the foot of the page below the verse 60 panel, but its marker is in this part's hadith (10) ("'തഅ്ബീർ' (\*) ചെയ്യുക"), and the verse 60 panel has no marker. So it belongs to this part; it is present after hadith (10)'s paragraph. Right.
- Files: `part.json`, `verses.json` (verses 58–59), `words.json` (36 entries: 58: 17; 59: 19), `commentary.md`.
- Groups: *[Verse 58]* (panel pp. 1032–1033, table and commentary pp. 1033–1035) | *[Verse 59]* (panel pp. 1035–1036, table and commentary pp. 1036–1041). p. 1032 holds only the panel and p. 1035's commentary continues from v. 58, so there is no `[p. 1032]` marker and the v. 59 group opens with `[p. 1036]`. Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images, including "(വിശ്വസിച്ചേൽപിക്കപ്പെട്ട) 'അമാനത്തു' കളെ" (space printed), "(ഒരു)", "(എല്ലാം)" (v. 58); "(ഭിന്നിച്ച്)" (v. 59); table "കൊടുത്തുവീട്ടു (തീർത്തു- ഏൽപിച്ചു കൊടുക്കു)വാൻ", "അമാനത്ത് (അനാമത്ത് - വിശ്വസിച്ചേൽപിക്കപ്പെട്ടത്)കളെ", "വിധി (കൽപി)ച്ചാൽ", "കാര്യക്കാരെ (അധികാരസ്ഥന്മാരെ)യും", "എന്നാൽ (എനി)". The panel spells കല്പിക്കുന്നു / വിധികല്പി- (ല്പ) and the table കൽപിക്കുന്നു (ൽ); kept as printed.
- **Word tables pp. 1033 and 1036.** Pairings checked by meaning and text-layer order, all in Quran order. p. 1033: كَانَ is printed at the end of the last line, but the text layer pairs it with ആകുന്നു, which begins that line. p. 1036: مِنكُمۡ and فِي شَيۡءٖ are printed at line ends before their glosses on the next line. Right.
- **۞ in the v. 58 word table.** The verse in `data/quran-uthmani.json` begins "۞إِنَّ ٱللَّهَ"; the `ar` "إِنَّ ٱللَّهَ" is a substring and passes `npm run check`. Every earlier part with a ۞ verse (e.g. Ali 'Imran 3:33, An-Nisa' 4:36) leaves the ۞ out of the `ar`. Kept.
- **Dropped ണ്ട glyph, p. 1034.** On this page the font drops ണ്ട (and the text layer has gaps) in കണ്ടും, കൊണ്ടിരിക്കുന്ന, ചൂണ്ടിക്കാണിച്ച, ശ്രദ്ധിക്കേണ്ടതായുണ്ട്, രണ്ട്, ഉണ്ടായേക്കുന്ന, നോക്കേണ്ടതില്ല, അതുകൊണ്ടാണ്, ചെയ്യേണ്ടി, ഓർമിച്ചിരിക്കേണ്ടതാകുന്നു. Only the commentary is affected and each word is certain from context. Translated with no marker, as part 10 did for the garbled glyphs on p. 1021 (a font fault, not a word of the author). Right.
- `[p. N]` markers 1033–1041. Page turns: "carrying them out as *[p. 1034]* settled" (നിശ്ച / യപ്രകാരം), "blood *[p. 1035]* (shedding)" (രക്തം / (ചിന്തൽ)), "some *[p. 1037]* do not fail to argue so" (ചിലർ / വാദിക്കാതെയുമില്ല), "peace and security *[p. 1038]* will not" (സമാധാനഭദ്രത / ഉണ്ടായിരിക്കുകയില്ലല്ലോ), "to make observation, *[p. 1039]* **الاجتهادوالاستنباط**", "and anger *[p. 1040]* becoming intense" (ദേഷ്യം / കഠിനമാകുകയും), "like the *[p. 1041]* advice" (ഒരാളുടെ / ഉപദേശം: the English must put "advice" before "of one who goes away", so the marker stands before the first word printed on p. 1041). Acceptable.
- Honorifics: ﷺ printed 16 times (p. 1034 ×2, p. 1035 ×1, p. 1036 ×2, p. 1038 ×1, p. 1039 ×2, p. 1040 ×7, p. 1041 ×1); the English has 16. (r) printed 12 times (Ibn 'Abbas ×2, Hudhayfah, Muslim, Jabir, 'Ubadah, Ibn 'Umar, Ibn Mas'ud, 'Abd al-Rahman ibn Samurah, Abu Hurairah, 'Irbad, Rafi'); the English has 12. "തിരുമേനി" alone → "the noble one", as parts 09–11. Abbreviations as printed: (Da; Ti; Ha; Ba.), (Malik), (Bu; Mu.), (Mu.), (A; Da; Ti; Ja.).
- Numbers and references: the 80th verse; 53 : 3; the four principles (1)–(4); the hadiths (1)–(10). Right as printed.
- Arabic: every Quran quotation in the commentary is byte-exact from `data/quran-uthmani.json` (from 4:59; 4:80 مَّن يُطِعِ ٱلرَّسُولَ فَقَدۡ أَطَاعَ ٱللَّهَ without the following ۖ; 53:3). Hand-typed Arabic as printed (checked on the images and crops): **أَمَانَةَ**, **والله الموفق والمعين**, **معاذ الله**, **السنة ومكانتها فى الشريع الاسلامى للمرحوم الدكتور مصطفى السباعى** (the text layer, readable here, also has الشريع), **أولوالأَمْرِ** (correction 3), **كما فى فتح الباري**, **إن شاء الله**, **الاجتهادوالاستنباط**, **عِرباض**, **رافِع**, **تأبير**.
- **الاجتهادوالاستنباط** (p. 1039): at 300 dpi there is no clear word space; the gap after و is only the normal gap after a non-joining letter. The text layer has a space before و (الاجتهاد والاستنباط). Kept joined as the translator gave it; the reviewer may prefer الاجتهاد والاستنباط.
- **Mirrored as printed, without TN** (as earlier parts): p. 1034 "അമാനത്തുകളെ … വീട്ടണ'മെന്ന്" has no opening quote, and "'മനുഷ്യർക്കിടയിൽ … കൽപിക്കണമെന്ന്" is not closed; p. 1037 no comma in "വിധികർത്താക്കൾ സമുദായ നേതാക്കൾ" ("judges community leaders"); p. 1038 stray stop "… ഭിന്നിപ്പുകളും. അഭിപ്രായ വ്യത്യാസങ്ങളുമെല്ലാം" ("… among people mutually. and the differences of opinion"), comma in "ഇത്തരം, ലൗകിക കാര്യങ്ങൾ" ("such, worldly matters"); p. 1039 no stop after "ആമീൻ"; p. 1040 Jabir's hadith opens with “ and closes with ’, and has no stop between "… നിർമിക്കപ്പെട്ടവയാണ്" and "എല്ലാ പുത്തനാചാരവും"; p. 1041 hadiths (9) and (10) are not closed. p. 1038 and the word table എനി is taken as ഇനി ("now"), as parts 09–11. All confirmed on the images.
- Glossary: (r), ﷺ. റബ്ബ് (p. 1033) is "Rabb", as earlier parts give the printed loanword (the glossary's "Lord" is for രക്ഷിതാവ്).

## Corrections made (before → after)

### Sentence structure

1. p. 1036 "വ്യക്തിപരവും, സാമൂഹ്യവും, സാമ്പത്തികവും രാഷ്ട്രീയവും, സാംസ്കാരികവുമായ എല്ലാ ജീവിത വശങ്ങളും": no dashes are printed. "All aspects of life - personal, and social, and economic and political, and cultural - ought to" → "All the personal, and social, and economic and political, and cultural aspects of life ought to".

### Word order

2. p. 1033 "… എന്നും മലയാളത്തിലും പറയപ്പെടാറുണ്ട്": the "also" belongs to "in Malayalam". "are also wont to be said in Malayalam" → "are wont to be said in Malayalam too".

### Arabic as printed

3. p. 1037 **أولوالأمْرِ** → **أولوالأَمْرِ** (the 600 dpi crop shows a fatha over the hamza of الأ).

### Rendering

4. p. 1040 hadith (4) "അധികാരസ്ഥന്മാരോട് അധികാരത്തിൽ പിണങ്ങാതിരിക്കുവാനും" and "… പിണങ്ങരുത്": "dispute" → "fall out" (×2), the rendering this part uses for പിണങ്ങുക in v. 59 ("fall out", verse panel, table and p. 1038).

### DOUBT added

5. p. 1040 "എല്ലാ പുത്തനാചാരവും (അനാചാരവും) ദുർമാർഗവുമാകുന്നു": inline DOUBT added (see open doubts).

No dropped sentences, reversed negations, changed conditions, number errors, voice changes or added honorifics were found.

## Points the translator asked about

- Dropped ണ്ട glyph on p. 1034: right practice (see above).
- TN on the p. 1037 footnote (الشريع for التشريع): kept; the text layer confirms الشريع is printed.
- Hand-typed Arabic: confirmed (see above); أولوالأَمْرِ corrected (3); الاجتهادوالاستنباط left joined (see above).
- ۞ in the v. 58 table: right (see above).
- Mirrored slips: confirmed (see above).
- v. 59 table تَأۡوِيلًا "പര്യവസാനം, പുലർച്ചയിൽ" → "final outcome, in fulfilment": kept (see open doubts). പര്യവസാനം is "final outcome" as Ali 'Imran part 01 (3:7).
- Page turns pp. 1034 and 1041: right (see above).
- (\*\*) **كما فى فتح الباري** with no English: kept; the author gives no Malayalam rendering, and part 10 gives (**كما فى ابن جرير و غيره**) the same way. (Al-Baqarah part 43 added a DOUBT with a suggested English; the reviewer may want one practice: the words mean "as in Fath al-Bari".)
- "every new custom (evil custom as well) is misguidance too": kept with a DOUBT (5).
- Hudhayfah: An-Nisa' part 10 has "Hudhayfah ibn al-Yaman", the same as this part; Ali 'Imran part 11 has "Hudhaifah ibn al-Yaman" (the other occurrences are in check.md files). Kept as part 10; the reviewer may want Ali 'Imran aligned.
- Ta'bir footnote: belongs to this part and is present (see above).
- New terms: aligned (see table).

## Open doubts for the reviewer

- **p. 1040 (അനാചാരവും)** (inline DOUBT): either "every new custom is (an evil custom, and) misguidance" or "every new custom (and evil custom) is misguidance". The rendering keeps the order of the words.
- **v. 59 table تَأۡوِيلًا "പുലർച്ചയിൽ"** is rendered "in fulfilment" (പുലരുക "to come true"; ta'wil as the coming true of a thing). പുലർച്ച usually means "daybreak", which does not fit here. The reviewer may prefer "in (its) coming true".
- **p. 1039 الاجتهادوالاستنباط**: joined or spaced (see above).
- **Hudhayfah / Hudhaifah** spelling across surahs (see above).
- No other inline DOUBT markers in this part. Earlier open doubts still apply.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| അമാനത്ത് / അനാമത്ത് | amanah | amanah (trustworthiness) / anamath (as earlier parts: "the amanah") |
| വിശ്വസ്തത / വിശ്വസ്തൻ | — | trustworthiness / trustworthy man |
| അധികാരസ്ഥന്മാർ / കാര്യക്കാർ | uli al-amr | those in authority (as part 08) / the people in charge |
| അമീർ / ഇമാം (ഭരണ നേതാവ്) | amir, imam | the amir / the imam (the leader of government) |
| സുന്നത്ത് | sunnah | the Sunnah |
| നിയമനിർമാണം | tashri' | law-making |
| ഇജ്തിഹാദ്, ഇസ്തിംബാത്ത് (Arabic only) / ഉസ്വൂൽ | ijtihad, istinbat / usul | Arabic kept / usul (the fundamentals of jurisprudence) |
| പുത്തനാചാരം / അനാചാരം / പുതുനിർമിതം | bid'ah | new custom / evil custom / newly-invented thing |
| ചര്യ | sunnah | conduct |
| ബൈഅത്ത് | bay'ah | bay'ah (pledge) |
| വസ്വിയ്യത്ത് | wasiyyah | wasiyyah (as Al-Baqarah) |
| പിണങ്ങുക / പിണക്കം | tanazu' | fall out / a falling out |
| പര്യവസാനം | ta'wil | final outcome (as Ali 'Imran 3:7) |
| സദുപദേശം | wa'z | good counsel (as Al-Baqarah) |
| തഅ്ബീർ | ta'bir | ta'bir |
