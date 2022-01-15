<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-15 22:30:22
 * @LastEditors: your name
 * @Description: 图标组件
-->
<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "icon-home-page",
  success: "icon-zhengquewancheng-yuankuang",
  error: "icon-cuowu",
  close: "icon-guanbi",
  warn: "icon-jinggao",
  info: "icon-jinggao",
  blog: "icon-blog",
  code: "icon-code",
  about: "icon-set_about_hov",
  weixin: "icon-weixin",
  mail: "icon-email",
  github: "icon-github",
  qq: "icon-QQ-circle-fill",
  arrowUp: "icon-xiangshang",
  arrowDown: "icon-xiangxia",
  empty: "icon-empty",
  chat: "icon-weixin",
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    fontClass() {
        return classMap[this.type]
    },
  },
};
</script>

<style scope>
@import "//at.alicdn.com/t/font_3131059_h97gaaxq9z8.css";
.iconfont{
  color:inherit;
  font-size:inherit;
}
</style>