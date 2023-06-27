<script setup>
import {ref} from "vue";
import Ecommerce from "../assets/images/e-commerce.jpg";

import HTML5 from "../assets/icons/HTML5.svg";
import CSS3 from "../assets/icons/CSS3.svg";
import Sass from "../assets/icons/Sass.svg";
import JavaScript from "../assets/icons/JavaScript.svg";
import Vuejs from "../assets/icons/Vuejs.svg";
import React from "../assets/icons/React.svg";
import Nodejs from "../assets/icons/Nodejs.svg";
import MongoDB from "../assets/icons/MongoDB.svg";
import Git from "../assets/icons/Git.svg";
import GraphQL from "../assets/icons/GraphQL.svg";
import MySQL from "../assets/icons/MySQL.svg";
import Figma from "../assets/icons/Figma.svg";

const mySkills = ref([
  {
    name: "HTML5",
    id: 1,
    icon: `${HTML5}`,
  },
  {
    name: "CSS3",
    id: 2,
    icon: `${CSS3}`,
  },
  {
    name: "Sass",
    id: 3,
    icon: `${Sass}`,
  },
  {
    name: "JavaScript",
    id: 4,
    icon: `${JavaScript}`,
  },
  {
    name: "Vuejs",
    id: 5,
    icon: `${Vuejs}`,
  },
  {
    name: "React",
    id: 6,
    icon: `${React}`,
  },
  {
    name: "NodeJs",
    id: 7,
    icon: `${Nodejs}`,
  },
  {
    name: "MongoDB",
    id: 8,
    icon: `${MongoDB}`,
  },
  {
    name: "Git",
    id: 9,
    icon: `${Git}`,
  },
  {
    name: "GraphQL",
    id: 10,
    icon: `${GraphQL}`,
  },
  {
    name: "MySQL",
    id: 11,
    icon: `${MySQL}`,
  },
  {
    name: "Figma",
    id: 12,
    icon: `${Figma}`,
  },
]);
</script>
<template>
  <section class="skills_section grid">
    <div v-for="skill in mySkills" :key="skill.id" class="skill">
      <!-- {{ skill.name }} -->
      <img :src="skill.icon" :alt="skill.name" :title="skill.name" />
    </div>
  </section>
</template>

<style scoped>
.grid {
  margin-top: 1.5rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  /* border: 2px solid red; */
}
.skill img {
  height: 70px;
  width: 70px;
}

@media (min-width: 421px) and (max-width: 648px) {
  .grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

/* @media (min-width: 649px) and (max-width: 1048px) {
  .grid {
    grid-template-columns: repeat(6, 1fr);
  }
} */

@media (min-width: 649px) {
  .grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

/* @media (min-width: 1049px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
} */
</style>
