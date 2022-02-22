<script setup>
const props = defineProps(['id']);
const id = props.id;

var nombreStats = ["Vida", "Ataque", "Defensa", "At.Especial", "Def.Especial", "Velocidad"];

// Los datos extraidos del metodo fetch se guardarán en la array detalle
const detalle = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => (console.error(error.message)))

const color = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + id)
    .then((response) => response.json())
    .then((res) => {
        res.color.name = "var(--"+res.color.name+")"
        return res.color.name
    })
</script>

<template>
    <div class="container">
        <pre>{{color}}</pre>
        <div class="row">
            <div class="col-12 col-lg-4">
                <div class="row">
                    <label class="col-3 text-end pe-3">ID</label>
                    <p class="col-8 text-start">{{ id }}</p>
                </div>
                <div class="row">
                    <label class="col-3 text-end pe-3">Altura</label>
                    <p class="col-8 text-start">{{ detalle.height / 10 }}m</p>
                </div>
                <div class="row">
                    <label class="col-3 text-end pe-3">Peso</label>
                    <p class="col-8 text-start">{{ detalle.weight / 10 }}kg</p>
                </div>
                <div class="row">
                    <label class="col-3 text-end pe-3">Habilidades</label>
                    <p
                        class="col-2 text-start"
                        v-for="habilidad in detalle.abilities"
                        :key="id"
                    >{{ habilidad.ability.name }}</p>
                </div>
                <div class="row">
                    <label class="col-3 text-end pe-3">Tipo</label>
                    <p
                        class="col-2 text-start"
                        v-for="tipo in detalle.types"
                        :key="id"
                    >{{ tipo.type.name }}</p>
                </div>
                <div class="row">
                    <label class="col-3 text-end pe-3">Forma</label>
                    <p
                        class="col-2 text-start"
                        v-for="forma in detalle.forms"
                        :key="id"
                    >{{ forma.name }}</p>
                </div>
            </div>

            <div class="col-12 col-lg-4">
                <div class="card border-0">
                    <h1>{{ detalle.name }}</h1>
                    <div class="card-body">
                        <img
                            :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + id + '.png'"
                            :alt="'foto de ' + detalle.name"
                        />
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-4">
                <div class="row">
                    <label class="col-4 text-end pe-3">{{ nombreStats[0] }}</label>
                    <div class="progress col-8">
                        <div
                            class="progress-bar progress-bar-striped progress-bar-animated"
                            id="prueba"
                            role="progressbar"
                            aria-valuenow="45"
                            aria-valuemin="0"
                            aria-valuemax="65"
                            style="width: 69%"
                        >{{ detalle.stats[0].base_stat }}</div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-4 text-end pe-3">Ataque</label>
                    <div class="progress col-8">
                        <div
                            class="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="49"
                            aria-valuemin="0"
                            aria-valuemax="65"
                            style="width: 73%"
                        >{{ detalle.stats[1].base_stat }}</div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-4 text-end pe-3">Defensa</label>
                    <div class="progress col-8">
                        <div
                            class="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="49"
                            aria-valuemin="0"
                            aria-valuemax="65"
                            style="width: 73%"
                        >{{ detalle.stats[2].base_stat }}</div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-4 text-end pe-3">At. especial</label>
                    <div class="progress col-8">
                        <div
                            class="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="65"
                            aria-valuemin="0"
                            aria-valuemax="65"
                            style="width: 100%"
                        >{{ detalle.stats[3].base_stat }}</div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-4 text-end pe-3">Def. especial</label>
                    <div class="progress col-8">
                        <div
                            class="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="65"
                            aria-valuemin="0"
                            aria-valuemax="65"
                            style="width: 100%"
                        >{{ detalle.stats[4].base_stat }}</div>
                    </div>
                </div>
                <div class="row">
                    <label class="col-4 text-end pe-3">Velocidad</label>
                    <div class="progress col-8">
                        <div
                            class="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="45"
                            aria-valuemin="0"
                            aria-valuemax="65"
                            style="width: 69%"
                        >{{ detalle.stats[5].base_stat }}</div>
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
    background-color: v-bind("color");
}
.row {
    --bs-gutter-x: 0rem;
}
</style>
