<template>
  <div class="work">
    <div class="title"><h2>Work</h2></div>
        <div class="main-project">
      <a href="https://snuggelug.art/">      
        <thumbnail
          title="snuggelug.art"
          desc="WEBSITE"
          filename="snugge.png"
          subtitle
          subtitleText="Website for tattoo artist"
        />
      </a>
    </div>
    <div class="main-project">
      <a href="https://simonkassab.com/quebec-real-estate-app/">      
        <thumbnail
          title="Quebec Housing Market Analysis"
          desc="DATA SCIENCE"
          filename="house.jpg"
        />
      </a>
    </div>
    <!-- <div class="main-project">
      <router-link to="/vaccine">
        <thumbnail
          title="COVID-19 Vaccine Availability Notification Service"
          desc="WEB APPLICATION"
          filename="vaxx.jpg"
      /></router-link>
    </div> -->
    <div class="main-project">
      <router-link to="/author">
        <thumbnail
          title="Author Recognition Algorithm"
          desc="MARKOV CHAINS"
          filename="author.jpg"
      /></router-link>
    </div>
    <div class="main-project">
      <router-link to="/image_compression">
        <thumbnail
          title="Introduction to Image Compression"
          desc="INFORMATION CODING"
          filename="image.jpeg"
      /></router-link>
    </div>
  </div>
</template>

<script>
import Thumbnail from "./Thumbnail.vue";
export default {
  components: { Thumbnail },
  name: "Work",
};
</script>

<style scoped>
.work {
  width: 100vw;
  display: inline-flex;
  flex-wrap: wrap;
}

.title {
  height: 50px;
  width: 100%;
  margin-top: 40px;
  text-align: center;
}

.main-project {
  height: 25vw;
  width: 25vw;
}

a {
  text-decoration: none;
}

@media all and (max-width: calc(300px * 3)) {
  .main-project {
    height: 50vw;
    width: 50vw;
  }
}

@media all and (max-width: calc(350px * 1)) {
  .main-project {
    height: 100vw;
    width: 100vw;
  }
}
</style>
