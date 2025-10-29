import { mount } from '@vue/test-utils';
import ExportPdfButton from '../src/components/ExportPdfButton.vue';

// Mock html2pdf.js default export chain
vi.mock('html2pdf.js', () => {
  const api = {
    from: vi.fn().mockReturnThis(),
    set: vi.fn().mockReturnThis(),
    save: vi.fn().mockResolvedValue(undefined),
  };
  const factory = () => api;
  return { default: factory };
});

describe('ExportPdfButton', () => {
  it('calls html2pdf on click', async () => {
    document.body.innerHTML = '<div id="target">Hello</div>';
    const wrapper = mount(ExportPdfButton, {
      props: { selector: '#target', filename: 'test.pdf' },
    });

    await wrapper.find('button').trigger('click');

    const mod = await import('html2pdf.js');
    const instance: any = (mod as any).default();
    expect(instance.from).toHaveBeenCalled();
    expect(instance.set).toHaveBeenCalled();
    expect(instance.save).toHaveBeenCalled();
  });
});
