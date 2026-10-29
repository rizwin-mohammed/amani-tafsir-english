# Check: Ali 'Imran part 04 (verses 36–44)

Checked on 2026-10-29 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/03. Al-'Imran.pdf`, PDF pages 34–44 (book pp. 742–752). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer. `pdftotext -bbox` was used to locate the footnote on p. 747. Seven 300/600 dpi crops were used, four of them mis-aimed; the others show the footnote Arabic يحيي المعهدان (p. 747, at 300 and 600 dpi) and إن شاءالله (p. 747). The amanithafseer.com text was used only to confirm the joined forms (it has the same "ചെയ്ത്കൊള്ളുക", "അമ്പ്കോലുകൾ", "പ്രസവിച്ചു(വല്ലോ)").
- **Boundaries.** Part 03 ends on p. 742 with "… മറ്റൊന്നിലും ശ്രദ്ധപതിക്കാത്തവനാക്കുക എന്നത്രെ."; directly below is the verse 36 panel. This part starts there. It ends on p. 752 with "… ചിലരൊക്കെ പ്രസ്താവിച്ചു കാണുന്നു. (അല്ലാഹുവിനറിയാം)"; directly below is the verse 45 panel. Nothing is missing. The heading "വിഭാഗം - 5" (p. 750, above the verse 42 panel) is "### Section – 5". Right.
- `part.json`, `verses.json` (verses 36–44), `words.json` (122 entries: 36: 16; 37: 24; 38: 11; 39: 15; 40: 13; 41: 13; 42: 9; 43: 6; 44: 15), `commentary.md`.
- Groups: *[Verse 36]* (panel and table p. 742, commentary pp. 742–743) | *[Verse 37]* (panel and table pp. 743–744, commentary pp. 744–745) | *[Verses 38–39]* (panels pp. 745–746, table and commentary pp. 746–748) | *[Verses 40–41]* (panels and table p. 748, table and commentary pp. 749–750) | "### Section – 5" *[Verses 42–43]* (panels, table and commentary pp. 750–751) | *[Verse 44]* (panel pp. 751–752, table and commentary p. 752). Right.
- Every English sentence of the commentary and both footnotes was compared with the Malayalam on the images, in order. No sentence is missing and none is added. Footnotes: (\*) p. 744 (mihrab) and (\*) p. 747 (John the Baptist); both complete (correction 5 moves the second).
- `verses.json` and every `words.json` gloss match the images in the printed order, including the joined/spaced forms "[ആപെൺകുട്ടിയെ]", "പ്രസവിച്ചു(വല്ലോ)" (split "പ്രസവിച്ചു / (വല്ലോ)" at a line end), "നല്ലതായഒരു", "ചെയ്തു.അവളെ", "ഏൽപിച്ചുകൊടുക്കുകയും" (split "ഏൽപിച്ചു / കൊടുക്കുകയും"; table entry 23 has "ഏൽപിച്ചുകൊടുക്കുക" in one line), "[പ്രാർത്ഥനാമണ്ഡപത്തിൽ]അവളുടെ", "അല്ലാഹുവിന്റെപക്കൽനിന്നാണ്", "(അതെ)അദ്ദേഹം" (split "(അ / തെ)"), "‘റബ്ബേ,എനിക്ക്", "ഒരുവിശിഷ്ട", "[സ്വീകരിക്കുന്ന]വനാകുന്നു" (across the page turn), "കുറിച്ച്അല്ലാഹുതനിക്ക്", "സന്തോഷമറിയിക്കുന്നുവെന്ന്’അല്ലാഹുവിങ്കൽ", "സത്യപ്പെടുത്തുന്നവനും,നേതാവും,ആത്മ നിയന്ത്രകനും,സദ്വൃത്തന്മാരിൽപെട്ട" (the panel's last line but one shows a justification gap inside "സദ്വൃത്തന്മാരിൽപെ ട്ട"; the word is whole), "പറഞ്ഞു:‘നിന്റെ", "ചെയ്ത്കൊള്ളുക" (split "ചെയ്ത് / കൊള്ളുക"; no space can be shown at a line end), "അമ്പ്കോലുകൾ" (split "അമ്പ് / കോലുകൾ"; the table and the commentary have "അമ്പുകോലുകൾ"); table "എന്നിട്ടതിനെ", "ആണല്ലതാനും. ആണല്ലല്ലോ", "ഉല്പാദിപ്പിക്കുക(വളർത്തുക) യും", "ഏറ്റെടുപ്പിക്കുക (ഏൽപിച്ചുകൊടുക്കുക) യും", "സദ്വൃത്തരിൽപെട്ട" (entry 66, one പ, clear at 150 dpi; the panel has സദ്വൃത്തന്മാരിൽപെട്ട), the full stop in entry 79 "അവൻ ഉദ്ദേശിക്കുന്നത്.", "വാർത്ത (വർത്തമാനം)കളിൽ", "തർക്കിക്കു(കേസുകൂടു)മ്പോൾ"; no full stop after "കണ്ടെത്തുമായിരുന്നു" and "(ലഭിക്കുന്നത്)" (v. 37) or "സംസാരിക്കാതിരിക്കലാകുന്നു" (v. 41); the quotations opened in the 37, 42 and 43 panels are not closed.
- `[p. N]` markers 743–752. P. 742 already has its marker in part 03. [p. 744], [p. 746], [p. 749] and [p. 752] stand at the start of the commentary below the tables; [p. 750] at "(3)", which begins the page. Page turns: "so she *[p. 743]* grieved" (correction 2), "Its summary is this. *[p. 745]* He used to see" (… ഇതാകുന്നു. / ഉഷ്ണകാലത്തെ), "to grant him a child *[p. 747]* is no difficulty" (correction 3), "one who is protected from sin. *[p. 748]* Meanings such as" (…حصور കൊണ്ട് വിവക്ഷ. / ശരീരേച്ഛയില്ലാത്തവൻ), "Prophet Zakariyya (a) *[p. 751]* having been described" (ചില വർത്തമാനങ്ങൾ / വിവരിച്ചശേഷം). All are right now.
- Honorifics: (a) printed 27 times (p. 744: 6; p. 745: 5; p. 746: 3; p. 747: 4; p. 749: 1; p. 750: 4; p. 751: 2; p. 752: 2); the English has 27. (r) printed 11 times (p. 744: Rabi' [after the list of five], Ibn Jarir; p. 745: Ibn Jarir, Muhammad ibn Ishaq; p. 747: Abu 'Ubaidah, Qadi 'Iyad; p. 748: Ibn Kathir; p. 751: Bukhari and Muslim [one (റ)], Tirmidhi, Fatimah, 'A'ishah); the English has 11. ﷺ printed 8 times (p. 748: 2; p. 752: 6); the English has 8, none added at the bare "നബിവചനത്തിൽ", "നബി പുത്രിയായ", "നബി പത്നി" (p. 751).
- References as printed: the 44th verse, the 42nd verse, (19:5,6), (19:7), the 45th verse, Al-Baqarah 138, (See Su: Maryam 11), verses 10, 11 of Suratu Maryam, Luke (1:20), Suratu Maryam, Suratut Tahrim.

## Corrections made (before → after)

### Dropped emphasis as printed

1. p. 742, "‘ഞാൻ പ്രസവിച്ചത് ഒരു പെൺകുട്ടിയായല്ലോ! ഉദ്ദേശിച്ച കാര്യത്തിൽ ആൺകുട്ടിയും പെൺകുട്ടിയും ഒരു പോലെയല്ലല്ലോ!’": the -ല്ലോ "surely" was dropped twice (this part renders the same particle "(, surely)" in verses 36 and 44). "‘What I have given birth to is a girl! In the matter intended, the boy and the girl are not alike!’" → "‘What I have given birth to is a girl, surely! In the matter intended, the boy and the girl are not alike, surely!’"

### Page markers

2. p. 743 begins with "സങ്കടപ്പെട്ടു." ("… എന്ന് അവർ / സങ്കടപ്പെട്ടു."). "so she grieved. *[p. 743]* Since" → "so she *[p. 743]* grieved. Since".
3. p. 747 begins "ചെയ്യാൻ ഒട്ടും പ്രയാസമില്ലല്ലോ." (p. 746 ends "… തനിക്കൊരു സന്താനത്തെ പ്രദാനം"). "it is no difficulty at all, surely, *[p. 747]* to grant him a child." → "to grant him a child *[p. 747]* is no difficulty at all, surely."

### Tense as printed

4. p. 746, "… സക്കരിയ്യാ നബി(അ) സന്താനത്തിനുവേണ്ടി പ്രാർത്ഥിക്കുകയും, ആ പ്രാർത്ഥന സാക്ഷാൽകരിക്കപ്പെടുകയും ചെയ്ത സംഭവം വിവരിച്ചിരിക്കുകയാണ്": perfect, not progressive. "… was fulfilled, is being described." → "… was fulfilled, has been described."

### Footnote placement

5. p. 747: the (\*) marker stands in point (2), after ‘സ്നാപകനായ യോഹന്നാൻ’; the note (John the Baptist, يحيي المعهدان, John Baptist) stood after the following ‘hasur’ paragraph (which runs on to p. 748). It now stands directly after point (2), the paragraph it belongs to (TRANSLATING.md rule 4.1). Wording unchanged.

### Translator's note worded as printed

6. p. 749 TN: the print has ان (plain alif, no hamza), as the rest of the plain-script quotation (ان لا تكلم). "with أن and لا written apart" → "with ان and لا written apart". The rest of the TN is kept.

### One English per Malayalam word

7. p. 749, "അല്ലാഹുവിന് എല്ലാകാര്യത്തിനും കഴിവുണ്ട്": കഴിവുള്ളവൻ is "One who is capable" and എല്ലാകാര്യത്തിനും "of every matter" in part 03 (3:26, 3:29). "Allah has power over every matter." → "Allah is capable of every matter."

No dropped തന്നെ/-ഉം or list items, may/will errors, reversed or "fixed" negations, changed reported speech, added ﷺ, silently corrected names or misprints, or added or re-vowelled Arabic were found apart from the above.

## The translator's open items

- **(1) DOUBT p. 746, "കേവലം വൃദ്ധയായ ഒരു മാതാവിൽനിന്ന്".** Clearly printed. The author uses കേവലം in this part both for "mere" ("ഒരു കേവലാന്വേഷണമായിരുന്നില്ല", p. 745, "not a mere enquiry") and for "at all" ("കേവലം സംഭവ്യമല്ല", p. 750). Before an adjective it can be "merely" or an intensifier ("quite, utterly old"); the sentence lists wonders Zakariyya saw, which favours the intensifier, but the page cannot settle it. DOUBT kept as written (it gives both readings).
- **(2) DOUBT p. 747 footnote, يحيي المعهدان.** Confirmed on 300 and 600 dpi crops: يحيي (two ya's) and المعهدان, with a medial ha (ـهـ), not a medial mim. Possibly a slip for المعمدان. DOUBT kept as written.
- **(3) TN p. 749.** Confirmed: "‘സംസാരിക്കാതിരിക്കലാണ് (ان لا تكلم)’", plain script, ان and لا apart; verse 41 has أَلَّا تُكَلِّمَ. The difference is spelling only (أَلَّا = أن + لا), so strictly no TN is required (part 02 point 5 gave none for a script-only difference), but the TN is accurate and harmless; kept, with ان written as printed (correction 6). `npm run check` does not list it.
- **(4) Slips kept as printed without TN.** All confirmed on the images: പശാചിൽ (table entry 15, p. 742; the panel has പിശാചിൽ); പെണോ (p. 743); ഏറ്റടുക്കേണ്ടത് (p. 744); ഉദ്ധരിക്കപ്പെടുന്ന് (p. 744); ലഭിക്കുവൻ (p. 745); അസാധരണത്വം (p. 745; the next sentence has അസാധാരണമായ); "വിശ്വസിച്ച് ആളും" (p. 747, for വിശ്വസിച്ച ആളും); വെറെ (p. 751); ക്കാവവട്ടെ (p. 752); "നീ ,സംസാരിക്കാതിരിക്കലാണ്" (table entry 84, p. 749, comma before the word). None changes the meaning; no TN, as the translator had them.
- **(5) Joined words.** All the line-end splits listed under "What was compared" are right as joined. Table entry 66 is printed സദ്വൃത്തരിൽപെട്ട (one പ), as in the file.
- **(6) Footnotes.** Mihrab (p. 744): complete, placed after its paragraph. John the Baptist (p. 747): complete; moved (correction 5).
- **(7) Quran quotations in the commentary.** Each compared with the printed words. p. 743: printed وَاللَّهُ أَعْلَمُ بِمَا وَضَعَتْ = exactly وَٱللَّهُ أَعۡلَمُ بِمَا وَضَعَتۡ of 3:36. p. 744: (يا مريم انى لك هذا) = exactly يَٰمَرۡيَمُ أَنَّىٰ لَكِ هَٰذَا; (هو من عند الله) = exactly هُوَ مِنۡ عِندِ ٱللَّهِ (3:37). p. 745: إن الله يرزق.... = exactly إِنَّ ٱللَّهَ يَرۡزُقُ (the dots kept). p. 749: أنى يكون لى غلام = exactly أَنَّىٰ يَكُونُ لِي غُلَٰمٞ (3:40); ان لا تكلم = أَلَّا تُكَلِّمَ (3:41; see (3)). No more and no less in any of them. Non-Quran Arabic as printed, letter by letter: إن شاءالله (p. 747, crop: hamza under the alif, شاءالله joined; part 03 had ان شاءالله without hamza, as printed there), كلمة twice (ta marbuta), حصور twice, يحيي المعهدان, نهر الاردن (p. 752). `npm run check` counts all 25 longer quotations of the surah so far: 20 exact, 0 close-but-not-exact, 5 not from the Quran (all in parts 01 and 02).
- **(8) Renderings.** റബ്ബേ "O Rabb" (verses 38, 40, 41; table 44): part 02 (p. 728) has ‘O Rabb, I too am a witness’ for the bare റബ്ബേ; എന്റെ റബ്ബേ "my Rabb" as part 03 (v. 35). Kept. വിജ്ഞാനം "knowledge" (pp. 744, 747 മതവിജ്ഞാനം "religious knowledge", 751): every Al-Baqarah verse table renders വിജ്ഞാനം "wisdom" (for hikmah: parts 20, 23, 38, 42, 47); here it stands in lists of personal qualities, where "knowledge" reads naturally. Kept, and listed as open doubt 3. സ്നാപകനായ യോഹന്നാൻ / യോഹന്നാൻ സ്നാപകൻ "John the Baptist": the common English name; kept. തസ്ബീഹ് "tasbih", സ്തോത്രകീർത്തനം "singing of praise", സുജൂദ് "sujud": as Al-Baqarah parts 05–06.

## Checked and left as they are

- v. 44, "When they cast their pens ( - or arrow-shafts - the lot by means of them )": the author's bracket holds "- അഥവാ അമ്പ്കോലുകൾ - മുഖേന നറുക്ക്"; "them" is added so that "by means of" has an object. No closer English keeps the bracket where it is printed; left.
- ഏറ്റെടുക്കുക (v. 44 panel, p. 744) and ഏറ്റുവാങ്ങുക (table entry 118, p. 752 twice) are both "take charge of"; in this context both mean taking the child into one's care. Left (open doubt 4).
- p. 751, the dashes "… ഉൾപ്പെടേണമെന്നാണെന്നും- ഇങ്ങിനെ രണ്ടു പ്രകാരത്തിലും-വ്യാഖ്യാനിക്കപ്പെട്ടിട്ടുണ്ട്": the English puts "has been interpreted in both ways, thus-" first, with one dash; the English order allows no closer form. Left.
- p. 748, Qadi 'Iyad's words: no opening quotation mark is printed, the closing ’ is; mirrored. p. 745, the quotation opened at ‘When Zakariyya (a) went …’ is not closed; mirrored.
- p. 744, "What were these things that astonished Zakariyya (a)." ends with a full stop as printed.
- "(hasur)" for (ഹസ്വൂർ), "Suratut Tahrim" for സൂറത്തു തഹ്രീം: transliterations; left.
- `verses.json` has യഹ്യ without a zero-width non-joiner (the print shows a visible virama); no file in the repository uses ZWNJ, so left.
- `part.json` verses "36-44", pages "742-752", PDF pages "34-44": correct.

## Open doubts for the reviewer

1. **DOUBTs in the text**: p. 746 കേവലം വൃദ്ധയായ ("merely old" or "quite / utterly old"); p. 747 footnote يحيي المعهدان (possibly a slip for المعمدان).
2. **TN in the text**: p. 749, ان لا تكلم printed apart for أَلَّا تُكَلِّمَ (a spelling difference only; the reviewer may prefer to drop the TN).
3. **വിജ്ഞാനം**: "knowledge" in this part's commentary, "wisdom" in the Al-Baqarah verse tables. One choice may be wanted.
4. **ഏറ്റെടുക്കുക / ഏറ്റുവാങ്ങുക**: both "take charge of" here; ഏറ്റുവാങ്ങുക could be "receive" if the two should be kept apart.
5. **Quran quotations in the commentary**: copied from the Uthmani text (TRANSLATING.md rule 4), as parts 02–03; part 01 and Al-Baqarah parts 39–51 keep the printed plain script (part 02 open doubt 3).
6. **Earlier open doubts still apply** (not in this part): see parts 01–03 and the Al-Baqarah parts.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| മിഹ്റാബ് / പ്രാർത്ഥനാമണ്ഡപം | mihrab | mihrab / prayer-chamber |
| ഹസ്വൂർ; ആത്മനിയന്ത്രകൻ / ആത്മനിയന്ത്രണമുള്ളവൻ / നിയന്ത്രിതൻ | hasur | hasur; one in control of himself / one who has self-control / one restrained |
| സദ്വൃത്തർ / സദ്വൃത്തന്മാർ | salihin | the righteous |
| സ്നാപകനായ യോഹന്നാൻ / യോഹന്നാൻ സ്നാപകൻ | — | John the Baptist |
| ജ്ഞാന സ്നാനം | — | baptism |
| വിജ്ഞാനം / മതവിജ്ഞാനം | — | knowledge / religious knowledge (open doubt 3) |
| സ്തോത്രകീർത്തനം / തസ്ബീഹ് | tasbih | singing of praise / tasbih (as Al-Baqarah part 05) |
| സുജൂദ് / റുകൂഉ് / ക്വിയാം | sujud / ruku' / qiyam | sujud / ruku' / qiyam (standing) |
| വഹ്യ് / ദിവ്യസന്ദേശം | wahy | wahy / divine message |
| അദൃശ്യവാർത്തകൾ | anba' al-ghaib | news of the unseen |
| നറുക്ക് / നറുക്കെടുപ്പ് | — | lot / drawing of lots |
| പേനകൾ / അമ്പുകോലുകൾ | aqlam | pens / arrow-shafts |
| ഏറ്റെടുക്കുക / ഏറ്റുവാങ്ങുക | kafala | take charge of (open doubt 4) |
| ആംഗ്യം / സൂചന | ramz | gesture / indication |
| വന്ധ്യ | 'aqir | barren |
| വിശിഷ്ട | tayyib | excellent |
