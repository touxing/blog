import{_ as n,X as s,Y as a,a0 as t}from"./framework-127c059f.js";const p={},e=t(`<h1 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h1><p>工厂模式 （Factory Pattern），根据不同的输入返回不同类的实例，一般用来创建同一类对象。工厂方式的主要思想是将对象的创建与对象的实现分离</p><h2 id="抽象工厂" tabindex="-1"><a class="header-anchor" href="#抽象工厂" aria-hidden="true">#</a> 抽象工厂</h2><p>抽象工厂 （Abstract Factory）：通过对类的工厂抽象使其业务用于对产品类簇的创建，而不是负责创建某一类产品的实例。关键在于使用抽象类制定了实例的结构，调用者直接面向实例的结构编程，从实例的具体实现中解耦。</p><p>工厂模式，顾名思义，就相当于一间工厂，工厂可以添加不同的模具，制造不同系列的产品，比如生产飞机，大炮。</p><p>抽象工厂，顾名思义，定义的是抽象的概念，没有定义如何实现。比如沈飞工厂生产飞机，定义抽象类“飞机”，具体实现，可以生产容量较大的C919客机，可以生产歼-20战斗机，B-20轰炸机。具体型号的飞机是实现，它们都符合 “飞机” 这个抽象类。</p><p>抽象类实现</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 抽象类，ES5 构造函数方式 */</span>
<span class="token comment">// var AbstractEs5 = function() {</span>
<span class="token comment">//   if(new.target === AbstractEs5) {</span>
<span class="token comment">//     throw new Error(&#39;抽象类不能实例化&#39;)</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>
<span class="token comment">// AbstractEs5.prototype.fly = function() {</span>
<span class="token comment">//   throw new Error(&#39;抽象类方法不能调用&#39;)</span>
<span class="token comment">// }</span>

<span class="token comment">//  抽象工厂 飞机制造厂</span>
<span class="token keyword">class</span> <span class="token class-name">AbstractFactory</span>  <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">===</span> AbstractFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;抽象类不能实例化&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 抽象制造方法，我只会说要造什么，我不会造</span>
  <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;抽象类方法不能调用&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 我是抽象飞机，我是一款概念产品</span>
<span class="token keyword">class</span> <span class="token class-name">AbstractPlane</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">===</span> AbstractPlane<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;抽象类不能实例化&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;抽象类方法不能调用&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂模式，沈飞制造厂</span>
<span class="token keyword">class</span> <span class="token class-name">FactoryShenFei</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/** todo: 内部可以使用策略模式，这里简单用 switch-case
   * 实现抽象制造方法，我知道如何造飞机，我有很多模具
  */</span>
  <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;C919客机&#39;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">C919Plane</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">&#39;歼-20战斗机&#39;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Jian20</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">&#39;B-20轰炸机&#39;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">B20Hong</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PrintWorks</span><span class="token punctuation">(</span><span class="token string">&#39;工厂没活干就喜欢开动印钞机&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 我是c919客机模具</span>
<span class="token keyword">class</span> <span class="token class-name">C919Plane</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractPlane</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">具体产品</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我可以飞得很猛，载客量大，安全第一&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 我是歼20战斗机模具</span>
<span class="token keyword">class</span> <span class="token class-name">Jian20</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractPlane</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">具体产品</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我可以飞得很快，咻咻咻&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 我是B20轰炸机模具</span>
<span class="token keyword">class</span> <span class="token class-name">B20Hong</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractPlane</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">具体产品</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我可以飞得很久，载蛋量大，轰轰轰&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token constant">F1</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FactoryShenFei</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> <span class="token constant">C9</span> <span class="token operator">=</span> <span class="token constant">F1</span><span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&#39;C919客机&#39;</span><span class="token punctuation">)</span>
<span class="token constant">C9</span><span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token constant">J20</span> <span class="token operator">=</span> <span class="token constant">F1</span><span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&#39;歼-20战斗机&#39;</span><span class="token punctuation">)</span>
<span class="token constant">J20</span><span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token constant">B20</span> <span class="token operator">=</span> <span class="token constant">F1</span><span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&#39;B-20轰炸机&#39;</span><span class="token punctuation">)</span>
<span class="token constant">B20</span><span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工厂模式和抽象工厂模式的区别：</p><p>工厂模式 主要关注单独的产品实例的创建； 抽象工厂模式 主要关注产品类簇实例的创建，如果产品类簇只有一个产品，那么这时的抽象工厂模式就退化为工厂模式了； 根据场景灵活使用即可。</p>`,10),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","index.html.vue"]]);export{k as default};
