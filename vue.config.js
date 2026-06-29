const { defineConfig } = require('@vue/cli-service')
const {resolve} = require("node:path");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  transpileDependencies: [''],
  outputDir: resolve(__dirname, 'D:\\study\\workspace\\IDEA\\creezen\\business\\src\\main\\webapp\\web'),
  devServer: {
    port: 8082,
    proxy: {
      '/api': {
        target: 'https://zrzklsaaov5s.xiaomiqiu.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      },
      '/apk': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: { '^/apk': '' }
      }
    }
  }
})
