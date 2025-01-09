import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

//插件
//导入ES模块
import { commentPlugin } from '@vuepress/plugin-comment'

//导入CommonJS模块
const ribbon = require("vuepress-plugin-ribbon");
const cursorEffects = require("vuepress-plugin-cursor-effects");
const dynamicTitle = require("vuepress-plugin-dynamic-title");
const goTop = require("vuepress-plugin-go-top");
const live2d = require("vuepress-plugin-live2d");

export default defineUserConfig({
  base: "/Blog-SSU1053/",

  lang: "zh-CN",
  title: "Blog-79724",
  description: "基于vuepress-theme-hope 的博客",

  theme,

  plugins: [
    commentPlugin({
    }),

    // 彩带插件
    ribbon({
      size: 90, // 彩带宽度
      opacity: 0.8, // 不透明度
      zIndex: -1, // z-index 属性
    }),

    // 鼠标效果插件
    cursorEffects({
      size: 2, // 粒子大小
      shape: ["star"], // 粒子形状
      zIndex: 999999999, // z-index 属性
    }),

    // 返回顶部插件
    goTop(),

    // Live2D 模型插件
    live2d({
      modelName: ["hijiki", "tororo", "z16", "miku", "Epsilon2.1", "izumi"],
      mobileShow: false,
    }),

    // 动态标题插件
    dynamicTitle({
      showIcon: "/favicon.ico",
      showText: "(/≧▽≦/)咦！又好了！",
      hideIcon: "/failure.ico",
      hideText: "(●—●)喔哟，崩溃啦！",
      recoverTime: 2000,
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
