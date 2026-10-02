# Check: Al-Baqarah part 02 (verses 6–16)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 14–25 (book pp. 185–196), rendered at 150 dpi and read in full. PDF page 26 (book p. 197) was also read: the verse 17–18 group starts there, so the part ends on a complete group. On p. 185 the part starts at the verse-6 Arabic, after part 01's last sentence. All verse panels and word tables (pp. 186, 189–190, 192–195), the tribe-name line on p. 190 (at 600 dpi) and the last paragraph of p. 196 were re-rendered at 400–600 dpi. The `ml2uni.py` text layer was used only for spelling (on these pages it is incomplete).
- `part.json`, `verses.json` (verses 6–16), `words.json` (126 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. The one footnote (p. 187, "sealed it with lac") is present and placed after its paragraph.
- `verses.json` Malayalam and every `words.json` gloss were compared letter by letter with the images. Misprints kept as printed: താക്കിത് / താക്കീത് (v. 6), the unclosed quotes at the end of verses 11 and 14, വിശ്വസിക്കുവീൻ (word table v. 13), നിശ്ചയമായു (word table v. 14), the unclosed bracket in സന്മാർഗത്തിന് (പകരം (word table v. 16).
- Every Quran quotation in the commentary matches `data/quran-uthmani.json` (`npm run check`: all 3+-word Quran quotations in this surah are exact; 6:46, 16:108, 18:28, 6:25, 5:13, 4:155, 40:35, 9:124–125, 2:13, 2:15, 42:40).
- `[p. N]` markers 186–196 checked against the printed page numbers. P. 194 holds only the verse 13–16 panel and word table, so it has no marker in the commentary (as with p. 185). Glossary renderings (Lord, (r), ﷺ) are used, and part 01's renderings (true believers, disbelievers, deniers of the truth, right guidance, the Hereafter, signs for ദൃഷ്ടാന്തങ്ങൾ) are used consistently.

## Corrections made (before → after)

### Malayalam (verses.json)

1. Verse 7: the image prints ഹൃദയങ്ങളടെ (u-sign missing; checked at 400 dpi). The file had silently corrected it. "അവരുടെ ഹൃദയങ്ങളുടെ മേലും" → "അവരുടെ ഹൃദയങ്ങളടെ മേലും" (kept as printed, like the other misprints).

### Meaning (commentary.md and verses.json)

2. p. 186, കണ്ടേക്കും is "may be seen": "some slight differences **will** be seen in the field of usage" → "some slight differences **may** be seen …".
3. p. 186, അറിഞ്ഞുകൊണ്ട് നിഷേധിക്കുന്നവർ: "Those who deny knowing the proofs and evidences" (reads as "deny that they know") → "Those who deny **while** knowing the proofs and evidences".
4. p. 187, അതിലേക്കൊന്നും അവർ ശ്രദ്ധ പതിക്കുവാനോ: "they are not ready to pay attention to anything going into them" → "they are not ready to turn their attention to any of it".
5. p. 188, നിരർത്ഥമായ വിശ്വാസം: "false belief" → "vain belief".
6. p. 190, നേരെമറിച്ച് was not translated: "Those who were in Makkah were some who …" → "**On the contrary,** those who were in Makkah were some who …".
7. p. 191, വെറുപ്പുളവായി: "became hateful toward Islam and the Muslims" (English "hateful" means "deserving hate") → "came to feel hatred toward Islam and the Muslims".
8. p. 195, തെറ്റിദ്ധരിക്കേണ്ടതില്ല: "'Do not misunderstand …" → "'You need not misunderstand …".
9. p. 196, വഴുതിപ്പോകുക: "what they did was to go astray from right guidance to misguidance …" → "… to slip away from right guidance to misguidance …".
10. p. 196, the verbs are present tense (രേഖപ്പെടുത്തുകയും … ചെയ്യുന്നു): "Whatever there might have been in their minds, they recorded … and when occasion came, they kept repeating it …" → "Whatever there might be in their minds, they record … and when occasion comes, they keep repeating it …".
11. p. 196, **the English had reversed a printed sentence.** The image prints സന്മാർഗം എന്തെന്നറിയാതെ, … ദുർമാർഗത്തിൽ പതിച്ചവരാണവർ ("they **are** people who fell into misguidance without knowing …"). The English said "They are **not** people who fell …", silently correcting the author. Now: "They are people who fell into misguidance … *[DOUBT: … translated as printed; please confirm.]*" (see open doubt 3).
12. Verse 12 (verses.json): "it" is not in the Malayalam (എങ്കിലും അവർ അറിയുന്നില്ല; contrast verse 9's printed "(അത്)"): "But they do not perceive it." → "But they do not perceive."

### Markers and additions

13. p. 191/192 page break: p. 192 begins after താങ്കൾ ("you"). "We bear witness *[p. 192]* that you are indeed …" → "We bear witness that you *[p. 192]* are indeed …".
14. p. 196: the transliteration "(*lakshyangal*)" added inside the sentence is not the author's (the DOUBT right after it already gives the word). It was removed: "the proofs (*lakshyangal*) *[DOUBT: …]*" → "the proofs *[DOUBT: …]*".
15. p. 190, tribe names: at 600 dpi the image clearly prints قَيْنُقَاءُ, with a final hamza ء and damma. So the translator's DOUBT (ء or ع?) is settled for what is printed and is now a TN. The transcription "قَيْنُقَاءْ" (sukun) → "قَيْنُقَاءُ" (as printed). DOUBT → "*[TN: the first Arabic name is printed with a final ء (قينقاء); the usual spelling is قينقاع, and the author's own Malayalam ബനൂക്വൈനുക്വാഉ് has the ع sound. Transcribed as printed.]*".

## Checked and left as they are

- The TN on p. 188: the printed reference "(5: 14)" for وَجَعَلۡنَا قُلُوبَهُمۡ قَٰسِيَةٗۖ. In the Quran text used here these words are in 5:13, so the TN is correct.
- The order of the three tribes: the Malayalam lists Qainuqa', Nadir, Quraizah, but the Arabic in brackets lists قينقاء، قريظة، نضير. Both are kept as printed. "The last two tribes" (allied with the Aws) are Nadir and Quraizah in either order.
- The heading വിഭാഗം – 2 on p. 189 → "### Section – 2" is the author's heading.
- `part.json` verses "6-16", pages "185-196", PDF pages "14-25": correct.

## For Rizwin: group markers

The translator added *[Verses 6–7]*, *[Verses 8–10]*, *[Verses 11–12]*, *[Verses 13–16]* at the start of each group's commentary in `commentary.md`. **These are not the author's words.** They are navigation aids that show which verse group each block of commentary belongs to. They match the author's groups on the images (panels on pp. 185–186, 189–190, 192–193, 194). They are kept as they are, in italic square brackets like the other non-author markers. Please decide whether to keep them (and use them in all parts), or remove them. If kept, the "Conventions" in `about.md` could mention them.

## Open doubts for the reviewer

1. **ലക്ഷ്യങ്ങളും തെളിവുകളും** (p. 186) and **ലക്ഷ്യങ്ങളും ദൃഷ്ടാന്തങ്ങളും** (p. 196). Translator's DOUBTs kept: "proofs" (older sense of ലക്ഷ്യം) or "aims". This is the same question as part 01's ലക്ഷ്യ ദൃഷ്ടാന്തങ്ങൾ. The images do not settle it. One decision should cover all three places.
2. **قينقاء** (p. 190), now a TN. Please confirm the TN wording is enough, or whether to note it differently.
3. **പതിച്ചവരാണവർ** (p. 196, last paragraph). The image clearly prints the affirmative ("they are people who fell into misguidance without knowing what right guidance is …"). The next sentence ("What they did was to throw away right guidance after it had come into their hands") suggests the author meant the negative (പതിച്ചവരല്ല അവർ). Translated as printed, with a DOUBT. Please decide whether to keep it as printed or change it to a TN that notes a likely printing slip.

## New terms (not in the glossary; used consistently in this part)

Includes the translator's list. Flagged for Rizwin to confirm:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| സത്യവിശ്വാസം | iman (إيمان) | true faith |
| കപടവിശ്വാസികൾ | al-munafiqun (المنافقون) | the hypocrites |
| മുനാഫിക്വുകൾ | munafiqun | the Munafiqs |
| കാപട്യം / നിഫാക്വ് | nifaq (نفاق) | hypocrisy; 'nifaq' where the author writes നിഫാക്വ് |
| ദൃഷ്ടാന്തങ്ങൾ | ayat | signs |
| ക്വുർആൻ വചനം / വചനം | aya | verse |
| സൂക്തങ്ങൾ | ayat | ayahs |
| നബി തിരുമേനി / തിരുമേനി | — | the noble Prophet |
| മുദ്രവെക്കുക / മുദ്രകുത്തുക | khatama / taba'a | set a seal / stamp a seal |
| നാശമുണ്ടാക്കുക | afsada (أفسد) | cause corruption |
| ഭോഷന്മാർ | al-sufaha' (السفهاء) | the fools |
| ദുർമാർഗം | al-dalalah (الضلالة) | misguidance |
| പിശാചുക്കൾ | shayatin (شياطين) | devils |
| അല്ലാ | ala (ألا) | Ala (with the author's bracket "(take note)" / "(know)") |
| അന്ത്യദിനം | al-yawm al-akhir | the Last Day |
| പുനരുത്ഥാന ദിവസം | yawm al-qiyamah | the Day of Resurrection (part 01 used "the Day of Qiyamah" for ക്വിയാമത്ത് നാൾ) |
| മുശ്രിക്കുകൾ | mushrikun | mushriks |
| വേദക്കാർ | ahl al-kitab | People of the Scripture (as in part 01) |
