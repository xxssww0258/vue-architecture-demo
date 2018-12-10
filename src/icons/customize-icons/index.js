import Vue from 'vue'
import SvgIcon from './svg-icon' // svg组件

// register globally https://fontawesome.com/icons?d=gallery&q=globe&m=free
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext) // eslint-disable-line
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)

// 在nuxt  ssr 项目的时候 不需要引入 因为会被base64 得修改逻辑成 <img src='' />   然后把图片暴露在静态资源
// 但是没有实际意义因为这就导致多了一次 http请求
