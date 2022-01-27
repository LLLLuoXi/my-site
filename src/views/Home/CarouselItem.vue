<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-27 22:27:21
 * @LastEditors: your name
 * @Description: 首页轮播图组件
-->
<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="image" :style="imagePosition">
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
      containerSize: null, //外层容器的尺寸
      innerSize: null, //里层图片的尺寸
      mouseX: 0, //鼠标横坐标
      mouseY: 0, //鼠标纵坐标
    };
  },
  computed: {
    //得到图片坐标
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; //多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; //多出的高度
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        // left: left + "px",
        // top: top + "px",
        // transform: `translate(${left}px, ${top}px)`,
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    console.log("🧐 ~ mounted ~ this.titleWidth", this.titleWidth);
    this.despWidth = this.$refs.desp.clientWidth;
    console.log("🧐 ~ mounted ~ this.despWidth", this.despWidth);

    // --------------------------------
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    //显示文字
    showWords() {
      console.log("🧐 ~ showWords ~ showWords");
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

    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
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
  .text-show() {
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0px 1px 0 rgba(0, 0, 0, 0.5), 0px -1px 0 rgba(0, 0, 0, 0.5);
  }
  color: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .carousel-img {
    // width: 100%;
    // height: 100%;
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
    // z-index: -1;
    transition: 0.3s;
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