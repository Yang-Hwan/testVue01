import Axios from 'axios'
const loginUrl = 'https://localhost:44304/api/auth'

export default {
  namespaced: true,
  state: {
    authenticated: false
  },
  mutations: {
    setAuthenticated (state) {
      state.authenticated = true
      console.log('mutations')
    }
  },
  actions: {
    async authenticate (context, credentials) {
      const response = await Axios.post(loginUrl, credentials)
      console.log('response.data.success' + response.data.success)
      if (response.data.success === true) {
        context.commit('setAuthenticated')
        console.log('oooooooooooooo')
      } else {
        console.log('xxxxxxxxxxxxxxx')
      }
    }
  }
}
