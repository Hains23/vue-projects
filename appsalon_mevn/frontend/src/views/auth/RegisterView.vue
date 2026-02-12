<script setup>
import { inject } from "vue";
import { reset } from "@formkit/vue";
import AuthAPI from "@/api/AuthAPI";

const toast = inject("toast");

const handleSubmit = async ({ password_confirm, ...formData }) => {
  try {
    const { data } = await AuthAPI.register(formData);
    toast.open({
      message: data.msg,
      type: "success",
    });
    reset("registerForm");
  } catch (error) {
    toast.open({
      message: error.response.data.msg,
      type: "error",
    });
  }
};
</script>
<template>
  <h1 class="text-6xl font-extrabold text-white text-center mt-10">
    Crea una cuenta
  </h1>
  <p class="text-2xl text-white text-center my-5">
    Crear una cuenta en AppSalon
  </p>
  <FormKit
    id="registerForm"
    type="form"
    :actions="false"
    incomplete-message="No se pudo enviar, revisa las notificaciones"
    @submit="handleSubmit"
  >
    <FormKit
      type="text"
      label="Nombre"
      name="name"
      placeholder="John Doe"
      validation="required|length:3"
      :validation-messages="{
        required: 'El nombre es obligatorío',
        length: 'El nombre es muy corto',
      }"
    />
    <FormKit
      type="email"
      label="Correo"
      name="email"
      placeholder="correo@ejemplo.com"
      validation="required|email"
      :validation-messages="{
        required: 'El correo es obligatorío',
        email: 'Correo no válido',
      }"
    />
    <FormKit
      type="password"
      label="Contraseña"
      name="password"
      placeholder="Contraseña - Min 8 Caracteres"
      validation="required|length:8"
      :validation-messages="{
        required: 'La contraseña es obligatoría',
        length: 'La contraseña debe contener al menos 8 caracteres de longitud',
      }"
    />
    <FormKit
      type="password"
      label="Confirmar Contraseña"
      name="password_confirm"
      placeholder="Confirmar Tú Contraseña"
      validation="required|confirm"
      :validation-messages="{
        required: 'Confirmar contraseña es obligatoría',
        confirm: 'Las contraseñas no son iguales',
      }"
    />
    <FormKit type="submit">Crear Cuenta</FormKit>
  </FormKit>
</template>
