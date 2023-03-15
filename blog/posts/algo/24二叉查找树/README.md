---
title: 24二叉查找树
date: 2020-03-10
icon: tree
category:
  - 算法
tag:
  - 算法
  - algo
  - 二叉查找树
---
# 二叉查找树

> 二叉查找树也叫二叉搜索树 Binary Search Tree
 要求在树中的任意一个节点，其左子树中的每个节点的值，都要小于这个节点的值，
 而右子树节点的值都大于这个节点的值

 二叉树算法框架：明确一个节点要做的事，其他抛给框架
 ```python
def traverse(root: TreeNode) {
    # root 需要做什么？在这做。
    # 其他的不用 root 操心，抛给框架
    traverse(root.left);
    traverse(root.right);
}
 ```

BST遍历框架
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
def BST(TreeNode: root, target: int) -> TreeNode:
  if root.val == target:
  # 找到目标，做些什么，其他交给框架
  if root.val < target: # 查找目标在右子树，递归遍历右子树
    root.right = BST(root.right, target)
  if root.val > target: # 查找目标在左子树，递归遍历左子树
    root.left = BST(root.left, target)
```

@[code](./binarySearchTree.js)
