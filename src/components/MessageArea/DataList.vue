<!--
 * @Author: luoxi
 * @LastEditTime: 2022-07-01 18:51:08
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <TransitionGroup tag="ul" name="list" class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <Avatar :url="item.avatar" :size="44" />
      <div class="data">
        <div class="nickname">{{ item.nickname }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="time">{{ formatDate(item.createDate, true) }}</div>
      </div>
    </li>
  </TransitionGroup>
</template>

<script>
import Avatar from "@/components/Avatar";
import { formatDate } from "@/utils";
export default {
  components: {
    Avatar,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-list-container {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  // border-bottom: 1px solid lighten(@gray, 20%);
  border-bottom: 1px dashed @gray;
  padding: 15px 0;
}
.avatar-container {
  margin-right: 15px;
}
.nickname {
  color: darken(@success, 10%);
  margin-bottom: 10px;
}
.content {
  font-size: 14px;
}
.data {
  flex: 1 1 auto;
  position: relative;
}
.time {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: @gray;
}

.list-enter {
  opacity: 0;
  transform: translateX(100%);
}
.list-enter-active,
.list-leave-active,
.list-move {
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
