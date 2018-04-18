def binarySearch(a, x):
    l, r = 0, len(a) - 1

    while l <= r:
        mid = round((r + l) / 2)
        if a[mid] == x:
            return mid
        elif x > a[mid]:
            l = mid + 1
        else:
            r = mid - 1
    return -1

print(binarySearch([1, 5, 6, 7, 7], 6))