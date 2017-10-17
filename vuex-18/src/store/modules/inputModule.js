import * as types from '../type'

const state = {
  value: 0
}

const getters = {
  [types.GETTER_INPUT]: (state) => {
    return state.value
  }
}

const mutations = {
  [types.MUTATION_INPUT]: (state, payload) => {
    state.value = payload
  }
}

const actions = {
  [types.ACTION_INPUT]: (context, payload) => {
    context.commit(types.MUTATION_INPUT, payload)
  }
}

const inputModule = {
  state,
  getters,
  mutations,
  actions
}

export default inputModule
