import { createStore } from 'vuex'
// const screenW= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
import axios from 'axios'
export default createStore({
  state: {
    URL: 'http://localhost:1338/',
    screenW: 1200,
    extraData: []
  },
  getters: {
  },
  mutations: {
    extraFun(state) {
      axios.get(state.URL + 'users/getMsgObj').then(rs => {
        let arr = rs.data;
        state.extraData = arr
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
