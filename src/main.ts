import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/hotcss/hotcss.js' // 自定义 css
import '@/assets/styles/reset.css' // 自定义 css
const app = createApp(App)

import FooterTaber from '@/components/footerTaber/Index.vue'
app.component('footer-taber', FooterTaber)

import Vant from 'vant';
import 'vant/lib/index.css';

app.use(store).use(router).use(Vant).mount('#app')
