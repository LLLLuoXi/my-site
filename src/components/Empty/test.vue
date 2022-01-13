<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-13 23:43:10
 * @LastEditors: your name
 * @Description: Avatar组件测试页
-->
<template>
  <div id="app">
    <Empty :text="text" />
  </div>
</template>

<script>
import Empty from "./";
export default {
  name: "App",
  components: {
    Empty,
  },
  data() {
    return {
      text: "显示的数据",
    };
  },
};
</script>
<style lang="less">
@import "~@/styles/var.less";
#app{
  width: 300px;
  height: 300px;
  margin: 100px auto;
  border:1px solid @gray;
  border-radius: 6px;
  position: relative;
  
}
</style>
