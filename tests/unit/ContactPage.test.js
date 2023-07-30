import { mount } from '@vue/test-utils'
import ContactPage from '@/views/ContactPage.vue'

describe('ContactPage', () => {
    test('renderise les champs de formulaire', () => {
        const wrapper = mount(ContactPage)

        expect(wrapper.find('[name="name"]').exists()).toBe(true)
        expect(wrapper.find('[name="email"]').exists()).toBe(true)
        expect(wrapper.find('[name="message"]').exists()).toBe(true)
    })

    test('met à jour les données lorsque vous saisissez des informations dans les champs de formulaire', async () => {
        const wrapper = mount(ContactPage)

        const nameInput = wrapper.find('[name="name"]')
        nameInput.element.value = 'John Doe'
        await nameInput.trigger('input')

        const emailInput = wrapper.find('[name="email"]')
        emailInput.element.value = 'john@example.com'
        await emailInput.trigger('input')

        const messageInput = wrapper.find('[name="message"]')
        messageInput.element.value = 'Hello, Vue 3!'
        await messageInput.trigger('input')

        expect(wrapper.vm.name).toBe('John Doe')
        expect(wrapper.vm.email).toBe('john@example.com')
        expect(wrapper.vm.message).toBe('Hello, Vue 3!')
    })
})
