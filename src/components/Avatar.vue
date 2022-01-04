<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-03 13:17:50
 * @LastEditors: your name
 * @Description: 头像组件
-->
<template>
  <img class="avatar-img" :src="url" :style="imgStyle" alt="" />
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
.avatar-img{
    border-radius: 50%;
    object-fit: cover;
    display: block;
}

</style>