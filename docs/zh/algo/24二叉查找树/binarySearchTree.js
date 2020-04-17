/**
 * 二叉查找树
 * 要求在树中的任意一个节点，其左子树中的每个节点的值，都要小于这个节点的值，
 * 而右子树节点的值都大于这个节点的值
 */

class Node {
  constructor(data) {
    this.data = data || null
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(tree) {
    this.tree = tree || new Node(null)
  }

  find(data) {
    let p = this.tree
    while (p != null) {
      if (data < p.data) p = p.left
      else if (data > p.data) p = p.right
      else return p
    }
    return null
  }

  insert(data) {
    if (this.tree == null) {
      this.tree = new Node(data)
      return
    }

    let p = this.tree
    while (p != null) {
      if (data > p.data) {
        if (p.right == null) {
          p.right = new Node(data)
          return
        }
        p = p.right
      } else {
        // data < p.data
        if (p.left == null) {
          p.left = new Node(data)
          return
        }
        p = p.left
      }
    }
  }

  delete(data) {
    let p = this.tree // p指向要删除的节点，初始化指向根节点
    let pp = null // pp记录的是p的父节点
    while (p != null && p.data != data) {
      pp = p
      if (data > p.data) p = p.right
      else p = p.left
    }
    if (p == null) return

    // 要删除的节点有两个子节点
    if (p.left != null && p.right != null) {
      let minP = p.right // 查找右子树中最小节点
      let minPP = p // minPP 表示minP的父节点
      while (minP.left != null) {
        minPP = minP
        minP = minP.left
      }
      p.data = minP.data // 将minP的数据替换到p中
      p = minP
      pp = minPP.left
    }

    // 删除节点是叶子节点或仅有一个子节点
    let child // p的子节点
    if (p.left != null) child = p.left
    else if (p.right != null) child = p.right
    else child = null

    if (pp == null) tree = child
    else if (pp.left == p) pp.left = child
    else pp.right = child
  }
}
