/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-25 23:22:06
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
    return resp.data.data

})

export default ins;