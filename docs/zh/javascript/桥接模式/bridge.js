/*
 * @Author: HotSuitor
 * @Date: 2020-03-16 16:58:00
 * @LastEditors: hs
 * @LastEditTime: 2020-03-18 13:56:43
 * @Description: hotsuitor@qq.com
 */
/**
 * 交接模式，将抽象部分与它的实现部分分离，使他们都可以独立地变化
 * 使用组合关系代替继承关系，降低抽象和实现两个可变纬度的耦合度
 */

// 用桥接模式 实现工厂生产洗衣机的不同型号

// 组装洗衣机
function Washer(motorType, rollerType, transducerType) {
  this.motor = new Motor(motorType);
  this.roller = new Roller(rollerType);
  this.transducer = new Transducer(transducerType);
}

// 洗衣机工作
Washer.prototype.work = function() {
  this.motor.run();
  this.roller.run();
  this.transducer.run();
};

// 电机
function Motor(type) {
  this.motorType = type + "电机";
}
Motor.prototype.run = function() {
  console.log(this.motorType + "开始工作");
};

// 滚筒
function Roller(type) {
  this.rollerType = type + "滚筒";
}
Roller.prototype.run = function() {
  console.log(this.rollerType + "开始工作");
};

// 变频器
function Transducer(type) {
  this.transducerType = type + "变频器";
}
Transducer.prototype.run = function() {
  console.log(this.transducerType + "开始工作");
};

// 新建洗衣机
var washerA = new Washer("小功率", "直立", "小功率");
washerA.work();

var washerB = new Washer("中功率", "滚筒", "中功率");
washerB.work();

// es6实现
class Washer2 {
  constructor(motorType, rollerType, transducerType) {
    this.motor = new Motor2(motorType);
    this.roller = new Roller2(rollerType);
    this.transducer = new Transducer2(transducerType);
  }
  work() {
    this.motor.run();
    this.roller.run();
    this.transducer.run();
  }
}

class Motor2 {
  constructor(motorType) {
    this.motorType = motorType + "电机";
  }
  run() {
    console.log(this.motorType + "开始工作");
  }
}

class Roller2 {
  constructor(rollerType) {
    this.rollerType = rollerType + "滚筒";
  }
  run() {
    console.log(this.rollerType + "开始工作");
  }
}

class Transducer2 {
  constructor(transducerType) {
    this.transducerType = transducerType + "变频器";
  }
  run() {
    console.log(this.transducerType + "开始工作");
  }
}

let washerA1 = new Washer2("大功率", "横滚", "中等变频");
washerA1.work();
