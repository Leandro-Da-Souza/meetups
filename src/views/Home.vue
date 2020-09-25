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
// @ is an alias to /src

export default {
    name: 'Home',
    components: {},
    setup() {
        const store = useStore();

        const comingEvents = computed(() => store.state.comingEvents);
        const pastEvents = computed(() => store.state.pastEvents);

        console.log(comingEvents.value);
        // pastEvents.value.forEach((event) => {
        //     event.id = uuidv4();
        // });
        return {
            comingEvents,
            pastEvents,
            store,
        };
    },
};
</script>
