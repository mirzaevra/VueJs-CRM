import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    SET_ERROR(state, error) {
      state.error = error;
    },
    CLEAR_ERROR(state) {
      state.error = null;
    }
  },
  getters: {
    error: state => state.error
  },
  actions: {},
  modules: {
    auth
  }
});
