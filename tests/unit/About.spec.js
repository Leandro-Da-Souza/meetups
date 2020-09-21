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

    it('should contain an h2', () => {
        let element = wrapper.find('h2');
        expect(element.exists()).toBe(true);
    });

    it('should contain an h3', () => {
        let element = wrapper.find('h3');
        expect(element.exists()).toBe(true);
    });

    it('should contain an image', () => {
        let element = wrapper.find('img');
        expect(element.exists()).toBe(true);
    });
});
