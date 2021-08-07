export default new Vuex.Store({
  state: {
    name: '전상욱',
    list: [
      {seq: 0, name: 'React'},
      {seq: 1, name: 'Vue'},
      {seq: 2, name: 'Vuex'}
    ],
  },
  mutations: {
    addList (state, value) {
      state.list.push(value);
    },
    delList (state, seq) {
      let list = state.list.filter(li => li.seq !== seq);
      state.list = list;
    }
  },
  actions: {
    addList ({ commit }, value) {
      setTimeout(() => commit('addList', value), 200);
    },
    delList ({ commit }, seq) {
      setTimeout(() => commit('delList', seq), 200);
    }
  },
  getters: {

  }
});