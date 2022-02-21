/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-21 23:40:43
 * @LastEditors: your name
 * @Description: 
 */
import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://avatars.githubusercontent.com/u/53041755?v=4",
    siteTitle: "我的个人空间",
    github: "https://github.com/LLLLuoXi",
    qq: "2652445066",
    qqQrCode:
      "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    weixin: "ARikc_18",
    weixinQrCode:
      "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    mail: "luoxioooo@126.com",
    icp: "ICP备17001719号",
    githubName: "LLLLuoXi",
    favicon: "https://s2.loli.net/2022/02/21/RiT8avUPeGgLpX3.png",
  },
});
