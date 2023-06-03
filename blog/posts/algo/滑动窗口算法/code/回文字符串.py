# 判断是否回文字符串

def isHuiwen(s:str):
  n = len(s)
  i = 0
  j = n-1
  while i <j:
    if(s[i] != s[j]):
      print(f"N")
      break
    i += 1
    j -= 1

  print(f"Y")
