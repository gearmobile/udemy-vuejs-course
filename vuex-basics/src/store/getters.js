export default {
  getUsers (state) {
    return state.users.filter(el => !el.status)
  },
  getUsersRegistered (state) {
    return state.registration
  },
  getRegistration (state) {
    return state.registration.length
  }
}
