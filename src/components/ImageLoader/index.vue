<!--
 * @Author: luoxi
 * @LastEditTime: 2022-05-21 12:32:23
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="" />
    <img
      @load="handleLoad"
      :src="src"
      alt=""
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false, //  原图是否加载完成
      everythingDone: false, // 是否一切都尘埃落定了
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      // this.everythingDone = true;
      const timerId = setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load");
        console.log("🧐 ~ 图片加载完成");
      }, this.duration);

      console.log(timerId);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder {
    filter: blur(2vw);
  }
}
</style>
