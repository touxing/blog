import{_ as n,X as s,Y as a,a0 as p}from"./framework-127c059f.js";const t={},o=p(`<h1 id="javascript-中的-this" tabindex="-1"><a class="header-anchor" href="#javascript-中的-this" aria-hidden="true">#</a> javascript 中的 this</h1><h2 id="改变this指向" tabindex="-1"><a class="header-anchor" href="#改变this指向" aria-hidden="true">#</a> 改变this指向</h2><h2 id="bind-方法实现" tabindex="-1"><a class="header-anchor" href="#bind-方法实现" aria-hidden="true">#</a> bind 方法实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Author: HotSuitor
 * @Date: 2020-03-19 14:38:04
 * @LastEditors: hs
 * @LastEditTime: 2020-03-19 15:37:36
 * @Description: hotsuitor@qq.com
 */</span>
<span class="token comment">// es6</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>bind <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">var</span> args1 <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
    <span class="token keyword">var</span> context <span class="token operator">=</span> args1<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> args2 <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token function">_this</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>args2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// es6</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>bind <span class="token operator">=</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>bind <span class="token operator">||</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> args1<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">_this</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>args1<span class="token punctuation">,</span> <span class="token operator">...</span>args2<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

global<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">boo</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span><span class="token function">boo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> obj<span class="token punctuation">.</span>boo
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">func</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>boo<span class="token punctuation">)</span>

<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;obj2-&gt;b&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
obj2<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span>
    <span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">60</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    func<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">50</span>
    <span class="token keyword">return</span> func
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};
