const n=JSON.parse('{"key":"v-50e016d9","path":"/posts/javascript/%E6%89%8B%E5%86%99%E9%A2%98/%E9%80%92%E5%BD%92/0.html","title":"递归","lang":"zh-CN","frontmatter":{"title":"递归","date":"2023-05-12T00:00:00.000Z","category":["javascript"],"tag":["递归"],"description":"递归，就是函数调用自身。 条件： 递归终止条件。防止无限递归下去，导致内存溢出，程序出错。 递归条件。让函数继续递归的条件。 尾递归 尾递归，即在函数尾位置调用自身（或是一个尾调用本身的其他函数等等）。尾递归也是递归的一种特殊情形。 尾递归在普通尾调用的基础上，多了2个特征： 在尾部调用的是函数自身 可通过优化，使得计算仅占常量空间 实现阶乘，普通递归形式： function factorial(n) { if (n === 1) return 1; return n * factorial(n - 1); } factorial(5) // 120","head":[["meta",{"property":"og:url","content":"https://touxing.github.io/blog/blog/posts/javascript/%E6%89%8B%E5%86%99%E9%A2%98/%E9%80%92%E5%BD%92/0.html"}],["meta",{"property":"og:site_name","content":"磨刀霍霍向猪羊"}],["meta",{"property":"og:title","content":"递归"}],["meta",{"property":"og:description","content":"递归，就是函数调用自身。 条件： 递归终止条件。防止无限递归下去，导致内存溢出，程序出错。 递归条件。让函数继续递归的条件。 尾递归 尾递归，即在函数尾位置调用自身（或是一个尾调用本身的其他函数等等）。尾递归也是递归的一种特殊情形。 尾递归在普通尾调用的基础上，多了2个特征： 在尾部调用的是函数自身 可通过优化，使得计算仅占常量空间 实现阶乘，普通递归形式： function factorial(n) { if (n === 1) return 1; return n * factorial(n - 1); } factorial(5) // 120"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-12T02:14:24.000Z"}],["meta",{"property":"article:tag","content":"递归"}],["meta",{"property":"article:published_time","content":"2023-05-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-12T02:14:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"递归\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-12T02:14:24.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"尾递归","slug":"尾递归","link":"#尾递归","children":[]},{"level":2,"title":"应用","slug":"应用","link":"#应用","children":[]}],"git":{"createdTime":1683857664000,"updatedTime":1683857664000,"contributors":[{"name":"hotsuitor","email":"hotsuitor@qq.com","commits":1}]},"readingTime":{"minutes":0.95,"words":284},"filePathRelative":"posts/javascript/手写题/递归/0.md","localizedDate":"2023年5月12日","excerpt":"<p>递归，就是函数调用自身。\\n条件：</p>\\n<ul>\\n<li>递归终止条件。防止无限递归下去，导致内存溢出，程序出错。</li>\\n<li>递归条件。让函数继续递归的条件。</li>\\n</ul>\\n<h2> 尾递归</h2>\\n<p>尾递归，即在函数尾位置调用自身（或是一个尾调用本身的其他函数等等）。尾递归也是递归的一种特殊情形。</p>\\n<p>尾递归在普通尾调用的基础上，多了2个特征：</p>\\n<ul>\\n<li>在尾部调用的是函数自身</li>\\n<li>可通过优化，使得计算仅占常量空间</li>\\n</ul>\\n<p>实现阶乘，普通递归形式：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">factorial</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">n</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>n <span class=\\"token operator\\">===</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">return</span> n <span class=\\"token operator\\">*</span> <span class=\\"token function\\">factorial</span><span class=\\"token punctuation\\">(</span>n <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token function\\">factorial</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 120</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};