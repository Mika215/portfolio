<script setup>
import {ref, onMounted} from "vue";
import {RouterLink, RouterView} from "vue-router";
import {intersecObserver} from "./helpers/index.js";

import Header from "./components/Header.vue";
import Landing from "./components/Landing.vue";
import SearchBar from "./components/SearchBar.vue";
import Project from "./components/Project.vue";
import Resume from "./components/Resume.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

import Ecommerce from "./assets/images/e-commerce.jpg";
import Behelp from "./assets/images/behelp.png";
import Behelp2 from "./assets/images/behelp-2.png";

import RoomBooking from "./assets/images/room-booking.webp";
import Axumite from "./assets/images/axumite.webp";
import Gmail from "./assets/images/gmail.png";
import DjProject from "./assets/images/dj-project.png";

const styledSection = ref(null);
const sections = ref([]);

const projects = ref([
  {
    title: "DallolMart",
    type: "FullStack",
    techs: ["React", "NodeJs", "Mongoose", "Strip"],
    hostedOn: "Netlify",
    description: "Fullstack online commerce",
    id: 1,
    img: `${Ecommerce}`,
  },
  {
    title: "Behelp",
    type: "FullStack",
    techs: ["Vue2", "Sass", "Mongoose", "NodeJs"],
    hostedOn: "Heroku",
    description: "Refugees & volunteers in BE",
    id: 2,
    img: `${Behelp2}`,

    href: "https://behelp.netlify.app/",
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
    title: "Project DJ - Mr Oizo",
    type: "FullStack",
    techs: ["HTML5", "Sass", "vanilaJS"],
    hostedOn: "Hostinger",
    description: "DJ's new releases and events.",
    id: 4,
    img: `${DjProject}`,
    href: "https://mrsociety404.github.io/dj-project/index.html",
  },
]);

onMounted(() => {
  sections.value = document.querySelectorAll(".-has-obsereved");
  sections.value.forEach((section) => {
    intersecObserver.observe(section);
  });
});
</script>

<template>
  <Header />
  <main class="wrapper">
    <Landing ref="styledSection" />
    <section id="projects" class="-has-obsereved">
      <h2 class="projects-title">Project</h2>
      <p>Here are some of the projects i have developed</p>
      <SearchBar />
      <template class="projects-grid">
        <Project
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :img="project.img"
          :techs="project.techs"
          :href="project.href"
        />
      </template>
    </section>
    <Resume class="-has-obsereved" />
    <Contact class="-has-obsereved" />
  </main>
  <!-- <Footer /> -->
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.-has-obsereved {
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
