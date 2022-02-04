/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-04 12:55:40
 * @LastEditors: your name
 * @Description: 
 */

import request from "./request";

/**
 * @description: 获取博客文章
 * @param {*} page 页码
 * @param {*} limit 页数
 * @param {*} categoryid 分类id
 * @return {*} promise
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return request.get("/api/blog", {
        page,
        limit,
        categoryid
    })
}

/**
 * @description: 获取博客分类
 * @return {*} promise
 */
export async function getBlogCategories() {
    return request.get("/api/blogtype")
}