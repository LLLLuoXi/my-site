/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-13 16:41:11
 * @LastEditors: your name
 * @Description: 简易版时间总线
 */

const listeners = {}
export default {
    // 监听一个事件
    $on(eventName, handler) {
        if (!listeners[eventName]) {
            listeners[eventName] = new Set()
        }
        listeners[eventName].add(handler)
    },
    // 取消监听
    $off(eventName, handler) {
        if (!listeners[eventName]) {
            return
        }
        listeners[eventName].delete(handler)
    },
    // 触发事件
    $emit(eventName, ...args) {
        if (!listeners[eventName]) {
            return
        }
        for (const handler of listeners[eventName]) {
            handler(...args)
        }

    }
}