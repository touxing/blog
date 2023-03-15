---
title: H5游戏引擎Phaser3
date: 2020-11-23
icon: emoji
category:
  - 游戏
tag:
  - Phaser
---
# Phaser3

> phaser 是一款 H5 游戏引擎

```js
function preload() {
  // 加载图片资源
  this.load.image('dude', 'assets/move-1.png')
  this.load.image('chest-slash-left', 'assets/right-box.png')
  this.load.spritesheet('jewel', 'assets/jewel.png', {
    frameWidth: 170,
    frameHeight: 180,
  })
  this.load.spritesheet('man', 'assets/man.png', {
    frameWidth: 130,
    frameHeight: 130,
  })
}

function create() {
  // 添加静态组
  const chests = this.physics.add.staticGroup()
  const generateChest = (x, y) => {
    let chest = chests
      .create(x, y, 'chest-slash-left')
      .setScale(0.3)
      .setSize(30, 30, true)
    // 形状动画，变大变小效果
    this.tweens.add({
      targets: chest,
      ease: 'Sine.easeInOut',
      durationi: 1000,
      scale: getRandom(35, 40) / 100,
      yoyo: true,
      repeat: -1,
    })
  }

  // 创建 逐帧动画
  this.anims.create({
    key: 'jewel-shine',
    frames: this.anims.generateFrameNumbers('jewel', { start: 0, end: 2 }),
    frameRate: 1,
    repeat: -1,
  })
}


function update() {
  // 画图
  path.draw(graphics)
}
```

```js
//  Camera controls
const cursors = this.input.keyboard.createCursorKeys()
const controlConfig = {
  camera: this.cameras.main,
  left: cursors.left,
  right: cursors.right,
  up: cursors.up,
  down: cursors.down,
  acceleration: 0.06, // 加速度
  drag: 0.0005,
  maxSpeed: 1.0,
}

// 上下左右键控制 camera 位置
this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig)
```

```js
// pointerdown, pointerup, pointermove 监听鼠标事件
this.input.on('pointerdown', function (pointer) {})
```

```js
// draw path 定义图形
graphics = this.add.graphics()
```

```js
fool = this.add.follower(path, 264, 4570).setScale(0.3)
// fool = this.physics.add.sprite(264, 4570, 'man').setScale(0.3).setOrigin(0, 0)
fool.setFlipX(true)
fool.play('walk')
// Add existing game object to physics world
// PathFollower 加入到 physics world 才有 arcade 碰撞系统
this.physics.add.existing(fool)
fool.body.setCollideWorldBounds(true)
fool.body.setAllowGravity(false)
```

todo
---
更新游戏demo，一款乐跑类游戏demo

参考资料
---
[Phaser3学习笔记](https://blog.xiiigame.com/2018-11-12-Phaser3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/)
