<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-15 23:21:34
 * @LastEditors: your name
 * @Description: Menu 组件测试页
-->
<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";
export default {
  name: "App",
  components: {
    Menu,
  },
  data() {
    return {};
  },
};
</script>
<style>
.test-container{
  width: 400px;
  height: 400px;
  border:2px solid red;
  background-color:#333;
  margin:0 auto;
  padding-top: 200px;
}

</style>
