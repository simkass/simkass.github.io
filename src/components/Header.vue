<template>
  <div class="header">
    <div class="left">
      <div class="logo"><h2>SK</h2></div>
    </div>
    <div class="right">
      <div class="nav">
        <a  @click="nav('work')">Work</a>
        <a  @click="nav('about')">About</a>
        <a  @click="nav('contact')">Contact</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    nav(id) {
      const position = document.getElementById(id).offsetTop;
      // smooth scroll
      window.scrollTo({ top: position, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.header {
  height: 140px;
  min-width: 100%;
  max-width: 100%;
  display: inline-flex;
}

.left {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.logo {
  margin-left: 100px;
}

.right {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav {
  margin-right: 30px;
  font-size: 18px;
}

.nav a {
  margin-right: 70px;
  color: rgb(143, 143, 143);
  transition: 400ms;
}

.nav a:hover {
  color: black;
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  .left {
    width: 20%;
  }
  .logo {
    margin-left: 20px;
  }
  .right {
    width: 80%;
  }
  .nav {
    margin-right: 0px;
  }
  .nav a {
    margin-right: 20px;
  }
}
</style>
