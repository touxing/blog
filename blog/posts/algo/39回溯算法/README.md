---
title: 39回溯算法
date: 2020-03-27
icon: calculate
category:
  - 算法
tag:
  - 算法
  - algo
  - 回溯算法
---
# 回溯算法

解决一个回溯问题，实际是一棵决策树的遍历过程

思考3个问题：
1. 路径：已经做出的选择
2. 选择列表：当前可以做的选择
3. 结束条件：达到决策的底层，无法再做选择

回溯算法框架
```python
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return

    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```

遍历一棵树框架：
```python
def traverse(root:TreeNode) -> TreeNode:
    for TreeNode child in root.childern:
        // 前序遍历需要的操作
        traverse(child);
        // 后序遍历需要的操作
```
leetcode 46.全排列
```python
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def backtrack(nums: List[int], track: List[int]):
            '''
            路径：记录在 track中
            选择列表 nums中不存在于track中的那些元素
            结束条件 nums中的元素全部再track中出现
            '''
            # 触发结束条件
            if len(track) == len(nums):
                # 列表是引用传递，导致返回的结构是 [[],[],[]]
                # 传递拷贝值
                res.append(track[:])
                return

            for item in nums:
              # 排除不合法的选择
              if item in track:
                continue
              # 做选择
              track.append(item)
              # 进入下一层决策树
              backtrack(nums, track)
              # 取消选择
              track.pop()
        res = []
        track = [] # 记录路径
        backtrack(nums, track)
        return res
```

N皇后问题

```python
#
# @lc app=leetcode.cn id=51 lang=python3
#
# [51] N皇后
#

# @lc code=start
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:

      def backtrack(board: list, row: int):
        '''
        路径：board 中小于 row 的行都已经放置皇后
        选择列表：第 row 行的所有列都是放置皇后的选择
        结束条件：row 超过 board 的最后一行
        '''
        # 结束条件
        if row == len(board):
          result.append(board[:])
          return

        n = len(board[row]) # 列数
        for col in range(n):
          # 排除不合法选择
          if not isValid(board, row, col):
            continue
          # 做选择
          # board[row][col] = 'Q' # TypeError: 'str' object does not support item assignment
          board[row] = replacer(board[row], 'Q', col)
          # 进入下一轮决策
          backtrack(board, row+1)
          # 撤销选择
          board[row] = replacer(board[row], '.', col)

      def isValid(board: list, row: int, col: int):
        '''
        是否可以在[row][col]放置皇后
        '''
        n = len(board) # 行数
        # 检查上方列是否有皇后冲突
        for i in range(n):
          if board[i][col] == 'Q':
            return False

        # 检查右上方是否有皇后冲突
        i = row - 1
        j = col + 1
        while i >= 0 and j < n:
          if board[i][j] == 'Q':
            return False
          i -= 1
          j += 1

        # 检查左上方是否有皇后冲突
        i = row - 1
        j = col - 1
        while i >= 0 and j >= 0:
          if board[i][j] == 'Q':
            return False
          i -= 1
          j -= 1

        return True

      def replacer(s, newstring, index, nofail=False):
        # raise an error if index is outside of the string
        if not nofail and index not in range(len(s)):
            raise ValueError("index outside given string")

        # if not erroring, but the index is still not in the correct range..
        if index < 0:  # add it to the beginning
            return newstring + s
        if index > len(s):  # add it to the end
            return s + newstring

        # insert the new string between "slices" of the original
        return s[:index] + newstring + s[index + 1:]

      # 初始化键盘，n行n列  '.'表示空位 'Q'表示皇后
      board = ['.'*n for _ in range(n)]

      result = []
      backtrack(board, 0)
      return result


# @lc code=end

```

小结：
回溯算法核心是遍历一棵决策树的过程
3个问题：
* 路径：选择一条开始的路径，一般是 DFS
* 选择列表：每次选择后可做的选择
* 结束条件：遍历到决策树底层，回撤路径

计算机解决问题的思路基本是穷举法（除了计算问题）
不要瞧不起穷举法，穷举法也有技巧，回溯算法，动态规划法就是
选择“聪明”地穷举

感悟：
学正统的知识，按步骤流程走，不要老想着走捷径，在边界内做事
