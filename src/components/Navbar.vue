<template>
  <nav class="bg-gray-900 text-green-400 shadow font-mono">
    <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
      <div class="flex justify-between items-center">
        <div>
          <router-link class="text-xl font-bold md:text-2xl hover:text-gray-200" to="/">$ TheDevOpser@localhost: ~</router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button type="button" class="hover:text-gray-200 focus:outline-none focus:text-gray-200" @click="isOpen = !isOpen">
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H5z"></path>
              <path v-if="isOpen" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div class="md:flex items-center" :class="{ 'hidden': !isOpen, 'block': isOpen }">
        <div class="flex flex-col md:flex-row md:mx-6">
          <router-link class="my-1 text-sm font-medium hover:text-gray-200 md:mx-4 md:my-0" to="/experience">Mon expérience</router-link>
          <router-link class="my-1 text-sm font-medium hover:text-gray-200 md:mx-4 md:my-0" to="/about">A propos de moi</router-link>
          <router-link class="my-1 text-sm font-medium hover:text-gray-200 md:mx-4 md:my-0" to="/portfolio">Portfolio</router-link>
          <router-link class="my-1 text-sm font-medium hover:text-gray-200 md:mx-4 md:my-0" to="/contact">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
</style>
