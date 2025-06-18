<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="nombre"></label>
        <Field
          v-model="nombre"
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Ingresa tu nombre"
        />
        <ErrorMessage name="nombre" />
      </div>
      <div class="form">
        <label for="correo"></label>
        <Field
          v-model="email"
          type="email"
          name="correo"
          id="correo"
          placeholder="Ingresa tu email"
        />
        <ErrorMessage name="correo" />
      </div>
      <div class="form">
        <button type="submit">Enviar</button>
      </div>
    </Form>
  </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../schemas/validationSchema'
import { useRegistrarStore } from '../stores/registrarStores'
import { ref } from 'vue'

const nombre = ref('')
const email = ref('')
const StoreRegistrar = useRegistrarStore(nombre.value, email.value)
const onSubmit = () => {
  StoreRegistrar.guardarRegistro(nombre.value, email.value)
}
// const onSubmit = () => {
//   console.log('Formulario enviado')
//   StoreRegistrar.guardarRegistro()
// }
</script>
<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
