<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-07 23:30:18
 * @LastEditors: your name
 * @Description: 博客详情
-->
<template>
  <Layout>
    <div class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
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

export default {
  mixins: [fetchData(null)],
  components: { Layout, BlogDetail, BlogTOC },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
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
.right-container{
  width:300px;
  height:100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position:relative;
  padding: 20px;
}
</style>