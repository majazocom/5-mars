<template>
  <section class="card" v-on:click="showPokemon">
      <img v-bind:src="'https://img.pokemondb.net/artwork/' + name + '.jpg'" />
      <h2>{{ name }}</h2>
  </section>
</template>

<script>
export default {
    name: 'PokemonCard',
    props: {
        pokemon: Object
    },
    computed: {
        name() {
            return this.pokemon.name
        }
    },
    methods: {
        showPokemon: function() {
            console.log(this.pokemon);
            this.$router.push('/pokemon/' + this.pokemon.id);
        }
    }
}
</script>

<style>

</style>