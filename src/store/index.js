/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-24 22:55:51
 * @LastEditors: your name
 * @Description: 
 */
import Vuex from "vuex";
import Vue from "vue";
import setting from "./setting";
import about from "./about"
import project from "./project"
Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        setting,
        about,
        project
    },
    strict: true,
});
