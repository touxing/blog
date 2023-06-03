window.onload = function () {
  /** @type {HTMLCanvasElement} */
  let canvas = document.querySelector('#canvas')
  let ctx = canvas.getContext('2d')
  ctx.fillStyle = 'rgb(200,0,0)'
  ctx.fillRect(10, 10, 55, 50)

  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
  ctx.fillRect(30, 30, 55, 50)

  ctx.strokeRect(40, 40, 50, 50)

  ctx.clearRect(50, 50, 10, 10)

  ctx.fillStyle = 'rgba(0,0,0,1)'
  ctx.beginPath()
  ctx.moveTo(75, 50)
  ctx.lineTo(100, 75)
  ctx.lineTo(100, 25)
  ctx.closePath()
  ctx.strokeStyle = 'rgb(255,0,0)'
  ctx.stroke()
  ctx.fillStyle = 'rgb(0,233,233)'
  ctx.fill()

  ctx.beginPath()
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 绘制
  ctx.moveTo(110, 75)
  ctx.arc(75, 75, 35, 0, Math.PI, false) // 口 (顺时针)
  ctx.moveTo(65, 65)
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
  ctx.moveTo(95, 65)
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
  ctx.stroke()

  // 填充三角形
  ctx.beginPath()
  ctx.moveTo(25, 25)
  ctx.lineTo(105, 25)
  ctx.lineTo(25, 105)
  ctx.fillStyle = 'rgba(0,222,0, 0.5)'
  ctx.fill()

  // 描边三角形
  ctx.beginPath()
  ctx.moveTo(125, 125)
  ctx.lineTo(125, 45)
  ctx.lineTo(45, 125)
  ctx.closePath()
  ctx.stroke()

  clearCanvas(ctx)
  roundedRect(ctx, 12, 12, 150, 150, 15)
  roundedRect(ctx, 19, 19, 150, 150, 9)
  roundedRect(ctx, 53, 53, 49, 33, 10)
  roundedRect(ctx, 53, 119, 49, 16, 6)
  roundedRect(ctx, 135, 53, 49, 33, 10)
  roundedRect(ctx, 135, 119, 25, 49, 10)

  ctx.beginPath()
  ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false)
  ctx.lineTo(31, 37)
  ctx.fill()

  for (var i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 35, 4, 4)
  }

  for (i = 0; i < 6; i++) {
    ctx.fillRect(115, 51 + i * 16, 4, 4)
  }

  for (i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 99, 4, 4)
  }

  ctx.beginPath()
  ctx.moveTo(83, 116)
  ctx.lineTo(83, 102)
  ctx.bezierCurveTo(83, 94, 89, 88, 97, 88)
  ctx.bezierCurveTo(105, 88, 111, 94, 111, 102)
  ctx.lineTo(111, 116)
  ctx.lineTo(106.333, 111.333)
  ctx.lineTo(101.666, 116)
  ctx.lineTo(97, 111.333)
  ctx.lineTo(92.333, 116)
  ctx.lineTo(87.666, 111.333)
  ctx.lineTo(83, 116)
  ctx.fill()

  ctx.fillStyle = 'white'
  ctx.beginPath()
  ctx.moveTo(91, 96)
  ctx.bezierCurveTo(88, 96, 87, 99, 87, 101)
  ctx.bezierCurveTo(87, 103, 88, 106, 91, 106)
  ctx.bezierCurveTo(94, 106, 95, 103, 95, 101)
  ctx.bezierCurveTo(95, 99, 94, 96, 91, 96)
  ctx.moveTo(103, 96)
  ctx.bezierCurveTo(100, 96, 99, 99, 99, 101)
  ctx.bezierCurveTo(99, 103, 100, 106, 103, 106)
  ctx.bezierCurveTo(106, 106, 107, 103, 107, 101)
  ctx.bezierCurveTo(107, 99, 106, 96, 103, 96)
  ctx.fill()

  ctx.fillStyle = 'black'
  ctx.beginPath()
  ctx.arc(101, 102, 2, 0, Math.PI * 2, true)
  ctx.fill()

  ctx.beginPath()
  ctx.arc(89, 102, 2, 0, Math.PI * 2, true)
  ctx.fill()

  clearCanvas(ctx)

  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.fillStyle =
        'rgb(' +
        Math.floor(255 - 42.5 * i) +
        ',' +
        Math.floor(255 - 42.5 * j) +
        ',0)'
      ctx.fillRect(j * 25, i * 25, 25, 25)
    }
  }

  clearCanvas(ctx)
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.strokeStyle =
        'rgb(0,' +
        Math.floor(255 - 42.5 * i) +
        ',' +
        Math.floor(255 - 42.5 * j) +
        ')'
      ctx.beginPath()
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true)
      ctx.stroke()
    }
  }

  clearCanvas(ctx)
  ctx.beginPath()
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true)
  ctx.arc(50, 50, 20, 0, Math.PI * 2, true)
  ctx.arc(50, 50, 10, 0, Math.PI * 2, true)
  ctx.arc(50, 50, 5, 0, Math.PI * 2, true)
  // ctx.fill('nonzero')
  ctx.fill('evenodd')
  ctx.stroke()

  // transformations
  clearCanvas(ctx)
  ctx.fillRect(0,0,150,150);   // 使用默认设置绘制一个矩形
  ctx.save();                  // 保存默认状态

  ctx.fillStyle = '#09F'       // 在原有配置基础上对颜色做改变
  ctx.fillRect(15,15,120,120); // 使用新的设置绘制一个矩形

  ctx.save();                  // 保存当前状态
  ctx.fillStyle = '#FFF'       // 再次改变颜色配置
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30,30,90,90);   // 使用新的配置绘制一个矩形

  ctx.restore();               // 重新加载之前的颜色状态
  ctx.fillRect(45,45,60,60);   // 使用上一次的配置绘制一个矩形

  ctx.restore();               // 加载默认颜色配置
  ctx.fillRect(60,60,30,30);   // 使用加载的配置绘制一个矩形
}

function clearCanvas(ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

// 封装的一个用于绘制圆角矩形的函数。
function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath()
  ctx.moveTo(x, y + radius)
  ctx.lineTo(x, y + height - radius)
  ctx.quadraticCurveTo(x, y + height, x + radius, y + height)
  ctx.lineTo(x + width - radius, y + height)
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius)
  ctx.lineTo(x + width, y + radius)
  ctx.quadraticCurveTo(x + width, y, x + width - radius, y)
  ctx.lineTo(x + radius, y)
  ctx.quadraticCurveTo(x, y, x, y + radius)
  ctx.stroke()

  var rectangle = new Path2D()
  rectangle.rect(10, 10, 50, 50)

  var circle = new Path2D()
  circle.moveTo(125, 35)
  circle.arc(100, 35, 25, 0, 2 * Math.PI)

  ctx.stroke(rectangle)
  ctx.fill(circle)
}
