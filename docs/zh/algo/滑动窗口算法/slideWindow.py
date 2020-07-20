class Solution:
    def minWindow(self, s: str, t: str) -> str:
      '''
      暴力破解，穷举法
      '''
      # 当前滑动窗口中需要的各元素的数量
      need=collections.defaultdict(int)
      for c in t:
          need[c]+=1
      needCnt=len(t) # 所需元素的总数量
      left=0 # 窗口左边界
      res=(0,float('inf'))
      for right,c in enumerate(s):
          # right 窗口有边界
          # 包含待查找的子串，窗口左边缩小
          if need[c]>0:
              needCnt-=1

          # need中所有元素的数量都小于等于0时，表示当前滑动窗口不再需要任何元素。
          need[c]-=1 #遍历，need[c]==0时表示，刚好包含其中一个对应的元素，
          if needCnt==0:       #步骤一：滑动窗口包含了所有T元素
              while True:      #步骤二：左边窗口缩小，排除多余元素
                  c=s[left]
                  if need[c]==0: # 元素个数刚好满足
                      break
                  need[c]+=1 # 对应的子串字符数减少
                  left+=1 # 窗口左边缩小
              if right-left<res[1]-res[0]:   #记录结果
                  res=(left,right)
              need[s[left]]+=1  #步骤三：left增加一个位置，窗口右边放大，寻找新的满足条件滑动窗口
              left+=1 # 窗口缩小右移
              needCnt+=1 # 需要元素个数+1
      return '' if res[1]>len(s) else s[res[0]:res[1]+1]    #如果res始终没被更新过，代表无满足条件的结果
