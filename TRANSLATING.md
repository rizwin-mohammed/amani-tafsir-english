# How each part is translated and checked

This is the exact procedure every translation run follows. It exists so that every part of every surah is done the same careful way. **Precision is the only goal; speed does not matter.** The text is a commentary on the Quran, and every word will be read as the author's meaning.

A run produces one **part**: one or more of the author's complete verse groups, about 10 book pages. Each part is done by two separate workers: a **translator**, then an independent **checker** that did not see the translator's reasoning.

## 0. Find the next part

```
python3 tools/next-part.py
```

It prints the surah, the first untranslated verse, the PDF, the PDF page to start on, a suggested end page, and the PDF pages where nearby verse translations begin. A line with `"blocked"` means that surah's PDF is missing: tell the user once, then continue with the next surah it prints.

## 1. Reading the source

- **The page images are the authority.** Render the pages: `pdftoppm -r 150 -gray -png -f <first> -l <last> "<pdf>" <out-prefix>` and read every page image in full, including footnotes.
- **The text layer is a help for exact Malayalam spelling only.** `python3 tools/ml2uni.py "<pdf>" <page>` converts the old-font Malayalam to Unicode. It is usually exact, but a few letter combinations come out wrong and all Arabic in it is garbage. Whenever it and the image differ, the image wins.
- The printed **book page number** is at the bottom of each page image. Use it in `[p. N]` markers and in `part.json` (not the PDF page index).

## 2. Scope of a part

- Start at the beginning of the author's verse group that contains the start verse. For the first part of a surah, also translate the surah's introduction (everything before the first verse group) into the surah's `intro.md`.
- Translate whole verse groups only. A group is: the Arabic verses with the author's Malayalam translation, the word meanings, then his commentary, until the next group's Arabic verses begin.
- Stop at the end of the group that ends nearest the suggested end page. Never stop in the middle of a group. A single very long group may make a long part; that is fine.

## 3. Files for a part

Surah folder: `content/en/NNN-slug/` (e.g. `002-al-baqarah`). For a new surah create `meta.json`:

```json
{ "surah": 2, "title": "Al-Baqarah", "title_ml": "<Malayalam title as printed>",
  "source": "Vishuddha Quran Vivaranam, Volume <n>, pages <first>-<last of surah>", "status": "draft",
  "status_note": "", "reviewed_by": null, "reviewed_on": null }
```

Part folder: `content/en/NNN-slug/parts/NN/` (`01`, `02`, … as `next-part.py` says):

- `part.json`: `{ "verses": "1-5", "pages": "174-183", "status": "draft", "translated_on": "YYYY-MM-DD", "pdf": "<pdf path>", "pdf_pages": "4-13" }`
- `verses.json`: `{ "verses": [ { "n": 1, "ml": "<author's Malayalam translation of the verse, Unicode>", "en": "<English>" } ] }`. Do not include the Arabic: the site takes it from `data/quran-uthmani.json`.
- `words.json`: `{ "words": [ { "verse": 1, "ar": "<Arabic word(s)>", "ml": "<author's Malayalam gloss>", "en": "<English>" } ] }`, in the author's order. **Copy each `ar` exactly from that verse's text in `data/quran-uthmani.json`** (the word or words the author glosses together). `npm run check` fails if an `ar` is not in its verse.
- `commentary.md`: the commentary for these groups, in Markdown. Use `###` headings only where the author has a heading.

## 4. Translation rules

1. **Every sentence, in order.** Nothing summarised, merged, skipped or added. Footnotes are translated too, placed after the paragraph they belong to as `> **Note:** …` (keep the author's `(*)` marker).
2. **Faithful, not paraphrased.** Follow the author's sentence structure where English allows. Keep his round-bracket additions in round brackets.
3. **Fixed renderings** from `content/glossary.md` every time. If a term is not in the glossary and recurs, use one rendering consistently and list it under "New terms" in `check.md` for the reviewer.
4. **Arabic stays Arabic**, followed by the English of the author's own Malayalam rendering. For any **Quran quotation**, copy the Arabic from `data/quran-uthmani.json` (the verse the author cites) instead of typing it, and keep the author's reference (e.g. "Al-Hijr 87"). Other Arabic (hadith, sayings, word lists) is transcribed carefully from the image.
5. **Honorifics and abbreviations** as in `content/en/about.md`: ﷺ, (r), (a); Mu., Na., Ti. and so on as printed.
6. **Markers:** `*[p. N]*` where each new book page begins; `*[TN: …]*` for a translator's note (only to point out something in the printed text, such as an evident printing slip; never to add opinion); `*[DOUBT: …]*` for **anything not certain**: an unclear word on the image, an ambiguous sentence, a term with two possible meanings. Say what the doubt is and give the options. Never guess silently.
7. If the book itself seems to contain an error, translate what is printed and add a `[TN: …]`. Never silently correct the author.

## 5. Independent check

The checker gets the same pages and the translator's files, and compares them line by line:

- Every sentence of the Malayalam is present in the English, in order, with nothing added; every footnote is present.
- Meaning is faithful: no softening, strengthening, or change of who does what; negatives, conditions and numbers are right.
- Malayalam in `verses.json` and `words.json` matches the page image exactly.
- Verse numbers, word-table verse numbers and `[p. N]` markers are right.
- Glossary renderings are used.

The checker corrects clear mistakes directly, turns anything uncertain into a `[DOUBT: …]`, sets `"status": "checked"` and `"checked_on"` in `part.json`, and writes `check.md` in the part folder: what was compared, every correction made (before → after), every open doubt, and any new terms. `check.md` is for the reviewer and is not shown on the site.

## 6. Publish

`npm run check` and `npm run build` must pass. Commit on a new branch `parts/NNN-pNN`, open a pull request titled "<Surah> part NN: verses A–B (draft)", and once its checks are green, merge it (Rizwin chose on 1 October 2026 to publish checked drafts automatically, labelled as not yet reviewed). Record the run in `docs/usage-log.md`.
