import{_ as n,X as s,Y as a,a1 as t}from"./framework-2b07d456.js";const p={},e=t(`<h1 id="建造者模式" tabindex="-1"><a class="header-anchor" href="#建造者模式" aria-hidden="true">#</a> 建造者模式</h1><p>建造者模式（Builder Pattern）又称生成器模式，分步构建一个复杂对象，并允许按步骤构造。同样的构建过程可以采用不同的表示，将一个复杂<strong>对象的构建层与其表示层分离</strong>。</p><p>例如汽车装配，汽车由车身、引擎、轮胎组合而成。汽车制造厂一般不自己生产全部的部件，而是从零件商采购零件组装，最后完成装配。</p><p>代码实现</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 建造者，汽车部件厂商，提供具体零件的生产</span>
<span class="token keyword">function</span> <span class="token function">CarBuilder</span><span class="token punctuation">(</span><span class="token punctuation">{</span> color <span class="token operator">=</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span> weight <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>weight <span class="token operator">=</span> weight<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 生产部件，轮胎</span>
<span class="token class-name">CarBuilder</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">buildTyre</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;small&quot;</span><span class="token operator">:</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tyreType <span class="token operator">=</span> <span class="token string">&quot;小号轮胎&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tyreIntro <span class="token operator">=</span> <span class="token string">&quot;正在使用小号轮胎&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;normal&quot;</span><span class="token operator">:</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tyreType <span class="token operator">=</span> <span class="token string">&quot;中号轮胎&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tyreIntro <span class="token operator">=</span> <span class="token string">&quot;正在使用中号轮胎&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;big&quot;</span><span class="token operator">:</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tyreType <span class="token operator">=</span> <span class="token string">&quot;大号轮胎&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tyreIntro <span class="token operator">=</span> <span class="token string">&quot;正在使用大号轮胎&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 生产部件，发动机</span>
<span class="token class-name">CarBuilder</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">buildEngine</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;small&quot;</span><span class="token operator">:</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>engineType <span class="token operator">=</span> <span class="token string">&quot;小马力发动机&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>engineIntro <span class="token operator">=</span> <span class="token string">&quot;正在使用小马力发动机&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;normal&quot;</span><span class="token operator">:</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>engineType <span class="token operator">=</span> <span class="token string">&quot;中马力发动机&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>engineIntro <span class="token operator">=</span> <span class="token string">&quot;正在使用中马力发动机&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;big&quot;</span><span class="token operator">:</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>engineType <span class="token operator">=</span> <span class="token string">&quot;大马力发动机&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>engineIntro <span class="token operator">=</span> <span class="token string">&quot;正在使用大马力发动机&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/* 奔驰厂家，负责最终汽车产品的装配 */</span>
<span class="token keyword">function</span> <span class="token function">benChiDirector</span><span class="token punctuation">(</span><span class="token parameter">tyre<span class="token punctuation">,</span> engine<span class="token punctuation">,</span> param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> _car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarBuilder</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">;</span>
  _car<span class="token punctuation">.</span><span class="token function">buildTyre</span><span class="token punctuation">(</span>tyre<span class="token punctuation">)</span><span class="token punctuation">;</span>
  _car<span class="token punctuation">.</span><span class="token function">buildEngine</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> _car<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 获得产品实例</span>
<span class="token keyword">var</span> benchi1 <span class="token operator">=</span> <span class="token function">benChiDirector</span><span class="token punctuation">(</span><span class="token string">&quot;small&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;big&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token string">&quot;1600kg&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>benchi1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6 实现并加入链式调用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CarBuilder</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span> color <span class="token operator">=</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span> weight <span class="token operator">=</span> <span class="token string">&quot;1000kg&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>clolr <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>weight <span class="token operator">=</span> weight<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 生产部件，轮胎</span>
  <span class="token function">buildTyre</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> tyre <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 部件单独放到一个对象中保存，结构更清晰</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&quot;small&quot;</span><span class="token operator">:</span>
        tyre<span class="token punctuation">.</span>tyreType <span class="token operator">=</span> <span class="token string">&quot;小号轮胎&quot;</span><span class="token punctuation">;</span>
        tyre<span class="token punctuation">.</span>tyreIntro <span class="token operator">=</span> <span class="token string">&quot;正在使用小号轮胎&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">&quot;normal&quot;</span><span class="token operator">:</span>
        tyre<span class="token punctuation">.</span>tyreType <span class="token operator">=</span> <span class="token string">&quot;中号轮胎&quot;</span><span class="token punctuation">;</span>
        tyre<span class="token punctuation">.</span>tyreIntro <span class="token operator">=</span> <span class="token string">&quot;正在使用中号轮胎&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">&quot;big&quot;</span><span class="token operator">:</span>
        tyre<span class="token punctuation">.</span>tyreType <span class="token operator">=</span> <span class="token string">&quot;大号轮胎&quot;</span><span class="token punctuation">;</span>
        tyre<span class="token punctuation">.</span>tyreIntro <span class="token operator">=</span> <span class="token string">&quot;正在使用大号轮胎&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tyre <span class="token operator">=</span> tyre<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//</span>
  <span class="token function">buildEngine</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> engine <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&quot;small&quot;</span><span class="token operator">:</span>
        engine<span class="token punctuation">.</span>engineType <span class="token operator">=</span> <span class="token string">&quot;小马力发动机&quot;</span><span class="token punctuation">;</span>
        engine<span class="token punctuation">.</span>engineIntro <span class="token operator">=</span> <span class="token string">&quot;正在使用小马力发动机&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">&quot;normal&quot;</span><span class="token operator">:</span>
        engine<span class="token punctuation">.</span>engineType <span class="token operator">=</span> <span class="token string">&quot;中马力发动机&quot;</span><span class="token punctuation">;</span>
        engine<span class="token punctuation">.</span>engineIntro <span class="token operator">=</span> <span class="token string">&quot;正在使用中马力发动机&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">&quot;big&quot;</span><span class="token operator">:</span>
        engine<span class="token punctuation">.</span>engineType <span class="token operator">=</span> <span class="token string">&quot;大马力发动机&quot;</span><span class="token punctuation">;</span>
        engine<span class="token punctuation">.</span>engineIntro <span class="token operator">=</span> <span class="token string">&quot;正在使用大马力发动机&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> engine<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 汽车装配，获得产品实例</span>
<span class="token keyword">const</span> benchi1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarBuilder</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token string">&quot;1600kg&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">buildTyre</span><span class="token punctuation">(</span><span class="token string">&quot;small&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">buildEngine</span><span class="token punctuation">(</span><span class="token string">&quot;big&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>benchi1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="建造者通用实现" tabindex="-1"><a class="header-anchor" href="#建造者通用实现" aria-hidden="true">#</a> 建造者通用实现</h2><p>代码实现</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 建造者，部件生产</span>
<span class="token keyword">class</span> <span class="token class-name">ProductBuilder</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>param <span class="token operator">=</span> param
    <span class="token punctuation">}</span>

    <span class="token comment">/* 生产部件，part1 */</span>
    <span class="token function">buildPart1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ... Part1 生产过程</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>part1 <span class="token operator">=</span> <span class="token string">&#39;part1&#39;</span>

    <span class="token punctuation">}</span>

    <span class="token comment">/* 生产部件，part2 */</span>
    <span class="token function">buildPart2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ... Part2 生产过程</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>part2 <span class="token operator">=</span> <span class="token string">&#39;part2&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 指挥者，负责最终产品的装配 */</span>
<span class="token keyword">class</span> <span class="token class-name">Director</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> _product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProductBuilder</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span>
        _product<span class="token punctuation">.</span><span class="token function">buildPart1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        _product<span class="token punctuation">.</span><span class="token function">buildPart2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> _product
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 获得产品实例</span>
<span class="token keyword">const</span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Director</span><span class="token punctuation">(</span><span class="token string">&#39;param&#39;</span><span class="token punctuation">)</span>
结合链模式：

<span class="token comment">// 建造者，汽车部件厂家</span>
<span class="token keyword">class</span> <span class="token class-name">CarBuilder</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>param <span class="token operator">=</span> param
    <span class="token punctuation">}</span>

    <span class="token comment">/* 生产部件，part1 */</span>
    <span class="token function">buildPart1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>part1 <span class="token operator">=</span> <span class="token string">&#39;part1&#39;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* 生产部件，part2 */</span>
    <span class="token function">buildPart2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>part2 <span class="token operator">=</span> <span class="token string">&#39;part2&#39;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 汽车装配，获得产品实例</span>
<span class="token keyword">const</span> benchi1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarBuilder</span><span class="token punctuation">(</span><span class="token string">&#39;param&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">buildPart1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">buildPart2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果希望扩展实例的功能，那么只需要在建造者类的原型上增加一个实例方法，再返回 this 即可。</p><p>值得一提的是，结合链模式的建造者模式中，装配复杂对象的链式装配过程就是指挥者 Director 角色，只不过在链式装配过程中不再封装在具体指挥者中，而是由使用者自己确定装配过程。</p><p>我们提炼一下建造者模式，这里的生产汽车的奔驰厂家就相当于指挥者（Director），厂家负责将不同的部件组装成最后的产品（Product），而部件的生产者是部件厂家相当于建造者（Builder），我们通过指挥者就可以获得希望的复杂的产品对象，再通过访问不同指挥者获得装配方式不同的产品。主要有下面几个概念： Director： 指挥者，调用建造者中的部件具体实现进行部件装配，相当于整车组装厂，最终返回装配完毕的产品； Builder： 建造者，含有不同部件的生产方式给指挥者调用，是部件真正的生产者，但没有部件的装配流程； Product： 产品，要返回给访问者的复杂对象； 建造者模式的主要功能是构建复杂的产品，并且是复杂的、需要分步骤构建的产品，其构建的算法是统一的，构建的过程由指挥者决定，只要配置不同的指挥者，就可以构建出不同的复杂产品来。也就是说，建造者模式将产品装配的算法和具体部件的实现分离，这样构建的算法可以扩展和复用，部件的具体实现也可以方便地扩展和复用，从而可以灵活地通过组合来构建出不同的产品对象。</p><h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2><p>优点：</p><p>使用建造者模式可以使产品的构建流程和产品的表现分离，也就是将产品的创建算法和产品组成的实现隔离，访问者不必知道产品部件实现的细节； 扩展方便，如果希望生产一个装配顺序或方式不同的新产品，那么直接新建一个指挥者即可，不用修改既有代码，符合开闭原则； 更好的复用性，建造者模式将产品的创建算法和产品组成的实现分离，所以产品创建的算法可以复用，产品部件的实现也可以复用，带来很大的灵活性；</p><p>缺点：</p><p>建造者模式一般适用于产品之间组成部件类似的情况，如果产品之间差异性很大、复用性不高，那么不要使用建造者模式； 实例的创建增加了许多额外的结构，无疑增加了许多复杂度，如果对象粒度不大，那么我们最好直接创建对象；</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><p>相同的方法，不同的执行顺序，产生不一样的产品时，可以采用建造者模式； 产品的组成部件类似，通过组装不同的组件获得不同产品时，可以采用建造者模式；</p>`,20),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
