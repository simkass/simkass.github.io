<template>
  <div class="project-page">
    <page-header />
    <project-header
      :title="title"
      :locationDate="locationDate"
      :filename="filename"
    />
    <NotionRenderer :blockMap="blockMap" katex prism />
  </div>
</template>

<script>
import PageHeader from "./PageHeader.vue";
import ProjectHeader from "./ProjectHeader.vue";
import { NotionRenderer, getPageBlocks } from "vue-notion";

export default {
  components: { PageHeader, ProjectHeader, NotionRenderer },
  name: "ProjectPage",
  props: {
    title: String,
    locationDate: String,
    filename: String,
    notionId: String
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
