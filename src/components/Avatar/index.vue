<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-11 21:29:09
 * @LastEditors: your name
 * @Description: 头像组件
-->
<template>
  <img class="avatar-container" :src="url" :style="imgStyle" alt="" />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
    },
  },
  data(){
      return{
          imgStyle: {
              width:this.size+'px',
              height:this.size+'px'
          }
      }
  }
};
</script>

<style scoped>
/* 带有作用域的样式 */
.avatar-container{
    border-radius: 50%;
    object-fit: cover;
    display: block;
}

</style>