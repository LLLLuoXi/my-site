<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-13 23:40:56
 * @LastEditors: your name
 * @Description: Empty组件
-->
<template>
  <div class="empty-container">
    <Icons type="empty"/>
    <p>{{text}}</p>
  </div>
</template>

<script>
import Icons from "../Icon";
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
  components: {
    Icons,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container {
  .self-center();
  color:@gray;
  text-align: center;
  
}
.icon-container {
  font-size:72px
}
</style>