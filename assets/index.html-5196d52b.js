import{_ as n,X as s,Y as a,a0 as p}from"./framework-441f7d77.js";const t={},e=p(`<h1 id="回溯算法" tabindex="-1"><a class="header-anchor" href="#回溯算法" aria-hidden="true">#</a> 回溯算法</h1><p>解决一个回溯问题，实际是一棵决策树的遍历过程</p><p>思考3个问题：</p><ol><li>路径：已经做出的选择</li><li>选择列表：当前可以做的选择</li><li>结束条件：达到决策的底层，无法再做选择</li></ol><p>回溯算法框架</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">def</span> <span class="token function">backtrack</span><span class="token punctuation">(</span>路径<span class="token punctuation">,</span> 选择列表<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> 满足结束条件<span class="token punctuation">:</span>
        result<span class="token punctuation">.</span>add<span class="token punctuation">(</span>路径<span class="token punctuation">)</span>
        <span class="token keyword">return</span>

    <span class="token keyword">for</span> 选择 <span class="token keyword">in</span> 选择列表<span class="token punctuation">:</span>
        做选择
        backtrack<span class="token punctuation">(</span>路径<span class="token punctuation">,</span> 选择列表<span class="token punctuation">)</span>
        撤销选择
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历一棵树框架：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span>TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> TreeNode<span class="token punctuation">:</span>
    <span class="token keyword">for</span> TreeNode child <span class="token keyword">in</span> root<span class="token punctuation">.</span>childern<span class="token punctuation">:</span>
        <span class="token operator">//</span> 前序遍历需要的操作
        traverse<span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token operator">//</span> 后序遍历需要的操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>leetcode 46.全排列</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">permute</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">backtrack</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> track<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token triple-quoted-string string">&#39;&#39;&#39;
            路径：记录在 track中
            选择列表 nums中不存在于track中的那些元素
            结束条件 nums中的元素全部再track中出现
            &#39;&#39;&#39;</span>
            <span class="token comment"># 触发结束条件</span>
            <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>track<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token comment"># 列表是引用传递，导致返回的结构是 [[],[],[]]</span>
                <span class="token comment"># 传递拷贝值</span>
                res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>track<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span>

            <span class="token keyword">for</span> item <span class="token keyword">in</span> nums<span class="token punctuation">:</span>
              <span class="token comment"># 排除不合法的选择</span>
              <span class="token keyword">if</span> item <span class="token keyword">in</span> track<span class="token punctuation">:</span>
                <span class="token keyword">continue</span>
              <span class="token comment"># 做选择</span>
              track<span class="token punctuation">.</span>append<span class="token punctuation">(</span>item<span class="token punctuation">)</span>
              <span class="token comment"># 进入下一层决策树</span>
              backtrack<span class="token punctuation">(</span>nums<span class="token punctuation">,</span> track<span class="token punctuation">)</span>
              <span class="token comment"># 取消选择</span>
              track<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
        res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment"># 记录路径</span>
        backtrack<span class="token punctuation">(</span>nums<span class="token punctuation">,</span> track<span class="token punctuation">)</span>
        <span class="token keyword">return</span> res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>N皇后问题</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#</span>
<span class="token comment"># @lc app=leetcode.cn id=51 lang=python3</span>
<span class="token comment">#</span>
<span class="token comment"># [51] N皇后</span>
<span class="token comment">#</span>

<span class="token comment"># @lc code=start</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">solveNQueens</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>

      <span class="token keyword">def</span> <span class="token function">backtrack</span><span class="token punctuation">(</span>board<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">,</span> row<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        路径：board 中小于 row 的行都已经放置皇后
        选择列表：第 row 行的所有列都是放置皇后的选择
        结束条件：row 超过 board 的最后一行
        &#39;&#39;&#39;</span>
        <span class="token comment"># 结束条件</span>
        <span class="token keyword">if</span> row <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span><span class="token punctuation">:</span>
          result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>board<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span>

        n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># 列数</span>
        <span class="token keyword">for</span> col <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
          <span class="token comment"># 排除不合法选择</span>
          <span class="token keyword">if</span> <span class="token keyword">not</span> isValid<span class="token punctuation">(</span>board<span class="token punctuation">,</span> row<span class="token punctuation">,</span> col<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">continue</span>
          <span class="token comment"># 做选择</span>
          <span class="token comment"># board[row][col] = &#39;Q&#39; # TypeError: &#39;str&#39; object does not support item assignment</span>
          board<span class="token punctuation">[</span>row<span class="token punctuation">]</span> <span class="token operator">=</span> replacer<span class="token punctuation">(</span>board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;Q&#39;</span><span class="token punctuation">,</span> col<span class="token punctuation">)</span>
          <span class="token comment"># 进入下一轮决策</span>
          backtrack<span class="token punctuation">(</span>board<span class="token punctuation">,</span> row<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
          <span class="token comment"># 撤销选择</span>
          board<span class="token punctuation">[</span>row<span class="token punctuation">]</span> <span class="token operator">=</span> replacer<span class="token punctuation">(</span>board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">,</span> col<span class="token punctuation">)</span>

      <span class="token keyword">def</span> <span class="token function">isValid</span><span class="token punctuation">(</span>board<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">,</span> row<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> col<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;
        是否可以在[row][col]放置皇后
        &#39;&#39;&#39;</span>
        n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span> <span class="token comment"># 行数</span>
        <span class="token comment"># 检查上方列是否有皇后冲突</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
          <span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;Q&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>

        <span class="token comment"># 检查右上方是否有皇后冲突</span>
        i <span class="token operator">=</span> row <span class="token operator">-</span> <span class="token number">1</span>
        j <span class="token operator">=</span> col <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token keyword">while</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token keyword">and</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">:</span>
          <span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;Q&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
          i <span class="token operator">-=</span> <span class="token number">1</span>
          j <span class="token operator">+=</span> <span class="token number">1</span>

        <span class="token comment"># 检查左上方是否有皇后冲突</span>
        i <span class="token operator">=</span> row <span class="token operator">-</span> <span class="token number">1</span>
        j <span class="token operator">=</span> col <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token keyword">while</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token keyword">and</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
          <span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;Q&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
          i <span class="token operator">-=</span> <span class="token number">1</span>
          j <span class="token operator">-=</span> <span class="token number">1</span>

        <span class="token keyword">return</span> <span class="token boolean">True</span>

      <span class="token keyword">def</span> <span class="token function">replacer</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> newstring<span class="token punctuation">,</span> index<span class="token punctuation">,</span> nofail<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># raise an error if index is outside of the string</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> nofail <span class="token keyword">and</span> index <span class="token keyword">not</span> <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string">&quot;index outside given string&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># if not erroring, but the index is still not in the correct range..</span>
        <span class="token keyword">if</span> index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>  <span class="token comment"># add it to the beginning</span>
            <span class="token keyword">return</span> newstring <span class="token operator">+</span> s
        <span class="token keyword">if</span> index <span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># add it to the end</span>
            <span class="token keyword">return</span> s <span class="token operator">+</span> newstring

        <span class="token comment"># insert the new string between &quot;slices&quot; of the original</span>
        <span class="token keyword">return</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span>index<span class="token punctuation">]</span> <span class="token operator">+</span> newstring <span class="token operator">+</span> s<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

      <span class="token comment"># 初始化键盘，n行n列  &#39;.&#39;表示空位 &#39;Q&#39;表示皇后</span>
      board <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;.&#39;</span><span class="token operator">*</span>n <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">]</span>

      result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      backtrack<span class="token punctuation">(</span>board<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> result


<span class="token comment"># @lc code=end</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小结： 回溯算法核心是遍历一棵决策树的过程 3个问题：</p><ul><li>路径：选择一条开始的路径，一般是 DFS</li><li>选择列表：每次选择后可做的选择</li><li>结束条件：遍历到决策树底层，回撤路径</li></ul><p>计算机解决问题的思路基本是穷举法（除了计算问题） 不要瞧不起穷举法，穷举法也有技巧，回溯算法，动态规划法就是 选择“聪明”地穷举</p><p>感悟： 学正统的知识，按步骤流程走，不要老想着走捷径，在边界内做事</p>`,16),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};
