<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-15 17:39:22
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@/utils";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  computed: {
    // 根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocWithSelect() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getToc(t.children),
        }));
      };
      return getToc(this.toc);
    },
    //根据toc得到它们对应的元素数组
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 300)
    this.$bus.$on("mainScroll", this.setSelectDebounce);
    // this.$bus.$on("mainScroll", emitData=>{
    //   console.log('emitData',emitData);
    //   this.setSelectDebounce()
    // });
  },
  destroyed(){
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  methods: {
    handleSelect(item) {
      console.log(item);
      location.hash = item.anchor;
    },
    //设置activeAnchor为正确的值
    setSelect() {
      // console.log('输出');
      //由于要重新设置，所有要清空状态
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        // 看当前这个dom元素是不是应该选中
        if (!dom) {
          continue;
        }
        //得到元素距离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          //在规定范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          // 在规定范围下方
          return;
        } else {
          // 在规定范围上方
          this.activeAnchor = dom.id; // 先假设自己是激活的，然后继续看后面的
        }
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  // width: 100%;
  // box-sizing: border-box;
  // padding: 20px;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>