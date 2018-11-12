import router from './index'
import store from '../store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import storage from '@/utils/localStorage' // 验权

const whiteList = ['/login'] // 不重定向白名单

router.beforeEach((to, from, next) => {
    NProgress.start()
    if (!storage.token || !storage.userInfo) { // 没登陆
        if (whiteList.includes(to.path)) {
            return next()
        } else {
            NProgress.done()
            return next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
        }
    }

    if (to.path === '/login') { NProgress.done(); return next({ path: '/' }) }// if current page is dashboard will not trigger afterEach hook, so manually handle it
    /** 第一次打开的时候更新一下用户信息 */
    /** 如果登陆过期需要弹窗口 */
    // alert('过期')

    next() // 正常跳转
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
})
