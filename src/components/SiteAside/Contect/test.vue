<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-15 22:22:36
 * @LastEditors: your name
 * @Description: Contect 组件测试页
-->
<template>
  <div class="test-container">
    <Contect />
  </div>
</template>

<script>
import Contect from "./";
import "@/styles/global.less";
export default {
  name: "App",
  components: {
    Contect,
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
