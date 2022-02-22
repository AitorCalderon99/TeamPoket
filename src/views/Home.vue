<script setup>
    import { reactive } from 'vue';
    import PokemonCard from '../components/PokemonCard.vue';

    const state = reactive({
        pokemons:[]
    })

    fetch('https://pokeapi.co/api/v2/pokemon?offset=0')
        .then( (response) => response.json() )
        .then( (data) => {
            data.results.forEach(pokemon => {
                pokemon.id = pokemon.url.split('/').slice(-2, -1).pop()
                delete pokemon.url
                state.pokemons.push(pokemon)
                // url ahora es el id y pusheamos el objeto pokemon en el array
            });
        })
        .catch( (error) => (console.error(error.message)))
</script>

<template>
    <div class="card-container">
        <PokemonCard v-for="pokemon in state.pokemons" :id="pokemon.id" :key="pokemon.id"></PokemonCard>
    </div>
</template>

<style scoped>
    .card-container {
        display: flex;
        flex-flow: wrap row;
        justify-content: center;
        width: auto;
        gap: 1rem;
    }
</style>