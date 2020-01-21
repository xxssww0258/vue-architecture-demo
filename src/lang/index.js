import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
// import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
// import elementTwLocale from 'element-ui/lib/locale/lang/zh-TW'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'
import twLocale from './tw'

import storage from '../utils/localStorage'

Vue.use(VueI18n)

let en = {
    ...enLocale
    // ...elementEnLocale
}
let zh = {
    ...zhLocale
    // ...elementZhLocale
}
const messages = {
    // FIXME: navigator.language 得到的是中划线 不是下划线
    'en':en,
    'en-US':en,
    'zh':zh,
    'zh-CN': zh,
    'zh-TW': {
        ...twLocale
        // ...elementTwLocale
    }
}

const i18n = new VueI18n({
    // set locale
    // options: en | zh
    locale: storage.lang || 'zh',
    // locale:  window.navigator.language || 'zh-CN'
    // FIXME: navigator.language 得到的是中划线 不是下划线
    // set locale messages
    messages
})
// TODO：i18n vue 6.0 需要额外加入
// Vue.use(Element, {
//     i18n: (key, value) => i18n.t(key, value)
// })
// // 按需
// ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n // 把这个i18n 挂载到vue 的构造函数上
