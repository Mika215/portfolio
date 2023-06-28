<script setup>
import {ref} from "vue";
// import mikacodesIcon from "../assets/images/mikacodes-logo.png";
import mikacodesIcon from "../assets/images/mikacodes-logo.jpeg";

const emit = defineEmits(["toggle-menu"]);

const toggleMobMenu = () => {
  emit("toggle-menu");
  // console.log(`isActive:${props.isActive}, isHidden:${props.isHidden}`);
};

const props = defineProps({
  isActive: {
    type: Boolean,
  },
  isHidden: {
    type: Boolean,
  },
});

const menuItems = ref([
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
</script>

<template>
  <div class="nav">
    <a href="#about" class="logo-container">
      <img :src="mikacodesIcon" alt="mikacodes-logo" class="logo" />
    </a>
    <div
      class="hamburger mobile"
      :class="{'is-active': isActive}"
      @click="toggleMobMenu"
    >
      <div class="bar bar-two"></div>
    </div>
    <ul class="nav-items">
      <li class="nav-item">
        <a v-for="item in menuItems" :key="item.id" :href="item.href">{{
          item.label
        }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500;600;700&display=swap");

/* .wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
} */
.logo-container {
  display: inline-block;
  width: 55px;
  height: 48px;
  margin-left: 1rem;
  /* border: 1px solid red; */
}
.logo {
  width: 100%;
  height: 100%;
  /* font-size: 1.25rem;
  font-weight: 800;
  cursor: pointer;
  margin-left: 0.5rem;
  font-family: "Raleway"; */
}
.hamburger {
  width: 46px;
  height: 44px;
  position: relative;
  cursor: pointer;
}

.bar {
  position: absolute;
  top: 44%;
  left: 10%;
  width: 30px;
  height: 3px;
  background: #fcfcfc;
  border-radius: 1.5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.bar:before {
  top: -10px;
}

.bar:after {
  top: 10px;
}

.bar-two:before,
.bar-two:after {
  content: "";
  position: absolute;
  width: 30px;
  height: 3px;
  background: #fcfcfc;
  border-radius: 1.5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.hamburger.is-active .bar-two {
  background: rgba(0, 0, 0, 0);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0);
}

.hamburger.is-active .bar-two:before {
  top: 0;
  transform: rotate(135deg);
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);
}

.hamburger.is-active .bar-two:after {
  top: 0;
  transform: rotate(225deg);
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);
}

.nav {
  display: flex;
  position: fixed;
  z-index: 99;
  top: 0;

  justify-content: space-between;
  align-items: center;
  background: var(--clr-armyGreen);
  color: white;
  min-height: 50px;
  width: 100%;
}

.hamburger.mobile {
  position: absolute;
  top: 0;
  right: 0;
  display: none;
}

.nav-items {
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-item {
  list-style: none;
  display: flex;
  font-family: "Raleway";
}

.nav-item a {
  text-decoration: none;
  color: white;
  display: block;
  padding: 1rem;
  cursor: pointer;
}

.nav-item a:hover {
  color: var(--clr-green);
  font-weight: 600;
}
.nav-item a:active {
  color: var(--clr-green);
}

@media (max-width: 420px) {
  .nav {
    justify-content: center;
    /* on smaller screen/mobile/ this property affects how the log displays if changed to its initial value'space-between' */
  }
  .nav-items {
    display: none;
  }

  .hamburger.mobile {
    display: block;
  }

  .nav {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (min-width: 690px) {
  .nav {
    padding: 0 3rem;
  }
}

@media (min-width: 420.1px) {
  /* .nav {
    padding: 0 3rem;
  } */
}
</style>
