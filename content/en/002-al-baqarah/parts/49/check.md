# Check: Al-Baqarah part 49 (verses 278–281)

Checked on 2026-10-22 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 500–505 (book pp. 671–676). Each page was rendered at 150 dpi and read once in full beside the full `ml2uni` text layer (this part has no footnotes). PDF p. 506 (book p. 677) was checked in the text layer only. `pdftotext -bbox` was used for the vowel marks and word boxes of every Arabic phrase in the commentary. No crops were needed. The amanithafseer.com text was used only through the translator's notes on site-vs-book differences.
- **Boundaries.** Part 48 ends on p. 671 with the lead-in line "… അല്ലാഹു അറിയിക്കുന്നു:-"; the verse 278 panel follows directly on the same page (no heading). This part starts there. It ends on p. 676 with "… ചില രിവായത്തുകളിൽ വന്നിരിക്കുന്നു. اللّه اعلم", the last line of the page; p. 677 opens with the heading "വിഭാഗം - 39" and the verse 282 panel. Both boundaries are confirmed.
- `part.json`, `verses.json` (verses 278–281), `words.json` (34 entries: 278: 7; 279: 10; 280: 8; 281: 9), `commentary.md`.
- Group: *[Verses 278–281]*: panels 278–279 on p. 671 (279 runs on to p. 672), 280–281 on p. 672; one word table pp. 672–673; one commentary pp. 673–676. Right.
- Every English sentence was compared with the Malayalam on the images, in order. No sentence is missing and none is added.
- `verses.json` and every `words.json` gloss match the images in the printed order, including എനി (279 panel and table), "അല്ലാഹുവിങ്കൽ നിന്നും" (spaced: a line break in the text layer), "(പോരാട്ടത്തെ)പ്പറ്റി" (the text layer has a stray "-"; none on the image), "ചെയ്യപ്പെടുകയില്ലതാനും" (one token) and the full stop after the last 281 gloss. No ZWNJ is printed in these items or in the files.
- The 280 panel prints its second sentence ("നിങ്ങൾ ധർമമാ(ക്കി …") as a separate block beside its own Arabic line. As in every earlier part (no earlier `verses.json` entry has a line break), the verse stays one string. Left.
- `[p. N]` markers 673–676. Pp. 671–672 hold only panels and the table start, so they have no marker (as parts 42–48). [p. 673] stands at the start of the commentary below the table. Page turns: "wron*[p. 674]*ged" (അക്രമിക്കപ്പെ/ടുകയും), "exis*[p. 675]*tence" (നിലവിലി/ല്ലാത്തപ്പോൾ), "abi*[p. 676]*lity" (കഴിവില്ലാ/ത്തവരെ). The mid-word form is the one of parts 43–48. All are right.
- Honorifics: ﷺ printed 9 times (p. 673: 1; p. 674: 1; p. 675: 5; p. 676: 2); the English has 9, none at the bare തിരുമേനി (p. 673 twice, p. 676 once: "the noble Prophet", 3 in the English). (r) printed 8 times (p. 673 Suddi; p. 674 Abu Bakr, 'Attab; p. 675 Abu Qatadah three times, Abu Sa'id; p. 676 Abu Qatadah); the English has 8. The Arabic رضـ after عَتَاب ابن اسيد and القرظى stays Arabic. (a): none.

## Corrections made (before → after)

### Renderings brought into line with earlier parts

