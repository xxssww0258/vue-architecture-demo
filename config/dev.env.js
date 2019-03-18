'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
// 这里主要是控制 项目内部的一些选项 
// index.js 主要是控制项目的打包
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FREE_LOGIN:false,// 免登陆设置
})
