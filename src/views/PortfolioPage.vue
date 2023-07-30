<template>
  <div class="flex flex-col text-green-400 w-11/12 space-y-4">
    <h2 class="text-3xl font-bold mb-10">Mes réalisations <span class="cursor"></span></h2>
    <div class="flex flex-wrap items-stretch p-4">
      <div
          v-for="project in projects"
          :key="project.id"
          class="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 h-full"
          @click="goToRepo(project.link)"
      >
        <img class="w-full h-full object-contain" :src="project.image" :alt="project.name" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ project.name }}</div>
          <p class="text-green-300 text-base">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const projects = ref([
      {
        id: 1,
        name: 'Ansible Composer Plugin',
        description: 'Plugin composer pour mettre en place rapidement un playbook ansible',
        link: 'https://github.com/thedevopser/ansible-composer-plugin',
        image: require(`@/assets/images/ansible_composer_plugin.jpg`),
      },
      {
        id: 2,
        name: 'VH Generator',
        description: 'Création de VH en automatique',
        link: 'https://github.com/thedevopser/vh-generator',
        image: require(`@/assets/images/vh_generator.jpg`),
      },
      {
        id: 3,
        name: 'Devstack Deploy',
        description: 'Ansible playbook to deploy a dev stack on Ubuntu 22.x',
        link: 'https://github.com/thedevopser/devstack-deploy',
        image: require(`@/assets/images/devstak_deploy.jpg`),
      },
      {
        id: 4,
        name: 'Mon CV',
        description: 'Le site qui représente mon CV en ligne',
        link: 'https://github.com/thedevopser/cv',
        image: require(`@/assets/images/my_cv.jpg`),
      }
      // Add more projects as needed...
    ]);

    const goToRepo = (url) => {
      window.open(url, '_blank');
    };

    return {
      projects,
      goToRepo,
    };
  },
};
</script>

<style>

</style>
