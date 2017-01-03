import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  users: [
      {id: 1, name: 'Kevin', registered: false},
      {id: 3, name: 'Aqua', registered: false},
      {id: 2, name: 'Jim', registered: false}
  ],
  registrations: []
}

const getters = {
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

const mutations = {
  register (state, userId) {
    const date = new Date()
    const user = state.users.find(user => {
      return user.id === userId
    })
    user.registered = true
    const registration = {
      userId: userId,
      name: user.name,
      date: date.getMonth() + '/' + date.getDay()
    }
    state.registrations.push(registration)
  },
  unregister (state, payload) {
    const user = state.users.find(user => {
      return user.id === payload.userId
    })
    user.registered = false
    const registration = state.registrations.find(registration => {
      return registration.userId === payload.userId
    })
    state.registrations.splice(state.registrations.indexOf(registration), 1)
  }
}

const actions = {
  register ({ commit }, userId) {
    setTimeout(() => {
      commit('register', userId)
    }, 500)
  }
}

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
