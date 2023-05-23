<script setup>
import {ref, onMounted} from "vue";

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
    sartDate: "01-04-2022",
    endDate: "30-12-2022",
    jobTitle: "Frontend developer",

    jobDesc: [
      "Writting clean code",
      "developing reusable components",
      "code testing",
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
    sartDate: "07-09-2021",
    endDate: "28-03-2022",
    jobTitle: "Junior developer",

    jobDesc: [
      "Writting clean code",
      "developing reusable components",
      "code testing",
    ],
    techs: ["Javascript,React,SCSS,NodeJs,MongoDB"],
  },
  {
    id: "3",
    name: "MSF",
    address: {
      street: "Rue de Mauvais ligne",
      code: 4020,
      city: "Liege",
      country: "Belgium",
    },
    industry: "Software company",
    contractType: "Full time",
    sartDate: "21-04-2020",
    endDate: "09-12-2020",
    jobTitle: "Web Master",

    jobDesc: [
      "Writting clean code",
      "developing reusable components",
      "code testing",
    ],
    techs: ["Javascript,vueJs,SCSS,NodeJs,Strapi,MySql,MongoDB"],
  },
  {
    id: "4",
    name: "Dallol",
    address: {
      street: "Rue de Mauvais ligne",
      code: 4020,
      city: "Liege",
      country: "Belgium",
    },
    industry: "Software company",
    contractType: "Full time",
    sartDate: "24-04-2016",
    endDate: "17-12-2019",
    jobTitle: "PR officer",

    jobDesc: [
      "Writting clean code",
      "developing reusable components",
      "code testing",
    ],
    techs: ["Javascript,vueJs,SCSS,NodeJs,Strapi,MySql,MongoDB"],
  },
]);

onMounted(() => {
  getActiveTab(activeId.value);
});
</script>

<template>
  <section id="resume">
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
          <ul>
            <li>Job title: {{ company.jobTitle }}</li>
            <li>Start Date: {{ company.sartDate }}</li>
            <li>End Date: {{ company.endDate }}</li>
            <li>
              Address: {{ company.address.city }},{{ company.address.country }}
            </li>
          </ul>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
#resume {
  height: 400px;
  width: auto;
  margin: 1rem;
  padding: 1rem;
}

.work-tabs {
  /* border: 1px solid var(--clr-golden); */
  display: flex;
  background-color: var(--clr-armyGreen);
}
.work-tab {
  color: white;
  margin: 0.2rem;
  padding: 0.2rem;
  cursor: pointer;
}

.resume-content {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.-is-active {
  /* color: white; */
  color: var(--clr-green);
  /* background-color: var(--clr-armyGreen); */
  /* opacity: 0.5; */
  border-bottom: 2px solid var(--clr-golden);
  padding-bottom: 0.5rem;
  /* width: 100%; */
  transition: 0.5s ease;
}

li {
  list-style: none;
  margin: 0.5rem;
}

@media (min-width: 421px) {
  .resume-content {
    flex-direction: row;
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
