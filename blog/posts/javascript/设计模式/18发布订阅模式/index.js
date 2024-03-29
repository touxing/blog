// ES5 IIFE 实现
var Publisher = (function () {
  var _subsMap = {} // 存储订阅者
  return {
    // 消息订阅
    subscribe(type, cb) {
      if (_subsMap[type]) {
        if (_subsMap[type].indexOf(cb) === -1) {
          _subsMap[type].push(cb)
        }
      } else {
        _subsMap[type] = [cb]
      }
    },
    // 消息退订
    unSubscribe(type, cb) {
      if (!_subsMap[type] || _subsMap[type].indexOf(cb) === -1) return
      var idx = _subsMap[type].indexOf(cb)
      _subsMap[type].splice(idx, 1)
    },
    // 消息发布
    notify(type) {
      if (!_subsMap[type]) return
      var params = Array.prototype.slice.call(arguments)
      _subsMap[type].forEach(function (cb) {
        cb(params)
      })
    },
  }
})()

function piXie(message) {
  console.log('pipipi' + message)
}
Publisher.subscribe('运动鞋', (message) => console.log('AJ830' + message)) // 订阅运动鞋
Publisher.subscribe('运动鞋', (message) => console.log('JK960' + message)) // 订阅运动鞋
Publisher.subscribe('皮鞋', piXie) // 订阅皮鞋

Publisher.notify('运动鞋', '运动鞋到货~速来')
Publisher.notify('皮鞋', '皮鞋到货~速来')
Publisher.unSubscribe('皮鞋', piXie)
Publisher.notify('皮鞋', '皮鞋到货~速来2')

// ES6
class Publisher2 {
  constructor() {
    this._subsMap = {}
  }

  subscribe(type, cb) {
    if (this._subsMap[type]) {
      if (!this._subsMap[type].includes(cb)) {
        this._subsMap[type].push(cb)
      }
    } else {
      this._subsMap[type] = [cb]
    }
  }

  unSubscribe(type, cb) {
    if (!this._subsMap[type] || !this._subsMap[type].includes(cb)) return
    const idx = this._subsMap[type].indexOf(cb)
    this._subsMap[type].splice(idx, 1)
  }

  notify(type, ...payload) {
    if (!this._subsMap[type]) return
    this._subsMap[type].forEach((cb) => cb(...payload))
  }
}

const adadis = new Publisher2()
function fanBuXie(message) {
  console.log('139zzz' + message)
}
adadis.subscribe('运动鞋', (message) => console.log('152xxx' + message)) // 订阅运动鞋
adadis.subscribe('运动鞋', (message) => console.log('138yyy' + message))
adadis.subscribe('帆布鞋', fanBuXie) // 订阅帆布鞋
adadis.notify('运动鞋', ' 运动鞋到货了 ~') // 打电话通知买家运动鞋消息
adadis.unSubscribe('帆布鞋', fanBuXie) //取消订阅帆布鞋信息
adadis.notify('帆布鞋', ' 帆布鞋售罄了 T.T') // 打电话通知买家帆布鞋消息
