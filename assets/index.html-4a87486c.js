const t=JSON.parse('{"key":"v-98c64308","path":"/posts/algo/24%E4%BA%8C%E5%8F%89%E6%9F%A5%E6%89%BE%E6%A0%91/","title":"24二叉查找树","lang":"zh-CN","frontmatter":{"title":"24二叉查找树","date":"2020-03-10T00:00:00.000Z","icon":"tree","category":["算法"],"tag":["算法","algo","二叉查找树"],"description":"二叉查找树 二叉查找树也叫二叉搜索树 Binary Search Tree 要求在树中的任意一个节点，其左子树中的每个节点的值，都要小于这个节点的值， 而右子树节点的值都大于这个节点的值 二叉树算法框架：明确一个节点要做的事，其他抛给框架 def traverse(root: TreeNode) { # root 需要做什么？在这做。 # 其他的不用 root 操心，抛给框架 traverse(root.left); traverse(root.right); }","head":[["meta",{"property":"og:url","content":"https://touxing.github.io/blog/blog/posts/algo/24%E4%BA%8C%E5%8F%89%E6%9F%A5%E6%89%BE%E6%A0%91/"}],["meta",{"property":"og:site_name","content":"磨刀霍霍向猪羊"}],["meta",{"property":"og:title","content":"24二叉查找树"}],["meta",{"property":"og:description","content":"二叉查找树 二叉查找树也叫二叉搜索树 Binary Search Tree 要求在树中的任意一个节点，其左子树中的每个节点的值，都要小于这个节点的值， 而右子树节点的值都大于这个节点的值 二叉树算法框架：明确一个节点要做的事，其他抛给框架 def traverse(root: TreeNode) { # root 需要做什么？在这做。 # 其他的不用 root 操心，抛给框架 traverse(root.left); traverse(root.right); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T12:09:28.000Z"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:tag","content":"algo"}],["meta",{"property":"article:tag","content":"二叉查找树"}],["meta",{"property":"article:published_time","content":"2020-03-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T12:09:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"24二叉查找树\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-03-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T12:09:28.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1678882168000,"updatedTime":1678882168000,"contributors":[{"name":"hotsuitor","email":"hotsuitor@qq.com","commits":1}]},"readingTime":{"minutes":0.81,"words":244},"filePathRelative":"posts/algo/24二叉查找树/README.md","localizedDate":"2020年3月10日","excerpt":"<h1> 二叉查找树</h1>\\n<blockquote>\\n<p>二叉查找树也叫二叉搜索树 Binary Search Tree\\n要求在树中的任意一个节点，其左子树中的每个节点的值，都要小于这个节点的值，\\n而右子树节点的值都大于这个节点的值</p>\\n</blockquote>\\n<p>二叉树算法框架：明确一个节点要做的事，其他抛给框架</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">def</span> <span class=\\"token function\\">traverse</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">:</span> TreeNode<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n   <span class=\\"token comment\\"># root 需要做什么？在这做。</span>\\n   <span class=\\"token comment\\"># 其他的不用 root 操心，抛给框架</span>\\n   traverse<span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>left<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n   traverse<span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>right<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
