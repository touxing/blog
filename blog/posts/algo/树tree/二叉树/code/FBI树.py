# lanqiaoOJ 571
# https://www.lanqiao.cn/problems/571/learning/?page=1&first_category_id=1&sort=students_count&problem_id=571

class Node:
    def __init__(self, s, l=None, r=None) -> None:
        '''
        初始化节点，左右子树默认为None
        '''
        self.l = l
        self.r = r
        if '0' in s and '1' in s:
            self.value = 'F'
        elif '0' in s:
            self.value = 'B'
        else:
            self.value = 'I'


def build_FBI(s):
    if len(s) == 1:
        return Node(s)  # 如果是子节点，返回节点
    root = Node(s, build_FBI(s[:len(s)//2]), build_FBI(s[len(s)//2:]))
    return root


def postorder(root):
    if root is None:
        return
    postorder(root.l)
    postorder(root.r)
    print(root.value, end="")


n = int(input())
s = input()
root = build_FBI(s)
postorder(root)
