import { shallowMount } from '@vue/test-utils';
import Navigation from '@/components/Navigation.vue';

describe('Navigation.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Navigation);
    });

    it('should contain the text Eventful', () => {
        let element = wrapper.find('h1');
        let expected = 'Eventful';

        expect(element.text()).toContain(expected);
    });
});
