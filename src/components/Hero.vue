<template>
  <section class="bg-gradient-to-b from-primary-50/70 dark:from-primary-900/20 to-transparent rounded-xl p-6 border border-gray-200 dark:border-gray-800 avoid-break">
    <div class="flex flex-col sm:flex-row sm:items-center gap-6">
      <div class="flex-1">
        <h1 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ profile.name }}</h1>
        <p class="mt-1 text-primary-700 dark:text-primary-300 font-medium">{{ profile.title }}</p>
        <div class="mt-3 text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <div class="flex flex-wrap gap-x-3 gap-y-1">
            <span>📍 {{ profile.location }}</span>
            <span v-if="profile.phone">• 📞 {{ profile.phone }}</span>
            <span>• 📧 <a class="underline" :href="`mailto:${profile.email}`">{{ profile.email }}</a></span>
          </div>
          <div class="flex flex-wrap gap-3">
            <a v-if="profile.linkedin" class="underline" :href="profile.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
            <a v-if="profile.github" class="underline" :href="profile.github" target="_blank" rel="noreferrer">GitHub</a>
            <a v-if="profile.website" class="underline" :href="profile.website" target="_blank" rel="noreferrer">Site</a>
          </div>
        </div>
      </div>
      <img v-if="profile.photoUrl" :src="profile.photoUrl" alt="Photo de profil" class="w-28 h-28 rounded-xl object-cover border border-gray-200 dark:border-gray-700" />
    </div>
    <p class="mt-5 text-gray-700 dark:text-gray-200 leading-relaxed">{{ profile.summary }}</p>
  </section>
</template>

<script setup lang="ts">
import type { Profile } from '../cv/data';

defineProps<{ profile: Profile }>();
</script>
