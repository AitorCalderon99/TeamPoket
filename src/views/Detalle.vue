<script setup>
const props = defineProps(['id']);
const id = props.id;
const nombreStats = ["Vida", "Ataque", "Defensa", "At.Especial", "Def.Especial", "Velocidad"];
const porcentajes = []
const stats = []

// Los datos extraidos del metodo fetch se guardarán en la array detalle
const detalle = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((response) => response.json())
    .then((data) => {
        data.stats.forEach(stat => {
            stats.push(stat.base_stat)
        })
        return data
    })
    .catch((error) => (console.error(error.message)))

const color = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + id)
    .then((response) => response.json())
    .then((res) => {
        res.color.name = "var(--"+res.color.name+")"
        return res.color.name
    })

const findMax = arr => {
    let max = arr[0]
    for(let i = 0 ; i < arr.length ; i++)
        if(arr[i] > max) max = arr[i]
    return max
}

const maxStat = findMax(stats)

stats.forEach(stat => {
    porcentajes.push( "width:"+(stat / maxStat) *100+"%" )
})

</script>

<template>
    <div class="container">
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
                    <!-- Nombre en mayúsculas -->
                    <h1>{{ detalle.name[0].toUpperCase()+detalle.name.slice(1) }}</h1>
                    <div class="card-body">
                        <img
                            :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + id + '.png'"
                            :alt="'foto de ' + detalle.name"
                        />
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-4">
                <div class="row mb-3" v-for="(stat, index) in detalle.stats" :key="index">
                    <label class="col-4 text-end pe-3">{{ nombreStats[index] }}</label>
                    <div class="progress col-8">
                        <div
                            class="progress-bar progress-bar-striped progress-bar-animated"
                            id="prueba"
                            role="progressbar"
                            aria-valuenow="45"
                            aria-valuemin="0"
                            aria-valuemax="65"
                            :style="porcentajes[index]"
                        >{{ stat.base_stat }}</div>
                    </div>
                </div>
            </div>
        </div>
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
