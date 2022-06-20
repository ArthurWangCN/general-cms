import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

import $http from '@/service/index';
$http.get<DataType>({url: '/home/multidata'}).then(res => {
  console.log('>>>', res.data)
});

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
