<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-26 23:31:10
 * @LastEditors: your name
 * @Description: 首页轮播图组件
-->
<template>
  <div class="carousel-item-container">
    <div class="carousel-img">
      <ImageLoader
        @load="this.showWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desp" ref="desp" v-html="carousel.description"></div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: { ImageLoader },
  data() {
    return {
      titleWidth: 0,
      despWidth: 0,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    console.log("🧐 ~ mounted ~ this.titleWidth", this.titleWidth);
    this.despWidth = this.$refs.desp.clientWidth;
    console.log("🧐 ~ mounted ~ this.despWidth", this.despWidth);
    // this.showWords();
  },
  methods: {
    //显示文字
    showWords() {
      console.log("🧐 ~ showWords ~ showWords")
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      //强制让元素渲染一次
      this.$refs.title.clientWidth; // reflow
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      //描述
      this.$refs.desp.style.opacity = 1;
      this.$refs.desp.style.width = 0;
      //强制让元素渲染一次
      this.$refs.desp.clientWidth; // reflow
      this.$refs.desp.style.transition = "2s 1s";
      this.$refs.desp.style.width = this.despWidth + "px";
    },
  },
};
</script>

<style lang="less" scope>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.carousel-item-container {
  // background-color:@dark;
  //文字描边 以适应亮色背景
  .text-show(){
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0px 1px 0 rgba(0, 0, 0, 0.5), 0px -1px 0 rgba(0, 0, 0, 0.5);
  }
  color: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  .carousel-img {
    width: 100%;
    height: 100%;
  }
  .title,
  .desp {
    position: absolute;
    letter-spacing: 3px;
    left: 30px;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    .text-show();
    opacity: 0;
  }
  .title {
    top: calc(50% - 40px);
    font-size: 2em;
  }
  .desp {
    top: calc(50% + 20px);
    font-size: 1.2em;
    line-height: 2;
    color: lighten(@gray, 20%);
  }
}
</style>