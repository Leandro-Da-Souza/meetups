import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            pastEvents: ['1', '2', '3', '4'],
        };
    },
});

describe('Home.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Home, {
            global: {
                plugins: [store],
            },
        });
    });

    it('should have a div with class of home', () => {
        let element = wrapper.find('.home');
        expect(element.exists()).toBe(true);
    });

    it('should have li elements', () => {
        let elements = wrapper.findAll('ul li');
        expect(elements).toBeTruthy();
    });
});
// it('fuck this', () => {});
