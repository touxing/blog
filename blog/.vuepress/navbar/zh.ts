import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // { text: "演示", icon: "discover", link: "/demo/" },
  {
    text: "博文",
    icon: "note",
    prefix: "/posts/",
    children: [
      {
        text: "前端",
        icon: "folder",
        prefix: "",
        children: [
          {
            text: "javascript",
            icon: "javascript",
            link: "javascript",
          },
          {
            text: "html",
            icon: "html",
            link: "html",
          },
          {
            text: "css",
            icon: "css",
            link: "css",
          },
        ],
      },
      {
        text: "工具",
        icon: "tool",
        prefix: "",
        children: [
          {
            text: "git",
            icon: "git",
            link: "git",
          },
          {
            text: "prettier",
            icon: "line",
            link: "tools/prettier",
          },
          {
            text: "效率",
            icon: "strong",
            link: "tools/efficent",
          },
          {
            text: "Nginx",
            icon: "nginx",
            link: "tools/nginx",
          },
        ]
      }
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
