<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-04 11:29:09
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <Layout>
    <BlogList/>
    <template #right>
      <BlogCategory/>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout"
import BlogCategory from "./components/BlogCategory"
import BlogList from "./components/BlogList"

export default {
  components:{Layout,BlogCategory,BlogList},
  created(){
    console.log(this.$route);
  }
};
</script>

<style></style>
