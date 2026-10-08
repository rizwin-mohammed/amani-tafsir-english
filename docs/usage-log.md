# Usage log

One row per translation run. Token counts are measured from the run's own usage records.
"Output tokens" is what Claude wrote (including its thinking); "total tokens" also counts
everything read, most of which is re-reading earlier context from cache.

| Date (UTC) | Part | Book pages | Pages | Verses | Output tokens | Total tokens | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-10-01 | Al-Fatihah (whole) | 145-171 | 27 | 1-7 | 87,933 | 5,171,370 | Format sample; one session |
| 2026-10-01 | Al-Baqarah part 01 (intro + group 1) | 173-185 | 13 | 1-5 | n/a | 367,296 | Translator 203,005 + checker 164,291 tokens; checker made 10 corrections |
| 2026-10-02 | Al-Baqarah part 02 | 185-196 | 12 | 6-16 | n/a | 435,830 | Translator 257,775 + checker 178,055 tokens; checker made 15 corrections incl. one reversed sentence |
| 2026-10-02 | Al-Baqarah part 03 | 197-206 | 10 | 17-22 | n/a | 358,792 | Translator 207,374 + checker 151,418 tokens; checker made 3 corrections |
| 2026-10-02 | Al-Baqarah part 04 | 207-216 | 10 | 23-27 | n/a | 470,783 | Translator 284,652 + checker 186,131 tokens; checker made 9 corrections |
| 2026-10-02 | Al-Baqarah part 05 | 217-227 | 11 | 28-30 | n/a | 507,502 | Translator 272,853 + checker 234,649 tokens; checker made 10 corrections |
| 2026-10-02 | Al-Baqarah part 06 | 227-236 | 10 | 31-37 | n/a | 483,445 | Translator 261,782 + checker 221,663 tokens; checker made 6 corrections |
| 2026-10-02 | Al-Baqarah part 07 | 236-247 | 12 | 38-41 | n/a | 518,359 | Translator 275,695 + checker 242,664 tokens; checker made 18 corrections |
| 2026-10-02 | Al-Baqarah part 08 | 247-257 | 11 | 42-50 | n/a | 469,724 | Translator 279,694 + checker 190,030 tokens; checker made 6 corrections |
| 2026-10-02 | Al-Baqarah part 09 | 257-267 | 11 | 51-57 | n/a | 519,552 | Translator 329,789 + checker 189,763 tokens; checker made 4 corrections |
| 2026-10-02 | Al-Baqarah part 10 | 267-277 | 11 | 58-62 | n/a | 599,747 | Translator 325,606 + checker 274,141 tokens; checker made 5 corrections |
| 2026-10-02 | Al-Baqarah part 11 | 277-289 | 13 | 63-71 | n/a | 697,722 | Translator 365,024 + checker 332,698 tokens; checker made 28 corrections |
| 2026-10-02 | Al-Baqarah part 12 | 290-300 | 11 | 72-79 | n/a | 518,750 | Translator 289,708 + checker 229,042 tokens; checker made 11 corrections |
| 2026-10-02 | Al-Baqarah part 13 | 300-310 | 11 | 80-88 | n/a | 599,536 | Translator 352,796 + checker 246,740 tokens; checker made 9 corrections |
| 2026-10-02 | Al-Baqarah part 14 | 310-320 | 11 | 89-98 | n/a | 508,357 | Translator 304,835 + checker 203,522 tokens; checker made 11 corrections |
| 2026-10-02 | Al-Baqarah part 15 | 320-333 | 14 | 99-103 | n/a | 573,069 | Translator 328,679 + checker 244,390 tokens; checker made 29 corrections |
| 2026-10-02 | Al-Baqarah part 16 | 333-344 | 12 | 104-112 | n/a | 594,881 | Translator 304,537 + checker 290,344 tokens; checker made 12 corrections |
| 2026-10-03 | Al-Baqarah part 17 | 344-353 | 10 | 113-119 | n/a | 488,113 | Translator 313,764 + checker 174,349 tokens; checker made 8 corrections |
| 2026-10-03 | Al-Baqarah part 18 | 353-357 | 5 | 120-123 | n/a | 330,659 | Translator 185,470 + checker 145,189 tokens; checker made 5 corrections. First 5-page part, page images read once |
| 2026-10-03 | Al-Baqarah part 19 | 357-367 | 11 | 124-125 | n/a | 492,546 | Translator 299,669 + checker 192,877 tokens; checker made 3 corrections. First part from amanithafseer.com text + one image read per page |
| 2026-10-03 | Al-Baqarah part 20 | 367-377 | 11 | 126-132 | n/a | 473,569 | Translator 270,525 + checker 203,044 tokens; checker made 9 corrections. Cache reads 33.0M (3.0M per page, down from 3.75M) |
| 2026-10-03 | Al-Baqarah part 21 | 377-388 | 12 | 133-140 | n/a | 471,966 | Translator 282,141 + checker 189,825 tokens; checker made 2 corrections. Cache reads 34.3M (2.9M per page) |
| 2026-10-03 | Al-Baqarah part 22 | 388-398 | 11 | 141-143 | n/a | 479,903 | Translator 286,554 + checker 193,349 tokens; checker made 6 corrections + 5 DOUBTs. Cache reads 27.6M (2.5M per page). Checker paused ~2h by a usage limit, then resumed |
| 2026-10-03 | Al-Baqarah part 23 | 398-408 | 11 | 144-152 | n/a | 534,450 | Translator 298,470 + checker 235,980 tokens; checker made 6 corrections. Cache reads 38.7M (3.5M per page) |
| 2026-10-07 | Al-Baqarah part 24 | 408-419 | 12 | 153-160 | n/a | 507,744 | Translator 304,122 + checker 203,622 tokens; checker made 2 corrections and added 1 DOUBT. Cache reads 33.9M (2.8M per page) |
| 2026-10-07 | Al-Baqarah part 25 | 419-430 | 12 | 161-167 | n/a | 602,546 | Translator 328,002 + checker 274,544 tokens; checker made 18 corrections (4 Arabic as printed). Cache reads 53.8M (4.5M per page) |
| 2026-10-07 | Al-Baqarah part 26 | 431-442 | 12 | 168-176 | n/a | 328,485 | Translator 76,067 (final context; it paused on a usage limit 09:23-13:00Z and was compacted) + checker 252,418 tokens; checker made 9 corrections. Cache reads 41.3M (3.4M per page) |
| 2026-10-07 | Al-Baqarah part 27 | 442-452 | 11 | 177-179 | n/a | 579,945 | Translator 325,058 + checker 254,887 tokens (checker paused 14:03-18:35Z at the 80% session reading); checker made 8 corrections. Cache reads 39.3M (3.6M per page) |
| 2026-10-07 | Al-Baqarah part 28 | 452-457 | 6 | 180-182 | n/a | 440,098 | Translator 263,874 + checker 176,224 tokens; checker made 4 corrections (resolved the Ba = Baihaqi doubt from the Vol 1 abbreviation key). Short part: verses 183-185 form one ~12-page group. Cache reads 28.6M (4.8M per page) |
| 2026-10-08 | Al-Baqarah part 29 | 457-469 | 13 | 183-185 | n/a | 624,357 | Translator 337,955 + checker 286,402 tokens; checker made 11 corrections (3 voice, 1 sentence attachment on p466, 2 added punctuation removed, 4 consistency renderings, Tw. for Tabarani). Cache reads 46.8M (3.6M per page) |
