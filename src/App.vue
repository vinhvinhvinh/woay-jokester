<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h2>JOKESTER</h2>
  <span v-for="(type, index) in types" :key="index">
    <input type="checkbox" :value="type" checked v-model="checkedTypes" />
    <label>{{ type }}</label
    >&nbsp;
  </span>
  <div class="joke-actions">
    <div class="joke-btn" @click="randomJoke">Add Random Joke</div>
    <div class="joke-btn" @click="initJokes">Add Random Ten Joke</div>
  </div>
  <div class="joke-container">
    <JokeCard
      v-for="(joke, index) in jokesWithType"
      :jokeProps="joke"
      :key="index"
      :indexProps="index"
    />
  </div>
</template>

<script>
import JokeCard from "./components/JokeCard.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      types: ["general", "knock-knock", "programing"],
      checkedTypes: ["general", "knock-knock", "programing"],
    };
  },
  methods: mapActions(["randomJoke", "initJokes"]),
  computed: {
    ...mapState(["jokes"]),
    jokesWithType() {
      return this.jokes.filter((el) => {
        return this.checkedTypes.includes(el.type);
      });
    },
  },
  components: {
    JokeCard,
  },
  created() {
    this.randomJoke();
  },
  mounted() {
    window.__appVue = this;
  },
};
</script>

<style lang="scss">
* {
  font-family: Poppins;
}

body {
  background: #caf8ea;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.joke-container {
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.joke-actions {
  margin: auto;
  display: flex;
  width: 340px;
  margin-bottom: 36px;
}

.joke-btn {
  color: #fff;
  background: #515151;
  cursor: pointer;
  width: 40%;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  margin-right: 20px;
}
</style>
