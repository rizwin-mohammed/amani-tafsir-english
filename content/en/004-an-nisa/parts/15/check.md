# Check: An-Nisa' part 15 (verses 71–76)

Checked on 2026-11-25 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 130–135 (book pp. 1053–1058). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. No higher-resolution crops were needed: the panels, tables and the one hand-typed Arabic word are clear at 150 dpi.
- **Boundaries.** Part 14 ends on p. 1053 with "… അല്ലാഹു നമ്മെ ആഗ്രഹിക്കട്ടെ. آمين". This part starts directly below it with "വിഭാഗം - 10" and its two-sentence intro paragraph ("മതപരവും, … അല്ലാഹു പറയുന്നു:-"). The verse 71 panel is at the top of p. 1054, not on p. 1053. The part ends on p. 1058 with "… ദുർമൂർത്തികളുമാണുദ്ദേശ്യമെന്ന് മുമ്പ് ചൂണ്ടിക്കാട്ടുകയും ചെയ്തിരിക്കുന്നു.", directly above "വിഭാഗം - 11" and the verse 77 panel (left for part 16). Nothing between is missing. No footnotes in this part.
- Files: `part.json`, `verses.json` (verses 71–76), `words.json` (76 entries: 71: 7; 72: 12; 73: 12; 74: 13; 75: 18; 76: 14), `commentary.md`.
- Groups: "### Section – 10" (p. 1053) | *[Verse 71]* (panel, table and commentary p. 1054) | *[Verses 72–73]* (panels p. 1054, table and commentary p. 1055) | *[Verses 74–75]* (v. 74 panel p. 1055, v. 75 panel and table p. 1056, commentary p. 1057) | *[Verse 76]* (panel and table p. 1057, table end and commentary p. 1058). Right.
- `[p. N]` markers: 1054, 1055, 1057 and 1058, each opening the commentary of its group (the panels and tables on those pages are in `verses.json` / `words.json`), as parts 13 and 14. p. 1056 holds only the v. 75 panel and the vv. 74–75 table, so it has no marker. Right. No commentary sentence runs across a page turn.
- Every English sentence was compared with the Malayalam on the images, in order: the section intro (2 sentences), v. 71 commentary (3), vv. 72–73 commentary (5), vv. 74–75 commentary (6 + 7), v. 76 commentary (3). No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images, including "ഹാജറുള്ളവനല്ലാതിരുന്ന" (line break after ഹാജറു, joined) and "അവൻ പറയും;" (v. 72); "(അഥവാ മെച്ചവും)", "അവർ പറയുകതന്നെ ചെയ്യും" (v. 73); "വിൽക്കു(വാൻ തയ്യാറാകു)ന്നവർ" (v. 74); "(ഇരിക്കുവാൻ)?", "(അതെ, ഇങ്ങിനെ)പറയുന്നവരുടെ:" (no space), "പുറപ്പെടുവിച്ചു(മോചിപ്പിച്ചു) തരേണമേ!" (line break before തരേണമേ; the space is kept, as part 13), "രക്ഷാകർത്താവിനെ" (v. 75); "‘ത്വാഗൂത്തി’ന്റെ [പിശാചാകുന്ന ദുർമൂർത്തിയുടെ]" (v. 76). Table: "മടിച്ചു നില്ക്കുക തന്നെ ചെയ്യുന്ന" (ല്ക as printed), "എന്നിട്ടു(അങ്ങനെ)", "ഹാ (അയ്യോ) ഞാനായെങ്കിൽ (നന്നായേനേ)", "എന്നാൽ വഴിയെ(പിറകെ)", "റബ്ബേ ഞങ്ങളെ നീ പുറത്താക്കിത്തരേണമേ" (line break inside the word, joined), "അക്രമി(കൾ) ആയ", "ഞങ്ങൾക്ക് നീ ആക്കി (ഏർപ്പെടുത്തി - ഉണ്ടാക്കി)ത്തരുകയും വേണമേ", "അതിനാൽ(എന്നാൽ)", "നിശ്ചയമായും തന്ത്രം (ചതി - കെണി)" (across the page turn 1057/1058), "ആകുന്നു. ആയിരിക്കുന്നു", "ദുർബ്ബലമായത്, അശക്തമായത്." (final stop printed).
- **Word tables pp. 1054, 1055, 1056, 1057–1058.** Pairings checked by meaning and text-layer order, all in Quran order. v. 74 فِي سَبِيلِ "മാർഗത്തിൽ" and ٱللَّهِ "അല്ലാഹുവിന്റെ" are printed as two separate entries, so they are two entries here; every other فِي سَبِيلِ ٱللَّهِ is one entry, as printed. The ۞ before verse 74 in `data/quran-uthmani.json` and the pause marks are left out of the `ar`, as earlier parts (part 12). Every `ar` is in its verse in `data/quran-uthmani.json` (`npm run check`).
- Honorifics: none printed in this part (no ﷺ, (r) or (a) on pp. 1053 below the heading through 1058; the Prophet is not named in it), and none in the English. Right.
- Arabic: no Quran Arabic in the commentary. Hand-typed Arabic as printed: **طاغوت** (p. 1058), plain letters without vowel marks, as on the image.
- **Mirrored as printed, without TN** (all confirmed on the images): v. 73 panel plural "അവർ പറയുകതന്നെ ചെയ്യും" ("they will indeed say"), while the verse panel elsewhere ("അവനുമിടയിൽ", "ഞാൻ") and the table (لَيَقُولَنَّ "അവൻ പറയും") are singular; the plural can be read as referring to the "ചിലർ" ("some") of v. 72, so it is not an evident slip and no TN is needed. p. 1055 "ചെയ്തു തന്നെ" (probably for ചെയ്തുതന്ന, "done for (them)"); "had indeed done for them" carries either reading. p. 1057 ദുർബ്ബരായ (for ദുർബ്ബലരായ, "weak") and നിസ്സാഹായരും (for നിസ്സഹായരും, "helpless"): misspellings of obvious words, mirrored without TN as parts 08, 10, 11 and 13 did. p. 1057 the image has "എന്നത്രെ" (the text layer's "എന്നത്ര" is wrong); "that indeed is" renders എന്നത്രെ. Table p. 1058 "ആകുന്നു. ആയിരിക്കുന്നു" ("is. has been"): stops inside a gloss are kept, as earlier tables ("they. that", Al-Baqarah 30).
- **Stray stops in the tables, left out of `ml`.** p. 1056 a stop is printed between فِي سَبِيلِ ٱللَّهِ and its gloss "അല്ലാഹുവിന്റെ മാർഗത്തിൽ" (v. 75), and p. 1057 between فَقَٰتِلُوٓاْ and "അതിനാൽ(എന്നാൽ) …" (v. 76). In both the stop stands after the Arabic, where the verse's sentence ends (after "… in the way of Allah?" and after "… of Taghut"), so it most likely marks that sentence end and was set after the Arabic by the mixed right-to-left / left-to-right setting; it belongs to no gloss. Left out of both `ml` values; no earlier part has a gloss beginning with a stop. Kept as the translator did.
- Glossary: റബ്ബ് "Rabb", as earlier parts (റബ്ബേ "Rabb," in the table, as Al-Baqarah 33 "Rabb, do give us").

## Corrections made (before → after)

### Additions in round brackets that are not printed

1. p. 1054 "എപ്പോൾ ആവശ്യം നേരിടുന്നുവോ അപ്പോൾ നേരിടുവാൻ തക്കവണ്ണം": "so as to confront (them) whenever need arises" → "so as to confront whenever need arises" (round brackets are the author's; "(them)" is not printed; as parts 08 and 09).

### Words not printed

2. v. 73 panel "അല്ലാഹുവിങ്കൽ നിന്നു വല്ല അനുഗ്രഹവും … കിട്ടിയെങ്കിലാകട്ടെ": "And as for if some favour …" → "As for if some favour …" (no "and" is printed; -ആകട്ടെ is rendered "as for"; as part 14 correction 1).

### Rendering

3. p. 1058 "പിശാചുക്കളും, ആരാധ്യവസ്തുക്കളുമടക്കമുള്ള എല്ലാ ദുർമൂർത്തികളും": "the objects of worship" → "the worshipped things" (Al-Baqarah part 43, the Taghut passage this sentence refers back to, renders the same word ആരാധ്യവസ്തുക്കൾ "worshipped things"; "object of worship" is used for ആരാധ്യൻ).

No dropped sentences, reversed negations, changed conditions, number errors, voice changes or added honorifics were found.

## Points the translator asked about

1. **No DOUBTs and no TNs; slips mirrored without TN.** All confirmed on the images and judged against parts 08–14 (see "Mirrored as printed" above): no TN is needed for any of them. The stray table stops are left out of `ml` (see above). **طاغوت** without vowels, as printed.
2. **Honorifics; word count; split فِي سَبِيلِ / ٱللَّهِ.** Confirmed (see above). 76 entries.
3. **Renderings** (checked against earlier parts by grep):
   - ജാഗ്രത / ജാഗരൂകർ "vigilance / vigilant": agrees with Ali 'Imran (ജാഗരൂകരാക്കുന്നു "makes you vigilant"). Kept.
   - രക്ഷാകർത്താവ് "custodian": the same spelling is "custodian" in Al-Baqarah part 43; An-Nisa' part 10 has the variant spelling രക്ഷകർത്താവ് "guardian" (4:45), and "guardian" is also used for രക്ഷാധികാരി. Kept as "custodian", the rendering of the identical word; see open points.
   - ഹാജറുള്ളവൻ, സന്നദ്ധൻ "one present, one ready": agrees with Al-Baqarah (ഹാജറുണ്ടാകുക "be present"). Kept.
   - മന്ദീഭവിപ്പിക്കുക "slow down"; സ്നേഹബന്ധം "bond of love"; യുദ്ധാവേശം "zeal for battle"; ചതി - കെണി "deceit - trap": new, faithful. Kept.
   - ആരാധ്യവസ്തുക്കൾ: changed to "worshipped things" (correction 3).
   - കക്ഷി "party": kept (earlier തൽപരകക്ഷികൾ "interested parties", സഖ്യകക്ഷി "ally").
   - അക്രമ മർദ്ദനങ്ങൾ "wrongdoing and persecutions": അക്രമം is "wrongdoing" as earlier parts. Kept.
   - ബലഹീനർ "feeble ones" / ദുർബ്ബലർ "weak ones": as earlier parts (two Malayalam words, two renderings). Kept.
   - وَلِيّٗا "ഒരു രക്ഷകനെ, ബന്ധുവെ, കൈകാര്യക്കാരനെ, മിത്രത്തെ" "a protector, kinsman, manager, friend": as earlier tables (രക്ഷകൻ "protector", ബന്ധു "kinsman", കൈകാര്യക്കാരൻ "manager", മിത്രം "friend"). Kept.
   - രാജ്യം "country" (al-qaryah, as earlier); വഴിയെ "in due course" (as Al-Baqarah 21, Ali 'Imran 15, An-Nisa' 07 and 11); ഭാഗ്യം "good fortune"; ഗനീമത്ത് "ghanimah"; ദീൻ "din"; പ്രതാപം "majesty"; പിശാചുക്കൾ "devils"; തന്ത്രം "stratagem": as earlier parts. Kept.

## Open doubts for the reviewer

- No inline DOUBT markers in this part.
- For the reviewer's preference only (not a doubt in the text): രക്ഷാകർത്താവ് (v. 75) is "custodian", as Al-Baqarah part 43; An-Nisa' part 10 has രക്ഷകർത്താവ് "guardian" (4:45). The two spellings are forms of one word; the reviewer may want one rendering for both.
- For the reviewer's preference only: the v. 73 panel's plural "അവർ പറയുകതന്നെ ചെയ്യും" ("they will indeed say") is mirrored without a TN, though the speaker is singular in the rest of the verse and in the table; the reviewer may prefer a TN.
- Earlier open doubts still apply.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ജാഗ്രത / ജാഗരൂകർ | hidhr | vigilance / vigilant |
| ഹാജറുള്ളവൻ / സന്നദ്ധൻ | shahid | one present / one ready |
| മടിച്ചു നിൽക്കുക / മന്ദീഭവിപ്പിക്കുക | tabti'ah | stand hesitating / slow down |
| സ്നേഹബന്ധം | mawaddah | bond of love |
| രക്ഷാകർത്താവ് | wali | custodian (as Al-Baqarah 43) |
| ബലഹീനർ / ദുർബ്ബലർ | mustad'afun | feeble ones / weak ones (as earlier parts) |
| അക്രമ മർദ്ദനങ്ങൾ | — | wrongdoing and persecutions |
| യുദ്ധാവേശം | — | zeal for battle |
| തന്ത്രം (ചതി - കെണി) | kayd | stratagem (deceit - trap) |
| കക്ഷി | — | party |
| ആരാധ്യവസ്തുക്കൾ | — | worshipped things (as Al-Baqarah 43) |
