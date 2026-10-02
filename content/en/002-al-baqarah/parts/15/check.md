# Check: Al-Baqarah part 15 (verses 99–103)

Checked on 2026-10-02 by an independent checker session, following TRANSLATING.md section 5.

## What was compared

- Source: `/mnt/project-files/quran/02. Al-Baqarah.pdf`, PDF pages 149–162 (book pp. 320–333), rendered at 150 dpi and read in full, including the footnotes (the long Bible Dictionary footnote, pp. 330–331; Telepathy and Personal magnetism, p. 332). PDF page 163 (book p. 334) was also looked at. The verse panels and word tables (pp. 320–324) were re-read at 300 dpi; the Arabic تلاوة (p. 324), كُفْر (p. 325), اتَّبَعُوا مَا تَتْلُو الشَّيَاطِينُ, نفى, إن شاء الله, مَلَكَيْنِ / مَلِكَيْنِ (p. 327), بختنصر (p. 328) and the words സിഹ്ർ (verse 102), യാതൊന്ന്(കാര്യം) (word table), പിശാചിന്റെ പ്രവൃത്തി (p. 333) at 600–1200 dpi. The `ml2uni.py` text layer (incomplete on these pages) was used only for spelling.
- Scope: the part starts at the verse 99 panel on p. 320, directly after part 14's "… നേതാവുമായിരുന്നു അബ്ദുല്ലാഹിബ്നു സലാം (റ).", and ends at the foot of p. 333 with "… നമുക്കിപ്പോൾ മതിയാക്കാം.” ( فى ظلال القرآن )", directly above the heading "വിഭാഗം – 13" and the verse 104 panel. Both boundaries confirmed.
- `part.json`, `verses.json` (verses 99–103), `words.json` (89 entries), `commentary.md`.
- Every English sentence was compared with the Malayalam on the page images, in order. After the corrections below no sentence is missing or added. Footnotes: the Bible Dictionary footnote (marker (\*) at "… അതുകൊണ്ടായിരുന്നു (\*)", end of the p. 330 paragraph) is complete (items 1–11, running from p. 330 to p. 331) and placed right after that paragraph; the Telepathy (\*) and Personal magnetism (\*\*) notes are placed right after the Sayyid Qutb paragraph that carries both markers (ending "… ഗർവ്വല്ലാതെ മറ്റൊന്നുമല്ല."). Correct.
- Page markers: [p. 321]–[p. 322], [p. 324]–[p. 333] checked against the printed page numbers. P. 323 holds only the verse 102–103 panels and the start of the word table, so it has no marker (as in parts 13–14). [p. 325], [p. 326], [p. 327], [p. 328], [p. 330], [p. 331] and [p. 332] fall mid-sentence and sit at the nearest matching point. **Footnote split:** the Bible Dictionary footnote runs over from p. 330 to p. 331 (item 4 is split at "പല രസകരങ്ങളായ>>> / <<< ക്ഷുദ്രപ്രയോഗങ്ങളെക്കുറിച്ച്"); it is kept as one block after its paragraph, with no page marker inside it, and the [p. 331] marker stands in the main text at "… sihr *[p. 331]* get a reply". Left so (no earlier part had a footnote split over two pages); the reviewer may prefer a second *[p. 331]* inside the footnote.
- Quran phrases (point e): 2:99 (ءَايَٰتِۭ بَيِّنَٰتٖ), 2:100 (نَّبَذَهُۥ فَرِيقٞ مِّنۡهُم), 2:102 (all the phrases cited on pp. 324–329), 2:103 (وَلَوۡ أَنَّهُمۡ ءَامَنُواْ وَٱتَّقَوۡاْ-الخ), 6:112 (وَكَذَٰلِكَ جَعَلۡنَا لِكُلِّ نَبِيٍّ عَدُوّٗا....), 57:25 (وَأَنزَلۡنَا ٱلۡحَدِيدَ), 9:26 (أَنزَلَ ٱللَّهُ سَكِينَتَهُۥ), 20:66 (يُخَيَّلُ إِلَيۡهِ مِن سِحۡرِهِمۡ أَنَّهَا تَسۡعَىٰ): the printed words are the same as the verse (ordinary spelling only), so they stay in the data-file form. Phrases whose printed wording differs are transcribed as printed: اتَّبَعُوا مَا تَتْلُو الشَّيَاطِينُ (without و; vowels checked at 600 dpi) and مَا أُنْزِلَ (p. 328).
- Arabic as printed (point d): تلاوة, كُفْر (damma on ك, sukun on ف), نفى, مَلَكَيْنِ / مَلِكَيْنِ, بختنصر, فى ظلال القرآن (twice), (٦:١١٢) in Arabic-Indic digits: all as printed. إن شاء الله was re-vowelled (correction 3).
- Sayyid Qutb extract (point f): compared with the author's Malayalam only; two places had drifted from it (corrections 19, 20).
- Glossary and earlier parts' renderings (Rabb, (a), (r), ﷺ only where printed, the noble Rasul for റസൂൽ തിരുമേനി, signs for ദൃഷ്ടാന്തങ്ങൾ, pact, book / scripture, devils for പിശാചുക്കൾ, applicable, evil works, deeds / works) are used after the corrections below.

