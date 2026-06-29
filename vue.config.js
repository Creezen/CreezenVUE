const { defineConfig } = require('@vue/cli-service')
const {resolve} = require("node:path");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  transpileDependencies: [''],
  outputDir: resolve(__dirname, 'D:\\study\\workspace\\IDEA\\creezen\\business\\src\\main\\webapp\\web'),
})
