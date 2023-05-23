<script setup>
// import Project from "src/components/Project.vue";
</script>

<template>
  <div class="header-section">
    <div class="main-header">
      <div class="nav-container">
        <nav class="nav-bar">
          <a href="" class="logo-container">
            <!-- <img src="mika-logo.png'" alt="" class="logo" /> -->
          </a>
          <div class="main-menu">
            <ul>
              <li>About</li>
              <li>Projects</li>
              <li>Resume</li>
              <li>Contact</li>
            </ul>
          </div>
          <div class="humberger">
            <span class="nav-toggler">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </span>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
