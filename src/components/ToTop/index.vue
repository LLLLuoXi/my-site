<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-18 21:57:25
 * @LastEditors: your name
 * @Description:  回到顶部组件
-->
<template>
  <div v-show="show" class="to-top-container" @click="handleClick">top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 500;
      console.log("dom", dom);
    },
    handleClick() {
      // 回到顶部
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
  background-color: @words;
  color: white;
  text-align: center;
  line-height: 50px;
  position: fixed;
  z-index: 99;
  right: 100px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: darken(@words, 10%);
  }
}
</style>