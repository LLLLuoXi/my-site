/*
 * @Author: luoxi
 * @LastEditTime: 2022-06-24 23:14:05
 * @LastEditors: your name
 * @Description: node环境
 
 */


module.exports = {
    devServer: {
        proxy: {
            "/api": {
                // target: "http://test.my-site.com",
                target: "http://127.0.0.1:3001"
            },
            "/static": {
                target: "http://127.0.0.1:3001"
            }
        },
    },
    configureWebpack: require("./webpack.config"),
};
