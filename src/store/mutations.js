import * as types from "./mutation-types";

const mutations = {
  [types.INIT_JOKES](state, payload) {
    state.jokes.push(...payload);
  },
  [types.RANDOM_JOKE](state, payload) {
    state.jokes.push(payload);
  },
};

export default mutations;
