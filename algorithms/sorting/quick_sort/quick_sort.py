def qsort(a, l, r):
    if l < r:
        q = partition(a, l, r)
        qsort(a, l, q)
        qsort(a, q + 1, r)

def partition(a, l, r):
    q = (l + r) // 2

    while l <= r:
        while a[l] < a[q]:
            l += 1
        while a[r] > a[q]:
            r -= 1

        if l >= r:
            break
        swap(a, l, r)
        l += 1
        r -= 1

    return r

def swap(a, x, y):
    a[x] = a[x] + a[y]
    a[y] = a[x] - a[y]
    a[x] = a[x] - a[y]


# Example:
a = [-545, 3, 0, 0, 345, -23, 99]

qsort(a, 0, len(a) - 1)

print(a)