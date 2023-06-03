def hanoi(x, y, z, n):
    global sum
    if n == 1:
        sum += 1
        print(f"{sum} #{n} : {x} -> {z}")
    else:
        hanoi(x, z, y, n-1)
        sum += 1
        print(f"{sum} #{n}: {x} -> {z}")
        hanoi(y, x, z, n-1)


if __name__ == '__main__':
    # n 要移动的圆盘数，圆盘编号 1-n
    # m 表示最少移动步数的第 m 步
    n, m = map(int, input().split())
    sum = 0
    hanoi('A', 'B', 'C', n)
    print(sum)
