<template>
  <section class="card">
      <h2>{{ this.pokemon.name }}</h2>
  </section>
</template>

<script>
export default {
    name: 'PokemonCard',
    props: {
        pokemon: Object
    }
}
</script>

<style>

</style>