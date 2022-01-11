<template>
  <div class="project-header">
    <div
      class="cover"
      :style="{
        backgroundImage: `url(${require('@/assets/covers/' + filename)})`,
      }"
    ></div>
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="location-date">{{ locationDate }}</div>
  </div>
</template>

<script>
export default {
  name: "ProjectHeader",
  props: {
    title: String,
    locationDate: String,
    filename: String,
  },
};
</script>

<style scoped>
.project-header {
  width: 100%;
  margin-bottom: 40px;
}

.cover {
  height: 350px;
  width: 100%;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
}

.title {
  margin-top: 10px;
  font-size: 22px;
}

.location-date {
  font-size: 18px;
  color: rgb(143, 143, 143);
}
</style>
