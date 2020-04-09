'''
@Author: HotSuitor
@Date: 2020-03-09 15:03:37
@LastEditors: hs
@LastEditTime: 2020-03-09 15:46:32
@Description: hotsuitor@qq.com
'''
import random
import timeit
import time


def quickSort(arr, left=None, right=None):
    left = 0 if not isinstance(left, (int, float)) else left
    right = len(arr) - 1 if not isinstance(right, (int, float)) else right
    if left < right:
        partitionIndex = partition(arr, left, right)
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
    return arr


def partition(arr, left, right):
    pivot = left
    index = pivot + 1
    i = index
    while i <= right:
        if arr[i] < arr[pivot]:
            swap(arr, i, index)
            index += 1
        i += 1
    swap(arr, pivot, index - 1)
    return index - 1


def swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]


if __name__ == "__main__":
    random_list = []
    for i in range(1000000):
        random_list.append(random.randint(1, 100))

    start = time.perf_counter()
    quickSort(random_list)
    end = time.perf_counter()
    print('运行时间：{0}ms'.format((end - start) * 1000))
