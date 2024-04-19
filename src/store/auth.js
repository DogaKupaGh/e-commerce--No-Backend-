
const state = {
  loggedIn: false 
};

const mutations = {
  setLoggedIn(state) {
    state.loggedIn = true;
  },
  setLoggedOut(state) {
    state.loggedIn = false;
  }
};

const actions = {
  login({ commit }) {
    commit('setLoggedIn', true);
  },
  logout({ commit }) {
    commit('setLoggedIn', false);
  },
};

export default {
  namespaced: true, 
  state,
  mutations,
  actions
};
