<script setup>
import { useUserStore } from "@/stores/user";
const user = useUserStore();
</script>
<template>
  <div class="flex justify-between">
    <h1 class="text-2xl lg:text-6xl font-black text-white">App Salon</h1>
    <div class="flex flex-col space-y-5">
      <div class="flex gap-2 items-center">
        <p class="text-white text-rigth">Hola: {{ user.getUserName }}</p>
        <button
          type="button"
          class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-bold rounded-lg transition-all duration-300"
          @click="user.logout"
        >
          Cerrar Sesi&oacute;n
        </button>
      </div>
      <nav class="flex gap-2 items-center justify-end">
        <RouterLink
          :to="{ name: 'my-appointments' }"
          class="p-3 text-gray-200 uppercase text-xs font-extrabold rounded-lg"
        >
          Mis Citas
        </RouterLink>
        <RouterLink
          :to="{ name: 'new-appointment' }"
          class="p-3 text-gray-200 uppercase text-xs font-extrabold rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300"
        >
          Nueva Cita
        </RouterLink>
      </nav>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>
