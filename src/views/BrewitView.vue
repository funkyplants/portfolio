<script setup></script>
<template>
  <main
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
    :delay="300"
  >
    <section class="content-main">
      <h1>BREW IT Landing Page Design</h1>
      <p class="project-description">Created in May 2023</p>

      <p class="text-small">
        <span class="bold">Project duration:</span> 1 day
      </p>
      <p class="text-small"><span class="bold">Materials:</span> Figma</p>

      <h2 class="project-h2">Objective</h2>
      <p class="body-text">
        Landing page of an imaginary coffeeshop brand BREW IT. The task was to
        create a playful, but sophisticated layout that captivates the user with
        a welcoming hero section.
      </p>
      <img class="project-img" src="@/assets/images/just-brew-it.png" alt="" />
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

/*********** Media Queries  ************/

@media screen and (min-width: 400px) {
  .content-main {
    padding: 50px;
  }

  img {
    max-width: 100%;
  }
}
</style>
