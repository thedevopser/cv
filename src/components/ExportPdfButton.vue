<template>
  <button
    class="px-3 py-1.5 rounded-md text-sm border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
    type="button"
    @click="exportPdf"
  >
    ⬇️ Export PDF
  </button>
</template>

<script setup lang="ts">
import html2pdf from 'html2pdf.js';

const props = defineProps<{ selector: string; filename?: string }>();

async function exportPdf() {
  const el = document.querySelector(props.selector) as HTMLElement | null;
  if (!el) return;

  // Improve pagination control: honor CSS and avoid splitting common blocks
  const opt = {
    margin: [10, 10, 10, 10], // mm
    filename: props.filename || 'cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: {
      mode: ['css', 'avoid-all', 'legacy'],
      avoid: 'section, aside, .avoid-break',
    },
  } as const;

  await html2pdf().from(el).set(opt as any).save();
}
</script>
