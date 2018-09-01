import Vuex from 'vuex'
import moduleLocation from './location'
import moduleUser from './user'
import moduleActivitys from './activitys'

const createStore = () => {
  return new Vuex.Store({
    state: {
      formReportActive: false,
      autehenticate: false,
      title: ""
    },
    mutations: {
      toogleForm (state, value) {
        state.formReportActive = value
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
