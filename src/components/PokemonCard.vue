<script setup>
    const props = defineProps(['pokemon']);
    const pokemon = props.pokemon;

    fetch(pokemon.url)
        .then( (res) => res.json() )
        .then( (json) => (pokemon.detalle = json) )
        .catch( (error) => (console.error(error.message)))
</script>

<template>
    <div class="card">
        <img :src="pokemon.detalle.sprites.front_default" :alt="'foto de '+pokemon.name">
        <h1>{{pokemon.name}}</h1>
        <!-- <a :href="pokemon.url">link</a> -->
    </div>
</template>

<style>
    .card{
        border: solid 2px #dddddd;
        width: 15rem;
    }

    .card img {
        width: 100%;
        max-height: auto;
    }
</style>