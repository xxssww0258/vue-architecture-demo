import Vue from 'vue'
import SvgIcon from './svg-icon' // svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext) // eslint-disable-line
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
