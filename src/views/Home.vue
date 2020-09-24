<template>
    <div class="home">
        <ul>
            <li v-for="event in pastEvents" :key="event.id">
                {{ event.category }}
                <img :src="event.picture" alt="" />
            </li>
        </ul>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import * as DB from '../../db.json';
// @ is an alias to /src

export default {
    name: 'Home',
    components: {},
    setup() {
        const store = useStore();

        const dbComingEvents = DB.events[1].comingEvents;
        const dbPastEvents = DB.events[0].pastEvents;

        const getRandomPic = (event) => {
            return (event.picture = `http://placeimg.com/100/100/${event.category}`);
        };

        dbComingEvents.forEach((event) => {
            event.id = uuidv4();
            event.attending = false;
            getRandomPic(event);
        });

        dbPastEvents.forEach((event) => {
            event.id = uuidv4();
            event.attended = false;
            getRandomPic(event);
        });

        store.commit('SET_COMING_EVENTS', dbComingEvents);
        store.commit('SET_PAST_EVENTS', dbPastEvents);

        const comingEvents = computed(() => store.state.comingEvents);
        const pastEvents = computed(() => store.state.pastEvents);

        console.log(comingEvents.value);
        // pastEvents.value.forEach((event) => {
        //     event.id = uuidv4();
        // });
        return {
            comingEvents,
            pastEvents,
        };
    },
};
</script>
