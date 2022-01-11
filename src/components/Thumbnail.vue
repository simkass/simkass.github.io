<template>
  <div
    class="thumbnail"
    :style="{
      backgroundImage: `url(${require('@/assets/thumbnails/' + filename)})`,
    }"
  >
    <div class="overlay">
      <div class="text">
        <div class="text-content">
          <a>{{ title }}</a>
          <p :v-if="subtitle">{{ subtitleText }}</p>
        </div>
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
    subtitleText: String,
  },
};
</script>

<style scoped>
.thumbnail {
  height: 100%;
  width: 100%;
  position: relative;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  transition: 400ms;
}

.thumbnail:hover {
  background-position: 50% calc(60% + 15px);
}

.overlay {
  height: 100%;
  width: 100%;
  opacity: 0%;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  transition: 400ms;
}

.overlay:hover {
  opacity: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.text {
  height: 80%;
  width: 100%;
  text-align: center;
  display: inline-flex;
  transition: 400ms;
}

.overlay:hover .text {
  height: 100%;
}

.text a {
  margin: auto;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 24px;
}

.text-content {
  margin: auto;
}
</style>
