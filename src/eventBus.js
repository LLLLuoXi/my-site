/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-18 22:25:39
 * @LastEditors: your name
 * @Description: 简易版时间总线
 */
import Vue from "vue"
const app = new Vue({})
// const listeners = {}
// export default {
//     // 监听一个事件
//     $on(eventName, handler) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set()
//         }
//         listeners[eventName].add(handler)
//     },
//     // 取消监听
//     $off(eventName, handler) {
//         if (!listeners[eventName]) {
//             return
//         }
//         listeners[eventName].delete(handler)
//     },
//     // 触发事件
//     $emit(eventName, ...args) {
//         if (!listeners[eventName]) {
//             return
//         }
//         for (const handler of listeners[eventName]) {
//             handler(...args)
//         }
//     }
// }
// export default new Vue({})

/**
 * @description: 主区域滚动条位置变化后触发
 * @param {*} 滚动的dom元素,如果是undefined，则表示dom元素已经不存在
 * @eventName {*} mainScroll
 * 
 * 
 * @eventName {*} setMainScroll
 * @description: 当需要设置主区域滚动条位置时触发
 * @param {*} 滚动高度
 */
Vue.prototype.$bus = app
export default app;
