# Check: Ali 'Imran part 03 (verses 23–35)

Checked on 2026-10-28 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/03. Al-'Imran.pdf`, PDF pages 24–34 (book pp. 732–742). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer. `pdftotext -bbox` was used to locate the Arabic on pp. 740 and 741. Seven 300 dpi crops were used, three of them mis-aimed on p. 737; the others show സുക്ഷ്മത and വ്യഖ്യാനത്തിലും (p. 737), ان شاءالله (p. 740), and (والله السميع عليم) with (والله اعلم) (p. 741). The amanithafseer.com text was not needed. This part has no footnotes.
- **Boundaries.** Part 02 ends on p. 732 with "… അത് ശിക്ഷയെക്കുറിച്ചു മാത്രമാണുള്ളത് എന്നു താൽപര്യം."; directly below is the verse 23 panel. This part starts there. It ends on p. 742 with "… മറ്റൊന്നിലും ശ്രദ്ധപതിക്കാത്തവനാക്കുക എന്നത്രെ."; directly below is the verse 36 panel. Nothing is missing. The heading "വിഭാഗം -4" (p. 739, above the verse 31 panel) is "### Section – 4". Right.
- `part.json`, `verses.json` (verses 23–35), `words.json` (156 entries: 23: 13; 24: 10; 25: 10; 26: 18; 27: 14; 28: 19; 29: 12; 30: 20; 31: 10; 32: 7; 33: 6; 34: 5; 35: 12), `commentary.md`.
- Groups: *[Verses 23–25]* (panels p. 732, table and commentary p. 733) | *[Verses 26–27]* (panels pp. 733–734, table and commentary pp. 734–735) | *[Verse 28]* (panel, table and commentary pp. 736–737) | *[Verses 29–30]* (panels pp. 737–738, table and commentary pp. 738–739) | "### Section – 4" *[Verses 31–32]* (panels, table and commentary pp. 739–740) | *[Verses 33–34]* (panels, table and commentary pp. 740–741) | *[Verse 35]* (panel and table p. 741, commentary p. 742). Right.
- Every English sentence of the commentary was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images in the printed order (one correction, 3 below), including the joined/spaced forms "(അവരോട്)അനീതിചെയ്യപ്പെടുന്നതുമല്ല", "[അതിന്വിരോധമില്ല]", "(ജാഗരൂകരായിരിക്കണമെന്ന്)നിങ്ങളെ", "നിങ്ങൾഎന്നെപിൻപറ്റുവിൻ; (എന്നാൽ)അല്ലാഹുനിങ്ങളെ", "പൊറുക്കുന്നവനും,കരുണാനിധിയുമാകുന്നു", "ഇബ്റാഹീം, കുടുംബത്തെയും", "സന്തതികളായികൊണ്ട്"; table "അവർവിളിക്ക(ക്ഷണിക്ക)പ്പെടുന്നു", "എന്നിട്ടു(പിന്നെ)", "നീഉദ്ദേശിക്കുന്നവർക്ക്", "നിർജ്ജീവ മായതിനെ നീപുറപ്പെടുവിക്കുന്നു", "മിത്രങ്ങൾ,കാര്യകർത്താക്കൾ", "കൂടാതെ(അല്ലാതെ)", "ആരെങ്കിലും(വല്ലവരും)", "ഒരു കാര്യത്തിലും(ഒന്നിലും)", "നിങ്ങൾസൂക്ഷ്മത പാലിക്കൽഅല്ലാതെ", "ഒരുസൂക്ഷ്മത(കാവൽ)", "നിങ്ങളെതാക്കീത് ചെയ്യുന്നു", "തന്നെക്കുറിച്ച്തന്നെ" (entry 82) but "തന്നെക്കുറിച്ച് തന്നെ" (entry 113), "നിങ്ങളുടെ നെഞ്ചുകളിലുള്ളത്," (split "നെഞ്ചു / കളിലുള്ളത്," at a line end), "എല്ലാകാര്യത്തിനും" (entry 50) but "എല്ലാകാര്യത്തിന്നും" (entry 95), "അതിന്റെ (തിന്മയുടെ- ആ ദിവസത്തിന്റെ)യും ഇടയിൽ", "സന്തതികളായി കൊണ്ട്" (table) but "സന്തതികളായികൊണ്ട്" (panel); no full stop at the end of the 33 and 35 panels.
- `[p. N]` markers 733–742. P. 732 holds only the end of part 02 and the panels, so it has no marker (as parts 01–02). [p. 733], [p. 734], [p. 736] and [p. 738] stand at the start of the commentary below the tables; [p. 742] at the start of the verse 35 commentary, which begins the page. Page turns: "who ought to receive *[p. 735]* more of life's comforts" (അവർക്കല്ലേ ജീവിത / സുഖസൗകര്യങ്ങളും), "that, surely, is *[p. 737]* the meaning of regarding them as friends" (… അവരെ മിത്രങ്ങളായി / കരുതുന്നതിന്റെ അർത്ഥം; the English word order allows no closer place), "brought present *[p. 739]*!" (ഹാജരാക്കപ്പെട്ടതായി അതു / കണ്ടെത്തുന്ന ദിവസം!), "are *[p. 740]* disbelievers whom Allah does not like" (അല്ലാഹു ഇഷ്ടപ്പെടാത്ത / അവിശ്വാസികളാകുന്നുവെന്നത്രെ), "in these verses too *[p. 741]* and in a few verses that follow" (ഈ വചനങ്ങളിലും / തുടർന്നുളള). All are right.
- Honorifics: ﷺ printed 4 times (all p. 740); the English has 4, none added at the bare "നബിചര്യകളും, നബിവചനങ്ങളും" (p. 739). (r) printed 5 times (p. 735: Tabarani; p. 737: Abu al-Darda', Bukhari, Ibn 'Abbas, Thawri); the English has 5. (a) printed 9 times (p. 741: Adam twice, Nuh, Ibrahim, Harun, 'Isa twice, Yahya; p. 742: Maryam Bivi); the English has 9, none added at "മർയം ബീവിയുടെ" (p. 741).
- References as printed: Al-Baqarah 80, Surah Hajj 61, Luqman 29, (Ma'idah :51), (Anfal:73), (Mumtahanah :1), Sura: Mumtahanah, (Surah: Nahl 106 ), verses 8, 9 of Suratul Mumtahanah, the 81st verse, (Bu), (Nisa' : 80).

## Corrections made (before → after)

### Arabic in the word table

1. Entry 56 (verse 27, പകലിനെ): the "ar" was the genitive ٱلنَّهَارِ of the first clause (فِي ٱلنَّهَارِ); the word glossed is the object of the second clause, printed النَّهَارَ. "ٱلنَّهَارِ" → "ٱلنَّهَارَ" (copied from `data/quran-uthmani.json`).
2. Entry 81 (verse 28, അല്ലാഹു): the "ar" was the genitive ٱللَّهِ (found in مِنَ ٱللَّهِ); the subject of وَيُحَذِّرُكُمُ is printed اللَّهُ. "ٱللَّهِ" → "ٱللَّهُ" (copied from `data/quran-uthmani.json`).

### Malayalam as printed

3. Entry 84 (ٱلۡمَصِيرُ, p. 736): the gloss ends with a full stop in the print (as part 01 entry 27). "തിരിച്ചെത്തൽ, പര്യവസാനം" → "തിരിച്ചെത്തൽ, പര്യവസാനം."; English "the arriving back, the final end" → "the arriving back, the final end.".

### Translator's words inside the author's round brackets

4. p. 737, Ma'idah 51, "ചിലർ ചിലരുടെ (അവർ തമ്മതമ്മിൽ) മിത്രങ്ങളത്രെ": the bracket holds "they among themselves". "Some of them are indeed the friends of some (of one another among themselves)." → "Some of them are indeed the friends of some (they among themselves)."

### Punctuation as printed

5. p. 740, "… ചില ലഘു ബുദ്ധികൾ വിചാരിക്കുന്ന പോലെ - കേവലം ഒരു നിസ്സാര വിഷയമൊന്നുമല്ല": only one dash is printed (a dash reads as the author's; as part 01 correction 5). "is not - as some light-minded people think - merely some trivial subject" → "is not, as some light-minded people think - merely some trivial subject".

### One English per name

6. p. 741, ഇസ്റാഈല്യർ (twice): Al-Baqarah has "the Israelites" for this word (parts 07 and 18 term tables, part 21). "the Isra'ilites" → "the Israelites" (twice).
7. p. 737, അബുദ്ദർദാഉ് (r): Al-Baqarah part 29 writes "Abu al-Darda' (r)". "Abud-Darda' (r)" → "Abu al-Darda' (r)".

No dropped തന്നെ/-ഉം or list items, may/will errors, tense or voice changes, reversed or "fixed" negations, changed reported speech, added ﷺ, silently corrected names or misprints, misplaced markers, or added or re-vowelled Arabic were found apart from the above.

## The translator's open items

- **(1) TN p. 741, "(والله السميع عليم)".** Confirmed on a 300 dpi crop: "(والله السميع عليم)", with the article on السميع only, plain script; the verse 34 panel and table on p. 740 have وَاللّٰهُ سَمِيعٌ عَلِيمٌ. The Malayalam beside it, "അല്ലാഹു എല്ലാം കേൾക്കുന്നവനും അറിയുന്നവനുമാണ്", is the verse's wording. The TN is accurate and kept as written. (Quoting the printed Arabic inside the TN was tried and dropped: `npm run check` then lists it as a close-but-not-exact quotation of 8:42, which would mislead.)
- **(2) Slips kept as printed without TN.** All confirmed: അതുവിധിക്ലപിക്കുവാൻ (table entry 8, p. 733, for വിധികല്പിക്കുവാൻ; the text layer has ക്‌ല, a visible virama); "ഇബ്റാഹീം, കുടുംബത്തെയും" (verse 33 panel, p. 740, comma clearly printed; the table entry 137 has "ഇബ്റാഹീം കുടുംബത്തെയും"); തമ്മതമ്മിൽ (p. 737, 150 dpi); സുക്ഷ്മത (p. 737, second word of Ibn 'Abbas's saying; crop; the first is സൂക്ഷ്മത); വ്യഖ്യാനത്തിലും (p. 737; crop); ആഭിപ്രായത്തിനാണ് (p. 741, 150 dpi, at a line start). Also printed and kept: ശുശ്രുഷക്കു (p. 742, for ശുശ്രൂഷക്കു). None changes the meaning; no TN, as the translator had them.
- **(3) Quran quotations in the commentary.** Each was compared with the printed words. p. 735: printed (الاله الخلق والأمر) = exactly أَلَا لَهُ ٱلۡخَلۡقُ وَٱلۡأَمۡرُ of 7:54 (الا and له run together in the print). p. 738: printed يوم تجد, من سوء, تودّ = exactly يَوۡمَ تَجِدُ, مِن سُوٓءٖ, تَوَدُّ of 3:30. p. 739: printed (نحن ابناء الله و أحباؤه) = exactly نَحۡنُ أَبۡنَـٰٓؤُاْ ٱللَّهِ وَأَحِبَّـٰٓؤُهُۥ of 5:18. p. 740: printed مَنْ يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ = exactly مَّن يُطِعِ ٱلرَّسُولَ فَقَدۡ أَطَاعَ ٱللَّهَ of 4:80. p. 741: 3:34 (see (1)). p. 742: printed (محررا) = مُحَرَّرٗا of 3:35. No more and no less in any of them; the waqf signs of the Uthmani text (ۗ, ۖ) are not carried over, as in part 02. `npm run check` counts all 20 longer quotations of the surah so far: 15 exact, 0 close-but-not-exact, 5 not from the Quran (all in parts 01 and 02).
- **(4) Non-Quran Arabic.** تقية (p. 737, ta marbuta, clear at 150 dpi), ان شاءالله (p. 740, crop: شاءالله joined), والله اعلم (p. 741, crop), حنة (p. 742, clear at 150 dpi), عمران (p. 741): letter by letter as in the file.
- **(5) Renderings.** മിത്രങ്ങൾ "friends", കൈകാര്യക്കാർ "managers" as Al-Baqarah part 43 (entry 257 "kinsmen, friends, managers") and part 50 ("his manager"); കാര്യകർത്താക്കൾ "those in charge of affairs" is new here (table entry 69 only) and is listed below. ദയ "kind" / കനിവ് "tender": Al-Baqarah part 33 (2:207) has "kindness – tenderness" for ദയ- കനിവ്, so the pair is kept apart as there. "Mumtahanah" follows the print മുംതഹനഃ (three times here); Al-Baqarah parts 31 and 35 write "Mumtahinah" (open doubt 2).

## Checked and left as they are

- p. 733, "അവർക്കറിയുകയും ചെയ്യാം" "They also know": ചെയ്യാം here carries the ordinary present "know" (as in അറിയാം), not "may"; left.
- p. 735, ‘making the night enter into the day and the day into the night’: the print has no quotation marks; the English marks the quoted words for readability. Left (no words are added).
- p. 739, a full stop is printed after the (32) marker in the word table, between entries 126 and 127 ("കരുണാനിധിയുമാണ് ⟨32⟩ . قُلْ"); it belongs to neither gloss and is not reproduced.
- p. 736, "[അതിന്‌വിരോധമില്ല]" is printed with a visible virama (no space); the file has the same letters.
- p. 740, "That is the gist of what Allah has said" for "എന്നൊക്കെയാണ് അല്ലാഹു പറഞ്ഞതിന്റെ സാരം" (literally "such things are the gist"); left.
- p. 742, പരിചരണം and ശുശ്രൂഷ are both "service" (of Bait al-Muqaddas, of the mosque); left.
- Word table entry 48 ഗുണം "good" and the verse 26 panel നന്മ "good": left.
- v. 25, "for a day" (ദിവസത്തേക്ക്) in the panel and "to a day" (ദിവസത്തിലേക്ക്) in the table; left.
- p. 737 and p. 739 quotations not closed in the print (‘Some of those who have disbelieved …’, Ibn 'Abbas's saying, the first sentence of 3:30 on p. 738) and the bracket opened before റസൂലിനെ (p. 740) closed only by the reference: mirrored.
- `part.json` verses "23-35", pages "732-742", PDF pages "24-34": correct.

## Open doubts for the reviewer

1. **TN in the text**: p. 741, verse 34 quoted as (والله السميع عليم) in the print.
2. **Mumtahanah / Mumtahinah**: this part follows the print here (മുംതഹനഃ); Al-Baqarah parts 31 and 35 write "Mumtahinah". One spelling may be wanted.
3. **Quran quotations in the commentary**: copied from the Uthmani text (TRANSLATING.md rule 4), as part 02; part 01 and Al-Baqarah parts 39–51 keep the printed plain script (part 02 open doubt 3).
4. **Earlier open doubts still apply** (not in this part): see parts 01–02 and the Al-Baqarah parts.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| മിത്രങ്ങൾ / കാര്യകർത്താക്കൾ / കൈകാര്യക്കാർ | awliya' | friends / those in charge of affairs / managers (friends, managers as Al-Baqarah part 43) |
| രാജാധിപത്യം / രാജത്വം | mulk | sovereign rule / kingship |
| പ്രതാപം / നിന്ദ്യത | 'izz / dhull | majesty / abasement |
| സൂക്ഷ്മത (പാലിക്കൽ) | tuqah, taqiyyah | (observing) caution (as part 02) |
| ഹാജരാക്കപ്പെട്ട | muhdar | brought present |
| ദയ / കനിവ് | ra'uf | kind / tender (as Al-Baqarah part 33) |
| തിരഞ്ഞെടുക്കുക / തെളിയിച്ചെടുക്കുക | istafa | choose / pick out clear |
| സന്തതികൾ | dhurriyyah | offspring |
| സ്വതന്ത്രമാക്കപ്പെട്ട | muharrar | one who has been set free |
| ഇസ്റാഈല്യർ | — | the Israelites (as Al-Baqarah) |
| അഹ്ലുൽ ക്വുർആനികൾ | — | ‘Ahlul Quranis’ |
| ബീവി | — | Bivi (Maryam Bivi) |
| ഖണ്ഡനം | — | refutation |
