<script setup>
import { useLayout } from "@/layout/composables/layout";
import { onBeforeMount, ref } from "vue";

const { getPrimary, getSurface, isDarkTheme } = useLayout();
</script>

<template>
  <div class="space">
    <h1 class="text-4xl font-bold mb-6" style="color: #899499">Scanner</h1>
  </div>

  <div class="card shadow-md flex justify-center items-center" style="height: 550px;" >
    <!-- Adjust height as needed and center the icon -->
    <span class="pi pi-camera text-6xl" style="font-size: 600px;"></span>
  </div>
</template>

