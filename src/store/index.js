import { createStore } from "vuex";
import mutations from "./mutations";
import * as actions from "./actions";

export default createStore({
  state: {
    jokes: [],
  },
  getters: {},
  mutations: mutations,
  actions: actions,
  modules: {},
});
