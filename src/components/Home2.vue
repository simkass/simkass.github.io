<template>
  <div class="Home">
    <div class="home">
    <h3>Hi, I'm Simon Kassab</h3>
    <p>I'm a Software Developer</p>
    <h4>Here are some websites I've designed:</h4>
    <p>&gt; Le Stoud - Booking App</p>
    <p>&gt; Snuggelug - Artist Portfolio</p>
    <p>&gt; Reassembling Skeleton - Artist Portfolio</p>
    <h4>Here are other projects I've done:</h4>
    <p>&gt; Quebec Housing Market Analysis</p>
    <p>&gt; Author Recognition Algorithm</p>
    <p>&gt; Introduction to Image Compression</p>
    <h4>If you want to keep in touch:</h4>
    <p>LinkedIn, Email, GitHub</p>
    <h4>For more info:</h4>    
    <p>Curriculum vitae</p>

  </div></div>
</template>

<script>

export default {
  name: "Home",
  components: {

  },
};
</script>

<style>
    .Home {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
    }

    .home {
        max-width: 90%;
        margin-top: 10rem;
        width: fit-content;
    }

    .home p {
        margin-block: 0.5rem;
    }
        .home h4 {
        margin-top: 1.2rem;
    }
</style>
