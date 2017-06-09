import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    changeTag (state, props) {
      state.mainTab = props
    }
  },
  getters: {
    currentTab: state => {
      const path = state.route.fullPath
      switch (path) {
        case '/root/home': return '首页'
        case '/root/wrong': return '错题'
        case '/root/me': return '我的'
        case '/root/setting': return '设置'
        default: return ''
      }
    },
    currentHomeType: state => {
      const params = state.route.params
      return Number(params.type) || 1
    }
  }
})

export default store
