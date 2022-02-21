/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-21 23:33:11
 * @LastEditors: your name
 * @Description: vuex module setting 
 */

import { getSetting } from "@/api/setting"
export default {
    namespaced: true,
    state: {
        loading: false,
        data: []
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchSetting(ctx) {
            console.log('fetchSetting');
            ctx.commit('setLoading', true)
            const resp = await getSetting()
            ctx.commit('setData', resp)
            ctx.commit('setLoading', false)
            if (resp.favicon) {
                document.querySelector("link[rel='icon']").href = resp.favicon
            }
        }
    }
}
