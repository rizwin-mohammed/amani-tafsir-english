"""Finds the book page where each verse translation first appears, for every surah PDF
in /mnt/project-files. Writes tools/pagemap.json, used by tools/next-part.py."""
import sys,re,subprocess,json,glob,os
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from ml2uni import a2u,demac
Q=json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','data','quran-uthmani.json')))
files={}
for f in glob.glob('/mnt/project-files/**/*.pdf',recursive=True):
    b=os.path.basename(f); m=re.match(r'(\d+)\.',b)
    if m and not b.startswith('00'): files[int(m.group(1))]=f
def pages(f): return int(re.search(r'Pages:\s+(\d+)',subprocess.run(['pdfinfo',f],capture_output=True,text=True).stdout).group(1))
out={}
for s in sorted(files):
    f=files[s]; N=pages(f); maxv=len(Q[s-1]['verses'])
    first={}
    for p in range(1,N+1):
        u=a2u(demac(subprocess.run(['pdftotext','-f',str(p),'-l',str(p),f,'-'],capture_output=True,text=True).stdout))
        for m in re.finditer(r'(?m)^\s*(\d{1,3})\s+[\u0D00-\u0D7F(]|\u0D27\s*(\d{1,3})\s*\u0D2A',u):
            v=int(m.group(1) or m.group(2))
            if 1<=v<=maxv and v not in first: first[v]=p
    # keep a monotone sequence (drop stray numbers that jump backwards or far ahead)
    seq=[];last=0
    for v in sorted(first):
        p=first[v]
        if p>=last and (not seq or p-seq[-1][1]<=40): seq.append((v,p)); last=p
    out[s]={'file':os.path.relpath(f,'/mnt/project-files'),'pages':N,'verses':maxv,'located':seq}
    print(s,N,maxv,len(seq),flush=True)
json.dump(out,open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'pagemap.json'),'w'),indent=0)
