<template>
  <main
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
    :delay="300"
  >
    <div class="content-main">
      <h1>Illustrations</h1>
      <p>Materials I use: iPad Pro, Apple Pencil gen 3, Procreate</p>
      <p class="ig-link">
        For more illustrations, follow
        <a
          href="https://www.instagram.com/esiestudio/"
          class="circle-link"
          target="_blank"
          ><b>esiestudio</b></a
        >
      </p>
    </div>
  </main>

  <div
    class="grid"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
    :delay="300"
  >
    <img src="/src/assets/img/tulips.png" alt="tulips illustration" />
    <img
      src="/src/assets/img/ghosts.png"
      alt="figure with blonde hair and green vest with ghosts and glitter around it"
    />
    <img src="/src/assets/img/sketches.png" alt="sketches illustration" />

    <img
      src="/src/assets/img/MeekosHouse.png"
      alt="meeko's house illustration"
    />
    <img src="/src/assets/img/lenny.png" alt="lenny" />
    <img
      src="/src/assets/img/me-and-things.png"
      alt="meeko's house illustration"
    />
  </div>
  <div id="lightbox">
    <img src="" />
    <span class="close">&times;</span>
  </div>
</template>

<script>
export default {
  mounted() {
    const grid = document.querySelector(".grid");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox.querySelector("img");
    const closeBtn = lightbox.querySelector(".close");

    grid.addEventListener("click", function (event) {
      if (event.target.tagName === "IMG") {
        lightboxImg.src = event.target.src;
        lightbox.style.display = "flex";
      }
    });

    closeBtn.addEventListener("click", function () {
      lightbox.style.display = "none";
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  },
};
</script>

<style scoped>
.content-main {
  margin: 0 auto;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}
.grid img {
  margin: 10px;
  max-width: 30%;
  height: auto;
  cursor: pointer;
}

#lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

#lightbox img {
  display: block;
  max-width: 90%;
  max-height: 90%;
  margin: auto;
  margin-top: 50px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#lightbox .close {
  position: absolute;
  top: 20px;
  right: 60px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

/* media queries */
@media screen and (min-width: 320px) and (max-width: 780px) {
  .ig-link {
    margin-bottom: 0px;
  }
  .grid {
    flex-direction: column;
    align-items: center;
  }
  .grid img {
    max-width: 50%;
  }
}
</style>
