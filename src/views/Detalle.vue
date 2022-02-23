<script setup>
const props = defineProps(['id']);
const id = props.id;
const nombreStats = ["Vida", "Ataque", "Defensa", "At.Especial", "Def.Especial", "Velocidad"];
const porcentajes = []
const stats = []
var color = "";
var genera = "";
const colorTipo = [];
const formas = [];

function cambio() {
    var carta = document.querySelector('.cardd');
    carta.classList.toggle('is-flipped');
}

// Los datos extraidos del metodo fetch se guardarán en la array detalle
const detalle = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((response) => response.json())
    .then((data) => {
        for (let paso = 0; paso < data.types.length; paso++) {
            colorTipo.push(data.types[paso].type.name)
        }
        data.stats.forEach(stat => {
            stats.push(stat.base_stat)
        })
        return data;
    })
    .catch((error) => (console.error(error.message)))

const dataEspecie = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + id)
    .then((response) => response.json())
    .then((res) => {
        color = "var(--" + res.color.name + ")"
        genera = res.genera[5].genus
        for (let i = 0; i < res.varieties.length; i++) {
            formas.push(res.varieties[i].pokemon.name)
        }
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
        <div class="row justify-content-center">
            <h1 class="text-capitalize">{{ detalle.name }}</h1>
            <div>
                <span class="text-capitalize text-white bg-color rounded-3 p-1">{{ genera }}</span>
            </div>
            <div class="col-12 col-lg-4 mt-3">
                <div class="row">
                    <label class="col-6 text-end pe-3 fw-bold">ID</label>
                    <p class="col-6 text-start">{{ id }}</p>
                </div>
                <div class="row">
                    <label class="col-6 text-end pe-3 fw-bold">Altura</label>
                    <p class="col-6 text-start">{{ detalle.height / 10 }}m</p>
                </div>
                <div class="row">
                    <label class="col-6 text-end pe-3 fw-bold">Peso</label>
                    <p class="col-6 text-start">{{ detalle.weight / 10 }}kg</p>
                </div>
                <div class="row">
                    <label class="col-6 text-end pe-3 fw-bold">Habilidades</label>
                    <div class="col-3" v-for="habilidad in detalle.abilities" :key="id">
                        <p
                            class="text-start text-white bg-color p-1 me-3 rounded-3 text-capitalize"
                        >{{ habilidad.ability.name }}</p>
                    </div>
                </div>
                <div class="row">
                    <label class="col-6 text-end pe-3 fw-bold">Tipo</label>
                    <div class="col-3" v-for="tipo in detalle.types" :key="id">
                        <p
                            :class="tipo.type.name"
                            class="text-start text-white p-1 me-3 rounded-3 text-capitalize"
                        >{{ tipo.type.name }}</p>
                    </div>
                </div>
                <div class="row">
                    <label class="col-6 text-end pe-3 fw-bold">Forma</label>
                    <p
                        class="col-2 text-start text-capitalize"
                        v-for="forma in formas"
                        :key="id"
                    >{{ forma }}</p>
                </div>
            </div>

            <div class="col-12 col-lg-4 justify-content-center">
                <div class="card border-0">
                    <div class="card-body">
                        <img
                            id="imgPokemon"
                            :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + id + '.png'"
                            :alt="'foto de ' + detalle.name"
                        />
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-4 mt-5">
                <div class="row" v-for="(stat, index) in stats" :key="index">
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
                        >{{ stat }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="scene">
        <div class="cardd" @click="cambio">
            <div id="fron" class="cardd__face card__face--front">
                
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
            <div id="ba" class="cardd__face card__face--back">
                
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    border: solid 2px #dddddd;
    transition: 0.4s;
}

#fron {
    background-color: red;
    color: white;
}
.scene {
  width: 200px;
  height: 260px;
  perspective: 600px;
}
.cardd__face {
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}
.cardd {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}

#ba {
    background-color: blue;
    color: white;
  transform: rotateY( 180deg );
}.cardd.is-flipped {
  transform: rotateY(180deg);
}
.card img {
    width: 100%;
    max-height: auto;
}
.progress-bar,
.bg-color {
    background-color: v-bind("color");
}
.row {
    --bs-gutter-x: 0rem;
}
#imgPokemon {
    width: 25rem;
}

@media (max-width: 768px) {
    #imgPokemon {
        width: 20rem;
    }
}
</style>
