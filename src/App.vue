<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer2 />
  </div>
</template>

<script>
import Footer2 from "./components/Footer2.vue";

export default {
  name: "App",
  components: {
    Footer2,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0;
}

body::-webkit-scrollbar {
  width: 4px; /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: white; /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #bfbfbf; /* color of the scroll thumb */
}

@font-face {
  font-family: "jetbrains-mono";
  src: url("~@/assets/fonts/JetBrainsMono[wght].ttf");
}

#app {
  scroll-behavior: smooth;
  overflow-x: hidden;

  /* font-family: "Fira Sans", Helvetica, Arial, sans-serif; */
  font-family: jetbrains-mono;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
