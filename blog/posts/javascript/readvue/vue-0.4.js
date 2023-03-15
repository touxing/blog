/**
 * make data reactive
 * when data changes, the `update` method will be invoked automatically and thus updates the DOM
 * @Tips
 * some code may be useless but helpful for understanding
 * some code is incompleted and heavily simplified but also for better understanding
 */

;(function() {
  /**
   * @description: 响应化数据
   * @param {Object} obj 响应化对象
   * @param {String} key
   * @param {String} val
   * @return:
   */
  function defineReactive(obj, key, val) {
    var dep = new Dep() // 收集依赖
    Object.defineProperty(obj, key, {
      get: function() {
        if (Dep.target) {
          Dep.target.addDep(dep)
        }
        return val
      },
      set: function(newVal) {
        // 数据没有变化，不作更新
        if (newVal === val) return
        val = newVal
        // 通知依赖更新
        dep.notify()
      },
    })
  }

  // 观察者
  function observe(obj) {
    for (var key in obj) {
      // 把数据响应化
      defineReactive(obj, key, obj[key])
    }
  }

  var uid$1 = 0

  // 订阅者，用来存放 Watcher 对象的实例
  function Dep() {
    this.subs = [] // 保存 Watcher 实例
    this.id = uid$1++
  }

  Dep.target = null

  Dep.prototype.addSub = function(sub) {
    this.subs.push(sub)
  }

  // 通知事件，通知响应数据和更新dom
  Dep.prototype.notify = function() {
    var subs = this.subs
    // 遍历通知每一个 watch
    for (var i = 0, l = subs.length; i < l; i++) {
      // 触发更新dom
      subs[i].update()
    }
  }

  // 观察者，监测数据
  function Watcher(vm, expOrFn, cb) {
    this.vm = vm // vue实例
    this.getter = expOrFn // 监测的表达式 or function
    this.cb = cb // 回调
    this.depIds = [] // 依赖Id池
    this.value = this.get()
  }

  Watcher.prototype.get = function() {
    Dep.target = this /* ! 保存当前上下文 this的指向 */
    //! 这里是关键
    var value = this.getter.call(this.vm) // 传入的expOrFn this 指向 vue 实例
    Dep.target = null
    return value
  }

  // Watcher 更新监测的值
  Watcher.prototype.update = function() {
    var value = this.get()
    if (this.value !== value) { // 内部优化，值没有变化不做处理
      var oldValue = this.value
      this.value = value
      this.cb.call(this.vm, value, oldValue) // 回调，watch 方法的function(newValue, oldValue)
    }
  }

  // Watcher 绑定对应的订阅者
  Watcher.prototype.addDep = function(dep) {
    var id = dep.id
    // to avoid depending the watcher to the same dep more than once
    if (this.depIds.indexOf(id) === -1) {
      this.depIds.push(id)
      dep.addSub(this)
    }
  }

  /**
   * @description: 虚拟dom
   * @param {String} tag 标签名
   * @param {Object} data 标签属性对象
   * @param {Arrar} children
   * @param {String} text 标签内容文本
   * @param {Element} elm dom 元素
   * @return:
   */
  function vnode(tag, data, children, text, elm) {
    this.tag = tag
    this.data = data
    this.children = children
    this.text = text
    this.elm = elm
  }

  /**
   * @description: 标准化子节点
   * @param {Arrar|String}  children
   * @return: {Arrar}
   */
  function normalizeChildren(children) {
    if (typeof children === 'string') {
      return [createTextVNode(children)]
    }
    return children
  }


  // 这里使用了 [外观模式](/zh/javascript/15外观模式/)，
  // 统一对外接口 vnode 用不同的方法包装初始化得到不同的结构
  /**
   * @description: 创建文本virtual node
   * @param {String} val 文本内容
   * @return: {vnode}
   */
  function createTextVNode(val) {
    return new vnode(undefined, undefined, undefined, String(val))
  }

  /**
   * @description: 创建 tag virtual node
   * @param {String} tag 标签
   * @param {String} data
   * @param {Array} children 子元素
   * @return:
   */
  function createElement(tag, data, children) {
    return new vnode(tag, data, normalizeChildren(children), undefined, undefined)
  }

  /**
   * @description: 创建真实dom的方法
   * @param {vnode} vnode
   * @return:
   */
  function createElm(vnode) {
    var tag = vnode.tag
    var data = vnode.data
    var children = vnode.children

    // tag 不为空，创建 element
    if (tag !== undefined) {
      vnode.elm = document.createElement(tag)

      // 设置了标签属性，创建标签属性
      if (data.attrs !== undefined) {
        var attrs = data.attrs
        for (var key in attrs) {
          vnode.elm.setAttribute(key, attrs[key])
        }
      }

      // 有子节点，创建子节点
      if (children) {
        createChildren(vnode, children)
      }
    } else {
      vnode.elm = document.createTextNode(vnode.text)
    }

    return vnode.elm
  }

  /**
   * @description: 创建子节点
   * @param {vnode} vnode
   * @param {Array} children
   * @return:
   */
  function createChildren(vnode, children) {
    // 遍历所有子节点
    for (var i = 0; i < children.length; ++i) {
      // 父级元素append子节点，若子节点又有子节点，递归调用创建
      vnode.elm.appendChild(createElm(children[i]))
    }
  }

  /**
   * @description: 简单对比两个节点是否相同
   * @param {vnode} vnode1
   * @param {vnode} vnode2
   * @return: {Boolean} true 相同
   */
  function sameVnode(vnode1, vnode2) {
    return vnode1.tag === vnode2.tag
  }

  function emptyNodeAt(elm) {
    return new vnode(elm.tagName.toLowerCase(), {}, [], undefined, elm)
  }

  /**
   * @description: 渲染vnode到真实dom
   * @param {type}
   * @return:
   */
  function patchVnode(oldVnode, vnode) {
    var elm = (vnode.elm = oldVnode.elm)
    var oldCh = oldVnode.children
    var ch = vnode.children

    // 不是文本元素
    if (!vnode.text) {
      // if有旧子节点和新子节点，遍历更新子节点
      if (oldCh && ch) {
        updateChildren(oldCh, ch)
      }
    } else if (oldVnode.text !== vnode.text) {
      // 更新的是文本，直接从vnode赋值更新dom文本
      elm.textContent = vnode.text
    }
  }

  /**
   * @description: 更新子节点
   * @param {vnode}
   * @return:
   */
  function updateChildren(oldCh, newCh) {
    // assume that every element node has only one child to simplify our diff algorithm
    // 假设每个元素只有一个子节点，简化diff算法
    // dom层级节点相同，继续遍历下一层节点
    if (sameVnode(oldCh[0], newCh[0])) {
      // 递归调用 patchVnode
      patchVnode(oldCh[0], newCh[0])
    } else {
      // dom层级节点不同或没有子节点直接更新
      patch(oldCh[0], newCh[0])
    }
  }

  /**
   * @description: 真实更新 vnode 方法
   * @param {type}
   * @return:
   */
  function patch(oldVnode, vnode) {
    var isRealElement = oldVnode.nodeType !== undefined // virtual node has no `nodeType` property
    // 旧节点是 virtual node 而且 新旧 vnode 相同，更新 vnode
    if (!isRealElement && sameVnode(oldVnode, vnode)) {
      patchVnode(oldVnode, vnode)
    } else {
      // 旧节点时真实 dom，创建一个 空 dom，需要用到其父元素
      if (isRealElement) {
        oldVnode = emptyNodeAt(oldVnode)
      }
      var elm = oldVnode.elm
      var parent = elm.parentNode

      createElm(vnode)

      parent.insertBefore(vnode.elm, elm) // 插入新节点
      parent.removeChild(elm) // 移除旧节点
    }

    return vnode.elm
  }

  function initData(vm) {
    var data = (vm.$data = vm.$options.data)
    var keys = Object.keys(data)
    var i = keys.length
    // proxy data so you can use `this.key` directly other than `this.$data.key`
    while (i--) {
      proxy(vm, keys[i])
    }

    observe(data)
  }

  // 代理访问
  function proxy(vm, key) {
    Object.defineProperty(vm, key, {
      configurable: true,
      enumerable: true,
      get: function() {
        return vm.$data[key]
      },
      set: function(val) {
        vm.$data[key] = val
      },
    })
  }

  function Vue(options) {
    var vm = this
    vm.$options = options

    initData(vm)
    vm.mount(document.querySelector(options.el))
  }

  Vue.prototype.mount = function(el) {
    var vm = this
    vm.$el = el
    new Watcher(vm, function() {
      vm.update(vm.render())
    })
  }

  /**
   * @description: 调用path方法更新dom
   * @param {type}
   * @return:
   */
  Vue.prototype.update = function(vnode) {
    var vm = this
    var prevVnode = vm._vnode // 保存旧vnode，这里是引用关系，可以与下面赋值换位置
    vm._vnode = vnode
    // 没有旧的 vnode，直接传 vnode渲染
    if (!prevVnode) {
      vm.$el = vm.patch(vm.$el, vnode)
    } else {
      // 传入旧的 vnode 对比
      vm.$el = vm.patch(prevVnode, vnode)
    }
  }

  Vue.prototype.patch = patch

  /**
   * @description: 渲染函数，入口渲染
   * @param {type}
   * @return:
   */
  Vue.prototype.render = function() {
    var vm = this
    return vm.$options.render.call(vm)
  }

  var vm = new Vue({
    el: '#app',
    data: {
      message: 'Hello world',
      isShow: true,
    },
    render() {
      return createElement(
        'div',
        {
          attrs: {
            class: 'wrapper',
          },
        },
        [
          this.isShow
            ? createElement(
                'p',
                {
                  attrs: {
                    class: 'inner',
                  },
                },
                this.message
              )
            : createElement(
                'h1',
                {
                  attrs: {
                    class: 'inner',
                  },
                },
                'Hello world'
              ),
        ]
      )
    },
  })

  // test
  setTimeout(function() {
    vm.message = 'Hello'
  }, 1000)

  setTimeout(function() {
    vm.isShow = false
  }, 2000)
})()
