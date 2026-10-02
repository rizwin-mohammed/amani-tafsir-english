# Check: Al-Baqarah part 03 (verses 17–22)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 26–35 (book pp. 197–206), rendered at 150 dpi and read in full, including the one footnote (p. 206). PDF page 36 (book p. 207) was also read: the verse 23–24 group starts at its top, so the part ends on a complete group (the last sentence of p. 206, "Allah says:–", leads into it). The verse panels and word tables (pp. 197, 198–199, 201–202) were re-rendered at 300 dpi; the word അമറാത്തി (p. 206) at 500 dpi. The `ml2uni.py` text layer was used only for spelling.
- `part.json`, `verses.json` (verses 17–22), `words.json` (82 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. The footnote (\*) on p. 206 (rationalists / scientists) is present and placed right after paragraph (2), where its marker stands ("Their mouths were shut. (\*)").
- `verses.json` Malayalam and every `words.json` gloss were compared letter by letter with the images; they match. Printed forms kept: ചുററുമുള്ളതിനെ (word table v. 17), നിങ്ങൾആരാധിക്കുവിൻ with no space (word table v. 21), the opening quote mark with no closing quote in verses 17 and 19.
- Quran quotations (2:19 and 2:20 endings, 2:22 phrases, 21:32, the 2:22 closing sentence) are copied from `data/quran-uthmani.json`; `npm run check` passes. The 40:64 and Hajj 46 quotations are given only in the author's Malayalam (no Arabic printed), and are translated from it.
- `[p. N]` markers 197–206 checked against the printed page numbers. Glossary renderings (Lord for രക്ഷിതാവ്, Rabb where the author writes റബ്ബ്, (r), ﷺ) and the renderings of parts 01–02 (the God-fearing, disbelievers, hypocrites, Munafiqs, true believers, right guidance, those who observe caution, signs, ayahs) are used consistently.

## Corrections made (before → after)

### Additions not in the Malayalam

1. p. 202, the Malayalam uses passive participles with no "we" (അർത്ഥം കൽപിച്ച / അർത്ഥം കൊടുത്ത):
   "'ibadah', to which **we assigned** the meaning 'worship', and of 'Rabb', to which **we gave** the meaning 'Lord', … 'taqwa', to which **we assigned** the meaning 'observing caution'" → "'ibadah', to which the meaning 'worship' **was assigned**, and of 'Rabb', to which the meaning 'Lord' **was given**, … 'taqwa', to which the meaning 'observing caution' **was assigned**".
2. p. 203, the author's rendering of 21:32 (ആകാശത്തെ നാം സൂക്ഷിക്കപ്പെട്ട ഒരു മേൽപുരയും ആക്കിയിരിക്കുന്നു) has no "and", and the printed opening bracket is never closed (as with the unclosed quote after 40:64 and the unclosed bracket before إن شاء الله on p. 204, which the translator kept):
   "(**And** We have made the sky a protected roof. (21:32)**)**." → "(We have made the sky a protected roof. (21:32)."
3. p. 205, കണ്ണിൽ കണ്ടതേ വിശ്വസിക്കൂ, തങ്ങൾ ശരിവെച്ചു കഴിഞ്ഞതിനപ്പുറം ചിന്തിക്കുകയില്ല എന്ന മുൻവിധിക്കാരായ അഹങ്കാരികൾ is a description in the third person (തങ്ങൾ), not a quoted saying. The English had turned it into direct speech with "We":
   "who **say 'We** will believe only what **we** have seen with **our** eyes; **we** will not think beyond what **we** have already approved as right**'**" → "who will believe only what **they** have seen with **their** eyes and will not think beyond what **they** have already approved as right".

No changes were needed in `verses.json`, `words.json` or `part.json` (apart from the status). No dropped sentences, misplaced footnotes, may/will, tense or negation errors were found.

## Checked and left as they are

- **TN on p. 198 (Hajj 46).** The image prints a full stop after കണ്ണുകൾക്കല്ല, in the middle of the sentence ("…കണ്ണുകൾക്കല്ല. അന്ധത ബാധിക്കുന്നത്."). The TN is correct.
- **Heading "### Section – 3"** before verse 21: the author's heading വിഭാഗം – 3 (p. 201), correctly placed after the end of the 19–20 commentary and before the lead-in to verses 21–22.
- **Group markers** *[Verses 17–18]*, *[Verses 19–20]*, *[Verses 21–22]*: **not the author's words**; navigation aids kept as in parts 01–02. They match the author's groups on the images (panels on pp. 197, 198–199, 201–202). See the note in part 02's `check.md` for the decision Rizwin is asked to make.
- **`[p. 198]`, `[p. 203]`, `[p. 205]` markers.** These pages begin mid-sentence (ചുറ്റുപാടി|ലുമുള്ള; അല്ലാഹു ഈ വചനങ്ങളിൽ; യാഥാർഥ്യങ്ങളിലേക്കും). Because English word order differs, each marker sits at the nearest matching point; acceptable.
- **The Arabic phrases الله أعلم (p. 200) and و الله الموفق (p. 201)** are given without vowel marks, as in part 02.
- **The paragraph break after "(40:64)"** (p. 204): on the image "ഇപ്പോൾ, ഭൂമി ഒരു വീട്" starts a new line flush left, without the usual indent. It is unclear whether the author meant a new paragraph; the English starts a new paragraph. This does not change any wording.
- `part.json` verses "17-22", pages "197-206", PDF pages "26-35": correct.

## Open doubts for the reviewer

1. **വേദവാദികൾ** (p. 204). Translator's DOUBT kept. The image prints വേദവാദികളാരും clearly; whether വേദം here means "scripture" (those who hold to a revealed religion, against the atheists just mentioned) or, more narrowly, "the Vedas" cannot be settled from the page. Rendered "those who profess a scripture".
2. **അമറാത്തി ഇല** (p. 206). Translator's DOUBT kept. The word is printed clearly as അമറാത്തി (500 dpi; the text layer agrees), so the spelling is certain, but which tree it names is not. The usual Arabic of this report has ورق التوت (mulberry leaf). Please confirm whether to note "mulberry".
3. **Earlier open doubts still apply** (not in this part): ലക്ഷ്യം (parts 01–02), the hadith abbreviations (part 01), പതിച്ചവരാണവർ (part 02).

## New terms (not in the glossary; used consistently in this part)

Includes the translator's list. Flagged for Rizwin to confirm:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| ഉപമ | mathal (مثل) | parable |
| രിവായത്ത് | riwayah (رواية) | riwayah (with the author's "(narrations)") |
| സൂക്ഷ്മതയുള്ളവർ (verse 21) | tattaqun | those who have caution (the word table's സൂക്ഷ്മത പാലിക്കും stays "observe caution", as in part 01) |
| വിരിപ്പ് | firash (فراش) | a spread |
| കെട്ടിടം / മേൽപുര | bina' (بناء) | a building / a roof |
| സമന്മാർ / തുല്യന്മാർ | andad (أنداد) | equals |
| സൃഷ്ടി കർത്തൃത്വം / രക്ഷാ കർത്തൃത്വം / ആരാധ്യത | khaliqiyyah / rububiyyah / uluhiyyah | creatorship / lordship / being the One worshipped |
| സ്രഷ്ടാവ് | al-Khaliq | the Creator |
| തൗഹീദ് | tawhid (توحيد) | tawhid |
| ശിർക്ക് | shirk (شرك) | shirk |
| ഇടിവാൾ (ഇടിത്തീ, ഇടിമിന്നൽ) | sawa'iq (صواعق) | thunderbolt (thunder-fire; thunderclaps for ഇടിമിന്നൽ in the word table) |
| അലങ്കാര രൂപത്തിൽ | — | in a figurative form |
| നിരീശ്വരവാദികൾ | — | atheists |
| ആയത്തുകൾ | ayat | ayahs (as for സൂക്തങ്ങൾ in part 02) |
| മുനാഫിക്വുകൾ / കപടന്മാർ | munafiqun | Munafiqs / hypocrites |
