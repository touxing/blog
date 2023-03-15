const n=JSON.parse('{"key":"v-03f0bc14","path":"/posts/algo/%E9%80%92%E5%BD%92/","title":"递归","lang":"zh-CN","frontmatter":{"title":"递归","date":"2020-04-21T00:00:00.000Z","icon":"cycle","category":["算法"],"tag":["算法","algo","递归"],"description":"递归 1.大问题可以分解为一个个模式相同的小问题， 即有递归公式 2.有递归结束条件，不能陷入死循环 3.深度在当前系统能承受的范围内，递归深度过深会爆栈 优化重复计算问题，用把计算过的值缓存起来 很典型的例子，斐波那契数列 function fibonacci(n) { // 递归结束条件 if (n == 1 || n == 2) return 1; if (!this.cacheMap) { this.cacheMap = new Map(); } // 读取缓存数据 if (this.cacheMap.has(n)) return this.cacheMap.get(n); // 递归公式 let result = fibonacci(n - 1) + fibonacci(n - 2); this.cacheMap.set(n, result); // 把计算过的数据缓存起来 return result; }","head":[["meta",{"property":"og:url","content":"https://touxing.github.io/blog/blog/posts/algo/%E9%80%92%E5%BD%92/"}],["meta",{"property":"og:site_name","content":"磨刀霍霍向猪羊"}],["meta",{"property":"og:title","content":"递归"}],["meta",{"property":"og:description","content":"递归 1.大问题可以分解为一个个模式相同的小问题， 即有递归公式 2.有递归结束条件，不能陷入死循环 3.深度在当前系统能承受的范围内，递归深度过深会爆栈 优化重复计算问题，用把计算过的值缓存起来 很典型的例子，斐波那契数列 function fibonacci(n) { // 递归结束条件 if (n == 1 || n == 2) return 1; if (!this.cacheMap) { this.cacheMap = new Map(); } // 读取缓存数据 if (this.cacheMap.has(n)) return this.cacheMap.get(n); // 递归公式 let result = fibonacci(n - 1) + fibonacci(n - 2); this.cacheMap.set(n, result); // 把计算过的数据缓存起来 return result; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T12:09:28.000Z"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:tag","content":"algo"}],["meta",{"property":"article:tag","content":"递归"}],["meta",{"property":"article:published_time","content":"2020-04-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T12:09:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"递归\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-04-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T12:09:28.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"递归","slug":"递归","link":"#递归","children":[]},{"level":2,"title":"排序算法","slug":"排序算法","link":"#排序算法","children":[]}],"git":{"createdTime":1678882168000,"updatedTime":1678882168000,"contributors":[{"name":"hotsuitor","email":"hotsuitor@qq.com","commits":1}]},"readingTime":{"minutes":2.1,"words":630},"filePathRelative":"posts/algo/递归/README.md","localizedDate":"2020年4月21日","excerpt":"<h2> 递归</h2>\\n<p>1.大问题可以分解为一个个模式相同的小问题，\\n即有递归公式 2.有递归结束条件，不能陷入死循环 3.深度在当前系统能承受的范围内，递归深度过深会爆栈</p>\\n<blockquote>\\n<p>优化重复计算问题，用把计算过的值缓存起来</p>\\n</blockquote>\\n<p>很典型的例子，斐波那契数列</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">fibonacci</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">n</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 递归结束条件</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>n <span class=\\"token operator\\">==</span> <span class=\\"token number\\">1</span> <span class=\\"token operator\\">||</span> n <span class=\\"token operator\\">==</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>cacheMap<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>cacheMap <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Map</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token comment\\">// 读取缓存数据</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>cacheMap<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">has</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>cacheMap<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token comment\\">// 递归公式</span>\\n  <span class=\\"token keyword\\">let</span> result <span class=\\"token operator\\">=</span> <span class=\\"token function\\">fibonacci</span><span class=\\"token punctuation\\">(</span>n <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> <span class=\\"token function\\">fibonacci</span><span class=\\"token punctuation\\">(</span>n <span class=\\"token operator\\">-</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>cacheMap<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">set</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token punctuation\\">,</span> result<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 把计算过的数据缓存起来</span>\\n  <span class=\\"token keyword\\">return</span> result<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
