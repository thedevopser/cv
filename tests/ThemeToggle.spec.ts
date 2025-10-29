import { mount } from '@vue/test-utils';
import ThemeToggle from '../src/components/ThemeToggle.vue';

describe('ThemeToggle', () => {
  it('toggles dark class on html element', async () => {
    document.documentElement.classList.remove('dark');
    const wrapper = mount(ThemeToggle);
    // Initially light
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    await wrapper.find('button').trigger('click');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    await wrapper.find('button').trigger('click');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
