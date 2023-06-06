<script setup>
import {ref, onMounted} from "vue";
import {RouterLink, RouterView} from "vue-router";

import Header from "./components/Header.vue";
import Landing from "./components/Landing.vue";
import Project from "./components/Project.vue";
import Resume from "./components/Resume.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

import Ecommerce from "./assets/images/e-commerce.jpg";
import RoomBooking from "./assets/images/room-booking.webp";
import Axumite from "./assets/images/axumite.webp";
import Gmail from "./assets/images/gmail.png";

const styledSection = ref(null);
const sections = ref([]);

const intersecObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  }
  // {
  //   threshold: 1,
  // }
);

const projects = ref([
  {
    title: "DallolMart",
    type: "FullStack",
    techs: ["Vue3", "NodeJs", "MongoDB"],
    hostedOn: "Netlify",
    description: "Fullstack online commerce",
    id: 1,
    img: `${Ecommerce}`,
  },
  {
    title: "Hidmona",
    type: "FullStack",
    techs: ["Vue3", "NodeJs", "Mysql", "Strip"],
    hostedOn: "Heroku",
    description: "Online roombooking",
    id: 2,
    img: `${RoomBooking}`,
  },
  {
    title: "Axumite",
    type: "FullStack",
    techs: ["React", "Laravel8", "MongoDB"],
    hostedOn: "Hostinger",
    description: "Knowledge sharing platform",
    id: 3,
    img: `${Axumite}`,
  },
  {
    title: "IndoKnow",
    type: "FullStack",
    techs: ["React", "Laravel8", "MongoDB"],
    hostedOn: "Hostinger",
    description: "Knowledge sharing platform",
    id: 4,
    img: `${Gmail}`,
  },
]);

onMounted(() => {
  sections.value = document.querySelectorAll(".styled-section");
  sections.value.forEach((section) => {
    intersecObserver.observe(section);
  });
});
</script>

<template>
  <Header />
  <main class="wrapper">
    <Landing ref="styledSection" />

    
    <div class="app-main">
      <div class="app-main__wrapper">
        <div class="app-main__wrapper-test">
          <ul class="list-container">
            <li class="list-item">1</li>
            <li class="list-item">2</li>

            <li class="list-item">3</li>

            <li class="list-item">4</li>
          </ul>
        </div>
      </div>
    </div>
    <section id="projects" class="styled-section">
      <h2 class="projects-title">Project</h2>
      <p>Here are some of the projects i have developed</p>
      <template class="projects-grid">
        <Project
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :img="project.img"
          :techs="project.techs"
        />
      </template>
    </section>
    <Resume class="styled-section" />
    <Contact class="styled-section" />
  </main>
  <!-- <Footer /> -->
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.styled-section {
  transform: translateX(100px);
  opacity: 0;
  transition: 870ms;
}

.show {
  transform: translateX(0);
  opacity: 1;
}

#projects {
  margin: 1rem;
  padding: 1rem;
  min-height: 100vh;
}

#projects .projects-title {
  font-size: 2rem;
}

/* .projects-title::after {
  content: "";
  display: block;
  position: relative;
  top: -16px;
  width: 70px;
  height: 1px;
  margin-left: 8rem;
  background-color: var(--clr-golden);
} */

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;
  justify-items: center;
}

@media (min-width: 421px) and (max-width: 648px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .projects-title::after {
    width: 340px;
  }
}

@media (min-width: 649px) and (max-width: 1048px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .projects-title::after {
    width: 575px;
  }
}

@media (min-width: 854px) {
  .wrapper {
    margin: 0 3rem;
  }
}

@media (min-width: 1049px) {
  .projects-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .wrapper {
    margin: 0 12rem;
  }

  .projects-title::after {
    width: 815px;
  }
}
</style>
