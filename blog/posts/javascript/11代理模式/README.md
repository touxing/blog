---
date: 2020-11-23
category:
  - 设计模式
tag:
  - 代理模式
---

# 代理模式

代理模式 （Proxy Pattern）又称委托模式，它为目标对象创造了一个代理对象，以控制对目标对象的访问。

代理模式把代理对象插入到访问者和目标对象之间，从而为访问者对目标对象的访问引入一定的间接性。正是这种间接性，给了代理对象很多操作空间，比如在调用目标对象前和调用后进行一些预操作和后操作，从而实现新的功能或者扩展目标的功能。

> 有点像黑社会大佬进警局，有事和我的代理律师讲。律师就是代理对象，律师帮目标（大佬）做很多事情，办手续，保释等

例子 2，明星通过经纪人接广告
代码实现

```js
// 小鲜肉 明星
var SuperStar = {
  name: "吴一含",
  playAdvertisement: function(ad) {
    console.log(ad);
  }
};

// 经纪人
var ProxyAssistant = {
  name: "经纪人张某",
  playAdvertisement: function(reward, ad) {
    if (reward > 1000000) {
      // 如果报酬超过100w
      console.log("没问题，我们小鲜鲜最喜欢拍广告了！");
      SuperStar.playAdvertisement(ad);
    } else console.log("没空，滚！");
  }
};
ProxyAssistant.playAdvertisement(10000, '纯蒸酸牛奶，味道纯纯，尽享纯蒸')
```


在 ES6 之前，一般是使用 Object.defineProperty 来完成相同的功能
```js
// Object.defineProperty 属性实现代理
// 明星
const SuperStar = {
  name: "小鲜肉",
  scheduleFlagActually: false, // 档期标识位，false=没空，true=有空
  playAdvertisement(ad) {
    console.log("明星代理接广告了：" + ad);
  }
};
// 经纪人
const ProxyAssistant = {
  name: "经纪人李思",
  scheduleTime(ad) {
    Object.defineProperty(SuperStar, "scheduleFlag", {
      configurable: true,
      // 监听 scheduleFlag 值的变化
      get() {
        return this.scheduleFlagActually;
      },
      set(value) {
        console.log("this", this);
        if (this.scheduleFlagActually === false && value === true) {
          this.scheduleFlagActually = value; // 明星有空
          this.playAdvertisement(ad); // 安排上了
        }
      }
    });
    setTimeout(() => {
      console.log("小鲜肉有空了");
      console.log("scheduleTime -> SuperStar.scheduleFlag", SuperStar.scheduleFlag)
      SuperStar.scheduleFlag = true;
    }, 2000);
  },
  playAdvertisement(reward, ad) {
    if (reward > 100000) {
      // 广告费超出10w
      console.log("没问题，小香肉最喜欢拍广告了");
      this.scheduleTime(ad);
    } else {
      console.log("不好意思，出场费太低");
    }
  }
};

ProxyAssistant.playAdvertisement(100000, "广告：名流世家，尽显活力");
ProxyAssistant.playAdvertisement(100001, "广告：名流世家，尽显活力");
ProxyAssistant.playAdvertisement(100002, "广告2：名流世家，尽显活力");

```

ES6之后新出的一个特性Proxy，可以这样实现：
```js
const SuperStar = {
  name: "小鲜肉",
  scheduleFlag: false, // 档期标识位，false=没空，true=有空
  playAdvertisement(ad) {
    console.log(ad);
  }
};

const ProxyAssistant = {
  name: "经纪人李思",
  scheduleTime(ad) {
    const schedule = new Proxy(SuperStar, {
      set(obj, prop, val) {
        if (prop !== "scheduleFlag") {
          console.log("不是我要接的业务");
          return;
        }
        if ((obj.scheduleFlag === false) & (val === true)) {
          // 小香肉现在有空了，安排
          obj.scheduleFlag = true;
          obj.playAdvertisement(ad); // 安排上了
        } else {
          console.log("小香肉现在排期已满");
        }
      }
    });
    setTimeout(() => {
      schedule.scheduleFlag = true;
      schedule.scheduleFlag2 = true;
      schedule.scheduleFla3 = true;
      console.log("小香肉有空了");
    }, 2000);
  },
  playAdvertisement(reward, ad) {
    if (reward > 100000) {
      // 广告费超出10w
      console.log("没问题，小香肉最喜欢拍广告了");
      this.scheduleTime(ad);
    } else {
      console.log("不好意思，出场费太低");
    }
  }
};

ProxyAssistant.playAdvertisement(100000, "广告：名流世家，尽显活力");
ProxyAssistant.playAdvertisement(100001, "广告：名流世家，尽显活力");
ProxyAssistant.playAdvertisement(100002, "广告2：名流世家，尽显活力");

```

## 代理模式优缺点

主要优点有：

代理对象在访问者与目标对象之间可以起到中介和保护目标对象的作用；
代理对象可以扩展目标对象的功能；
代理模式能将访问者与目标对象分离，在一定程度上降低了系统的耦合度，如果我们希望适度扩展目标对象的一些功能，通过修改代理对象就可以了，符合开闭原则；

主要缺点：
增加了系统的复杂度，要斟酌当前场景是不是真的需要引入代理模式（十八线明星就别请经纪人了）。
