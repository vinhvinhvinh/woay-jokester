import { createStore } from "vuex";
import mutations from "./mutations";
import * as actions from "./actions";

export default createStore({
  state: {
    jokes: [
      {
        id: 24242,
        type: "programing",
        setup: "How do you make holy water?",
        punchline: "You boil the hell out of it.",
      },
      {
        id: 124124,
        type: "knock-knock",
        setup: "How do you make holy stone?",
        punchline: "You boil the hell out of it.",
      },
    ],
  },
  getters: {},
  mutations: mutations,
  actions: actions,
  modules: {},
});
