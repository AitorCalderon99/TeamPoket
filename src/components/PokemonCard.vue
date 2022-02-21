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
        .then( (data) => {
            // Poner la primera letra del nombre en mayus
            data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
            state.detalle=data
        })
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
    a{
        text-decoration: none;
        color: black;
    }
    .card{
        border: solid 2px #dddddd;
        width: 20rem;
        transition: 0.4s;
    }

    .card:hover{
        transform: scale(1.3);
        z-index: 3;
    }

    .card img {
        width: 100%;
        max-height: auto;
    }
</style>