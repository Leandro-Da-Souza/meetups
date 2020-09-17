<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="vuexExample">
      <h2>Count: {{ count }}</h2>
      <button @click="increment()">Increment</button>
      <button @click="decrement()">Decrement</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);

    const increment = () => {
      store.commit("increment");
    };

    const decrement = () => {
      store.commit("decrement");
    };

    return {
      count,
      increment,
      decrement,
    };
  },
};
</script>
