let baseUrl = '/blog/'
module.exports = {
  base: baseUrl,
  title: '十年磨一剑',
  head: [
    ['link', { rel: 'icon', href: '/img/logo-64.png' }]
  ],
  description: 'JavaScript学习地，前端进阶之路',
  locales: {
    '/': { lang: 'en-US', title: 'Grinding sword', description: 'Vue-powered Static Site Generator' },
    '/zh/': { lang: 'zh-CN', title: '磨刀', description: 'Vue 驱动的静态网站生成器' },
  },
  themeConfig: {
    logo: '/img/logo-64.png',
    searchMaxSuggestions: 10,
    smoothScroll: true,
    locales: {
      '/': {
        lang: 'en-US',
        title: '磨剑',
        description: 'Vue-powered Static Site Generator',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/', target: '_self' },
          { text: 'Google', link: 'https://google.com', target: '_blank', rel: '' },
        ],
      },
      '/zh/': {
        lang: 'zh-CN',
        title: '磨刀',
        selectText: '选择语言',
        label: '简体中文',
        description: 'Vue 驱动的静态网站生成器',
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/', target: '_self' },
          {
            text: 'Note',
            ariaLabel: 'Note Menu',
            items: [
              {
                text: '前端',
                items: [
                  { text: 'HTML', link: '/zh/html/' },
                  { text: 'CSS', link: '/zh/css/' },
                  { text: 'JavaScript', link: '/zh/javascript/' },
                  { text: 'Git', link: '/zh/git/' },
                  { text: '工具利器', link: '/zh/tools/' },
                  { text: '设计模式', link: '/zh/javascript/#设计模式' },
                  { text: '算法', link: '/zh/algo/' },
                  { text: '数据分析', link: '/zh/analyzes/' },
                  { text: '面试', link: '/zh/面试/' },
                ],
              },
              { text: '后端', link: '/zh/backend/' },
              { text: '随笔', link: '/zh/note/' },
            ],
          },
          // { text: '关于我', link: '/zh/about/'},
          { text: 'GitHub', link: 'https://github.com/touxing', target: '_blank', rel: 'hotsuitor blog' },
        ],
        sidebar: [
          '/zh/',
          ['/zh/html/', 'HTML'],
          ['/zh/css/', 'CSS'],
          ['/zh/javascript/', 'JavaScript'],
          ['/zh/algo/', '算法'],
          ['/zh/deploy/', '部署'],
          {
            title: '工具利器',
            path: '/zh/tools/',
            sidebarDepth: 1,
            children: [
              ['/zh/tools/efficient', '效率工具'],
              ['/zh/tools/prettier', 'prettier代码格式化'],
              ['/zh/tools/site', '有趣的网站'],
              ['/zh/tools/buildtools', '构建工具'],
              ['/zh/tools/nginx', 'Nginx'],
            ],
          },
          {
            title: 'TODO',
            path: '/zh/TODO',
            sidebarDepth: 1,
            children: [
              ['/zh/TODO/todo_list', 'TODO LIST']
            ]
          },
          ['/zh/english/', '英语'],
        ],
        displayAllHeaders: false,
        lastUpdated: 'Last Updated',
      },
    },
  },
  markdown: { lineNumbers: true },
  plugins: [
    '@vuepress/back-to-top',
    // vssue 评论系统
    // [
    //   '@vssue/vuepress-plugin-vssue',
    //    {
    //     // 设置 `platform` 而不是 `api`
    //     platform: 'github-v4',
    //     // 其他的 Vssue 配置
    //     owner: 'touxing',
    //     repo: 'blog',
    //     clientId: '3e0663df12fcbd8d4365',
    //     clientSecret: '6e610e5956376615dee72fefa6390da54f42b52c',
    //   },
    // ],
    // gitalk 评论系统
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk',
        options: {
          clientID: '3e0663df12fcbd8d4365',
          clientSecret: '6e610e5956376615dee72fefa6390da54f42b52c',
          repo: 'blog',
          owner: 'touxing',
          admin: ['touxing', '<hotsuitor@qq.com>'],
          distractionFreeMode: false
        }
      }
    ],
    // valine 评论插件，不好用
    // [
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'valine',
    //     // options选项中的所有参数，会传给Valine的配置
    //     options: {
    //       el: '#vcomments',
    //       appId: 'Db90BbPY9gdrIG1QVLcBgB15-MdYXbMMI',
    //       appKey: '22FwueoBtgzrCjrYyjNtiajY'
    //     }
    //   }
    // ]
  ],
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@img', '/blog/img')
    config.module
      .rule('svg')
        .test(/\.svg$/)
        .use('svg-url-loader')
          .loader('svg-url-loader')
          .options({
            limit: 80 * 1024
          })
      .end()
        .use('file-loader')
        .loader('file-loader')
      .end()
    config.module
      .rule('image')
      .test(/\.(png|jpe?g|gif)$/i)
      .use('file-loader')
        .loader('file-loader')
        .options({
          esModules: false,
          // name: `${baseUrl}[name].[ext]`
        })
      .end()
  },
}
