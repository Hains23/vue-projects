<script setup>
import { RouterLink } from "vue-router";

defineProps({
  to: {
    type: String,
  },
});
</script>
<template>
  <RouterLink
    :to="{ name: to }"
    class="block md:inline-block rounded bg-blue-600 py-2 px-2 uppercase text-white font-bold text-sm shadow hover:bg-blue-700"
    ><slot></slot
  ></RouterLink>
</template>
