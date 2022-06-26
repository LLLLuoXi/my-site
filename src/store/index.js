/*
 * @Author: luoxi
 * @LastEditTime: 2022-06-24 23:41:19
 * @LastEditors: your name
 * @Description: 
 */
// import Vuex from "vuex";
import { Store, install } from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about"
import project from "./project"
if (!window.Vuex) {
    install(Vue);
}



export default new Store({
    modules: {
        banner,
        setting,
        about,
        project
    },
    strict: true,
});
