<!--
 * @Author: luoxi
 * @LastEditTime: 2022-06-30 22:35:37
 * @LastEditors: your name
 * @Description: 博客详情
-->
<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogTOC from "./components/BlogTOC";
import BlogDetail from "./components/BlogDetail";
import BlogComment from "./components/BlogComment";
import { titleController } from "@/utils";

export default {
  mixins: [fetchData(null), mainScroll("mainContainer")],
  components: { Layout, BlogDetail, BlogTOC, BlogComment },
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      console.log("resp", resp);
      if (resp.title) {
        titleController.setRouteTitle(resp.title);
      }
      return resp;
    },
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  // padding: 20px;
  position: relative;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
