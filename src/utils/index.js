// ======================================== date-filter ========================================
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
        return formatDate(time, option)
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
/** 格式化时间 */
export function formatDate (date, fmt = 'yyyy-mm-dd hh:MM:ss') {
    date = normalDate(date)
    if (!date.getFullYear()) return ''
    let o = {
        'm+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'M+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S' : date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return fmt
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
