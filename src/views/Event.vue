<template>
  <div class="event">
    <img :src="imgSrc" alt="" />
    <h2>{{ event.title }}</h2>
    <h2>{{ event.location }}</h2>
    <span>{{ event.date }}</span>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";

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
    let imgSrc = `http://placeimg.com/400/300/${event.value[0].picture}`;

    return {
      event: event.value[0],
      imgSrc,
    };
  },
};
</script>

<style scoped>
img {
  width: 90%;
  height: 90%;
}
</style>