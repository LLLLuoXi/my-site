/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-23 21:48:29
 * @LastEditors: your name
 * @Description: 关于我 mock 数据
 */
import Mock from 'mockjs';

Mock.mock("/api/about", "get", {
    code: 0,
    msg: "",
    data: "https://baidu.com",
})

