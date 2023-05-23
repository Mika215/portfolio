<script setup></script>

<template>
  <div class="wrapper">
    <ul class="social-container">
      <li class="social-item">LinkedIn</li>
      <li>satck overflow</li>
      <li>Github</li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  background-color: var(--clr-lightDark);
}

.social-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: white;
}

.social-container {
  list-style: none;
}

.social-container :hover {
  color: var(--clr-golden);
}
</style>
