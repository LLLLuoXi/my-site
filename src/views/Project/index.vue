<!--
 * @Author: luoxi
 * @LastEditTime: 2022-07-03 22:26:22
 * @LastEditors: your name
 * @Description:  项目&&和效果页面
-->
<template>
  <div class="project-container" ref="projectContainer" v-loading="loading">
    <div v-for="item in data" :key="item.id" class="card">
      <img v-lazy="item.thumb" />
      <h3>{{ item.name }}</h3>
      <div class="focus-content">
        <p v-for="(desc, i) in item.description" :key="i">
          {{ desc }}
          <!-- <br /> -->
        </p>
        <p class="links">
          <a :href="item.github" v-if="item.github" class="link">github</a>
          <a
            href="item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`"
            class="link"
            >在线预览</a
          >
        </p>
      </div>
    </div>
    <Empty v-if="data.length === 0 && !loading" />
  </div>
</template>

<script>
import mainScroll from "@/mixins/mainScroll.js";
import { mapState } from "vuex";
import Empty from "@/components/Empty";
export default {
  components: { Empty },
  mixins: [mainScroll("projectContainer")],
  computed: mapState("project", ["loading", "data"]),
  created() {
    console.log("project");
    this.$store.dispatch("project/fetchProject");
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 0px;
}
.card {
  & * {
    transition: 0.3s ease all;
  }
  width: 380px;
  height: 375px;
  padding: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  img {
    margin: 0;
    width: 380px;
    height: 300px;
    object-fit: cover;
    display: block;
  }
  h3 {
    margin: 0;
    padding: 20px 12px 48px;
    line-height: 32px;
    font-weight: 500;
    font-size: 20px;
  }
  .focus-content {
    display: block;
    padding: 8px 12px;
  }
  p {
    margin: 0;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: @gray;
    &.links {
      margin-top: 37px;
    }
  }
  &:hover img,
  &:focus-within img {
    margin-top: -100px;
  }
  &:hover h3,
  &:focus-within h3 {
    padding: 8px 12px 0;
  }
  .link {
    font-size: 14px;
    color: #2f56b0;
    position: relative;
    margin-right: 10px;
    transition: color 0.4s ease-out;
    &::after {
      border-radius: 1em;
      border-top: 0.1em solid #2f56b0;
      content: "";
      position: absolute;
      right: 100%;
      bottom: -0.1em;
      left: 0;
      transition: right 0.4s cubic-bezier(0, 0.5, 0, 1);
    }
    &:hover {
      color: #457dfb;
    }
    &:hover::after {
      right: 0;
    }
  }
}
</style>
