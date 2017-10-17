import * as types from '../type'

const state = {
  time: 0
}

const getters = {
  [types.GETTER_TIME]: (state) => {
    return state.time + ' after times'
  }
}

const mutations = {
  [types.MUTATION_TIME]: (state, payload) => {
    state.time -= payload
  }
}

const actions = {
  [types.ACTION_TIME]: (context, payload) => {
    setTimeout(() => {
      context.commit(types.MUTATION_TIME, payload.count)
    }, payload.delay)
  }
}

const timeModule = {
  state,
  getters,
  mutations,
  actions
}

export default timeModule
