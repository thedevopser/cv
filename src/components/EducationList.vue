<template>
  <div class="space-y-3">
    <div v-for="(e, idx) in education" :key="idx" class="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 avoid-break">
      <div class="flex items-baseline justify-between gap-3">
        <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-100">{{ e.school }}</h3>
        <span class="text-xs text-gray-500">{{ e.year }}</span>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-300">{{ e.degree }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Education } from '../cv/data';

defineProps<{ education: Education[] }>();
</script>
