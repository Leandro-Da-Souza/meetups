<template>
  <div class="event">{{ event[0].title }}</div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, watch } from "vue";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    let event;

    const dbComingEvents = computed(() => store.state.comingEvents);
    const dbPastEvents = computed(() => store.state.pastEvents);

    let allEvents = Array.from(dbComingEvents.value);
    dbPastEvents.value.forEach((event) => {
      allEvents.push(event);
    });

    event = computed(() =>
      allEvents.filter((item) => {
        return item.id == route.params.id;
      })
    );

    watch(() => {
      if (event === []) {
        useRoute.push("/");
      }
    });

    return {
      event,
    };
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>