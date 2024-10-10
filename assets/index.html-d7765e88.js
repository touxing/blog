import{_ as n,X as s,Y as a,a0 as t}from"./framework-127c059f.js";const p={},e=t(`<h1 id="阅读源码" tabindex="-1"><a class="header-anchor" href="#阅读源码" aria-hidden="true">#</a> 阅读源码</h1><ul><li>why</li><li>what</li><li>how</li></ul><p><strong>阅读源码是一种高效的学习方式，通过阅读优秀的源码，能提高自己的编程水平。</strong></p><h2 id="why必要性" tabindex="-1"><a class="header-anchor" href="#why必要性" aria-hidden="true">#</a> why必要性</h2><p>阅读源码等于学习他人的经验。编程需要非常多的动手实践，我们往往简单学习了一门编程语言，就能入门，就能写出 “Hello World!”，而且迫不及待地写下一个demo，“Todo List”。就好像我们学汉字一样，很容易就学会了常用汉语300词，但是我们能写出《唐诗宋词300首》吗？答案是否定的。为了提供文学水平，大量阅读经典文学作品就很有必要。同理，为了提供编程水平，大量阅读优秀的源码也是非常有必要的。</p><p>借鉴前人的经验，不必重复造轮子。把时间和精力花在更重要的事情上。</p><h2 id="what" tabindex="-1"><a class="header-anchor" href="#what" aria-hidden="true">#</a> what</h2><p>是阅读程序的源代码。一般在 github 可以阅读到全世界优秀人士写的代码，看到优秀的示例代码可以直接copy过来使用。 模仿也是一种学习方式。</p><h2 id="如何阅读" tabindex="-1"><a class="header-anchor" href="#如何阅读" aria-hidden="true">#</a> 如何阅读</h2><p>1.下载源码，本地运行 2.按照官方示例，使用示例 3.查看源码目录，大致浏览整体的源码目录文件。阅读由粗到细 3.1 查看 packag.json 4.查看测试代码【可选】 5.本地单步调试，跟着代码运行流程阅读</p><p><strong>原则：先粗后细</strong><strong>一定要画图，能把流程图画出来，才算真正看懂了源码</strong></p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><h3 id="控制并发请求库-p-limt" tabindex="-1"><a class="header-anchor" href="#控制并发请求库-p-limt" aria-hidden="true">#</a> 控制并发请求库 p-limt</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Queue <span class="token keyword">from</span> <span class="token string">&#39;yocto-queue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">pLimit</span><span class="token punctuation">(</span><span class="token parameter">concurrency</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 校验传入的并发数值</span>
	<span class="token function">validateConcurrency</span><span class="token punctuation">(</span>concurrency<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> activeCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// next() -&gt; 出队列，执行下一个任务</span>
	<span class="token keyword">const</span> <span class="token function-variable function">resumeNext</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>activeCount <span class="token operator">&lt;</span> concurrency <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			queue<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// Since \`pendingCount\` has been decreased by one, increase \`activeCount\` by one.</span>
			activeCount<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 执行队列里的下一个任务</span>
	<span class="token keyword">const</span> <span class="token function-variable function">next</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		activeCount<span class="token operator">--</span><span class="token punctuation">;</span>

		<span class="token function">resumeNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 执行队列任务</span>
	<span class="token keyword">const</span> <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">function_<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> arguments_</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">function_</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments_<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token keyword">await</span> result<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

		<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 装饰enqueue方法，入队列的是用 Promise 包装后的任务执行函数</span>
	<span class="token comment">// 参数传入的 resolve 确保在执行异步任务后，获得正确的resolve回调</span>
	<span class="token keyword">const</span> <span class="token function-variable function">enqueue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">function_<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> arguments_</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// Queue \`internalResolve\` instead of the \`run\` function</span>
		<span class="token comment">// to preserve asynchronous context.</span>
		<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">internalResolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			queue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span>internalResolve<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
			<span class="token function">run</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> function_<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> arguments_<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token comment">// This function needs to wait until the next microtask before comparing</span>
			<span class="token comment">// \`activeCount\` to \`concurrency\`, because \`activeCount\` is updated asynchronously</span>
			<span class="token comment">// after the \`internalResolve\` function is dequeued and called. The comparison in the if-statement</span>
			<span class="token comment">// needs to happen asynchronously as well to get an up-to-date value for \`activeCount\`.</span>
			<span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>activeCount <span class="token operator">&lt;</span> concurrency<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">resumeNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 执行Promise的 生成器</span>
	<span class="token keyword">const</span> <span class="token function-variable function">generator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">function_<span class="token punctuation">,</span> <span class="token operator">...</span>arguments_</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token function">enqueue</span><span class="token punctuation">(</span>function_<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> arguments_<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 使用 defineProperties 增强数据封装，</span>
	<span class="token comment">// 实现私有属性</span>
	Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>generator<span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">activeCount</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> activeCount<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">pendingCount</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> queue<span class="token punctuation">.</span>size<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">clearQueue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				queue<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">concurrency</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> concurrency<span class="token punctuation">,</span>

			<span class="token function">set</span><span class="token punctuation">(</span>newConcurrency<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">validateConcurrency</span><span class="token punctuation">(</span>newConcurrency<span class="token punctuation">)</span><span class="token punctuation">;</span>
				concurrency <span class="token operator">=</span> newConcurrency<span class="token punctuation">;</span>

				<span class="token function">queueMicrotask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					<span class="token comment">// eslint-disable-next-line no-unmodified-loop-condition</span>
					<span class="token keyword">while</span> <span class="token punctuation">(</span>activeCount <span class="token operator">&lt;</span> concurrency <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token function">resumeNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> generator<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">validateConcurrency</span><span class="token punctuation">(</span><span class="token parameter">concurrency</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span>concurrency<span class="token punctuation">)</span> <span class="token operator">||</span> concurrency <span class="token operator">===</span> Number<span class="token punctuation">.</span><span class="token constant">POSITIVE_INFINITY</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> concurrency <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Expected \`concurrency\` to be a number from 1 and up&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pixijs" tabindex="-1"><a class="header-anchor" href="#pixijs" aria-hidden="true">#</a> pixijs</h3><p>todo:</p>`,16),o=[e];function c(i,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
