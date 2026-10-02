# Check: Al-Baqarah part 10 (verses 58–62)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 96–106 (book pp. 267–277), rendered at 150 dpi and read in full, including the four footnotes (three on p. 268, one on p. 269). Every page was re-read at 300 dpi in two halves (with the line between the halves rendered separately); the verse panels and word tables (pp. 267–268, 270, 271–272, 275) at 300 dpi; the Arabic in the footnotes of p. 268, حِطَّةٌ and حنطة (p. 269), اَنْزَلَ (p. 269), عُيُون مُوسى (p. 271), حُورَب and يَهُودية (p. 274) at 600–2400 dpi. The `ml2uni.py` text layer was used only for spelling (on these pages it is incomplete).
- Scope: the part starts at the verse 58–59 panel on p. 267, directly after part 09's والله أعلم, and ends on p. 277 with the sentence "The literal meaning of that word is 'those who have changed religion'", directly above the verse 63–64 panel. Both boundaries confirmed.
- `part.json`, `verses.json` (verses 58–62), `words.json` (112 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. No sentence is missing or added. The four footnotes are present, each right after the paragraph holding its marker: (\*), (\*\*), (\*\*\*) in the first paragraph of p. 268 (Bait al-Muqaddas, Ariha, "That country"), and (\*) of p. 269 in the Yusha' paragraph.
- `verses.json` Malayalam and every `words.json` gloss were compared with the images; they match (including ഹിത്ത്വത്തുൻ, ഉദ്ദേശിച്ചേടത്ത് in verse 58 but ഉദ്ദേശിച്ചിടത്ത് in the word table, (എന്നും പറയപ്പെട്ടു) with no full stop in verse 60, the space before "?" and ":" in verse 61, മേൽയാതൊരു with no space in verse 62, the full stop after വ്യസനിക്കും. in the last gloss).
- Quran quotations: Ma'idah 21 phrase (p. 268), 2:61 phrases (p. 273), 2:47 phrase (p. 274) and 3:85 (p. 277) are copied from `data/quran-uthmani.json`; the cited phrases have the same words as the verses (the print uses ordinary spelling), so they stay in the data-file form, as in parts 04, 08 and 09. `npm run check` reports for Al-Baqarah only the one known "close but not exact" item (تَابَ إِلَى الله, part 06). Other Arabic is as printed: اورشليم، القدس الشريف, الاردن, حِطَّةٌ, حنطة, اَنْزَلَ, سويس, عُيُون مُوسى, إن شاء الله, حُورَب, يَهُودية, يوشع - ع (two corrections below).
- `[p. N]` markers 268–277 checked against the printed page numbers and page breaks. P. 267 holds only the end of part 09 and the verse 58–59 panel, so it has no marker. The author's headings വിഭാഗം – 7 (p. 270) and വിഭാഗം – 8 (p. 275) are present as "### Section – 7" and "### Section – 8", each before its verse panel.
- Glossary renderings (Lord for രക്ഷിതാവ് in verse 62, Rabb where the author writes റബ്ബ്, (r), (a), ﷺ) and earlier parts' renderings (the Israelites, Children of Isra'il, Bait al-Muqaddas, sujud, manna and salwa, signs, ayat, Fir'aun, superhuman signs, Quran commentators, mighty for വമ്പിച്ച, (Allah knows), the Last Day, the losers, the Hereafter, shirk, wayward for തോന്നിയവാസം) are used.

## Corrections made (before → after)

### Arabic transcribed as printed (p. 268 footnotes)

1. Footnote (\*\*), 1200 dpi: no fatha is printed on the alif (hamza only): "**أَرِيحَاء**" → "**أرِيحَاء**".
2. Footnote (\*), 2400 dpi: the print has no sukun on the lam and no vowel on the qaf (the marks above ق are its two dots): "**بَيْتُ الْمُقَدَس**" → "**بَيْتُ المُقَدَس**".

### Names (Bible names policy)

3. Footnote (\*), p. 268, യെരൂശലേം, ജരൂസലം (Jerusalem): the second name was given as "Jerusalem", which made "Jerusalem (Jerusalem)". Where the author adds his own gloss, the policy of this part (Yeriho (Jericho), Mizrayim (in Egypt)) is to transliterate his Malayalam and keep his gloss: "Yerushalem, Jerusalem (Jerusalem)" → "Yerushalem, Jarusalam (Jerusalem)".

### Meaning (verses.json, verse 61)

4. മുളപ്പിച്ചുണ്ടാക്കുന്നവയിൽ നിന്ന് ("causes to sprout and produces"; -ഉണ്ടാക്കുന്ന was dropped): "from what it makes to sprout, such as" → "from what it makes to sprout and produces, such as".
5. അടിക്കപ്പെടുക [അവരെമൂടിക്കളയുക]യും ചെയ്തു: the author's bracket is active ("cover them over"); "made to" was an addition: "were also struck [made to cover them over] upon them." → "were also struck upon them [covered them over]."

### Doubts

6. p. 276, "the 72nd verse of Su. Ma'idah, which is of the same kind": the number is printed clearly as 72, but in the Quran text used here 5:72 is a different verse, and 5:69 has the same wording as 2:62. New DOUBT added after the sentence (translated as printed). See open doubt 7.
7. Verse 58 DOUBT (may / will): kept, and the author's own commentary on p. 269 (കൂടുതൽ നന്മ നൽകുമെന്നും, "would give more good") was added to it as evidence. See open doubt 1.

No dropped sentences, misplaced footnotes or page markers, reversed negations, tense errors, added pronouns or silently corrected misprints were found. No changes were needed in `words.json`.

## Checked and left as they are

- **"the children of Yisra'il"** (Bible quotations, pp. 273, 274) for യിസ്റാഈൽ മക്കൾ, and **"Children of Isra'il"** (verse 61) for ഇസ്റാഈൽ സന്തതികൾ. The Malayalam differs in both words: the Bible form യിസ്റാഈൽ against the author's own ഇസ്റാഈൽ, and മക്കൾ against സന്തതികൾ. The English keeps them apart by the name (Yisra'il / Isra'il) and the capital (children / Children). "children" is the plain meaning of മക്കൾ, and "Children of Isra'il" is the established rendering of ഇസ്റാഈൽ സന്തതികൾ (parts 07–09), so both were left. If the reviewer wants a separate word for മക്കൾ as well, "sons of Yisra'il" would be possible, but മക്കൾ includes daughters.
- **Bible names policy.** Usual English names where the author gives no gloss or gives a Quranic name in brackets, as part 09 did ("Jehovah (God)", "Moses (Musa)"): Elijah (the Prophet Ilyas), Jehovah (to Allah), John (of the Prophet Yahya), Joshua, Joash, Herod, Horeb, Jordan. Transliteration where the author's gloss is the same place or the usual name: Yeriho (Jericho), Mizrayim (in Egypt), Yerushalem / Jarusalam (Jerusalem), Yehudiyya / Yehudiya (يَهُودية, two spellings as printed: യെഹൂദിയ്യ, യെഹൂദിയ). Yisra'il is kept to mirror the author's Bible form (see above). Consistent with part 09.
- **Ma'idah 21 rendering** "(My people, enter the holy land that Allah has appointed for you. Ma'idah 21)": the bracket is opened before എന്റെ and closed after the reference, as printed.
- **Unclosed brackets and missing full stops mirrored silently** (no TN): "(Allah knows)" with no full stop after it (p. 268), "… trickling today it is by the name" (p. 271, no full stop after ഒലിച്ചുകൊണ്ടിരിക്കുന്നു), the unclosed bracket of the 3:85 rendering (p. 277), and "(it was also said)" without a full stop in verse 60.
- **"the 61st verse"** (p. 269), **"the 111th verse"** (p. 275), **"the 87th verse below"** (p. 274), **"the 112th verse of Al 'Imran"** (p. 274): as printed; they fit the verses' content.
- **"they killed him"** (p. 274, അദ്ദേഹത്തിന്റെ പിതാവ് തനിക്ക് ചെയ്തിരുന്ന ദയ): "the kindness that his father had done to him" keeps the Malayalam's ambiguity of തനിക്ക്; left.
- **"So they said'"** (Numbers 11, എന്നു പറഞ്ഞു'): left; it reads "thus they said".
- **[p. 269], [p. 271], [p. 273], [p. 274], [p. 275], [p. 276], [p. 277] markers**: these pages begin mid-sentence or mid-word (മൂസാ നബി | (അ)യുടെ; ... കാണപ്പെടുന്നില്ലെങ്കിലും | അവയിൽ; ഈ വിഷയം | ബൈബ്ൾ; കുറേ | കഴിഞ്ഞാണ്; വെച്ചു | കൊടുത്തു; ചെയ്തുകൊണ്ടിരിക്കുകയും | ചെയ്യുന്നവരെ; പറ|യേണ്ടതുണ്ടോ). Each marker sits at the nearest matching point in the English. Acceptable, as in earlier parts.
- **`[p. 270]` after "### Section – 7"**: the heading is at the top of p. 270, but headings stand before the marker as in earlier parts; left.
- **Group markers** *[Verses 58–59]*, *[Verse 60]*, *[Verse 61]*, *[Verse 62]*: **not the author's words**; navigation aids kept as in parts 01–09. They match the author's groups on the images (panels on pp. 267, 270, 271–272, 275). See the note in part 02's `check.md`.
- `part.json` verses "58-62", pages "267-277", PDF pages "96-106": correct.

## Open doubts for the reviewer

The translator's brief mentioned seven DOUBTs; the files contained six. All six are kept; the images do not settle them. One new DOUBT was added (7).

1. **വർദ്ധിപ്പിച്ചു കൊടുത്തേക്കുകയും ചെയ്യും** (verse 58). Rendered "We will also give increase". Earlier parts rendered -ഏക്കും forms as "may" (part 01 നൽകിയേക്കും, part 02 കണ്ടേക്കും, part 09 നശിച്ചേക്കുമെന്ന്). Here the ending is -ഏക്കുകയും ചെയ്യും, the author's word table has the plain future (വർദ്ധിപ്പിക്കുകയും ചെയ്യും) and his commentary on p. 269 says നൽകുമെന്നും ("would give"). This points to "will", but the form alone does not decide it, so the DOUBT stays. Please confirm.
2. **നാഴിക** (footnote, p. 268): "five nazhika". The page does not say which measure of distance is meant.
3. **വേ.പു.നി** (footnote, p. 268): most likely വേദപുസ്തക നിഘണ്ടു (cited by name in part 06), but the page does not expand it.
4. **ചുറ്റുള്ളി** (Numbers 11 quotation, p. 273; the text layer confirms the spelling): the author's own gloss is (വെളുത്തുള്ളി) "garlic"; the English word for ചുറ്റുള്ളി itself is not certain. Left as "chuttulli (garlic)".
5. **ആബീലിന്റെ** (p. 274): the king's name is printed so and transliterated "Abil"; whether another name is meant cannot be confirmed from the page.
6. **ബാലയുടെ** (p. 274): read as the noun ബാല ("a girl"); it could also be a personal name ("of Bala").
7. **Ma'idah 72** (p. 276). New DOUBT (correction 6).
8. **Earlier open doubts still apply** (not in this part): the hadith abbreviations including ജ (part 01), പതിച്ചവരാണവർ (part 02), വേദവാദികൾ and അമറാത്തി (part 03), ഇവിടെ അതുകൊണ്ട് വിവക്ഷ (part 04), the word order of Ibn Kathir's Arabic (part 05), السهوانى and "Profoundly Knowing" (part 06), പിൻപറ്റിയേക്കുന്നതാണ്, ലക്ഷ്യം, ദാ, وممن الله التوفيق and شجرة الخلد (part 07), the four doubts of part 08, and the group markers (part 02).

## New terms (not in the glossary; used consistently in this part)

Includes the translator's terms from the commentary and word table. Flagged for Rizwin to confirm:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| രാജ്യം | al-qaryah (القرية) | country |
| പടിവാതിൽ / വാതിൽ / കവാടം | al-bab (الباب) | gateway / door / portal |
| ഹിത്ത്വത്തുൻ (പാപമോചനം) | hittah (حطة) | hittatun (forgiveness of sins) |
| തെറ്റുകുറ്റങ്ങൾ | khatayakum (خطاياكم) | faults and offences |
| സുകൃതം ചെയ്യുന്നവർ | al-muhsinun (المحسنين) | those who do well |
| ശിക്ഷ / (കഠിന) ശിക്ഷ | rijz (رجز) | punishment / (severe) punishment |
| തോന്നിയവാസം | fisq (يفسقون) | acting waywardly (as "the wayward", part 04) |
| നീരുറവുകൾ / ഉറവ് | 'aynan (عينا) | springs / spring |
| ആഹാരം | rizq (رزق) | provision |
| കുഴപ്പം പ്രവർത്തിക്കുക | 'atha (تعثوا) | commit disorder |
| നാശകാരികൾ | mufsidin (مفسدين) | corrupters (word table: "those who cause corruption") |
| ഗോത്രങ്ങൾ | asbat | tribes |
| നിന്ദ്യത | al-dhillah (الذلة) | abasement |
| നിർഗതി / പതിതത്വം | al-maskanah (المسكنة) | helplessness / degradation |
| കോപം / ശാപകോപങ്ങൾ | ghadab (غضب) | wrath / curse and wrath |
| അനുസരണക്കേട് | 'isyan (عصوا) | disobedience |
| അതിക്രമം / അതിർ കവിയുക | i'tida' (يعتدون) | transgression / exceed the bounds |
| ന്യായം | al-haqq (بغير الحق) | justification ("without justification") |
| അമാലിക്വഃ | al-'Amaliqah | the 'Amaliqah |
| യൂശഉ് | Yusha' | Yusha' (Bible: Joshua) |
| അരീഹാ | Ariha (أريحاء) | Ariha |
| സ്വാബീകൾ | al-sabi'un (الصابئين) | Sabians |
| നസ്റാനീ [ക്രിസ്ത്യാനി]കൾ | al-nasara (النصارى) | Nasranis [Christians] |
| യഹൂദികൾ | yahud | Jews |
| വർഗീയത / വർഗം | — | sectarianism / race |
| കുത്തകാവകാശവാദം / കുത്തക | — | monopoly claim / monopoly |
| രക്ഷ / മോക്ഷം | — | deliverance / salvation |
| സർവ്വമതസത്യവാദം | — | the doctrine of the truth of all religions |
| നിർമതവാദം | — | a doctrine of no-religion |
| സൽക്കർമം | 'amal salih | good deeds |
| വിശ്വാസം (in this part) | iman | belief (part 02 has "true faith" for സത്യവിശ്വാസം, kept here for that word) |
| അമാനുഷിക ദൃഷ്ടാന്തങ്ങൾ | mu'jizat | superhuman signs (as in part 09) |
| സമ്മിശ്രജാതി (Bible) | — | the mixed multitude |
| യഹോവ (Bible) | — | Jehovah (as in part 09) |
