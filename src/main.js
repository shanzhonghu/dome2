// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'

import router from './router'

import VueRouter from 'vue-router'
// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import  qs from 'qs'
// 安装 ElementUI
Vue.use(ElementUI);

Vue.use(VueRouter);
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.prototype.$qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 启用路由
  router,
  // 启用 ElementUI
  render: h => h(App),

})
