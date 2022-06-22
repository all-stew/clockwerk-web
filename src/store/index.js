import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // app,
    // user,
    // tagsView,
    // permission,
    // settings
  },
  getters
})

export default store