1. p. 674, കൊലശിക്ഷക്കും: an earlier term table has കൊലശിക്ഷ "death penalty". "they will also be subject to the punishment of killing" → "they will also be subject to the death penalty".
2. p. 674, വാസ്തവത്തിൽ: "(in reality)" in the verse panels of parts 02, 15, 33, 34. "In fact, if the said …" → "In reality, if the said …".
3. p. 674 and p. 676, പിൻതിരിയുക: "turn back" in the part 34 table (പിൻതിരിയുന്ന "turning back", പിൻതിരിപ്പിക്കുന്നത് "make you turn back"). "those who do not turn away and return from interest" → "… turn back and return …"; "goes forward without turning away" → "… without turning back".
4. p. 675, ബാധിക്കുക: "befall" in the earlier tables ("will not befall", "there befell") and in part 48. "if straitness affects the debtor" → "if straitness befalls the debtor"; "for those whom straitness has affected" → "… has befallen"; "a calamity affected the fruits" → "a calamity befell the fruits". (See open doubt 3 for the fourth use.)

### One English per Malayalam word

5. p. 674, സംഘട്ടനം: part 41 (2:249) renders ഏറ്റുമുട്ടാൻ "(to clash)", and this part keeps that for ഏറ്റുമുട്ടുവാൻ (p. 674, "no ability to clash with Allah"), so സംഘട്ടനം needs another word. "struggles and clashes" → "struggles and conflicts"; "‘capitalist- labourer’ clashes" → "… conflicts"; "the said clashes and tugs-of-war" → "the said conflicts and tugs-of-war".
6. p. 673, മടക്കിക്കൊടുക്കുവാൻ: തിരിച്ചു കൊടുക്കുക is "give back" in the same paragraph; മടക്കുക is "return" in this part (p. 675 മടക്കേണ്ടിവരുന്ന "made to return"). "compelling to give it back" → "compelling to return it".
7. p. 673, "തങ്ങൾക്ക് കിട്ടേണ്ടുന്ന ആ സംഖ്യ": കിട്ടുക is "get" in this part. "that sum which was due to them" → "that sum which they were to get".

### Punctuation added

