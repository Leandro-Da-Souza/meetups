<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

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
</style>
