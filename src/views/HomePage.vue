<template>
    <div class="flex flex-col justify-center items-center h-full">
      <div class="text-center space-y-4">
        <img :src="profileImage" alt="Photo de profil" class="w-32 h-32 sm:w-48 sm:h-48 rounded-full mx-auto">
        <h1 class="text-4xl sm:text-6xl">Sylvain ANGLADE</h1>
        <p class="text-xl sm:text-2xl">Concepteur Dévelopeur Web @ CPAM de la Gironde</p>
      </div>
      <div class="space-x-4 mt-5">
        <a href="https://twitter.com/votre_nom_utilisateur" target="_blank" rel="noopener noreferrer" aria-label="Lien vers le compte Twitter">
          <font-awesome-icon icon="fab fa-twitter" class="text-2xl text-gray-100 hover:text-blue-500" />
        </a>
        <a href="https://www.instagram.com/votre_nom_utilisateur" target="_blank" rel="noopener noreferrer" aria-label="Lien vers le compte Instagram">
          <font-awesome-icon icon="fab fa-instagram" class="text-2xl text-gray-100 hover:text-pink-500"></font-awesome-icon>
        </a>
        <a href="https://www.linkedin.com/in/votre_nom_utilisateur" target="_blank" rel="noopener noreferrer" aria-label="Lien vers le compte LinkedIn">
          <font-awesome-icon icon="fab fa-linkedin" class="text-2xl text-gray-100 hover:text-blue-700"></font-awesome-icon>
        </a>
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="Lien vers le compte Github">
          <font-awesome-icon icon="fab fa-github" class="text-2xl text-gray-100 hover:text-gray-600"></font-awesome-icon>
        </a>
        <a href="https://gitlab.com/username" target="_blank" rel="noopener noreferrer" aria-label="Lien vers le compte Gitlab">
          <font-awesome-icon icon="fab fa-gitlab" class="text-2xl text-gray-100 hover:text-orange-600"></font-awesome-icon>
        </a>
      </div>
      <!-- Vous pouvez ajouter d'autres informations ici si vous le souhaitez -->
    </div>

</template>

<script>
import { ref } from 'vue'
import profileImage from '@/assets/images/profile_ai_v2.jpg'

export default {
  setup() {
    return {
      profileImage: ref(profileImage)
    }
  }
}
</script>

<style>

</style>
