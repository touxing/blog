module.exports = {
  base: '/blog/',
  title: '十年磨一剑',
  head: ['link', { rel: 'icon', href: '/assets/img/logo-64.png' }],
  description: 'JavaScript学习地，前端进阶之路',
  locales: {
    '/': { lang: 'en-US', title: 'Grinding sword', description: 'Vue-powered Static Site Generator' },
    '/zh/': { lang: 'zh-CN', title: '磨刀', description: 'Vue 驱动的静态网站生成器' },
  },
  themeConfig: {
    logo: '/assets/img/logo-64.png',
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
                ],
              },
              { text: '后端', link: '/zh/backend/' },
            ],
          },
          { text: 'Google', link: 'https://google.com', target: '_blank', rel: '' },
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
              ['/zh/tools/site', '有趣的网站'],
              ['/zh/tools/nginx', 'Nginx'],
            ],
          },
          ['/zh/english/', '英语'],
        ],
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
      },
    },
    smoothScroll: true,
  },
  markdown: { lineNumbers: true },
  plugins: ['@vuepress/back-to-top'],
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@img', '/assets/img')
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
          esModules: false
        })
  },
}
