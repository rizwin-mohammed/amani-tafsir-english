# Check: Al-Baqarah part 18 (verses 120–123)

Checked on 2026-10-03 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 182–186 (book pp. 353–357), each rendered at 150 dpi and read once in full. There are no footnotes on these pages. Crops: the start of the verse 120 panel (p. 353, 300 dpi) and the closing Arabic of p. 356 (600 dpi). The `ml2uni.py` text layer (incomplete on every one of these pages) was used only for spelling.
- **Boundaries.** Part 17 ends on p. 353 with "… എന്ന് സാരം." (Ra'd 40); directly below comes the verse 120 panel, where this part starts. This part ends on p. 357 with the paragraph introducing Ibrahim (a), "… ബാധ്യസ്ഥരാണല്ലോ. അല്ലാഹു പറയുന്നു:", directly above the verse 124 panel; that paragraph comes before the next Arabic panel, so it belongs here. Both boundaries confirmed.
- `part.json`, `verses.json` (verses 120–123), `words.json` (51 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. No sentence is missing or added.
- `verses.json` Malayalam and every `words.json` gloss were compared with the images; they match. Printed forms kept (point b): നിനക്ക് വന്ന കിട്ടിയതിന് (v. 120), the spaces in സ്വീകരിക്ക പ്പെടുകയുമില്ല and സഹായിക്ക പ്പെടുകയുമില്ല (v. 123; clear gaps inside the words on the image), പിൻപററുവോളം and യാതൊന്നിന്ശേഷം (word table v. 120), മാർഗദർശനമത്രെ (v. 120; the text layer's "മാർഗദർശനമത്ര" is wrong, the image has െ), ഇസ്റാഈൽ without ZWNJ (as in all 14 earlier occurrences in parts 01–17). തെണ്ടം (word table v. 123) is clear on the image.
- `[p. N]` markers 354–357 checked against the printed page numbers. P. 353 needs no marker (the part starts at its verse panel). P. 354 begins with the rest of the verse 120 panel; its marker stands at the start of the commentary (bottom of p. 354), as in earlier parts. The [p. 355] marker was moved (correction 1). [p. 356] and [p. 357] stand where the commentary on those pages begins.
- Group markers (navigation aids, not the author's words; see part 02's `check.md`): *[Verses 120–121]* and *[Verses 122–123]* match the author's panels (pp. 353–354 with one word table; p. 356 with the word table on p. 357). The heading "### Section – 15" renders the printed "വിഭാഗം – 15" above the verse 122 panel on p. 356 (point f).

## Corrections made (before → after)

### Page marker

1. p. 355 begins mid-sentence (… നടപടി മാർഗങ്ങൾ നബിﷺ / സ്വീകരിക്കുന്നില്ലെന്നുള്ള …): "*[p. 355]* It is because of the sole reason that the Prophet ﷺ does not accept" → "It is because of the sole reason that the Prophet ﷺ *[p. 355]* does not accept".

### Meaning

2. p. 355, interpretation (1), അതതിന്റെ അനുയായികളും ("each one's respective followers"; അതത് is "respective" in earlier parts): "and its followers too, are included in this" → "and their respective followers too, are included in this".

### Dropped -ഉം

3. p. 356, … ബലികഴിക്കുവാനുള്ള കരളുറപ്പും വേണം: "The strength of heart … before its direct ideas is needed." → "… is needed too."

### -ഉം misplaced

4. p. 357, അറബി മുശ്‌രിക്കുകളെ സംബന്ധിച്ചും ചിലതെല്ലാം പ്രസ്താവിക്കുകയുണ്ടായി (the -ഉം is on "concerning the Arab mushriks"): "some things too were stated concerning the Arab mushriks." → "some things were stated concerning the Arab mushriks too."

### Earlier rendering

5. p. 356, ഭയഭക്തിയോടും: part 01 fixed ഭയഭക്തി as "God-fearing reverence" (used so in parts 01 and later): "with reverential fear too" → "with God-fearing reverence too".

No dropped list items, may/will errors, wrong tense, changed voice, reversed negations, added pronouns, added ﷺ (every ﷺ is printed: pp. 354, 355), dropped തിരുമേനി (none in these pages), translator words in round brackets, silently corrected names or misprints, or Arabic differing from the print were found.

## Points the caller asked about

- **(a) DOUBTs.** p. 356 closing Arabic: at 600 dpi the three words stand, from left to right, والمعين | والله | الموفق; read right to left that is الموفق والله والمعين, as transcribed. The translator's DOUBT is kept: it gives the printed order, only notes the familiar order of the formula as a possible slip, and asks for confirmation. (Earlier parts left similar closing formulas sometimes translated, sometimes not; leaving this one untranslated is acceptable given the doubt.) Word table v. 123 عَدۡلٞ, "സമാനമായത്, പ്രായശ്ചിത്തം, തെണ്ടം" with തെണ്ടം "ransom": DOUBT kept, the same open question as part 08 (കിടയൊത്തത് (പ്രായശ്ചിത്തം,തെണ്ടം)).
- **(b) Printed forms.** നിനക്ക് വന്ന കിട്ടിയതിന് is evidently വന്നുകിട്ടിയതിന് ("what came to be received by you") with a letter slip; "after what you came to receive" renders it by that sense without a TN, as earlier parts did for letter slips. Kept. The other printed forms: see above.
- **(c) Quran phrases**, compared with the print: إِنَّ هُدَى ٱللَّهِ هُوَ ٱلۡهُدَىٰ and وَلَئِنِ ٱتَّبَعۡتَ أَهۡوَآءَهُم (2:120, p. 355), ٱلۡكِتَٰبَ and بِهِۦ (2:121, p. 355): the printed words equal the verse words (ordinary spelling and vowel marks only), so they stay in the data-file form.
- **(d) Verses 122–123** were compared with this print, not with part 08: the Malayalam differs from part 08's verses 47–48 (here ചെയ്തുതന്നിട്ടുള്ള എന്റെ അനുഗ്രഹം, (വമ്പിച്ച), (ഒരാൾ ഒരാൾക്കും), the ശുപാർശ clause with പ്രയോജനം ചെയ്കയുമില്ല), and `verses.json` follows this print. The English follows part 08 where the words are the same and the earlier renderings elsewhere ((വമ്പിച്ച) "(mighty)" as part 16; ദേഹം "self").
- **(e) Terms.** ദേഹം "self" (v. 123 and word table) as parts 01, 04 and 08. രക്ഷകൻ "protector" (v. 120 and word table bracket), രക്ഷാധികാരി "guardian", ബന്ധു "kinsman", സഹായകൻ "helper": four Malayalam words, four English words, consistent with part 16. അധഃപതനങ്ങൾ "declines" and ആവേശം "fervour" (p. 356): new, faithful. ഇച്ഛ "desire", തന്നിഷ്ടം "self-will", വ്യാമോഹം "delusion", പ്രവാചകവര്യൻ "eminent prophet" as earlier parts.
- **(f)** Group markers and heading: see above.

## Checked and left as they are

- p. 355, ‘Allah's guidance is the guidance’: the print has no quotation marks around അല്ലാഹുവിന്റെ മാർഗദർശനമാണ് മാർഗദർശനം (… എന്ന വാക്യത്തിൽ); the English marks the quoted sentence with quotes. Left (not round brackets; it renders എന്ന).
- p. 355, interpretation (2), പല പ്രവചനങ്ങളും … ഉണ്ടല്ലോ: "many predictions … are, surely, there" without "too" (the -ഉം of പല … -ഉം). Left; part 15 kept "too" in the same construction, so the reviewer may prefer "many predictions … too".
- Verse 122, "remember My favour …, that I made you superior to the (other) people of the world, too (remember)": -ഉം rendered "too"; no "and" added. Left.
- വിഭാഗക്കാർ "section" (p. 357, "each section") beside the heading വിഭാഗം "Section": the same root; left.
- പരിഭവം "complaint" (p. 355): new term; "resentment" is also possible. Left.
- `part.json` verses "120-123", pages "353-357", PDF pages "182-186": correct.

## Open doubts for the reviewer

1. **الموفق والله والمعين** (p. 356): printed word order; transcribed right to left as printed, left untranslated.
2. **തെണ്ടം** (word table v. 123): "ransom"; same question as part 08.
3. **Earlier open doubts still apply** (not in this part): see parts 13–17.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| രക്ഷകൻ | wali (bracket) | protector |
| രക്ഷാധികാരി / ബന്ധു / സഹായകൻ | wali / nasir | guardian / kinsman / helper (as part 16) |
| ഇച്ഛ / തന്നിഷ്ടം | ahwa' | desire / self-will |
| വ്യാമോഹം | — | delusion |
| പാരായണമുറ / മുറപ്രകാരം | haqq tilawatih | proper manner of reading / according to the proper manner |
| പരിഭവം | — | complaint |
| അധഃപതനങ്ങൾ | — | declines |
| ആവേശം | — | fervour |
| ഭയഭക്തി | — | God-fearing reverence (as part 01) |
| ദേഹം / ആത്മാവ് / വ്യക്തി | nafs | self / soul / individual |
| സമാനമായത് / പ്രായശ്ചിത്തം / തെണ്ടം | 'adl | an equivalent / atonement / ransom (doubt) |
| വംശപിതാവ് / പ്രവാചകവര്യൻ / മഹാനുഭാവൻ | — | father of the race / eminent prophet / great personage |
| സന്താനപരമ്പര | — | line of descendants |
| ഇസ്റാഈല്യർ | Bani Isra'il | the Israelites |
