/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-27 21:24:11
 * @LastEditors: your name
 * @Description: node环境
 
 */


module.exports = {
    lintOnSave: true,
    // lintOnSave: false
    devServer: {
        proxy: {
            "/api": {
                // target: "http://test.my-site.com"   //开发服务器
                target: "http://test.my-site111.com"   //开发服务器

            }
        }
    },
    configureWebpack: require('./webpack.config')
}