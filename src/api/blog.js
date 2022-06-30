/*
 * @Author: luoxi
 * @LastEditTime: 2022-06-28 16:06:46
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
    console.log('blog api>>', page, limit, categoryid, typeof categoryid)
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid
        }
    })
}

/**
 * @description: 获取博客分类
 * @return {*} promise
 */
export async function getBlogCategories() {
    return request.get("/api/blogtype")
}

/**
 * @description: 获取单个博客
 * @param {*} id 博客id
 * @return {*} promise
 */
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`);
}


/**
 * @description: 提交评论
 * @param {*} commentInfo 评论信息对象
 * @return {*} promise
 */
export async function postComment(commentInfo) {
    return await request.post(`/api/comment`, commentInfo);
}

/**
 * @description: 获取评论
 * @param {*} blogid 博客id
 * @param {*} page 页数
 * @param {*} limit 一页显示几条
 * @return {*} promise
 */
export async function getComments(blogid, page = 1, limit = 10) {
    return await request.get("/api/comment", {
        params: {
            blogid,
            page,
            limit,
        },
    });
}