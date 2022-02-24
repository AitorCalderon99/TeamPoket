<script setup>
import VueAudio from "vue-audio";

const props = defineProps(['id']);
const id = props.id;

function getAudio(id) {
  return "cries/" + id + ".mp3";
}

</script>

<template>
  <VueAudio
      class="pokemon-cry"
      v-if="id"
      :file="getAudio(id)"
  ></VueAudio>
</template>

<style scoped>
.pokemon-cry {
  display: inline-block;
}

</style>