<!--
 * @Author: luoxi
 * @LastEditTime: 2022-06-25 01:05:01
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="message-area-container">
    <DataForm @submit="$listeners.submit" />
    <!-- or -->
    <!-- <DataForm v-on="$listeners"/> -->
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
  mounted() {
    // console.log("this.$listeners",this.$listeners)
  },
};
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>
