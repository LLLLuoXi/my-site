/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-19 22:14:21
 * @LastEditors: your name
 * @Description: mian
 */
import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router'
import showMessage from './utils/showMessage'
Vue.prototype.$showMessage = showMessage
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
