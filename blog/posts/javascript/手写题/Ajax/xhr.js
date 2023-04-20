/*
 * File Created: Thursday, 20th April 2023 5:00:08 pm
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Thursday, 20th April 2023 5:00:41 pm
 * Modified By: hotsuitor (hotsuitor@qq.com>)
 */

/**
 *
 * @param {Object} options
 * @param {string} options.url
 * @param {string} options.method
 * @param {Object} options.data
 * @param {Function} options.success
 * @param {Function} options.error
 */
function request(options = {}) {
  // 初始化xhr实例
  let xhr = new XMLHttpRequest()

  method = options.method ? options.method.toUpperCase() : 'GET'

  if (method === 'POST') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencode')
  }
  xhr.open(method, options.url, true)
  xhr.send(method === 'GET' ? null : JSON.stringify(options.data))
  xhr.onreadystatechange = function () {
    // UNSENT = 0; // 初始状态
    // OPENED = 1; // open 被调用
    // HEADERS_RECEIVED = 2; // 接收到 response header
    // LOADING = 3; // 响应正在被加载（接收到一个数据包）
    // DONE = 4; // 请求完成
    if (xhr.readyState === 4) {
      if (typeof options.success === 'function') {
        options.success(xhr.response || xhr.responseText)
      }
    } else {
      console.warn('request failed')
      if (typeof options.error === 'function') {
        options.error(xhr.responseText)
      }
    }
  }

  xhr.onerror = function () {
    // 处理非 HTTP error（例如网络中断）
    console.error('Network Error')
  }
}

request({ url: 'https://www.baidu.com' }, (res) => {
  console.log(res)
})
