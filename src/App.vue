<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0;
  scroll-behavior: smooth;
  overflow-x: hidden;
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

#app {
  font-family: "Fira Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
