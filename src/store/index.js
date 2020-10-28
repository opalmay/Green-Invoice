import Vue from 'vue'
import Vuex from 'vuex'
import { userService } from '../services/user.service.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedinUser: null
  },
  getters: {
    loggedInUser(state) {
      return state.loggedInUser;
    },
  },
  mutations: {
    setUser(state, { user }) {
      state.loggedInUser = user;
    },
  },
  actions: {
    async login(context, { userCred }) {
      const user = await userService.login(userCred);
      context.commit({ type: 'setUser', user });
      return user;
    },
    async logout(context) {
			await userService.logout();
			context.commit({ type: 'setUser', user: null });
		},
  },
  modules: {
  }
})
