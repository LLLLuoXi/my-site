/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-25 22:03:19
 * @LastEditors: your name
 * @Description: 
 */
import request from "./request";

export async function getBanners() {
  return await request.get("/api/banner");
}