import Vue from 'vue'
import moment from 'moment'
import dateFormat from 'dateformat' // https://github.com/felixge/node-dateformat

import { defaultFormat } from './dateConfig'
import dateFormat from './dateFormat'
import relativeDate from './relativeDate'

moment.defaultFormat = defaultFormat

// PENDING : 单纯拿moment来 太过浪费 这个包占到 一百多KB没经过优化的500多KB dateformat只要几KB
Vue.filter('dateFormat', dateFormat)
Vue.filter('relativeDate', relativeDate)
