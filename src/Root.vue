<template>
  <!-- Root holds the RouterView so we can react to the '/print' route globally -->
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

function applyPrintPreview(active: boolean) {
  const el = document.documentElement;
  if (active) el.classList.add('print-preview');
  else el.classList.remove('print-preview');
}

function onAfterPrint() {
  // Remove preview styles and navigate back to the main view
  applyPrintPreview(false);
  if (router.currentRoute.value.path === '/print') {
    router.replace('/');
  }
  window.removeEventListener('afterprint', onAfterPrint);
}

function onEnterPrintRoute() {
  applyPrintPreview(true);
  // Open native print preview to ensure correct pagination and margins
  setTimeout(() => {
    window.addEventListener('afterprint', onAfterPrint);
    window.print();
  }, 50);
}

function onLeavePrintRoute() {
  applyPrintPreview(false);
}

function handleRouteChange() {
  if (route.path === '/print') onEnterPrintRoute();
  else onLeavePrintRoute();
}

onMounted(() => {
  handleRouteChange();
});

watch(() => route.path, () => {
  handleRouteChange();
});
</script>

<style scoped>
/* Nothing here. Global print/preview styles are in styles.css */
</style>
