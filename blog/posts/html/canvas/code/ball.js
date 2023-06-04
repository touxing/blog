window.onload = function () {
  /** @type {HTMLCanvasElement} */
  const canvas = document.querySelector('#canvas')
  const context = canvas.getContext('2d')
  canvas.width = 1024
  canvas.height = 500

  function init() {
    render(context)
    update()
    requestAnimationFrame(init)
  }
  requestAnimationFrame(init)
  // setInterval(() => {
  //   render(context)
  // }, 20);
}

const ball = { x: 512, y: 100, r: 20, g: 2, vx: -4, vy: -10, color: '#005588' }
function render(ctx) {

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.fillStyle = ball.color
  ctx.beginPath()
  ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI)
  ctx.closePath()
  ctx.fill()
}
function update() {
  ball.x += ball.vx
  ball.y += ball.vy
  ball.vy += ball.g
  if(ball.y >= 500 - ball.r) {
    ball.y = 500 - ball.r
    ball.vy = -ball.vy * 0.5 // 0.5表示摩擦系数
  }
  if(ball.x <= ball.r) {
    ball.x = ball.r
    ball.vx = -ball.vx * 0.5
  }
}
