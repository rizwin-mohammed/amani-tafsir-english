# Check: Al-Baqarah part 41 (verses 246–249)

Checked on 2026-10-16 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 413–423 (book pp. 584–594). Each page was rendered at 150 dpi and read once in full, including the footnotes on pp. 585, 586, 588 and 594. The full `ml2uni` text layer was compared with `verses.json`, `words.json` and the commentary. `pdftotext -bbox` was used for the vowel marks and joins of the Arabic on pp. 585, 586, 590, 591 and 594, and for the word break in the letter-spaced v. 246 panel line ("ചെയ്തുകൊള്ളാം"). The amanithafseer.com text was not used beyond the translator's notes on site-vs-book differences. No crops were needed (the bbox settled every mark).
- **Boundaries.** Part 40 ends on p. 584 with "… എന്നൊക്കെയാണ് അവസാനത്തെ വാക്യങ്ങളിൽ ഓർമിപ്പിക്കുന്നത്."; the verse 246 panel follows directly on the same page (no heading). This part starts there. It ends on p. 594 with "… എന്ന് താൽപര്യം." (the paragraph on وَاللَّهُمَعَالصَّابِرِينَ), directly above the panel for verses 250–251 on the same page. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 246–249), `words.json` (123 entries: 246: 32; 247: 32; 248: 19; 249: 40), `commentary.md`.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added. The whole p. 589 paragraph "ശൗലിന്റെ നേതൃത്വത്തിൽ … പഠിപ്പിച്ചു തന്നിട്ടുള്ളതും." (missing on the website) is in the translation, complete and in its place, between the 1 Sam. 9–10 summary and the 248 panel.
- `verses.json` (panels pp. 584, 587, 589–590, 591–592) and every `words.json` gloss (tables pp. 584–585, 587–588, 590, 592–593) match the images in the printed order. "(കാല)ശേഷം" is printed joined; in "ചെയ്തുകൊള്ളാം" (v. 246) the bbox gap between ചെയ്തു and കൊ (1.0 pt) equals the letter-spacing gaps in the same line, so it is joined, as in the file. No ZWNJ is printed in these items.
- `[p. N]` markers 585–591 and 593–594. P. 584 holds only the end of part 40, the 246 panel and the start of its table, and p. 592 only the rest of the 249 panel and its table, so neither has a marker. [p. 585], [p. 588], [p. 590] and [p. 593] stand at the start of commentaries below the tables; [p. 589] at the start of the paragraph that opens the page. Page turns: [p. 586] before ചെയ്തു (end of "appointed judges among them"); [p. 587] "sus*[p. 587]*pected" (സംശയി/ച്ചതുപോലെത്തന്നെ); [p. 591] "Dagon's *[p. 591]* temple" (വിഗ്രഹത്തിന്റെ / ക്ഷേത്രത്തിൽ); [p. 594] "merely *[p. 594]* a minor band" (കേവലം / ഒരു ന്യൂന സംഘമാണെങ്കിലും). All are right.
- Groups: *[Verse 246]* | *[Verse 247]* | *[Verse 248]* | "### Section – 33" (വിഭാഗം - 33, printed on p. 591 above the 249 panel) | *[Verse 249]*. Right.
- Footnotes: (\*) on Samuel's book (p. 585) follows its paragraph; (\*\*) (map, p. 585) and (\*) (Tabut, p. 586) both belong to the paragraph "മൂസാ (അ)ന്റെ വിയോഗാനന്തരം … ന്യായാധിപനുമായിരുന്നു." that runs across the page turn, and follow it in that order; (\*) on Saul (p. 588) follows the paragraph ending "… തൃപ്തിപ്പെടാം."; (\*), (\*\*) and (\*\*\*) on p. 594 follow the Goliath paragraph ending "(1. ശമു. 17:1-6)", before the closing paragraph on وَاللَّهُمَعَالصَّابِرِينَ. Markers in the text: (\*\*) after "ചാണും", (\*\*\*) after "താമ്ര". All right.

## Corrections made (before → after)

### Renderings brought into line with earlier parts

1. അക്രമകാരികൾ (v. 246, `verses.json`): part 31's term table renders അക്രമകാരികൾ "perpetrators of wrong" (its commentary: "except against the perpetrators of wrong") and അക്രമം ചെയ്യുന്നവർ "those who do wrong" (2:193). "Allah is indeed also One who knows about those who do wrong." → "… about the perpetrators of wrong." (The table's അക്രമികൾ stays "wrongdoers", as in parts 06–37.)
2. v. 246 table, إِنۡ كُتِبَ "നിയമിക്ക(വിധിക്ക)പ്പെട്ടാൽ": part 34 renders the same gloss for كُتِبَ عَلَيۡكُمُ ٱلۡقِتَالُ (2:216), "നിയമിക്ക(വിധിക്ക, രേഖപ്പെടുത്ത)പ്പെട്ടിരിക്കുന്നു", as "has been prescribed (ruled, recorded)". "if prescribed (decreed)" → "if prescribed (ruled)".

