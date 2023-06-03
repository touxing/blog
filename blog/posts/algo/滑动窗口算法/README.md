---
title: 滑动窗口算法
date: 2020-03-27
icon: calculate
category:
  - 算法
tag:
  - 算法
  - algo
  - 滑动窗口算法
---


## 尺寸法

在区间操作时，用两个指针同时遍历区间，从而实现高效操作。
限制：i < j, 一般用于区间操作

可以把需要两重遍历的操作 转变为一重循环操作
模板
```js
for(let i = 0, j = n-1; i < j; i++,j--) {
  // 遍历操作
}
```

while实现模板
```js
let s = 'xxx'
let n = s.length
let i = 0, j=n-1
while(i<j) {
  // do something
  i++,j-- // 移动指针
}
```

判断是否回文字符串
@[code](./code/回文字符串.py)

### 反向扫描

### 同向扫描

#### 滑动窗口算法

> 维护一个窗口大小，左边向右滑，缩小窗口，右边向优化，增大窗口，滑来滑去，找到最佳答案

滑动窗口算法逻辑如下
```cpp
int left = 0, right = 0;

while (right < s.size()) {
    // 增大窗口
    window.add(s[right]);
    right++;

    while (window needs shrink) {
        // 缩小窗口
        window.remove(s[left]);
        left++;
    }
}
```

算法框架
```cpp
/* 滑动窗口算法框架 */
void slidingWindow(string s, string t) {
    unordered_map<char, int> need, window;
    for (char c : t) need[c]++;

    int left = 0, right = 0;
    int valid = 0;
    while (right < s.size()) {
        // c 是将移入窗口的字符
        char c = s[right];
        // 右移窗口
        right++;
        // 进行窗口内数据的一系列更新
        ...

        /*** debug 输出的位置 ***/
        printf("window: [%d, %d)\n", left, right);
        /********************/

        // 判断左侧窗口是否要收缩
        while (window needs shrink) {
            // d 是将移出窗口的字符
            char d = s[left];
            // 左移窗口
            left++;
            // 进行窗口内数据的一系列更新
            ...
        }
    }
}
```
LeetCode 76.查找最小覆盖子串 刷题

@[code](./code/slideWindow.py)
