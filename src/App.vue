<script setup>
import {ref} from "vue";
import {RouterLink, RouterView} from "vue-router";

import Header from "./components/Header.vue";
import LandingPage from "./components/LandingPage.vue";
import Project from "./components/Project.vue";
import Resume from "./components/Resume.vue";
import Footer from "./components/Footer.vue";

import Ecommerce from "./assets/images/e-commerce.jpg";
import RoomBooking from "./assets/images/room-booking.webp";
import Axumite from "./assets/images/axumite.webp";
import Gmail from "./assets/images/gmail.png";

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
    title: "zzzz",
    type: "FullStack",
    techs: ["React", "Laravel8", "MongoDB"],
    hostedOn: "Hostinger",
    description: "Knowledge sharing platform",
    id: 4,
    img: `${Gmail}`,
  },
  {
    title: "yyyyy",
    type: "FullStack",
    techs: ["React", "Laravel8", "MongoDB"],
    hostedOn: "Hostinger",
    description: "Knowledge sharing platform",
    id: 5,
  },
  {
    title: "xxxx",
    type: "FullStack",
    techs: ["React", "Laravel8", "MongoDB"],
    hostedOn: "Hostinger",
    description: "Knowledge sharing platform",
    id: 6,
  },
]);
</script>

<template>
  <Header />
  <main class="wrapper">
    <LandingPage />

    <section id="projects">
      <h2>Projects</h2>
      <p>Here are some of the projects i have developed or/& collaborated</p>
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
    <Resume />
  </main>
  <Footer />
</template>

<style scoped>
.wrapper {
  /* border: 2px solid red; */
}

#projects {
  margin: 1rem;
  padding: 1rem;
}
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
}

@media (min-width: 649px) and (max-width: 1048px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
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
}
</style>
