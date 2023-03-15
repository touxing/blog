const a=JSON.parse(`{"key":"v-516b56c0","path":"/zh/posts/javascript/12%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F/","title":"享元模式","lang":"zh-CN","frontmatter":{"date":"2020-11-23T00:00:00.000Z","category":["设计模式"],"tag":["享元模式"],"description":"享元模式 驾考现场的考试车 众多考生，不是每人一辆考试车，而是共享n辆考试车，轮流来 var candidateNum = 10 // 考生数量 var examCarNum = 0 // 驾考车数量 /** * @description: 驾考车构造函数 */ function ExamCar(carType) { examCarNum++ this.carId = examCarNum this.carType = carType ? '手动挡' : '自动挡' } ExamCar.prototype.examine = function(candidateId) { console.log('考生-' + candidateId + ' 在' + this.carType + '驾考车-' + this.carId + '上考试') } var manualExamCar = new ExamCar(true) var autoExamCar = new ExamCar(false) for (var candidateId = 1; candidateId &lt;= candidateNum; candidateId++) { var examCar = candidateId % 2 ? manualExamCar : autoExamCar examCar.examine(candidateId) } console.log('驾考车总数-' + examCarNum)","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zh/posts/javascript/12%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F/"}],["meta",{"property":"og:site_name","content":"磨刀霍霍向猪羊"}],["meta",{"property":"og:title","content":"享元模式"}],["meta",{"property":"og:description","content":"享元模式 驾考现场的考试车 众多考生，不是每人一辆考试车，而是共享n辆考试车，轮流来 var candidateNum = 10 // 考生数量 var examCarNum = 0 // 驾考车数量 /** * @description: 驾考车构造函数 */ function ExamCar(carType) { examCarNum++ this.carId = examCarNum this.carType = carType ? '手动挡' : '自动挡' } ExamCar.prototype.examine = function(candidateId) { console.log('考生-' + candidateId + ' 在' + this.carType + '驾考车-' + this.carId + '上考试') } var manualExamCar = new ExamCar(true) var autoExamCar = new ExamCar(false) for (var candidateId = 1; candidateId &lt;= candidateNum; candidateId++) { var examCar = candidateId % 2 ? manualExamCar : autoExamCar examCar.examine(candidateId) } console.log('驾考车总数-' + examCarNum)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T04:36:56.000Z"}],["meta",{"property":"article:tag","content":"享元模式"}],["meta",{"property":"article:published_time","content":"2020-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T04:36:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"享元模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T04:36:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"资源池","slug":"资源池","link":"#资源池","children":[]},{"level":3,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]},{"level":3,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]}],"git":{"createdTime":1678855016000,"updatedTime":1678855016000,"contributors":[{"name":"hotsuitor","email":"hotsuitor@qq.com","commits":1}]},"readingTime":{"minutes":3.22,"words":965},"filePathRelative":"zh/posts/javascript/12享元模式/README.md","localizedDate":"2020年11月23日","excerpt":"<h1> 享元模式</h1>\\n<blockquote>\\n<p>驾考现场的考试车\\n众多考生，不是每人一辆考试车，而是共享n辆考试车，轮流来</p>\\n</blockquote>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> candidateNum <span class=\\"token operator\\">=</span> <span class=\\"token number\\">10</span> <span class=\\"token comment\\">// 考生数量</span>\\n<span class=\\"token keyword\\">var</span> examCarNum <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span> <span class=\\"token comment\\">// 驾考车数量</span>\\n\\n<span class=\\"token doc-comment comment\\">/**\\n * <span class=\\"token keyword\\">@description</span>: 驾考车构造函数\\n */</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">ExamCar</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">carType</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  examCarNum<span class=\\"token operator\\">++</span>\\n  <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>carId <span class=\\"token operator\\">=</span> examCarNum\\n  <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>carType <span class=\\"token operator\\">=</span> carType <span class=\\"token operator\\">?</span> <span class=\\"token string\\">'手动挡'</span> <span class=\\"token operator\\">:</span> <span class=\\"token string\\">'自动挡'</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token class-name\\">ExamCar</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">examine</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">candidateId</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'考生-'</span> <span class=\\"token operator\\">+</span> candidateId <span class=\\"token operator\\">+</span> <span class=\\"token string\\">' 在'</span> <span class=\\"token operator\\">+</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>carType <span class=\\"token operator\\">+</span> <span class=\\"token string\\">'驾考车-'</span> <span class=\\"token operator\\">+</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>carId <span class=\\"token operator\\">+</span> <span class=\\"token string\\">'上考试'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">var</span> manualExamCar <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ExamCar</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">var</span> autoExamCar <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ExamCar</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">var</span> candidateId <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span> candidateId <span class=\\"token operator\\">&lt;=</span> candidateNum<span class=\\"token punctuation\\">;</span> candidateId<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">var</span> examCar <span class=\\"token operator\\">=</span> candidateId <span class=\\"token operator\\">%</span> <span class=\\"token number\\">2</span> <span class=\\"token operator\\">?</span> manualExamCar <span class=\\"token operator\\">:</span> autoExamCar\\n  examCar<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">examine</span><span class=\\"token punctuation\\">(</span>candidateId<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'驾考车总数-'</span> <span class=\\"token operator\\">+</span> examCarNum<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{a as data};
