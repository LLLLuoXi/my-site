/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-20 23:19:31
 * @LastEditors: your name
 * @Description: banner mock 模拟数据
 */

import Mock from 'mockjs'

Mock.mock("/api/banner", "get", {
    code: 0,
    msg: "",
    data: [
        {
            id: "1",
            midImg: "images",
            bigImg: "images",
            title: "test",
            description: "desp"
        }
    ]


})