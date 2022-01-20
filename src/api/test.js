/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-20 23:18:59
 * @LastEditors: your name
 * @Description: 
 */
import axios from 'axios';

async function getBanners(){
    const resp = await axios.get("/api/banner")
    console.log(resp)
}

getBanners()