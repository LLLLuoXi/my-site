/*
 * @Author: luoxi
 * @LastEditTime: 2022-06-24 23:49:51
 * @LastEditors: your name
 * @Description: 
 */
import { getBanners } from "@/api/banner";

export default {
  namespaced: true,
  state: {
    loading: false,
    data: [],
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async fetchBanner(ctx) {
      if (ctx.state.data.length) {
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getBanners();
      for (const item of resp) {
        item.midImg = "http://localhost:3001" + item.midImg;
        item.bigImg = "http://localhost:3001" + item.bigImg;
      }
      console.log('resp', resp);
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    },
  },
};
