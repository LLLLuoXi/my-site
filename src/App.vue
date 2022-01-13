<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-13 22:34:31
 * @LastEditors: your name
 * @Description: app.vue
-->
<template>
  <div id="app">
    app
    <Avatar :url="imgUrl" :size="100"/>
    <Icon type="close"/>
  </div>
</template>

<script>
// import Pager from "./components/Pager.vue";
export default {
  name: "App", //如果组件没有初始化名字，则会使用这个名字
  components: {
    // Pager,
  },
  data() {
    return {
      imgUrl: "https://avatars.githubusercontent.com/u/53041755?v=4",
      // current: 1,
      // total: 302,
    };
  },
  methods: {
    // handlePageChange(newPage) {
    //   console.log("页码改变了", newPage);
    //   this.current = newPage;
    // },
  },
};
</script>

<style lang="less">
</style>
