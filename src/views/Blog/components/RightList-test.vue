<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-01 21:32:51
 * @LastEditors: your name
 * @Description: RightList测试组件
-->
<template>
  <div class="test">
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
export default {
  components: { RightList },
  data() {
    return {
      list: [
        { name: "a", isSelect: true },
        { name: "a", isSelect: false },
        {
          name: "c",
          isSelect: false,
          children: [
            {
              name: "c-1",
              isSelect: false,
            },
            {
              name: "c-2",
              isSelect: false,
            },
            {
              name: "c-3",
              isSelect: false,
            },
          ],
        },
        { name: "a", isSelect: false },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      console.log("🧐 ~ handleSelect ~ item", item);
    },
  },
};
</script>

<style>
</style>