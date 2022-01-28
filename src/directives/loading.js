/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-28 23:05:38
 * @LastEditors: your name
 * @Description: 导出指令的配置对象
 */
import loadingUrl from "@/assets/loading.svg"
import styles from './loading.module.less'
// export default {
//     bind(el,binding){
//         // 只调用一次
//         // 创建一个img元素，放到el元素内部
//         console.log("bind")
//     },
//     update(el,binding){
//         // 根据binding.value的值，决定创建或删除img元素
//         console.log("update")
//     }
// }

//得到el中是否存在loading效果的img元素
function getLoadingImg(el) {
    return el.querySelector("img[data-role=loading]")

}
function createLoadingImg() {
    const img = document.createElement("img")
    img.dataset.role = "loading"
    img.src = loadingUrl
    img.className = styles.loading
    return img

}
export default function (el, binding) {
    // 根据binding.value的值，决定创建或删除img元素
    const curImg = getLoadingImg(el)
    if (binding.value) {
        if (!curImg) {
            const img = createLoadingImg();
            el.appendChild(img)
        }
    } else {
        if (curImg) {
            curImg.remove()
        }
    }
}