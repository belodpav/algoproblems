from gcd import gcd

def lcm(a, b):
    return a // gcd(a, b) * b

print(lcm(12, 46))