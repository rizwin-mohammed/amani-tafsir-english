"""Says what the next translation part should be.

Finds the first surah (in order) that still has untranslated verses and whose PDF is in
/mnt/project-files, and prints the verse to start from, the PDF pages where nearby verse
translations begin (from tools/pagemap.json), and a suggested stopping page about
TARGET_PAGES further on. The translator still decides the exact end: always at the end of
one of the author's verse groups, never in the middle of one.

Usage: python3 tools/next-part.py            (prints JSON)
"""
import glob
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
TARGET_PAGES = 5

quran = json.load(open(os.path.join(ROOT, 'data', 'quran-uthmani.json')))
pagemap = json.load(open(os.path.join(HERE, 'pagemap.json')))


def translated(surah):
    """Verse numbers already translated for a surah, from its folder in content/en."""
    dirs = glob.glob(os.path.join(ROOT, 'content', 'en', f'{surah:03d}-*'))
    if not dirs:
        return set(), None
    d = dirs[0]
    files = [os.path.join(d, 'verses.json')] + glob.glob(os.path.join(d, 'parts', '*', 'verses.json'))
    done = set()
    for f in files:
        if os.path.exists(f):
            done |= {v['n'] for v in json.load(open(f))['verses']}
    return done, d


def main():
    for ch in quran:
        s = ch['n']
        total = len(ch['verses'])
        done, folder = translated(s)
        if len(done) >= total:
            continue
        info = pagemap.get(str(s))
        if not info:
            print(json.dumps({'surah': s, 'name': ch['name'], 'blocked': 'PDF for this surah is not in /mnt/project-files yet; skip to the next surah only after telling the user'}, ensure_ascii=False))
            continue
        start = min(v for v in range(1, total + 1) if v not in done)
        located = info['located']
        before = [p for v, p in located if v <= start]
        start_page = 1 if start == 1 else (before[-1] if before else 1)
        nearby = [[v, p] for v, p in located if start_page - 1 <= p <= start_page + TARGET_PAGES + 8]
        parts_dir = os.path.join(folder, 'parts') if folder else None
        next_id = 1
        if parts_dir and os.path.isdir(parts_dir):
            ids = [int(x) for x in os.listdir(parts_dir) if re.fullmatch(r'\d+', x)]
            next_id = max(ids, default=0) + 1
        print(json.dumps({
            'surah': s,
            'name': ch['name'],
            'name_ar': ch['name_ar'],
            'total_verses': total,
            'verses_done': len(done),
            'start_verse': start,
            'pdf': '/mnt/project-files/' + info['file'],
            'pdf_pages': info['pages'],
            'start_pdf_page': start_page,
            'suggested_end_pdf_page': min(info['pages'], start_page + TARGET_PAGES),
            'verse_first_pdf_page_nearby': nearby,
            'surah_folder': folder or os.path.join(ROOT, 'content', 'en', f"{s:03d}-<slug>"),
            'part_id': f'{next_id:02d}',
            'new_surah': folder is None,
        }, ensure_ascii=False, indent=1))
        return
    print(json.dumps({'all_done': True}))


main()
