  <template>
    <div class="flex flex-col text-green-400 w-9/12 space-y-4">
      <h2 class="text-3xl font-bold mb-10">Mon expérience <span class="cursor"></span></h2>
      <div class="flex flex-wrap gap-10">
        <div
            v-for="experience in experiences"
            :key="experience.id"
            class="p-6 bg-gray-600 rounded-lg shadow-lg hover:scale-110 transition transform duration-500 ease-in-out cursor-pointer w-full sm:w-1/2 lg:w-1/4"
        >
          <h2 class="text-xl font-bold">{{ experience.position }}</h2>
          <h3 class="text-lg">{{ experience.employer }}</h3>
          <p class="italic">{{ experience.year }}</p>
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
        position: 'Concepteur Développeur Web',
        employer: 'CPAM de la Gironde',
        year: '2017 - Présent',
        description: 'Développement d\'applications à destination du local',
        keyFacts: ['Applications locales', 'Applications Nationales', 'Mise en place de WSL', 'Support aux utilisateurs']
      },
      {
        id: 2,
        position: 'Support de Niveau 1 (SDN)',
        employer: 'CPAM de la Gironde',
        year: '2013 - 2017',
        description: 'Support de niveau 1 pour les applications nationales',
        keyFacts: ['Amélioration du Xwiki (base de connaissance)', 'Mise en place d\'un intranet', 'Création de procédures de traitement']
      },
      {
        id: 3,
        position: 'Manoeuvre',
        employer: 'Interim',
        year: '2012 - 2013',
        description: 'Diverses missions en interim',
        keyFacts: ['Conduite d\'engin', 'Interventions de nuits']
      },
      {
        id: 4,
        position: 'Technicien Informatique',
        employer: 'Conseil Régional Aquitaine',
        year: '10/2011 - 12/2011',
        description: 'Support Informatique',
        keyFacts: ['Mise en place d\'un système de visio conférence', 'Assistance utilisateur']
      },
      {
        id: 5,
        position: 'Chef Cuisinier',
        employer: 'Conseil Général de la Gironde',
        year: '2009 - 2011',
        description: 'Responsable de cuisine dans un collège.',
        keyFacts: ['1000 repas / jours', 'Gestion de commandes', 'Gestion des stocks', 'Gestion des plannings']
      },
      {
        id: 6,
        position: 'Maitre d\'hôtel',
        employer: 'Château de Lalande',
        year: '2022 - 2009',
        description: 'Responsable de salle',
        keyFacts: ['Hôtellerie de luxe (3*)', 'Gestion de la cave', 'Gestion des clients', 'Gestion des plannings']
      }
    ]
    return {experiences}
  }
}
</script>

<style>

</style>
