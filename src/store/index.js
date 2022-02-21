/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-21 22:40:18
 * @LastEditors: your name
 * @Description: 
 */
import Vuex from "vuex";
import Vue from "vue";
import setting from "./setting";
Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        setting,
    },
    strict: true,
});
