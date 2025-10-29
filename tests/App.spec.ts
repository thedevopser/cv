import { mount } from '@vue/test-utils';
import App from '../src/App.vue';

// Simple smoke test: renders sections and buttons

describe('App', () => {
  it('renders main sections and controls', () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['RouterLink'],
      },
    });

    expect(wrapper.text()).toContain('Sylvain ANGLADE');
    expect(wrapper.text()).toContain('Expériences');
    expect(wrapper.text()).toContain('Compétences');
    expect(wrapper.text()).toContain('Formations');
    expect(wrapper.text()).toContain('Certifications');

    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});
