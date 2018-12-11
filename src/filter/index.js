import Vue from 'vue'
import {relativeDate} from './utils'
import dateFormat from 'dateformat' // https://github.com/felixge/node-dateformat
//  输入格式 格式化时间
// dateFormat(Date.now(), "dddd, mmmm dS, yyyy, h:MM:ss TT"
// Date.now() | dateFormat('yyyy-mm-dd HH:MM:ss')
Vue.filter('dateFormat', dateFormat)
Vue.filter('relativeDate', relativeDate)
