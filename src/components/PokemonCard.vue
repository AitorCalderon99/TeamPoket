<script setup>
    import { reactive } from 'vue';
    const props = defineProps(['id']);
    const id = props.id;

    // Los datos extraidos del metodo fetch se guardarán en la array state.detalle
    const state = reactive({
        detalle:[],
        tipos:[]
    });

    fetch("https://pokeapi.co/api/v2/pokemon/"+id)
        .then( (response) => response.json() )
        .then( (data) => {
            // Poner la primera letra del nombre en mayus
            data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
            state.detalle=data
            for(let paso=0; paso<state.detalle.types.length; paso++){
                state.tipos.push("./Tipos/"+state.detalle.types[paso].type.name+".svg")
            }
        })
        .catch( (error) => (console.error(error.message)))
</script>

<template>
    <div class="card">
        <router-link :to="{name: 'Detalle', params: {id: id}}">
            <h1>{{state.detalle.name}}</h1>
            <img class="pokemon" :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+id+'.png'" :alt="'foto de '+state.detalle.name">
            <div class="cajatipos" >
                <img class="tipos" v-for="tipo in state.tipos" :key="tipo.slot" :src="tipo">
            </div>
        </router-link>
    </div>
</template>

<style scoped>
    a{
        text-decoration: none;
        color: black;
    }
    .card{
        border: solid 2px #dddddd;
        width: 15rem;
        transition: 0.4s;
    }

    .card:hover{
        transform: scale(1.3);
        z-index: 3;
    }

    .pokemon {
        width: 100%;
        max-height: auto;
    }

    .cajatipos{
        width: 100%;
        float: left;
    }

    .tipos{
        width: 25%;
        margin-left: 1em;
        margin-right: 1em;
        max-height: auto;
    }
</style>