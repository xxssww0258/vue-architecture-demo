// 导出枚举 映射后端接口的type类型
let obj = {
    ADMIN : 1,
    COMMON: 2,
    MAN   : 3,
    WOMAN : 4
}
Object.freeze(obj)
export default obj
// E.g.
// let {ADMIN,COMMON,MAN,WOMAN} = user
// <div v-if="row.value===ADMIN"></div>
