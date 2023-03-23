import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";


export default hopeTheme({
  hostname: "https://touxing.github.io/blog",

  author: {
    name: "Mr.Hotsuitor",
    url: "https://github.com/touxing",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "touxing/blog",

  docsDir: "docs",

  blog: {
    medias: {
      Email: "mailto:hotsuitor@qq.com",
      Gitee: "https://gitee.com/hotsuitor",
      GitHub: "https://github.com/touxing",
      Gmail: "mailto:newbiecen@gmail.com",
      Wechat: "https://imgse.com/i/pp3pqR1",
      Weibo: "https://weibo.com/hotsuitor",
    },
  },

  locales: {
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "舒馨博客",

      displayFooter: true,

      blog: {
        description: "A FrontEnd programmer",
        intro: "/en/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "舒馨博客",

      displayFooter: true,

      blog: {
        description: "一个前端开发者",
        intro: "/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/about/": ["ab1234"],
      "/TODO/todo_list.html": ["ab1234"],
      "/demo/encrypt.html": ["ab1234"],
      "/en/demo/encrypt.html": ["ab1234"],
    },
  },

  plugins: {
    blog: true,

    comment: {
      //  You should generate and use your own comment service
      provider: "Giscus",
      repo: 'touxing/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkyNTM3MTI4NDI=',
      category: 'Announcements',
      categoryId: 'DIC_kwDODx9Zys4CU3td',
    },

    // 代码主题配置
    prismjs: {
      light: 'gruvbox-light',
      dark: 'gruvbox-dark',
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
