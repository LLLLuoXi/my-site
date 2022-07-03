<!--
 * @Author: luoxi
 * @LastEditTime: 2022-07-01 00:26:48
 * @LastEditors: your name
 * @Description: blog列表组件
-->
<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
        </div>
        <div class="main">
          <RouterLink :to="{ name: 'BlogDetail', params: { id: item.id } }">
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              >{{ item.category.name }}</RouterLink
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
          <button class="more" @click="goBlogDetail(item.id)">read more</button>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length === 0 && !isLoading" />
    <!-- 分页放到这里 -->
    <Pager
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData.js";
import mainScroll from "@/mixins/mainScroll";
import { getBlogs } from "@/api/blog.js";
import { formatDate } from "@/utils";
import Empty from "@/components/Empty";
export default {
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("container")],
  components: {
    Pager,
    Empty,
  },
  computed: {
    // 获取路由信息
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    formatDate,
    async fetchData() {
      console.log(this.routeInfo);
      var result = await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
      console.log(result);
      for (var item of result.rows) {
        item.thumb = "http://localhost:3001" + item.thumb;
        // item.thumb = "http://47.108.144.102:3001" + item.thumb;
        // item.thumb = item.thumb;
      }
      return result;
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (this.routeInfo.categoryId === -1) {
        // 当前没有分类
        // /article?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
    goBlogDetail(id) {
      this.$router.push({
        name: "BlogDetail",
        params: {
          id,
        },
      });
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;
      // 滚动高度为0
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  margin: 15px 0;
  min-height: 18rem;
  box-shadow: 0 1.4rem 8rem rgba(0, 0, 0, 0.2);
  border-radius: 0.8rem;
  background-color: #fff;
  overflow: hidden;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 18rem;
      height: 100%;
      object-fit: cover;
      object-position: left;
      border-radius: 5px;
      border-top-left-radius: 0.8rem;
      border-top-right-radius: 0rem;
      border-bottom-right-radius: 0rem;
      border-bottom-left-radius: 0.8rem;
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .main {
    padding: 2rem;
    flex: 1 1 auto;
    position: relative;
    h2 {
      margin: 0;
    }
  }

  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }

  .desc {
    margin: 15px 0;
    font-size: 14px;
  }

  .more {
    margin-top: 10px;
    padding: 15px 25px;
    border: unset;
    border-radius: 15px;
    color: #212121;
    z-index: 1;
    background: #e8e8e8;
    position: absolute;
    top: 12rem;
    right: 3rem;
    font-weight: 1000;
    font-size: 17px;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
    overflow: hidden;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      border-radius: 15px;
      background-color: #212121;
      z-index: -1;
      -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      transition: all 250ms;
    }
    &:hover {
      color: #e8e8e8;
      &::before {
        width: 100%;
      }
    }
  }
}
</style>
