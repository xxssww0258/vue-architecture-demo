// import storageObj from './utils/localStorage'
// sessionStorage 就直接用 vuex 代替就好了
const storage = {
    lang      : '语言种类',
    userInfo  : '用户信息',
    token     : '用户登陆token',
    curAccount: '当前选中的公司',
    remove    : key => localStorage.removeItem(key),
    removeAll : () => Object.keys(storage).map(key => localStorage.removeItem(key))
}
Object.preventExtensions(storage)
Object.getOwnPropertyNames(storage).map(key => {
    if (key === 'remove' || key === 'removeAll') {
        Object.defineProperty(storage, key, {
            enumerable: false,
            writable  : false
        })
        return
    }
    Object.defineProperty(storage, key, {
        configurable: true,
        enumerable  : true,
        get         : () => {
            let value = localStorage.getItem(key)
            try {
                return JSON.parse(value)
            } catch (error) {
                return value
            }
        },
        set: newVal => {
            newVal = typeof newVal !== 'string'
                ? JSON.stringify(newVal)
                : newVal
            localStorage.setItem(key, newVal)
        }

    })
})
export default storage