### Added word

3. v. 247 table, قَدۡ بَعَثَ "നിയോഗിച്ചു തന്നിട്ടുണ്ട്": തരുക here is the benefactive auxiliary, which earlier tables do not render as "give" (part 12 കാണിച്ചുതരുകയും "and He shows you"; part 33 കാത്തുതരുകയും "do guard for us"), and the v. 246 table's "നിയോഗിച്ചു തരുക" is "commission for us". "has commissioned and given" → "has commissioned".

No dropped തന്നെ/-ഉം/എന്നോണം or list items, may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി (none is printed), added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced footnotes, translator words in round brackets, or added Arabic were found apart from the above.

## Points the caller asked about

- **(1) DOUBTs.**
  - "തിരിഞ്ഞു / കളഞ്ഞു-" (v. 246 panel): confirmed split at a line end. The same page's table prints തിരിഞ്ഞുകളഞ്ഞു joined, but earlier panels and tables print both തിരിഞ്ഞു കളഞ്ഞു (parts 11, 21) and തിരിഞ്ഞുകളഞ്ഞു(വെങ്കിൽ), so the doubt is real (unlike അറിഞ്ഞുകൊള്ളുക in part 40). DOUBT kept.
  - ശരീരം "frame" (v. 247 panel; also the table and "condition of frame", "strength of frame" on p. 588): as part 31, whose open doubt 2 is still open. DOUBT kept.
  - പണം "panam" (note (\*\*\*), p. 594): clearly printed; as part 39's "panams". DOUBT kept.
- **(2) TN on note (\*): "Goliath (Goliath)".** The image prints "(Goliath)" in Latin italic letters after ഗൊല്യാത്ത്. The TN points out only what is printed, as part 40's TN on "Maintenance" did; it adds no opinion. Kept.
- **(3) ശ്ത്രുക്കൾ** (p. 590): confirmed on the image; the meaning ("enemies") is not in question; kept without a TN, as earlier parts treat such slips.
- **(4) The p. 589 paragraph** missing on the website: present in full and in place (see above), including "നോക്കുമ്പോൾ,കേവലം", the missing comma in "മോവാബ്യർ അമ്മോന്യർ," (mirrored "the Moabites the Ammonites,"), "(1. ശമു. 14:47- 49)" and the one printed ﷺ.
- **(5) Markers, honorifics, table, heading.** No [p. 584] or [p. 592] (see above). ﷺ is printed once (p. 589, നബിﷺ); the English has exactly 1. (r) is printed 5 times: Qatadah, Thawri (p. 590), Imam Thawri (p. 591), Ibn Jarir (p. 593), 'Umar (p. 594); the English has the same 5. (a) is printed 7 times (pp. 585 ×4, 586, 590 ×2); the English has 7. 123 word-table entries. "### Section – 33" stands before the 249 panel. Footnotes: see above.
- **(6) Arabic as printed**, from the bbox glyph boxes and marks (the codepoints in the file were compared one by one):
  - الْمَلاء (p. 585): sukun on ل, fatha on م, bare ء. As in the file.
  - شَمَوِيل ـ او صَمُويل (p. 585): fatha on ش and م, kasra on و; tatweel between; fatha on ص, damma on م. As in the file (the glyph of ش is missing from the text layer; its fatha is there).
  - يوشع بن نون (p. 585), عمالقة (p. 586), شاول (p. 588), قيس (p. 589): bare. As in the file.
  - التَابُوت (p. 586): fatha on ت, damma on ب, no shadda. التَّابُوتُ (p. 590): shadda with fatha on ت, damma on ب and on the final ت. Both as in the file.
  - دَاجُون (p. 590): fatha on د, damma on ج. بَيْتُ شَمْس (p. 591): fatha on ب, sukun on ي, damma on ت; fatha on ش, sukun on م. يَعَارِيم (p. 591): fatha on ي and ع, kasra on ر. جَالُوت (p. 594): fatha on ج, damma on ل. All as in the file.
  - وَاللَّهُمَعَالصَّابِرِينَ (p. 594): every join overlaps or touches (one string); fatha on و, shadda with fatha on the Allah ligature, damma on ه, fatha on م and ع, shadda with fatha on ص, kasra on ب and ر, fatha on ن. As in the file; it differs from the spaced verse text in `data/quran-uthmani.json`, so it is kept as printed.
