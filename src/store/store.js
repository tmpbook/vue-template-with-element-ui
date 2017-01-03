import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  users: [
      {id: 1, name: 'Kevin', registered: false},
      {id: 3, name: 'Aqua', registered: false},
      {id: 2, name: 'Jim', registered: false}
  ],
  registrations: []
}

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
