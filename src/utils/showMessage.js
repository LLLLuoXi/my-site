/*
 * @Author: luoxi
 * @LastEditTime: 2022-06-28 11:16:10
 * @LastEditors: your name
 * @Description: 消息弹窗
 */
import getComponentRootDom from './getComponentRootDom'
import Icon from "@/components/Icon"
import styles from "./showMessage.module.less"
/**
 * @description: 弹出消息
 * @param {*String} content 消息内容
 * @param {*String} type 消息类型 info error success warn
 * @param {*HTMLElement} container 容器，消息会显示到该容器的正中，如果不传则在页面中间
 * @param {*Number} duration 多久消失，0为不消失
 */
//content, type = "info", container, duration = 2000
export default function (options) {
    const content = options.content || "";
    const type = options.type || "info";
    const container = options.container || document.body;
    const duration = options.duration || 2000;
    //创建消息元素
    const div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, {
        type,
    })
    // console.log(iconDom)
    // console.log(styles)
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`

    //设置样式
    const typeClassName = styles[`message-${type}`]
    div.className = `${styles.message} ${typeClassName}`



    // 容器的position是否改动过
    if (options.container) {
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative"
        }
    }

    //将div加到容器里 
    container.appendChild(div)
    // 浏览器强行渲染
    div.clientHeight; //导致reflow
    //回归到正常位置  运行到这里的时候 div还未渲染出来 必须先渲染div出来 
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    //等一段时间消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-15px)`;
        div.addEventListener("transitionend", () => {
            div.remove();
            //运行回调函数
            options.callback && options.callback();
        }, { once: true });
    }, duration)

}