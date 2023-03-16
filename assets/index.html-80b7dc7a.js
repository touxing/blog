import{_ as n,X as s,Y as a,a0 as p}from"./framework-127c059f.js";const t={},e=p(`<h1 id="职责链模式" tabindex="-1"><a class="header-anchor" href="#职责链模式" aria-hidden="true">#</a> 职责链模式</h1><p>3 ⭐</p><p>明确各个对象的职责，如果一个对象没有权限，内部设置自动抛给有权限处理的对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义一个公共类</span>
<span class="token keyword">let</span> <span class="token function-variable function">Leader</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>nextLeader <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
<span class="token class-name">Leader</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setNext</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>nextLeader <span class="token operator">=</span> next
  <span class="token keyword">return</span> next <span class="token comment">// 这样可以链式子调用</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义职责链的节点</span>
<span class="token keyword">let</span> GroupLeader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Leader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
GroupLeader<span class="token punctuation">.</span><span class="token function-variable function">handle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">duration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>duration <span class="token operator">&lt;=</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;=0.5天 小组领导可以批，批准了&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nextLeader<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>duration<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> DepartmentLeader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Leader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
DepartmentLeader<span class="token punctuation">.</span><span class="token function-variable function">handle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">duration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>duration <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;=1天 部门领导可以批，批准了&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nextLeader<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>duration<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> GeneralLeader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Leader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
GeneralLeader<span class="token punctuation">.</span><span class="token function-variable function">handle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">duration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>duration <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;=2天 总经理可以批，批准了&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;想离职是吧？&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 排列职责链</span>
<span class="token comment">// GroupLeader.setNext(DepartmentLeader)</span>
<span class="token comment">// DepartmentLeader.setNext(GeneralLeader)</span>
GroupLeader<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>DepartmentLeader<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>GeneralLeader<span class="token punctuation">)</span>

<span class="token comment">// 执行场景，请假，组长批不了，递交给上一级部门领导，部门领导批不了递交给上一级总经理</span>
GroupLeader<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>
GroupLeader<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
GroupLeader<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
GroupLeader<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment">// ES6</span>
<span class="token comment">// 领导基类</span>
<span class="token keyword">class</span> <span class="token class-name">Leader2</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nextLeader <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token function">setNext</span><span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nextLeader <span class="token operator">=</span> next
    <span class="token keyword">return</span> next
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">GroupLeader2</span> <span class="token keyword">extends</span> <span class="token class-name">Leader2</span> <span class="token punctuation">{</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">duration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>duration <span class="token operator">&lt;=</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;=0.5天 小组领导可以批，批准了&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nextLeader<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>duration<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DepartmentLeader2</span> <span class="token keyword">extends</span> <span class="token class-name">Leader2</span> <span class="token punctuation">{</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">duration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>duration <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;=1天 部门领导可以批，批准了&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nextLeader<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>duration<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">GeneralLeader2</span> <span class="token keyword">extends</span> <span class="token class-name">Leader2</span> <span class="token punctuation">{</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">duration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>duration <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;=2天 总经理可以批，批准了&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;想离职是吧？&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ZhangSan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GroupLeader2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> LiSi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DepartmentLeader2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> WangWu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GeneralLeader2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

ZhangSan<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>LiSi<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>WangWu<span class="token punctuation">)</span>
ZhangSan<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token comment">//  小组领导经过一番心理斗争：批准了</span>
ZhangSan<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//  部门领导经过一番心理斗争：批准了</span>
ZhangSan<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//  总经理经过一番心理斗争：批准了</span>
ZhangSan<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">//  总经理：不准请这么长的假</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","index.html.vue"]]);export{k as default};
