import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Layout from '@/components/Layout.vue';
import './css/common.scss'
import { vueInit } from './vueInit/index';
import './api/axios'

Vue.config.productionTip = false
Vue.component('Layout', Layout)
vueInit(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
