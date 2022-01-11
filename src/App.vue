<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-11 23:54:23
 * @LastEditors: your name
 * @Description: app.vue
-->
<template>
  <div id="app">
    app
    <!-- <Avatar :url="imgUrl" :size="100"/>
    <Icon type="close"/> -->
    <pager :current="13" :total="302" />
  </div>
</template>

<script>

import Pager from "./components/Pager.vue"
export default {
  name: "App",  //如果组件没有初始化名字，则会使用这个名字
  components: {
    Pager
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
