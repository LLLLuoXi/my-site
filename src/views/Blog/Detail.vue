<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-14 23:03:36
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
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogTOC from "./components/BlogTOC";
import BlogDetail from "./components/BlogDetail";
import BlogComment from "./components/BlogComment";

export default {
  mixins: [fetchData(null)],
  components: { Layout, BlogDetail, BlogTOC, BlogComment },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
    handleScroll() {
      console.log("滚动条变化");
      this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    },
  },
  mounted() {
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },
   destroyed() {
     console.log(this.$refs.mainContainer);
     return
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
  // components: { BlogDetail }
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
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