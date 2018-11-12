import { loginAjax, userInfoAjax } from '@/api/bs/user' // eslint-disable-line
import storage from '@/utils/localStorage'
const user = {
    namespaced: true,
    state     : {
        isUpdateUserInfo: true,
        avatar          : '',
        roles           : [],
        userInfo        : storage.userInfo, // 同步化localStorage 但是key必须一致
        curAccount      : storage.curAccount
    },
    mutations: {
        UPDATE: (state, { key, value }) => {
            state[key] = value
            try {
                storage[key] = value
            } catch (error) {} // eslint-disable-line
        },
        TOGGLE: (state, { key }) => {
            state[key] = !state[key]
            try {
                storage[key] = !storage[key]
            } catch (error) {} // eslint-disable-line
        }
    },
    actions: {
        // 登录
        Login ({ commit }, params) {
            return loginAjax(params)
                .then(data => {
                    commit('UPDATE', { key: 'curAccount', value: data.account[0] })
                    commit('UPDATE', { key: 'userInfo', value: data })
                    commit('UPDATE', { key: 'token', value: data.userToken })
                    return data
                })
        },
        // 更新用户信息
        UserInfo ({ commit }, params) {
            let userToken = storage.userInfo.userToken
            return userInfoAjax({ userToken })
                .then(data => {
                    commit('UPDATE', { key: 'userInfo', value: data })
                    return data
                })
        },
        // 前端 登出
        FedLogOut ({ commit }) {
            storage.remove('token')
            storage.remove('userInfo')
            storage.remove('curAccount')
            return Promise.resolve()
        }
    }
}

export default user
