<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-16 21:35:20
 * @LastEditors: your name
 * @Description: SiteAside 组件测试页
-->
<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./";
import "@/styles/global.less";
export default {
  name: "App",
  components: {
    SiteAside,
  },
  data() {
    return {};
  },
};
</script>
<style>
.test-container{
  width: 250px;
  height: 600px;
  border:2px solid;
  margin: 0 auto;
  margin-top: 20px;
 
}

</style>
