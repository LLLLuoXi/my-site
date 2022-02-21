<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-21 23:08:03
 * @LastEditors: your name
 * @Description: SiteAside
-->
<template>
  <div class="siteAside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" />
    </template>
    <Menu />
    <Contect v-if="data" />
    <p v-if="data" class="footer">
      {{ data.icp }}
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contect from "@/components/SiteAside/Contect";
import { mapState } from "vuex";
export default {
  props: {},
  components: { Avatar, Menu, Contect },
  // data() {
  //   return {
  //     avatarUrl: "https://avatars.githubusercontent.com/u/53041755?v=4",
  //   };
  // },
  computed: { ...mapState("setting", ["data"]) },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.siteAside-container {
  width: 100%;
  height: 100%;
  background-color: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  .avatar-container {
    margin: 0 auto;
  }
  .footer {
    text-align: center;
  }
}
</style>