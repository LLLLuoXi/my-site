<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-15 23:02:58
 * @LastEditors: your name
 * @Description: Contect组件
-->
<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon">
          <Icon type="github"/>
        </div>
        <span>LLLLuoXi</span>
      </a>
      <div class="pop">
        <img src="https://avatars.githubusercontent.com/u/53041755?v=4" alt="">
      </div>
    </li>
    <li>
      <a href="mailto:luoxioooo@126.com">
        <div class="icon">
          <Icon type="mail"/>
        </div>
        <span>luoxioooo@126.com</span>
      </a>
      <!-- <div class="pop">
        <img src="https://avatars.githubusercontent.com/u/53041755?v=4" alt="">
      </div> -->
    </li>
    <li>
      <a href="tencent://message/?Menu=yes&uin=2652445066&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
        <div class="icon">
          <Icon type="qq"/>
        </div>
        <span>2652445066</span>
      </a>
      <!-- <div class="pop">
        <img src="https://avatars.githubusercontent.com/u/53041755?v=4" alt="">
      </div> -->
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="weixin"/>
        </div>
        <span>ARikc_18</span>
      </a>
      <div class="pop">
        <img src="https://avatars.githubusercontent.com/u/53041755?v=4" alt="">
      </div>
    </li>

  </ul>
</template>

<script>
import Icon from "@/components/Icon"
export default {
  props: {
  },
  components:{Icon},
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container{
  list-style: none;
  padding:20px;
  margin:0;
  color: @gray;
  @itemHeight:30px;
  li{
    height:@itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover{
      .pop{
        transform:scaleY(1);
      }
    }
  }
  a{
    display:flex;
    align-items: center;
    cursor: pointer;
    span{
      margin-left: 10px;
    }
  }
  .icon{
    font-size: 36px;
    width: 36px;
    
  }
  .pop{
    position:absolute;
    left:0;
    bottom: @itemHeight + 5px;
    padding:10px 15px;
    background:#fff;
    box-sizing: border-box;
    border-radius: 5px;
    transform:scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    &::after{
      content:'';
      position: absolute;
      left: 50%;
      bottom:-4px;
      transform:translateX(-50%) rotate(45deg);
      width:8px;
      height:8px;
      background: #fff;
    }
    img{
      width:150px;
      height:150px;
    }
  }


}
</style>