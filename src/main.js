/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-21 22:30:26
 * @LastEditors: your name
 * @Description: mian
 */
import "./mock"
// import "./api/test"
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
