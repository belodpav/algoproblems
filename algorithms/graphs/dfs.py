def doDfs(g):
    visited = [False]*len(g)

    def dfs(g, u):

        visited[u] = True
        for v in g[u]:
            if not visited[v]:
                dfs(g, v)

    for i in range(len(g)):
        if not visited[i]:
            dfs(g, i)

    return visited


# example
data = [[1, 2, 3], [0, 4, 5], [0], [0], [1, 6], [1], [4]]

print(doDfs(data))