/* eslint-disable no-unused-vars */
// https://official-joke-api.appspot.com/random_ten
// https://official-joke-api.appspot.com/random_joke

// import mutations from "./mutations";
import * as types from "./mutation-types";
import store from "./index";

// eslint-disable-next-line no-unused-vars
export const initJokes = ({ commit }) => {
  fetch("https://official-joke-api.appspot.com/random_ten", { method: "GET" })
    .then((res) => res.json())
    .then((json) => commit(types.INIT_JOKES, json));
};

export const randomJoke = ({ commit }) => {
  fetch("https://official-joke-api.appspot.com/random_joke", { method: "GET" })
    .then((res) => res.json())
    .then((json) => commit(types.RANDOM_JOKE, json));
};

export const removeJoke = ({ commit }, index) => {
  // const newArray = store.state.jokes.filter((joke) => joke.id !== id);
  commit(types.REMOVE_JOKE, index);
};
