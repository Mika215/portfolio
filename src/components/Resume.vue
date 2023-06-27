<script setup>
import {ref, onMounted} from "vue";
import {useNow, useDateFormat} from "@vueuse/core";
import LocationIcon from "../assets/images/location-pin-svgrepo-com.svg";

// always make sure that the data types are the same
//  unless it will trigger when you do the opertator == vs === because one is "string type "& the other number type

let activeId = ref("1");

const getActiveTab = (tabId) => {
  let companiesList = companies?.value;

  companiesList.map((c) => {
    if (c.id === tabId) {
      activeId.value = tabId;
    }
  });
};

const formatDate = (date) => {
  let formatedDate = useDateFormat(date, "MMMM YYYY", {
    locales: "en-US",
  });
  return formatedDate.value;
};

const companies = ref([
  {
    id: "1",
    name: "Infinity Mobile",
    address: {
      street: "Rue de Mauvais ligne",
      code: 4020,
      city: "Liege",
      country: "Belgium",
    },
    industry: "Software company",
    contractType: "Full time",
    sartDate: "2022/04/01",
    endDate: "2022/12/30",
    jobTitle: "Frontend developer",
    website: "https://infinity-mobile.io/",

    jobDesc: [
      "writting clean and reusable code for the company's main platform (saylcoud)",
      "implementing design updates and functionalities of the companies website",
      "building reusable components using vuejs",
      "manupilating API data retrieved from the company's backend as well as from third party APIs",
      "building KPIs & analytics for the company's localization platform -mainly uses Google translation API",
      "revewing PRs on Jira and making minor optimaizations when needed ",
      "refactoring legacy codebase",
    ],
    techs: ["Javascript,vueJs,SCSS,NodeJs,Strapi,MySql,MongoDB"],
  },
  {
    id: "2",
    name: "Becode",
    address: {
      street: "Rue de Mulin",
      code: 4020,
      city: "Liege",
      country: "Belgium",
    },
    industry: "ICT",
    contractType: "Full time",
    sartDate: "2021/09/07",
    endDate: "2022/03/28",
    jobTitle: "Junior developer",
    website: "https://becode.org/",

    jobDesc: [
      "built and deployed various solo as well as group projects on Heroku,netlify & Github pages",
      "presented more than 7 tech talks on various tech topics",
      "participated on hackathons",
      "built a fullstack e-comerce website using react,nodejs,express and mongose",
      "experimented various programing languages and framworks including TS,PHP,C#",
    ],
    techs: ["Javascript,React,SCSS,NodeJs,MongoDB"],
  },
]);

onMounted(() => {
  getActiveTab(activeId.value);
});
</script>

<template>
  <section id="experience">
    <h2 class="resume-title">Where i have worked</h2>
    <div class="resume-content">
      <div class="work-tabs">
        <ul v-for="company in companies" :key="company.id">
          <li
            @click="getActiveTab(company.id)"
            class="work-tab"
            :class="company.id === activeId ? '-is-active' : ''"
          >
            {{ company.name }}
          </li>
        </ul>
      </div>
      <template v-for="company in companies" :key="company.id">
        <div v-if="company.id === activeId" class="work-details">
          <div class="work-details-header">
            <h3>
              {{ company.jobTitle }}
              <a :href="company.website" target="”_blank”"
                >@{{ company.name }}</a
              >
            </h3>

            <p>
              {{ formatDate(company.sartDate) }} -
              {{ formatDate(company.endDate) }}
            </p>
            <p>
              <img
                :src="LocationIcon"
                alt="location-icon"
                class="location-icon"
              />
              {{ company.address.city }},{{ company.address.country }}
            </p>
          </div>
          <div class="tasks-container">
            <ul v-for="(task, i) in company.jobDesc" :key="i">
              <li class="task">{{ task }}</li>
            </ul>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500;600;700&display=swap");

#experience {
  min-height: 100vh;
  /* border: 1px solid red; */

  width: auto;
  margin: 1rem;
  padding: 1rem;
  min-height: 100vh;
}

.resume-title {
  position: relative;
  font-family: Raleway;
  font-weight: 800;
}

/* .resume-title::after {
  content: "";
  display: block;
  position: relative;
  top: -10px;
  width: 50px;
  height: 1px;
  margin-left: 15rem;

  background-color: var(--clr-golden);
} */

.resume-content {
  font-family: Raleway;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 50vh;
  width: auto;
  font-family: Raleway;
}

.work-tabs {
  display: flex;
  gap: 1rem;
  background-color: var(--clr-armyGreen);
  padding: 10px 3px;
}
.work-tab {
  color: white;
  margin: 0.2rem;
  padding: 0.2rem;
  cursor: pointer;
  font-family: Raleway;
}
.work-details-header {
  display: flex;
  flex-direction: column;
  gap: 0.36rem;
}

.work-details-header h3 {
  font-family: Raleway;
  font-weight: 700;
}
.work-details-header h3 a {
  color: var(--clr-golden);
  font-family: Raleway;
  font-weight: 400;
}

.work-details-header h3 a:hover {
  color: #d1b000;
}

.work-details-header p {
  font-family: Raleway;
}

.work-details {
  padding: 0.5rem;
  padding-top: 0;
}

.-is-active {
  /* color: white; */
  color: var(--clr-green);
  /* background-color: var(--clr-armyGreen); */
  /* opacity: 0.5; */
  border-bottom: 2px solid var(--clr-golden);
  padding-bottom: 0.5rem;
  /* width: 100%; */
  /* transition: 0.5s ease; */
}

.tasks-container {
  padding: 0.5rem;
  padding-top: 1.5rem;
  margin-left: 0.2rem;
  margin-top: 0.4rem;
}

.task {
  font-family: Raleway;

  /* border: 1px solid blue; */
}

.task::before {
  content: "▹";
  margin-right: 0.65rem;
  color: var(--clr-golden);
  font-weight: 800;
}

li {
  list-style: none;
  margin: 0.5rem;
}

.location-icon {
  margin-top: 0.5rem;
  height: 13px;
  width: 15px;
}

@media (min-width: 421px) {
  .resume-content {
    flex-direction: row;
  }
  .resume-title::after {
    width: 208px;
  }
  .work-tabs {
    flex-direction: column;
  }
  .-is-active {
    color: var(--clr-green);

    /* color: white; */
    /* background-color: var(--clr-armyGreen); */
    /* opacity: 0.5; */
    border-bottom: none;
    border-left: 2px solid var(--clr-golden);
    padding-bottom: 0;
    padding-left: 0.5rem;
  }
}
</style>
