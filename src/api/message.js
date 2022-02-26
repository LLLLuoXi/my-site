/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-26 22:01:01
 * @LastEditors: your name
 * @Description: 留言板api
 */
import request from "./request";

export async function getMessage(page = 1, limit = 10) {
    return await request.get("/api/message", {
        params: {
            page,
            limit
        }
    })
}

export async function postMessage(msgInfo) {
    return await request.post("/api/message", msgInfo)
}