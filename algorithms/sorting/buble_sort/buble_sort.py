def swap(a, x, y):
    buf = a[x]
    a[x] = a[y]
    a[y] = buf

def bubleSort(a):
    aLen = len(a)
    for i in range(aLen):
        for j in range(aLen - i - 1):
            if a[j] > a[j+1]:
                swap(a, j, j+1)
    return a

print(bubleSort([-989, 3, 4666, -34, -43]))


