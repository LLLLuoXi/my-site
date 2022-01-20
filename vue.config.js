/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-20 23:26:17
 * @LastEditors: your name
 * @Description: node环境
 
 */
module.exports = {
    lintOnSave: true,
    // lintOnSave: false
    devServer:{
        proxy: {
            "/api":{
                // target: "http://test.my-site.com"   //开发服务器
                target: "http://test.my-site111.com"   //开发服务器

            }
        }
    }
}