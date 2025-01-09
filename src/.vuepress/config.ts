import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

//插件
import { commentPlugin } from '@vuepress/plugin-comment'
import { ribbon } from 'vuepress-plugin-ribbon'
import { dynamicTitle } from 'vuepress-plugin-dynamic-title'
import { cursorEffects } from 'vuepress-plugin-cursor-effects'
import { goTop } from 'vuepress-plugin-go-top'
import { live2d } from 'vuepress-plugin-live2d'

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
      size: 90, // width of the ribbon, default: 90
      opacity: 0.8, // opacity of the ribbon, default: 0.3
      zIndex: -1, // z-index property of the background, default: -1
    }),

    // 鼠标效果插件
    cursorEffects({
      size: 2, // size of the particle, default: 2
      shape: ['star'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }),

    // 返回顶部插件
    goTop({
    }),

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
