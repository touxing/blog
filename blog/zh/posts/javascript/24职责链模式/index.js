// 定义一个公共类
let Leader = function () {
  this.nextLeader = null
}
Leader.prototype.setNext = function (next) {
  this.nextLeader = next
  return next // 这样可以链式子调用
}

// 定义职责链的节点
let GroupLeader = new Leader()
GroupLeader.handle = function (duration) {
  if (duration <= 0.5) {
    console.log('<=0.5天 小组领导可以批，批准了')
  } else {
    this.nextLeader.handle(duration)
  }
}

let DepartmentLeader = new Leader()
DepartmentLeader.handle = function (duration) {
  if (duration <= 1) {
    console.log('<=1天 部门领导可以批，批准了')
  } else {
    this.nextLeader.handle(duration)
  }
}

let GeneralLeader = new Leader()
GeneralLeader.handle = function (duration) {
  if (duration <= 2) {
    console.log('<=2天 总经理可以批，批准了')
  } else {
    console.log('想离职是吧？')
  }
}

// 排列职责链
// GroupLeader.setNext(DepartmentLeader)
// DepartmentLeader.setNext(GeneralLeader)
GroupLeader.setNext(DepartmentLeader).setNext(GeneralLeader)

// 执行场景，请假，组长批不了，递交给上一级部门领导，部门领导批不了递交给上一级总经理
GroupLeader.handle(0.5)
GroupLeader.handle(1)
GroupLeader.handle(2)
GroupLeader.handle(3)

// ES6
// 领导基类
class Leader2 {
  constructor() {
    this.nextLeader = null
  }
  setNext(next) {
    this.nextLeader = next
    return next
  }
}

class GroupLeader2 extends Leader2 {
  handle(duration) {
    if (duration <= 0.5) {
      console.log('<=0.5天 小组领导可以批，批准了')
    } else {
      this.nextLeader.handle(duration)
    }
  }
}

class DepartmentLeader2 extends Leader2 {
  handle(duration) {
    if (duration <= 1) {
      console.log('<=1天 部门领导可以批，批准了')
    } else {
      this.nextLeader.handle(duration)
    }
  }
}

class GeneralLeader2 extends Leader2 {
  handle(duration) {
    if (duration <= 2) {
      console.log('<=2天 总经理可以批，批准了')
    } else {
      console.log('想离职是吧？')
    }
  }
}

const ZhangSan = new GroupLeader2()
const LiSi = new DepartmentLeader2()
const WangWu = new GeneralLeader2()

ZhangSan.setNext(LiSi).setNext(WangWu)
ZhangSan.handle(0.5) //  小组领导经过一番心理斗争：批准了
ZhangSan.handle(1) //  部门领导经过一番心理斗争：批准了
ZhangSan.handle(2) //  总经理经过一番心理斗争：批准了
ZhangSan.handle(3) //  总经理：不准请这么长的假
