/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-18 23:23:21
 * @LastEditors: your name
 * @Description: mian
 */
import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router'
import showMessage from './utils/showMessage'

window.showMessage = showMessage
showMessage("ssasasaasas")

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
