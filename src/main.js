// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'html5-reset/assets/css/reset.css' // 样式重置
import './styles/index.css'

import i18n from './lang' // i18n
import './mock' // mock数据

import './filter'// 常用过滤
import './directive'// 常用指令
import './event-bus'// 事件巴士
import './mixins' // 混合

Vue.config.productionTip = true

/* eslint-disable no-new */
const vm = new Vue({
    el    : '#app',
    i18n,
    router,
    render: h => h(App)
})

console.log(vm)
console.log(process.env)
