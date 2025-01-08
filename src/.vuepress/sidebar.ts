import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "Reflection",
      icon: "book",
      prefix: "posts/reflections",
      children: [
        "/posts/reflections/10",
        "/posts/reflections/9",
        "/posts/reflections/8",
        "/posts/reflections/7",
        "/posts/reflections/6",
        "/posts/reflections/5",
        "/posts/reflections/4",
        "/posts/reflections/3",
        "/posts/reflections/2",
        "/posts/reflections/1"
      ],
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
