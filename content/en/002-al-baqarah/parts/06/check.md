# Check: Al-Baqarah part 06 (verses 31–37)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 56–65 (book pp. 227–236), rendered at 150 dpi and read in full, including both footnotes (p. 229, p. 236). Every page of commentary was re-read at 250 dpi in two halves; the verse panels and word tables (pp. 227–228, 230, 232–233, 235) at 300 dpi; the Arabic words هُمْ, أَللهُ أَعْلَم, جَنَّةٌ / جَنٌّ, الْجَنَّة, عدن, فردس, تَابَ إِلَى الله, تَابَ الله عَلَيْهِ and the footnote on p. 236 at 900–2400 dpi. The `ml2uni.py` text layer was used only for spelling.
- Scope: the part starts at the verse 31–33 panel lower on p. 227 (after part 05's lead-in "Allah points out the basis of man's superiority:") and ends on p. 236 with the author's lead-in "Allah says:" (അല്ലാഹു പറയുന്നു:), directly above the verse 38–39 panel. Both boundaries confirmed.
- `part.json`, `verses.json` (verses 31–37), `words.json` (88 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. No sentence is missing or added. Both footnotes are present, each right after its paragraph (the (\*) of p. 229 is in the paragraph ending أَللهُ أَعْلَم; the (\*) of p. 236 ends the 'Amr ibn Thabit paragraph).
- `verses.json` Malayalam and every `words.json` gloss were compared letter by letter with the images; they match. Printed forms kept: the full stop after പഠിപ്പിച്ചതല്ലാതെ. (verse 32), പറഞ്ഞുകൊടുത്തപ്പേൾ and പേരുകളെപ്പററി and the unclosed quotation (verse 33), നിങ്ങൾ(രണ്ടുപേരും)ഉദ്ദേശിച്ചേടത്തുനിന്ന് with no spaces (word table, verse 35), നിങ്ങൾക്കുണ്ട്താനും (word table, verse 36).
- Quran quotations (2:31 phrase, 2:34 phrase, 2:36 phrase, 20:118 phrase, 7:22 phrase, 7:23) are copied from `data/quran-uthmani.json`; `npm run check` passes. The one "close but not exact" item for Al-Baqarah, تَابَ إِلَى الله (p. 236), is the author's Arabic usage example (with his gloss "(അവൻ അല്ലാഹുവിങ്കലേക്ക് മടങ്ങി)"), not a Quran quotation; confirmed on the image.
- `[p. N]` markers 228–236 checked against the printed page numbers. P. 227 holds only the end of part 05 and the verse 31–33 panel, so it has no marker. Glossary renderings (Lord for രക്ഷിതാവ്, Rabb where the author writes റബ്ബ്, the Ever-Merciful for കരുണാനിധി, (r), (a), ﷺ) and earlier parts' renderings (khalifah / khilafah, angels, sujud, tasbih, taqdis, wise secrets, Quran commentators, riwayah, the Day of Qiyamah, disbelievers, deniers of the truth, the losers, Paradise, mate, Hawwa') are used.

## Corrections made (before → after)

### Arabic transcribed as printed (p. 234)

1. At 1200–2400 dpi the last letter of both words carries the same open hook mark as the sukun on the د of عدن and the ر of فردس (the same mark the book uses for sukun, e.g. on the م of هُمْ, p. 229). The English had tanwin:
   "**عَدْنٌ**" → "**عَدْنْ**"; "**فِرْدَسٌ**" → "**فِرْدَسْ**" (also in the TN that follows it).

### Meaning / wording

2. p. 233, ഏടാകൂടങ്ങൾ means tangles, complications, not neutral "arrangements" (softened):
   "because of the arrangements that man has made" → "because of the entanglements that man has made".
3. p. 236, അതിരുകവിഞ്ഞ ഒരു വിഭാഗമായ റാഫിദ്വ: it is the section (the Rafidah) that has gone beyond bounds; the English could be read as saying it of the whole Shi'a party:
   "a section in the Shi'a party that has gone beyond bounds" → "a section in the Shi'a party, one that has gone beyond bounds".

### Translator's notes

4. p. 229 footnote TN (the masculine pronouns). The old TN called -ന്മാർ in സൂര്യചന്ദ്രന്മാർ a "masculine personal plural ending"; the author's point is that a plural used for persons is applied to the sun and moon. Reworded to explain only what is printed:
   "അവൻ ('he', masculine), അവൻമാർ ('they', masculine personal plural) and സൂര്യചന്ദ്രന്മാർ ('the sun and moon', with the masculine personal plural ending)." → "അവൻ ('he', the masculine pronoun), അവൻമാർ ('they', the plural of അവൻ) and സൂര്യചന്ദ്രന്മാർ ('the sun and moon', with the plural ending -ന്മാർ that is used for persons). The English words cannot show this."
5. p. 234 TN on 'Bible Dictionary': "the Malayalam title is വേദപുസ്തക നിഘണ്ടു." → "printed 'വേദപുസ്തക നിഘണ്ടു' (literally 'Bible dictionary'); the page does not say which dictionary is meant." (The capitalised English could suggest one known book.)
6. p. 236 footnote: the TN relied on outside knowledge (that the author of Siyanat al-Insan is "usually known as al-Sahsawani"). The image clearly prints السهوانى (900 dpi). Made a DOUBT:
   "*[TN: the name is printed السهوانى; the author of Siyanat al-Insan is usually known as al-Sahsawani (السهسواني). Transcribed as printed.]*" → "*[DOUBT: the name is printed clearly as السهوانى (al-Sahwani) and is transcribed as printed. The author of a book of this title is usually named al-Sahsawani (السهسواني); this cannot be confirmed from the page. Please check whether to note a printing slip.]*"

No changes were needed in `verses.json` or `words.json`. No dropped sentences, misplaced footnotes or page markers, reversed negations, may/will or tense errors were found.

## Checked and left as they are

- **TN, verse 32** (full stop after പഠിപ്പിച്ചതല്ലാതെ, നിശ്ചയമായും after "no knowledge at all"): confirmed at 300 dpi. Correct.
- **TN, p. 234, unclosed quotation before "Mu'tazilah"**: an opening ' stands before മുഅ്തസില and no closing mark follows. Correct.
- **TN, p. 234, فِرْدَسْ without و**: the image prints فردس with no و; the Malayalam beside it reads ഫിർദൗസ്. Correct (vowel mark now as printed, see correction 1).
- **TN, p. 234, extra closing bracket** after "മുതലായവ നോക്കുക)": correct.
- **TN, p. 235, single bracket with the 7:23 Arabic**: one round bracket is printed with the Arabic; no matching bracket. Correct.
- **جَنَّةٌ and جَنٌّ (p. 233)**: the mark over the last letter is a closed-loop mark, different from the open sukun hook of p. 234; read as tanwin, as the translator did. **الْجَنَّة (p. 234)**: left.
- **أَللهُ أَعْلَم, والله أعلم, تَابَ الله عَلَيْهِ**: the word Allah is printed as the usual ligature; transcribed without the shadda, as in earlier parts.
- **"in Aden"** (p. 234, അദനിലോ): Aden is the ordinary reading of അദൻ in a list with Palestine and Iraq; left.
- **"may be done to Allah alone"** (p. 230, ചെയ്തുകൂടൂ): meaning "is permitted only to Allah"; left.
- **Group markers** *[Verses 31–33]*, *[Verse 34]*, *[Verses 35–36]*, *[Verse 37]*: **not the author's words**; navigation aids kept as in parts 01–05. They match the author's groups on the images (panels on pp. 227, 230, 232, 235). See the note in part 02's `check.md`.
- `part.json` verses "31-37", pages "227-236", PDF pages "56-65": correct.

## Open doubts for the reviewer

1. **السهوانى** (footnote, p. 236). New DOUBT (correction 6): printed السهوانى; the usual name is al-Sahsawani. Please decide whether to keep it as printed with a note.
2. **"Profoundly Knowing" for അഗാധജ്ഞൻ (al-Hakim)**: see New terms. The author's own explanation on p. 230 is "the Profoundly Knowing who does everything wisely" (എല്ലാം യുക്തിപൂർവ്വം പ്രവർത്തിക്കുന്ന അഗാധജ്ഞൻ). The usual English for al-Hakim is "the All-Wise"; the translator followed the Malayalam word (അഗാധം = deep, ജ്ഞൻ = one who knows). This recurs many times in the Quran, so one decision is needed.
3. **Earlier open doubts still apply** (not in this part): ലക്ഷ്യം (parts 01–02), the hadith abbreviations (part 01), പതിച്ചവരാണവർ (part 02), വേദവാദികൾ and അമറാത്തി (part 03), ഇവിടെ അതുകൊണ്ട് വിവക്ഷ (part 04), the word order of Ibn Kathir's Arabic (part 05), and the group markers (part 02).

## New terms (not in the glossary; used consistently in this part)

Includes the translator's list. Flagged for Rizwin to confirm:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| സർവ്വജ്ഞൻ | al-'Alim (العليم) | the All-Knowing |
| അഗാധജ്ഞൻ | al-Hakim (الحكيم) | **the Profoundly Knowing** (new; the usual English is "the All-Wise"; please decide) |
| മഹാപരിശുദ്ധൻ (സുബ്ഹാനക) | subhanaka | You are the Supremely Holy |
| സുജൂദ് | sujud | sujud (as in part 05) |
| ഇബ്ലീസ് | Iblis | Iblis |
| പിശാച് / ശൈത്വാൻ | al-shaitan | Satan / Shaitan |
| സ്വർഗം / ജന്നത്ത് | al-jannah | Paradise (as in part 04) / 'jannat' where the author writes ജന്നത്ത് |
| തോപ്പ് / തോട്ടം | — | garden |
| ഇണ | zawj (زوج) | mate (as "mates" in part 04) |
| അക്രമികൾ / അക്രമം | al-zalimun / zulm | wrongdoers / wrongdoing |
| പശ്ചാത്താപം / പശ്ചാത്താപം വളരെ സ്വീകരിക്കുന്നവൻ | tawbah / al-Tawwab | repentance / the One who greatly accepts repentance |
| ബുദ്ധിജീവികൾ | — | rational beings |
| അഹംഭാവം / ഗർവ്വ് / അഹങ്കാരം | istikbar / kibr | arrogance / pride / conceit |
| ധിക്കാരം | — | defiance |
| വ്യാജ ഹദീഥ് | — | fabricated hadith |
| റാഫിദ്വ / റാഫിദീ | al-Rafidah | Rafidah / a Rafidi |
| വിഭവം | mata' (متاع) | resources |
| പാർപ്പിടം | mustaqarr (مستقر) | dwelling-place |
