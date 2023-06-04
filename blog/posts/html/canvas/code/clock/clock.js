let WINDOW_WIDTH = 1024;
let WINDOW_HEIGHT = 500;
let RADIUS = 8;
let MARGIN_LEFT = 30;
let MARGIN_TOP = 60;

let endTime = new Date();
endTime.setTime(endTime.getTime() + 3600 * 1000);
let curShowSecondTime = 0;
let balls = [];
const colors = [
  "#33B5E5",
  "#0099CC",
  "#AA66CC",
  "#9933CC",
  "#99CC00",
  "#669900",
  "#FFBB33",
  "#FF8800",
  "#FF4444",
  "#CC0000",
];

window.onload = function () {
  adaptScreen();
  /** @type {HTMLCanvasElement} */
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
  curShowSecondTime = getCurrentShowSecondTime();
  let requestId = null;
  function init() {
    render(ctx);
    update();
    requestId = requestAnimationFrame(init);
  }
  requestAnimationFrame(init);
};

function adaptScreen() {
  WINDOW_WIDTH = document.body.clientWidth;
  WINDOW_HEIGHT = document.body.clientHeight;
  MARGIN_LEFT = Math.round(WINDOW_WIDTH / 10);
  MARGIN_TOP = Math.round(WINDOW_HEIGHT / 10);
  RADIUS = Math.round((WINDOW_WIDTH * 4) / 5 / 108) - 1;
}
function update(ctx) {
  let nextShowSecondTime = getCurrentShowSecondTime();
  if (curShowSecondTime !== nextShowSecondTime) {
    let hoursLen = getHour(curShowSecondTime).toString().length;
    // 判断时间不等，添加小球
    addBallsForTime(getHour(curShowSecondTime), getHour(nextShowSecondTime), hoursLen >= 2 ? hoursLen : 2);
    addBallsForTime(getMinute(curShowSecondTime), getMinute(nextShowSecondTime), 2, 39);
    addBallsForTime(getSecond(curShowSecondTime), getSecond(nextShowSecondTime), 2, 78);
    curShowSecondTime = nextShowSecondTime;
  }
  updateBalls();
}

function updateBalls() {
  for (let i = 0; i < balls.length; i++) {
    const item = balls[i];
    item.x += item.vx;
    item.y += item.vy;
    item.vy += item.g;
    if (item.y >= WINDOW_HEIGHT - RADIUS) {
      item.y = WINDOW_HEIGHT - RADIUS;
      item.vy = -item.vy * 0.75; // 0.75表示摩擦系数
    }
  }
  // 性能优化，超出画布的小球，移除掉
  balls = balls.filter((item) => item.x > 0 && item.x - RADIUS < WINDOW_WIDTH);
}
function getCurrentShowSecondTime() {
  let curTime = new Date();
  // 倒计时
  // let ret = endTime.getTime() - curTime.getTime();
  // ret = Math.round(ret / 1000);
  // return ret >= 0 ? ret : 0;
  let res = curTime.getHours() * 3600 + curTime.getMinutes() * 60 + curTime.getSeconds();
  return res;
}

/**
 * 递归渲染大于2位数的小时时间
 */
function renderHours(hours, len, ctx) {
  let hour = parseInt(hours % 10);
  renderDigit(MARGIN_LEFT + (len - 1) * 15 * (RADIUS + 1), MARGIN_TOP, hour, ctx);
  if (hours > 10) {
    renderHours(hours / 10, len - 1, ctx);
  }
}

function addBallsForTime(curHours, nextHours, len, starGap = 0) {
  let hour = parseInt(curHours % 10);
  let nextHour = parseInt(nextHours % 10);
  if (hour != nextHour) {
    addBalls(MARGIN_LEFT + starGap * (RADIUS + 1) + (len - 1) * 15 * (RADIUS + 1), MARGIN_TOP, hour);
  }
  if (curHours > 10) {
    addBallsForTime(curHours / 10, nextHours / 10, len - 1, starGap);
  }
}

function addBalls(x, y, num) {
  for (let i = 0; i < digit[num].length; i++) {
    for (let j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        let aBall = {
          x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          g: 1.5 * Math.random(),
          vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4, // [-4, 4]
          vy: -5,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
        balls.push(aBall);
      }
    }
  }
}

function getHour(time) {
  return parseInt(time / 3600);
}
function getMinute(time) {
  return parseInt((time % 3600) / 60);
}
function getSecond(time) {
  return time % 60;
}
function render(ctx) {
  ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
  let hours = getHour(curShowSecondTime);
  let minutes = getMinute(curShowSecondTime);
  let seconds = getSecond(curShowSecondTime);

  let hoursLen = hours.toString().length;
  renderHours(hours, hoursLen >= 2 ? hoursLen : 2, ctx);
  renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
  renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), ctx);
  renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), ctx);
  renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
  renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), ctx);
  renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), ctx);

  // 绘制小球
  balls.forEach((item) => {
    ctx.fillStyle = item.color;
    ctx.beginPath();
    ctx.arc(item.x, item.y, RADIUS, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fill();
  });
}

function renderDigit(x, y, num, ctx) {
  ctx.fillStyle = "rgb(0,102,153)";
  for (let i = 0; i < digit[num].length; i++) {
    for (let j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        // 绘制小球
        ctx.beginPath();
        // 圆圈格子之间预留 1px 所以+1
        ctx.arc(
          x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          RADIUS,
          0,
          2 * Math.PI
        );
        ctx.closePath();
        ctx.fill();
      }
    }
  }
}
