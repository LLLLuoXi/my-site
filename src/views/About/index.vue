<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-23 21:57:53
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe
      v-if="src"
      class="about-content"
      :src="src"
      frameborder="0"
      @load="srcLoaded = true"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "About",
  data() {
    return {
      srcLoaded: false,
    };
  },
  computed: {
    ...mapState("about", {
      src: "data",
      loading: "loading",
    }),
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style lang="less" scope>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  &-content {
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  }
}
</style>
