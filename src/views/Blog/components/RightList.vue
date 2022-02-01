<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-01 21:34:50
 * @LastEditors: your name
 * @Description: 
-->

<template>
  <ul class="rigth-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }">{{
        item.name
      }}</span>
      <!-- 显示当前组件 -->
      <RightList :list="item.children" @select="handleClick"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    //[{name:'xxx',isSelect:true,children:[{name:"yyy",isSelect:false,}]}]
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
        this.$emit('select',item)
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.rigth-list-container {
  list-style: none;
  padding: 0;
  .rigth-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .active {
      font-weight: bold;
      color: @warn;
    }
  }
}
</style>