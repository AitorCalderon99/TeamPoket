<script setup>
    const props = defineProps(['id']);
    const id = props.id;
    const tipos=[];

    const detalle = await fetch("https://pokeapi.co/api/v2/pokemon/"+id)
        .then( (response) => response.json() )
        .then( (data) => {
            // Poner la primera letra del nombre en mayus
            data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
            for(let paso=0; paso<data.types.length; paso++){
                tipos.push("./Tipos/"+data.types[paso].type.name+".svg")
            }
            return data
        })
        .catch( (error) => (console.error(error.message)))
</script>

<template>
    <div class="card">
        <router-link :to="{name: 'Detalle', params: {id: id}}">
            <pre>{{id}}</pre>
            <h1>{{detalle.name}}</h1>
            <img class="pokemon" :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+id+'.png'" :alt="'foto de '+detalle.name">
            <div class="cajatipos" >
                <img class="tipos" v-for="tipo in tipos" :key="tipo.slot" :src="tipo">
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
        outline: none;
        width: 20rem;
        margin: auto;
        padding: .3rem;
        transition: 0.1s;
    }

    .card:hover{
        outline: solid 2px #dddddd;
    }

    .card:active {
        outline: solid 4px #bbbbbb;
        box-shadow: 0px 0px 10px 0px #aaaaaa;
    }

    .pokemon {
        width: 100%;
        max-height: auto;
    }

    .cajatipos{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .tipos{
        width: 25%;
        max-height: auto;
    }
</style>