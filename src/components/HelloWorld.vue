<template>
  <div class="hello">
    <button @click="initJokes">Add Init Jokes</button>
    {{ $store.state }}
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: mapActions(["initJokes"]),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
