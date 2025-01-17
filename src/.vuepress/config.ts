import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import { getDirname, path } from 'vuepress/utils';
const SrcPath = path.resolve(__dirname, '../');

export default defineUserConfig({
  alias: {
    '@components': path.resolve(__dirname, 'components'),
    '@src': SrcPath,
  },
  base: "/jibibear_blog/",
  lang: "zh-CN",
  title: "jibibear博客",
  description: "vuepress-theme-hope 的博客演示",
  port:"8081",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