8. p. 676, (4), "… ബന്ധനത്തിലാക്കുകയും ചെയ്യാമെന്ന് സാരം.": no dash is printed (a dash would read as the author's, as part 48 correction 8). "put him in bonds – that is the gist." → "put him in bonds is the gist."

No dropped തന്നെ/-ഉം/എന്നോണം or list items, may/will errors, -ഉം futures rendered as present, tense or voice changes, reversed or "fixed" negations, changed reported speech, dropped or replaced തിരുമേനി, added ﷺ, re-ordered sentences, silently corrected names or misprints, misplaced notes, translator words in round brackets, or added or re-vowelled Arabic were found apart from the above.

## Points the caller asked about

- **(1) DOUBT (p. 675), ഇളവുകൾ പെയ്യുന്നത്.** Clearly printed പെയ്യുന്നത് (image and text layer). The meaning of the sentence is clear either way, but whether the author meant "pour/shower" (figurative) or the print has a slip for ചെയ്യുന്നത് cannot be settled from the page, so a DOUBT (not a TN) is right. The English keeps the printed word ("the pouring … of relaxations") and the DOUBT gives both readings. Kept.
- **(2) No TNs.** The print has മഖ്സൂം (p. 673) and മഖ്സും (p. 674); both rendered "Makhzum". Earlier parts give one English for a word printed in two spellings when only the spelling differs (e.g. സക്കാത്ത് / സകാത്ത് both "Zakat" in part 48), so this is not a silent correction. Kept, no TN. Names checked against earlier parts: Zaid (part 39 "Zaid ibn Arqam"), Suddi (part 05), Mughirah (part 16), Qatadah (earlier parts), Jibril, 'Amr, "ibn" for -ബ്നു- (as "Hasn ibn 'Ali", part 48): consistent. Ibn Jurayj, Muqatil, Thaqif, Banu 'Amr (ബനൂ, not ബാനീ), 'Attab, Muhammad ibn Ka'b, Abu Qatadah: first occurrences, following the print.
- **(3) Markers and counts**: see "What was compared". 34 word-table entries; ﷺ 9, (r) 8 as printed. The 280 panel's second block: see "What was compared".
- **(4) Arabic as printed** (bbox marks and word boxes; codepoints compared with the file):
  - عَتَاب ابن اسيد رضـ (p. 673): fatha on ع and ت only; four spaced words; initial-form ض with a tatweel, no dot. As in the file.
  - يَمْحَقُ اللَّهُ الرِّبوا (p. 674): fatha on ي and ح, sukun on م, damma on ق; shadda+fatha on the lam of الله and damma on ه; shadda+kasra on ر; ب, و, ا bare; gaps 1.47 pt (spaced). As in the file.
  - وان تبتمفلكم رؤس اموالكم (p. 675): bare; وان|تبتم 1.65 pt, تبتم|فلكم 0.71 pt (joined), فلكم|رؤس 2.9 pt, رؤس|اموالكم 2.6 pt. As in the file.
  - القرظى رضـ (p. 675): bare, spaced (2.7 pt), tatweel. As in the file.
  - اللّه اعلم (p. 676): graphic, bare, at the end of the last line; placed at the end of the paragraph, as parts 39–48.
  - `npm run check` lists 23 Al-Baqarah "close but not exact" items: the 22 of earlier parts and وان تبتمفلكم رؤس اموالكم. The list is identical before and after my edits; no other new item.
- **(5) Site-vs-book differences**: the translator's notes were spot-checked on the images (278 panel "പലിശയിൽനിന്നും", "വിട്ടുകളയുകയും"; 280 panel "(ഉണ്ടാകുന്നത്)", "(വേണ്ടത്)"; 281 panel "ദിവസത്തെ"; table "നിങ്ങൾ അറിഞ്ഞുകൊള്ളുക", "ചെയ്യപ്പെടുകയില്ല."; p. 673 ‘നിങ്ങൾ സത്യവിശ്വാസികളാണെങ്കിൽ’, ﷺ for the site's (صَلَّى …); p. 675 the Arabic outside the quote; p. 676 കടബാധ്യതയിൽനിന്ന്, اللّه اعلم). The book is followed in each.
- **(6) Terms**, checked by grep against earlier term tables, word tables and verse panels:
  - As earlier parts: സൂക്ഷിക്കുക "guard against" (ittaqa); ഉപേക്ഷിക്കുക "abandon" (part 03 table); ഞെരുക്കം / ഞെരുക്കക്കാരൻ "straitness / man of straitness" (parts 29, 38, 39); സൗകര്യം / എളുപ്പം "convenience / ease" (part 29 table "ease (convenience)"); ഇളവ് / ഒഴിവ് / ഒഴിവാക്കുക "relaxation / exemption / exempt"; ശാസിക്കുക "charge" ("be charged"); ഓർമിപ്പിക്കുക "remind"; ഉണർത്തുക "alert"; ആപത്ത് "calamity"; മാനം "esteem" (part 46); ബന്ധനം "bonds"; ശാശ്വതം "everlasting"; രിവായത്ത് "riwayah"; യഥാർത്ഥ "real"; സമരം "struggle"; അവധി "term"; ഇടപാട് "deal"; വിധിവിലക്കുകൾ "injunctions and prohibitions" (part 48); ദ്രോഹം "injury"; സ്വത്ത് "property"; ധനം "wealth"; മൂലധനം "capital"; ഭരണാധികാരി "ruler"; വാഴ്ച "reign" (രാജവാഴ്ച); പൊറുക്കുക / മാപ്പാക്കുക "forgive / pardon"; മടക്കപ്പെടുക "be returned"; സമ്പാദിച്ചുണ്ടാക്കുക "earn and make" (part 46). Corrections 1–7.
  - Kept apart inside this part: വിട്ടുകളയുക / ഉപേക്ഷിക്കുക / വിട്ടുകൊടുക്കുക "leave off / abandon / remit"; വാങ്ങുക / വാങ്ങിപ്പറ്റുക / കൈപ്പറ്റുക / മേടിക്കുക / കിട്ടുക / ലഭിക്കുക "take / take in / receive / acquire / get / obtain"; വീട്ടുക / തീർക്കുക / കൊടുത്തു തീർക്കുക / തന്നു തീർക്കുക "repay / settle / pay off / pay up"; അമാന്തം / താമസം "delay / postponement"; യുദ്ധം / പോരാട്ടം / സമരം / സംഘട്ടനം / ഏറ്റുമുട്ടുക / വടംവലി "war / combat / struggle / conflict / clash / tug-of-war"; അക്രമം ചെയ്യുക / അക്രമിക്കുക / അനീതി "do wrong / wrong / injustice"; ഭരണം / ഭരണകൂടം / ഭരണാധികാരി / വാഴ്ച "rule / government / ruler / reign"; ഓർമിപ്പിക്കുക / അനുസ്മരിപ്പിക്കുക / ഉണർത്തുക "remind / call to the minds of / alert"; തിരിച്ചു കൊടുക്കുക / മടക്കിക്കൊടുക്കുക "give back / return".

