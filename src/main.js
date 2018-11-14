// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'html5-reset/assets/css/reset.css' // 样式重置
import './styles/vue-transition.css'

import i18n from './lang' // i18n
import './mock' // mock数据

import './filter'// 常用过滤
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
    el    : '#app',
    i18n,
    router,
    render: h => h(App)
})

console.log(process.env)
