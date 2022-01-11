<template>
  <div class="container">
    <div
      class="static"
      v-bind:class="{ 'thumbnail-offset': overlay, thumbnail: !overlay }"
      :style="{
        backgroundImage: `url(${require('@/assets/thumbnails/' + filename)})`,
      }"
    ></div>
    <div
      class="static"
      v-bind:class="{
        'thumbnail-overlay-on': overlay,
        'thumbnail-overlay-off': !overlay,
      }"
    ></div>
    <div
      class="thumbnail-text"
      @mouseover="overlay = true"
      @mouseleave="overlay = false"
    >
      <div>
        <a>{{ title }}</a>
        <p v-if=subtitle>{{ subtitleText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thumbnail",
  data() {
    return {
      overlay: false,
    };
  },
  props: {
    title: String,
    desc: String,
    filename: String,
    subtitle: Boolean,
    subtitleText: String
  },
};
</script>

<style>
.container {
  height: 100%;
  width: 100%;
  position: relative;
}

.thumbnail {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  transition: 0.5s;
}

.thumbnail-offset {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% calc(60% + 15px);
  transition: 0.5s;
}

.thumbnail-overlay-off {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background-color: black;
  opacity: 0%;
  transition: 0.5s;
}

.thumbnail-overlay-on {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background-color: black;
  opacity: 50%;
  transition: 0.5s;
}

.thumbnail-text {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-items: center;

  color: white;
  font-size: 24px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;

  opacity: 0%;
  transition: 0.5s;
}

.thumbnail-text div {
  margin-top: -60px;
  margin-left: 5px;
  margin-right: 5px;
  transition: 0.5s;
}

.thumbnail-text p {
  margin-top: 6px;
  font-size: 16px;
}

.thumbnail-text:hover {
  cursor: pointer;
  opacity: 100%;
  transition: 0.05s;
}

.thumbnail-text:hover div {
  margin-top: 0;
  transition: 0.5s;
}
</style>
