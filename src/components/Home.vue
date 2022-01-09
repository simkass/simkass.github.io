<template>
  <div class="home">
    <Header />
    <Title />
    <Work id="work"/>
    <About id="about"/>
    <Contact id="contact"/>
  </div>
</template>

<script>
import Header from "./Header.vue"
import Title from "./Title.vue";
import Work from "./Work.vue"
import About from "./About.vue"
import Contact from "./Contact.vue"

export default {
  name: "Home",
  components: {
    Header,
    Title,
    Work,
    About,
    Contact,
  },
};
</script>

<style>
</style>
