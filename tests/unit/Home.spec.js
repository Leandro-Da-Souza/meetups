import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            events: [],
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

    it('should have li element', () => {});
});
// it('fuck this', () => {});
