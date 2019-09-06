import firebase from "firebase/app";

export default {
  state: {
    info: {}
  },
  actions: {
    async fetchInfoAction({dispatch, commit}) {
      try {
        const uid = await dispatch('getUidAction');
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val();
        commit('SET_INFO', info);
      } catch (e) {

      }

    }
  },
  mutations: {
    SET_INFO(state, info) {
      state.info = info;
    },
    CLEAR_INFO(state) {
      state.info = {};
    }
  },
  getters: {
    info: state => state.info
  }
};
