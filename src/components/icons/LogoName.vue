<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1 class="logo">{{ msg }}</h1>
</template>

<style scoped>
.logo {
  font-family: "aktiv-grotesk-extended", sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 80px;
  color: rgb(27, 27, 27);
  text-align: center;
  margin: 0 auto;
  text-decoration: none;
}

.logo:hover {
  text-decoration: none;
  color: rgb(238, 146, 64);
  cursor: pointer;
}
/* 
@media screen and (max-width: 480px) {
  .logo {
    font-size: 3rem;
  }
} */

/* Media query for iPad devices */
@media screen and (min-width: 200px) and (max-width: 499px) {
  .logo {
    font-size: 40px;
    margin-bottom: 10px;
  }
}
/* Media query for desktop devices */
@media screen and (min-width: 500px) and (max-width: 700px) {
  .logo {
    font-size: 60px;
    margin-bottom: 10px;
  }
}
</style>
