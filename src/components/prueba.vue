<script>
export default{
    data() {
        return {
            pokemons: []
        }
    },
    mounted(){
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json)
            .then(datos => (this.pokemons = datos.data))
    }
}
</script>

<template>
    <h1>Hola</h1>
    <ul>
        <li v-for="(pokemon, key) in pokemons" :key="key">{{pokemon.name}}</li>
    </ul>
</template>