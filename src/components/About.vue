<template>
  <div class="about">
    <div class="container">
      <div class="title"><h2>About</h2></div>

      <div class="card">
        <div class="headshot"></div>

        <div class="text">
          <h4>CURRENT POSITION</h4>
          <h2>Software Developer II — Genetec</h2>
          <h4>EDUCATION</h4>
          <h2>Computer Engineering — Université de Sherbrooke</h2>
          <h4>LOCATION</h4>
          <h2>Montreal, QC, Canada</h2>
          <h4>HOBBIES & INTERESTS</h4>
          <h2>Cycling</h2>
          <h2>Photography</h2>
          <h2>Cinema</h2>
          <a href="./Simon_Kassab_CV.pdf" target="_blank"><h3>RESUME <font-awesome-icon icon="file-download" /></h3></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  height: 560px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  display: inline-flex;
  justify-content: center;
}

.container {
  margin-top: 40px;
  height: 500px;
  width: 60%;
}

.title {
  height: 50px;
  text-align: center;
}

.card {
  height: 88%;
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
}

.headshot {
  width: 32%;
  min-height: 100%;
  min-width: 300px;
  background-image: url("~@/assets/about/headshot.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.text {
  min-width: 400px;
}

.text {
  margin-top: -5px;
  margin-left: 40px;
}

.text h4 {
  color: rgb(143, 143, 143);
  margin-top: 25px;
  margin-bottom: 6px;
}

.text h3 {
  margin-top: 30px;
}

.text h2 {
  margin-top: 5px;
}

.text a {
  color:rgb(143, 143, 143);
  text-decoration: none;
  transition: 400ms;
}

.text a:hover {
  color:black
}

@media all and (max-width: 1500px) {
  .container {
    width: 80%;
  }
}
@media all and (max-width: 1200px) {
  .container {
    width: 95%;
  }
}
@media all and (max-width: 1000px) {
  .container {
    width: 100%;
  }
}
@media all and (max-width: 900px) {
  .about {
    height: 700px;
  }
  .container {
    height: 680px;
    width: 95%;
  }
  .card {
    justify-content: center;
  }
  .headshot {
    min-width: 60%;
    min-height: 20%;
    height: 200px;
  }
  .text {
    width: 80%;
    margin-left: 50px;
  }

  .text h4 {
    font-size: 13px;
    margin-top: 18px;
  }
  .text h2 {
    font-size: 18px;
  }
}
</style>
