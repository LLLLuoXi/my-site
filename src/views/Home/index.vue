<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-19 22:16:20
 * @LastEditors: your name
 * @Description: 主页
-->
<template>
  <div class="home-container" ref="container">
    <h1>首页</h1>
    <button type="button" @click="clickBtn" >click</button>
  </div>
</template>

<script>
// import { showMessage } from "@/utils";
export default {
  methods: {
    clickBtn() {
      console.log("ref",this.$refs.container)
      this.$showMessage({
        content: "click",
        type:"success",
        container:this.$refs.container,
        duration:2000,
        callback: function(){
          console.log("执行了回调函数")
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.home-container{
  margin: 0 auto;
  width: 300px;
  height: 600px;
  background-color: #324;
  border: 1px;
}
</style>
