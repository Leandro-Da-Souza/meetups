<template>
  <div class="container">
    <div class="left">
      <h1 @click="changeRoute">Eventful</h1>
    </div>
    <div class="right">
      <button @click="changeRoute">My Events</button>
      <button @click="changeRoute">About</button>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Navigation",
  setup() {
    const changeRoute = (e) => {
      let path = e.path[0].innerText;
      if (path === "My Events") {
        router.push({ name: "My Events" });
      }
      if (path === "About") {
        router.push({ name: "About" });
      }
      if (path === "Eventful") {
        router.push({ name: "Home" });
      }
    };

    return { changeRoute };
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
}

button {
  font-size: 1rem;
  border: none;
  margin-left: 10px;
  padding-top: 1.2rem;
  outline: none;
}

button:hover {
  border-bottom: 1px solid;
  font-size: 1.1rem;
}
</style>