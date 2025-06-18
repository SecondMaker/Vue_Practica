import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRegistrarStore = defineStore('registrar', () => {
  const nombre = ref('')
  const email = ref('')
  const guardarRegistro = (nombreFormulario, emailFormulario) => {
    console.log(nombreFormulario)
    console.log(emailFormulario)
    nombre.value = nombreFormulario
    email.value = emailFormulario
  }
  return { nombre, email, guardarRegistro }
})
