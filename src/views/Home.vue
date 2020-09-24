<template>
    <div class="home">
        <ul>
            <li v-for="event in pastEvents" :key="event.id">
                {{ event.category }}
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

        store.commit('SET_COMING_EVENTS', DB.events[1]);
        store.commit('SET_PAST_EVENTS', DB.events[0]);

        const comingEvents = computed(
            () => store.state.comingEvents.comingEvents
        );
        const pastEvents = computed(() => store.state.pastEvents.pastEvents);

        pastEvents.value.forEach((event) => {
            event.id = uuidv4();
        });
        return {
            comingEvents,
            pastEvents,
        };
    },
};
</script>
