<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-17 21:55:11
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
        <div class="default-aside">
          <!-- vue-router 匹配到的组件会渲染到这里 -->
          <RouterView />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
export default {
  name: "App", //如果组件没有初始化名字，则会使用这个名字
  components: {
    Layout,
    SiteAside,
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
    height: 100%;
    width: 100%;
  }
}
</style>
