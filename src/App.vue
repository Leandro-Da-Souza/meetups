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
import Navigation from './components/Navigation';

export default {
    name: 'App',
    components: {
        Navigation,
    },
};
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    background-color: #4b0303;
    color: #feecee;
}

h1,
h2,
h3,
h4,
h5 {
    font-family: 'Loved by the King', cursive;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
