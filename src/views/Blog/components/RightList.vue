<!--
 * @Author: luoxi
 * @LastEditTime: 2022-06-28 15:52:35
 * @LastEditors: your name
 * @Description: 
-->

<template>
  <ul class="rigth-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span
        class="name"
        @click="handleClick(item)"
        :class="{ active: item.isSelect }"
        >{{ item.name }}</span
      >
      <span v-if="item.aside" @click="handleClick(item)" class="aside">
        {{ item.aside }}
      </span>
      <!-- 显示当前组件 -->
      <RightList :list="item.children" @select="handleClick" />
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
  mounted() {
    // console.log("list", this.list);
  },
  methods: {
    handleClick(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.rigth-list-container {
  // background: #e8e8e8;
  list-style: none;
  padding: 0;
  .rigth-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 30px;
    line-height: 30px;
    font-size: 15px;
    .name {
      display: inline-block;
      cursor: pointer;
      color: #9ca8b4;
      &.active {
        color: #5a6072;
        font-weight: bold;
        font-size: 18px;
      }
      &:hover {
        color: #0a0c10;
        &::before {
          width: 100%;
        }
      }
    }
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>
