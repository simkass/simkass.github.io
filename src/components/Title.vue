<template>
  <div class="title">
    <div class="content">
      <div class="main-title">
        <a>Simon Kassab</a>
      </div>
      <div class="sub-title">
        <a>Computer Engineering New Grad — Based in Montreal</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style scoped>
.title {
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 600px;
  max-width: 100%;
  margin-left: 100px;
  margin-right: 100px;
}

.main-title {
  margin-bottom: 10px;
  font-size: 58px;
}

.sub-title {
  max-width: 100%;
  color: rgb(143, 143, 143);
  font-size: 20px;
}

@media only screen and (max-width: 600px) {
  .title {
    height: 200px;
  }
  .content {
    margin-left: 20px;
    margin-right: 20px;
  }
  .main-title {
    font-size: 48px;
  }
  .sub-title {
    font-size: 22px;
  }
}
</style>
