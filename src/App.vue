<template>
  <div class="min-h-full">
    <header class="no-print sticky top-0 z-10 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 class="text-lg font-semibold tracking-tight">CV — Sylvain ANGLADE</h1>
        <div class="flex items-center gap-2">
          <RouterLink
            class="px-3 py-1.5 rounded-md text-sm border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            to="/print"
          >Aperçu impression</RouterLink>
          <ThemeToggle />
          <ExportPdfButton :filename="pdfFilename" selector="#cv-root" />
        </div>
      </div>
    </header>

    <main id="cv-root" class="max-w-5xl mx-auto px-4 py-8 print:px-0 print:py-0">
      <Hero :profile="cv.profile" />

      <div class="grid md:grid-cols-3 gap-6 mt-8">
        <section class="md:col-span-2 space-y-4">
          <SectionTitle>Expériences</SectionTitle>
          <ExperienceTimeline :experiences="cv.experiences" />
        </section>
        <aside class="space-y-6">
          <SectionTitle>Compétences</SectionTitle>
          <SkillsMatrix :skills="cv.skills" />

          <SectionTitle>Formations</SectionTitle>
          <EducationList :education="cv.education" />

          <SectionTitle>Certifications</SectionTitle>
          <CertificationsList :certifications="cv.certifications" />
        </aside>
      </div>
    </main>

    <footer class="no-print border-t border-gray-200 dark:border-gray-800 mt-10 py-6 text-center text-sm text-gray-500">
      Généré avec Vue 3 + TailwindCSS. Thème clair/sombre et export PDF.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ThemeToggle from './components/ThemeToggle.vue';
import ExportPdfButton from './components/ExportPdfButton.vue';
import Hero from './components/Hero.vue';
import SectionTitle from './components/SectionTitle.vue';
import ExperienceTimeline from './components/ExperienceTimeline.vue';
import SkillsMatrix from './components/SkillsMatrix.vue';
import EducationList from './components/EducationList.vue';
import CertificationsList from './components/CertificationsList.vue';
import cv from './cv/data';

const pdfFilename = `CV_Sylvain_ANGLADE.pdf`;
</script>

<style scoped>
/****** You can add component-scoped styles here if needed ******/
</style>
