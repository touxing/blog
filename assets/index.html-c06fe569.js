import{_ as o,X as p,Y as u,Z as n,$ as s,a1 as a,a2 as i,a0 as l,C as c}from"./framework-127c059f.js";const d={},r=l('<h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h1><h2 id="一次性部署" tabindex="-1"><a class="header-anchor" href="#一次性部署" aria-hidden="true">#</a> 一次性部署</h2><blockquote><p>不适合项目开发 手工打包，把dist直接copy到远程服务器</p></blockquote><h2 id="自动化部署" tabindex="-1"><a class="header-anchor" href="#自动化部署" aria-hidden="true">#</a> 自动化部署</h2><h3 id="jenkins" tabindex="-1"><a class="header-anchor" href="#jenkins" aria-hidden="true">#</a> Jenkins</h3>',5),k={href:"https://jenkins.io/zh",target:"_blank",rel:"noopener noreferrer"},v=n("h3",{id:"travis",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#travis","aria-hidden":"true"},"#"),s(" Travis")],-1),m=n("blockquote",null,[n("p",null,"一款CI工具")],-1),h=n("h3",{id:"buddy",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#buddy","aria-hidden":"true"},"#"),s(" Buddy")],-1),b=n("blockquote",null,[n("p",null,"一款CI工具")],-1),_={id:"docker",tabindex:"-1"},y=n("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#",-1),g=n("h2",{id:"k8s",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#k8s","aria-hidden":"true"},"#"),s(" k8s")],-1),f=n("h2",{id:"工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#工具","aria-hidden":"true"},"#"),s(" 工具")],-1),x={href:"https://ttyplus.com/downloads/",target:"_blank",rel:"noopener noreferrer"},C=l(`<hr><p><s>本博客部署采用 <code>Travis</code> 构建 配置文件 <code>.travis.yml</code></s> Travis 更新免费使用策略，需要信用卡，没卡用不了 换 <code>Github Action</code> 配置文件 <code>.github/workflow/deploy.yml</code></p><p>本博客action配置参考</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Node.js CI

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span> <span class="token comment"># on 监听 push 动作 branches 分支</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token string">&#39;--max_old_space_size=4096&#39;</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span>  <span class="token comment"># 执行命令 | 可以换行执行命令</span>
          yarn
          yarn build

      <span class="token comment"># 部署到 GitHub Pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@4.1.3 <span class="token comment"># 使用别人写的action</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># github 设置的 ACCESS_TOKEN</span>
          <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages <span class="token comment"># 部署分支</span>
          <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> docs/.vuepress/dist <span class="token comment"># 打包目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),E={href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://docs.github.com/en/actions",target:"_blank",rel:"noopener noreferrer"},N=l(`<h3 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab" aria-hidden="true">#</a> GitLab</h3><p>尝试 GitLab 的 <code>CI/CD</code> 功能</p><p>准备：</p><ol><li>创建 <code>.gitlab-ci.yml</code> 文件</li><li>install runner and config runner</li></ol><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> example</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> build
   <span class="token punctuation">-</span> deploy

<span class="token comment"># build stage</span>
<span class="token key atrule">build_app</span><span class="token punctuation">:</span>
   <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>alpine
   <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
   <span class="token key atrule">only</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> master
   <span class="token key atrule">script</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> npm install
      <span class="token punctuation">-</span> npm run build
   <span class="token key atrule">cache</span><span class="token punctuation">:</span>
     <span class="token key atrule">paths</span><span class="token punctuation">:</span>
       <span class="token punctuation">-</span> node_modules/
   <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
         <span class="token comment"># build folder</span>
         <span class="token punctuation">-</span> dist/
      <span class="token key atrule">expire_in</span><span class="token punctuation">:</span> 1 hour

<span class="token comment"># production stage</span>
<span class="token key atrule">production</span><span class="token punctuation">:</span>
   <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
   <span class="token key atrule">before_script</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mkdir <span class="token punctuation">-</span>p ~/.ssh
      <span class="token punctuation">-</span> echo <span class="token punctuation">-</span>e &quot;$SSH_PRIVATE_KEY&quot; <span class="token punctuation">&gt;</span> ~/.ssh/id_rsa
      <span class="token punctuation">-</span> chmod 600 ~/.ssh/id_rsa
      <span class="token punctuation">-</span> <span class="token string">&#39;[[ -f /.dockerenv ]] &amp;&amp; echo -e &quot;Host *\\n\\tStrictHostKeyChecking no\\n\\n&quot; &gt; ~/.ssh/config&#39;</span>
   <span class="token key atrule">script</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> scp <span class="token punctuation">-</span>r dist/* username@server<span class="token punctuation">-</span>ip<span class="token punctuation">-</span>address<span class="token punctuation">:</span>/var/www/html/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),S={href:"https://shouts.dev/articles/build-and-auto-deploy-vuejs-app-to-server-using-gitlab-ci-cd",target:"_blank",rel:"noopener noreferrer"};function q(j,I){const e=c("ExternalLinkIcon"),t=c("RouterLink");return p(),u("div",null,[r,n("blockquote",null,[n("p",null,[n("a",k,[s("中文官网"),a(e)])])]),n("p",null,[a(t,{to:"/posts/deploy/jenkins/"},{default:i(()=>[s("jenkins")]),_:1})]),v,m,h,b,n("h2",_,[y,s(),a(t,{to:"/posts/deploy/docker/"},{default:i(()=>[s("Docker")]),_:1})]),g,n("p",null,[a(t,{to:"/posts/deploy/k8s/"},{default:i(()=>[s("kubernetes")]),_:1})]),f,n("p",null,[s("终端连接工具 putty + "),n("a",x,[s("mtputty"),a(e)]),s("(开启多标签功能)")]),C,n("p",null,[s("参考： "),n("a",E,[s("阮一峰老师的博客 《GitHub Actions 入门教程》"),a(e)]),n("a",w,[s("Github Action 官方教程"),a(e)])]),N,n("blockquote",null,[n("p",null,[s("参考："),n("a",S,[s("https://shouts.dev/articles/build-and-auto-deploy-vuejs-app-to-server-using-gitlab-ci-cd"),a(e)])])])])}const A=o(d,[["render",q],["__file","index.html.vue"]]);export{A as default};
