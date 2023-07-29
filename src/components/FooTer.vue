<script>
export default {
  name: 'FooTer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer class="bg-gray-900 text-green-400 text-sm font-mono p-4 flex flex-col sm:flex-row justify-center items-center">
    <p>&copy; {{ currentYear }} TheDevOpser. Tous droits réservés.</p>
  </footer>
</template>

<style scoped>
</style>
