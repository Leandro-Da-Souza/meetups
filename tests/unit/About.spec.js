import { shallowMount } from '@vue/test-utils';
import About from '@/views/About';

describe('About.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(About);
    });

    it('should contain paragraph', () => {
        let element = wrapper.find('p');
        expect(element.exists()).toBe(true);
    });
});
