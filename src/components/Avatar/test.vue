<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-13 22:38:43
 * @LastEditors: your name
 * @Description: Avatar组件测试页
-->
<template>
  <div id="app">
    <Avatar :url="imgUrl" :size="100" />
  </div>
</template>

<script>
import Avatar from "./";
export default {
  name: "App", //如果组件没有初始化名字，则会使用这个名字
  components: {
    Avatar,
  },
  data() {
    return {
      imgUrl: "https://avatars.githubusercontent.com/u/53041755?v=4",
    };
  },
};
</script>
