<script setup>
import { useAppointmentsStore } from "@/stores/appointments";
import { formatCurrency } from "@/helpers";
const appointments = useAppointmentsStore();
defineProps({
  service: {
    type: Object,
  },
});
</script>
<template>
  <div
    class="border border-gray-600 rounded-lg p-5 flex justify-between items-center"
  >
    <div>
      <p class="text-2xl font-extrabold text-white">{{ service.name }}</p>
      <p class="text-3xl font-black text-blue-500">
        {{ formatCurrency(service.price) }}
      </p>
    </div>
    <button
      type="button"
      class="inline-flex items-center rounded-md bg-red-600 text-white font-bold p-2 uppercase shadow-sm ring-1 ring-inset ring-red-400 hover:bg-red-700 transition-all duration-300"
      @click="appointments.onServiceSelected(service)"
    >
      Eliminar
    </button>
  </div>
</template>
