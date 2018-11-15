import Vue from 'vue'
import {relativeDate, formatDate} from '../utils'
//  输入格式 格式化时间
Vue.filter('formatDate', formatDate)
Vue.filter('relativeDate', relativeDate)
