import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "jibibear博客",
  description: "vuepress-theme-hope 的博客演示",
  port:'8081',
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
