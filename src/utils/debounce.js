/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-14 22:13:49
 * @LastEditors: your name
 * @Description: 防抖
 */
export default function (fn, duration = 100) {
    let timer = null
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, duration)
    }
}
