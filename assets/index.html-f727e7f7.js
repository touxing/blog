import{_ as n,X as s,Y as a,a0 as e}from"./framework-127c059f.js";const t={},o=e(`<h1 id="模拟实现new关键字功能" tabindex="-1"><a class="header-anchor" href="#模拟实现new关键字功能" aria-hidden="true">#</a> 模拟实现new关键字功能</h1><p>在js中new关键字主要做了： 首先创建一个空对象，这个对象会作为执行new构造函数之后返回的对象实例， 将创建的空对象原型（<code>__proto__</code>）指向构造函数的prototype属性，同时将这个空对象赋值给构造函数内部的this，并执行构造函数逻辑，根据构造函数的执行逻辑，返回初始创建的对象或构造函数的显式返回值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * File Created: Tuesday, 14th March 2023 5:02:13 pm
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Tuesday, 14th March 2023 5:08:14 pm
 * Modified By: hotsuitor (hotsuitor@qq.com&gt;)
 */</span>

<span class="token keyword">function</span> <span class="token function">newFn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取第一个参数，要new的函数</span>
  <span class="token keyword">const</span> constructor <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 创建一个空的对象,将实例化对象的原型指向构造函数的原型对象</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
  <span class="token comment">// 修改this指向空对象，传入参数</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">constructor</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
  <span class="token comment">// 判断返回值，如果函数返回值为基本数据类型时, 则new出的对象依然是创建出的对象</span>
  <span class="token keyword">return</span> result <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token function">newFn</span><span class="token punctuation">(</span>Person<span class="token punctuation">,</span> <span class="token string">&#39;Lisa&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token function">newFn</span><span class="token punctuation">(</span>Person<span class="token punctuation">,</span> <span class="token string">&#39;Jery&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// Lisa</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// Jery</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};
