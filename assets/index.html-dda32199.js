const n=JSON.parse(`{"key":"v-a9aff28a","path":"/posts/javascript/18%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F/","title":"发布订阅模式","lang":"zh-CN","frontmatter":{"date":"2020-11-23T00:00:00.000Z","category":["设计模式"],"tag":["发布订阅模式"],"description":"发布订阅模式 代码实现 // ES5 IIFE 实现 var Publisher = (function () { var _subsMap = {} // 存储订阅者 return { // 消息订阅 subscribe(type, cb) { if (_subsMap[type]) { if (_subsMap[type].indexOf(cb) === -1) { _subsMap[type].push(cb) } } else { _subsMap[type] = [cb] } }, // 消息退订 unSubscribe(type, cb) { if (!_subsMap[type] || _subsMap[type].indexOf(cb) === -1) return var idx = _subsMap[type].indexOf(cb) _subsMap[type].splice(idx, 1) }, // 消息发布 notify(type) { if (!_subsMap[type]) return var params = Array.prototype.slice.call(arguments) _subsMap[type].forEach(function (cb) { cb(params) }) }, } })() function piXie(message) { console.log('pipipi' + message) } Publisher.subscribe('运动鞋', (message) =&gt; console.log('AJ830' + message)) // 订阅运动鞋 Publisher.subscribe('运动鞋', (message) =&gt; console.log('JK960' + message)) // 订阅运动鞋 Publisher.subscribe('皮鞋', piXie) // 订阅皮鞋 Publisher.notify('运动鞋', '运动鞋到货~速来') Publisher.notify('皮鞋', '皮鞋到货~速来') Publisher.unSubscribe('皮鞋', piXie) Publisher.notify('皮鞋', '皮鞋到货~速来2') // ES6 class Publisher2 { constructor() { this._subsMap = {} } subscribe(type, cb) { if (this._subsMap[type]) { if (!this._subsMap[type].includes(cb)) { this._subsMap[type].push(cb) } } else { this._subsMap[type] = [cb] } } unSubscribe(type, cb) { if (!this._subsMap[type] || !this._subsMap[type].includes(cb)) return const idx = this._subsMap[type].indexOf(cb) this._subsMap[type].splice(idx, 1) } notify(type, ...payload) { if (!this._subsMap[type]) return this._subsMap[type].forEach((cb) =&gt; cb(...payload)) } } const adadis = new Publisher2() function fanBuXie(message) { console.log('139zzz' + message) } adadis.subscribe('运动鞋', (message) =&gt; console.log('152xxx' + message)) // 订阅运动鞋 adadis.subscribe('运动鞋', (message) =&gt; console.log('138yyy' + message)) adadis.subscribe('帆布鞋', fanBuXie) // 订阅帆布鞋 adadis.notify('运动鞋', ' 运动鞋到货了 ~') // 打电话通知买家运动鞋消息 adadis.unSubscribe('帆布鞋', fanBuXie) //取消订阅帆布鞋信息 adadis.notify('帆布鞋', ' 帆布鞋售罄了 T.T') // 打电话通知买家帆布鞋消息","head":[["meta",{"property":"og:url","content":"https://touxing.github.io/blog/blog/posts/javascript/18%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F/"}],["meta",{"property":"og:site_name","content":"磨刀霍霍向猪羊"}],["meta",{"property":"og:title","content":"发布订阅模式"}],["meta",{"property":"og:description","content":"发布订阅模式 代码实现 // ES5 IIFE 实现 var Publisher = (function () { var _subsMap = {} // 存储订阅者 return { // 消息订阅 subscribe(type, cb) { if (_subsMap[type]) { if (_subsMap[type].indexOf(cb) === -1) { _subsMap[type].push(cb) } } else { _subsMap[type] = [cb] } }, // 消息退订 unSubscribe(type, cb) { if (!_subsMap[type] || _subsMap[type].indexOf(cb) === -1) return var idx = _subsMap[type].indexOf(cb) _subsMap[type].splice(idx, 1) }, // 消息发布 notify(type) { if (!_subsMap[type]) return var params = Array.prototype.slice.call(arguments) _subsMap[type].forEach(function (cb) { cb(params) }) }, } })() function piXie(message) { console.log('pipipi' + message) } Publisher.subscribe('运动鞋', (message) =&gt; console.log('AJ830' + message)) // 订阅运动鞋 Publisher.subscribe('运动鞋', (message) =&gt; console.log('JK960' + message)) // 订阅运动鞋 Publisher.subscribe('皮鞋', piXie) // 订阅皮鞋 Publisher.notify('运动鞋', '运动鞋到货~速来') Publisher.notify('皮鞋', '皮鞋到货~速来') Publisher.unSubscribe('皮鞋', piXie) Publisher.notify('皮鞋', '皮鞋到货~速来2') // ES6 class Publisher2 { constructor() { this._subsMap = {} } subscribe(type, cb) { if (this._subsMap[type]) { if (!this._subsMap[type].includes(cb)) { this._subsMap[type].push(cb) } } else { this._subsMap[type] = [cb] } } unSubscribe(type, cb) { if (!this._subsMap[type] || !this._subsMap[type].includes(cb)) return const idx = this._subsMap[type].indexOf(cb) this._subsMap[type].splice(idx, 1) } notify(type, ...payload) { if (!this._subsMap[type]) return this._subsMap[type].forEach((cb) =&gt; cb(...payload)) } } const adadis = new Publisher2() function fanBuXie(message) { console.log('139zzz' + message) } adadis.subscribe('运动鞋', (message) =&gt; console.log('152xxx' + message)) // 订阅运动鞋 adadis.subscribe('运动鞋', (message) =&gt; console.log('138yyy' + message)) adadis.subscribe('帆布鞋', fanBuXie) // 订阅帆布鞋 adadis.notify('运动鞋', ' 运动鞋到货了 ~') // 打电话通知买家运动鞋消息 adadis.unSubscribe('帆布鞋', fanBuXie) //取消订阅帆布鞋信息 adadis.notify('帆布鞋', ' 帆布鞋售罄了 T.T') // 打电话通知买家帆布鞋消息"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T06:54:47.000Z"}],["meta",{"property":"article:tag","content":"发布订阅模式"}],["meta",{"property":"article:published_time","content":"2020-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T06:54:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"发布订阅模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T06:54:47.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1678863287000,"updatedTime":1678863287000,"contributors":[{"name":"hotsuitor","email":"hotsuitor@qq.com","commits":1}]},"readingTime":{"minutes":0.1,"words":29},"filePathRelative":"posts/javascript/18发布订阅模式/README.md","localizedDate":"2020年11月23日","excerpt":"<h1> 发布订阅模式</h1>\\n<p>代码实现</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// ES5 IIFE 实现</span>\\n<span class=\\"token keyword\\">var</span> Publisher <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">var</span> _subsMap <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span> <span class=\\"token comment\\">// 存储订阅者</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 消息订阅</span>\\n    <span class=\\"token function\\">subscribe</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">type<span class=\\"token punctuation\\">,</span> cb</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>_subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>_subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">indexOf</span><span class=\\"token punctuation\\">(</span>cb<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">===</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n          _subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>cb<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">}</span>\\n      <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n        _subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>cb<span class=\\"token punctuation\\">]</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token comment\\">// 消息退订</span>\\n    <span class=\\"token function\\">unSubscribe</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">type<span class=\\"token punctuation\\">,</span> cb</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>_subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">||</span> _subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">indexOf</span><span class=\\"token punctuation\\">(</span>cb<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">===</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span>\\n      <span class=\\"token keyword\\">var</span> idx <span class=\\"token operator\\">=</span> _subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">indexOf</span><span class=\\"token punctuation\\">(</span>cb<span class=\\"token punctuation\\">)</span>\\n      _subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">splice</span><span class=\\"token punctuation\\">(</span>idx<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token comment\\">// 消息发布</span>\\n    <span class=\\"token function\\">notify</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">type</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>_subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span>\\n      <span class=\\"token keyword\\">var</span> params <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">Array</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">slice</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">call</span><span class=\\"token punctuation\\">(</span>arguments<span class=\\"token punctuation\\">)</span>\\n      _subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">cb</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">cb</span><span class=\\"token punctuation\\">(</span>params<span class=\\"token punctuation\\">)</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">piXie</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">message</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'pipipi'</span> <span class=\\"token operator\\">+</span> message<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\nPublisher<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">subscribe</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'运动鞋'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">message</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'AJ830'</span> <span class=\\"token operator\\">+</span> message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 订阅运动鞋</span>\\nPublisher<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">subscribe</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'运动鞋'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">message</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'JK960'</span> <span class=\\"token operator\\">+</span> message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 订阅运动鞋</span>\\nPublisher<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">subscribe</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'皮鞋'</span><span class=\\"token punctuation\\">,</span> piXie<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 订阅皮鞋</span>\\n\\nPublisher<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">notify</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'运动鞋'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'运动鞋到货~速来'</span><span class=\\"token punctuation\\">)</span>\\nPublisher<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">notify</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'皮鞋'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'皮鞋到货~速来'</span><span class=\\"token punctuation\\">)</span>\\nPublisher<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">unSubscribe</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'皮鞋'</span><span class=\\"token punctuation\\">,</span> piXie<span class=\\"token punctuation\\">)</span>\\nPublisher<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">notify</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'皮鞋'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'皮鞋到货~速来2'</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// ES6</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Publisher2</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">constructor</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>_subsMap <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token function\\">subscribe</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">type<span class=\\"token punctuation\\">,</span> cb</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>_subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>_subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">includes</span><span class=\\"token punctuation\\">(</span>cb<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>_subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>cb<span class=\\"token punctuation\\">)</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>_subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>cb<span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token function\\">unSubscribe</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">type<span class=\\"token punctuation\\">,</span> cb</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>_subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">||</span> <span class=\\"token operator\\">!</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>_subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">includes</span><span class=\\"token punctuation\\">(</span>cb<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span>\\n    <span class=\\"token keyword\\">const</span> idx <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>_subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">indexOf</span><span class=\\"token punctuation\\">(</span>cb<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>_subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">splice</span><span class=\\"token punctuation\\">(</span>idx<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token function\\">notify</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">type<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">...</span>payload</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>_subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>_subsMap<span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">cb</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token function\\">cb</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">...</span>payload<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> adadis <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Publisher2</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">fanBuXie</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">message</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'139zzz'</span> <span class=\\"token operator\\">+</span> message<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\nadadis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">subscribe</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'运动鞋'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">message</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'152xxx'</span> <span class=\\"token operator\\">+</span> message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 订阅运动鞋</span>\\nadadis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">subscribe</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'运动鞋'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">message</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'138yyy'</span> <span class=\\"token operator\\">+</span> message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\nadadis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">subscribe</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'帆布鞋'</span><span class=\\"token punctuation\\">,</span> fanBuXie<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 订阅帆布鞋</span>\\nadadis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">notify</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'运动鞋'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">' 运动鞋到货了 ~'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 打电话通知买家运动鞋消息</span>\\nadadis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">unSubscribe</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'帆布鞋'</span><span class=\\"token punctuation\\">,</span> fanBuXie<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">//取消订阅帆布鞋信息</span>\\nadadis<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">notify</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'帆布鞋'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">' 帆布鞋售罄了 T.T'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 打电话通知买家帆布鞋消息</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};