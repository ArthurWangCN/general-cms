import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "normalize.css";
import "@/assets/css/reset.less";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

import $http from '@/service/index';


const app = createApp(App)

// 引入图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store).use(router).use(ElementPlus).mount("#app");
