/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-14 22:06:49
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
import './eventBus'
Vue.prototype.$showMessage = showMessage
// 注册全局指令
import vLoading from "./directives/loading"
Vue.directive("loading", vLoading)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


// 测试 接口

import * as blogApi from "./api/blog"

// blogApi.getBlogCategories().then(function(res){
//    console.log(res)
// })

// blogApi.getBlogs().then(function(res){
//   console.log(res)
// })

// blogApi.getBlog('1').then(r=>{
//   console.log(r);
// })


blogApi.postComment({
  nickname: "昵称",
  content: "评论内容，纯文本",
  blogId: "123",
})
  .then((r) => {
    console.log(r);
  });

// blogApi.getComments().then(r => {
//   console.log('getComment',r);
// })


