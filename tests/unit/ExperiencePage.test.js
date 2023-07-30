import { mount } from '@vue/test-utils'
import ExperiencePage from '@/views/ExperiencePage.vue'

describe('ExperiencePage.vue', () => {
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

    const wrapper = mount(ExperiencePage, {
        data() {
            return { experiences }
        }
    })

    it('renders the title', () => {
        expect(wrapper.find('h2').text()).toContain('Mon expérience')
    })

    it('renders the correct number of experience cards', () => {
        const cards = wrapper.findAll('.p-6')
        expect(cards.length).toBe(experiences.length)
    })

    it('renders the experience details correctly', () => {
        const firstCard = wrapper.find('.p-6')
        expect(firstCard.text()).toContain(experiences[0].position)
        expect(firstCard.text()).toContain(experiences[0].employer)
        expect(firstCard.text()).toContain(experiences[0].year)
        expect(firstCard.text()).toContain(experiences[0].description)
    })
})
