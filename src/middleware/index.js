// 和mixins 有区别 这里主要时用来挂载 一些逻辑 但是我目前想不到有什么用
import Vue from 'vue'
Vue.mixin({
    beforeCreate () {
        // 全局中间件
    }
})

// 个别的中间件使用
// import middleware from '@/middleware'
// export default {
//     beforeCreate:middleware.xxx
// }
