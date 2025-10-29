<template>
  <div class="space-y-3">
    <div v-if="!certifications.length" class="text-sm text-gray-500">Aucune certification pour le moment.</div>
    <div v-for="(c, idx) in certifications" :key="idx" class="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 avoid-break">
      <div class="flex items-baseline justify-between gap-3">
        <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-100">{{ c.name }}</h3>
        <span class="text-xs text-gray-500">{{ c.year }}</span>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-300">{{ c.issuer }}</p>
      <a v-if="c.url" :href="c.url" target="_blank" rel="noreferrer" class="text-xs underline">Détails</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Certification } from '../cv/data';

defineProps<{ certifications: Certification[] }>();
</script>
