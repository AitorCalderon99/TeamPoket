<script setup>
import { defineAsyncComponent, reactive, ref, onMounted } from 'vue';
import Loading from '../components/Loading.vue'

const allPokemons = reactive([]);
const scrollComponent= ref(null)
const url = ref('https://pokeapi.co/api/v2/pokemon-species?limit=50')

const loadPokemons = async() => {
  await fetch(url.value).then((response) => response.json())
    .then((data) => {
      data.results.forEach(pokemon => {
        pokemon.id = pokemon.url.split('/').slice(-2, -1).pop()
        delete pokemon.url
        allPokemons.push(pokemon);
        url.value = data.next;
      })
    })
}

const nextPokemons = () => {
  let element = scrollComponent.value
  if ( element.getBoundingClientRect().bottom < window.innerHeight ) loadPokemons()
}

const PokemonCard = defineAsyncComponent({
  loader: () => import("../components/PokemonCard.vue"),
  loadingComponent: Loading,
  delay: 100,
})

onMounted(() => {
  window.addEventListener("scroll", nextPokemons)
  loadPokemons();
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