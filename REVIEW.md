# Review and publishing process

Each part of a surah moves through these stages. Its stage is the `status` in that surah's `meta.json`, and the website shows it on the page.

| Stage | `status` | Who | What happens |
| --- | --- | --- | --- |
| 1. Translated | `draft` | Claude, in a fresh session | Sentence-by-sentence translation from the Malayalam, using the glossary. Doubts are marked `[DOUBT: ...]`, never guessed. |
| 2. Checked | `checked` | Claude, in a second, separate session | Compares the English line by line with the book pages and lists anything missing, added or wrong. Fixes are made; unresolved points stay as doubts. |
| 3. Reviewed | `approved` | Rizwin (and a Malayalam-reading scholar if available) | Reads the part, answers every doubt, and approves it. `reviewed_by` and `reviewed_on` are filled in. |
| 4. Published | | Rizwin presses **Merge** | Every change arrives as a pull request. Merging it publishes the site. Nothing reaches the site without that click. |

## Automatic checks on every pull request

`npm run check` runs on every pull request and writes a report:

- Every verse in a verse table must exist, and the Arabic of every verse comes from `data/quran-uthmani.json`, never typed by hand.
- Every Arabic quotation in the commentary is looked up in the verified Quran text. Close-but-not-exact matches and quotations that are not Quran verses are listed for the reviewer.
