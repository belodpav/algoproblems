from math import inf

def bfs(g, source, target):
    d = [inf]*len(g)
    d[source] = 0

    q = [source]

    while len(q) > 0:
        u = q.pop(0)
        for v in g[u]:
            if d[v] == inf:
                d[v] = d[u] + 1
                q.append(v)
    return d[target]

data = [[1, 2, 3], [0, 4, 5], [0], [0], [1, 6], [1], [4]]

print(bfs(data, 0, 6))