## Checked and left as they are

- p. 673, "In the 1st verse, first, He has alerted …", p. 674 "He will not allow …", p. 676 (2) "He will also destroy it": no subject is printed; the English needs one, and round brackets are the author's. Left (as part 47).
- p. 673, "the Thaqif people; also said …": the semicolon is printed; mirrored. "പറയുകയും ചെയ്തു" "also said": the -ഉം is kept.
- p. 675, (1), "‘…’ എന്ന് റസൂൽﷺ പറയുന്നത് ഞാൻ കേട്ടിരിക്കുന്നു": the quotation closes with a full stop before എന്ന്; the English "… remit to him.’ I have heard the Rasul ﷺ saying so." follows the print. (3) opens a second quote inside the first and closes only one; mirrored. P. 676 (1) has no opening quote and its explanation ends with ’ and no full stop; (2) ends without a full stop; mirrored.
- p. 675, വാങ്ങിയിരുന്ന ഫലങ്ങളിൽ "the fruits that a man had bought": വാങ്ങുക is "take" elsewhere in this part, but here it can only mean "buy". Left (open doubt 4).
- p. 676, (5), അയാൾ "the man": a third-person pronoun for one just mentioned; left.
- `part.json` verses "278-281", pages "671-676", PDF pages "500-505": correct.

## Open doubts for the reviewer

1. **DOUBT in the text**: ഇളവുകൾ പെയ്യുന്നത് (p. 675).
2. **മുതൽ and സ്വത്ത് both "property"** across parts: the earlier term table has സ്വത്ത് "property" (amwal), part 48 renders മുതൽ "property", and this part has both in one gloss (رُءُوسُ أَمْوَالِكُمْ "the capital of your properties, the principal property", for "സ്വത്തുക്കളുടെ മൂലധനം, അസ്സൽ മുതൽ"). Not caused by this part; the reviewer may settle one English for each.
3. **ബാധിക്കുക** (p. 675) "This is a command that affects all debtors": "befalls" would not read here, so "affects" was left in this one place; the other three uses are "befall" (correction 4).
4. **വാങ്ങുക "take" / "buy"**: see "Checked and left".
5. **മേടിക്കുക "acquire"** (p. 676, (2), twice): part 08 renders മേടിക്ക(സ്വീകരിക്ക)പ്പെടുക "be taken (accepted)"; here "take" is വാങ്ങുക in the same passage, so a separate word was kept.
6. **Makhzum** for മഖ്സൂം (p. 673) and മഖ്സും (p. 674): see point (2).
7. **Earlier open doubts still apply** (not in this part): see parts 13–48.

## New terms (not in the glossary; used consistently in this part)

