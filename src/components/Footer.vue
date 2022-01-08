<template>
  <div class="footer">
    <div class="left-footer">
      <div class="branding"><h2>SIMON KASSAB</h2></div>
    </div>
    <div class="right-footer">
      <div class="nav">
        <a>LinkedIn</a>
        <a>GitHub</a>
        <a>Resume</a>
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
  margin-left: 50px;
}

.right-footer {
  height: 100%;
  width: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
}

.nav {
  margin-right: 10px;
}

.nav a {
  margin-right: 40px;
  color: rgb(143, 143, 143);
  font-size: 18px;
  transition: 400ms;
}

.nav a:hover {
  color: black;
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
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
