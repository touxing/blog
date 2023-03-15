const n=JSON.parse(`{"key":"v-3fdd01e4","path":"/zh/posts/javascript/16%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F/","title":"组合模式","lang":"zh-CN","frontmatter":{"date":"2020-11-23T00:00:00.000Z","category":["设计模式"],"tag":["装饰器模式"],"description":"组合模式 4 ⭐ 场景： 系统文件夹结构，文件夹里面可以有文件夹和文件，子文件夹下又可以有文件夹和文件，以此类推，组成了一个文件数 实战，借助组合模式，实现dom树节点的创建 const createElement = function({ tag, attr, children }) { const node = tag ? document.createElement(tag) : document.createTextNode(attr.text); tag &amp;&amp; Object.keys(attr).forEach(key =&gt; node.setAttribute(key, attr[key])); children &amp;&amp; children.forEach(child =&gt; node.appendChild(createElement(child)) ); return node; }; const ulElement = createElement({ tag: 'ul', attr: {id: 'data-list'}, children: [ { tag: 'li', attr: {class: 'item'}, children:[{attr:{text: 'item1'}}] }, { tag: 'li', attr: {class: 'item'}, children:[{attr:{text: 'item2'}}] }, { tag: 'li', attr: {class: 'item'}, children:[{attr:{text: 'item3'}}] }, ] }) console.log(ulElement); document.body.appendChild(ulElement); /* &lt;ul id=\\"data-list\\"&gt;&lt;li class=\\"item\\"&gt;item1&lt;/li&gt;&lt;li class=\\"item\\"&gt;item2&lt;/li&gt;&lt;li class=\\"item\\"&gt;item3&lt;/li&gt;&lt;/ul&gt; */","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/zh/posts/javascript/16%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F/"}],["meta",{"property":"og:site_name","content":"磨刀霍霍向猪羊"}],["meta",{"property":"og:title","content":"组合模式"}],["meta",{"property":"og:description","content":"组合模式 4 ⭐ 场景： 系统文件夹结构，文件夹里面可以有文件夹和文件，子文件夹下又可以有文件夹和文件，以此类推，组成了一个文件数 实战，借助组合模式，实现dom树节点的创建 const createElement = function({ tag, attr, children }) { const node = tag ? document.createElement(tag) : document.createTextNode(attr.text); tag &amp;&amp; Object.keys(attr).forEach(key =&gt; node.setAttribute(key, attr[key])); children &amp;&amp; children.forEach(child =&gt; node.appendChild(createElement(child)) ); return node; }; const ulElement = createElement({ tag: 'ul', attr: {id: 'data-list'}, children: [ { tag: 'li', attr: {class: 'item'}, children:[{attr:{text: 'item1'}}] }, { tag: 'li', attr: {class: 'item'}, children:[{attr:{text: 'item2'}}] }, { tag: 'li', attr: {class: 'item'}, children:[{attr:{text: 'item3'}}] }, ] }) console.log(ulElement); document.body.appendChild(ulElement); /* &lt;ul id=\\"data-list\\"&gt;&lt;li class=\\"item\\"&gt;item1&lt;/li&gt;&lt;li class=\\"item\\"&gt;item2&lt;/li&gt;&lt;li class=\\"item\\"&gt;item3&lt;/li&gt;&lt;/ul&gt; */"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T04:36:56.000Z"}],["meta",{"property":"article:tag","content":"装饰器模式"}],["meta",{"property":"article:published_time","content":"2020-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T04:36:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组合模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T04:36:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"实战，借助组合模式，实现dom树节点的创建","slug":"实战-借助组合模式-实现dom树节点的创建","link":"#实战-借助组合模式-实现dom树节点的创建","children":[]},{"level":3,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]},{"level":3,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]}],"git":{"createdTime":1678855016000,"updatedTime":1678855016000,"contributors":[{"name":"hotsuitor","email":"hotsuitor@qq.com","commits":1}]},"readingTime":{"minutes":1.45,"words":434},"filePathRelative":"zh/posts/javascript/16组合模式/README.md","localizedDate":"2020年11月23日","excerpt":"<h1> 组合模式</h1>\\n<p>4 ⭐</p>\\n<p>场景：\\n系统文件夹结构，文件夹里面可以有文件夹和文件，子文件夹下又可以有文件夹和文件，以此类推，组成了一个文件数</p>\\n<h3> 实战，借助组合模式，实现dom树节点的创建</h3>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">createElement</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token punctuation\\">{</span> tag<span class=\\"token punctuation\\">,</span> attr<span class=\\"token punctuation\\">,</span> children <span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> node <span class=\\"token operator\\">=</span> tag\\n    <span class=\\"token operator\\">?</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createElement</span><span class=\\"token punctuation\\">(</span>tag<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token operator\\">:</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createTextNode</span><span class=\\"token punctuation\\">(</span>attr<span class=\\"token punctuation\\">.</span>text<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  tag <span class=\\"token operator\\">&amp;&amp;</span> Object<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">keys</span><span class=\\"token punctuation\\">(</span>attr<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">key</span> <span class=\\"token operator\\">=&gt;</span> node<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setAttribute</span><span class=\\"token punctuation\\">(</span>key<span class=\\"token punctuation\\">,</span> attr<span class=\\"token punctuation\\">[</span>key<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  children <span class=\\"token operator\\">&amp;&amp;</span>\\n    children<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">child</span> <span class=\\"token operator\\">=&gt;</span>\\n      node<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">appendChild</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">createElement</span><span class=\\"token punctuation\\">(</span>child<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">return</span> node<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> ulElement <span class=\\"token operator\\">=</span> <span class=\\"token function\\">createElement</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">tag</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'ul'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">attr</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">id</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'data-list'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">children</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">tag</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'li'</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">attr</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span><span class=\\"token keyword\\">class</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'item'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">children</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">attr</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'item1'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">tag</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'li'</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">attr</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span><span class=\\"token keyword\\">class</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'item'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">children</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">attr</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'item2'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">tag</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'li'</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">attr</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span><span class=\\"token keyword\\">class</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'item'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">children</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">attr</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">text</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'item3'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>ulElement<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\ndocument<span class=\\"token punctuation\\">.</span>body<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">appendChild</span><span class=\\"token punctuation\\">(</span>ulElement<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">/* &lt;ul id=\\"data-list\\"&gt;&lt;li class=\\"item\\"&gt;item1&lt;/li&gt;&lt;li class=\\"item\\"&gt;item2&lt;/li&gt;&lt;li class=\\"item\\"&gt;item3&lt;/li&gt;&lt;/ul&gt; */</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
