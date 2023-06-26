import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import naive from 'naive-ui'
import {store} from './store'
// main.js
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// 引入你所使用的主题 此处以 github 主题为例
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
window.ResizeObserver = undefined;
createApp(App)
  .use(router)
  .use(naive)
  .use(store)
  .use(VMdPreview)
  .mount('#app')
