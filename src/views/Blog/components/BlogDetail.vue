<!--
 * @Author: luoxi
 * @LastEditTime: 2022-06-27 01:22:34
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <aside class="aside">
      <span>日期:{{ formatDate(blog.createDate) }}</span>
      <span>浏览:{{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论:{{ blog.commentNumber }}</a>
      <RouterLink
        :to="{ name: 'CategoryBlog', params: { categoryId: blog.category.id } }"
        >{{ blog.category.name }}</RouterLink
      >
    </aside>
    <div class="markdown-body" v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    Prism.highlightAll();
  },
  methods: {
    formatDate,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-detail-container {
  .aside {
    font-size: 12px;
    color: @gray;
    span,
    a {
      margin-right: 15px;
    }
  }
  .markdown-body {
    margin: 1em 0;
  }
}
</style>
