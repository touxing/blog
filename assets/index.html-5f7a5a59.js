const n=JSON.parse('{"key":"v-7e02b474","path":"/posts/algo/11%E6%8E%92%E5%BA%8F/","title":"11常见排序实现","lang":"zh-CN","frontmatter":{"title":"11常见排序实现","date":"2020-03-10T00:00:00.000Z","icon":"sort","category":["算法"],"tag":["算法","algo","排序"],"description":"排序 冒泡排序 /** * 冒泡排序 */ function bubbleSort(arr, flag) { if (arr.length &lt; 2) return arr; let length = arr.length; for (let i = 0; i &lt; length; i++) { // 提前退出循环的标志位 let flag = false; // console.log(\\"i\\", i); for (let j = i + 1; j &lt; length; j++) { // console.log(\\"i-j\\", i, j); if (arr[i] &gt; arr[j]) { let tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp; flag = true; //表示有数据交换 } } if (!flag) break; // 没有数据交换，提前退出 } return arr; } // let arr1 = [2, 5, 3, 6, 1]; // console.log(`排序前：${arr1}\\\\n排序后：${bubbleSort(arr1)}`); let arr1 = Array.from( { length: 100000 }, item =&gt; (item = Math.floor(Math.random() * Math.floor(100) + 1)) ); console.time(\\"time\\"); bubbleSort(arr1); console.timeEnd(\\"time\\");","head":[["meta",{"property":"og:url","content":"https://touxing.github.io/blog/blog/posts/algo/11%E6%8E%92%E5%BA%8F/"}],["meta",{"property":"og:site_name","content":"磨刀霍霍向猪羊"}],["meta",{"property":"og:title","content":"11常见排序实现"}],["meta",{"property":"og:description","content":"排序 冒泡排序 /** * 冒泡排序 */ function bubbleSort(arr, flag) { if (arr.length &lt; 2) return arr; let length = arr.length; for (let i = 0; i &lt; length; i++) { // 提前退出循环的标志位 let flag = false; // console.log(\\"i\\", i); for (let j = i + 1; j &lt; length; j++) { // console.log(\\"i-j\\", i, j); if (arr[i] &gt; arr[j]) { let tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp; flag = true; //表示有数据交换 } } if (!flag) break; // 没有数据交换，提前退出 } return arr; } // let arr1 = [2, 5, 3, 6, 1]; // console.log(`排序前：${arr1}\\\\n排序后：${bubbleSort(arr1)}`); let arr1 = Array.from( { length: 100000 }, item =&gt; (item = Math.floor(Math.random() * Math.floor(100) + 1)) ); console.time(\\"time\\"); bubbleSort(arr1); console.timeEnd(\\"time\\");"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T12:09:28.000Z"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:tag","content":"algo"}],["meta",{"property":"article:tag","content":"排序"}],["meta",{"property":"article:published_time","content":"2020-03-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T12:09:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"11常见排序实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-03-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T12:09:28.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"冒泡排序","slug":"冒泡排序","link":"#冒泡排序","children":[]},{"level":2,"title":"插入排序","slug":"插入排序","link":"#插入排序","children":[]},{"level":2,"title":"选择排序","slug":"选择排序","link":"#选择排序","children":[]},{"level":2,"title":"快速排序","slug":"快速排序","link":"#快速排序","children":[]}],"git":{"createdTime":1678882168000,"updatedTime":1678882168000,"contributors":[{"name":"hotsuitor","email":"hotsuitor@qq.com","commits":1}]},"readingTime":{"minutes":0.32,"words":95},"filePathRelative":"posts/algo/11排序/README.md","localizedDate":"2020年3月10日","excerpt":"<h1> 排序</h1>\\n<h2> 冒泡排序</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token doc-comment comment\\">/**\\n * 冒泡排序\\n */</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">bubbleSort</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">arr<span class=\\"token punctuation\\">,</span> flag</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> arr<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">let</span> length <span class=\\"token operator\\">=</span> arr<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> length<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 提前退出循环的标志位</span>\\n    <span class=\\"token keyword\\">let</span> flag <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// console.log(\\"i\\", i);</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> j <span class=\\"token operator\\">=</span> i <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span> j <span class=\\"token operator\\">&lt;</span> length<span class=\\"token punctuation\\">;</span> j<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">// console.log(\\"i-j\\", i, j);</span>\\n      <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&gt;</span> arr<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">let</span> tmp <span class=\\"token operator\\">=</span> arr<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        arr<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> arr<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        arr<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> tmp<span class=\\"token punctuation\\">;</span>\\n        flag <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//表示有数据交换</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>flag<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 没有数据交换，提前退出</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">return</span> arr<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// let arr1 = [2, 5, 3, 6, 1];</span>\\n<span class=\\"token comment\\">// console.log(`排序前：${arr1}\\\\n排序后：${bubbleSort(arr1)}`);</span>\\n\\n<span class=\\"token keyword\\">let</span> arr1 <span class=\\"token operator\\">=</span> Array<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">from</span><span class=\\"token punctuation\\">(</span>\\n  <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">length</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">100000</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token parameter\\">item</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">(</span>item <span class=\\"token operator\\">=</span> Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">floor</span><span class=\\"token punctuation\\">(</span>Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">random</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span> Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">floor</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">100</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">time</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"time\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token function\\">bubbleSort</span><span class=\\"token punctuation\\">(</span>arr1<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">timeEnd</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"time\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
