<template>
  <div class="project-page">
    <page-header />
    <project-header
      :title="title"
      :locationDate="locationDate"
      :filename="filename"
      :github="github"
      :githubLink="githubLink"
    />
    <clip-loader v-if="blockMap == null" :color="color" :size="size" />
    <NotionRenderer :blockMap="blockMap" katex prism />
  </div>
</template>

<script>
import PageHeader from "./PageHeader.vue";
import ProjectHeader from "./ProjectHeader.vue";
import { NotionRenderer, getPageBlocks } from "vue-notion";
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
  components: { PageHeader, ProjectHeader, NotionRenderer, ClipLoader },
  name: "ProjectPage",
  props: {
    title: String,
    locationDate: String,
    filename: String,
    notionId: String,
    github: Boolean,
    githubLink: String
  },
  data: () => ({ blockMap: null }),
  async created() {
    // get Notion blocks from the API via a Notion pageId
    this.blockMap = await getPageBlocks(
      this.notionId
    );
  },
};
</script>

<style scoped>
@import "../assets/css/notion/styles.css";

.project-page {
  width: 60%;
  margin: auto;
}

@media all and (max-width: 1200px) {
  .project-page {
    width: 80%;
  }
}

@media all and (max-width: 900px) {
  .project-page {
    width: 95%;
  }
}
</style>