- **(7) Names.** Quran names: Talut, Jalut, Tabut. Bible names in their usual English forms (Samuel for ശമുവേൽ, Saul for ശൗൽ, Joshua, Dagon, Shiloh, Abinadab, Goliath, Philistines, Ammonites, Midianites, Moabites, Edomites, Amalekites, Zobah, Levi, Judah, Benjamin, Gittite, Anakites, Jehovah, Solomon): this follows the earlier parts, which render യഹോവ "Jehovah" and ശലോമോൻ "Solomon"; an English form identifies the same person or people and adds nothing to what is printed. The book's own transliterated forms are kept where it gives them: Shamawil (ശമവീൽ), Shemuel (Shimwil) (ശെമുവേൽ (ശിംവീൽ)), Qisu / Qis (ക്വീസു / ക്വീസ്), Bethshemes, Yeyarim, Yisrayel, Yisra'ilites, Yisrayelites (the Bible forms, as the earlier parts' "Yisrayel / Yisrayelites"), 'Amaliqah (അമാലികഃ; the text layer has ക്വ, the image shows a plain-looking ക, either way "q" is the usual rendering of the Arabic عمالقة printed beside it) and Amalikha (അമാലിഖ). The spelling variants ഫെലിസ്ത്യർ / ഫെലസ്ത്യർ / ഫിലിസ്ത്യർ are all "Philistines", as part 40 treated യുസുഫ് / യൂസുഫ്. ഇസ്റാഈല്യർ "the Israelites", ഇസ്റാഈൽ സന്തതികൾ "the Children of Isra'il", ഇസ്റാഈൽ ജനത / വർഗം "the Isra'il people / race": as earlier parts.
- **(8) Terms**, checked by grep against earlier word tables, verses and check.md tables:
  - ആൾക്കാർ "people" / ആളുകൾ "folk": as parts 32–34 (part 34's term table: ജനങ്ങൾ / ആൾക്കാർ / ആളുകൾ / പേർ "the people / people / folk / persons"). Not new; settled. ജനങ്ങൾ "the people" (p. 593), ജനം "the people" (ജനമദ്ധ്യെ, p. 589).
  - സംഘം "band" / കൂട്ടം "company": as parts 15 and 34's term table.
  - ജനത "people" (ഇസ്റാഈൽ ജനത "the Isra'il people"): as the earlier "a people" for ജനത.
  - നിയോഗിക്കുക "commission": as part 34 (2:213 "sent, commissioned"). നിയമിക്കുക "appoint" (judges, a king), but "prescribe" where it renders كُتِبَ: as parts 27–29 and 34.
  - അർഹത / അർഹർ "entitlement / entitled": new; consistent.
  - കഴിവ് "capacity": as part 38–39 ("capacity"). ധനശേഷി "wealth-capacity".
  - പരീക്ഷണം / പരീക്ഷിക്കുക "trial / try": as part 24.
  - വിജയം "success", വിജയിക്കുക "succeed", ജയം "triumph" (ജയജയ "triumph, triumph"), ജയിക്കുക "overcome", ജയിച്ചടക്കുക "conquer": new apart from part 01's വിജയികൾ "the successful"; consistent.
  - വീര്യം "vigour", മനോവീര്യം "morale" (as part 40), ശൗര്യം "valour", ശൂരൻ "valiant", വീരൻ "heroic", യുദ്ധവീരൻ "war hero": new; consistent.
  - ദൃഷ്ടാന്തം "sign" (as parts 07–40), അടയാളം "mark" (as parts 24, 29).
  - പെട്ടകം "ark", പെട്ടി "box", പേടകം "chest": new; consistent throughout.
  - ശാന്തി "tranquillity", (മനഃ)ശാന്തി "(mental) tranquillity", സമാധാനം "peace", മനഃസ്സമാധാനം "peace of mind", അടക്കം "restraint": new; consistent.
  - അക്രമകാരികൾ "perpetrators of wrong" (correction 1), അക്രമികൾ "wrongdoers".
  - ബിംബാരാധന "image-worship", വിഗ്രഹം "idol" (as the earlier ബിംബം / വിഗ്രഹം "image / idol"), (ദൈവ)പ്രതിഷ്ഠ "installation (of gods)", പ്രതിഷ്ഠിക്കുക "install": new; consistent.
  - പ്രാർത്ഥന "supplication", പ്രാർത്ഥിക്കുക "pray": as earlier parts.
  - സർവ്വജ്ഞൻ "All-Knowing": as the earlier term table ("the All-Knowing").
  - കൽപന "commandment", ഭൂരിഭാഗം "the greater portion" (part 40 has ഭൂരിപക്ഷം "the majority"), വേദപുസ്തക നിഘണ്ടു "the Bible Dictionary", (വേ. പു. നി.) "(Ve. Pu. Ni.)".

## Checked and left as they are

- p. 587, the Bible quotation "… make known to them the manner of the king …" for "രാജാവിന്റെ ന്യായം": part 40 renders ന്യായം "justification"; here the word stands in a Bible quotation where it means the king's way of doing (the Malayalam Bible's rendering of 1 Sam. 8:9); "justification" would make no sense. Left; noted for the reviewer (open doubt 3).
- p. 593, ആഹാരം "food" in the Bible report ("the one who eats food is accursed", "without eating food"): part 38 settled ആഹാരം "provision" for rizq in the verses (parts 03–04 have "food"); here it is eating, and no ഭക്ഷണം occurs in this part to clash with it. Left; open doubt 4.
- p. 586, "Later, prophethood was attained by him." for "അദ്ദേഹത്തിന് പിന്നീട് പ്രവാചകത്വം സിദ്ധിച്ചു" (dative construction): the passive keeps the Malayalam order and adds no agent. Left.
- Subjectless active verbs rendered with a passive and no agent ("a person named Talut was made king and determined for them", p. 588; "shifting it to other places was tried", p. 591; "Saul … was made to come into the midst of the people", p. 589): the Malayalam names no agent; the English adds none (as part 40 left such passives). Left.
- Subjectless verbs whose subject is Allah ("He said only a prophet among them", p. 585; "that He states in this verse", p. 593) are rendered with "He", as in earlier parts.
- The v. 249 table glosses نَهَر "പുഴ" "stream" while the panel has നദി "river": two Malayalam words, kept apart. Left.
- `part.json` verses "246-249", pages "584-594", PDF pages "413-423": correct.

## Open doubts for the reviewer

1. **DOUBTs in the text**: line-end split "തിരിഞ്ഞു / കളഞ്ഞു" (v. 246 panel); ശരീരം "frame" (v. 247, as part 31, open doubt 2 there); പണം "panam" (note (\*\*\*), p. 594, as part 39).
2. **TN on "Goliath (Goliath)"** (note (\*), p. 594): kept as a TN, like part 40's "Maintenance".
3. **ന്യായം "manner"** in the Bible quotation (p. 587) against "justification" in part 40.
4. **ആഹാരം "food"** (p. 593) against "provision" in part 38.
5. **Bible names in English form** (Samuel, Saul, Joshua, Goliath, Benjamin, …) beside the book's transliterated forms (Shamawil, Shemuel, Qisu, Bethshemes, Yeyarim, Yisrayel): the reviewer may prefer one policy for all.
6. **(decreed) → (ruled)** in the v. 246 table (correction 2): part 40 uses "decree" for Allah's വിധി in prose; part 34's identical gloss has "ruled". The reviewer may wish to settle വിധിക്കുക in glosses.
7. **Earlier open doubts still apply** (not in this part): see parts 13–40.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ആൾക്കാർ / ആളുകൾ | al / — | people / folk (as parts 32–34) |
| സംഘം / കൂട്ടം | fi'ah / — | band / company (as parts 15, 34) |
| ജനത | — | people |
| നിയോഗിക്കുക | ba'atha | commission (as part 34) |
| നിയമിക്കുക | kutiba / — | prescribe (for كتب, as parts 27–34) / appoint |
| അർഹത / അർഹർ | ahaqq | entitlement / entitled |
| കഴിവ് / ധനശേഷി | sa'ah / taqah | capacity (as part 38) / wealth-capacity |
| പരീക്ഷണം / പരീക്ഷിക്കുക | ibtila' | trial / try (as part 24) |
| വിജയം / വിജയിക്കുക / ജയം / ജയിക്കുക / ജയിച്ചടക്കുക | ghalaba | success / succeed / triumph / overcome / conquer |
| വീര്യം / മനോവീര്യം / ശൗര്യം / ശൂരൻ / വീരൻ / യുദ്ധവീരൻ | — | vigour / morale (as part 40) / valour / valiant / heroic / war hero |
| ദൃഷ്ടാന്തം / അടയാളം | ayah | sign (as earlier parts) / mark (as parts 24, 29) |
| പെട്ടകം / പെട്ടി / പേടകം | tabut | ark / box / chest |
| ശാന്തി / സമാധാനം / അടക്കം | sakinah | tranquillity / peace / restraint |
| അക്രമകാരികൾ / അക്രമികൾ | zalimun | perpetrators of wrong (as part 31; correction 1) / wrongdoers |
| ബിംബാരാധന / വിഗ്രഹം / പ്രതിഷ്ഠ | — | image-worship / idol / installation |
| ശരീരം | jism | frame (as part 31; DOUBT) |
| അവശിഷ്ടം | baqiyyah | remnant |
| ന്യായാധിപൻ / ന്യായാധിപത്യം | — | judge / judgeship |
| വേദപുസ്തക നിഘണ്ടു | — | the Bible Dictionary |
