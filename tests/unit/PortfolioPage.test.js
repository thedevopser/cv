import { mount } from '@vue/test-utils'
import PortfolioPage from '@/views/PortfolioPage.vue'

describe('PortfolioPage.vue', () => {
let openMock

beforeEach(() => {
openMock = jest.fn()
window.open = openMock
})

it('renders correctly', () => {
const wrapper = mount(PortfolioPage)
expect(wrapper.element).toMatchSnapshot()
})

it('renders the correct number of projects', () => {
const wrapper = mount(PortfolioPage)
expect(wrapper.findAll('.max-w-sm')).toHaveLength(wrapper.vm.projects.length)
})

it('goToRepo opens a new tab with the correct url', async () => {
const wrapper = mount(PortfolioPage)
const project = wrapper.vm.projects[0]
await wrapper.vm.goToRepo(project.link)
expect(openMock).toHaveBeenCalledWith(project.link, '_blank')
})
})
