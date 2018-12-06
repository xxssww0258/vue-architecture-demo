import {join} from 'path'
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import User from '@/views/user/user'

import Default from '@/layout/default/default.vue'
import HeaderMain from '@/layout/header-main/header-main.vue'
import NotFound from '@/views/404/404.vue'
import Reload from '@/views/reload/reload.vue'

Vue.use(Router)
// ======================================== 这是正常的路由 ========================================
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
        children : [{ path: '/', component: User }]
    },
    {
        path     : '/home2',
        name     : 'HeaderMain',
        component: HeaderMain,
        meta     : {
            title: '首页布局2',
            show : true,
            roles: []
        },
        children: [{ path: '/', component: Home }]
    }
]

// ======================================== 这是方便开发调试展示所有component和views ========================================
/*eslint-disable*/ 
let requireAll = 
    process.env.NODE_ENV === 'production'
    ?()=>{return []}
    :(r,pathPrefix) => r.keys().map(componentPath => {
        // 筛选出 第一层路径
        if( componentPath.indexOf('/',2) !== componentPath.lastIndexOf('/') ){ return }
        return {
            path     : join(pathPrefix,componentPath),
            component: Default,
            meta     : {
                title: join(pathPrefix,componentPath),
                show : true, // 控制是否在side上显示隐藏
                roles: []// 哪些身份的人才可以登陆
            },
            children: [{ path: '/', component: r(componentPath).default }]
        }
    })

let reqComponents = require.context('../components/', true, /\.vue$/) // 第二个参数是 是否深度递归
let reqViews = require.context('../views/', true, /\.vue$/)

const demoRoute = [
    ...requireAll(reqComponents,'/components').filter(x=>x),
    ...requireAll(reqViews,'/views').filter(x=>x)
]


// ======================================== 导出 ========================================

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes        : [
        {path:'/reload/:path*',component:Reload},
        ...routes,
        ...demoRoute,
        { path: '*', hidden: true, component: HeaderMain, children: [{ path: '', component: NotFound }] }
    ]
})
