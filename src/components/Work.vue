<template>
  <div class="work">
    <thumbnail title="Hello" desc="WORLD" filename="logo.png" />
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
  height: 600px;
  width: 100%;
  background-color: red;
}
</style>
