import {createStore} from 'vuex'

// 创建一个新的 store 实例
export const store = createStore({
  state: {
    token: '',  //初始化token
    uid: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.token = token //同步存储token至localStorage
    },
    setUid(state, uid) {
      state.uid = uid;
      localStorage.uid = uid;
    }
  },
  getters: {
    getToken(state) {
      if (!state.token) {
        state.token = localStorage.getItem('token')
      }
      return state.token
    },
    getUid(state) {
      if (!state.uid) {
        state.uid = localStorage.getItem('uid')
      }
      return state.uid;
    }
  },
  actions: {}
})
