<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-16 00:37:08
 * @LastEditors: your name
 * @Description: Menu
-->
<template>
  <nav class="menu-container">
    <a
      v-for="item in items"
      :key="item.link"
      :href="item.link"
      :class="{ selcted: isSelected(item) }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </a>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  props: {},
  components: { Icon },
  data() {
    return {
      items: [
        {
          link: "/",
          title: "首页",
          icon: "home",
        },
        {
          link: "/blog",
          title: "文章",
          icon: "blog",
          startWith: true, // 只要当前路径已link 开头，当前菜单选中
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
        },
        {
          link: "/project",
          title: "项目&效果",
          icon: "code",
        },
        {
          link: "/message",
          title: "留言板",
          icon: "chat",
        },
      ],
    };
  },
  methods: {
    isSelected(item) {
      let link = item.link.toLowerCase();
      let curPathname = location.pathname.toLowerCase();
      if (item.startWith) {
        return curPathname.startsWith(link);
      } else {
        return curPathname === link;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  margin: 24px 0;
  color: @gray;
  a {
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
      font-size: 16px;
    }
    &:hover {
      color: #fff;
    }
    &.selcted {
      background-color: darken(@words, 8%);
    }
  }
}
</style>