import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "About",
    icon: "book",
    link: "/intro",
  },
  {
    text: "Reflections",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Chapters",
        icon: "pen-to-square",
        prefix: "reflections/",
        children: [
          { text: "Chapter 1", icon: "pen-to-square", link: "1" },
          { text: "Chapter 2", icon: "pen-to-square", link: "2" },
          { text: "Chapter 3", icon: "pen-to-square", link: "3" },
          { text: "Chapter 4", icon: "pen-to-square", link: "4" },
          { text: "Chapter 5", icon: "pen-to-square", link: "5" },
          { text: "Chapter 6", icon: "pen-to-square", link: "6" },
          { text: "Chapter 7", icon: "pen-to-square", link: "7" },
          { text: "Chapter 8", icon: "pen-to-square", link: "8" },
          { text: "Chapter 9", icon: "pen-to-square", link: "9" },
          { text: "Chapter 10", icon: "pen-to-square", link: "10" },
        ],
      },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
