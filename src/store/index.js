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
        SET_MY_REVIEWS: (state, data) => {
            state.reviews.push(data);
        },
        UPDATE_MY_REVIEW: (state, payload) => {
            const { id, review } = payload;
            const storeReview = state.reviews.find((i) => i.id === id);
            storeReview.review = review;
        },
    },
    actions: {},
    modules: {},
});
