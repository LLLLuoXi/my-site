/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-27 21:45:06
 * @LastEditors: your name
 * @Description:  webpack 配置
 */

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

if (process.env.NODE_ENV === "production") {
  module.exports = {
    devtool: "none",
    plugins: [new BundleAnalyzerPlugin()],
    // 不要对以下公共库进行打包 走cdn
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      axios: "axios",
    },
  };
} else {
  module.exports = {};
}