<template>
  <div class="event"></div>
</template>

<script>
import { getCurrentInstance } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const context = getCurrentInstance();
    console.log(context);

    return {
      store,
    };
  },
};
</script>

<style>
</style>