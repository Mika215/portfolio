<script setup>
import GithubIcon from "../assets/images/iconmonstr-github-1.svg";

const props = defineProps({
  title: {
    type: String,
    default: "Project title comes here",
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  techs: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="project-box">
    <header>
      <div class="project-top">
        <img :src="GithubIcon" alt="" />
        <img :src="GithubIcon" alt="" />
      </div>
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-description">{{ description }}</p>
      <div class="project-image">
        <img :src="img" alt="" />
      </div>
    </header>
    <footer>
      <ul v-if="techs.length > 0" class="project-techs">
        <li v-for="t in techs">
          {{ t }}
        </li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.project-techs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.79rem;
  /* font-style: italic; */
}

.project-techs li {
  list-style: none;
  /* background-color: gray; */
  border-radius: 5%;
  padding: 2px 5px;
  color: var(--clr-green);
}

.project-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  max-width: 225px;
  padding: 0.75rem;
  border-radius: 4%;
  background-color: var(--clr-armyGreen);
  color: white;
  -webkit-box-shadow: -5px 6px 15px -1px rgba(152, 158, 154, 0.97);
  -moz-box-shadow: -5px 6px 15px -1px rgba(152, 158, 154, 0.97);
  box-shadow: -5px 6px 15px -1px rgba(152, 158, 154, 0.97);
}

.project-box header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
}

.project-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.95rem;
}

.project-title {
}

.project-description {
  color: lightgray;
}

.project-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-image img {
  object-fit: fit;
  max-width: 195px;
  max-height: 130px;
}
</style>
