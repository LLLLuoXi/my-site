<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-26 22:51:24
 * @LastEditors: luoxi
 * @Description: 留言板
-->
<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
      :subTitle="`$(data.total)`"
      :isListLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import mainScroll from "@/mixins/mainScroll.js";
import * as msgApi from "@/api/message.js";
export default {
  components: { MessageArea },
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    async fetchData() {
      return await msgApi.getMessage(this.page, this.limit);
    },
    async handleSubmit(data, callback) {
      const resp = await msgApi.postMessage(data);
      callback("感谢留言🥰");
      this.data.rows.unshift(resp);
    },
    async handleScroll(dom) {
      if (this.isLoading || !dom) {
        // 目前正在加载更多
        return;
      }
      // 在这个范围内 也算到达了底部
      const range = 100;
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= range) {
        console.log("到达了底部");
        this.fetchMore();
      }
    },
    //加载下一页
    async fetchMore() {
      if (!this.hasMore) {
        // 没有更多数据
        console.log("没有更多啦");
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      //拼接
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
  },
};
</script>

<style lang="less" scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  .message-area-container {
    width: 700px;
    margin: 0 auto;
  }
}
</style>
