<script>
import axios from "axios";
export default{
    data() {
        return {
            pokemons: []
        };
    },
    mounted(){
        this.cargar();
    },
    methods: {
        cargar(){
            axios.get('https://pokeapi.co/api/v2/pokemon', {
                responseType: 'json'
            })
            .then(res => {
                if(res.status==200){
                    this.pokemons = res.data.results;
                }
            })
            .catch(function(error){
                console.log(error)
            })
        }
    }
};
</script>

<template>
    <div class="card-container">
        <div class="card" v-for="(pokemon, key) in pokemons" :key="key">
            <h1>{{pokemon.name}}</h1>
            <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+(key+1)+'.png'" alt="">
            <p>{{pokemon.base}}</p>
        </div>
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

    .card{
        border: solid 2px #dddddd;
        width: 15rem;
    }

    .card img {
        width: 100%;
        max-height: auto;
    }
</style>