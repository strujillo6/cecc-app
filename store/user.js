import {userPromise} from '../plugins/database'
const moduleUser = {
  namespaced: true,
  state: {
    user:[]
  },
  mutations: {
    updateUser (state, user){
      state.user = user
    }
  },
  actions: {
    getUser ({commit}){
      async function user () {
        let users =  await userPromise
        commit('updateUser', users)
      }
      user ()
    }
  }
};

export default moduleUser
