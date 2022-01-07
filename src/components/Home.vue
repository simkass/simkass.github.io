<template>
  <div class="home">
    <Header />
    <Title />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Title from "./Title.vue";

export default {
  name: "Home",
  components: {
    Header,
    Title,
  },
};
</script>

<style>
</style>
