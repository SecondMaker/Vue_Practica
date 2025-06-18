<template>
  <h1>Hola Mundo</h1>
  <br />
  <p>{{ contador }}</p>
  <br />
  <div>
    <button @click="Sumar">Sumar un numero</button>
    <button @click="Restar">Restar un numero</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const contador = ref(0)
const Sumar = () => {
  contador.value++
}
const Restar = () => {
  contador.value--
}
</script>

<style scoped>
p {
  color: green;
}
</style>
