<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-25 23:22:57
 * @LastEditors: your name
 * @Description: 主页
-->
<template>
  <div class="home-container" ref="container">
    <ul class="carousel-container" :style="{ marginTop }">
      <li v-for="item in banners" :key="item.id">
        <CarouselItem />
      </li>
    </ul>
    <div
      v-show="index >= 1"
      @click="switchTo(index - 1)"
      class="icon icon-up"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < banners.length - 1"
      @click="switchTo(index + 1)"
      class="icon icon-down"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicators">
      <li
        :class="{ active: i === index }"
        v-for="(item, i) in banners"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
// import { showMessage } from "@/utils";
import Icon from "@/components/Icon";
import { getBanners } from "@/api/banner";
import CarouselItem from "./CarouselItem";
export default {
  components: { CarouselItem, Icon },
  data() {
    return {
      banners: [],
      index: 0,
      containerHeight: 0,
    };
  },
  async created() {
    this.banners = await getBanners();
    console.log("🧐 ~ created ~ this.banners", this.banners)
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    // clickBtn() {
    //   console.log("ref", this.$refs.container);
    //   this.$showMessage({
    //     content: "click",
    //     type: "success",
    //     container: this.$refs.container,
    //     duration: 2000,
    //     callback: function () {
    //       console.log("执行了回调函数");
    //     },
    //   });
    // },
    //切换轮播图
    switchTo(i) {
      this.index = i;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  positions: relative;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .carousel-container {
    width: 100%;
    height: 100%;
    transition:all .5s;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    .self-center();
    font-size: 30px;
    @gap: 25px;
    color: @gray;
    cursor: pointer;
    transform: translateX(-50%);
    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }

    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }
  .indicators {
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 20px;
    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>
