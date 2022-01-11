<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-11 23:52:31
 * @LastEditors: your name
 * @Description: 分页组件
-->
<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <h1>{{ visibelMin }}</h1>
    <h1>{{ visibelMax }}</h1>
    <a href="" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
    <a href="" :class="{ disabled: current === 1 }">&lt;&lt;</a>
    <a
      href=""
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
      >{{ n }}</a
    >
    <a href="" :class="{ disabled: current === pageNumber }">&gt;&gt;</a>
    <a href="" :class="{ disabled: current === pageNumber }">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    //总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 得到显示的最小数字
    visibelMin(){
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min
    },
    // 得到显示的最大数字
    visibelMax(){
      let max = this.visibelMin + this.visibleNumber - 1 ;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max
    },
    numbers() {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9];
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>