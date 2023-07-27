<template>
  <div class="title">
    <div class="content">
      <div class="main-title">
        <a>Simon Kassab</a>
      </div>
      <div class="sub-title">
        <a>Software Developer — Based in Montreal</a>
      </div>
      <div class="icons">
        <a href="https://github.com/simkass" target="_blank"
          ><font-awesome-icon :icon="['fab', 'github']" /></a
        ><a href="https://www.linkedin.com/in/simon-kassab/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
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
  height: 280px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 70px;
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

.icons {
  margin-top: 20px;
  font-size: 24px;
  display: inline-flex;
}

.icons a {
  margin-right: 30px;
  color: rgb(143, 143, 143);
  text-decoration: none;
  transition: 400ms;
}

.icons a:hover {
  color: black;
}

@media only screen and (max-width: 600px) {
  .title {
    height: 200px;
    margin-bottom: 80px;
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
