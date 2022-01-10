<template>
  <div class="pageheader">
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
.pageheader {
  height: 150px;
  width: 100%;
  display: inline-flex;
  align-items: center;
}

.icon {
  margin-left: 100px;
  font-size: 32px;
  color: black;
  transition: 400ms;
}

.icon:hover {
    color: rgb(95, 95, 95);
}
</style>
