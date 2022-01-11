<template>
  <div class="author">
    <project-page
      title="Author Recognition Algorithm"
      locationDate="Sherbrooke, January 2022"
      filename="author.jpg"
      notionId="Author-Recognition-Algorithm-b4083ae917c741a2ad937c19e459b32e"
      github=true
      githubLink="https://github.com/simkass/author-recognition"
    />
  </div>
</template>

<script>
import ProjectPage from "./ProjectPage.vue";

export default {
  components: { ProjectPage },
  name: "Author",
};
</script>

<style scoped>
</style>
