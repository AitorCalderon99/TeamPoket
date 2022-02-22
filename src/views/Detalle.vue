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
            <div class="d-flex align-items-center">
                <div class="col-12 col-lg-4">
                    <div class="row">
                        <label class="col-3">Vida</label>
                        <div class="progress col-8">
                            <div
                                class="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="45"
                                aria-valuemin="0"
                                aria-valuemax="65"
                                style="width: 69%"
                            >{{ state.detalle.stats[0].base_stat }}</div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-3">Ataque</label>
                        <div class="progress col-8">
                            <div
                                class="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="49"
                                aria-valuemin="0"
                                aria-valuemax="65"
                                style="width: 73%"
                            >{{ state.detalle.stats[1].base_stat }}</div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-3">Defensa</label>
                        <div class="progress col-8">
                            <div
                                class="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="49"
                                aria-valuemin="0"
                                aria-valuemax="65"
                                style="width: 73%"
                            >{{ state.detalle.stats[2].base_stat }}</div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-3">At. especial</label>
                        <div class="progress col-8">
                            <div
                                class="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="65"
                                aria-valuemin="0"
                                aria-valuemax="65"
                                style="width: 100%"
                            >{{ state.detalle.stats[3].base_stat }}</div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-3">Def. especial</label>
                        <div class="progress col-8">
                            <div
                                class="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="65"
                                aria-valuemin="0"
                                aria-valuemax="65"
                                style="width: 100%"
                            >{{ state.detalle.stats[4].base_stat }}</div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-3">Velocidad</label>
                        <div class="progress col-8">
                            <div
                                class="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="45"
                                aria-valuemin="0"
                                aria-valuemax="65"
                                style="width: 69%"
                            >{{ state.detalle.stats[5].base_stat }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <!-- <pre>{{ id }}</pre> -->
    </div>
</template>
<style scoped>
.card {
    border: solid 2px #dddddd;
    width: 20rem;
    transition: 0.4s;
}

.card img {
    width: 100%;
    max-height: auto;
}
.progress-bar {
    background-color: green;
}
.row {
    --bs-gutter-x: 0rem;
}
</style>
