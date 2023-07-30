import { mount } from '@vue/test-utils'
import ExperiencePage from '@/views/ExperiencePage.vue'

describe('ExperiencePage.vue', () => {
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
