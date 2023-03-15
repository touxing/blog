const n=JSON.parse('{"key":"v-26b12258","path":"/zh/posts/javascript/10%E5%BB%BA%E9%80%A0%E8%80%85%E6%A8%A1%E5%BC%8F/","title":"建造者模式","lang":"zh-CN","frontmatter":{"date":"2020-11-23T00:00:00.000Z","category":["设计模式"],"tag":["建造者模式"],"description":"建造者模式 建造者模式（Builder Pattern）又称生成器模式，分步构建一个复杂对象，并允许按步骤构造。同样的构建过程可以采用不同的表示，将一个复杂对象的构建层与其表示层分离。 例如汽车装配，汽车由车身、引擎、轮胎组合而成。汽车制造厂一般不自己生产全部的部件，而是从零件商采购零件组装，最后完成装配。 代码实现 // 建造者，汽车部件厂商，提供具体零件的生产 function CarBuilder({ color = \\"white\\", weight = \\"0\\" }) { this.color = color; this.weight = weight; } // 生产部件，轮胎 CarBuilder.prototype.buildTyre = function(type) { switch (type) { case \\"small\\": this.tyreType = \\"小号轮胎\\"; this.tyreIntro = \\"正在使用小号轮胎\\"; break; case \\"normal\\": this.tyreType = \\"中号轮胎\\"; this.tyreIntro = \\"正在使用中号轮胎\\"; break; case \\"big\\": this.tyreType = \\"大号轮胎\\"; this.tyreIntro = \\"正在使用大号轮胎\\"; break; } }; // 生产部件，发动机 CarBuilder.prototype.buildEngine = function(type) { switch (type) { case \\"small\\": this.engineType = \\"小马力发动机\\"; this.engineIntro = \\"正在使用小马力发动机\\"; break; case \\"normal\\": this.engineType = \\"中马力发动机\\"; this.engineIntro = \\"正在使用中马力发动机\\"; break; case \\"big\\": this.engineType = \\"大马力发动机\\"; this.engineIntro = \\"正在使用大马力发动机\\"; break; } }; /* 奔驰厂家，负责最终汽车产品的装配 */ function benChiDirector(tyre, engine, param) { var _car = new CarBuilder(param); _car.buildTyre(tyre); _car.buildEngine(engine); return _car; } // 获得产品实例 var benchi1 = benChiDirector(\\"small\\", \\"big\\", { color: \\"red\\", weight: \\"1600kg\\" }); console.log(benchi1);","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog2/zh/posts/javascript/10%E5%BB%BA%E9%80%A0%E8%80%85%E6%A8%A1%E5%BC%8F/"}],["meta",{"property":"og:site_name","content":"磨刀霍霍向猪羊"}],["meta",{"property":"og:title","content":"建造者模式"}],["meta",{"property":"og:description","content":"建造者模式 建造者模式（Builder Pattern）又称生成器模式，分步构建一个复杂对象，并允许按步骤构造。同样的构建过程可以采用不同的表示，将一个复杂对象的构建层与其表示层分离。 例如汽车装配，汽车由车身、引擎、轮胎组合而成。汽车制造厂一般不自己生产全部的部件，而是从零件商采购零件组装，最后完成装配。 代码实现 // 建造者，汽车部件厂商，提供具体零件的生产 function CarBuilder({ color = \\"white\\", weight = \\"0\\" }) { this.color = color; this.weight = weight; } // 生产部件，轮胎 CarBuilder.prototype.buildTyre = function(type) { switch (type) { case \\"small\\": this.tyreType = \\"小号轮胎\\"; this.tyreIntro = \\"正在使用小号轮胎\\"; break; case \\"normal\\": this.tyreType = \\"中号轮胎\\"; this.tyreIntro = \\"正在使用中号轮胎\\"; break; case \\"big\\": this.tyreType = \\"大号轮胎\\"; this.tyreIntro = \\"正在使用大号轮胎\\"; break; } }; // 生产部件，发动机 CarBuilder.prototype.buildEngine = function(type) { switch (type) { case \\"small\\": this.engineType = \\"小马力发动机\\"; this.engineIntro = \\"正在使用小马力发动机\\"; break; case \\"normal\\": this.engineType = \\"中马力发动机\\"; this.engineIntro = \\"正在使用中马力发动机\\"; break; case \\"big\\": this.engineType = \\"大马力发动机\\"; this.engineIntro = \\"正在使用大马力发动机\\"; break; } }; /* 奔驰厂家，负责最终汽车产品的装配 */ function benChiDirector(tyre, engine, param) { var _car = new CarBuilder(param); _car.buildTyre(tyre); _car.buildEngine(engine); return _car; } // 获得产品实例 var benchi1 = benChiDirector(\\"small\\", \\"big\\", { color: \\"red\\", weight: \\"1600kg\\" }); console.log(benchi1);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T04:36:56.000Z"}],["meta",{"property":"article:tag","content":"建造者模式"}],["meta",{"property":"article:published_time","content":"2020-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T04:36:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"建造者模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T04:36:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"建造者通用实现","slug":"建造者通用实现","link":"#建造者通用实现","children":[]},{"level":2,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]},{"level":2,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]}],"git":{"createdTime":1678855016000,"updatedTime":1678855016000,"contributors":[{"name":"hotsuitor","email":"hotsuitor@qq.com","commits":1}]},"readingTime":{"minutes":5.17,"words":1552},"filePathRelative":"zh/posts/javascript/10建造者模式/README.md","localizedDate":"2020年11月23日","excerpt":"<h1> 建造者模式</h1>\\n<p>建造者模式（Builder Pattern）又称生成器模式，分步构建一个复杂对象，并允许按步骤构造。同样的构建过程可以采用不同的表示，将一个复杂<strong>对象的构建层与其表示层分离</strong>。</p>\\n<p>例如汽车装配，汽车由车身、引擎、轮胎组合而成。汽车制造厂一般不自己生产全部的部件，而是从零件商采购零件组装，最后完成装配。</p>\\n<p>代码实现</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 建造者，汽车部件厂商，提供具体零件的生产</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">CarBuilder</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> color <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"white\\"</span><span class=\\"token punctuation\\">,</span> weight <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"0\\"</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>color <span class=\\"token operator\\">=</span> color<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>weight <span class=\\"token operator\\">=</span> weight<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 生产部件，轮胎</span>\\n<span class=\\"token class-name\\">CarBuilder</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">buildTyre</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">type</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">switch</span> <span class=\\"token punctuation\\">(</span>type<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">case</span> <span class=\\"token string\\">\\"small\\"</span><span class=\\"token operator\\">:</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>tyreType <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"小号轮胎\\"</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>tyreIntro <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"正在使用小号轮胎\\"</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">case</span> <span class=\\"token string\\">\\"normal\\"</span><span class=\\"token operator\\">:</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>tyreType <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"中号轮胎\\"</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>tyreIntro <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"正在使用中号轮胎\\"</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">case</span> <span class=\\"token string\\">\\"big\\"</span><span class=\\"token operator\\">:</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>tyreType <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"大号轮胎\\"</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>tyreIntro <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"正在使用大号轮胎\\"</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 生产部件，发动机</span>\\n<span class=\\"token class-name\\">CarBuilder</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">buildEngine</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">type</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">switch</span> <span class=\\"token punctuation\\">(</span>type<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">case</span> <span class=\\"token string\\">\\"small\\"</span><span class=\\"token operator\\">:</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>engineType <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"小马力发动机\\"</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>engineIntro <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"正在使用小马力发动机\\"</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">case</span> <span class=\\"token string\\">\\"normal\\"</span><span class=\\"token operator\\">:</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>engineType <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"中马力发动机\\"</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>engineIntro <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"正在使用中马力发动机\\"</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">case</span> <span class=\\"token string\\">\\"big\\"</span><span class=\\"token operator\\">:</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>engineType <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"大马力发动机\\"</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>engineIntro <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"正在使用大马力发动机\\"</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">/* 奔驰厂家，负责最终汽车产品的装配 */</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">benChiDirector</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">tyre<span class=\\"token punctuation\\">,</span> engine<span class=\\"token punctuation\\">,</span> param</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">var</span> _car <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">CarBuilder</span><span class=\\"token punctuation\\">(</span>param<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  _car<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">buildTyre</span><span class=\\"token punctuation\\">(</span>tyre<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  _car<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">buildEngine</span><span class=\\"token punctuation\\">(</span>engine<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">return</span> _car<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 获得产品实例</span>\\n<span class=\\"token keyword\\">var</span> benchi1 <span class=\\"token operator\\">=</span> <span class=\\"token function\\">benChiDirector</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"small\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"big\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">color</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"red\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">weight</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"1600kg\\"</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>benchi1<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};