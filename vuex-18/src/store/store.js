import Vue from 'vue'
import Vuex from 'vuex'
import step from './modules/step'
import timeModule from './modules/timeModule'
import inputModule from './modules/inputModule'

Vue.use(Vuex)

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const state = {
  count: 0
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    step,
    timeModule,
    inputModule
  }
})

export default store
