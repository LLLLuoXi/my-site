/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-17 22:07:37
 * @LastEditors: your name
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes";
Vue.use(VueRouter)


const router = new VueRouter({
    //配置
  routes,
  mode:"history"
})

export default router;