<template>
  <div class="home">
    <Title />
    <Work id="work"/>
    <About id="about"/>
    <Contact id="contact"/>
  </div>
</template>

<script>
import Title from "./Title.vue";
import Work from "./Work.vue"
import About from "./About.vue"
import Contact from "./Contact.vue"

export default {
  name: "Home",
  components: {
    Title,
    Work,
    About,
    Contact,
  },
};
</script>

<style>
</style>
