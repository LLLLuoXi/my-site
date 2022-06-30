<!--
 * @Author: luoxi
 * @LastEditTime: 2022-06-30 22:48:55
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="blog-detail-container">
    <div class="blog-thumb">
      <img :src="blog.thumb" />
    </div>
    <div class="blog-content">
      <h1>{{ blog.title }}</h1>
      <aside class="aside">
        <span>日期:{{ formatDate(blog.createDate) }}</span>
        <span>浏览:{{ blog.scanNumber }}</span>
        <a href="#data-form-container">评论:{{ blog.commentNumber }}</a>
        <RouterLink
          :to="{
            name: 'CategoryBlog',
            params: { categoryId: blog.category.id },
          }"
          >{{ blog.category.name }}</RouterLink
        >
      </aside>
      <div class="markdown-body" v-html="blog.htmlContent"></div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
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
  .blog-content {
    padding: 20px;
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span,
    a {
      margin-right: 15px;
    }
  }
  .blog-thumb {
    height: 20rem;
    padding: 0px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .markdown-body {
    margin: 1em 0;
  }
}
</style>
