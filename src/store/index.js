/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-27 22:02:09
 * @LastEditors: your name
 * @Description: 
 */
// import Vuex from "vuex";
import { Store, install } from "vuex";
import Vue from "vue";
import setting from "./setting";
import about from "./about"
import project from "./project"
if (!window.Vuex) {
    install(Vue);
}



export default new Store({
    modules: {
        setting,
        about,
        project
    },
    strict: true,
});
