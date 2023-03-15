import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // { text: "演示", icon: "discover", link: "/demo/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "前端",
        icon: "edit",
        prefix: "javascript/",
        children: [
          {
            text: "javascript",
            icon: "javascript",
            link: "",
          },
        ],
      },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
