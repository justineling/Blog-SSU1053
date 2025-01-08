import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Blog-SSU1053/",

  lang: "zh-CN",
  title: "Blog-79724",
  description: "基于vuepress-theme-hope 的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
