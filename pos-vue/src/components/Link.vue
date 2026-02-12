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
    class="rounded bg-green-400 hover:bg-green-500 font-bold py-2 px-10 transition-all duration-500 ease-in-out"
    :to="{ name: to }"
  >
    <slot></slot>
  </RouterLink>
</template>
