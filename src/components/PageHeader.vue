<template>
  <div class="page-header">
    <router-link to="/"
      ><div class="icon"><font-awesome-icon icon="caret-square-left" /></div
    ></router-link>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style scoped>
.page-header {
  height: 50px;
  width: 100%;
  margin-top: 80px;
  display: inline-flex;
  align-items: center;
}

.icon {
  font-size: 32px;
  color: black;
  transition: 400ms;
}

.icon:hover {
    color: rgb(95, 95, 95);
}
</style>
