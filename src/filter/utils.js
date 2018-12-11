// ======================================== date-filter ========================================
import dateFormat from 'dateformat' // https://github.com/felixge/node-dateformat

/** 格式相对化时间 */
export function relativeDate (time, option) {
    const d = normalDate(time)
    const now = Date.now()

    const diff = (now - d) / 1000

    if (diff < 30) {
        return '刚刚'
    } else if (diff < 3600) {
        // less 1 hour
        return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
        return '1天前'
    }
    if (option) {
        return dateFormat(time, option)
    } else {
        return (
            d.getMonth()
            + 1
            + '月'
            + d.getDate()
            + '日'
            + d.getHours()
            + '时'
            + d.getMinutes()
            + '分'
        )
    }
}

/** 转成正常的时间 */
export function normalDate (date) {
    switch (true) {
        case /^\d+$/i.test(date):// 字符串类型的时间戳 数字类型页可以校验
            if (('' + date).length === 10) date = parseInt(date) * 1000 // 补充长度
            date = Number(date)
            return new Date(date)
        default:
            return new Date(date)
    }
}
