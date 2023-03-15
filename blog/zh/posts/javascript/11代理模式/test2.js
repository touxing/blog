/*
 * @Author: HotSuitor
 * @Date: 2020-04-08 18:32:26
 * @LastEditors: hs
 * @LastEditTime: 2020-04-08 18:51:04
 * @Description: hotsuitor@qq.com
 */
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
