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
  <main class="main-wrapper">
    <Landing ref="styledSection" />

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
