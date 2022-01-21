/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-21 22:21:28
 * @LastEditors: your name
 * @Description: 封装axios拦截器
 */
import showMessage from '@/utils/showMessage'
import axios from 'axios';
const ins = axios.create()
ins.interceptors.response.use(function (resp){
    if(resp.data.code !==0){
        showMessage({
            content: resp.data.msg,
            type: 'error',
            duration:1500
        })
        return null
    }
    return resp.data

})

export default ins;