<template>
  <div class="space-y-4">
    <div
      v-for="(exp, idx) in experiences"
      :key="idx"
      class="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 avoid-break"
    >
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 class="text-lg font-semibold">{{ exp.role }}</h3>
        <span class="text-sm text-gray-500">— {{ exp.company }}</span>
      </div>
      <div class="text-xs text-gray-500 mt-1">
        <span>{{ exp.start }} – {{ exp.end }}</span>
        <span v-if="exp.location"> • {{ exp.location }}</span>
      </div>
      <ul class="mt-3 ml-5 list-disc text-sm space-y-1">
        <li v-for="(a, i) in exp.achievements" :key="i">{{ a }}</li>
      </ul>
      <div v-if="exp.tech && exp.tech.length" class="mt-3 flex flex-wrap gap-2">
        <span v-for="t in exp.tech" :key="t" class="text-xs px-2 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200/60 dark:border-primary-800/60">
          {{ t }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '../cv/data';

defineProps<{ experiences: Experience[] }>();
</script>
