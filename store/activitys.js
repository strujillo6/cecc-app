import {activityPromise} from '../plugins/database'

const moduleActivitys = {

  namespaced: true,
  state: {
    activitys:[]
  },
  mutations: {
    updateActivitys (state, activitys){
      state.activitys = activitys
    }
  },
  actions: {
    getActivitys ({commit}){
      async function activitys () {
        let activitys =  await activityPromise
        commit('updateActivitys', activitys)
      }
      activitys ()
    }
  }

};

export default moduleActivitys
