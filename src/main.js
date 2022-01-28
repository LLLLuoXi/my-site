/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-28 22:31:31
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
// 注册全局指令
import vLoading from "./directives/loading"
Vue.directive("loading", vLoading)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
