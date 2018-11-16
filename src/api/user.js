import axios from '../axios'

/**
 * 用户登陆 这个注释要复制后端文档的注释
 * @param {String} username 账号
 * @param {String} password 密码
 * @export {Promise} axios
 */
export function loginAjax (username, password) {
    let obj = { // 这些不用管网上随便找的api
        showapi_appid: '28496',
        showapi_sign : '8ff44c8982504209bac9571c69f9568d',
        keyword      : '掩耳盗铃'
    }
    return axios({
        method: 'get',
        url   : '/api/1196-2',
        params: { username, password, ...obj }
    })
}
/**
 * 用户登陆 这个注释要复制后端文档的注释
 * @param {String} username 账号
 * @param {String} password 密码
 * @export {Promise} axios
 */
export function userInfoAjax (username, password) {
    let obj = { // 这些不用管网上随便找的api
        showapi_appid: '28496',
        showapi_sign : '8ff44c8982504209bac9571c69f9568d',
        keyword      : '掩耳盗铃'
    }
    return axios({
        method: 'get',
        url   : '/api/1196-2',
        params: { username, password, ...obj }
    })
}
