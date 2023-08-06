import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: 'store值-test'
  },
  mutations: {
    setTest(state){
      
    }
  }
})

export default store