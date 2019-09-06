import firebase from "firebase/app";

export default {
  actions: {
    async registerAction({commit, dispatch}, {email, password, name}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUidAction');
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 1000,
          name
        });
      } catch (e) {
        commit('SET_ERROR', e);
        throw e;
      }
    },
    getUidAction() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async loginAction({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit('SET_ERROR', e);
        throw e;
      }
    },
    async logoutAction({commit}) {
      await firebase.auth().signOut();
      commit('CLEAR_INFO');
    }
  }
};
