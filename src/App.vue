<template>
  <div id="nav">
    <Navigation />
  </div>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
// import { computed } from 'vue';
import { useStore } from "vuex";
import { v4 as uuidv4 } from "uuid";
import * as DB from "../db.json";

import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation,
  },
  setup() {
    const store = useStore();

    const dbComingEvents = DB.events[1].comingEvents;
    const dbPastEvents = DB.events[0].pastEvents;

    const getRandomPic = (event) => {
      return (event.picture = `http://placeimg.com/100/100/${event.category}`);
    };

    function randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }

    console.log(randomDate(new Date(), new Date()).getFullYear());

    dbComingEvents.forEach((event) => {
      event.id = uuidv4();
      event.attending = false;
      getRandomPic(event);
      event.date = randomDate(new Date(), new Date()).getFullYear();
    });

    dbPastEvents.forEach((event) => {
      event.id = uuidv4();
      event.attended = false;
      getRandomPic(event);
      event.date = randomDate(new Date(2012, 0, 1), new Date()).getFullYear();
    });

    store.commit("SET_COMING_EVENTS", dbComingEvents);
    store.commit("SET_PAST_EVENTS", dbPastEvents);

    // const comingEvents = computed(() => store.state.comingEvents);
    // const pastEvents = computed(() => store.state.pastEvents);

    // console.log(comingEvents.value);
    // pastEvents.value.forEach((event) => {
    //     event.id = uuidv4();
    // });
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Raleway", sans-serif;
  background-color: #4b0303;
  color: #feecee;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Loved by the King", cursive;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
