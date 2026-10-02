# Check: Al-Baqarah part 11 (verses 63–71)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 106–118 (book pp. 277–289), rendered at 150 dpi and read in full; every page of commentary and word tables was re-read at 250 dpi in two halves. The one footnote on p. 278 (Arabic only) was read at 900 dpi; the Arabic on pp. 278–280, 282–283 (مِيثَاقَ, طُّورَ, الطُّورَ, رَفَعْنَا فَوْقَكُمُ الطُّورَ, the two phrases in brackets on p. 279, ظَلَة, كَأَنَّهُ ظُلَّةٌ, نَتَقْنَا الْجَبَلَ فَوْقَهُمْ, الزَعزعة ـ الهزُ ـ الجذب ـ النفض, نتق الشيئ, سَبَت, يَوْمُ السبت, فِي السبت, العَقَبَة) at 600–1600 dpi. PDF page 119 (book p. 290) was also read.
- Scope: the part starts at the verse 63–64 panel on p. 277, directly after part 10's sentence on the literal meaning "those who have changed religion", and ends at the foot of p. 289 with the author's lead-in "Allah says:" (അല്ലാഹു പറയുന്നു:). P. 290 begins with the heading വിഭാഗം – 9 and the verse 72–73 panel. Keeping the lead-in in this part is right: it is the last sentence of the verse 67–71 commentary and stands on p. 289, as parts 03 and 06 kept theirs.
- `part.json`, `verses.json` (verses 63–71), `words.json` (110 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. No sentence is missing. The footnote of p. 278 (marker in the paragraph "As seen in the translation …") and the footnote of p. 283 (marker after "… took place in Madyan, near it.") are present, each after its paragraph.
- `verses.json` Malayalam and every `words.json` gloss were compared with the images; they match (the text layer of these pages is too broken to help). Printed forms kept: അതിന്ശേഷമായി (v. 64), എനി (v. 68 and word table), (അത്)ചെയ്യുമായിരുന്നില്ല (v. 71), ഞങ്ങൾക്ക് താങ്കൾ വേണ്ടി (word table v. 69), പിന്നിലുള്ള വർക്കും (word table v. 66), കല്പിക്കപ്പെടുന്നത് (word table v. 68).
- Quran quotations and cited phrases: `npm run check` reports for Al-Baqarah only the one known "close but not exact" item (تَابَ إِلَى الله, part 06); all 953 word-table entries match their verse.
- `[p. N]` markers 278–289 checked against the printed page numbers. Pp. 285–286 hold only the verse 68–71 panels and word tables, so the verse 67–71 commentary starts with `[p. 287]`. The group markers *[Verses 63–64]*, *[Verses 65–66]*, *[Verses 67–71]* match the panels on pp. 277, 281–282, 284–286 (navigation aids, not the author's words; see part 02's `check.md`).

## Corrections made (before → after)

### Meaning and wording (commentary.md)

1. p. 279, പുഴക്കുക ("uproot", as the author himself glosses جذبه واقتلعه with വലിച്ചു പുഴക്കിയെടുത്തു on p. 280, and പുഴക്കി ഉയർത്തപ്പെടുക, "uprooted and raised", in (2)). It had been rendered "shook", which is the author's word കുലുക്കം for الزعزعة:
   "(remember the occasion when We **shook** the mountain above them)" → "… We **uprooted** the mountain above them)"; "that We **shook** the mountain above them" → "that We **uprooted** the mountain above them".
2. p. 279, … അവരെ അവൻ എല്ലാം നഷ്ടപ്പെട്ടവരാക്കിയില്ല: നഷ്ടപ്പെട്ടവർ is "those who have lost" (as in the word table of v. 64); "losers" is the rendering of നഷ്ടക്കാർ (v. 64 and part 04):
   "He did not make them all **losers**." → "He did not make them all **into ones who have lost**."
3. p. 279/280, … അവരിൽ വീണുപോകുമെന്ന് അവർ കരുതി (…) എന്നും പറയുന്നു. The English had added a subject and turned it into a quotation ("it also says: they thought …"):
   "Besides all this, it also says: they thought that it would fall down upon them (…)." → "Besides all this, that they thought that it would fall down upon them (…) is also said."
4. p. 280, ഗൗരവത്തോടും is "with seriousness", not "reverence"; വിശ്വാസം is "belief" (part 10; and "belief is forced" on p. 281 in this part), സത്യവിശ്വാസം stays "true faith":
   "with eagerness and with **reverence** Seeing signs, surely, increases **faith**" → "with eagerness and with **seriousness** Seeing signs, surely, increases **belief**".
5. p. 280, statement (2): the English had reordered the sentence ("although they are not words so clear …, the gist being that …"). Put back in the author's order (… ചെയ്തുവെന്ന് സാരം, മറ്റൊരു വ്യാഖ്യാനത്തിനും … അല്ലെങ്കിലും …):
   → "That is, the gist is that the mountain was uprooted from the earth and raised and was held suspended in the air above them; although they are not words so clear as to leave no room for any other interpretation, when the words of the Quran are looked at, it is that very thing that becomes evident from them."
6. p. 281, ഇസ്റാഈലിന്റേതും is "Isra'il's", not "the Israelites'" (ഇസ്റാഈല്യർ):
   "it is, surely, **the Israelites'** and that of the Prophet Musa (a)" → "it is, surely, **Isra'il's** and that of …".
7. p. 281, കണ്ടേക്കുന്ന ഒരു മനുഷ്യൻ (-ഏക്കും = "may", as in parts 01, 02, 09):
   "a man who **sees** such a sign today" → "a man who **may see** such a sign today".
8. p. 281, മുഹമ്മദ് തിരുമേനിﷺ and തിരുമേനിയുടെ കൈക്ക് (തിരുമേനി had been dropped and replaced by "his"); the sentence order was also put back:
   "the time of Muhammad ﷺ" → "the time of **the noble** Muhammad ﷺ"; "In that state, it is, surely, the holy Quran … – even though many superhuman signs too have appeared **at his hand**." → "In that state – even though many superhuman signs too have appeared **at the hand of the noble Prophet** – it is, surely, the holy Quran that Allah decided upon as his direct sign."
9. p. 281, **a printed name had been silently corrected.** The image (600 dpi) prints സൂറത്തുൽ ഇസ്റാഈലിൽ ("in Surat al-Isra'il"); the English had "Surat al-Isra'". Now: "Surat al-Isra'il *[TN: printed സൂറത്തുൽ ഇസ്റാഈൽ ("Surat al-Isra'il"); the reference after the quotation is printed (ഇസ്റാഉ് 59), "Isra' 59". Translated as printed.]*". The TN rests only on the same paragraph.
10. p. 281, the author's rendering of Isra' 59: ഒട്ടകം is "camel" ("she-" was added); ദൃഷ്ടാന്തങ്ങളെയുംകൊണ്ട് അയക്കുക is "send with the signs"; അയക്കാറില്ല is habitual:
    "in sending the signs" → "in sending **with** the signs"; "We gave the **she-camel**" → "We gave the **camel**"; "We do not send the signs except …" → "We **are not wont to send with** the signs except …".
11. p. 281, a printed full stop was missing (… ഇസ്റാഇൽവെച്ചു കാണാം. إن شاء الله …): "in Su. Isra' إن شاء الله" → "in Su. Isra'. إن شاء الله".
12. p. 282 hadith, മാർഗദർശനം നൽകി ("guidance", part 01): "Allah has guided us to it." → "Allah has given us guidance to it."
13. p. 283, ശിക്ഷതന്നെ (തന്നെ dropped): "a punishment fit for their deed" → "a punishment **indeed** fit for their deed".
14. p. 283, കുറേയൊക്കെ സാമ്യം (as part 08, കുറേയൊക്കെ → "some"): "a good deal of resemblance" → "some resemblance".
15. p. 284, വേണ്ടതൊന്നും ("nothing that is needed"): "nothing good enters into them" → "nothing that is needed enters into them".
16. p. 284 hadith, ഒരു കൂട്ടരെ ("a group"; "a people" renders ജനത in the same paragraph): "destroys or punishes a people" → "destroys or punishes a group".
17. p. 287, തർക്കവും വഴക്കുമായി (വഴക്ക് is "quarrel", not "litigation"): "dispute and litigation" → "dispute and quarrel".
18. p. 287 and p. 288, വിശ്വാസദൗർബ്ബല്യം / വിശ്വാസത്തിന്റെ ദൗർബ്ബല്യം (see 4): "weakness of faith" → "weakness of belief"; "The weakness of their faith" → "The weakness of their belief".
19. p. 288, … സംഭവമെന്നോണം … ചിന്തിക്കുവാനും ഉതകുന്നു (എന്നോണം "as though", -ഉം "too" dropped); അതിനുണ്ടായിരിക്കയില്ല is "will not have"; ഗൗരവം as in 4:
    "as another independent event helps one to think specially" → "as though another independent event helps one, too, to think specially"; "it would not have this freshness and weight" → "it will not have this freshness and seriousness".
20. p. 288, മയത്തിലും നയത്തിലും: "courtesy" is used for മാന്യത on p. 289; നയം is "tact": "with gentleness and courtesy itself" → "with gentleness and tact itself".
21. p. 288, തിരുമേനിയെ സംബോധനചെയ്തിരുന്നതുപോലെ (no ﷺ printed there): "used to address the Prophet ﷺ" → "used to address the noble Prophet".
22. p. 289, തനി മഞ്ഞ (തനി, kept apart from ശുദ്ധ "pure" of v. 69); നേർമാർഗം is "the straight way" (v. 70, part 04), not "right guidance" (സന്മാർഗം); നിലം kept apart from ഭൂമി "ground"; പോരായ്മകൾ kept apart from ന്യൂനതകൾ "defects" of v. 71:
    "a pure yellow colour" → "a sheer yellow colour"; "we will attain right guidance" → "we will attain the straight way"; "ploughing the ground" → "ploughing the land"; "defects such as maiming and lameness" → "shortcomings such as maiming and lameness".
23. p. 279 TN on ظَلَة: the print (1600 dpi) has a fatha on the ل as well: "with a fatha on the ظ" → "with a fatha on the ظ and on the ل".

### verses.json

24. Verse 63: the panel prints its three blocks with no full stops between them (… ചെയ്ത സന്ദർഭം (ഓർക്കുക) നിങ്ങൾക്ക് … കൊള്ളുവിൻ അതിലുള്ളതിനെ … ചെയ്യുവിൻ നിങ്ങൾ …). Earlier parts do not add full stops in such places (part 09 v. 53, 57; part 10 v. 60) and join with lighter punctuation where English needs it (part 08 v. 50). "above you. Take what We gave you with strength (accept it). And remember what is in it. You may become" → "above you; take what We gave you with strength (accept it), and remember what is in it; you may become". Verses 68 and 71, where the panel blocks also have no stop, already mirror the print.
25. Verse 69, (ആയിരിക്കേണ്ടത്) "what it must be": "(that it must be)" → "(what it must be)".

### words.json

26. v. 69, فَاقِعٞ = തനി (ശുദ്ധ): "pure (unmixed)" → "sheer (pure)" (ശുദ്ധ is "pure" in the verse).
27. v. 71, ٱلۡأَرۡضَ = ഭൂമിയും (-ഉം dropped): "the ground" → "the ground too".
28. v. 71, وَلَا تَسۡقِي = നനക്കുകയില്ല ("and" was added): "and will not water" → "will not water".

No changes were needed in `part.json` (apart from the status). No misplaced footnotes or page markers, reversed negations, or Arabic changed from the print were found.

## Points the caller asked about

- **(a) The translator's three DOUBTs are kept.** (1) The p. 278 footnote is in Arabic only; at 900 dpi it is printed يغىان الواو عاطفعة على الاولى والحال على الثانى, exactly as transcribed; the page does not settle the reading of يغىان / عاطفعة. (2) p. 281: the image clearly prints the negative (… വലിയൊരു ദൃഷ്ടാന്തമല്ല മല ഉയർന്നതെന്ന് ആലോചിച്ചു നോക്കിയാലറിയാം); translated as printed; the author's text does not clearly settle whether a question was meant. (3) p. 280 ആയിരുന്നുവെങ്കിൽ: printed clearly; the literal "if (it) was" is kept with the DOUBT.
- **(b) TN on ظَلَة (p. 279): kept.** It is not a punctuation slip: the vowels and the missing shadda change the very word the author is defining, and the TN rests only on the phrase quoted in the same paragraph (كَأَنَّهُۥ ظُلَّةٞ), not on outside knowledge. Corrected to mention the fatha on the ل (correction 23).
- **(c) p. 279 phrase built from the data file without وَ:** at 1600 dpi the first phrase in the bracket (رَفَعۡنَا فَوۡقَكُمُ ٱلطُّورَ) is printed in the Uthmani font (wasla, the Uthmani sukun) and has no و, so the translator's form matches the print. The second (رَفَعْنَا فَوْقَهُمُ الطور) is in ordinary spelling and is transcribed as printed. On p. 278, رَفَعْنَا فَوْقَكُمُ الطُّورَ (ordinary spelling, no و) is transcribed as printed; the other cited phrases have the same words as the verses and stay in the data-file form, as in parts 04, 08, 09.
- **(d) Panel blocks:** see correction 24.
- **(e) ഉറപ്പ്** ("assurance") is new; ഉടമ്പടി ("covenant") and കരാർ ("pact") keep part 04's renderings, so the three words on p. 278 stay distinct.
- **(f) Arabic spot-checked** at 600–1600 dpi (list above); all as transcribed.

## Checked and left as they are

- **മല and പർവ്വതം** are both "mountain" (pp. 278–281). The author uses them for the same mountain in the same discussion (his own gloss of الجَبَل is (മല); of طُور, പർവ്വതം). English has no second plain word that would not mislead ("hill" would change the meaning). Left; noted for the reviewer.
- **Quotation marks around cited words** ('O Prophet', 'Musa', 'to Allah', the demand 'You must pray …', pp. 288–289): the print has none, but they mark words the author is mentioning; no wording is added. Left.
- **"Midian"** for the author's gloss (മിദ്യാൻ) and "Horeb" (p. 283 footnote): Bible names policy of parts 09–10.
- **"Ma'idah 63"** (p. 284): printed so; no note (any comment would rest on outside knowledge).
- **[p. 288] marker** after "quibbling questions.": p. 288 begins with പര്യാപ്തമാണല്ലോ ("is sufficient"), which English puts earlier; the marker sits at the end of the sentence, the nearest clean point. Acceptable, as in earlier parts.
- **Unclosed marks mirrored silently:** the opening ‘ of the shabbat summary (p. 282), the closing ” of 'Abduh's statement (2) with no opening (p. 280), the bracket "(Continuing, he quotes …" (p. 280), "(Gist: …" (p. 281).
- `part.json` verses "63-71", pages "277-289", PDF pages "106-118": correct.

## Open doubts for the reviewer

1. **Footnote, p. 278** (Arabic only, يغىان … عاطفعة). Translator's DOUBT kept.
2. **p. 281, "is not a great sign like the Red Sea's splitting …"** (printed negative). Translator's DOUBT kept; not changed.
3. **p. 280, ആയിരുന്നുവെങ്കിൽ** ("if it was" / "as to whether it was"). Translator's DOUBT kept.
4. **Surat al-Isra'il** (p. 281), new TN (correction 9): please confirm whether to keep it as printed with the note.
5. **മല / പർവ്വതം** both "mountain" (see above).
6. **Earlier open doubts still apply** (not in this part): the hadith abbreviations including ജ (part 01), പതിച്ചവരാണവർ (part 02), വേദവാദികൾ and അമറാത്തി (part 03), ഇവിടെ അതുകൊണ്ട് വിവക്ഷ (part 04), the word order of Ibn Kathir's Arabic (part 05), السهوانى and "Profoundly Knowing" (part 06), പിൻപറ്റിയേക്കുന്നതാണ്, ലക്ഷ്യം, ദാ, وممن الله التوفيق and شجرة الخلد (part 07), the four doubts of part 08, the doubts of part 10, and the group markers (part 02).

## New terms (not in the glossary; used consistently in this part)

The translator left no separate list; these are the new terms in the files. Flagged for Rizwin to confirm:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഉറപ്പ് | mithaq (ميثاق) | assurance (ഉടമ്പടി covenant, കരാർ pact, as in part 04) |
| പ്രതിജ്ഞ | — | vow |
| ത്വൂർ | al-Tur (الطور) | Tur |
| പർവ്വതം / മല | jabal (الجبل) | mountain (both) |
| പുഴക്കുക | nataqa (نتق) | uproot |
| പ്രകൃതി ദൃഷ്ടാന്തം | ayah kawniyyah (آية كونية) | natural sign |
| പ്രകൃതി നിയമങ്ങൾ / ചട്ടങ്ങൾ | — | laws of nature / rules of nature |
| അൽഉസ്താദുൽഇമാം | al-Ustadh al-Imam | al-Ustadh al-Imam |
| സബ്ത്ത് / ശബ്ബത്ത് | al-sabt (السبت) | sabt / shabbat |
| കുരങ്ങുകൾ / ഹീനൻമാർ | qiradah khasi'in | apes / despicable |
| ശിക്ഷാപാഠം / പാഠം നൽകുന്ന ശിക്ഷ | nakal (نكال) | lesson of punishment / lesson-giving punishment |
| സദുപദേശം | maw'izah (موعظة) | good counsel |
| ഉപായം | — | stratagem |
| വിഡ്ഢികൾ / വിവരമില്ലാത്തവർ | al-jahilin (الجاهلين) | fools / those without knowledge |
| ബലി അറുക്കുക / അറുക്കുക | dhabaha (ذبح) | slaughter in sacrifice / slaughter |
| വധം / ഘാതകൻ | — | murder / murderer |
| മൃതദേഹം | — | dead body |
| നേർമാർഗം പ്രാപിക്കുക | muhtadun (مهتدون) | attain the straight way |
| തനി / ശുദ്ധ | faqi' (فاقع) | sheer / pure |
| ന്യൂനതകൾ / പോരായ്മകൾ | — | defects / shortcomings |
| വിശ്വാസം | iman | belief (as in part 10; സത്യവിശ്വാസം stays "true faith") |
| ഗൗരവം | — | seriousness |
| വക്രതാൽപര്യക്കാർ / തൽപരകക്ഷികൾ | — | people with crooked interests / interested parties |
| പക്വത / പക്വപ്രായം | — | maturity / age of maturity |
| മുട്ടുചോദ്യം | — | quibbling questions |
