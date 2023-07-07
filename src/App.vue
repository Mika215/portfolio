<script setup>
import {ref, onMounted, onUnmounted} from "vue";
import {RouterLink, RouterView} from "vue-router";
import {intersecObserver} from "./helpers/index.js";

import Header from "./components/Header.vue";
import Landing from "./components/Landing.vue";
import Skill from "./components/Skill.vue";
import Project from "./components/Project.vue";
import Resume from "./components/Resume.vue";
import Contact from "./components/Contact.vue";

import ArrowUp from "./assets/images/arrow-up.png";
import Ecommerce from "./assets/images/ecommerce-latest.png";
import Behelp2 from "./assets/images/behelp-small.png";

// import Weather from "./assets/images/weather.png";
import Weather from "./assets/images/weather-new.png";

import DjProject from "./assets/images/dj-project.png";

const styledSection = ref(null);
const sections = ref([]);
const isActiveMobMenu = ref(false);
const isHiddenMobMenu = ref(true);
const isTopPage = ref(true);
const isScrollingDown = ref(false);
const prevScrollLength = ref(window.pageYOffset);

const mobileMenuItems = ref([
  {
    label: "About",
    id: "about",
    href: "#about",
  },
  {
    label: "Skills",
    id: "skills",
    href: "#skills",
  },
  {
    label: "Projects",
    id: "projects",
    href: "#projects",
  },
  {
    label: "Experience",
    id: "experience",
    href: "#experience",
  },
  {
    label: "Contact",
    id: "contact",
    href: "#contact",
  },
]);

const projects = ref([
  {
    title: "DallolMart",
    type: "FullStack",
    techs: ["React", "NodeJs", "Mongoose", "Strip"],
    links: {
      github: "https://github.com/Mika215/dallolmart",
      open: "#",
    },
    hostedOn: "Netlify",
    description: "Fullstack e-commerce",
    id: 1,
    img: `${Ecommerce}`,
  },
  {
    title: "Behelp",
    type: "FullStack",
    techs: ["Vue2", "Sass", "Mongoose", "NodeJs"],
    hostedOn: "Heroku",
    links: {
      github: "https://github.com/Mika215/BeHelp",
      open: "https://behelp.netlify.app/",
    },
    description: "Refugees & volunteers in BE",
    id: 2,
    img: `${Behelp2}`,

    href: "https://behelp.netlify.app/",
  },
  {
    title: "Weather App",
    type: "Frontend",
    techs: ["React", "SCSS", "APIs"],
    hostedOn: "Netlify",
    links: {
      github: "https://github.com/Mika215/weather-app-mika",
      open: "https://weather-app-mika.netlify.app/",
    },
    description: "Weather App",
    id: 3,
    img: `${Weather}`,
    href: "https://weather-app-mikacodes.netlify.app/",
  },
  {
    title: "Project DJ - Mr Oizo",
    type: "Frontend",
    techs: ["HTML5", "Sass", "vanilaJS"],
    hostedOn: "Github pages",
    links: {
      github: "https://github.com/Mika215/dj-project",
      open: "https://mrsociety404.github.io/dj-project/",
    },
    description: "DJ's new releases and events.",
    id: 4,
    img: `${DjProject}`,
    href: "https://mrsociety404.github.io/dj-project/index.html",
  },
]);

const handleScroll = (e) => {
  // scroll-to-top state controller
  window.scrollY === 0 ? (isTopPage.value = true) : (isTopPage.value = false);

  // navBar state controller
  let currentScrollLength = window.pageYOffset;

  prevScrollLength.value > currentScrollLength
    ? (isScrollingDown.value = false)
    : (isScrollingDown.value = true);

  prevScrollLength.value = currentScrollLength;
};

const onMobMenuClick = (target) => {
  handleMenu();
};
const handleMenu = (event) => {
  isActiveMobMenu.value = !isActiveMobMenu.value;
  isHiddenMobMenu.value = !isHiddenMobMenu.value;
};

const scrollToTop = () => {
  window.scrollTo({top: 0, behaviour: "smooth"});
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  sections.value = document.querySelectorAll(".-has-obsereved");
  sections.value.forEach((section) => {
    intersecObserver.observe(section);
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <Header
    class="header-component"
    :class="isScrollingDown && '-hide'"
    @toggle-menu="handleMenu"
    :isActive="isActiveMobMenu"
    :isHidden="isHiddenMobMenu"
  />
  <main class="wrapper">
    <img
      class="scroll-to-top"
      :class="!isTopPage && '-show'"
      :src="ArrowUp"
      @click="scrollToTop"
    />
    <div
      v-if="isActiveMobMenu"
      class="mobile-menu"
      :class="{'is-hidden': isHiddenMobMenu}"
    >
      <div class="menu-items">
        <a
          v-for="item in mobileMenuItems"
          class="menu-item"
          :key="item.id"
          :href="item.href"
          @click="onMobMenuClick(item.href)"
          >{{ item.label }}</a
        >
      </div>
    </div>
    <Landing ref="styledSection" />
    <section id="skills" class="-has-obsereved">
      <h2 class="skills-title">Skills</h2>
      <p>Some of my skills and techs</p>
      <Skill />
    </section>
    <section id="projects" class="-has-obsereved">
      <h2 class="projects-title">Project</h2>
      <p>Here are some of the projects I have developed</p>
      <template class="projects-grid">
        <Project
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :img="project.img"
          :techs="project.techs"
          :href="project.href"
          :links="project.links"
        />
      </template>
    </section>

    <Resume class="-has-obsereved" />
    <Contact class="-has-obsereved" />
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 2rem;
}

.scroll-to-top {
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: fixed;
  border: none;
  bottom: 5px;
  right: 15px;
  z-index: 98;
  height: 40px;
  width: 40px;
  cursor: pointer;
  -webkit-box-shadow: 9px -1px 24px -9px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 9px -1px 24px -9px rgba(0, 0, 0, 0.41);
  box-shadow: 9px -1px 24px -9px rgba(0, 0, 0, 0.41);
}

.header-component {
  transition: 0.2s ease-in-out;
}

.-hide {
  top: -50px;
}
.-show {
  display: flex;
}

.mobile-menu {
  position: fixed;

  height: 100vh;
  top: 48px;
  width: 100%;
  background-color: var(--clr-armyGreen);
  opacity: 0.99;
  transition: 0.5s;
  z-index: 99;
}

.mobile-menu .is-hidden {
  display: none;
  overflow: hidden;
}

.menu-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 20px;
  margin-top: 4rem;
}

.menu-item {
  display: flex;
  text-decoration: none;
  background: ivory;
  opacity: 0.8;
  color: #5a5436;
  width: 70%;
  padding: 5px;
  justify-content: center;
  align-items: center;
}
.menu-item:hover {
  color: var(--clr-golden);
  font-weight: 600;
}

/* .-has-obsereved {
  transform: translateX(100px);
  opacity: 0;
  transition: 870ms;
} */

/* .show {
  transform: translateX(0);
  opacity: 1;
} */

#projects {
  margin: 1rem;
  padding: 1rem;
  min-height: 100vh;
}

#projects .projects-title {
  font-size: 1.8rem;
  font-family: Raleway;
}
#projects p {
  font-family: Raleway;
}

#skills {
  margin: 1rem;
  margin-top: 1.5rem;

  padding: 1rem;
  min-height: 100vh;
}

#skills .skills-title {
  font-size: 1.8rem;
  font-family: Raleway;
}
#skills p {
  font-family: Raleway;
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

@media (min-width: 420.1px) {
  .mobile-menu {
    display: none;
  }
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
