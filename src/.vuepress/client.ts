import { defineClientConfig } from 'vuepress/client';
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
import 'vuepress-theme-hope/presets/bounce-icon.scss'; // 为页面图标添加鼠标悬停的跳动效果。

const MyIcon = defineAsyncComponent(() => import('./components/MyIcon.vue'));
const HeroContent = defineAsyncComponent(() => import('./components/HeroContent.vue'));
const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('MyIcon', MyIcon);
  },
  setup() {
    onMounted(() => {});
  },
  rootComponents: [
    HeroContent,
    NavMusic
  ],
});
