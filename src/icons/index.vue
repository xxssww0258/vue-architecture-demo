<template>
    <div/>
</template>

<script>
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext) // eslint-disable-line
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)

export default {

}
</script>

<style>

</style>
