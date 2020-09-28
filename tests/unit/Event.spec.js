import { shallowMount } from '@vue/test-utils';
import Event from '@/views/Event';
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            pastEvents: [],
            comingEvents: [],
        };
    },
});

describe('Event.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Event, {
            global: {
                plugins: [store],
            },
        });
    });
    it('should have a div element with class event', () => {
        let element = wrapper.find('.event');
        expect(element.exists()).toBe(true);
    });
    it('should retrive data from store', () => {});
});
