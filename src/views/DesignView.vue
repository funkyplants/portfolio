<script>
import flaskDesignImage from "@/assets/images/flask-design.jpg";

export default {
  data() {
    return {
      flaskDesignImage: flaskDesignImage,
    };
  },
};
</script>

<template>
  <main>
    <!-- MONO  -->
    <div
      class="projects-content"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
      :delay="300"
    >
      <div class="project-item">
        <div class="image-container">
          <RouterLink to="/mono">
            <img src="src/assets/images/mono-purple.png" alt="" />
            <img src="src/assets/images/mono-yellow.png" alt="" />
          </RouterLink>
          <h2>Mono Application</h2>
          <p class="caption">UX/UI Design / February 2023</p>
          <!-- <div class="cta-btn">
            <RouterLink to="/mono">
              <h4>Read Case</h4>
            </RouterLink>
          </div> -->
        </div>
      </div>
      <div class="project-item">
        <!-- BREW IT  -->
        <div class="image-container2">
          <RouterLink to="/brewit-design">
            <img src="src/assets/images/brew-it.png" alt="" />
          </RouterLink>
          <h2>Brew It Landing Page</h2>
          <p class="caption">Web Design / April 2023</p>
          <!-- <div class="cta-btn">
            <RouterLink to="/brewit-design">
              <h4>Go to case</h4>
            </RouterLink>
          </div> -->
        </div>
      </div>
      <!-- BOTTLE DESIGN -->
      <div class="project-item">
        <div class="image-container2">
          <RouterLink to="/hydrated-design">
            <img :src="flaskDesignImage" alt="" />
          </RouterLink>
          <h2>Hydrate'd Bottle Design</h2>
          <p class="caption">Product Design / April 2023</p>
          <!-- <div class="cta-btn">
            <RouterLink to="/hydrated-design">
              <h4>Go to case</h4>
            </RouterLink>
          </div> -->
        </div>
      </div>
      <!-- POSTER DESIGN -->
      <div class="project-item">
        <div class="image-container2">
          <RouterLink to="/lucidity-design">
            <img src="src/assets/images/Poster3.png" alt="" />
          </RouterLink>
          <h2>Lucidity Poster Design</h2>
          <p class="caption">Product Design / April 2023</p>
          <!-- <div class="cta-btn">
            <RouterLink to="/lucidity-design">
              <h4>Go to case</h4>
            </RouterLink>
          </div> -->
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.project-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 100%;
}
.image-container :nth-child(1) {
  max-width: 100%;
  margin-top: 30px;
}

.image-container img {
  width: 100%;
  height: auto;
}

.image-container img:hover {
  opacity: 0.9;
}

.image-container2 {
  width: 100%;
  max-width: 45%;
}
.image-container2 img:hover {
  opacity: 0.9;
}

.caption {
  text-align: left;
  margin-bottom: 20px;
}

.poster-container {
  margin: 0 auto;
}

.cta-btn {
  margin-top: 0px;
  margin-bottom: 20px;
}

/*********** Media Queries  ************/

@media (min-width: 300px) {
  .image-container {
    max-width: 80%;
  }
  .image-container2 {
    max-width: 80%;
  }
}
@media (min-width: 500px) {
  .image-container {
    max-width: 60%;
  }
  .image-container2 {
    max-width: 80%;
  }
}
@media (min-width: 780px) {
  .image-container {
    max-width: 40%;
  }
  .image-container2 {
    max-width: 40%;
  }
}
</style>
