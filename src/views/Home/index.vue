<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-27 22:25:17
 * @LastEditors: your name
 * @Description: 主页
-->
<template>
  <div class="home-container" ref="container" @wheel="handleWheel">
    <ul class="carousel-container" :style="{ marginTop }" @transitionend="handleTransitionEnd">
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :carousel="item"/>
      </li>
    </ul>
    <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-up">
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
      switching: false, //是否正在翻页
    };
  },
  async created() {
    this.banners = await getBanners();
    console.log("🧐 ~ created ~ this.banners", this.banners);
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize",this.handleResize)
  },
  destroy() {
    window.removeEventListener("resize",this.handleResize)
    
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
    //滚轮事件
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        //往上滚动
        console.log("e.deltaY", e.deltaY);
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.banners.length - 1) {
        //往下滚动
        console.log("e.deltaY", e.deltaY);
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
      console.log("🧐 ~ handleTransitionEnd ~ this.switching", this.switching)
    },
    handleResize(){
      this.containerHeight = this.$refs.container.clientHeight;
    }
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
  position: relative;

  // test
  // width:300px;
  // height:300px;
  // overflow: visible;
  // border: 2px solid;
  // margin: 100px auto;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: all 0.5s;
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
