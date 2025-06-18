<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>Email: {{ email }}</h3>
    <ul>
      <li>
        <router-link to="/contador">Contador</router-link>
      </li>
      <li>
        <router-link to="/listaTareas">Lista de Tareas</router-link>
      </li>
      <li>
        <router-link to="/registro">Registro</router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStores'
import { ref, watch } from 'vue'

const registrarStore = useRegistrarStore()
const nombre = ref(registrarStore.nombre.value)
const email = ref(registrarStore.email.value)

watch(
  () => registrarStore.nombre,
  (nuevoValor) => {
    nombre.value = nuevoValor
  },
)

watch(
  () => registrarStore.email,
  (nuevoValor) => {
    email.value = nuevoValor
  },
)
</script>

<style>
.sidebar {
  width: 200px;
  background-color: #66c2ff;
  padding: 20px;
}
</style>
