<template>
  <div class="space-y-4">
    <div v-for="(cat, idx) in skills" :key="idx" class="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 avoid-break">
      <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">{{ cat.name }}</h3>
      <div class="flex flex-wrap gap-2">
        <span v-for="(s, i) in cat.items" :key="i" class="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700">{{ s }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkillCategory } from '../cv/data';

defineProps<{ skills: SkillCategory[] }>();
</script>
