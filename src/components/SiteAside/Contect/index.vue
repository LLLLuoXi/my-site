<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-21 22:56:33
 * @LastEditors: your name
 * @Description: Contect组件
-->
<template>
  <ul class="contact-container">
    <li>
      <a href="_blank">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>LLLLuoXi</span>
      </a>
      <div class="pop">
        <img
          src="https://avatars.githubusercontent.com/u/53041755?v=4"
          alt=""
        />
      </div>
    </li>
    <li>
      <a href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>{{ data.weixin}}</span>
      </a>
      <div class="pop">
        <img
          src="https://avatars.githubusercontent.com/u/53041755?v=4"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  props: {},
  components: { Icon },
  computed: { ...mapState("setting", ["data"]) },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 40px;
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    span {
      margin-left: 10px;
    }
  }
  .icon {
    font-size: 36px;
    width: 36px;
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -4px;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }
}
</style>