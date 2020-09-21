import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(App);
    });
    it('should contain Navigation child component', () => {
        let child = wrapper.findComponent({ name: 'Navigation' });
        expect(child.exists()).toBe(true);
    });
});
