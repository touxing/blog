---
title: 11常见排序实现
date: 2020-03-10
icon: sort
category:
  - 算法
tag:
  - 算法
  - algo
  - 排序
---

# 排序

## 冒泡排序
@[code](./bubbleSort.js)

## 插入排序
@[code](./insertionSort.js)

## 选择排序
@[code](./selectSort.js)

## 快速排序
@[code](./quickSort2.js)

::: warning
快速排序（递归实现）不适用数据超过60w(个人粗略测试)的数据排序，因为递归分隔区间排序过多容易导致爆栈
可以改用为迭代方式实现
:::
