<template>
  <div class="joke-card">
    <h4 class="setup">{{ jokeProps.setup }}</h4>
    <p class="punchline">{{ jokeProps.punchline }}</p>
    <div class="remove-joke" @click="removeJoke(indexProps)">&times;</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "JokeCard",
  props: ["jokeProps", "indexProps"],
  methods: mapActions(["removeJoke"]),
};
</script>

<style>
.remove-joke {
  position: absolute;
  top: 1%;
  right: 5%;
  cursor: pointer;
  padding: 4px;
}

.joke-card {
  position: relative;
  text-align: left;
  padding: 8px;
  margin: 0 32px 8px 0;
  width: 25%;
  border: 1px solid #ffa1a1;
  border-radius: 4px;
}

.setup {
  font-size: 16px;
}

.punchline {
  font-style: italic;
  color: #777777;
  font-size: 14px;
}
</style>
