import{_ as i,X as c,Y as t,Z as n,$ as s,a1 as p,a0 as a,C as l}from"./framework-127c059f.js";const o="/blog/assets/nginx-4c42c119.jpg",d={},r=a('<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><figure><img src="'+o+`" alt="nginx" tabindex="0" loading="lazy"><figcaption>nginx</figcaption></figure><blockquote><p>随着前端变革，Nginx也成为了前端开发工程师必不可少应该具备的一项技能了，那nginx到底起的是吗作用？其实Nginx一直跟我们息息相关，它既可以作为 Web 服务器，也可以作为负载均衡服务器，具备高性能、高并发连接等</p></blockquote><h3 id="_1-负载均衡" tabindex="-1"><a class="header-anchor" href="#_1-负载均衡" aria-hidden="true">#</a> 1.负载均衡</h3><blockquote><p>当一个应用单位时间内访问量激增，服务器的带宽及性能受到影响，影响大到自身承受能力时，服务器就会宕机奔溃，为了防止这种现象发生，以及实现更好的用户体验，我们可以通过配置Nginx负载均衡的方式来分担服务器压力</p></blockquote><p>当有一台服务器宕机时，负载均衡器就分配其他的服务器给用户，极大的增加的网站的稳定性 当用户访问web时候，首先访问到的是负载均衡器，再通过负载均衡器将请求转发给后台服务器</p><h4 id="_1-1-负载均衡的几种常用方式" tabindex="-1"><a class="header-anchor" href="#_1-1-负载均衡的几种常用方式" aria-hidden="true">#</a> 1.1 负载均衡的几种常用方式</h4><ul><li>轮询（默认）</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># nginx.config</span>
<span class="token directive"><span class="token keyword">upstream</span> backserver</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span> 192.168.0.1</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server</span> 192.168.0.2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>权重weight</li></ul><blockquote><p>指定不同ip的权重，权重与访问比成正相关，权重越高，访问越大，适用于不同性能的机器</p></blockquote><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># nginx.config</span>
<span class="token directive"><span class="token keyword">upstream</span> backserver</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span> 192.168.0.1 weight=2</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server</span> 192.168.0.2 weight=8</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>响应时间来分配</li></ul><blockquote><p>公平竞争，谁相应快，谁处理，不过这种方式需要依赖到第三方插件nginx-upstream-fair，需要先安装</p></blockquote><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># nginx.config</span>
<span class="token directive"><span class="token keyword">upstream</span> backserver</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span> 192.168.0.1</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server</span> 192.168.0.2</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">fair</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span>  http://backserver</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-健康检查" tabindex="-1"><a class="header-anchor" href="#_1-2-健康检查" aria-hidden="true">#</a> 1.2 健康检查</h4><blockquote><p>Nginx 自带 ngx_http_upstream_module（健康检测模块）本质上服务器心跳的检查，通过定期轮询向集群里的服务器发送健康检查请求,来检查集群中是否有服务器处于异常状态</p></blockquote><p>如果检测出其中某台服务器异常,那么在通过客户端请求nginx反向代理进来的都不会被发送到该服务器上（直至下次轮训健康检查正常）</p><p>基本例子如下👇</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> backserver</span><span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span> 192.168.0.1  max_fails=1 fail_timeout=40s</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server</span> 192.168.0.2  max_fails=1 fail_timeout=40s</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://backend</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>涉及两个配置：</p><ul><li>fail_timeout : 设定服务器被认为不可用的时间段以及统计失败尝试次数的时间段，默认为10s</li><li>max_fails : 设定Nginx与服务器通信的尝试失败的次数，默认为：1次</li></ul><h3 id="_2-反向代理" tabindex="-1"><a class="header-anchor" href="#_2-反向代理" aria-hidden="true">#</a> 2.反向代理</h3><blockquote><p>反向代理指的是，当一个客户端发送的请求,想要访问服务器上的内容，但将被该请求先发送到一个代理服务器proxy,这个代理服务器（Nginx）将把请求代理到和自己属于同一个局域网下的内部服务器上,而用户通过客户端真正想获得的内容就存储在这些内部服务器上，此时Nginx代理服务器承担的角色就是一个中间人，起到分配和沟通的作用</p></blockquote><h4 id="_2-1-为什么需要反向代理" tabindex="-1"><a class="header-anchor" href="#_2-1-为什么需要反向代理" aria-hidden="true">#</a> 2.1 为什么需要反向代理？</h4><p>反向代理的优势主要有以下两点</p><ul><li>防火墙作用</li></ul><p>当你的应用不想直接暴露给客户端（也就是客户端无法直接通过请求访问真正的服务器，只能通过Nginx），通过nginx过滤掉没有权限或者非法的请求，来保障内部服务器的安全</p><ul><li>负载均衡</li></ul><p>也就上一章提到负载均衡，本质上负载均衡就是反向代理的一种应用场景，可以通过nginx将接收到的客户端请求&quot;均匀地&quot;分配到这个集群中所有的服务器上(具体看负载均衡方式),从而实现服务器压力的负载均衡</p><h4 id="_2-2-如何使用反向代理" tabindex="-1"><a class="header-anchor" href="#_2-2-如何使用反向代理" aria-hidden="true">#</a> 2.2 如何使用反向代理</h4><blockquote><p>我们通过模拟内部服务器的端口启动的nodejs项目设置反向代理到80端口访问</p></blockquote><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># nginx.config</span>
<span class="token directive"><span class="token keyword">server</span></span>  <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:8000</span><span class="token punctuation">;</span>（upstream）
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Nginx 反向代理是，会通过 location 功能匹配指定的 URI，然后把接收到的符合匹配 URI的请求通过 proxy_pass 转移给之前定义好的 upstream 节点池</p><h4 id="_2-3-使用代理" tabindex="-1"><a class="header-anchor" href="#_2-3-使用代理" aria-hidden="true">#</a> 2.3 使用代理</h4><p>示例配置文件：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> backend</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span> 1.1.1.xxx:8080</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">upstream</span> websocket</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span> 1.1.1.xxx:8090</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 设置请求协议升级</span>
<span class="token directive"><span class="token keyword">map</span> <span class="token variable">$http_upgrade</span> <span class="token variable">$connection_upgrade</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">default</span> upgrade</span><span class="token punctuation">;</span>
  <span class="token comment"># &#39;websocket&#39; upgrade;</span>
  &#39;&#39; <span class="token directive"><span class="token keyword">close</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 代理的 server_name 是 127.0.0.1 通过 localhost 访问，代理是不生效的</span>
<span class="token comment"># 配置多个 server_name 也不生效，目前不清楚是什么问题导致</span>
<span class="token comment"># 网上资料显示 localhost 127.0.0.1异同 :</span>
<span class="token comment"># localhost 是“本地”，请求不经过网卡</span>
<span class="token comment"># 127.0.0.1 是“本机”，请求经过网卡</span>
<span class="token comment"># eg:</span>
<span class="token comment"># server_name 127.0.0.1 localhost; # access localhost not work</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">8081</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> 127.0.0.1</span><span class="token punctuation">;</span>

  <span class="token comment">#charset koi8-r;</span>

  <span class="token comment">#access_log  logs/host.access.log  main;</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> D:\\\\work\\\\project\\\\xxx\\\\dist</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span> index.html index.htm</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token directive"><span class="token keyword">location</span> ~ (/api|/signalr)</span> <span class="token punctuation">{</span>
    <span class="token comment"># 代理转发请求不需要设置跨域头，会导致不同源的请求出现跨域问题</span>
    <span class="token comment"># add_header Access-Control-Allow-Origin *;</span>
    <span class="token comment"># add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;</span>
    <span class="token comment"># 自定义响应头，start 方便查看代理是否成功</span>
    <span class="token directive"><span class="token keyword">add_header</span> Proxy-Server-Ip <span class="token variable">$upstream_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> Proxy-Server-Code <span class="token variable">$upstream_status</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> Proxy-Server-Cache-Status <span class="token variable">$upstream_cache_status</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 自定义请求头 end</span>

    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-NginX-Proxy true</span><span class="token punctuation">;</span>
    <span class="token comment"># 代理 websocket 需要自动 upgrade 协议 start</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;upgrade&quot;</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 代理 websocket 需要自动 upgrade 协议 end</span>
    <span class="token comment"># rewrite ^.+/api/?(.*)$ $1 break;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://backend</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># location ^~ /ws {</span>
  <span class="token comment">#   proxy_pass http://websocket;</span>
  <span class="token comment">#   proxy_http_version 1.1;</span>
  <span class="token comment">#   proxy_set_header Upgrade $http_upgrade;</span>
  <span class="token comment">#   proxy_set_header Connection &quot;upgrade&quot;;</span>
  <span class="token comment"># }</span>

  <span class="token comment">#error_page  404              /404.html;</span>
  <span class="token comment"># redirect server error pages to the static page /50x.html</span>
  <span class="token comment">#</span>
  <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
  <span class="token comment">#</span>
  <span class="token comment">#location ~ \\.php$ {</span>
  <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
  <span class="token comment">#}</span>

  <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
  <span class="token comment">#</span>
  <span class="token comment">#location ~ \\.php$ {</span>
  <span class="token comment">#    root           html;</span>
  <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
  <span class="token comment">#    fastcgi_index  index.php;</span>
  <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
  <span class="token comment">#    include        fastcgi_params;</span>
  <span class="token comment">#}</span>
  <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
  <span class="token comment"># concurs with nginx&#39;s one</span>
  <span class="token comment">#</span>
  <span class="token comment">#location ~ /\\.ht {</span>
  <span class="token comment">#    deny  all;</span>
  <span class="token comment">#}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 一个web服务，有多个后端服务，请求不同的端口，代理需要监听多个端口</span>
<span class="token comment"># 分别配置代理转发规则</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">8090</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> 127.0.0.1</span><span class="token punctuation">;</span>

  <span class="token comment">#charset koi8-r;</span>

  <span class="token comment">#access_log  logs/host.access.log  main;</span>
  <span class="token comment"># location / {</span>
  <span class="token comment">#   root D:\\\\work\\\\project\\\\xxx\\\\dist;</span>
  <span class="token comment">#   index index.html index.htm;</span>
  <span class="token comment">#   try_files $uri $uri/ /index.html;</span>
  <span class="token comment"># }</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">add_header</span> Proxy-Server-Ip <span class="token variable">$upstream_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> Proxy-Server-Code <span class="token variable">$upstream_status</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> Proxy-Server-Cache-Status <span class="token variable">$upstream_cache_status</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">proxy_pass</span> http://websocket</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;upgrade&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">#error_page  404              /404.html;</span>

  <span class="token comment"># redirect server error pages to the static page /50x.html</span>
  <span class="token comment">#</span>
  <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
  <span class="token comment">#</span>
  <span class="token comment">#location ~ \\.php$ {</span>
  <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
  <span class="token comment">#}</span>

  <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
  <span class="token comment">#</span>
  <span class="token comment">#location ~ \\.php$ {</span>
  <span class="token comment">#    root           html;</span>
  <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
  <span class="token comment">#    fastcgi_index  index.php;</span>
  <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
  <span class="token comment">#    include        fastcgi_params;</span>
  <span class="token comment">#}</span>
  <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
  <span class="token comment"># concurs with nginx&#39;s one</span>
  <span class="token comment">#</span>
  <span class="token comment">#location ~ /\\.ht {</span>
  <span class="token comment">#    deny  all;</span>
  <span class="token comment">#}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-https-配置" tabindex="-1"><a class="header-anchor" href="#_3-https-配置" aria-hidden="true">#</a> 3.Https 配置</h3><blockquote><p>Nginx 常用来配置Https认证，主要有两个步骤：签署第三方可信任的 SSL 证书 和 配置 HTTPS</p></blockquote><h4 id="_3-1-签署第三方可信任的-ssl" tabindex="-1"><a class="header-anchor" href="#_3-1-签署第三方可信任的-ssl" aria-hidden="true">#</a> 3.1 签署第三方可信任的 SSL</h4><blockquote><p>配置 HTTPS 要用到私钥 example.key 文件和 example.crt 证书文件，而申请证书文件的时候要用到 example.csr 文件。对于想了解更多关于SSL证书的点这里SSL证书介绍</p></blockquote><h4 id="_3-2-nginx配置https" tabindex="-1"><a class="header-anchor" href="#_3-2-nginx配置https" aria-hidden="true">#</a> 3.2 Nginx配置https</h4><blockquote><p>要开启 HTTPS 服务，在配置文件信息块(server)，必须使用监听命令 listen 的 ssl 参数和定义服务器证书文件和私钥文件，如下所示：</p></blockquote><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token comment">#ssl参数</span>
  <span class="token directive"><span class="token keyword">listen</span>              <span class="token number">443</span> ssl</span><span class="token punctuation">;</span> //监听443端口，因为443端口是https的默认端口。80为http的默认端口
  <span class="token directive"><span class="token keyword">server_name</span>         example.com</span><span class="token punctuation">;</span>
  <span class="token comment">#证书文件</span>
  <span class="token directive"><span class="token keyword">ssl_certificate</span>     example.com.crt</span><span class="token punctuation">;</span>
  <span class="token comment">#私钥文件</span>
  <span class="token directive"><span class="token keyword">ssl_certificate_key</span> example.com.key</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ssl_certificate:证书的绝对路径</li><li>ssl_certificate_key: 密钥的绝对路径;</li></ul><h3 id="_4-常用的配置" tabindex="-1"><a class="header-anchor" href="#_4-常用的配置" aria-hidden="true">#</a> 4.常用的配置</h3><blockquote><p>除了上述的这些，前端还可以用Nginx做些什么，多着呢～下面依依给你讲</p></blockquote><h5 id="root" tabindex="-1"><a class="header-anchor" href="#root" aria-hidden="true">#</a> root</h5><p>指定静态资源目录位置，它可以写在 <code>http</code>、<code>servr</code>、<code>location</code> 块等配置中。</p><p><code>root</code> 与 <code>alias</code> 的区别主要在于 Nginx 如何解释 <code>location</code> 后面的路径的 URI，这会使两者分别以不同的方式将请求映射到服务器文件上。具体来看：</p><p><code>root</code> 的处理结果是：<code>root</code> 路径 + <code>location</code> 路径 <code>alias</code> 的处理结果是：使用 <code>alias</code> 路径替换 <code>location</code> 路径</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">root</span> path</span><span class="token punctuation">;</span>
<span class="token comment"># 例如</span>
<span class="token directive"><span class="token keyword">location</span> /image</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">root</span> /opt/nginx/static</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当用户访问 <code>www.test.com/image/1.png</code> 时，实际在服务器找的路径是 <code>/opt/nginx/static/image/1.png</code>。</p><p>另一个例子：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>        <span class="token number">9001</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>   localhost</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> /hello</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>        /usr/local/var/www</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在请求 <code>http://localhost:9001/hello</code> 时，服务器返回的路径地址应该是 <code>/usr/local/var/www/hello/index.html</code>。</p><p>注意：<code>root</code> 会将定义路径与 <code>URI</code> 叠加，<code>alias</code> 则只取定义路径。</p><blockquote><p>路径结尾的 <code>/</code> 可填写可不填，测试效果一样。根据实验结果和上面的替换原则可知，nginx会自动补全路径</p></blockquote><h4 id="_4-1-ip白名单" tabindex="-1"><a class="header-anchor" href="#_4-1-ip白名单" aria-hidden="true">#</a> 4.1 IP白名单</h4><blockquote><p>可以配置nginx的白名单，规定有哪些ip可以访问你的服务器，防爬虫必备</p></blockquote><ul><li>简单配置</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">deny</span>  192.168.0.1</span><span class="token punctuation">;</span> // 禁止该ip访问
    <span class="token directive"><span class="token keyword">deny</span>  all</span><span class="token punctuation">;</span> // 禁止所有
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>白名单配置</li></ul><p>建立白名单</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/nginx/white_ip.conf
 <span class="token punctuation">..</span>.
<span class="token number">192.168</span>.0.1 <span class="token number">1</span><span class="token punctuation">;</span>
 <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改nginx配置(nginx.conf)</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">geo</span> <span class="token variable">$remote_addr</span> <span class="token variable">$ip_whitelist</span></span><span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">default</span> <span class="token number">0</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">include</span> ip.conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
// geo 指令主要是可以根据指定变量的值映射出一个新变量。如果不指定变量，默认为$remote_addr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为匹配项做白名单设置</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">if</span> ( <span class="token variable">$ip_whitelist</span> = <span class="token number">0</span> )</span><span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">return</span> <span class="token number">403</span></span><span class="token punctuation">;</span> //不在白名单返回 403
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">root</span> /tmp</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-适配pc与移动环境" tabindex="-1"><a class="header-anchor" href="#_4-2-适配pc与移动环境" aria-hidden="true">#</a> 4.2 适配PC与移动环境</h4>`,70),u={href:"http://xn--m-3l8aa407ggyil19a3nbl41akm0azid.baidu.com",target:"_blank",rel:"noopener noreferrer"},v=a(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    //移动、pc设备agent获取
    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$http_user_agent</span> ~* <span class="token string">&#39;(Android|webOS|iPhone)&#39;</span>)</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$mobile_request</span> <span class="token string">&#39;1&#39;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$mobile_request</span> = <span class="token string">&#39;1&#39;</span>)</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">rewrite</span> ^.+ http://m.baidu.com</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-配置gzip" tabindex="-1"><a class="header-anchor" href="#_4-3-配置gzip" aria-hidden="true">#</a> 4.3 配置gzip</h4><blockquote><p>开启Nginx gzip，压缩后,静态资源的大小会大大的减少,从而可以节约大量的带宽,提高传输效率,带来更好的响应和体验</p></blockquote><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span><span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> //启动
  <span class="token directive"><span class="token keyword">gzip_buffers</span> <span class="token number">32</span> <span class="token number">4K</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">6</span></span><span class="token punctuation">;</span> //压缩级别，1-10，数字越大压缩的越好
  <span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">100</span></span><span class="token punctuation">;</span> //不压缩临界值，大于100的才压缩，一般不用改
  <span class="token directive"><span class="token keyword">gzip_types</span> application/javascript text/css text/xml</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">gzip_disable</span> <span class="token string">&quot;MSIE [1-6]\\.&quot;</span></span><span class="token punctuation">;</span> // <span class="token directive"><span class="token keyword">IE6对Gzip不友好，对Gzip</span>
  gzip_vary <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-nginx配置跨域请求" tabindex="-1"><a class="header-anchor" href="#_4-4-nginx配置跨域请求" aria-hidden="true">#</a> 4.4 Nginx配置跨域请求</h4><blockquote><p>当出现403跨域错误的时候，还有 No &#39;Access-Control-Allow-Origin&#39; header is present on the requested resource报错等，需要给Nginx服务器配置响应的header参数：</p></blockquote><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Origin *</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Methods <span class="token string">&#39;GET, POST, OPTIONS&#39;</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Headers <span class="token string">&#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;</span></span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$request_method</span> = <span class="token string">&#39;OPTIONS&#39;</span>)</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">204</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-如何使用nginx" tabindex="-1"><a class="header-anchor" href="#_5-如何使用nginx" aria-hidden="true">#</a> 5.如何使用Nginx</h3><blockquote><p>通过在本地使用Nginx，从启动、更改、重启等环节来介绍Nginx的基本使用</p></blockquote><ul><li>如何启动<code>sudo nginx</code></li><li>修改nginx.conf 配置 (具体看你配置位置)<code>vim /usr/local/etc/nginx/nginx.conf</code></li><li>检查语法是否正常 <code>sudo nginx -t</code></li><li>重启nginx <code>sudo nginx -s reload</code></li><li>创建软链接(便于管理多应用nginx)</li></ul><blockquote><p>当我们需要管理多个网站的nginx，nginx文件放在一起是最好的管理方式，一般都存在/nginx/conf.d/，我们需要把配置文件丢到 /etc/nginx/conf.d/ 文件夹下，怎样才能使这个配置文件既在程序文件夹下，又在 /etc/nginx/conf.d/文件夹下呢？</p></blockquote><p>假如我们在程序文件夹下有一个 ngxin 配置文件：/home/app/app.nginx.conf 我们需要给这个文件创建一个软链接到 /etc/nginx/conf.d/ 下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ln -s /home/app/app.example.com.nginx.conf /etc/nginx/conf.d/app.nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样操作之后，当我们改应用配置文件，/etc/nginx/conf.d/ 下与之对应的配置文件也会被修改，修改后重启 nginx 就能够使新的 ngxin 配置生效了。</p>`,14);function k(m,b){const e=l("ExternalLinkIcon");return c(),t("div",null,[r,n("blockquote",null,[n("p",null,[s("当用户从移动端打开PC端baidu.com的场景时，"),n("a",u,[s("将自动跳转指移动端m.baidu.com"),p(e)]),s("，本质上是Nginx可以通过内置变量$http_user_agent，获取到请求客户端的userAgent，从而知道当前用户当前终端是移动端还是PC，进而重定向到H5站还是PC站")])]),v])}const h=i(d,[["render",k],["__file","nginx.html.vue"]]);export{h as default};
