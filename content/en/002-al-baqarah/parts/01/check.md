# Check: Al-Baqarah part 01 (verses 1–5)

Checked on 2026-10-01 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 1–14 (book pp. 172–185; p. 172 is blank). All 14 pages were rendered at 150 dpi and read in full, including both footnotes. Small print (the isolated-letter list on p. 177, the footnote on p. 177, the verse panel and word table on p. 176) was re-rendered at 300–400 dpi. The `ml2uni.py` text layer was used only to confirm Malayalam spelling.
- `meta.json` (title, source pages), `intro.md` (book pp. 173–175), and `parts/01/` (`part.json`, `verses.json`, `words.json`, `commentary.md`; book pp. 175–185).
- Every English sentence was compared against the Malayalam on the page images, in order. Footnotes, numbers, negatives, conditions and who-does-what were checked.
- `verses.json` Malayalam for verses 1–5 and every `words.json` gloss were compared letter by letter with pp. 175–176. They match the image (including the printed spelling സുക്ഷ്മത in the bracket at the end of verse 4, which is kept as printed).
- Every Quran quotation in the intro and commentary was compared with `data/quran-uthmani.json` (2:2, 3:2–3, 3:7, 41:44, 17:82, 2:3, 2:25 phrase, 4:34, 2:4, 3:19, 5:48, the مُصَدِّقٗا phrase, 28:54, 2:5).
- `[p. N]` markers: all ten (173–185) checked against the printed page numbers. Glossary renderings (the Most Compassionate, the Ever-Merciful, Lord for രക്ഷിതാവ്, (r), (a), ﷺ) are used.
- Scope: the part ends at the end of the verse 1–5 group on p. 185. The author's lead-in sentence to verse 6 ("After describing the qualities … He speaks about the disbelievers …") stands on p. 185 before the verse-6 Arabic and closes the 1–5 commentary, so it is correctly included. Verse 6 itself starts the next group.

## Corrections made (before → after)

### Omissions / meaning

1. `intro.md`, hadith of Abu Hurairah (p. 174), "നിശ്ചയമായും" was not translated:
   "Satan does not enter the houses" → "Satan **surely** does not enter the houses".
2. `intro.md`, explanation of that hadith (p. 174). The English added "like graves" and lost the structure "the gist of saying 'do not make them graveyards' is …" (ഖബ്ർസ്ഥാനമാക്കരുതെന്ന് പറഞ്ഞതിന്റെ സാരം):
   "The gist of what was said is that houses should not be made silent and empty like graves, by not doing things such as reciting the Quran." → "The gist of saying that they should not be made graveyards is that houses should not be made silent and empty, without doing things such as reciting the Quran."
3. `commentary.md`, p. 177, "ഇബ്നു കഥീറും (റ) പറഞ്ഞിരിക്കുന്നു" (the -ഉം "too" was dropped):
   "Ibn Kathir (r) has said: 'Ash-Shaikh …" → "Ibn Kathir (r) **too** has said: 'Ash-Shaikh …".
4. `commentary.md`, p. 182, "പകരം നൽകിയേക്കും" is "may give", not "will give" (strengthened):
   "He will give a substitute" → "He **may** give a substitute".
5. `commentary.md`, p. 185, "സന്മാർഗം കേവലം ഒരു വാഹനവും" ("കേവലം" dropped):
   "right guidance is a vehicle" → "right guidance is **just** a vehicle".

### Footnotes placed with the wrong paragraph

6. `commentary.md`: the two footnotes were each attached one paragraph too late. On the page images, the (\*) of the first footnote (Malayalam letter classes, foot of p. 177) is in the sentence "In each category, half can be seen to occur in these 14. (\*)", and the (\*) of the second footnote (Zamakhshari and Baidawi, foot of p. 178) is after "Such is the gist of this approach. (\*)".
   - Note "Just as in Malayalam letters are usually divided …": moved from after the "Such is the gist of this approach" paragraph → to after the paragraph "The Quran too is a book composed of such Arabic letters … contained in them."
   - Note "Those who wish to know further clarification …": moved from after the Al Imran 7 / متشابه paragraph → to after the "Such is the gist of this approach. (\*)" paragraph.

### Markers, Arabic, metadata

