# Check: An-Nisa' part 04 (verses 11–12)

Checked on 2026-11-18 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/04. Al-Nisa'.pdf`, PDF pages 30–41 (book pp. 953–964). Each page was rendered at 150 dpi and read once in full beside the `ml2uni.py` text layer. 300/600 dpi crops: p. 953 the line with سعدبن ربيع رضى الله عنه; p. 955 the v. 11 table word മുന്നിലൊന്ന്; p. 958 "186-ാം വചനത്തിൽ" and item (4); p. 961 the v. 12 word table, lines 1–11 (several crops, two mis-aimed), and لَهُنَّ at 600 dpi. `pdftotext -bbox` was used for the p. 961 table layout.
- **Boundaries.** Part 03 ends on p. 953 with "… സൂക്ഷിക്കുവാൻ വേണ്ടിയായിരിക്കും. الله أعلم". This part starts with "വിഭാഗം - 2" and the Jabir hadith (p. 953) and ends on p. 964 with "… പറയുന്നത് നോക്കുക:-", directly above the verse 13 panel. Nothing between is missing. No footnotes on these pages.
- Files: `part.json`, `verses.json` (verses 11–12), `words.json` (107 entries: 11: 52; 12: 55), `commentary.md`.
- Groups: "### Section – 2" and the hadith (pp. 953–954) | *[Verse 11]* (panel pp. 954–955, table p. 955, commentary pp. 955–960) | *[Verse 12]* (panel pp. 960–961, table p. 961, commentary pp. 961–964). Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- **Numbers and fractions**, all checked against the images: hadith (two daughters two thirds, mother one eighth, remainder to the uncle); v. 11 panel and table (two females' share, two thirds above two, half for one, one sixth each to parents with a child, one third to the mother without child, one sixth with brothers and sisters); p. 955 "7 - 10"; p. 957 "half, one sixth, one eighth", daughter half / wife one eighth; p. 958 rules (2) 2/3, (4) 1/6 each, (5) 1/3, (6) 1/6, "Al-Baqarah 180", one third limit on wasiyyah; p. 959 13:23, 52:21, Al-Baqarah 180, Ibn 'Abbas (parents one sixth and one third, wife one fourth and one eighth, husband half and one fourth); v. 12 panel and table (half / one fourth for the husband, one fourth / one eighth for the wives, one sixth each / partners in one third for kalalah siblings); p. 962 rules (1)–(3) and "176-ാം വചനത്തിൽ"; p. 963 "sixty years". All right.
- `verses.json` and every `words.json` gloss match the images, including "എനി(എന്നാൽ) അവർ ആയിരുന്നാൽ", "മൂന്നിൽ രണ്ടു(അംശം)", "എനിഅവന്നുണ്ടായിരുന്നാൽ" (joined), "മുന്നിലൊന്ന്" (300 dpi; TN kept), "നിങ്ങൾ(ക്കു) അറിയുകയില്ല", "അടുത്ത (സൗകര്യപ്പെടുന്ന)വർ", "ശേഷമാണ്(ഇത്)", "(അതെ)അല്ലാഹുവിങ്കൽ", "സർവ്വ ജ്ഞനാണ്" (v. 12 panel, spaced), "ഒരുവസ്വിയ്യത്തിന് ശേഷം". `npm run check`: all `ar` entries are in their verses.
- **Verse 12 word table (p. 961).** The image places some Arabic words at the other end of the line from their gloss (e.g. فَلَكُمُ printed at the right end of line 4 while its gloss എന്നാൽ നിങ്ങൾക്കുണ്ട് begins the line; بِهَآ and ٱلرُّبُعُ swapped to the ends of line 6). The text layer (`-bbox`) has these words in their intended places, Arabic followed by its gloss, and in Quran order. Every pairing was checked by meaning and found right, except the لَهُنَّ / وَلَدٞ line (correction 1). "وَلَهُۥٓ أَخٌ" — "അവന് (അയാൾക്ക്) ഒരു സഹോദരനുമുണ്ട്" is one entry in the print (one Arabic group, one gloss): right.
- `[p. N]` markers 954–964. Page turns: "the battle of Uhud *[p. 954]*" (യുദ്ധത്തിൽ / പങ്കെടുത്തു), "*[p. 955]* After giving" (the commentary starts at the foot of p. 955 under the table), "*[p. 956]* The laws" (the sentence before ends at the top of p. 956), "the need for wealth. *[p. 957]*" (നേരിടു / ന്നത്), "applicable *[p. 963]* everywhere" (ബാധ / കമാണെങ്കിലും), "and *[p. 964]* their breadth" (അവ / യുടെ). All acceptable.
- Honorifics: ﷺ printed 4 times (pp. 953, 954, 958, 963); the English has 4. (r) printed 6 times (Jabir p. 953; Ibn 'Abbas, Ibn Kathir p. 959; Abu Hurairah twice, Ahmad p. 963); the English has 6. The Arabic رضى الله عنه after Sa'd is kept as printed. "തിരുമേനി" without ﷺ (p. 954) → "the noble one", no ﷺ added: right.
- Abbreviations "(അ; ദാ; തി; ജ)" → "(A; Da; Ti; Ja)" and "(ദാ; തി; ജ)" → "(Da; Ti; Ja)", as earlier parts; no full stop is printed inside, none added.
- Arabic: Quran phrases printed plain are given in the Uthmani text, as in earlier parts: يوصيكم الله فى اولادكم, للذكر مثل حظ الانثيين (p. 956), فان كن نساء فوق اثنتين الخ (p. 958, الخ kept), ابائكم وابنائكم ... لكم نفعا, فريضة من الله (p. 959), كلالة (p. 962), غير مضار (p. 962), من بعد وصية (p. 963), وصية من الله, والله عليم حليم (p. 963). Plain Arabic kept as printed and confirmed on the images: سعدبن ربيع رضى الله عنه (p. 953, 300 dpi: سعدبن joined), علم الفرائض, والله الموفق, اولاد, الله اعلم (p. 956), اهل الفروض, العصبة, فرض (p. 957), الله اعلم (p. 963).

## Corrections made (before → after)

### Word table

1. v. 12, `إِن لَّمۡ يَكُن لَّهُنَّ وَلَدٞ فَإِن كَانَ لَهُنَّ وَلَدٞ`: the print (image and text layer agree) has, in order, لَهُنَّ "അവർക്ക്" | وَلَدٞ "സന്താനം" | فَإِن كَانَ "എനി ഉണ്ടായെങ്കിൽ" | لَهُنَّ وَلَدٞ "അവർക്ക് സന്താനം": the split pair belongs to the first occurrence and the joined one to the second, as in the verse 11 table (لَهُۥ / وَلَدٞ split first, لَّهُۥ وَلَدٞ joined second) and the لَكُمۡ وَلَدٞ entries of verse 12. Before: لَّهُنَّ وَلَدٞ (joined) | فَإِن كَانَ | لَهُنَّ | وَلَدٞ. After: لَّهُنَّ "അവർക്ക്" / "for them" | وَلَدٞ "സന്താനം" / "a child" | فَإِن كَانَ | لَهُنَّ وَلَدٞ "അവർക്ക് സന്താനം" / "for them a child". (The printed لَهُنَّ has no shadda on the lām in either place, so the Arabic `ar` follows the verified text for each occurrence.) No gloss wording changed.

### Translator's note

2. p. 958, TN on "186-ാം വചനത്തിൽ": it rested on outside knowledge ("An-Nisa' has 176 verses, and the verse that gives two sisters two thirds is … 176"). Now it rests on the printed text: "*[TN: the print has "186-ാം വചനത്തിൽ" ("in the 186th verse"), clear on a 300 dpi crop. On p. 955 the author names the third verse on inheritance as "the last verse of the surah", and on p. 962 he refers to "the 176th verse" on 'kalalah', where the right of brothers and sisters is made like the right of daughters; 186 is evidently a slip for 176.]*" The verse number in the text stays "186th" as printed.

### Rendering

3. p. 961, "മാതാപിതാക്കളുടെയും മക്കളുടെയും അവകാശവിഹിതം": "the provision of the right of the parents and of the children" → "the share of right of the parents and of the children" (വിഹിതം = share, allotted portion).
4. p. 962, "അയാളെപ്പറ്റി كلالة (കലാലത്ത്) എന്ന് പറയപ്പെടുന്നു": "he is called **كَلَٰلَةً** (kalalah) with regard to him" (said twice over) → "**كَلَٰلَةً** (kalalah) is said about him".

### Layout

5. Three stray line breaks inside printed paragraphs (before "It is the man" p. 956, "Although this matter" p. 962, "Concerning the gravity" p. 963), each with a leading space: joined with a space. No change to the text.

No dropped sentences, reversed negations, number or fraction errors, voice changes or added honorifics were found.

## Points the translator asked about

- **v. 12 word table**: see above and correction 1; "وَلَهُۥٓ أَخٌ" as one entry is right.
- **Fractions**: all right (list above).
- **Mirrored slips without TN**: p. 957 "അതുപോലെത്തന്നെ." (full stop, then a new sentence) → "In just the same way." confirmed; p. 959 unclosed quotation ‘നിങ്ങളുടെ പിതാക്കളിലും … (Arabic) — confirmed, never closed; p. 963 "കാണാം;" → "can be seen … detail;" confirmed. Left, as earlier parts mirror such slips.
- **p. 958 rule (2)**: the print is "പെൺ മക്കൾ രണ്ടിലധികമുണ്ടെങ്കിൽ അവർക്ക് മൂന്നിൽ രണ്ടംശവും (Arabic الخ) എന്നാണ് അല്ലാഹു പറഞ്ഞവാക്ക്" ("… two thirds also (…), is the word Allah said"). "What Allah said is: if the daughters are more than two, for them two thirds as well (…)" keeps the content and the -ഉം; left. The reviewer may prefer "for them two thirds" without "as well".
- **Abbreviations**: right (above).
- **Hand-transcribed Arabic**: all eight confirmed on the images (above).
- **TN മുന്നിലൊന്ന് (v. 11 table)**: confirmed on a 300 dpi crop; kept.
- **TN 186**: reworded (correction 2).
- **DOUBT സഹോദരികളായ (p. 958 rule 5)**: clearly printed; kept.

## Checked and left as they are

- p. 956: the English puts ‘Allah makes ‘wasiyyah’ to you in the matter of your children’ in quotation marks; the print quotes only ‘വസ്വിയ്യത്ത്’. Left (meaning unchanged); the reviewer may remove the outer marks.
- p. 959, Ibn 'Abbas: "‘നസ്ഖ്’ ചെയ്തു (ദുർബ്ബലപ്പെടുത്തി)" → "did ‘naskh’ (abrogated)". Earlier parts gloss naskh as "made void" / "annulled"; "abrogated" is accurate. Left.
- v. 12 panel: "നിങ്ങൾക്കാകുന്നു; അവർക്ക് സന്താനമില്ലെങ്കിൽ." The English has a comma for the semicolon. Left.
- `part.json` verses "11-12", pages "953-964", PDF pages "30-41": correct.

## Open doubts for the reviewer

1. **DOUBT in the text**: p. 958 rule (5) സഹോദരികളായ "who are sisters" as printed / "brothers or sisters" (if സഹോദരങ്ങളായ was meant).
2. **TN** p. 958: "186" printed for 176 (correction 2); **TN** v. 11 table: മുന്നിലൊന്ന് for മൂന്നിലൊന്ന്.
3. Earlier open doubts still apply, including part 03's അടുത്ത കുടുംബങ്ങൾ "near relatives" (used again on p. 963).

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഇൽമുൽ ഫറാഇദ്വ് | 'ilm al-fara'id | ‘ilm al-fara'id’ (the knowledge of the determinations of shares) |
| നിശ്ചിത ഓഹരിക്കാർ | ahl al-furud | holders of fixed shares |
| അസ്വബഃ | 'asabah | ‘asabah |
| കലാലത്ത് | kalalah | kalalah |
| ഓഹരി നിർണയം | faridah | determination of shares |
| സർവ്വജ്ഞൻ / അഗാധജ്ഞൻ / സഹനശീലൻ | 'alim / hakim / halim | All-Knowing / Profoundly Knowing / Forbearing |
| ഉമ്മയൊത്ത / മാതാവ് മാത്രം ഒത്ത | — | with the same mother / with only the mother in common |
| പിതൃവ്യൻ | — | paternal uncle |
