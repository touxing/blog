import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    "intro",
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "TODO",
      icon: "list",
      prefix: "TODO/",
      link: "",
      children: "structure",
    },
    {
      text: "关于我",
      icon: "safe",
      prefix: "about/",
      link: "about/",
      children: "structure",
    },
  ],
});
