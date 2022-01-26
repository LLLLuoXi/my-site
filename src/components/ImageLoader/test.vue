<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-26 00:05:47
 * @LastEditors: your name
 * @Description: ImageLoader 测试页
-->
<template>
  <div class="test-container">
    <!-- <ImageLoader
      src="http://source.unsplash.com/random/400x600"
      placeholder="http://source.unsplash.com/random/100x100"
      @load="handleLoaded"
      :duration="3000"
    /> -->
    <ImageLoader
      src="https://s2.loli.net/2022/01/26/hC1PxifWzVmbFRU.jpg"
      placeholder="https://s2.loli.net/2022/01/26/RvxDAqQoY7tCplL.jpg"
      @load="handleLoaded"
      :duration="3000"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("ImageLoader组件load事件触发，图片加载完成");
    },
  },
};
</script>

<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
}
</style>


