import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: '｜===store值-test===｜',
    maptest1: "====mapState数据====",
    number: 1
  },
  mutations: {
    setTest(state){
      state.number++ 
    }
  }
})

export default store