<template>
  <section>
    <p>pokemons</p>
    <PokemonCard v-for="(pokemon, index) in pokemons" v-bind:key="index" />
  </section>
</template>

<script>
import PokemonCard from "./PokemonCard";

export default {
  name: "Pokemons",
  components: {
    PokemonCard,
  },
  props: {
    pokemons: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
