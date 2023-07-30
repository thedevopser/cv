import { mount } from '@vue/test-utils'
import HomePage from '@/views/HomePage.vue'

describe('HomePage.vue', () => {
    it('rend les éléments clés', () => {
        const wrapper = mount(HomePage)

        expect(wrapper.find('h1').exists()).toBe(true)
        expect(wrapper.find('p').exists()).toBe(true)
        expect(wrapper.find('img').exists()).toBe(true)
        expect(wrapper.findAll('a').length).toBe(5)
    })

    it('définit correctement l\'attribut src de l\'image de profil', () => {
        const wrapper = mount(HomePage)

        expect(wrapper.find('img').attributes('src')).toContain('profile_ai_v2.jpg')
    })

    it('les liens s\'ouvrent dans un nouvel onglet', () => {
        const wrapper = mount(HomePage)

        wrapper.findAll('a').forEach(link => {
            expect(link.attributes('target')).toBe('_blank')
            expect(link.attributes('rel')).toBe('noopener noreferrer')
        })
    })
})
