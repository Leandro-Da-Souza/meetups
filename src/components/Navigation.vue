<template>
  <div class="container">
    <div class="left">
      <h1>Eventful</h1>
    </div>
    <div class="right">
      <button>My Events</button>
      <button>About</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
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