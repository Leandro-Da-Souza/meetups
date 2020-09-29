import { shallowMount } from '@vue/test-utils';
import Event from '@/views/Event';
import { createStore } from 'vuex';
import { createRouter } from 'vue-router';

const store = createStore({
    state() {
        return {
            pastEvents: [
                {
                    id: '0',
                    title: 'Mgla',
                    category: 'Music',
                    picture: 'something',
                    location: 'Stockholm, Sweden',
                    date: 'something',
                },
            ],
            comingEvents: [
                {
                    id: '0',
                    title: 'Mgla',
                    category: 'Music',
                    picture: 'something',
                    location: 'Stockholm, Sweden',
                    date: 'something',
                },
            ],
        };
    },
});

const router = createRouter({
    routes: [],
});

describe('Event.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Event, {
            global: {
                plugins: [store, router],
                stubs: {
                    shallow: true,
                },
            },
        });
    });
    it('should have a div element with class event', () => {
        let element = wrapper.find('.event');
        expect(element.exists()).toBe(true);
    });
    it('should retrive data from store', () => {
        console.log(wrapper);
    });
});
