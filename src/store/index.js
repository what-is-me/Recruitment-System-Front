import {createStore} from 'vuex'

// 创建一个新的 store 实例
export const store = createStore({
  state: {
    token: ''  //初始化token
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.token = token //同步存储token至localStorage
    },
  },
  getters: {
    getToken(state) {
      if (!state.token) {
        state.token = localStorage.getItem('token')
      }
      return state.token
    }
  },
  actions: {}
})
