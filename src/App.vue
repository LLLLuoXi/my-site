<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-15 19:11:20
 * @LastEditors: your name
 * @Description: app.vue
-->
<template>
  <div class="app-contianer">
    <Layout>
      <template #left>
        <div class="site-aside">
          <SiteAside />
        </div>
      </template>

      <template #default>
          <!-- vue-router 匹配到的组件会渲染到这里 -->
          <RouterView />
      </template>
    </Layout>
    <ToTop/>
    
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";
export default {
  name: "App", //如果组件没有初始化名字，则会使用这个名字
  components: {
    Layout,
    SiteAside,
    ToTop
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-contianer {
  .self-fill(fixed);
  .site-aside {
    height: 100vh;
    width: 250px;
  }
}
</style>
