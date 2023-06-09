<script setup></script>

<template>
  <main
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
    :delay="300"
  >
    <section class="content-main">
      <h1>Lucidity Poster Design</h1>
      <p class="project-description">Created in April 2022</p>

      <p class="text-small">
        <span class="bold">Project duration:</span> 1 day
      </p>
      <p class="text-small">
        <span class="bold">Materials:</span> Adobe Photoshop
      </p>

      <h2 class="project-h2">Objective</h2>
      <p class="body-text">
        I have a huge love for this type of style and wanted to try it out for
        myself. This project was a lot of fun as it was quite the learning curve
        and I could use Adobe Photoshop to test out 3D glass lettering.
        "Lucidity" means a sense of clarity and brightness, and in hindsight I
        think it all came together nicely as there is the cliche in looking up
        towards the sky for answers, which unintentally became the chosen
        background for the poster.
      </p>
      <img class="project-img" src="../assets/images/Poster3.png" alt="" />
    </section>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
.project-description {
  font-weight: 300;
  margin-bottom: 10px;
  margin-top: 10px;
}

.bold {
  font-weight: 700;
}

.text-small {
  font-weight: 200;
  margin: 0;
}

.project-img {
  width: 100%;
  padding: 10px 0;
}
/*********** MEDIA QUERIES  ************/

@media screen and (min-width: 400px) {
  .content-main {
    padding: 50px;
  }

  img {
    max-width: 100%;
  }
}
</style>
