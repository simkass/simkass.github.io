<template>
  <div class="footer">
    <p>
      &copy; Copyright 2024
      <a href="https://simonkassab.com">simonkassab.com</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer2",
};
</script>

<style scoped>
.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  margin-bottom: 0.5rem;
}

.footer a {
  font-size: 0.8rem;
  color: #575757;
  text-decoration: none;
  transition: 250ms;
}

.footer a:hover {
  font-weight: 700;
}

.footer p {
  font-size: 0.8rem;
  color: #575757;
  text-decoration: none;
}

@media only screen and (max-width: 700px) {
}
</style>
