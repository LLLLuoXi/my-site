/*
 * @Author: luoxi
 * @LastEditTime: 2022-06-28 02:09:59
 * @LastEditors: your name
 * @Description: mian
 */
// import "./mock"

// import "./api/test"
import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router'
import showMessage from './utils/showMessage'
import './eventBus'
import store from './store'
store.dispatch('setting/fetchSetting')
Vue.prototype.$showMessage = showMessage
// 注册全局指令
import vLoading from "./directives/loading"
import vLazy from "./directives/lazy"
Vue.directive("loading", vLoading)
Vue.directive("lazy", vLazy)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


// 测试 接口

// import * as blogApi from "./api/blog"
// import * as aboutApi from "./api/about"

// blogApi.getBlogCategories().then(function(res){
//    console.log(res)
// })

// blogApi.getBlogs().then(function(res){
//   console.log(res)
// })

// blogApi.getBlog('1').then(r=>{
//   console.log(r);
// })


// blogApi.postComment({
//   nickname: "昵称",
//   content: "评论内容，纯文本",
//   blogId: "123",
// })
//   .then((r) => {
//     console.log(r);
//   });

// blogApi.getComments().then(r => {
//   console.log('getComment',r);
// })

// aboutApi.getAbout().then(r => {
//   console.log('getAbout', r);
// })

// import { getSetting } from './api/setting'

// getSetting().then((setting) => {
//   console.log('setting',setting);
// })
