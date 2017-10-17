import additions from './additional'

export default {
  'SET_USERS' (state, payload) {
    state.users = payload
  },
  'SET_REGISTRATION' (state, payload) {
    const sample = state.registration.find(el => el.id === payload.id)
    if (!sample) {
      additions.toggleUserStatus(state.users, payload)
      state.registration.push({
        id: payload.id,
        name: payload.name,
        date: additions.createDate()
      })
    }
  },
  'UNSET_REGISTRATION' (state, payload) {
    const sample = state.registration.find(el => el.id === payload.id)
    if (sample) {
      additions.toggleUserStatus(state.users, payload)
      state.registration.splice(state.registration.indexOf(payload), 1)
    }
  }
}
