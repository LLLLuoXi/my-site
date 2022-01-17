/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-17 22:01:15
 * @LastEditors: your name
 * @Description: mian
 */
import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router'


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
