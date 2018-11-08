// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'html5-reset/assets/css/reset.css' // 样式重置
import './assets/vue-transition.css'

import './mock' // mock数据
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
    el        : '#app',
    router,
    components: { App },
    template  : '<App/>'
})

console.log(process.env)
