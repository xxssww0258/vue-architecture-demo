import Vue from 'vue'

// 仅引入用到的图标以减小打包体积
// import 'vue-awesome/icons/flag'
// https://fontawesome.com/icons

// 或者在不关心打包体积时一次引入全部图标
import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon'

// 全局注册（在 `main .js` 文件中）
Vue.component('v-icon', Icon)
