/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-23 21:53:34
 * @LastEditors: your name
 * @Description: 关于我页面 数据仓库
 */

import { getAbout } from "@/api/about"
export default {
    namespaced: true,
    state: {
        loading: false,
        data: ""
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
        async fetchAbout(ctx) {
            if (ctx.state.data) {
                return
            }
            ctx.commit('setLoading', true)
            const resp = await getAbout()
            console.log("resp",resp)
            ctx.commit('setData', resp)
            ctx.commit('setLoading', false)
        }
    }
}
