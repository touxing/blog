import{_ as a,X as e,Y as d,a0 as i}from"./framework-127c059f.js";const r="/blog/assets/依赖收集示意图-bca8b892.png",s={},n=i('<h2 id="设计思路" tabindex="-1"><a class="header-anchor" href="#设计思路" aria-hidden="true">#</a> 设计思路</h2><h3 id="声明式描述ui" tabindex="-1"><a class="header-anchor" href="#声明式描述ui" aria-hidden="true">#</a> 声明式描述UI</h3><p>::: render函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>:::</p><h2 id="响应式系统" tabindex="-1"><a class="header-anchor" href="#响应式系统" aria-hidden="true">#</a> 响应式系统</h2><h3 id="响应式原理proxy" tabindex="-1"><a class="header-anchor" href="#响应式原理proxy" aria-hidden="true">#</a> 响应式原理Proxy</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="响应式数据简单实现" tabindex="-1"><a class="header-anchor" href="#响应式数据简单实现" aria-hidden="true">#</a> 响应式数据简单实现</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><figure><img src="'+r+'" alt="依赖收集示意图" tabindex="0" loading="lazy"><figcaption>依赖收集示意图</figcaption></figure><h3 id="响应式数据实现v2-带执行调度器-scheduler" tabindex="-1"><a class="header-anchor" href="#响应式数据实现v2-带执行调度器-scheduler" aria-hidden="true">#</a> 响应式数据实现v2，带执行调度器 scheduler</h3><p>引入cleanup，清除遗留的副作用依赖问题，例如存在三元表达式的响应式数据</p><p>引入 scheduler, 可操作trigger函数触发副作用函数的时机、次数和方式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="computed和lazy实现" tabindex="-1"><a class="header-anchor" href="#computed和lazy实现" aria-hidden="true">#</a> computed和lazy实现</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="watch实现" tabindex="-1"><a class="header-anchor" href="#watch实现" aria-hidden="true">#</a> watch实现</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>watch本质时对 effect 的二次封装</p><h4 id="watch的立即执行函数" tabindex="-1"><a class="header-anchor" href="#watch的立即执行函数" aria-hidden="true">#</a> watch的立即执行函数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h4 id="watch回调函数的执行时机" tabindex="-1"><a class="header-anchor" href="#watch回调函数的执行时机" aria-hidden="true">#</a> watch回调函数的执行时机</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h4 id="过期的副作用" tabindex="-1"><a class="header-anchor" href="#过期的副作用" aria-hidden="true">#</a> 过期的副作用</h4><p>在watch中，是异步请求的情况下，发送了请求A，还在等待中，修改wtch的变量，重新触发了请求B，</p><p>如果B请求先于A请求返回，会导致A的返回结果覆盖B的返回结果的情况。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>File not found</code></pre><div class="highlight-lines"></div><div class="line-numbers" aria-hidden="true"></div></div>',28),c=[n];function t(l,h){return e(),d("div",null,c)}const u=a(s,[["render",t],["__file","1.html.vue"]]);export{u as default};
