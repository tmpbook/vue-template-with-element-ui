export default {
  unregisterdUsers (state) {
    return state.users.filter(user => {
      return !user.registered
    })
  },
  registerdUsers (state) {
    return state.registrations
  },
  totalRegistrations (state) {
    return state.registrations.length
  }
}