7. `commentary.md`, `[p. 178]` marker: p. 178 begins with the word സമൂഹം ("collection"), so "The Quran too is a collection of these same letters and words; *[p. 178]* that being so," → "The Quran too is a *[p. 178]* collection of these same letters and words; that being so,".
8. `commentary.md`, footnote on p. 177: the image (checked at 400 dpi) settles that the printed word is ലഘു, so the translator's DOUBT ("looks like ലഘു") was turned into a TN: "*[DOUBT: the fourth term looks like ലഘു (laghu) on the image; the usual … is ഘോഷം (ghosham). Translated as printed.]*" → "*[TN: the fourth term is printed ലഘു (laghu); the usual Malayalam grammatical term in this series is ഘോഷം (ghosham). Translated as printed.]*". Whether the author meant ലഘു is still for the reviewer (see open doubts).
9. `intro.md`, Basmala: the Arabic had the shadda and fatha marks in a different code order from `data/quran-uthmani.json` (looks the same on screen). Replaced with the exact string from the data file (1:1).
10. `meta.json`, source page range: "pages 173-704" → "pages 173-696". The surah ends on book p. 696 (PDF p. 525: last commentary on verse 286 and the author's Arabic colophon dated 1398 AH / 1978). PDF pages 526–533 (book pp. 697–704) are the volume's appendix: a "പടങ്ങൾ" (maps) section and a table of place names in Malayalam, English and Arabic, not part of the surah. (Volume 2 starts at p. 705, so "Volume 1" is right.)

## Checked and left as they are

- The translator's TN on p. 177 (the isolated-letter list): confirmed at 400 dpi that the last letter is printed ز. The fourteen letters of the isolated openings include ن, and ز is not among them, so the TN is correct.
- The TN in `intro.md` that lists the hadith abbreviations used in this part (അ = Ah., മു = Mu., തി = Ti., ന = Na., ഹാ = Ha., ബു = Bu., ത്വ = Tw., ജ = Ja.): the abbreviations match the images.
- `npm run check` lists the Al Imran quotation on p. 178 (ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ … بِٱلۡحَقِّ) as "not found" only because it runs across two verses (3:2 and the start of 3:3) with no verse marker printed between them. Both pieces are exact copies from `data/quran-uthmani.json`. No marker was added, since none is printed.
- `part.json` pages "175-185" and PDF pages "4-14": correct (intro pp. 173–175 is in `intro.md`).

## Open doubts for the reviewer

1. **ത്വ (Tw.) and ജ (Ja.)** (`intro.md`, pp. 173 and 175). Translator's DOUBT kept. ത്വ is most likely Tabarani; ജ could be Ibn Jarir (al-Tabari) or Ibn Majah. I searched the text layer of all 140 pages of `00. Vol1_Mughavura_1-140.pdf` and found no list of abbreviations there, so this could not be settled. Please confirm from the printed book.
2. **ലഘു in the footnote on p. 177** (now a TN). The word is printed clearly as ലഘു. In the usual Malayalam series (ഖരം, അതിഖരം, മൃദു, ഘോഷം, അനുനാസികം) the fourth class is ഘോഷം. Please decide whether to keep the TN as is.
3. **ലക്ഷ്യ ദൃഷ്ടാന്തങ്ങൾ** (`commentary.md`, p. 179). Translator's DOUBT kept: "proofs (evidences) and illustrations" (older sense of ലക്ഷ്യം) or "aims and illustrations". The image does not settle it.

## New terms (not in the glossary; used consistently in this part)

Flagged for Rizwin to confirm, most important first:

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| സൂക്ഷ്മത പാലിക്കുന്നവർ | al-muttaqin (المتقين) | **those who observe caution** (also "muttaqis" where the author writes മുത്തക്വികൾ) |
| ഭയഭക്തന്മാർ / ഭയഭക്തി | — / taqwa (تقوى) | the God-fearing / God-fearing reverence |
| സന്മാർഗം | huda (هدى) | right guidance |
| മാർഗദർശനം | huda (هدى) | guidance |
| അദൃശ്യം / ഗയ്ബ് | al-ghaib (الغيب) | the unseen; 'ghaib' when the author writes ഗയ്ബ് |
| നമസ്കാരം നിലനിറുത്തുക | iqamat al-salah | establish the prayer |
| പരലോകം | al-akhirah (الآخرة) | the Hereafter |
| വിജയികൾ | al-muflihun (المفلحون) | the successful |
| വേദക്കാർ | ahl al-kitab | the People of the Scripture |
| സത്യവിശ്വാസികൾ | al-mu'minun | the true believers |
| സത്യനിഷേധികൾ / അവിശ്വാസികൾ | al-kafirun | the deniers of the truth / the disbelievers |
| റബ്ബ് (when the author writes റബ്ബ്, not രക്ഷിതാവ്) | Rabb | Rabb (as in Al-Fatihah) |
| സാരം (before a verse explanation) | — | Gist |
| ക്വിയാമത്ത് നാൾ | yawm al-qiyamah | the Day of Qiyamah |
