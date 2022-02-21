<script setup>
    import { reactive } from 'vue';
    const props = defineProps(['id']);
    const id = props.id;

    // Los datos extraidos del metodo fetch se guardarán en la array state.detalle
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
        <router-link :to="{name: 'Detalle', params: {id: id}}">
            <h1>{{state.detalle.name}}</h1>
            <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+id+'.png'" :alt="'foto de '+state.detalle.name">
        </router-link>
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