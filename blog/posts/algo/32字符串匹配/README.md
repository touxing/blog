---
title: 32字符串匹配
date: 2020-03-10
icon: string
category:
  - 算法
tag:
  - 算法
  - algo
  - string
---
# 字符串匹配

在一个字符串A内匹配子串B

## 暴力匹配算法 Brute Force
通过暴力枚举匹配

## PK算法
设计Hash算法，通过Hash获得的值与子串的Hash值对比，如果相同，再比较字符串本身（处理Hash冲突的情况，值相同，字符串不同）

## BM(Boyer-Moore)算法
