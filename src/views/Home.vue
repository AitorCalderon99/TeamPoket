<script setup>
    import PokemonCard from '../components/PokemonCard.vue';

    const getPokemons = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await res.json();
        return data

    }
        
    const pokemons = getPokemons

    console.log(pokemons);


</script>

<template>
    <div class="card-container">
        <h1>cartas</h1>
        <PokemonCard></PokemonCard>
    </div>
</template>

<style>
    .card-container {
        display: flex;
        width: auto;
    }
</style>