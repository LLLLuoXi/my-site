/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-23 21:50:53
 * @LastEditors: your name
 * @Description: 关于我页面api
 */
import request from "./request";

export async function getAbout() {
  return await request.get("/api/about");
}
