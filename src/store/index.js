import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    fetchUsers({
      commit
    }) {
      firebase.database().ref('users').on('value', (snapshot) => {
        const data = snapshot.val();
        const dbUsers = Object.keys(data).map(key => {
          return {
            key,
            ...data[key]
          };
        });
        commit("setUsers", dbUsers);
      });
    }
  },
  getters: {
    getUsers(state) {
      return state.users;
    }
  },
  modules: {}
})
