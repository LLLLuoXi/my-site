<!--
 * @Author: luoxi
 * @LastEditTime: 2022-06-28 14:31:05
 * @LastEditors: your name
 * @Description: Layout 组件
-->
<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto;
    overflow: hidden;
    background: #e8e8e8;
  }
  .main {
    flex: 1 1 auto;
    overflow: hidden;
    background-color: #eee;
  }
}
</style>
