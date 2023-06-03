/** 校验策略 */
const strategies = {
  isNonEmpty(value, errorMsg) {
    if (value === '') {
      return errorMsg
    }
  },

  maxLength(value, length, errorMsg) {
    let reg = new RegExp(`^[\u0000-\u00ff]{0,${length}}$`, 'ig')
    if (!reg.test(value)) {
      return errorMsg
    }
  },

  isMobile(value, errorMsg) {
    if (!/(^1[2||3|5|7|8][0-9]{9}$)/.test(value)) {
      return errorMsg
    }
  },

  isSpace(value, errorMsg) {
    if (
      [...value].every((item) => {
        return item === ' '
      })
    ) {
      return errorMsg
    }
  },
}

/** 校验类 */
class Validator {
  static instance = null
  rules = []
  strategies = {}
  constructor(stage = strategies) {
    if (!Validator.instance) {
      this.strategies = stage
      Validator.instance = this
    }
    return Validator.instance
  }

  static getInstance() {
    if (!Validator.instance) {
      Validator.instance = new Validator(strategies)
    }
    return Validator.instance
  }

  /**
   * 注册策略规则
   * @param {string} key
   * @param {Function} fn
   */
  addRule(key, fn) {
    if (this.strategies.hasOwnProperty(key)) {
      throw new Error(`It was been had ${key} strategy alerdy!`)
    }
    this.strategies[key] = fn
  }

  /**
   * 添加变量校验
   * @param {*} value 需要校验的变量
   * @param {Array} rules 校验规则
   */
  add(data, rules) {
    let value, key
    if (typeof data === 'object') {
      value = data.value
      key = data.key
    } else {
      value = data
    }
    // 保存每个校验变量的规则数组
    let fieldRules = []
    rules.forEach((rule, index) => {
      const { strategy, errorMsg, validator, pattern } = rule
      // 自定义校验规则
      if (Object.prototype.toString.call(pattern) === '[object RegExp]') {
        const validator = () => {
          if (!pattern.test(value)) {
            return { errorMsg, key }
          }
        }
        if (key) {
          // 值的传入方式是对象方式，key值用于对于返回校验错误的信息
          this.rules.push({
            [key]: validator,
          })
        } else {
          fieldRules.push(validator)
        }
      } else {
        // 支持 maxLenght:10 这样的形式
        let arr = strategy.split(':')
        let strategyName = arr.shift()
        arr.unshift(value)
        arr.push({ errorMsg, key })
        // 不立即执行
        if (key) {
          // 值的传入方式是对象方式，key值用于对于返回校验错误的信息
          this.rules.push({
            [key]: () => this.strategies[strategyName](...arr),
          })
        } else {
          // 数组，顺序存放校验规则，返回的结果校验对象key为数组对于的index
          fieldRules.push(() => this.strategies[strategyName](...arr))
        }
      }
    })
    if (fieldRules.length > 0) {
      this.rules.push(fieldRules)
    }
  }

  /**
   * 移除要被校验的变量
   * @param {string|number} key
   * @returns {boolean} true=删除成功
   */
  remove(key) {
    if (typeof key === 'number') {
      return this.rules.splice(key, 1).length > 0
    }

    let index = -1
    for (let i = 0; i < this.rules.length; i++) {
      const rule = this.rules[i]
      index = Object.keys(rule).findIndex((item) => item === key)
      if (index > -1) {
        index = i
        return this.rules.splice(index, 1).length > 0
        break
      }
    }
  }

  /**
   * 校验表单
   * @return
   */
  validate() {
    let isValid = false
    const validateResult = {}
    this.rules.forEach((item, index) => {
      if (Array.isArray(item)) {
        item.forEach((value) => {
          if (typeof value === 'function') {
            const res = value()
            if (res) {
              isValid = true
              if (!validateResult[index]) {
                validateResult[index] = res.errorMsg
              }
            }
          }
        })
      } else {
        Object.keys(item).forEach((key) => {
          if (typeof item[key] === 'function') {
            const res = item[key]()
            if (res) {
              isValid = true
              // 多个校验规则不通过，优先显示第一个校验规则
              if (!validateResult[res.key]) {
                validateResult[res.key] = res.errorMsg
              }
            }
          }
        })
      }
    })
    return {
      invalid: isValid,
      validateResult,
    }
  }
}

let registerFrom = {
  name: '0',
  phone: '1380013800',
  address: 'aa',
}
// 校验方法封装
let validator = new Validator()
let validataFunc = function () {
  validator.add({ value: registerFrom.name, key: 'name' }, [
    {
      strategy: 'isSpace',
      errorMsg: '请输入用户名',
    },
    {
      // 冒号 ：分隔传值给策略函数
      strategy: 'maxLength:10',
      errorMsg: '用户名长度不能超过10个字符!',
    },
    {
      pattern: /^[\u0000-\uffff]{2,}$/,
      errorMsg: '用户名长度不能少于2个字符!',
    },
  ])
  validator.add({ value: registerFrom.phone, key: 'phone' }, [
    {
      strategy: 'isMobile',
      errorMsg: '手机号码格式不正确',
    },
  ])
  validator.add({ value: registerFrom.address, key: 'address' }, [
    {
      strategy: 'isSpace',
      errorMsg: '请输入地址',
    },
  ])
}

function validateFunc2() {
  validator.add(registerFrom.name, [
    {
      strategy: 'isSpace',
      errorMsg: '请输入用户名',
    },
    {
      // 冒号 ：分隔传值给策略函数
      strategy: 'maxLength:5',
      errorMsg: '用户名长度不能超过5个字符!',
    },
    {
      pattern: /^[\u0000-\uffff]{2,}$/,
      errorMsg: '用户名长度不能少于2个字符!',
    },
  ])
  validator.add(registerFrom.phone, [
    {
      strategy: 'isMobile',
      errorMsg: '手机号码格式不正确',
    },
  ])
  validator.add(registerFrom.address, [
    {
      strategy: 'isSpace',
      errorMsg: '请输入地址',
    },
  ])
}
validataFunc()
// validateFunc2()

/** example 提交表单 */
function submit() {
  // validator.remove('phone')
  let { invalid, validateResult } = validator.validate()
  if (invalid) {
    // 校验不通过
    // 做一些交互提示
    console.log(invalid, validateResult)
    return false
  }
  // 其他逻辑代码
}

submit()
