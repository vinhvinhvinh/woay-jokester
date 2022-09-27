import * as types from "./mutation-types";

const mutations = {
  [types.INIT_JOKES](state, payload) {
    state.jokes.push(...payload);
  },
  [types.RANDOM_JOKE](state, payload) {
    state.jokes.push(payload);
  },
  [types.REMOVE_JOKE](state, index) {
    state.jokes.splice(index, 1);
  },
};

export default mutations;
