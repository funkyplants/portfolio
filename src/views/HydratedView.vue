<script setup></script>

<template>
  <main
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
    :delay="300"
  >
    <section class="content-main">
      <h1>Hydrate'd Hydroflask Design</h1>
      <p class="project-description">Created in April 2023</p>

      <p class="text-small">
        <span class="bold">Project duration:</span> 1 day
      </p>
      <p class="text-small">
        <span class="bold">Materials:</span> Adobe Photoshop, Procreate, iPad
        Pro, Apple Pencil gen 3
      </p>

      <h2 class="project-h2">Objective</h2>
      <p class="body-text">
        Design concept idea for Hydrate'd, a company encouraging the playfulness
        in ordinary things. The Hydrate'd hydroflask is more than just a water
        bottle — it's a colourful and fun accessory that's designed to inspire
        and motivate you on your hydration journey. With its vibrant and
        eye-catching design, featuring a variety of shapes and fun elements,
        this bottle is the perfect way to express your personal style and keep
        yourself hydrated at the same time.
      </p>
      <img src="/src/assets/img/flask-design.jpg" alt="" class="project-img" />
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
