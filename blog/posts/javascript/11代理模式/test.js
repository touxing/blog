/*
 * @Author: HotSuitor
 * @Date: 2020-04-08 16:18:48
 * @LastEditors: hs
 * @LastEditTime: 2020-04-08 18:27:32
 * @Description: hotsuitor@qq.com
 */
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
