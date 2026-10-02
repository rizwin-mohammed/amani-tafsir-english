import os,sys,subprocess,re
MAPS=os.path.join(os.path.dirname(os.path.abspath(__file__)),'maps')
PRE={"േ","ൈ","ൊ","ോ","ൌ","്ര","െ"}
POST={"്യ","്വ"}
MAC_ONLY=set("∂≠∏∑∞≤≥√π∫Ω≈∆«»…–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ")
def load(font):
    d={}
    for line in open(os.path.join(MAPS,font+'.map'),encoding='utf-8',errors='ignore'):
        if line.startswith('#'): continue
        line=line.strip()
        if not line or line.count('=')!=1: continue
        l,r=line.split('='); d[l.strip()]=r.strip()
    return d
def demac(t):
    if sum(c in "∂≠∏∞≤≥ƒ" for c in t)<3: return t
    out=[]
    for c in t:
        try: out.append(c.encode('mac_roman').decode('cp1252'))
        except Exception: out.append(c)
    return ''.join(out)
def vs(v,s):
    if v=="എ" and s=="െ": return "ഐ"
    if v=="ഒ" and s=="ാ": return "ഓ"
    if v=="ഒ" and s=="ൗ": return "ഔ"
    return v+s
def a2u(t,font='karthika'):
    R=load(font); i=0; pre=post=""; out=""
    while i<len(t):
        for n in (2,1):
            L=t[i:i+n]
            if L in R:
                u=R[L]
                if u in PRE: pre=u
                else:
                    j=i+n
                    if j<len(t) and t[j] in R and R[t[j]] in POST:
                        post=R[t[j]]; i+=1
                    if u in ("എ","ഒ"): out+=post+vs(pre,u)
                    else: out+=u+post+pre
                    pre=post=""
                i+=n; break
            elif n==1:
                out+=L; i+=1
    out=out.replace('ഌ','നു')
    out=re.sub(r'(?<=[\u0D00-\u0D7F\u200c\u200d])-(?=[\u0D00-\u0D7F])','',out)
    return out
if __name__=='__main__':
    f,pg=sys.argv[1],sys.argv[2]
    t=subprocess.run(['pdftotext','-f',pg,'-l',pg,f,'-'],capture_output=True,text=True).stdout
    print(a2u(demac(t),sys.argv[3] if len(sys.argv)>3 else 'karthika')[:900])
