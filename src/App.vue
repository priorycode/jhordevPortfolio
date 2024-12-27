<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';

const route = useRoute();
const showHeader = ref(true);

watch(route, (newRoute) => {
  // Actualiza `showHeader` según la nueva ruta
  showHeader.value = !newRoute.path.startsWith('/admin/');
});
</script>

<template>
  <SpeedInsights />
  <!-- Mostrar el Header solo si `showHeader` es verdadero -->
  <Header v-if="showHeader" />
  <div id="app" class="contenedor">
    <!-- Contenedor principal para el contenido de la vista -->
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
