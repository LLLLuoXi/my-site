<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-07 22:34:55
 * @LastEditors: your name
 * @Description: SiteAside
-->
<template>
  <div class="siteAside-container">
    <Avatar :url="avatarUrl" />
    <Menu />
    <Contect />
    <p class="footer">
      备案号
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contect from "@/components/SiteAside/Contect";
export default {
  props: {},
  components: { Avatar, Menu, Contect },
  data() {
    return {
      avatarUrl: "https://avatars.githubusercontent.com/u/53041755?v=4",
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.siteAside-container {
  width: 100%;
  height: 100%;
  background-color:@dark;
  padding:20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  .avatar-container {
    margin: 0 auto;
  }
  .footer{
    text-align:center;
  }
}
</style>