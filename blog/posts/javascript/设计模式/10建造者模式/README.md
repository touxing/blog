---
date: 2020-11-23
category:
  - 设计模式
tag:
  - 建造者模式
---
# 建造者模式

建造者模式（Builder Pattern）又称生成器模式，分步构建一个复杂对象，并允许按步骤构造。同样的构建过程可以采用不同的表示，将一个复杂**对象的构建层与其表示层分离**。

例如汽车装配，汽车由车身、引擎、轮胎组合而成。汽车制造厂一般不自己生产全部的部件，而是从零件商采购零件组装，最后完成装配。

代码实现

```js
// 建造者，汽车部件厂商，提供具体零件的生产
function CarBuilder({ color = "white", weight = "0" }) {
  this.color = color;
  this.weight = weight;
}

// 生产部件，轮胎
CarBuilder.prototype.buildTyre = function(type) {
  switch (type) {
    case "small":
      this.tyreType = "小号轮胎";
      this.tyreIntro = "正在使用小号轮胎";
      break;
    case "normal":
      this.tyreType = "中号轮胎";
      this.tyreIntro = "正在使用中号轮胎";
      break;
    case "big":
      this.tyreType = "大号轮胎";
      this.tyreIntro = "正在使用大号轮胎";
      break;
  }
};

// 生产部件，发动机
CarBuilder.prototype.buildEngine = function(type) {
  switch (type) {
    case "small":
      this.engineType = "小马力发动机";
      this.engineIntro = "正在使用小马力发动机";
      break;
    case "normal":
      this.engineType = "中马力发动机";
      this.engineIntro = "正在使用中马力发动机";
      break;
    case "big":
      this.engineType = "大马力发动机";
      this.engineIntro = "正在使用大马力发动机";
      break;
  }
};

/* 奔驰厂家，负责最终汽车产品的装配 */
function benChiDirector(tyre, engine, param) {
  var _car = new CarBuilder(param);
  _car.buildTyre(tyre);
  _car.buildEngine(engine);
  return _car;
}

// 获得产品实例
var benchi1 = benChiDirector("small", "big", {
  color: "red",
  weight: "1600kg"
});
console.log(benchi1);
```

ES6 实现并加入链式调用

```js
class CarBuilder {
  constructor({ color = "black", weight = "1000kg" }) {
    this.clolr = color;
    this.weight = weight;
  }

  // 生产部件，轮胎
  buildTyre(type) {
    const tyre = {}; // 部件单独放到一个对象中保存，结构更清晰
    switch (type) {
      case "small":
        tyre.tyreType = "小号轮胎";
        tyre.tyreIntro = "正在使用小号轮胎";
        break;
      case "normal":
        tyre.tyreType = "中号轮胎";
        tyre.tyreIntro = "正在使用中号轮胎";
        break;
      case "big":
        tyre.tyreType = "大号轮胎";
        tyre.tyreIntro = "正在使用大号轮胎";
        break;
    }
    this.tyre = tyre;
    return this;
  }
  //
  buildEngine(type) {
    const engine = {};
    switch (type) {
      case "small":
        engine.engineType = "小马力发动机";
        engine.engineIntro = "正在使用小马力发动机";
        break;
      case "normal":
        engine.engineType = "中马力发动机";
        engine.engineIntro = "正在使用中马力发动机";
        break;
      case "big":
        engine.engineType = "大马力发动机";
        engine.engineIntro = "正在使用大马力发动机";
        break;
    }
    this.engine = engine;
    return this;
  }
}

// 汽车装配，获得产品实例
const benchi1 = new CarBuilder({ color: "red", weight: "1600kg" })
  .buildTyre("small")
  .buildEngine("big");

console.log(benchi1);
```

## 建造者通用实现

代码实现

```js
// 建造者，部件生产
class ProductBuilder {
    constructor(param) {
        this.param = param
    }

    /* 生产部件，part1 */
    buildPart1() {
        // ... Part1 生产过程
        this.part1 = 'part1'

    }

    /* 生产部件，part2 */
    buildPart2() {
        // ... Part2 生产过程
        this.part2 = 'part2'
    }
}

/* 指挥者，负责最终产品的装配 */
class Director {
    constructor(param) {
        const _product = new ProductBuilder(param)
        _product.buildPart1()
        _product.buildPart2()
        return _product
    }
}

// 获得产品实例
const product = new Director('param')
结合链模式：

// 建造者，汽车部件厂家
class CarBuilder {
    constructor(param) {
        this.param = param
    }

    /* 生产部件，part1 */
    buildPart1() {
        this.part1 = 'part1'
        return this
    }

    /* 生产部件，part2 */
    buildPart2() {
        this.part2 = 'part2'
        return this
    }
}

// 汽车装配，获得产品实例
const benchi1 = new CarBuilder('param')
    .buildPart1()
    .buildPart2()
```

如果希望扩展实例的功能，那么只需要在建造者类的原型上增加一个实例方法，再返回 this 即可。

值得一提的是，结合链模式的建造者模式中，装配复杂对象的链式装配过程就是指挥者 Director 角色，只不过在链式装配过程中不再封装在具体指挥者中，而是由使用者自己确定装配过程。

我们提炼一下建造者模式，这里的生产汽车的奔驰厂家就相当于指挥者（Director），厂家负责将不同的部件组装成最后的产品（Product），而部件的生产者是部件厂家相当于建造者（Builder），我们通过指挥者就可以获得希望的复杂的产品对象，再通过访问不同指挥者获得装配方式不同的产品。主要有下面几个概念：
Director： 指挥者，调用建造者中的部件具体实现进行部件装配，相当于整车组装厂，最终返回装配完毕的产品；
Builder： 建造者，含有不同部件的生产方式给指挥者调用，是部件真正的生产者，但没有部件的装配流程；
Product： 产品，要返回给访问者的复杂对象；
建造者模式的主要功能是构建复杂的产品，并且是复杂的、需要分步骤构建的产品，其构建的算法是统一的，构建的过程由指挥者决定，只要配置不同的指挥者，就可以构建出不同的复杂产品来。也就是说，建造者模式将产品装配的算法和具体部件的实现分离，这样构建的算法可以扩展和复用，部件的具体实现也可以方便地扩展和复用，从而可以灵活地通过组合来构建出不同的产品对象。

## 优缺点

优点：

使用建造者模式可以使产品的构建流程和产品的表现分离，也就是将产品的创建算法和产品组成的实现隔离，访问者不必知道产品部件实现的细节；
扩展方便，如果希望生产一个装配顺序或方式不同的新产品，那么直接新建一个指挥者即可，不用修改既有代码，符合开闭原则；
更好的复用性，建造者模式将产品的创建算法和产品组成的实现分离，所以产品创建的算法可以复用，产品部件的实现也可以复用，带来很大的灵活性；

缺点：

建造者模式一般适用于产品之间组成部件类似的情况，如果产品之间差异性很大、复用性不高，那么不要使用建造者模式；
实例的创建增加了许多额外的结构，无疑增加了许多复杂度，如果对象粒度不大，那么我们最好直接创建对象；

## 适用场景

相同的方法，不同的执行顺序，产生不一样的产品时，可以采用建造者模式；
产品的组成部件类似，通过组装不同的组件获得不同产品时，可以采用建造者模式；
