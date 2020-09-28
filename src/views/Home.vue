<template>
  <div class="home">
    <div class="categories">
      <button @click="toggleFunction">Coming Events</button>
      <button @click="toggleFunction">Past Events</button>
    </div>
    <ul>
      <li v-for="event in pastEvents" :key="event.id">
        <img :src="event.picture" alt="" />
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
    const toggle = ref(false);
    const store = useStore();

    const comingEvents = computed(() => store.state.comingEvents);
    const pastEvents = computed(() => store.state.pastEvents);
    const toggleFunction = () => {
      toggle.value = !toggle.value;
      console.log(toggle.value);
    };

    // console.log(comingEvents.value);
    // pastEvents.value.forEach((event) => {
    //     event.id = uuidv4();
    // });
    return {
      comingEvents,
      pastEvents,
      store,
      toggleFunction,
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
