<template>
  <div class="author">
    <project-page title="Author Recognition Algorithm" locationDate="Quebec, 2022" filename="author.jpg" :content="authorRecognition" />
  </div>
</template>

<script>
import ProjectPage from "./ProjectPage.vue";
import AuthorRecognition from "!raw-loader!../assets/markdown/author/author.md";

export default {
  components: { ProjectPage },
  name: "Author",
  data() {
    return {
      authorRecognition: AuthorRecognition,
    };
  },
};
</script>

<style scoped>
</style>
