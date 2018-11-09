import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import User from '@/views/user/user'

import Default from '@/layout/default/default.vue'

Vue.use(Router)

export const routes = [
    {
        path     : '/',
        name     : 'Home',
        component: Default,
        meta     : {
            title: '首页',
            show : true, // 控制是否在side上显示隐藏
            roles: []// 哪些身份的人才可以登陆
        },
        children: [{ path: '/', component: Home }]
    },
    {
        path     : '/user',
        name     : 'User',
        component: Default,
        meta     : { title: '用户页', show: true, roles: [] },
        children : [{ path: '/user', component: User }]
    }
]

export default new Router({ routes })
