<template>
    <div class="home">
        <ul>
            <li v-for="(event, index) in pastEvents" :key="index">
                {{ event.category }}
            </li>
        </ul>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import * as DB from '../../db.json';
// @ is an alias to /src

export default {
    name: 'Home',
    components: {},
    setup() {
        const store = useStore();

        store.commit('SET_COMING_EVENTS', DB.events[1]);
        store.commit('SET_PAST_EVENTS', DB.events[0]);

        const comingEvents = computed(
            () => store.state.comingEvents.comingEvents
        );
        const pastEvents = computed(() => store.state.pastEvents.pastEvents);

        return {
            comingEvents,
            pastEvents,
        };
    },
};
</script>
