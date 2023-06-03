n = int(input())
d = {}

for i in range(n):
    x = int(input())
    d[x] = d.get(x, 0)+1

for x, y in sorted(d.items()):
    print(f'{x} {y}')