## Corrections made (before → after)

### Malayalam as printed

1. Verse 102 (`verses.json`), the panel prints ‘സിഹ്ർ’ (chillu ർ, as in the word table and the commentary): "‘സിഹ്റ്’" → "‘സിഹ്ർ’".
2. Word table v. 102, مَا: the print has no space before the bracket (letter-spaced line, as in part 13 correction 1): "യാതൊന്ന് (കാര്യം)" → "യാതൊന്ന്(കാര്യം)".

### Arabic re-vowelled

3. p. 327: the print has إن with only the hamza below, no kasra or sukun (1200 dpi): "**إِنْ شاء الله**" → "**إن شاء الله**".

### Dropped words

4. p. 325, the list of those appealed to (… ദേവി, പിശാച്, മരണമടഞ്ഞവർ …) had lost പിശാച്: "gods, goddesses, the dead" → "gods, goddesses, **devils**, the dead".
5. p. 327, (ബാബിലോണിൽ രണ്ട് മലക്കുകൾക്ക് ഇറക്കപ്പെട്ടതും): -ഉം dropped and "the" added: "(what was sent down to the two angels in Babylon)" → "(what was sent down to two angels in Babylon, **too**)".

### Added or strengthened words

6. p. 322, … വേദഗ്രന്ഥത്തെതന്നെ പുറം തള്ളിക്കളയുകയാണ് ചെയ്തിരിക്കുന്നത് (a cleft, not "nothing but"): "They, who made violating the pact a habit, have at last done nothing but cast off their very scripture itself." → "What they, who made violating the pact a habit, have at last done is to cast off their scripture itself."
7. p. 326, കുറേശ്ശെ സംശയങ്ങൾ ("a few doubts, here and there"): "there are a good many doubts" → "there are a few doubts here and there".
8. p. 330, footnote item 1: … വേണമെന്നുള്ളത് has no word for "wish": "the wish that they must obtain the favour of the gods …, and must get secrets revealed, became the cause" → "that they must obtain the kindness of the gods …, and must get secrets revealed became the cause" (ദയ "kindness"; "favour" is അനുഗ്രഹം, part 14).
9. p. 332 (Qutb), വല്ല കഴിവുകളും ("some abilities"): "great abilities to exert influence" → "some abilities to exert influence".
10. v. 100 (`verses.json`), വല്ല കരാറും (പ്രതിജ്ഞയും): the -ഉം of the bracket repeats the indefinite വല്ല …-ഉം; "and" made two things of one: "some pact (and vow)" → "some pact (vow)".

### Sentence order

11. p. 325, … ശത്രുക്കളാക്കിയിട്ടുണ്ട് وكذلك … (٦:١١٢) എന്ന് അല്ലാഹു പ്രസ്താവിച്ചിട്ടുണ്ടല്ലോ: "Allah has, surely, stated: We have made … (٦:١١٢)" → "We have made … (٦:١١٢) – Allah has, surely, stated so."
12. p. 328, … (57:25) എന്നും, … (9:26) എന്നും അല്ലാഹു പറഞ്ഞിട്ടുണ്ടല്ലോ: "About having produced iron on the earth Allah has, surely, said **…** (…(57:25), and, about … **…** (… (9:26)." → "About having produced iron on the earth, **…** (…(57:25), and, about …, **…** (… (9:26) – Allah has, surely, said so."
13. p. 329, എന്ന് സാരം belongs to the second sentence (… ചാടുകയല്ല അവർ ചെയ്തിരുന്നത് എന്ന് സാരം): "The gist is that it was, surely, with the caution … that the angels used to teach it. Then, what they were doing was not jumping …" → "It was, surely, with the caution … that the angels used to teach it. Then, the gist is that what they were doing was not jumping …".
14. p. 331, footnote item 6: the pouring is done by the sign-readers, not by "those who look into anjanam" (പാത്രത്തിൽ വെള്ളമോ വീഞ്ഞോ ഒഴിച്ച് അഞ്ജനം നോക്കുന്നവരെപ്പോലെ നോക്കി ഭാവിഫലങ്ങൾ പറയാമെന്ന്): "They claimed that, looking, like those who look into anjanam after pouring water or wine into a vessel, they could tell future events." → "They claimed that, pouring water or wine into a vessel and looking like those who look into anjanam, they could tell future results."

