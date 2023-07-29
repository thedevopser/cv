<template>
  <Navbar/>
  <div class="flex flex-grow justify-center items-center">
    <router-view></router-view>
  </div>
  <FooTer/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FooTer from "@/components/FooTer.vue";

export default {
  name: 'App',
  components: {
    FooTer,
    Navbar
  }
}
</script>

<style scoped>
</style>
