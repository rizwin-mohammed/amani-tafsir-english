# Check: Ali 'Imran part 01 (introduction and verses 1–9)

Checked on 2026-10-28 by an independent checker session, following TRANSLATING.md section 5. This check also covers the surah files `meta.json` and `intro.md`.

## What was compared

- Source: `/mnt/project-files/quran/03. Al-'Imran.pdf`, PDF pages 1–14 (book pp. 709–722). Each page was rendered at 150 dpi and read once in full beside the full text layer. (Note: `ml2uni.py` cuts its output at 900 characters, so most of each page was missing from it; the same conversion was run without the cut from a script in the checker's scratch folder.) `pdftotext -bbox` was used to locate words. Eight 300 dpi crops were used: three for the ളള spellings (two more were mis-aimed), فاماالذين (p. 718), the title box (p. 709) and the foot of PDF p. 215. The Volume 2 front matter (`00. Vol2_705-708.pdf`) was read in the text layer only. The amanithafseer.com text was used only to confirm spellings.
- **`meta.json`.** title_ml "സൂറത്തു ആലു ഇംറാൻ": the title on p. 709 is "3. സൂറത്തു ആലു ഇംറാൻ". Right. Source "Volume 2, pages 709-923": the front matter reads "വിശുദ്ധ ക്വുർആൻ വിവരണം … വാല്യം 2"; p. 709 is the surah's first page, and the crop of PDF p. 215 shows the page number 923 under the last text of the surah. Right. Status "draft"; left.
- **Boundaries.** The part starts at the very beginning of the surah: the Arabic title box (سورة آل عمران, with madda, confirmed on the crop), the title, the line "മദീനയിൽ അവതരിച്ചത് - വചനങ്ങൾ 200 - വിഭാഗം (റുകൂഉ്) 20", the introduction (pp. 709–711, with three footnotes) and the Bismillah (p. 711). There is no "വിഭാഗം - 1" heading on these pages, so no Section heading is right. The part ends on p. 722 with "… അതെ, അതിനായി അവർ പ്രാർത്ഥിച്ചുകൊണ്ടിരിക്കും."; directly below are the heading "വിഭാഗം - 2" and the verse 10 panel. Nothing printed between the last translated line and that heading is missing.
- `intro.md`, `part.json`, `verses.json` (verses 1–9), `words.json` (88 entries: 1: 1; 2: 5; 3: 9; 4: 13; 5: 5; 6: 7; 7: 30; 8: 9; 9: 9), `commentary.md`.
- Groups: *[Verses 1–2]* (panels, table and commentary p. 711) | *[Verse 3]* (panel and table p. 711, commentary p. 712) | *[Verses 4–6]* (panels pp. 712–713, one table and commentary p. 713) | *[Verses 7–9]* (panels pp. 713–714, one table pp. 714–715, commentary pp. 715–722). Right.
- Every English sentence of the introduction and the commentary was compared with the Malayalam on the images, in order. No sentence is missing and none is added; every footnote is present ((\*) and (\*\*) on p. 709, (\*) on p. 710, (\*) on p. 719, (\*) on p. 720), each placed after the paragraph it belongs to.
- `verses.json` and every `words.json` gloss match the images in the printed order, including the joined/spaced forms "ആരാധ്യനേയില്ല.(അവൻ)", "ഭൂമിയിലാകട്ടെ-ആകാശത്തിലാകട്ടെ -യാതൊന്നും", "ഗർഭാശയങ്ങളിൽനിങ്ങളെ", "മൂലകേന്ദ്രമത്രെ .‘മുതശാബിഹായ’[…]", "ആഗ്രഹിച്ചും,വ്യാഖ്യാനത്തെ", "വേണമേ!നിശ്ചയമായും", "ഞങ്ങളുടെറബ്ബേ", "(കേന്ദ്രമാണ്-മർമപ്രധാനമാണ്-തള്ളയാണ്)", "(എതിര്-ലംഘനം)", the full stop in table entry 27 "പ്രതാപശാലിയാണ്.", and no full stop at the end of the 6 and 9 panels. The last line of the verse 3 panel shows a gap inside "അവതരി പ്പിച്ചിരിക്കുന്നു" (line justification); the file has the word whole. Left.
- `[p. N]` markers 709–722. P. 714 holds only panels and the start of the word table, so it has no marker (as in Al-Baqarah). [p. 711] stands in `intro.md` (the page turn falls in the introduction's last sentence), so the verse 1–2 commentary on the same page has none. [p. 713] and [p. 715] stand at the start of the commentary below the tables. Page turns: "the Son. *[p. 710]*" (… വിശ്വാസങ്ങളെ കുറിച്ചും / സംസാരം നടന്നു; the English puts the verb first), "concerning them *[p. 711]*" (അവരെ / സംബന്ധിച്ചും), "sent down and *[p. 716]* the true reality" (അവതരിപ്പിച്ചതും / സത്യയാഥാർത്ഥ്യവുമാണെന്ന്), "sentence structure, *[p. 717]* this comes about", "*[p. 718]* (About the people of Paradise)", "about many *[p. 719]* misinterpretations", "*[p. 720]* In the translation", "do not belittle *[p. 721]* those below" (താഴെയുള്ളവരെ / നിസ്സാരമാക്കാത്ത), "in the *[p. 722]* definition" (മുതശാബിഹിന്റെ / നിർവ്വചനത്തിലും). All are right.
- Honorifics: ﷺ printed 10 times (p. 709: 3; p. 710: 5; p. 718: 1; p. 719: 1); the English has 10. (a) printed 10 times (p. 709: 1; p. 710: 1; p. 712: 6; p. 719: 2); the English has 10. (r) printed 14 times (p. 710: Abu 'Ubaidah; p. 716: Raghib; p. 717: Raghib, Shah Waliyullah, Rashid Rida, Ibn Taimiyyah; p. 718: 'A'ishah, Bukhari; p. 720: Shah Waliyullah, Ibn Abi Hatim, Nafi' ibn Yazid, Ibn Mundhir; p. 721: Ibn 'Abbas, Ibn Jarir); the English has 14.
- References as printed: 61st verse, 13th verse, 255th verse, (32:17), (4: 171), 190-194, Al-Baqarah 269.

## Corrections made (before → after)

### Modality, emphasis and punctuation as printed

1. `intro.md`, p. 710–711, "… അവരെ സംബന്ധിച്ചും, മറ്റു ചിലത് വേറെ അവസരങ്ങളിലും അവതരിച്ചതായിരിക്കുമെന്ന് കരുതുവാനാണ് ന്യായം": the presumptive ആയിരിക്കും was not rendered. "most of the verses in those 80 came down concerning them" → "most of the verses in those 80 would have come down concerning them".
2. `intro.md`, p. 710, "… ചില രിവായത്തുകൾ നിലവിലുണ്ട് താനും": "also" is not printed (താനും is "moreover"). "There also exist, moreover, some riwayahs" → "There exist, moreover, some riwayahs".
3. `commentary.md`, p. 721, "… തുടർന്നുള്ള ക്വുർആൻ വാക്യങ്ങളിൽ തന്നെ കണ്ടെത്താവുന്നതുകൊണ്ട്": the തന്നെ was dropped. "can be found in the Quran sentences that follow" → "can be found in the very Quran sentences that follow".
4. `commentary.md`, p. 722: the print has a full stop after "… നേർമാർഗത്തിൽനിന്ന് തങ്ങൾ തെറ്റിപ്പോകാതിരിക്കണം."; the English had merged the two sentences. "That they must not go astray from the straight path that Allah gave them, that they must be worthy …" → "They must not go astray from the straight path that Allah gave them. That they must be worthy …".
5. `commentary.md`, p. 717, "… ശിക്ഷകളുടെയും യഥാർത്ഥ രൂപം എങ്ങനെയാണ് എന്നിത്യാദി കാര്യങ്ങളൊന്നും …": no dash is printed (a dash reads as the author's; as Al-Baqarah part 49 correction 8). "that the people of Hell receive – none of such matters" → "that the people of Hell receive, none of such matters".
6. `commentary.md`, p. 718, "… അവയെ ദുർവ്യാഖ്യാനം ചെയ്യുക ഇതായിരിക്കും അതിന്റെ ഫലം": no dash is printed. "and to misinterpret them for that purpose – this will be its result." → "and to misinterpret them for that purpose, this will be its result."

### Translator's words inside the author's round brackets

7. `commentary.md`, p. 712, "… യഥാർത്ഥ തൗറാത്തും, … യഥാർത്ഥ ഇൻജീലുമാകുന്നു.": no subject is printed; round brackets are the author's. "(It) is the real Torah" → "It is the real Torah".
8. `verses.json`, v. 2, "(അവൻ) ജീവത്തായുള്ളവൻ": the bracket holds only അവൻ (as v. 6 "(He) is the Majestic"). "(He is) the One who is living" → "(He) is the One who is living".

### One English per name

9. `intro.md`, ഇംറാൻ: the surah's title in `meta.json` is "Ali 'Imran", and this part writes 'ain names with the apostrophe ('Isa, 'A'ishah, Abu 'Ubaidah). "Suratu Alu Imran" (heading and text) → "Suratu Alu 'Imran"; "the family of Imran" (twice) → "the family of 'Imran". (Al-Baqarah has both "Al Imran" and "Al 'Imran"; see open doubt 4.)

### Translator's items (the brief's points 1–3)

10. `intro.md`, p. 709, DOUBT on ആ സൂറത്തിൽ: kept, reworded to give both readings evenly (see point (1) below).
11. `verses.json`, v. 4: a short cross-reference TN added, because the site shows beside the book's verse 4 the Uthmani verse 4, which opens with مِن قَبۡلُ … ٱلۡفُرۡقَانَۗ (translated at verse 3). "… is One who takes punitive action." → "… is One who takes punitive action. *[TN: the Arabic shown for verse 4 on this site opens with مِن قَبۡلُ … ٱلۡفُرۡقَانَۗ, which the book counts as the end of verse 3 and translates there; see the note at verse 3.]*"

No dropped തന്നെ/-ഉം or list items, may/will errors, tense or voice changes, reversed or "fixed" negations, changed reported speech, added ﷺ, silently corrected names or misprints, misplaced notes, or added or re-vowelled Arabic were found apart from the above.

## Points the caller asked about

- **(1) DOUBT ആ സൂറത്തിൽ (p. 709).** Clearly printed, and the amanithafseer.com text has the same words. Both readings stand: "that surah" = Al-Baqarah, just named (the -ഉം of സംബന്ധിച്ചും "concerning the Christians too" fits a surah already said to speak of the Jews), or = this surah, set against Al-Baqarah (the following sentences speak of this surah's verses about the Christians). The page cannot settle it: DOUBT kept, reworded (correction 10).
- **(2) DOUBT രണ്ടാമത്തെ വചനം (p. 720).** Clearly printed വചനം. The sentence before and after use വാചകം ("statement") for the two parts of verse 7, so വചനം here may be a slip for വാചകം, or വചനം in its general sense "saying, statement". The English keeps "verse" (the rendering of വചനം throughout) and the DOUBT gives both readings. Kept.
- **(3) Verse 3/4 numbering.** On p. 711 the Arabic panel of verse 3 runs to وَأَنزَلَ ٱلۡفُرۡقَانَ with ٣ after it, and the verse 3 word table includes مِن قَبۡلُ … ٱلۡفُرۡقَانَ; the book's verse 4 (p. 712) begins إِنَّ ٱلَّذِينَ كَفَرُواْ. In `data/quran-uthmani.json`, 3:3 ends at وَٱلۡإِنجِيلَ and 3:4 begins مِن قَبۡلُ. `npm run check` requires each "ar" to be found in its verse, so entries 16–20 (مِن قَبۡلُ, هُدٗى, لِّلنَّاسِ, وَأَنزَلَ, ٱلۡفُرۡقَانَ) must be under verse 4; their order is kept. `verses.json` keeps the book's Malayalam whole under each of its own numbers; the TN at verse 3 explains, and the new cross-reference at verse 4 (correction 11) covers the reader who sees the Uthmani 3:4 beside the book's verse 4. Right.
- **(4) TN verse 7 (p. 713).** Confirmed on the image: beside the start of the verse 7 translation the Arabic is هُوَ ٱلَّذِي يُصَوِّرُكُمۡ فِي ٱلۡأَرۡحَامِ … ٱلۡعَزِيزُ ٱلۡحَكِيمُ with ٦, the same as beside the verse 6 panel just above; p. 714 continues with فَأَمَّا ٱلَّذِينَ فِي قُلُوبِهِمۡ زَيۡغٌ … and ٧. The word table (pp. 714–715) has the whole verse. The TN is accurate. Kept.
- **(5) meta.json.** See "What was compared". Right.
- **(6) Slips kept as printed, without TN.** All confirmed on the images: നീന്റെ (table entry 76, p. 715); അനുഗ്രങ്ങളുടെയും (p. 717; the English "favours" is not affected); ജാഗരൂഗരായിരുന്നു (p. 718); ളള in മുമ്പിലുളളതിനെ (table entry 12, p. 711), സാദൃശ്യമുളളതിന് (v. 7 panel, p. 714) and നിയമബലമുളള (table entry 46, p. 714), each seen on a 300 dpi crop as two separate ള, not the conjunct ള്ള. Also kept as printed: അവനെത്രെ (table entry 34, p. 713; for അവനത്രെ) and മുത്തശാബിഹ് (pp. 715, 717, with ത്ത; the English "mutashabih" as elsewhere). These do not change the meaning; no TN, as the translator had them.

## Checked and left as they are

- p. 718, **فاماالذين في قلوبهم زيغ....**: the crop shows فاماالذين joined with two alifs, as in the file.
- p. 716, "( **محكم** ) എന്ന മൂലപദത്തെ": the "root word" is printed محكم (not حكم); followed. 
- Arabic in the introduction and commentary (امين الامة, ان شاء الله twice, الله اعلم, المحكم والمتشابه, ايات محكمات, متشابهات, محكم, متشابه, شبه, من المفردات, المحكم والمتشابه والتأويل, هن ام الكتاب, كلمته.....وروح منه, تأويل, التصيير من حالة الى حالة, التفسير والبيان, الحقيقة العلة والحكمة العاقبة ما يؤل اليه و نحوها, وما يعلم تأويله الاالله, والراسخون في العلم يقولون .. الخ, الاالله, الوقف, وما يعلم, في العلم, يقولون, الواو, واوالعطف, واوالاستيناف, الراسخون في العلم, أولوالالباب, الاالله والراسخون في العلم, والراسخون, آمنابه كل من عند ربنا, ومايذكرإلا أولوالألباب): as printed. The Quran phrases are kept in the printed script (as in Al-Baqarah); `npm run check` finds 9 of 13 longer quotations exact, 0 close-but-not-exact, and lists 4 as not from the Quran (the title سورة آل عمران and three lexical phrases), none of which is a Quran quotation.
- p. 710, "‘the trustworthy one of the community ( **امين الامة** ).": the quote is not closed in the print; mirrored. P. 716–717 Raghib's quotation opens with ‘ and is not closed; mirrored. P. 719 "… ഒന്നുമാണത്.,": mirrored.
- p. 721, അഥവാ "Or," (opening "Or, that is the reason …"): here it means "that is"; "or" is its rendering in the verse 7 panel ("(or inner meaning)"). Left.
- p. 720, രേഖകൾ "records" ("For neither opinion are there any records worth mentioning"): may mean "proofs"; left (open doubt 3).
- v. 9, "mankind (all)" for മനുഷ്യരെ(യെല്ലാം): the author's bracket follows the word; left.
- Table entry 68, "is from our (our) Rabb" for "നമ്മുടെ (ഞങ്ങളുടെ) റബ്ബിന്റെ": English has one "our" for the inclusive നമ്മുടെ and the exclusive ഞങ്ങളുടെ; left.
- `part.json` verses "1-9", pages "709-722", PDF pages "1-14": correct.

## Open doubts for the reviewer

1. **DOUBTs in the text**: ആ സൂറത്തിൽ (intro, p. 709); രണ്ടാമത്തെ വചനം (p. 720).
2. **ഇറക്കുക "bring down" / അവതരിപ്പിക്കുക "send down"**: this part keeps them apart (table entries 13, 19 and 42, where both stand in one gloss), as in Al-Baqarah part 51 ("sent (brought) down"); Al-Baqarah parts 01–38 render ഇറക്കുക "send down". One choice may be wanted.
3. **രേഖ "records"** (p. 720): may be "proofs" / "evidence"; first occurrence here.
4. **'Imran / Imran**: Al-Baqarah writes both "Al Imran" and "Al 'Imran" in its references; this part now has "'Imran" throughout (correction 9). The reviewer may want the earlier references made uniform.
5. **Earlier open doubts still apply** (not in this part): see Al-Baqarah parts.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| മുഹ്കം / മുഹ്കമായ | muhkam | ‘muhkam’ (in quotes as printed) |
| മുതശാബിഹ് / മുതശാബിഹുകൾ | mutashabih | ‘mutashabih’ / mutashabihs |
| തഅ്വീൽ | ta'wil | ta'wil |
| വ്യാഖ്യാനം / പൊരുൾ / അന്തസാരം / പര്യവസാനം | ta'wil | interpretation / inner meaning / inner essence / final outcome |
| ദുർവ്യാഖ്യാനം | — | misinterpretation |
| വക്രത / വക്ര ഹൃദയർ / വക്രബുദ്ധികൾ | zaygh | crookedness / crooked-hearted / crooked-minded |
| കുഴപ്പം | fitnah | disorder (as earlier parts) |
| അറിവിൽ അടിയുറച്ചവർ | al-rasikhuna fi al-'ilm | those firmly grounded in knowledge |
| ബുദ്ധിയുള്ളവർ / ബുദ്ധിമാൻമാർ / സൽബുദ്ധിമാൻമാർ | ulu al-albab | those who have intellect / men of reason / men of good reason (as Al-Baqarah 2:179, 2:269) |
| ഉറ്റാലോചിക്കുക | yadhdhakkaru | reflect intently (as earlier parts) |
| വിവേചനം | furqan | discrimination (as earlier parts) |
| ജീവത്തായുള്ളവൻ / സർവ്വനിയന്താവ് | al-hayy / al-qayyum | the One who is living / the Controller of all |
| പ്രതാപശാലി / അഗാധജ്ഞൻ / യുക്തിമാൻ | 'aziz / hakim | the Majestic / the Profoundly Knowing / the Sagacious (as earlier parts) |
| ശിക്ഷാനടപടി | intiqam | punitive action (as earlier parts) |
| പ്രദാനം ചെയ്യുക | wahaba | grant |
| വക്ഫ് | waqf | waqf (make waqf, waqfs) |
| വചനം / വാചകം / വാക്യം | — | verse / statement / sentence (open doubt 1) |
| നിവേദക സംഘം / സംഘം | — | deputation / band |
| മുബാഹല | mubahalah | ‘Mubahalah’ |
| കപ്പം | jizyah | tribute |
| പാതിരിമാർ | — | padres |
| മുഖവുര | — | the Preface |
