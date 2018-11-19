// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'html5-reset/assets/css/reset.css' // 样式重置
import './styles/index.css'

// 可选
import i18n from './lang' // i18n
import './icons/vue-awesome' // font awesome
import './icons/customize-icons' // 自定义svg-icon
import './filter'// 常用过滤
import './directive'// 常用指令
import './event-bus'// 事件巴士
import './mixins' // 混合
import './mock' // mock数据
// import './fastclick' // 解决移动端某些浏览器的点击延迟延迟

/* eslint-disable no-new */
const vm = new Vue({
    el    : '#app',
    i18n,
    store,
    router,
    render: h => h(App)
})

if (process.env.NODE_ENV !== 'production') {
    Vue.config.productionTip = true
    console.log(vm)
    console.log(process.env)
}
