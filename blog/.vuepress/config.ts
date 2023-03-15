import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "磨刀霍霍向猪羊",
      description: "舒馨博客",
    },
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
  },

  theme,

  plugins: [
    docsearchPlugin({
      appId: 'R2IYF7ETH7',
      apiKey: '599cec31baffa4868cae4e79f180729b',
      indexName: 'docsearch',
    }),
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
