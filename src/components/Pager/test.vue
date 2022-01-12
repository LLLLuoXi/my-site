<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-12 23:35:12
 * @LastEditors: your name
 * @Description: Pager组件测试
-->
<template>
  <div id="app">
    <Pager :current="current" :total="total" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import Pager from "./";
export default {
  name: "App",
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 302,
    };
  },
  methods: {
    handlePageChange(newPage) {
      console.log("页码改变了", newPage);
      this.current = newPage;
    },
  },
};
</script>

<style lang="less">
</style>