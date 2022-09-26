<template>
  <div class="joke-card">
    <h4 class="setup">{{ joke.setup }}</h4>
    <p class="punchline">{{ joke.punchline }}</p>
  </div>
</template>

<script>
export default {
  name: "JokeCard",
  props: ["jokeProps"],
  data() {
    return {
      joke: this.jokeProps,
    };
  },
};
</script>

<style>
.joke-card {
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
