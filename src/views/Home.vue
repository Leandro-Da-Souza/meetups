<template>
  <div class="home">
    <div class="categories">
      <button @click="toggle = true">Coming Events</button>
      <button @click="toggle = false">Past Events</button>
    </div>
    <ul v-if="!toggle">
      <li v-for="event in pastEvents" :key="event.id">
        <img :src="event.picture" alt="" />
        <h3>{{ event.title }}</h3>
        <hr />
        <p>{{ event.category }}</p>
        <hr />
        <p>{{ event.location }}</p>
        <span>{{ event.date }}</span>
      </li>
    </ul>
    <ul v-else>
      <li v-for="event in comingEvents" :key="event.id">
        <img :src="event.picture" alt="" />
        <h3>{{ event.title }}</h3>
        <hr />
        <p>{{ event.category }}</p>
        <hr />
        <p>{{ event.location }}</p>
        <span>{{ event.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  setup() {
    const toggle = ref(true);
    const store = useStore();

    const comingEvents = computed(() => store.state.comingEvents);
    const pastEvents = computed(() => store.state.pastEvents);
    const toggleFunction = () => {
      toggle.value = !toggle.value;
    };

    console.log(pastEvents.value);

    // console.log(comingEvents.value);
    // pastEvents.value.forEach((event) => {
    //     event.id = uuidv4();
    // });
    return {
      comingEvents,
      pastEvents,
      store,
      toggleFunction,
      toggle,
    };
  },
};
</script>

<style scoped>
.home ul {
  margin: 20px;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 20px;
}
</style>
