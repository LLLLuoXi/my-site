<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-13 22:44:49
 * @LastEditors: luoxi
 * @Description: Icon 组件测试页
-->
<template>
  <div id="app">
    <Icon type="close" />
  </div>
</template>

<script>
import Icon from "./";
export default {
  name: "App", //如果组件没有初始化名字，则会使用这个名字
  components: {
    Icon,
  },
  data() {
    return {};
  },
};
</script>
