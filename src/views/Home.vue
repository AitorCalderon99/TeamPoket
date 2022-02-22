<script setup>
import { defineAsyncComponent } from 'vue';
import Loading from '../components/Loading.vue'

const PokemonCard = defineAsyncComponent({
    loader: () => import("../components/PokemonCard.vue"),
    loadingComponent: Loading,
    // mientras estan cargando las tarjetas carga el componente Loading
    delay: 200,
    suspensible: false
})

const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach(pokemon => {
            pokemon.id = pokemon.url.split('/').slice(-2, -1).pop()
            delete pokemon.url
            // url ahora es el id y pusheamos el objeto pokemon en el array
        })
        return data.results;
    })
    .catch((error) => (console.error(error.message)))
</script>

<template>
    <div class="card-container">
        <TransitionGroup appear>
            <PokemonCard v-for="pokemon in pokemons" :id="pokemon.id" :key="pokemon.id"></PokemonCard>
        </TransitionGroup>
    </div>
</template>

<style scoped>
.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    justify-content: center;

    width: 100%;
    gap: 1rem;
    margin: 1rem 0;
}
</style>