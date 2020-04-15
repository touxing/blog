/*
 * @Author: HotSuitor
 * @Date: 2020-03-18 18:33:46
 * @LastEditors: hs
 * @LastEditTime: 2020-03-18 19:33:35
 * @Description: hotsuitor@qq.com
 */
class Folder {
  constructor(folder, children) {
    this.name = folder;
    this._children = children || [];
  }
  add(...fileOfFolder) {
    this._children.push(...fileOfFolder);
  }
  scan(cb) {
    this._children.forEach(child => {
      child.scan(cb);
    });
  }
}

class File {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
  add() {
    throw new Error("文件下不能创建文件");
  }
  scan(cb) {
    cb(this);
  }
}

const foldMovies = new Folder("电影", [
  new Folder("漫威", [
    new File("钢铁侠.mp4", 1.9),
    new File("蜘蛛侠.mp4", 2.1),
    new File("金刚狼.mp4", 2.3),
    new File("美国队长.mp4", 1.4)
  ]),
  new Folder("DC电影", [new File("蝙蝠侠.mp4", 2.4), new File("超人.mp4", 1.8)])
]);
console.log("\n大于1.5G的学习资料有：");
foldMovies.scan(function(item) {
  if (item.size > 1.5) {
    console.log("name:" + item.name + " size:" + item.size);
  }
});
