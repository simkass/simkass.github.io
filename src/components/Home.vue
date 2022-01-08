<template>
  <div class="home">
    <Header />
    <Title />
    <Work />
    <About />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Title from "./Title.vue";
import Work from "./Work.vue"
import About from "./About.vue"

export default {
  name: "Home",
  components: {
    Header,
    Title,
    Work,
    About
  },
};
</script>

<style>
</style>
