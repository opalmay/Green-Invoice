import Vue from 'vue'
import Vuex from 'vuex'
import { userStore } from './user.store.js';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: { userStore },
  plugins: [createPersistedState(userStore)],
})