### Meaning

15. p. 325, Raghib's summary: ഉൾപ്പെടുത്തപ്പെട്ടതാകകൊണ്ട് is causal ("because … have been included"), and ഉൾപ്പെടുന്നതായും has -ഉം: "‘In the same way as all praised (good) things are counted as included in iman (true faith), all reproached (bad) things are counted as included in kufr (disbelief)." → "‘Because all praised (good) things have been included in iman (true faith), all reproached (bad) things have also been counted as included in kufr (disbelief)."
16. Verse 102 (`verses.json`), പഠിപ്പിച്ചിരുന്നതുമില്ല (past habitual, as the word table's "used not to teach"): "(They, for their part,) moreover did not teach anyone, the two of them, without saying" → "(They, for their part,) the two of them, moreover, used not to teach anyone without saying".
17. p. 322, അക്ഷമരായി: "whom they were waiting for eagerly" → "… impatiently".
18. p. 333 (Qutb), പരലോകം നിശ്ശേഷം നഷ്ടപ്പെടുത്തുമെന്നും (future): "that it loses the Hereafter completely" → "that it will lose the Hereafter completely".
19. p. 333 (Qutb), പിശാചിന്റെ പ്രവൃത്തി (പിശാച് is "devil" throughout): "sihr is the work of Satan" → "sihr is the work of the devil".
20. p. 333 (Qutb), സൽപുരുഷന്മാർ ("good / virtuous men"; not "holy"): "two holy men like angels" → "two virtuous men like angels".
21. p. 332 (Qutb), അതെങ്ങിനെ സാധിക്കുന്നു: "How does it achieve it?" → "How is it accomplished?"

### Tense (words.json)

22. يَعۡلَمُونَ (v. 102 and v. 103), അവർ അറിയും (-ഉം future, as part 14 correction 7 and part 04 "they will know"): "they know" → "they will know" (both).
23. يُفَرِّقُونَ, അവർ ഭിന്നിപ്പുണ്ടാക്കും, വേർപ്പെടുത്തും: "they cause division, separate" → "they will cause division, will separate".

### Same English for two different Malayalam words

24. p. 326, യഹോവാ വന്ദന against യഹോവയുടെ ആരാധന ("worship of Jehovah") in the line before; വന്ദിക്കുക is "revere" on p. 324: "excellent Jehovah-worship" → "excellent Jehovah-reverence".
25. p. 326, സഖ്യം ("alliance", as സഖ്യകക്ഷി / സഖ്യബന്ധം in part 13; "friend" is മിത്രം): "to create friendship between" → "to create an alliance between".
26. p. 327, വകുപ്പ് is "division(s)" on pp. 325 and 331: "things belonging to the category of sihr" → "… the division of sihr".
27. പകിട്ട് (p. 325 "തനി പകിട്ടും മായയും", p. 332 "ചില പകിട്ട് വിദ്യകൾ") had "deception", which also renders വഞ്ചിതൻ ("deceived", pp. 328, 329): "sheer deception and illusion" → "sheer sham and illusion"; "merely some arts of deception" → "merely some arts of sham". Footnote item 5, കബളിപ്പിച്ചിട്ടുണ്ട്: "false prophets have deceived many" → "… have duped many".
28. Footnote item 5, യഹോവയുടെ ഇഷ്ടം ("liking", part 14) against ദൈവഹിതം "the divine will" (item 2): "the will of Jehovah could be known" → "the liking of Jehovah could be known".
29. p. 331 and p. 333 (Qutb), അല്ലാഹുവിന്റെ കിത്താബ് / കിതാബ് against അല്ലാഹുവിന്റെ ഗ്രന്ഥം "Allah's book" (verse 101): "Allah's Book" → "Allah's Kitab" (both; "the Kitab" as in earlier parts).

No reversed negations, added pronouns, added ﷺ, dropped തിരുമേനി, changed reported speech or misplaced footnotes were found.

## Checked and left as they are

- **Magic terms (point b).** Each Malayalam word has its own English: ആഭിചാരം sorcery (ആഭിചാരികൾ sorcerers, ആഭിചാര വിദഗ്ധൻ expert in sorcery), ക്ഷുദ്രം black magic (ക്ഷുദ്രക്കാർ black-magicians, ക്ഷുദ്രവിദഗ്ധൻമാർ experts in black magic, ക്ഷുദ്രപ്രയോഗം use of black magic), ക്ഷുദ്രകല the black art, ഇന്ദ്രജാലം conjuring, ചെപ്പടിവിദ്യ sleight of hand, കയ്യൊതുക്കം dexterity of hand, മായതന്ത്രം illusion tricks, വശീകരണം enchantment (വശീകരണശക്തി enchanting power), ജാലവിദ്യ jugglery, കൺകെട്ട് eye-binding, മാരണം witchcraft, മന്ത്രവാദികൾ mantra-men, മന്ത്രതന്ത്രങ്ങൾ mantras and tantras, മയക്കുവിദ്യകൾ arts of stupefying, സിഹ്ർ sihr. Faithful.
- **എന്നല്ല (v. 100) "Not only that"** (point c): എന്നല്ല as a sentence-opening connective is "not only so / nay"; the author's own word table gives എന്നല്ല, പക്ഷേ for بَلۡ, rendered "not only that, but". Kept.
- **സൂക്തങ്ങൾ "ayahs"** (word table v. 99) and ആയത്ത് "ayah" (p. 333): the same English for two words; വചനം is "verse" throughout. Left (open doubt 4).
- **Names**: ശലോമോൻ "Solomon" and the variant ശാലോമോൻ "Shalomon" (p. 326), യിസ്റായേൽ / യിസ്രായേല്യർ "Yisrayel / Yisrayelites", യഹോവ "Jehovah", നെബോഖദ്നേസർ "Nebuchadnezzar", അശ്ശൂര്യർ "Ashshurians", യവനൻമാർ "Yavanas". Left as the translator had them, but the treatment is mixed (some standard English, some transliterated); see open doubt 5.
- **"Bible" for both ബൈബിൾ and വേദപുസ്തകം** (വേദ പുസ്തക നിഘണ്ടു "Bible Dictionary", abbreviated Ve.Pu.Ni. as printed): the author himself equates them ("ബൈബിളിന്റെ ആധികാരിക നിഘണ്ടുവായ വേദപുസ്തക നിഘണ്ടു"). Left; open doubt 6.
- **ധൂർത്തൻ "a rogue"** (p. 326): ധൂർത്തൻ can also be "spendthrift / profligate" (the Bible extract goes on to wasted wealth). Left; open doubt 7.
- **"the work of the Ism"** for 'ഇസ്മിന്റെ പണി' (a practice's name) and **"the work of the devil"** for പിശാചിന്റെ പ്രവൃത്തി (p. 333): "work" for two words; left because the first is a fixed name of a practice.
- **"Many works … too" / "Many great men too"** (pp. 324, 325) for പല … -ഉം: kept with "too", following the rule not to drop -ഉം.
- **ദോഷം "fault"** (p. 329, "it also brings fault"), as fixed in part 14.
- **കഴ്ച** (p. 332, for കാഴ്ച "sight") and **മുടിച്ചിടും** (footnote 9): printed as they are; translated by the evident sense without a note, as with the slips left in parts 08–13.
- **ആ രണ്ട് മലക്കുകൾ ഏതെങ്കിലും വിധേന അറിയപ്പെട്ടു** (p. 328) "the two angels … were made known in some way": literal; left.
- **Printed punctuation mirrored**: no full stop in v. 99 before തോന്നിയവാസികളല്ലാതെ, after "witchcraft" (p. 325), after "too" (end of p. 327 point (1)), after footnote item 10, and the unclosed “ of Qutb's opening on p. 331.
- **Group markers** *[Verses 99–101]* and *[Verses 102–103]*: **not the author's words**; navigation aids kept as in parts 01–14. They match the author's two panels (pp. 320–321 and 322–323). See the note in part 02's `check.md`.
- `part.json` verses "99-103", pages "320-333", PDF pages "149-162": correct.

## Open doubts for the reviewer

1. **പഠിപ്പിച്ചുംകൊണ്ട് (p. 325)**: translator's DOUBT kept ("while also teaching" or "while teaching"); the same question as part 14's open doubt 1. One rendering should be chosen for all the -ഉംകൊണ്ട് forms.
2. **ചീരവേവിച്ചു (footnote item 9, p. 331)**: translator's DOUBT kept; the image clearly prints ചീരവേവിച്ചു as one word ("boil greens"), but its sense in the list is not certain.
3. **Footnote split over pp. 330–331**: no second *[p. 331]* inside the footnote; please confirm the convention.
4. **സൂക്തം / ആയത്ത്**: both "ayah(s)".
5. **Bible names**: one policy (standard English or transliteration) for ശലോമോൻ / ശാലോമോൻ, യിസ്റായേൽ, നെബോഖദ്നേസർ etc.
6. **വേദപുസ്തകം / ബൈബിൾ**: both "Bible".
7. **ധൂർത്തൻ**: "rogue" or "profligate".
8. **Earlier open doubts still apply** (not in this part): see parts 13 and 14.

## New terms (not in the glossary; used consistently in this part)

| Malayalam | Arabic | Rendering used |
| --- | --- | --- |
| സിഹ്ർ | sihr (السحر) | sihr |
| ആഭിചാരം / ആഭിചാരികൾ | — | sorcery / sorcerers |
| ക്ഷുദ്രം / ക്ഷുദ്രകല / ക്ഷുദ്രക്കാർ / ക്ഷുദ്രപ്രയോഗം | — | black magic / the black art / black-magicians / use of black magic |
| മാരണം | — | witchcraft |
| ഇന്ദ്രജാലം / ചെപ്പടിവിദ്യ / കയ്യൊതുക്കം | — | conjuring / sleight of hand / dexterity of hand |
| മായതന്ത്രം / മായ / പകിട്ട് | — | illusion tricks / illusion / sham |
| വശീകരണം | — | enchantment |
| ജാലവിദ്യ / കൺകെട്ട് | — | jugglery / eye-binding |
| മന്ത്രവാദികൾ / മന്ത്രതന്ത്രങ്ങൾ / ജപഹോമാദികൾ | — | mantra-men / mantras and tantras / japa and homa and the like |
| ഉറുക്കുനറുക്കുകൾ / അക്കക്കളങ്ങൾ / രക്ഷാതകിടുകൾ | — | amulets and charms / number-squares / protective plates |
| പരീക്ഷണം | fitnah (فتنة) | trial |
| മലക്ക് | malak | angel |
| ഹാറൂത്ത് / മാറൂത്ത് / ബാബിൽ (ബാബിലോൺ) | Harut / Marut / Babil | Harut / Marut / Babil (Babylon) |
| രാജവാഴ്ച / രാജത്വം | mulk | reign / kingship |
| തോന്നിയവാസികൾ (ദുർന്നടപ്പുകാർ) | fasiqun | the wayward (those of evil conduct) |
| ഓതുക / ഓതിക്കൊടുക്കുക / പാരായണം ചെയ്യുക | tala (تلا) | recite / recite and hand on / read through |
| ഓഹരി / വിഹിതം / പങ്ക് | khalaq | share / portion / lot |
| പുണ്യഫലം / പ്രതിഫലം | mathubah | merit-reward / reward |
| സൂക്ഷ്മത പാലിക്കുക | ittaqa | observe caution |
| വേദ പുസ്തക നിഘണ്ടു | — | Bible Dictionary (Ve.Pu.Ni.) |
| യഹോവ / യഹോവാ വന്ദന / ആരാധന | — | Jehovah / Jehovah-reverence / worship |
| സഖ്യം | — | alliance |
| ദയ / ഇഷ്ടം / ദൈവഹിതം | — | kindness / liking / the divine will |
| ലക്ഷണം / അഞ്ജനം / ജോത്സ്യൻമാർ | — | signs / anjanam / astrologers |
| കിത്താബ് / കിതാബ് | kitab | Kitab |
| ടെലെപ്പതി / മാഗ്നറ്റിസം | — | telepathy / magnetism |
| ആത്മീയ ശക്തികൾ / ആത്മീയേന്ദ്രിയങ്ങൾ | — | spiritual powers / spiritual senses |
| രിവായത്ത് | riwayah | riwayah |
