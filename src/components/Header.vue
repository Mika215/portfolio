<script setup>
import {ref} from "vue";
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
    <span class="logo"> Mikacodes </span>
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

.logo {
  font-size: 1.25rem;
  font-weight: 800;
  cursor: pointer;
  margin-left: 0.5rem;
  font-family: "Raleway";
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
  position: relative;
  justify-content: space-between;
  align-items: center;
  background: var(--clr-armyGreen);
  color: white;
  /* padding-left: 0.75rem;
  padding-right: 0.2rem; */
  /* marging:0 3rem; */
  min-height: 50px;
  width: 100%;
  /* height:100vh; */
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
  /* background-color: white; */
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
