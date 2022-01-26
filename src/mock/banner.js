/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-26 23:52:12
 * @LastEditors: your name
 * @Description: banner mock 模拟数据
 */

import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "https://s2.loli.net/2022/01/26/ur2ioWORcCKQVft.png",
      bigImg: "https://s2.loli.net/2022/01/26/GCIDQdeE4yjo1MX.png",
      title: "积累",
      description: `为了将来发展的需要，逐渐聚集起有用的东西，使之慢慢增长，完善。积累可以做动词，名词。 </br>

      - 《汉书·叙传上》：帝王之祚，必有明圣显懿之德，丰功厚利积絫之业，然后精诚通於神明，流泽加於生民。颜师古 注、“絫，古累字。`,
    },
    {
      id: "2",
      midImg: "https://s2.loli.net/2022/01/26/VBDcgdTsLaKUuFk.png",
      bigImg: "https://s2.loli.net/2022/01/26/BWcUgh3ks1C9upd.png",
      title: "心态",
      description: "笃信好学，自然宽心",
    },
    {
      id: "3",
      midImg: "https://s2.loli.net/2022/01/26/B82w6FCvrADsugI.png",
      bigImg: "https://s2.loli.net/2022/01/26/Hfrd9btlgjsKYMh.png",
      title: "遗憾",
      description: "- 宋·刘过《唐多令》：欲买桂花同载酒，终不似，少年游",
    },
  ],
});