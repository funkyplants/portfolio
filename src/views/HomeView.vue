<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });
</script>

<template>
  <div
    class="container"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
    :delay="300"
  >
    <div class="content">
      <div class="content-items">
        <div class="image">
          <img src="@/assets/img/profile.png" alt="profile" />
        </div>
        <div class="description">
          <div class="text-container">
            <h1>Hello world! 👋</h1>
            <p>
              My name is Sofie, a creative front-end developer and UX/UI
              designer. I want to create designs that involve everyone.
            </p>
            <h2>Esie?</h2>
            <!-- <div class="description-text"> -->
            <p>
              The name "Esie" came from my nephew who pronounced my name like
              that for many many years. It stuck with me and I have since then
              kept that in my work. He's a rad guy!
            </p>
          </div>
          <div class="btn-container">
            <div class="cta-btn">
              <h4>
                <a
                  href="https://www.linkedin.com/in/sofie-kastelli-4754b8227/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </h4>
            </div>
            <div class="cta-btn">
              <h4>
                <a href="https://www.instagram.com/esiestudio/" target="_blank">
                  Instagram
                </a>
              </h4>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
}
.content-items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 50px;
  max-width: 100%;
}

.image {
  flex-basis: 350px;
  height: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.image img {
  max-width: 85%;
  border-radius: 100%;
}

.text-container {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.text h2 {
  flex-grow: 3;
}

.text h1 {
  margin-top: 2rem;
}

/* p {
  text-overflow: ellipsis;
  width: 80%;
} */

.description {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.description-text {
  margin-top: 10px;
  max-width: 100%;
}

.btn-container {
  display: flex;
  justify-content: space-between;
  padding: 0;
}

.cta-btn {
  width: 150px;
  height: 50px;
  font-weight: 400;
  font-size: 1rem;
  border: solid 1px;
  cursor: pointer;
  line-height: 50%;
  border-radius: 25px;
  transition: background-color 0.3s, color 0.3s;
  text-align: center;
  text-decoration: none;
  margin: 10px;
}

.cta-btn:hover {
  color: white;
  background-color: black;
}

.cta-btn h4 {
  color: black;
}

.cta-btn:hover h4 {
  color: white;
}

/*********** Media Queries  ************/
@media screen and (min-width: 320px) and (max-width: 400px) {
  .content-items {
    display: block;
    padding: 25px;
    max-width: 100%;
  }
  .description {
    margin: 0 auto;
  }
  .image {
    max-width: 60%;
    margin: auto;
  }
  .cta-btn {
    width: 120px;
    height: 50px;
  }
}

@media screen and (min-width: 401px) and (max-width: 1200px) {
  .image {
    max-width: 70%;
    margin: auto;
  }
}
</style>
