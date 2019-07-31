export const userStore = {
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      // User has:
      // _id
      // username
      // role
      // token
      // expiresIn
      // createdDate
      state.user = user;
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user)
    }
  },
  getters: {
    user: state => {
      return state.user;
    }
  }
};
