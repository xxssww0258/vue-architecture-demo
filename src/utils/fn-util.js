// ======================================== 定义一个自己用的常用库 ========================================
/* eslint-disable */
export const emptyObject = Object.freeze({})
export const noop = function () {}
export function mapObj () {
    return Object.create(null)
}

export function getType (_any) {
    let toString = Object.prototype.toString
    return toString.call(_any).slice(8, -1)
}

// 基本类型
export function isNumber (_any) { // NaN 也是==Number
    return !isNaN(_any) && getType(_any) == 'Number'
}
export function isBoolean (_any) {
    return getType(_any) == 'Boolea'
}
export function isDate (_any) {
    return getType(_any) == 'Date'
}
export function isSymbol (_any) {
    return getType(_any) == 'Symbol'
}
// 引用类型
export function isFunction (_any) {
    return getType(_any) == 'Function'
}
export function isObject (_any) {
    return getType(_any) == 'Object'
}
export function isArray (_any) {
    return getType(_any) == 'Array' && Array.isArray(_any) //
}
export function isString (_any) {
    return getType(_any) == 'String'
}
// isNaN 系统自带
export function isUndefined (_any) {
    return getType(_any) == 'Undefined'
}
export function isNull (_any) {
    return getType(_any) == 'Null'
}
export function isRegexp (_any) {
    return getType(_any) == 'RegExp'
}

// 是否是基本类型 主要用来取非 基本类型的 如NaN undefined
export function isPrimitive (value) {
    return (
        typeof value === 'string'
    || typeof value === 'number'
    || typeof value === 'symbol'
    || typeof value === 'boolean'
    )
}
// 执行时间计算
export function timeTaken (cb) {
    console.time(cb.name)
    const r = cb()
    console.timeEnd(cb.name)
    return r
}
// 好像没什么用 因为数组 和 对象都一样可以用
export function hasOwn (any, key) {
    let hasOwnProperty = Object.prototype.hasOwnProperty
    return hasOwnProperty.call(any, key)
}
// 指定value 移除数组
export function removeArrValue (_arr, _item) {
    if (_arr.length) {
        let index = _arr.indexOf(_item)
        if (index > -1) {
            return _arr.splice(index, 1)
        }
    }
}
// 对象转数组
export function toArray (_obj) {
    let arr = []
    for (let i in _obj) {
        arr.push(_obj[i])
    }
    return arr
}

// 判断空数组和空对象
export function isEmptyObj (obj) {
    return !!Object.keys(obj).length
}
// 数据克隆
export function dataClone (obj) {
    return JSON.parse(JSON.stringify(obj))
}
// 深度克隆
export function deepClone (any) {
    var buf
    if (isObject(any) || isArray(any)) {
        buf = isObject(any) ? {} : []
        Object.keys(any).forEach(key => {
            buf[key] = deepClone(any[key])
        })
        return buf
    } else {
        return any
    }
}

// 大致相等检测(用来比较一些深度克隆的对象) 不包括set map
export function looseEqual (_a, _b) {
    if (_a === _b) return true
    const isObjectA = isObject(_a)
    const isObjectB = isObject(_b)
    const isArrayA = isArray(_a)
    const isArrayB = isArray(_b)
    const isPrimitiveA = isPrimitive(_a)
    const isPrimitiveB = isPrimitive(_b)
    try {
        if (isObjectA && isObjectB) {
            const keysA = Object.keys(_a)
            const keysB = Object.keys(_b)
            return keysA.length === keysB.length && keysA.every(key => {
                return looseEqual(_a[key], _b[key])
            })
        } else if (isArrayA && isArrayB) {
            return _a.length === _b.length && _a.every((e, i) => {
                return looseEqual(e, _b[i])
            })
        } else if (!isPrimitiveA && !isPrimitiveB) {
            return String(_a) === String(_b) // <= 函数等 直接转字符串比较
        } else {
            return false
        }
    } catch (e) {
        console.log(e)
        return false
    }
}

// 松散的IndexOf  对象长得一样就行了
export function looseIndexOf (_arr, _val) {
    for (let i = 0; i < _arr.length; i++) {
        if (looseEqual(_arr[i], _val)) return i
    }
    return -1
}
