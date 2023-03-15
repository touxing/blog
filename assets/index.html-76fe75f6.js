import{_ as n,X as s,Y as a,a1 as t}from"./framework-2b07d456.js";const p={},o=t(`<h1 id="桥接模式" tabindex="-1"><a class="header-anchor" href="#桥接模式" aria-hidden="true">#</a> 桥接模式</h1><p>3 ⭐</p><blockquote><p>桥接模式，将抽象部分与它的实现部分分离，使他们都可以独立地变化 使用组合关系代替继承关系，降低抽象和实现两个可变纬度的耦合度</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Author: HotSuitor
 * @Date: 2020-03-16 16:58:00
 * @LastEditors: hs
 * @LastEditTime: 2020-04-15 15:24:01
 * @Description: hotsuitor@qq.com
 */</span>
<span class="token doc-comment comment">/**
 * 桥接模式，将抽象部分与它的实现部分分离，使他们都可以独立地变化
 * 使用组合关系代替继承关系，降低抽象和实现两个可变纬度的耦合度
 */</span>

<span class="token comment">// 用桥接模式 实现工厂生产洗衣机的不同型号</span>

<span class="token comment">// 组装洗衣机</span>
<span class="token keyword">function</span> <span class="token function">Washer</span><span class="token punctuation">(</span><span class="token parameter">motorType<span class="token punctuation">,</span> rollerType<span class="token punctuation">,</span> transducerType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>motor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Motor</span><span class="token punctuation">(</span>motorType<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>roller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Roller</span><span class="token punctuation">(</span>rollerType<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>transducer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transducer</span><span class="token punctuation">(</span>transducerType<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 洗衣机工作</span>
<span class="token class-name">Washer</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">work</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>motor<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>roller<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>transducer<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 电机</span>
<span class="token keyword">function</span> <span class="token function">Motor</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>motorType <span class="token operator">=</span> type <span class="token operator">+</span> <span class="token string">&quot;电机&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Motor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>motorType <span class="token operator">+</span> <span class="token string">&quot;开始工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 滚筒</span>
<span class="token keyword">function</span> <span class="token function">Roller</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>rollerType <span class="token operator">=</span> type <span class="token operator">+</span> <span class="token string">&quot;滚筒&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Roller</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rollerType <span class="token operator">+</span> <span class="token string">&quot;开始工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 变频器</span>
<span class="token keyword">function</span> <span class="token function">Transducer</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>transducerType <span class="token operator">=</span> type <span class="token operator">+</span> <span class="token string">&quot;变频器&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Transducer</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>transducerType <span class="token operator">+</span> <span class="token string">&quot;开始工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 新建洗衣机</span>
<span class="token keyword">var</span> washerA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Washer</span><span class="token punctuation">(</span><span class="token string">&quot;小功率&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;直立&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;小功率&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
washerA<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> washerB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Washer</span><span class="token punctuation">(</span><span class="token string">&quot;中功率&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;滚筒&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;中功率&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
washerB<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// es6实现</span>
<span class="token keyword">class</span> <span class="token class-name">Washer2</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">motorType<span class="token punctuation">,</span> rollerType<span class="token punctuation">,</span> transducerType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>motor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Motor2</span><span class="token punctuation">(</span>motorType<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>roller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Roller2</span><span class="token punctuation">(</span>rollerType<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>transducer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transducer2</span><span class="token punctuation">(</span>transducerType<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>motor<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>roller<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>transducer<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Motor2</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">motorType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>motorType <span class="token operator">=</span> motorType <span class="token operator">+</span> <span class="token string">&quot;电机&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>motorType <span class="token operator">+</span> <span class="token string">&quot;开始工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Roller2</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">rollerType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rollerType <span class="token operator">=</span> rollerType <span class="token operator">+</span> <span class="token string">&quot;滚筒&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rollerType <span class="token operator">+</span> <span class="token string">&quot;开始工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Transducer2</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">transducerType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>transducerType <span class="token operator">=</span> transducerType <span class="token operator">+</span> <span class="token string">&quot;变频器&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>transducerType <span class="token operator">+</span> <span class="token string">&quot;开始工作&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> washerA1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Washer2</span><span class="token punctuation">(</span><span class="token string">&quot;大功率&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;横滚&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;中等变频&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
washerA1<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","index.html.vue"]]);export{k as default};
