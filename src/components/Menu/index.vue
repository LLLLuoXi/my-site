<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-15 23:54:16
 * @LastEditors: your name
 * @Description: Menu
-->
<template>
  <nav class="menu-container">
      <a v-for="item in items" :key="item.link" :href="item.link" :class="{selected:isSelected(item.link)}">
        <div class="icon">
          <Icon :type="item.icon"/>
        </div>
        <span>{{item.title}}</span>
      </a>
  </nav>
</template>

<script>
import Icon from "@/components/Icon"
export default {
  props: {
  },
  components:{Icon},
  data(){
    return{
      items:[
        {
          link:"/",
          title:"首页",
          icon:"home"
        },
        {
          link:"/blog",
          title:"文章",
          icon:"blog"
        },
        {
          link:"/about",
          title:"关于我",
          icon:"about"
        },
        {
          link:"/project",
          title:"项目&效果",
          icon:"code"
        },
         {
          link:"/message",
          title:"留言板",
          icon:"chat"
        }
      ]

    }
  },
  methods:{
    isSelected(path){
      return location.pathname.toLowerCase() === path.toLowerCase()
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container{
  margin:24px 0;
  color: @gray;
  a{
    padding:0 50px;
    display:flex;
    align-items: center;
    height:45px;
    .icon{
      width: 24px;
      font-size: 16px;
    }
    &:hover{
      color:#fff
    }
    &.selcted{
      background-color:darken(@words,8%)
    }
  }
}
</style>