// ======================================== date-filter ========================================
// import dateFormat from 'dateformat' // https://github.com/felixge/node-dateformat
import moment from 'moment'
import { relativeFormat } from '../config.js'

/** 格式相对化时间 */
export default function relativeDate(time, option = relativeFormat) {
    const d = moment(time)
    const now = Date.now()

    const diff = (now - d) / 1000

    if (diff < 3600 * 24 * 2) {
        return d.fromNow()
    }

    return option ? d.format(option) : d
}

/** 转成正常的时间 */
// export function normalDate (date) {
//     switch (true) {
//         case /^\d+$/i.test(date):// 字符串类型的时间戳 数字类型页可以校验
//             if (('' + date).length === 10) date = parseInt(date) * 1000 // 补充长度
//             date = Number(date)
//             return new Date(date)
//         default:
//             return new Date(date)
//     }
// }
