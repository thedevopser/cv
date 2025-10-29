<template>
  <button
    class="px-3 py-1.5 rounded-md text-sm border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
    type="button"
    @click="toggle()"
    :aria-pressed="isDark"
    aria-label="Basculer le thème"
  >
    <span v-if="isDark">🌙 Sombre</span>
    <span v-else>☀️ Clair</span>
  </button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
  storageKey: 'cv-theme',
  valueDark: true,
  valueLight: false,
  selector: 'html',
  attribute: 'class',
  onChanged(dark) {
    const html = document.documentElement;
    if (dark) html.classList.add('dark');
    else html.classList.remove('dark');
  },
});

const toggle = useToggle(isDark);
</script>
