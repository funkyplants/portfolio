<script setup></script>
<template>
  <main
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
    :delay="300"
  >
    <div class="content-main">
      <h1>Mono Application</h1>
      <p class="project-description">Created in January 2023</p>
      <p class="text-small">
        <span class="bold">Project duration:</span> 4 weeks
      </p>
      <p class="text-small"><span class="bold">Materials:</span> Figma</p>

      <div class="opening-content">
        <p>
          A re-model of an imaginary brand I made in 2021. I wanted to showcase
          my development for the past years in terms of UX and UI design — as
          well as incorportating a bit more of my personal style.
        </p>
      </div>
      <h2>About brand</h2>
      <p>
        Mono. is a contemporary and aesthetic brand with the focus on being at
        the forefront of inclusive fashion, that includes everybody, regardless
        of size, age, and gender. This UX case is an improvement from the UI
        version made in 2021.
      </p>

      <h2>Web Experience</h2>
      <p>
        To create a cohesive experience with the brand's vision, the website was
        built on a mix of playful shapes, colourful details, and interactive
        elements; all to fit with the aesthetic brand. ​​​​​​​
      </p>
      <div class="comparison-container">
        <img src="@/assets/img/mono/old-landing.png" alt="" />
        <img src="@/assets/img/mono/landing.png" alt="" />
      </div>
      <div class="caption-container">
        <p class="caption">Comparison of old (left) version and new (right).</p>
      </div>
      <h2>UX improvements</h2>
      <p>
        The issue with the old version's landing page was the lack of user
        elements. There was also a lack of CTA's, which was added in the newer
        version. Overall, the focus in this iteration was on creating a more UX
        friendly webpage that would still inherit the artistic traits of the
        older version, but with a more organised feel.
      </p>

      <p>
        The newer version also gained a stronger brand identity through
        particular colour choices, personalised details, and usage of different
        shapes. The UI got an added desktop UI in the new version, which was a
        strategic idea to illustrate what particular interactive elements would
        be added in a desktop version and how they would look like in the mobile
        version.
      </p>

      <div class="comparison-container">
        <img src="@/assets/img/mono/old-footer.png" alt="" />
        <img src="@/assets/img/mono/footer.png" alt="" />
      </div>
      <div class="comparison-container">
        <img src="@/assets/img/mono/old-mone.png" alt="" />
        <img src="@/assets/img/mono/vibe.png" alt="" />
      </div>
      <div class="caption-container">
        <p class="caption">Comparison of old (left) version and new (right).</p>
      </div>
      <p class="figma-link">
        <a
          href="https://www.figma.com/proto/O1w24HrUNWhMiP8b6MLmLG/mono-ui-design?page-id=255%3A29&node-id=255-30&starting-point-node-id=255%3A30&scaling=scale-down"
          target="_blank"
        >
          ✨Mobile Demo time!✨</a
        >
      </p>

      <!--- DESKTOP PROOTOTYPE -->
      <div class="desktop-container">
        <h2>Desktop Version</h2>
        <p>
          The desktop version got an interactive mouse-over effect with the
          Daytime / Nightime style option. This was implemented to make the
          design more connected to the brand identity, but also to create a
          small interactive element that the user would find pleasant.
        </p>
        <div class="comparison-container">
          <img src="@/assets/img/mono/night.png" alt="" />
          <img src="@/assets/img/mono/day.png" alt="" />
        </div>
        <div class="desktop-long">
          <img src="@/assets/img/mono/desktop.png" alt="" />
        </div>
        <p class="figma-link">
          <a
            href="https://www.figma.com/proto/O1w24HrUNWhMiP8b6MLmLG/mono-ui-design?page-id=201%3A11&node-id=201-12&starting-point-node-id=201%3A12&scaling=scale-down"
            target="_blank"
          >
            ✨ Desktop Demo Time ✨</a
          >
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
.content-box {
  padding: 0 30px;
}
.opening-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.image-wrapper img {
  max-width: 90%;
  margin-left: 5rem;
}

.text-small {
  font-weight: 200;
  margin: 0;
  margin-bottom: 5px;
}
.bold {
  font-weight: 700;
}
.container {
  display: flex;
  flex-direction: row;
}
.comparison-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 30px;
}

.comparison-container img {
  max-width: 80%;
  height: 100%;
  object-fit: cover;
}

.desktop-long img {
  max-width: 40%;
}

.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container img {
  margin: auto;
  max-width: 100%;
}

.caption-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1vh;
}
.figma-link {
  margin-top: 2rem;
  text-align: center;
  text-decoration: none;
  position: relative;
  font-weight: 600;
  font-size: 20px;
}

.figma-link a::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  box-shadow: 0 0 0 1px #383838;
  border-radius: 100%;
  opacity: 0;
  transition: all 0.3s ease;
}
.figma-link a:hover::before {
  width: 30%;
  height: 100%;
  opacity: 1;
}

.desktop-container {
  display: grid;
  grid-template-columns: auto;
  gap: 2px;
}

.desktop-long {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

/* browser-specific CSS */
@supports not (-webkit-touch-callout: none) {
  .comparison-container img {
    max-width: 100%;
    height: auto;
  }
}
</style>
