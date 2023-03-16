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
      appId: 'EBB6LLQBXP',
      apiKey: 'ff14ccb784738b91fd698d8d9a7be1ce',
      indexName: 'touxingio',
    }),
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
