import { createStore } from 'vuex';

export default createStore({
    state: {
        comingEvents: [],
        pastEvents: [],
        myEvents: [],
        reviews: [],
    },
    mutations: {
        SET_COMING_EVENTS: (state, data) => {
            state.comingEvents = data;
        },
        SET_PAST_EVENTS: (state, data) => {
            state.pastEvents = data;
        },
        SET_MY_EVENTS: (state, data) => {
            state.myEvents = data;
        },
    },
    actions: {},
    modules: {},
});
