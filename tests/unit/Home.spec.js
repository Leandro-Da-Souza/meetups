import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '@/views/Home.vue';
// import Vuex from 'vuex';

import * as test from '@vue/test-utils';

console.log(createLocalVue);
console.log(shallowMount);
console.log(test);

// const localVue = createLocalVue();
// console.log(localVue);

describe('Home.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Home);
    });

    it('should have li element', () => {});
});
