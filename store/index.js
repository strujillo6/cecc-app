import Vuex from 'vuex'
import moduleLocation from './location'
import moduleUser from './user'
import moduleActivitys from './activitys'

const createStore = () => {
  return new Vuex.Store({
    state: {
      formReportActive: false,
      title: ""
    },
    mutations: {
      toogleForm(state, toogle){
        state.formReportActive = toogle
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
