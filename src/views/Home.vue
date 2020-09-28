<template>
  <div class="home">
    <div class="categories">
      <button @click="toggle = true">Coming Events</button>
      <button @click="toggle = false">Past Events</button>
    </div>
    <ul v-if="!toggle">
      <li
        v-for="event in pastEvents"
        :key="event.id"
        @click="sendToEvent(event.id)"
      >
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
      <li
        v-for="event in comingEvents"
        :key="event.id"
        @click="sendToEvent(event.id)"
      >
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
import { computed, getCurrentInstance, ref } from "vue";
import { useStore } from "vuex";

// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  setup() {
    const toggle = ref(true);
    const store = useStore();
    const context = getCurrentInstance();
    const routerPush = context.root.root.ctx.$router;

    const comingEvents = computed(() => store.state.comingEvents);
    const pastEvents = computed(() => store.state.pastEvents);
    const sendToEvent = (id) => {
      routerPush.push(`/event/${id}`);
    };

    return {
      comingEvents,
      pastEvents,
      store,
      toggle,
      sendToEvent,
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

.home li {
  cursor: pointer;
}

.categories {
  display: flex;
  justify-content: space-evenly;
}
.categories button {
  padding: 5px;
  box-shadow: 4px 5px 3px 0px rgba(0, 0, 0, 0.75);
}
.active {
  border: 1px solid whitesmoke;
}
</style>
