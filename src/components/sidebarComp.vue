<template>
  <div class="sidebar">
    <h2>Menu lateral</h2>
    <ul>
      <li>
        <router-link to="/contador">Contador</router-link>
      </li>
      <li>
        <router-link to="/listaTareas">Lista de Tareas</router-link>
      </li>
    </ul>
  </div>
</template>
<script setup></script>
<style>
.sidebar {
  width: 200px;
  background-color: #66c2ff;
  padding: 20px;
}
</style>
