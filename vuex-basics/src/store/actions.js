import users from '../data/users.json'

export default {
  setUsers ({ commit }) {
    commit('SET_USERS', users)
  },
  setRegistration ({ commit }, payload) {
    commit('SET_REGISTRATION', payload)
  },
  unsetRegistartion ({ commit }, payload) {
    commit('UNSET_REGISTRATION', payload)
  }
}
