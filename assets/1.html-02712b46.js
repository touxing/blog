const n=JSON.parse('{"key":"v-5b2445d7","path":"/posts/javascript/%E6%89%8B%E5%86%99%E9%A2%98/%E9%98%B2%E6%8A%96%E8%8A%82%E6%B5%81/1.html","title":"防抖节流函数","lang":"zh-CN","frontmatter":{"title":"防抖节流函数","date":"2023-03-15T00:00:00.000Z","category":["javascript"],"tag":["防抖","节流","面试"],"description":"防抖节流函数 防抖节流函数主要用于减少函数不必要的重复调用，可以达到优化性能的效果。 防抖函数 /* * File Created: Wednesday, 15th March 2023 5:29:32 pm * Author: hotsuitor (hotsuitor@qq.com) * ----- * Last Modified: Wednesday, 15th March 2023 5:34:06 pm * Modified By: hotsuitor (hotsuitor@qq.com&gt;) */ /** * 防抖 * @param {*} fn 被包装的函数 * @param {*} delay 延迟时间 ms * @returns */ function debounce(fn, delay) { let timer = null return function (...args) { if (timer) { clearTimeout(timer) } timer = setTimeout(() =&gt; { fn.apply(this, args) }, delay) } }","head":[["meta",{"property":"og:url","content":"https://touxing.github.io/blog/blog/posts/javascript/%E6%89%8B%E5%86%99%E9%A2%98/%E9%98%B2%E6%8A%96%E8%8A%82%E6%B5%81/1.html"}],["meta",{"property":"og:site_name","content":"磨刀霍霍向猪羊"}],["meta",{"property":"og:title","content":"防抖节流函数"}],["meta",{"property":"og:description","content":"防抖节流函数 防抖节流函数主要用于减少函数不必要的重复调用，可以达到优化性能的效果。 防抖函数 /* * File Created: Wednesday, 15th March 2023 5:29:32 pm * Author: hotsuitor (hotsuitor@qq.com) * ----- * Last Modified: Wednesday, 15th March 2023 5:34:06 pm * Modified By: hotsuitor (hotsuitor@qq.com&gt;) */ /** * 防抖 * @param {*} fn 被包装的函数 * @param {*} delay 延迟时间 ms * @returns */ function debounce(fn, delay) { let timer = null return function (...args) { if (timer) { clearTimeout(timer) } timer = setTimeout(() =&gt; { fn.apply(this, args) }, delay) } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T12:09:28.000Z"}],["meta",{"property":"article:tag","content":"防抖"}],["meta",{"property":"article:tag","content":"节流"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:published_time","content":"2023-03-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T12:09:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"防抖节流函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T12:09:28.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"防抖函数","slug":"防抖函数","link":"#防抖函数","children":[]},{"level":2,"title":"节流函数","slug":"节流函数","link":"#节流函数","children":[]}],"git":{"createdTime":1678882168000,"updatedTime":1678882168000,"contributors":[{"name":"hotsuitor","email":"hotsuitor@qq.com","commits":1}]},"readingTime":{"minutes":0.24,"words":73},"filePathRelative":"posts/javascript/手写题/防抖节流/1.md","localizedDate":"2023年3月15日","excerpt":"<h1> 防抖节流函数</h1>\\n<p>防抖节流函数主要用于减少函数不必要的重复调用，可以达到优化性能的效果。</p>\\n<h2> 防抖函数</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">/*\\n * File Created: Wednesday, 15th March 2023 5:29:32 pm\\n * Author: hotsuitor (hotsuitor@qq.com)\\n * -----\\n * Last Modified: Wednesday, 15th March 2023 5:34:06 pm\\n * Modified By: hotsuitor (hotsuitor@qq.com&gt;)\\n */</span>\\n\\n<span class=\\"token doc-comment comment\\">/**\\n * 防抖\\n * <span class=\\"token keyword\\">@param</span> <span class=\\"token class-name\\"><span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">*</span><span class=\\"token punctuation\\">}</span></span> <span class=\\"token parameter\\">fn</span> 被包装的函数\\n * <span class=\\"token keyword\\">@param</span> <span class=\\"token class-name\\"><span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">*</span><span class=\\"token punctuation\\">}</span></span> <span class=\\"token parameter\\">delay</span> 延迟时间 ms\\n * <span class=\\"token keyword\\">@returns</span>\\n */</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">debounce</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">fn<span class=\\"token punctuation\\">,</span> delay</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> timer <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span>\\n\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token operator\\">...</span>args</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>timer<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">clearTimeout</span><span class=\\"token punctuation\\">(</span>timer<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    timer <span class=\\"token operator\\">=</span> <span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">apply</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">,</span> args<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> delay<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
