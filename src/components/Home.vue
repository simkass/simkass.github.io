<template>
  <div class="home">
    <Header />
    <Title />
    <Work />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Title from "./Title.vue";
import Work from "./Work.vue"

export default {
  name: "Home",
  components: {
    Header,
    Title,
    Work,
  },
};
</script>

<style>
</style>
