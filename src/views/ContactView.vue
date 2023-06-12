<template>
  <!-- <div class="contact"> -->
  <div
    class="content-main"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
    :delay="300"
  >
    <h1>Contact</h1>
    <p class="small-text">
      You can contact me directly via
      <a href="mailto:esiedesign@gmail.com" class="circle-link" target="_blank"
        ><b> email </b></a
      >
      or follow
      <a
        href="https://www.instagram.com/esiestudio/"
        class="circle-link"
        target="_blank"
        ><b> esiestudio</b></a
      >
      on ig. On my
      <a
        href="https://github.com/funkyplants"
        class="circle-link"
        target="_blank"
        ><b>Github</b></a
      >
      you can find my code for this Vue.js site. Have a good day!! :-)
    </p>

    <div class="skills-table">
      <h2>Skills & Materials</h2>
      <p class="small-text">
        Curious about what I use for my projects? Read below!
      </p>
      <ul class="text-flex">
        <li v-for="(skill, index) in skills" :key="index">
          {{ skill }}
        </li>
      </ul>
    </div>
    <div class="floral-img">
      <img src="@/assets/img/floral.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        "HTML5",
        "CSS",
        "Javascript",
        "Vue.js",
        "VS Code",
        "Figma",
        "Procreate",
        "Adobe XD",
        "Photoshop",
        "Usability Testing",
      ],
    };
  },
};
</script>

<style scoped>
/* SKILLS & MATERIALS */
.skills-table {
  display: flex;
  flex-direction: column;
}

.skills-table ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}

.skills-table li {
  flex-basis: 20%;
  margin-bottom: 10px;
  margin: 0;
}
.text-flex {
  display: flex;
  text-decoration: none;
}

.small-text {
  margin-top: 10px;
}
.floral-img {
  margin: 0 auto;
  max-width: 50%;
}
/*********** Media Queries  ************/

@media screen and (min-width: 200px) and (max-width: 529px) {
  .floral-img {
    margin: 0 auto;
    max-width: 90%;
  }
  .text-flex {
    flex-direction: column;
  }
}

@media (min-width: 530px) {
  .floral-img img {
    max-width: 100%;
  }
  .text-container {
    width: 300px;
  }
}
@media screen and (max-width: 900px) {
  .floral-img img {
    max-width: 100%;
  }
}
</style>
