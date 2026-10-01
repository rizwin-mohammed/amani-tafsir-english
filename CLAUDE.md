# Notes for Claude sessions working on this repository

- Owner: Rizwin (non-technical). Accuracy is a religious responsibility: never guess, mark doubts `[DOUBT: ...]`, keep every sentence of the author.
- Source PDFs live in the project's shared folder (`/mnt/project-files/`, some under `quran/`). Their text layer is legacy-font Malayalam; `/mnt/project-files/tools/ml2uni.py <pdf> <page>` converts it to Unicode. Arabic in that text is garbage: take Quran text from `data/quran-uthmani.json`. Always check against page images (`pdftoppm -r 150 -gray -png`).
- One surah per folder in `content/en/NNN-name/`: `meta.json`, `intro.md`, `verses.json` (n, ml, en only; Arabic is filled in at build time), `words.json`, `commentary.md`.
- Use the renderings in `content/glossary.md`. Follow `REVIEW.md` for statuses. Never set `status` to `approved` yourself.
- `npm run check` then `npm run build` before every push. Work on a branch and open a pull request; Rizwin merging it is the publish step.
- Translation runs follow `TRANSLATING.md` exactly; `python3 tools/next-part.py` says what comes next. Log every run in `docs/usage-log.md`.
