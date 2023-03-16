import{_ as n,X as s,Y as a,a0 as p}from"./framework-127c059f.js";const e={},t=p(`<h1 id="二叉查找树" tabindex="-1"><a class="header-anchor" href="#二叉查找树" aria-hidden="true">#</a> 二叉查找树</h1><blockquote><p>二叉查找树也叫二叉搜索树 Binary Search Tree 要求在树中的任意一个节点，其左子树中的每个节点的值，都要小于这个节点的值， 而右子树节点的值都大于这个节点的值</p></blockquote><p>二叉树算法框架：明确一个节点要做的事，其他抛给框架</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment"># root 需要做什么？在这做。</span>
   <span class="token comment"># 其他的不用 root 操心，抛给框架</span>
   traverse<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
   traverse<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BST遍历框架</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Definition for a binary tree node.</span>
<span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, x):</span>
<span class="token comment">#         self.val = x</span>
<span class="token comment">#         self.left = None</span>
<span class="token comment">#         self.right = None</span>
<span class="token keyword">def</span> <span class="token function">BST</span><span class="token punctuation">(</span>TreeNode<span class="token punctuation">:</span> root<span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> TreeNode<span class="token punctuation">:</span>
  <span class="token keyword">if</span> root<span class="token punctuation">.</span>val <span class="token operator">==</span> target<span class="token punctuation">:</span>
  <span class="token comment"># 找到目标，做些什么，其他交给框架</span>
  <span class="token keyword">if</span> root<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> target<span class="token punctuation">:</span> <span class="token comment"># 查找目标在右子树，递归遍历右子树</span>
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> BST<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> root<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> target<span class="token punctuation">:</span> <span class="token comment"># 查找目标在左子树，递归遍历左子树</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> BST<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> target<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 二叉查找树
 * 要求在树中的任意一个节点，其左子树中的每个节点的值，都要小于这个节点的值，
 * 而右子树节点的值都大于这个节点的值
 */</span>

<span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data <span class="token operator">||</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BinarySearchTree</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">tree</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tree <span class="token operator">=</span> tree <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tree
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&lt;</span> p<span class="token punctuation">.</span>data<span class="token punctuation">)</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>left
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&gt;</span> p<span class="token punctuation">.</span>data<span class="token punctuation">)</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>right
      <span class="token keyword">else</span> <span class="token keyword">return</span> p
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tree <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tree
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&gt;</span> p<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          p<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
          <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        p <span class="token operator">=</span> p<span class="token punctuation">.</span>right
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// data &lt; p.data</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          p<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
          <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        p <span class="token operator">=</span> p<span class="token punctuation">.</span>left
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">delete</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tree <span class="token comment">// p指向要删除的节点，初始化指向根节点</span>
    <span class="token keyword">let</span> pp <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// pp记录的是p的父节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> p<span class="token punctuation">.</span>data <span class="token operator">!=</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      pp <span class="token operator">=</span> p
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&gt;</span> p<span class="token punctuation">.</span>data<span class="token punctuation">)</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>right
      <span class="token keyword">else</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>left
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

    <span class="token comment">// 要删除的节点有两个子节点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> p<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> minP <span class="token operator">=</span> p<span class="token punctuation">.</span>right <span class="token comment">// 查找右子树中最小节点</span>
      <span class="token keyword">let</span> minPP <span class="token operator">=</span> p <span class="token comment">// minPP 表示minP的父节点</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>minP<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        minPP <span class="token operator">=</span> minP
        minP <span class="token operator">=</span> minP<span class="token punctuation">.</span>left
      <span class="token punctuation">}</span>
      p<span class="token punctuation">.</span>data <span class="token operator">=</span> minP<span class="token punctuation">.</span>data <span class="token comment">// 将minP的数据替换到p中</span>
      p <span class="token operator">=</span> minP
      pp <span class="token operator">=</span> minPP<span class="token punctuation">.</span>left
    <span class="token punctuation">}</span>

    <span class="token comment">// 删除节点是叶子节点或仅有一个子节点</span>
    <span class="token keyword">let</span> child <span class="token comment">// p的子节点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> child <span class="token operator">=</span> p<span class="token punctuation">.</span>left
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> child <span class="token operator">=</span> p<span class="token punctuation">.</span>right
    <span class="token keyword">else</span> child <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>pp <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> tree <span class="token operator">=</span> child
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pp<span class="token punctuation">.</span>left <span class="token operator">==</span> p<span class="token punctuation">)</span> pp<span class="token punctuation">.</span>left <span class="token operator">=</span> child
    <span class="token keyword">else</span> pp<span class="token punctuation">.</span>right <span class="token operator">=</span> child
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","index.html.vue"]]);export{r as default};
