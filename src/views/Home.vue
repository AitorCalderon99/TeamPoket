<script setup>
import {defineAsyncComponent, reactive, ref} from 'vue'
import Loading from '../components/Loading.vue'
import {onMounted} from "vue"
import axios from "axios"

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

const url = 'https://pokeapi.co/api/v2/pokemon?offset='
let numb = 0
const allPokemons = reactive([])
const scrollComponent = ref(null)

const loadPokemon = () => {
  axios.get(url + numb).then(response => {
        response.data.results.forEach(pokemon => {
            pokemon.id = pokemon.url.split('/').slice(-2, -1).pop()
            delete pokemon.url
            allPokemons.push(pokemon);
        })
    numb += 20;
  })
}

const handleScroll = (e) => {
    let element = scrollComponent.value
    if ( element.getBoundingClientRect().bottom < window.innerHeight ) {
        loadPokemon
    }
}

const PokemonCard = defineAsyncComponent({
    loader: () => import("../components/PokemonCard.vue"),
    loadingComponent: Loading,
    // mientras estan cargando las tarjetas carga el componente Loading
    delay: 200,
    suspensible: false
})
</script>

<template>
  <div class="card-container" ref="scrollComponent">
      <PokemonCard v-for="pokemon in allPokemons" :id="pokemon.id" :key="pokemon.id"></PokemonCard>
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