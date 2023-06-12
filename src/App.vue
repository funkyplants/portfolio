<script setup>
import { RouterLink, RouterView } from "vue-router";
import logo from "./components/icons/LogoName.vue";
</script>
<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/">
        <logo msg="esie studio" />
      </RouterLink>
      <div class="nav-responsive">
        <!-- Render hamburger menu for mobile screens -->
        <button
          v-if="isMobile"
          :class="['hamburger', { active: isMenuOpen }]"
          @click="toggleMenu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
      <!-- Render regular nav for desktop screens -->
      <nav v-if="!isMobile || isMenuOpen" :class="{ active: isMenuOpen }">
        <ul>
          <li>
            <RouterLink to="/design" @click="closeMenu"> Design</RouterLink>
          </li>
          <li>
            <RouterLink to="/illustrations" @click="closeMenu">
              Illustrations</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/contact" @click="closeMenu"> Contact</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
  <footer>
    <p>
      {{ new Date().getFullYear() }} ©esiestudio | This is a Vue.js project
      developed by Sofie Kastelli
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isMobile: false,
    };
  },
  mounted() {
    // Check if screen is in mobile form
    this.isMobile = window.innerWidth <= 500;

    // Listen for window resize to update mobile flag
    window.addEventListener("resize", this.updateMobileFlag);
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    updateMobileFlag() {
      this.isMobile = window.innerWidth <= 500;
      if (!this.isMobile) {
        this.isMenuOpen = false; // Close menu when transitioning to desktop
      }
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
  beforeDestroy() {
    // Cleanup the event listener
    window.removeEventListener("resize", this.updateMobileFlag);
  },
};
</script>

<style>
header {
  max-height: 70vh;
}

/* X button etc. */
.hamburger {
  position: fixed;
  padding: 10px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 50px;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: transform 0.3s ease;
}
/* the x effect */
.hamburger span {
  width: 100%;
  height: 2px;
  background-color: #000;
  transition: transform 0.3s ease;
}
.hamburger span:not(:last-child) {
  margin-bottom: 5px;
}

.hamburger.active span:first-child {
  transform: translateY(10px) rotate(45deg);
  background-color: #b3b3b3;
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
  background: #000;
  background-color: #b3b3b3;
}

.hamburger.active span:last-child {
  transform: translateY(-10px) rotate(-45deg);
  background-color: #b3b3b3;
}
.hamburger.active {
  margin-top: 15px;
  left: 15px;
}

.hamburger:hover {
  color: white;
}

.bar {
  width: 100%;
  height: 2px;
  margin: 3px 0;
  background: #000;
}

nav.active {
  display: block;
}

/***** Hamburger menu *****/

@media (max-width: 500px) {
  nav {
    padding: 50px 0;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 22vh;
    font-size: 22px;
    font-weight: 400;
    text-align: left;
    color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.714);
    transition: all 0.5s ease;
    z-index: 9999;
    border-radius: 10px;
  }
  nav ul li {
    list-style-type: none;
    padding: 10px;
    margin: 0;
  }
  nav ul li a {
    color: white;
    font-weight: 700;
  }

  nav ul li a {
    text-decoration: none;
    position: relative;
  }

  nav ul li a::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    box-shadow: 0 0 0 2px #fffafa; /* Adjust the color and size as needed */
    border-radius: 100%;
    opacity: 0;
    transition: all 0.3s ease;
  }
  nav ul li a:hover::before {
    width: 120%;
    height: 100%;
    opacity: 1;
  }
}

/********* Desktop navigation screen *************/

@media (min-width: 501px) {
  nav {
    padding: 1rem 0;
    width: 100%;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    color: rgb(0, 0, 0);
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  nav ul li {
    display: inline-block;
    margin-right: 10px;
  }

  nav ul li a {
    text-decoration: none;
    position: relative;
  }

  nav ul li a::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    box-shadow: 0 0 0 2px #6d6d6d;
    border-radius: 100%;
    opacity: 0;
    transition: all 0.3s ease;
  }

  nav ul li a:hover::before {
    width: 90%;
    height: 140%;
    opacity: 1;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
  }
}
</style>
