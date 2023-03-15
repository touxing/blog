import { defineUserConfig, defaultTheme } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs/index.js'
import { commentPlugin } from 'vuepress-plugin-comment2'

let baseUrl = '/blog/'
export default defineUserConfig({
  base: baseUrl,
  title: '十年磨一剑',
  head: [['link', { rel: 'icon', href: '/img/logo-64.png' }]],
  description: 'JavaScript学习地，前端进阶之路',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Grinding sword',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '磨刀',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
  theme: defaultTheme({
    logo: '/img/logo-64.png',
    repo: 'https://github.com/touxing',
    searchMaxSuggestions: 10,
    smoothScroll: true,
    locales: {
      '/': {
        lang: 'en-US',
        selectLanguageName: 'English',
        title: '磨剑',
        description: 'Vue-powered Static Site Generator',
        navbar: navbarEn,
        sidebar: sidebarEn,
      },
      '/zh/': {
        lang: 'zh-CN',
        selectLanguageName: '简体中文',
        title: '磨刀',
        selectText: '选择语言',
        label: '简体中文',
        description: 'Vue 驱动的静态网站生成器',
        navbar: navbarZh,
        sidebar: sidebarZh,
      },
    },
  }),
  plugins: [
    commentPlugin({
      provider: 'Giscus',
      repo: 'blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkyNTM3MTI4NDI=',
      category: 'Announcements',
      categoryId: 'DIC_kwDODx9Zys4CU3td',
      theme: 'preferred_color_scheme',
    }),
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
    // [
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'gitalk',
    //     options: {
    //       clientID: '3e0663df12fcbd8d4365',
    //       clientSecret: '6e610e5956376615dee72fefa6390da54f42b52c',
    //       repo: 'blog',
    //       owner: 'touxing',
    //       admin: ['touxing', '<hotsuitor@qq.com>'],
    //       distractionFreeMode: false,
    //     },
    //   },
    // ],
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

  // 已经失效，vuepress2打包工具换成了vite
  // chainWebpack: (config, isServer) => {
  //   config.resolve.alias.set('@img', '/blog/img')
  //   config.module
  //     .rule('svg')
  //     .test(/\.svg$/)
  //     .use('svg-url-loader')
  //     .loader('svg-url-loader')
  //     .options({
  //       limit: 80 * 1024,
  //     })
  //     .end()
  //     .use('file-loader')
  //     .loader('file-loader')
  //     .end()
  //   config.module
  //     .rule('image')
  //     .test(/\.(png|jpe?g|gif)$/i)
  //     .use('file-loader')
  //     .loader('file-loader')
  //     .options({
  //       esModules: false,
  //       // name: `${baseUrl}[name].[ext]`
  //     })
  //     .end()
  // },
  bundler: viteBundler({

    viteOptions: {
      build: {
        rollupOptions: {
          // external: '@vuepress/theme-default/layouts/Layout.vue'
        }
      }
    },
    vuePluginOptions: {},
  }),
})
