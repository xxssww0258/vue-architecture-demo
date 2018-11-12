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

const messages = {
    'en': {
        ...enLocale
        // ...elementEnLocale
    },
    'zh': {
        ...zhLocale
        // ...elementZhLocale
    },
    'tw': {
        ...twLocale
        // ...elementTwLocale
    }
}

const i18n = new VueI18n({
    // set locale
    // options: en | zh
    locale: storage.lang || 'zh',
    // set locale messages
    messages
})

export default i18n // 把这个i18n 挂载到vue 的构造函数上
