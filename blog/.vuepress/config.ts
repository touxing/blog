import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Blog Demo",
    //   description: "A blog demo for vuepress-theme-hope",
    // },
    "/zh/": {
      lang: "zh-CN",
      title: "磨刀霍霍向猪羊",
      description: "舒馨博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
