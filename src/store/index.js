/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-23 21:40:12
 * @LastEditors: your name
 * @Description: 
 */
import Vuex from "vuex";
import Vue from "vue";
import setting from "./setting";
import about from "./about"
Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        setting,
        about
    },
    strict: true,
});
