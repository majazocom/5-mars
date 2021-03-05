<template>
  <div id="app">
    <router-view v-bind:pokemons="pokemons" />
  </div>
</template>

<script>
import pokemons from './assets/pokemons.json';

export default {
  name: 'App',
  computed: {
    pokemons() {
      return pokemons.pokemons;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
