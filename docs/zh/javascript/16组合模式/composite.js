/*
 * @Author: HotSuitor
 * @Date: 2020-03-18 17:14:19
 * @LastEditors: hs
 * @LastEditTime: 2020-03-19 14:24:30
 * @Description: hotsuitor@qq.com
 */
/**
 * 组合模式，又叫整体-部分模式，它允许你将对象组合成树形结构来表现
 * 整体-部分层次结构，让使用者可以以一致的方式处理组合对象以及部分对象。
 */
/**
 * 本地有一个【学习资料】文件夹，文件夹下有两个文件夹【大桥老师】和【小苍老师】，
 * 两文件夹下分别各自有一些资料和文件夹，我们要在这些资料文件夹里找到大于2G的资料文件，
 * 并输出文件名和大小。
 */

//  创建文件夹
var createFolder = function(name) {
  return {
    name: name,
    _children: [],
    // 在文件夹下创建文件夹或文件
    add: function(fileOfFolder) {
      this._children.push(fileOfFolder);
    },
    //扫描方法
    scan: function(cb) {
      this._children.forEach(function(child) {
        child.scan(cb);
      });
    }
  };
};
// 创建文件
var createFile = function(name, size) {
  return {
    name: name,
    size: size,
    //
    add: function() {
      throw new Error("文件下面不能创建文件");
    },
    scan: function(cb) {
      cb(this);
    }
  };
};

var foldMovies = createFolder("学习资料");

// 创建子文件夹，并放入根文件夹
var foldMovieDaQiao = createFolder("大桥老师");
foldMovies.add(foldMovieDaQiao);

var foldMovieXiaoCan = createFolder("小苍老师");
foldMovies.add(foldMovieXiaoCan);

// 添加学习资料
foldMovieDaQiao.add(createFile("如何骑马.avi", 1.2));
foldMovieDaQiao.add(createFile("优雅舞姿.avi", 1.7));
foldMovieDaQiao.add(createFile("射箭五十练.avi", 2.4));
foldMovieDaQiao.add(createFile("优雅喝酒.avi", 2.1));

foldMovieXiaoCan.add(createFile("海边如何防晒.mp6", 1.8));
foldMovieXiaoCan.add(createFile("如何布置房间.mp6", 1.5));
foldMovieXiaoCan.add(createFile("窗帘的设计.mp6", 2.7));

console.log("大于2G的学习资料有：");
foldMovies.scan(function(item) {
  if (item.size > 2) {
    console.log("name:" + item.name + " size:" + item.size);
  }
});

// 链式改造
var createFolder = function(name) {
  return {
    name: name,
    _children: [],
    add: function(...fileOfFolder) {
      this._children.push(...fileOfFolder);
      return this;
    },
    scan: function(cb) {
      this._children.forEach(child => {
        child.scan(cb);
      });
    }
  };
};

var createFile = function(name, size) {
  return {
    name: name,
    size: size,
    add() {
      throw new Error("文件下不能创建文件");
    },
    scan(cb) {
      cb(this);
    }
  };
};

const foldMovies2 = createFolder("电影")
  .add(
    createFolder("漫威")
      .add(createFile("钢铁侠.mp4", 1.9))
      .add(createFile("蜘蛛侠.mp4", 2.1))
      .add(createFile("金刚狼.mp4", 2.3))
      .add(createFile("美国队长.mp4", 1.4))
  )
  .add(
    createFolder("DC电影")
      .add(createFile("蝙蝠侠.mp4", 2.4))
      .add(createFile("超人.mp4", 1.8))
  );
console.log("\n大于1.5G的学习资料有：");
foldMovies2.scan(function(item) {
  if (item.size > 1.5) {
    console.log("name:" + item.name + " size:" + item.size);
  }
});
