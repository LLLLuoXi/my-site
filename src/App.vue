<!--
 * @Author: luoxi
 * @LastEditTime: 2022-06-27 01:09:15
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
        <RouterView />
      </template>
    </Layout>
    <!-- <ImageLoader
      src="https://s2.loli.net/2022/01/26/hC1PxifWzVmbFRU.jpg"
      placeholder="https://s2.loli.net/2022/01/26/RvxDAqQoY7tCplL.jpg"
      @load="handleLoaded"
      :duration="10000"
    /> -->
    <ToTop />
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
    ToTop,
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
