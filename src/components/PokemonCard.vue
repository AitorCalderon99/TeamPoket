<script setup>
    import { reactive } from 'vue';

    const url = "https://pokeapi.co/api/v2/pokemon/"
    const props = defineProps(['id']);
    const id = props.id;
    const state = reactive({
        detalle:[]
    });

    fetch("https://pokeapi.co/api/v2/pokemon/"+id)
        .then( (response) => response.json() )
        .then( (data) => (state.detalle=data) )
        .catch( (error) => (console.error(error.message)))
</script>

<template>
    <div class="card">
        <h1>{{state.detalle.name}}</h1>
        <img :src="state.detalle.sprites.front_default" alt="">
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