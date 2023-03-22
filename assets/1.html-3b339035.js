import{_ as c,X as a,Y as n,Z as e,$ as o,a1 as s,a0 as r,C as l}from"./framework-127c059f.js";const i={},d=r('<h1 id="event-loop-事件循环" tabindex="-1"><a class="header-anchor" href="#event-loop-事件循环" aria-hidden="true">#</a> Event Loop(事件循环)</h1><blockquote><p>它是一个在 <code>js 引擎</code>在<code>等待任务</code>、<code>执行任务</code>和<code>进入休眠状态等待更多任务</code>这几个状态之间转换的无限循环</p></blockquote><p>js是单线程执行</p><p>执行过程：</p><ol><li>预编译阶段；</li><li>执行阶段（自上而下，顺序执行）</li></ol><p>预编译阶段： 进行变量和函数的声明相关操作</p><p>执行阶段：</p><ol><li>自上而下，顺序执行</li><li>遇到宏任务，加入宏任务队列，</li><li>继续往下执行，遇到微任务，加入微任务队列，</li><li>当前 <code>js stack</code> 顺序执行完，等待微观任务执行，</li><li>执行 <code>microtasks</code> 队列的头任务，按顺序出队列继续执行，</li><li>如果执行完当前微任务，遇到新的 <code>microtasks</code>，继续加入 <code>microtasks queue</code>，等待微任务队列执行完毕。</li><li>开始执行宏任务队列，如果遇到 <code>microtasks</code>，跳到步骤1，重复循环。</li><li>所有宏任务队列执行完毕，进入 <code>js引擎</code> 等待任务状态。</li></ol><p>任务队列<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>',10),p={href:"https://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.javascripttutorial.net/javascript-event-loop/",target:"_blank",rel:"noopener noreferrer"},f=e("hr",{class:"footnotes-sep"},null,-1),_={class:"footnotes"},u={class:"footnotes-list"},k={id:"footnote1",class:"footnote-item"},m={href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/",target:"_blank",rel:"noopener noreferrer"},v=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function b(j,x){const t=l("ExternalLinkIcon");return a(),n("div",null,[d,e("p",null,[e("a",p,[o("阮一峰博客"),s(t)]),e("a",h,[o("javascript-event-loop"),s(t)])]),f,e("section",_,[e("ol",u,[e("li",k,[e("p",null,[e("a",m,[o("任务队列参考资料"),s(t)]),o(),v])])])])])}const g=c(i,[["render",b],["__file","1.html.vue"]]);export{g as default};
