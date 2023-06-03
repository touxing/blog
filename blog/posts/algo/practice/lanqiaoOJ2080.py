
if __name__ == "__main__":
  n = int(input())
  # s = list(map(int, input().split()))
  s = [int(i) for i in input().split()] # lamba表达式
  sum = 0
  for i in range(len(s)):
    for j in range(i+1, len(s)):
      sum += s[i]*s[j]

  print(sum)