The translator's list (given in the brief), checked against the files, with the corrections above:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| സൂക്ഷിക്കുക | ittaqa | guard against (as earlier parts) |
| വിട്ടുകളയുക / ഉപേക്ഷിക്കുക / വിട്ടുകൊടുക്കുക | dharu / tasaddaqu | leave off / abandon (as part 03) / remit |
| ധർമമാക്കുക / ധർമം നൽകുക | tasaddaqu | make charity / give charity |
| ഞെരുക്കം / ഞെരുക്കക്കാരൻ | 'usrah | straitness / man of straitness (as earlier parts) |
| സൗകര്യം / സാധ്യത / എളുപ്പം | maysarah | convenience / possibility / ease (as part 29) |
| നോക്കൽ / കാത്തിരിക്കൽ | nazirah | looking / waiting |
| യുദ്ധം / പോരാട്ടം / സമരം / സംഘട്ടനം / ഏറ്റുമുട്ടുക / വടംവലി | harb | war / combat / struggle / conflict (correction 5) / clash (as part 41) / tug-of-war |
| അക്രമം ചെയ്യുക / അക്രമിക്കുക / അനീതി | zulm | do wrong / wrong / injustice (as earlier parts) |
| മൂലധനം / അസ്സൽ മുതൽ / സ്വത്ത് / ധനം | ru'us amwal | capital / principal property / property / wealth (open doubt 2) |
| കടസംഖ്യ / പലിശസംഖ്യ / കടബാധ്യത / കടമിടപാടുകാർ | — | debt-sum / interest-sum / debt-liability / debt-dealers |
| മടങ്ങുക / ഖേദിച്ചു മടങ്ങുക / പശ്ചാത്തപിക്കുക / പിൻതിരിയുക / വിരമിക്കുക | tubtum | return / return in regret / repent / turn back (correction 3) / desist |
| മടക്കുക / മടക്കിക്കൊടുക്കുക / തിരിച്ചു കൊടുക്കുക | — | make to return / return (correction 6) / give back |
| വാങ്ങുക / വാങ്ങിപ്പറ്റുക / കൈപ്പറ്റുക / മേടിക്കുക / കിട്ടുക / ലഭിക്കുക | — | take / take in / receive / acquire (open doubt 5) / get (correction 7) / obtain |
| വസൂലാക്കുക / പിരിഞ്ഞുകിട്ടുക | — | recover / be collected |
| വീട്ടുക / തീർക്കുക / കൊടുത്തു തീർക്കുക / തന്നു തീർക്കുക | — | repay / settle / pay off / pay up |
| ഒഴിവ് / ഇളവ് / ഒഴിവാക്കുക | — | exemption / relaxation / exempt (as earlier parts) |
| അമാന്തം / താമസം / അവധി | — | delay / postponement / term |
| ഏൽപിക്കുക / ഏൽപന | hawalah | hand over / handing-over |
| ബാധിക്കുക | — | befall (correction 4; open doubt 3) |
| ശാസിക്കുക | — | charge (as earlier parts) |
| ഓർമിപ്പിക്കുക / അനുസ്മരിപ്പിക്കുക / ഉണർത്തുക | — | remind / call to the minds of / alert |
| ഭരണം / ഭരണകൂടം / ഭരണാധികാരി / വാഴ്ച | — | rule / government / ruler / reign |
| ജനരോഷം / പ്രതിഷേധം | — | public indignation / protest |
| കൊലശിക്ഷ / ബന്ധനം | — | death penalty (correction 1) / bonds (as earlier parts) |
| മാനം | 'ird | esteem (as part 46) |
| ആപത്ത് / ദുഃഖം | — | calamity (as earlier parts) / distress |
| താൽക്കാലികം / ശാശ്വതം | — | temporary / everlasting |
| രിവായത്ത് | riwayah | riwayah (as earlier parts) |
| വാസ്തവത്തിൽ / യഥാർത്ഥ | — | in reality (correction 2) / real |
| ഇളവുകൾ പെയ്യുന്നത് | — | the pouring of relaxations (DOUBT) |
