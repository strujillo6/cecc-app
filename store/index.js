import Vuex from 'vuex'
import moduleLocation from './location'
import moduleUser from './user'
import moduleActivitys from './activitys'

const createStore = () => {
  return new Vuex.Store({
    state: {
      formReportActive: false,
      autehenticate: false
    },
    mutations: {
      active (state) {
        state.formReportActive = false
      },
      inactive (state) {
        state.formReportActive = true
      },
      loginUser (state, login){
        state.autehenticate = login
      }
    },
    modules: {
      location: moduleLocation,
      user: moduleUser,
      activitys: moduleActivitys
    }
  })
}

export default createStore
