# lanqiaoOJ 183
# https://www.lanqiao.cn/problems/183/learning/?page=1&first_category_id=1&sort=students_count&problem_id=183
import math

if __name__ == "__main__":
    n = int(input())
    c = int(math.log(n, 2)) + 1  # 一共有c层
    a = [0] + list(map(int, input().split()))  # a[1]~a[n]
    s = [0] * (c+1)  # 记录每一层的和，s[1]~s[c]
    for i in range(1, c+1):  # 第1层到第c层
        s[i] = sum(a[2**(i-1):2**i - 1 + 1]) # 第 i 层 2^(i-1) ~ 2^i - 1，所以列表下标从1开始
    print(s.index(max(s)))
