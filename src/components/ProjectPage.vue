<template>
  <div class="project-page">
    <page-header />
    <project-header
      :title="title"
      :locationDate="locationDate"
      :filename="filename"
    />
  </div>
</template>

<script>
import PageHeader from "./PageHeader.vue";
import ProjectHeader from "./ProjectHeader.vue";

export default {
  components: { PageHeader, ProjectHeader },
  name: "ProjectPage",
  props: {
    title: String,
    locationDate: String,
    filename: String,
    content: String,
  }
};
</script>

<style scoped>
.project-page {
  width: 60%;
  margin: auto;
}
</style>
