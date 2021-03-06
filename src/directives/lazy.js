/*
 * @Author: luoxi
 * @LastEditTime: 2022-06-28 01:44:45
 * @LastEditors: your name
 * @Description: 
 */
import eventBus from "@/eventBus"
import { debounce } from "@/utils"
import defaultImg from "@/assets/default.png"

let imgs = []

function setImage(img) {
    // 先暂时使用默认图片
    img.dom.src = defaultImg
    // 处理图片
    // 该图片是否再视口范围内
    const clientHeight = document.documentElement.clientHeight
    const rect = img.dom.getBoundingClientRect()
    // 最小高度
    const height = rect.height || 150;
    // console.log('rect', rect);
    if (rect.top >= -height && rect.top <= clientHeight) {
        // console.log(img.dom, '在视口范围内')
        // const tempImg = new Image()
        // tempImg.onload = () => {
        //     // 当真实图片加载完成之后
        //     img.dom.src = img.src
        // }
        // tempImg.src = img.src
        img.dom.src = img.src;
        // console.log('加载真实图片', img.dom);
        imgs = imgs.filter(i => i !== img)
    }
}

// 调用该函数 ，就可以设置那些合适的图片
function setImages() {
    // console.log('setImages');
    for (const img of imgs) {
        // 处理该图片
        setImage(img)

    }

}
function handleScroll() {
    setImages();
}
eventBus.$on("mainScroll", debounce(handleScroll, 50))

export default {
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value,
        }
        imgs.push(img)
        // 立即处理
        setImage(img)
    },
    unbind(el) {
        imgs = imgs.filter(img => img.dom != el)
    }

}