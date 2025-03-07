import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

//插件
//导入模块（本地插件＋远端下载的插件＋远端插件）
import { live2DAssistPlugin } from "./plugins/vuepress-plugin-live2DAssist";  // 本地插件：看板娘辅助插件
import { popperPlugin } from "./plugins/vuepress-plugin-popper";  // 本地插件：鼠标特效插件
import { PopperShape } from "@moefy-canvas/theme-popper"; // 远端下载的插件：鼠标特效插件
import { oml2dPlugin } from "vuepress-plugin-oh-my-live2d"; // 远端插件：看板娘插件 

export default defineUserConfig({
  base: "/Blog-SSU1053/",

  lang: "zh-CN",
  title: "Blog-79724",
  description: "基于vuepress-theme-hope 的博客",

  theme,

  plugins: [

    // 鼠标特效插件
    popperPlugin({
      config: {
        shape: PopperShape.Star,
        size: 1.95,
        numParticles: 8,
      },
    }),

    // 看板娘辅助插件
    live2DAssistPlugin({
      subPageHidden: true,
    }),

    // 看板娘插件
    oml2dPlugin({
      models: [
        {
          scale: 0.04,
          path: "https://cdn.jsdelivr.net/gh/oragekk/blog-assets/live2D/sipeibojue_5/sipeibojue_5.model3.json",
          position: [0, 70],
          stageStyle: {
            height: 350
          }
        },
        {
          scale: 0.04,
          path: "https://cdn.jsdelivr.net/gh/oragekk/blog-assets/live2D/lafei_4/lafei_4.model3.json",
          position: [0, 80],
          stageStyle: {
            height: 360
          }
        },
        {
          scale: 0.1,
          path: "https://cdn.jsdelivr.net/gh/oragekk/blog-assets/live2D/z46_2/z46_2.model3.json",
          position: [0, 60],
          stageStyle: {
            height: 330
          }
        },
        {
          scale: 0.05,
          path: "https://model.oml2d.com/HK416-1-normal/model.json",
          position: [0, 80],
          stageStyle: {
            height: 330
          }
        },
        {
          scale: 0.3,
          path: "https://model.oml2d.com/z16/z16.model.json",
          position: [0, 60],
          stageStyle: {
            height: 330
          }
        },
        {
          scale: 0.1,
          path: "https://model.oml2d.com/wed_16/wed_16.model.json",
          position: [0, 60],
          stageStyle: {
            height: 330
          }
        },
      ],
      tips: {
        idleTips: {
          wordTheDay: true
        },
      },
    })
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
