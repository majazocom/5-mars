<template>
  <main>
    <header>
      <a href="#" v-on:click="back">BACK</a>
    </header>
    <section>
      <p>{{ pokemon[0].name }}</p>
      <p>{{ pokemon[0].attack }}</p>
      <p>{{ pokemon[0].element }}</p>
    </section>
  </main>
</template>

<script>
export default {
  name: "PokemonInfo",
  props: {
    pokemons: Array,
  },
  computed: {
    pokemon() {
      return this.pokemons.filter((pokemon) => {
        return pokemon.id === parseInt(this.$route.params.id);
      });
    },
  },
  methods: {
      back: function() {
          this.$router.push('/');
      }
  }
};
</script>

<style>
</style>