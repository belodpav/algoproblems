def indexOf(t, s):
    n = len(t)
    m = len(s)
    indexes = []

    for i in range(n - m + 1):
        if t[i:i + m] == s:
            indexes.append(i)

    return indexes

# Testing
t = 'hello world, this is me world'
s = 'world'
print(indexOf(t, s))