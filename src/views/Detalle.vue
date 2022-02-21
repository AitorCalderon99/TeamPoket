<script setup>
import { reactive } from 'vue';
const props = defineProps(['id']);
const id = props.id;

// Los datos extraidos del metodo fetch se guardarán en la array state.detalle
const state = reactive({
    detalle: []
});

fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((response) => response.json())
    .then((data) => (state.detalle = data))
    .catch((error) => (console.error(error.message)))
</script>

<template>
    <div class="container">
        <div class="d-flex justify-content-center">
            <div></div>
            <div class="row">
                <div class="col-12 col-lg-4">detalles</div>
                <div class="col-12 col-lg-4">
                    <div class="card border-0">
                        <h1>{{ state.detalle.name }}</h1>
                        <div class="card-body">
                            <img
                                :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + id + '.png'"
                                :alt="'foto de ' + state.detalle.name"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="progress">
                        <div
                            class="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            id="tamañoBarra"
                        >{{ state.detalle.stats[0].base_stat }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <pre>{{ id }}</pre> -->
    <template>
        <div>
            <pre>{{ id }}</pre>
            <img
                :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + id + '.png'"
                :alt="'foto de ' + state.detalle.name"
            />
        </div>
    </template>
