import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 存数据
const state = {}
// 修改state
const mutations = {}
// 提交mutations
const actions = {}
// 计算属性
const getters = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
