def genP(p_dim, n):
    p = [1]
    for i in range(1, n):
        p.append(p[i - 1] * p_dim)

    return p

def getHashes(t, p):
    h = []
    l = len(t)
    for i in range(l):
        h.append((ord(t[i]) - ord('a') + 1) * p[i])
        if i != 0:
            h[i] += h[i - 1]
    return h

def indexOf(t, s):
    tLen = len(t)
    sLen = len(s)
    p = genP(33, len(t))
    h = getHashes(t, p)
    h_s = getHashes(s, p).pop()
    indexes = []

    for i in range(tLen - sLen + 1):
        cur_h = h[i + sLen - 1]
        if i != 0:
            cur_h -= h[i - 1]

        if (cur_h == h_s*p[i]):
            indexes.append(i)

    return indexes

print(indexOf('hello world. this is time', 'is'))
