/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-18 23:45:03
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
export default function (content, type = "info", container, duration = 2000) {
    //创建消息元素
    const div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, {
            type,
    })
    console.log(iconDom)
    console.log(iconDom.outerHTML)
    console.log(styles)
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`

    //设置样式
    const typeClassName = styles[`message-${type}`]
    div.className = `${styles.message} ${typeClassName}`

    //将div加到容器里 
    if(!container){
        container = document.body;
    }else{
        // 容器的position是否改动过
        if(getComputedStyle(container).position === "static"){
            container.styles.position ="relative"
        }
    }

    container.appendChild(div)

}