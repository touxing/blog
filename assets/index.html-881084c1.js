import{_ as t,X as e,Y as o,Z as n,$ as s,a0 as p,a1 as c,C as l}from"./framework-2b07d456.js";const i={},u=n("h1",{id:"vue简单实现理解原理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue简单实现理解原理","aria-hidden":"true"},"#"),s(" vue简单实现理解原理")],-1),k={href:"https://github.com/bison1994/vue-for-learning",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.cnblogs.com/kidney/p/8018226.html",target:"_blank",rel:"noopener noreferrer"},r=c(`<p>阅读源码心得</p><ul><li>读源码，先从整体入手，不必一开始拘泥于细节。</li><li>整体阅读下来，了解主要流程，每一模块是干什么的即可，需要的时候再回台看实现</li><li>读细节的时候，写代码注释，思考每个代码块的功能，理解作者为什么这样写，哪些是可以借鉴的</li></ul><blockquote><p>阅读源码 不是为了把源码写出来，是为了学习思想，实现是次要的，思想是主要的</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * make data reactive
 * when data changes, the \`update\` method will be invoked automatically and thus updates the DOM
 * @Tips
 * some code may be useless but helpful for understanding
 * some code is incompleted and heavily simplified but also for better understanding
 */</span>

<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 响应化数据
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">obj</span> 响应化对象
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">key</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
   * <span class="token keyword">@return</span>:
   */</span>
  <span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 收集依赖</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          Dep<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">addDep</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> val
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 数据没有变化，不作更新</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token keyword">return</span>
        val <span class="token operator">=</span> newVal
        <span class="token comment">// 通知依赖更新</span>
        dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 观察者</span>
  <span class="token keyword">function</span> <span class="token function">observe</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 把数据响应化</span>
      <span class="token function">defineReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> uid$1 <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token comment">// 订阅者，用来存放 Watcher 对象的实例</span>
  <span class="token keyword">function</span> <span class="token function">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 保存 Watcher 实例</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> uid$1<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token class-name">Dep</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addSub</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">sub</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 通知事件，通知响应数据和更新dom</span>
  <span class="token class-name">Dep</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">notify</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> subs <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subs
    <span class="token comment">// 遍历通知每一个 watch</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> subs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 触发更新dom</span>
      subs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 观察者，监测数据</span>
  <span class="token keyword">function</span> <span class="token function">Watcher</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> expOrFn<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>vm <span class="token operator">=</span> vm <span class="token comment">// vue实例</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> expOrFn <span class="token comment">// 监测的表达式 or function</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">=</span> cb <span class="token comment">// 回调</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>depIds <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 依赖Id池</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">Watcher</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">/* ! 保存当前上下文 this的指向 */</span>
    <span class="token comment">//! 这里是关键</span>
    <span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">)</span> <span class="token comment">// 传入的expOrFn this 指向 vue 实例</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> value
  <span class="token punctuation">}</span>

  <span class="token comment">// Watcher 更新监测的值</span>
  <span class="token class-name">Watcher</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">!==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 内部优化，值没有变化不做处理</span>
      <span class="token keyword">var</span> oldValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value
      <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token comment">// 回调，watch 方法的function(newValue, oldValue)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Watcher 绑定对应的订阅者</span>
  <span class="token class-name">Watcher</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addDep</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">dep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> id <span class="token operator">=</span> dep<span class="token punctuation">.</span>id
    <span class="token comment">// to avoid depending the watcher to the same dep more than once</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>depIds<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>depIds<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
      dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 虚拟dom
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">tag</span> 标签名
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">data</span> 标签属性对象
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Arrar<span class="token punctuation">}</span></span> <span class="token parameter">children</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">text</span> 标签内容文本
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Element<span class="token punctuation">}</span></span> <span class="token parameter">elm</span> dom 元素
   * <span class="token keyword">@return</span>:
   */</span>
  <span class="token keyword">function</span> <span class="token function">vnode</span><span class="token punctuation">(</span><span class="token parameter">tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> children<span class="token punctuation">,</span> text<span class="token punctuation">,</span> elm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> tag
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data
    <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> children
    <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text
    <span class="token keyword">this</span><span class="token punctuation">.</span>elm <span class="token operator">=</span> elm
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 标准化子节点
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Arrar<span class="token operator">|</span>String<span class="token punctuation">}</span></span>  <span class="token parameter">children</span>
   * <span class="token keyword">@return</span>: <span class="token punctuation">{</span>Arrar<span class="token punctuation">}</span>
   */</span>
  <span class="token keyword">function</span> <span class="token function">normalizeChildren</span><span class="token punctuation">(</span><span class="token parameter">children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> children <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token function">createTextVNode</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> children
  <span class="token punctuation">}</span>


  <span class="token comment">// 这里使用了 [外观模式](/zh/javascript/15外观模式/)，</span>
  <span class="token comment">// 统一对外接口 vnode 用不同的方法包装初始化得到不同的结构</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 创建文本virtual node
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">val</span> 文本内容
   * <span class="token keyword">@return</span>: <span class="token punctuation">{</span>vnode<span class="token punctuation">}</span>
   */</span>
  <span class="token keyword">function</span> <span class="token function">createTextVNode</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">vnode</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token function">String</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 创建 tag virtual node
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">tag</span> 标签
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">data</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">children</span> 子元素
   * <span class="token keyword">@return</span>:
   */</span>
  <span class="token keyword">function</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter">tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">vnode</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token function">normalizeChildren</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 创建真实dom的方法
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>vnode<span class="token punctuation">}</span></span> <span class="token parameter">vnode</span>
   * <span class="token keyword">@return</span>:
   */</span>
  <span class="token keyword">function</span> <span class="token function">createElm</span><span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> tag <span class="token operator">=</span> vnode<span class="token punctuation">.</span>tag
    <span class="token keyword">var</span> data <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data
    <span class="token keyword">var</span> children <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children

    <span class="token comment">// tag 不为空，创建 element</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>

      <span class="token comment">// 设置了标签属性，创建标签属性</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>attrs <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> attrs <span class="token operator">=</span> data<span class="token punctuation">.</span>attrs
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> attrs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          vnode<span class="token punctuation">.</span>elm<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> attrs<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 有子节点，创建子节点</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">createChildren</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> vnode<span class="token punctuation">.</span>elm
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 创建子节点
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>vnode<span class="token punctuation">}</span></span> <span class="token parameter">vnode</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">children</span>
   * <span class="token keyword">@return</span>:
   */</span>
  <span class="token keyword">function</span> <span class="token function">createChildren</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 遍历所有子节点</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 父级元素append子节点，若子节点又有子节点，递归调用创建</span>
      vnode<span class="token punctuation">.</span>elm<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">createElm</span><span class="token punctuation">(</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 简单对比两个节点是否相同
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>vnode<span class="token punctuation">}</span></span> <span class="token parameter">vnode1</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>vnode<span class="token punctuation">}</span></span> <span class="token parameter">vnode2</span>
   * <span class="token keyword">@return</span>: <span class="token punctuation">{</span>Boolean<span class="token punctuation">}</span> true 相同
   */</span>
  <span class="token keyword">function</span> <span class="token function">sameVnode</span><span class="token punctuation">(</span><span class="token parameter">vnode1<span class="token punctuation">,</span> vnode2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> vnode1<span class="token punctuation">.</span>tag <span class="token operator">===</span> vnode2<span class="token punctuation">.</span>tag
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">emptyNodeAt</span><span class="token punctuation">(</span><span class="token parameter">elm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">vnode</span><span class="token punctuation">(</span>elm<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> elm<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 渲染vnode到真实dom
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span>
   * <span class="token keyword">@return</span>:
   */</span>
  <span class="token keyword">function</span> <span class="token function">patchVnode</span><span class="token punctuation">(</span><span class="token parameter">oldVnode<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> elm <span class="token operator">=</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>elm <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>elm<span class="token punctuation">)</span>
    <span class="token keyword">var</span> oldCh <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>children
    <span class="token keyword">var</span> ch <span class="token operator">=</span> vnode<span class="token punctuation">.</span>children

    <span class="token comment">// 不是文本元素</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// if有旧子节点和新子节点，遍历更新子节点</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>oldCh <span class="token operator">&amp;&amp;</span> ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">updateChildren</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">,</span> ch<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVnode<span class="token punctuation">.</span>text <span class="token operator">!==</span> vnode<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 更新的是文本，直接从vnode赋值更新dom文本</span>
      elm<span class="token punctuation">.</span>textContent <span class="token operator">=</span> vnode<span class="token punctuation">.</span>text
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 更新子节点
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>vnode<span class="token punctuation">}</span></span>
   * <span class="token keyword">@return</span>:
   */</span>
  <span class="token keyword">function</span> <span class="token function">updateChildren</span><span class="token punctuation">(</span><span class="token parameter">oldCh<span class="token punctuation">,</span> newCh</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// assume that every element node has only one child to simplify our diff algorithm</span>
    <span class="token comment">// 假设每个元素只有一个子节点，简化diff算法</span>
    <span class="token comment">// dom层级节点相同，继续遍历下一层节点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">sameVnode</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> newCh<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 递归调用 patchVnode</span>
      <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> newCh<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// dom层级节点不同或没有子节点直接更新</span>
      <span class="token function">patch</span><span class="token punctuation">(</span>oldCh<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> newCh<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 真实更新 vnode 方法
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span>
   * <span class="token keyword">@return</span>:
   */</span>
  <span class="token keyword">function</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token parameter">oldVnode<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> isRealElement <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>nodeType <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token comment">// virtual node has no \`nodeType\` property</span>
    <span class="token comment">// 旧节点是 virtual node 而且 新旧 vnode 相同，更新 vnode</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRealElement <span class="token operator">&amp;&amp;</span> <span class="token function">sameVnode</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">patchVnode</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 旧节点时真实 dom，创建一个 空 dom，需要用到其父元素</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isRealElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        oldVnode <span class="token operator">=</span> <span class="token function">emptyNodeAt</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">var</span> elm <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>elm
      <span class="token keyword">var</span> parent <span class="token operator">=</span> elm<span class="token punctuation">.</span>parentNode

      <span class="token function">createElm</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>

      parent<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>elm<span class="token punctuation">,</span> elm<span class="token punctuation">)</span> <span class="token comment">// 插入新节点</span>
      parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>elm<span class="token punctuation">)</span> <span class="token comment">// 移除旧节点</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> vnode<span class="token punctuation">.</span>elm
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">initData</span><span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$data <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
    <span class="token keyword">var</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token keyword">var</span> i <span class="token operator">=</span> keys<span class="token punctuation">.</span>length
    <span class="token comment">// proxy data so you can use \`this.key\` directly other than \`this.$data.key\`</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">proxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">observe</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 代理访问</span>
  <span class="token keyword">function</span> <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> vm<span class="token punctuation">.</span>$data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vm<span class="token punctuation">.</span>$data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">Vue</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span>
    vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> options

    <span class="token function">initData</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
    vm<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">mount</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span>
    vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> el
    <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 调用path方法更新dom
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span>
   * <span class="token keyword">@return</span>:
   */</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">var</span> prevVnode <span class="token operator">=</span> vm<span class="token punctuation">.</span>_vnode <span class="token comment">// 保存旧vnode，这里是引用关系，可以与下面赋值换位置</span>
    vm<span class="token punctuation">.</span>_vnode <span class="token operator">=</span> vnode
    <span class="token comment">// 没有旧的 vnode，直接传 vnode渲染</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>prevVnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> vm<span class="token punctuation">.</span><span class="token function">patch</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 传入旧的 vnode 对比</span>
      vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> vm<span class="token punctuation">.</span><span class="token function">patch</span><span class="token punctuation">(</span>prevVnode<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>patch <span class="token operator">=</span> patch

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 渲染函数，入口渲染
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span>
   * <span class="token keyword">@return</span>:
   */</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">return</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Hello world&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span>
        <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;wrapper&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>isShow
            <span class="token operator">?</span> <span class="token function">createElement</span><span class="token punctuation">(</span>
                <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;inner&#39;</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>message
              <span class="token punctuation">)</span>
            <span class="token operator">:</span> <span class="token function">createElement</span><span class="token punctuation">(</span>
                <span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;inner&#39;</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token string">&#39;Hello world&#39;</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// test</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>isShow <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(m,b){const a=l("ExternalLinkIcon");return e(),o("div",null,[u,n("blockquote",null,[n("p",null,[n("a",k,[s("核心原理理解"),p(a)]),n("a",d,[s("一步步读懂vue源码"),p(a)])])]),r])}const w=t(i,[["render",v],["__file","index.html.vue"]]);export{w as default};
