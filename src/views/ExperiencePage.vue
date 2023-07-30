  <template>
    <div class="flex flex-col text-green-400 w-11/12 space-y-4">
      <h2 class="text-3xl font-bold mb-10">Mon expérience <span class="cursor"></span></h2>
      <div class="flex flex-wrap gap-10">
        <div
            v-for="experience in experiences"
            :key="experience.id"
            class="p-6 bg-gray-600 rounded-lg shadow-lg hover:scale-110 transition transform duration-500 ease-in-out cursor-pointer w-full sm:w-1/2 lg:w-1/4"
        >
          <h2 class="text-xl font-bold">{{ experience.position }}</h2>
          <h3 class="text-lg">{{ experience.employer }}</h3>
          <p class="text-gray-500">{{ experience.year }}</p>
          <p>{{ experience.description }}</p>
          <ul class="list-disc list-inside mt-2">
            <li v-for="fact in experience.keyFacts" :key="fact">{{ fact }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>

<script>

export default {
  setup() {
    const experiences = [
      {
        id: 1,
        position: 'Développeur Full Stack',
        employer: 'OpenAI',
        year: '2020 - Présent',
        description: 'Développement de solutions d\'IA de pointe.',
        keyFacts: ['Travaillé sur le projet GPT-3', 'Contribué à diverses publications de recherche']
      },
      {
        id: 2,
        position: 'Ingénieur logiciel',
        employer: 'Google',
        year: '2018 - 2020',
        description: 'Développement de nouvelles fonctionnalités pour Google Search.',
        keyFacts: ['Amélioré le temps de chargement de la page de recherche', 'Contribué à l\'initiative AMP']
      },
      {
        id: 3,
        position: 'Ingénieur logiciel',
        employer: 'Google',
        year: '2018 - 2020',
        description: 'Développement de nouvelles fonctionnalités pour Google Search.',
        keyFacts: ['Amélioré le temps de chargement de la page de recherche', 'Contribué à l\'initiative AMP']
      },
      {
        id: 4,
        position: 'Ingénieur logiciel',
        employer: 'Google',
        year: '2018 - 2020',
        description: 'Développement de nouvelles fonctionnalités pour Google Search.',
        keyFacts: ['Amélioré le temps de chargement de la page de recherche', 'Contribué à l\'initiative AMP']
      },
      {
        id: 5,
        position: 'Ingénieur logiciel',
        employer: 'Google',
        year: '2018 - 2020',
        description: 'Développement de nouvelles fonctionnalités pour Google Search.',
        keyFacts: ['Amélioré le temps de chargement de la page de recherche', 'Contribué à l\'initiative AMP']
      }
    ]
    return {experiences}
  }
}
</script>

<style>

</style>
