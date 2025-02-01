<template>
  <div class="Home">
    <div class="home">
      <h3>Simon Kassab</h3>
      <h4>My articles:</h4>
      <p>
        <a href="https://simonkassab.com/quebec-real-estate-app/"
          >&gt; Quebec Housing Market Analysis</a
        >
      </p>
      <p>
        <a href="https://simonkassab.com/#/author"
          >&gt; Author Recognition Algorithm</a
        >
      </p>
      <p>
        <a href="https://simonkassab.com/#/image_compression"
          >&gt; Introduction to Image Compression</a
        >
      </p>
      <h4>If you want to keep in touch:</h4>
      <p>
        <a href="https://www.linkedin.com/in/simon-kassab/" target="_blank"
          >LinkedIn</a
        >,
        <a href="https://github.com/simkass" target="_blank">GitHub</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home2",
  components: {},
};
</script>

<style>
.Home {
  width: 100vw;
  display: flex;
  justify-content: center;
}

.home {
  max-width: 90%;
  margin-top: 10%;
  width: fit-content;
}

.home p {
  margin-block: 0.5rem;
}

.home a {
  text-decoration: none;
  transition: 250ms;
}

.home a:hover {
  font-weight: 700;
  text-decoration: underline;
}

.home h4 {
  margin-top: 1.2rem;
}
</style>
