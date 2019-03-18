// import store from '../store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import storage from '@/utils/localStorage' // 验权

const whiteList = ['/login'] // 不重定向白名单

/**
 * 添加路由守卫
 * @export
 * @param {*} router
 */
export default function navGuard (router) {
    console.log(router)
    router.beforeEach((to, from, next) => {
        NProgress.start()
        // ---------------------------------------- 免登陆 ----------------------------------------
        if (process.env.FREE_LOGIN === true && process.env.NODE_ENV !== 'production') {
            console.warn('注意!启动了免登录')
            console.warn('注意!启动了免登录')
            console.warn('注意!启动了免登录')
            return next()
        }
        // ---------------------------------------- 没登陆 ----------------------------------------
        // if (!storage.token || !storage.userInfo) {
        //     if (whiteList.includes(to.path)) {
        //         return next()
        //     } else {
        //         NProgress.done()
        //         return next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
        //     }
        // }
        // ---------------------------------------- 登录的 ----------------------------------------
        if (to.path === '/login') { NProgress.done(); return next({ path: '/' }) }// if current page is dashboard will not trigger afterEach hook, so manually handle it

        // ---------------------------------------- role判断 ----------------------------------------
        if (to.matched[0] === undefined) { return next() }
        let routeRoles = to.matched[0].meta.roles // 路由设置的角色组
        let userRole = storage.userInfo && storage.userInfo.role // 用户登录后的角色
        console.log(routeRoles)
        console.log(userRole)
        if (routeRoles.length) { // 当角色组存在规则时
            if (!routeRoles.includes(userRole)) { // 如果当前登录角色不属于角色组则跳转到 首页
                return router.push('/')
            }
        }
        /** 第一次打开的时候更新一下用户信息 */
        /** 如果登陆过期需要弹窗口 */
        // alert('过期')

        next() // 正常跳转
    })

    router.afterEach(() => {
        NProgress.done() // 结束Progress
    })
}
