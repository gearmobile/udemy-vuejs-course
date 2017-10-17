import * as types from '../type'

const state = {
  step: 0
}

const getters = {
  [types.GETTER_STEP]: (state) => {
    return state.step + ' steps'
  }
}

const mutations = {
  [types.MUTATION_STEP_LARGE]: (state, payload) => {
    state.step += payload
  },
  [types.MUTATION_STEP_SMALL]: (state, payload) => {
    state.step -= payload
  }
}

const actions = {
  [types.ACTION_STEP_LARGE]: (context, payload) => {
    context.commit(types.MUTATION_STEP_LARGE, payload)
  },
  [types.ACTION_STEP_SMALL]: (context, payload) => {
    context.commit(types.MUTATION_STEP_SMALL, payload)
  }
}

const step = {
  state,
  getters,
  mutations,
  actions
}

export default step
