<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-10 22:27:03
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

import Avatar from "./components/Avatar.vue"
import Icon from "./components/Icon.vue"
export default {
  name: "App",  //如果组件没有初始化名字，则会使用这个名字
  components: {
    Avatar,
    Icon
  },
  data(){
      return{
          imgUrl: "https://avatars.githubusercontent.com/u/53041755?v=4"
      }
  }
};
</script>

<style lang="less">
</style>
