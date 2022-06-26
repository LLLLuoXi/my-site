/*
 * @Author: luoxi
 * @LastEditTime: 2022-06-24 23:00:12
 * @LastEditors: your name
 * @Description: vuex module setting 
 */

import { getSetting } from "@/api/setting"
import { titleController } from "@/utils"
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
            // console.log('fetchSetting');
            ctx.commit('setLoading', true)
            const resp = await getSetting()
            resp.avatar = 'http://localhost:3001/' + resp.avatar
            resp.qqQrCode = 'http://localhost:3001/' + resp.qqQrCode
            resp.weixinQrCode = 'http://localhost:3001/' + resp.weixinQrCode
            ctx.commit('setData', resp)
            ctx.commit('setLoading', false)
            if (resp.favicon) {
                document.querySelector("link[rel='icon']").href = resp.favicon
            }
            if (resp.siteTitle) {
                titleController.setSiteTitle(resp.siteTitle)
            }
        }
    }
}
