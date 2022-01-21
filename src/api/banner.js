/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-21 22:23:33
 * @LastEditors: luoxi
 * @Description: 
 */
import request from './request';

export async function getBanners(){
    return await request.get("/api/banner")
 
}

getBanners().then(r=>{
    console.log(r)
})