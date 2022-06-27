import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import settings from './modules/settings'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    // tagsView,
    // permission,
    settings
  },
  getters
})

export default store
