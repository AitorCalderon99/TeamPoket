<script setup>
    import PokemonCard from '../components/PokemonCard.vue';
    import { ref } from 'vue';

    const pokemons = ref();

    fetch('https://pokeapi.co/api/v2/pokemon')
        .then( (response) => response.json() )
        .then( (json) => (pokemons.value=json.results) )
        .catch( (error) => (console.error(error.message)))

</script>

<template>
    <div class="card-container">
        <PokemonCard v-for="pokemon in pokemons.value" :pokemon="pokemon"></PokemonCard>
    </div>
</template>

<style>
    .card-container {
        display: flex;
        flex-flow: wrap row;
        justify-content: center;
        width: auto;
        gap: 1rem;
    }
</style>