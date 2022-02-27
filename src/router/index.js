/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-27 22:01:34
 * @LastEditors: your name
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes";
// import store from "../store"
import { titleController } from "@/utils"
if (!window.VueRouter) {
  Vue.use(VueRouter)
}



const router = new VueRouter({
  //配置
  routes,
  mode: "history"
})

router.afterEach((to) => {
  console.log(to.meta.title);
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title)
  }
})

export default router;