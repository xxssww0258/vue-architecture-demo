// 和mixins 有区别 这里主要时用来挂载 一些逻辑 但是我目前想不到有什么用
export const viewMixins = {
    beforeCreate () {
        // 全局中间件
        hello()
    }
}

/**
 * 每一个views 组件都要引入的中间件 mixins
 * @export hello
 * @param {*} params
 * @example
 * import middleware from '@/middleware'
 * export default {
 *  mixin:[viewMixins]
 * }
 */
export function hello (params) {
    console.log('hello, i am the middleware')
}
