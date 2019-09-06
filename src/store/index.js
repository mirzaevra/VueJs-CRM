import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth.js';
import info from './modules/info.js';

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
  actions: {
    async fetchCurrencyAction() {
      const key = process.env.VUE_APP_FIXER;
      const result = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`);

      return await result.json();
    }
  },
  modules: {
    auth,
    info
  }
});
