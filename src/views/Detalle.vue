<script setup>
    import { reactive } from 'vue';
    
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
    <div>
        <pre>{{id}}</pre>
        <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+id+'.png'" :alt="'foto de '+state.detalle.name">

    </div>
</template>