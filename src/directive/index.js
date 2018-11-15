import Vue from 'vue'
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css'
// <template v-guide.close="true" />
Vue.directive('guide', {
    // ：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    bind (el, binding, vnode, oldVnode) {
        el.driver = new Driver({
            allowClose: binding.modifiers && !binding.modifiers.close,
            onDeselected (el) {
                // 考虑这里引入事件巴士
            }
        })
    },

    // ：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    inserted (el, binding, vnode, oldVnode) {

    },

    // ：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
    update (el, binding, vnode, oldVnode) {

    },

    // ：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
    componentUpdated (el, binding, vnode, oldVnode) {
        if (binding.value) {
            el.driver.highlight({ element: el })
        } else {
            el.driver.reset()
        }
    },

    // ：只调用一次，指令与元素解绑时调用。
    unbind (el, binding, vnode, oldVnode) {
        delete el.driver
    }
})
