<!--
 * @Author: luoxi
 * @LastEditTime: 2022-06-28 13:44:13
 * @LastEditors: your name
 * @Description:  项目&&和效果页面
-->
<template>
  <div class="project-container" ref="projectContainer" v-loading="loading">
    <div v-for="item in data" :key="item.id" class="project-item">
      <a
        :href="
          item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
        "
        :target="item.url ? '_blank' : '_self'"
      >
        <img class="thumb" v-lazy="item.thumb" />
      </a>
      <div class="info">
        <h2>
          <a
            :href="
              item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
            "
            :target="item.url ? '_blank' : '_self'"
          >
            {{ item.name }}
          </a>
        </h2>
        <a
          class="github"
          target="_blank"
          :href="item.github"
          v-if="item.github"
        >
          github
        </a>
        <p v-for="(desc, i) in item.description" :key="i">
          {{ desc }}
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
}
.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: #2f56b0;
    position: relative;
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
      // color: red;
      color: #457dfb;
    }
    &:hover::after {
      // border-color: #457dfb;
      right: 0;
    }
  }
}
</style>
