import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  { text: "Demo", icon: "discover", link: "/en/demo/" },
  {
    text: "Posts",
    icon: "edit",
    prefix: "/en/posts/",
    children: [
      {
        text: "Apple",
        icon: "edit",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "edit", link: "1" },
          { text: "Apple2", icon: "edit", link: "2" },
          "3",
          "4",
        ],
      },
      "tomato",
      "strawberry",
    ],
  },
  // {
  //   text: "V2 Docs",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
