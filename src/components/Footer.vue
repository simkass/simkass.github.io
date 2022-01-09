<template>
  <div class="footer">
    <div class="left-footer">
      <div class="branding"><h2>SIMON KASSAB</h2></div>
    </div>
    <div class="right-footer">
      <div class="nav">
        <a href="https://www.linkedin.com/in/simon-kassab/" target="_blank">LinkedIn</a>
        <a href="https://github.com/simkass" target="_blank">GitHub</a>
        <a href="./Simon_Kassab_CV.pdf" target="_blank">Resume</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  height: 100px;
  width: 100%;
  display: inline-flex;
}

.left-footer {
  height: 100%;
  width: 50%;
  display: inline-flex;
  align-items: center;
}

.branding {
  margin-left: 100px;
}

.right-footer {
  height: 100%;
  width: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
}

.nav {
  margin-right: 50px;
}

.nav a {
  margin-right: 50px;
  color: rgb(143, 143, 143);
  font-size: 18px;
  text-decoration: none;
  transition: 400ms;
}

.nav a:hover {
  color: black;
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  .left-footer {
    width: 40%;
  }

  .right-footer {
    width: 60%;
  }

  .branding {
    margin-left: 20px;
  }

  .branding h2 {
    font-size: 18px;
  }

  .nav {
    margin-right: 0px;
  }

  .nav a {
    margin-right: 20px;
    font-size: 14px;
  }
}
</style>
