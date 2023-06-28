<script setup>
// import LandingIcon from "../assets/images/front-end-development.jpeg";
// import LandingIcon from "../assets/images/mikacodes-logo.jpeg";
import LandingIcon from "../assets/images/mikacodes-logo.png";

import Michael from "../assets/images/michael.jpeg";
import PDFURL from "../assets/files/michael-tesfay-frontend-dev-cv-latest.pdf";
</script>

<template>
  <section id="about" class="landing">
    <div class="landing-wrapper">
      <div class="landing-image">
        <!-- <img :src="LandingIcon" alt="encryption-svg" /> -->
        <img :src="Michael" alt="encryption-svg" />
      </div>
      <article class="landing-content">
        <h2 class="heading-lg primary">Michael Tesfay</h2>
        <p class="heading-lg secondary">One solution leads to the next!</p>
        <p class="spartan">
          I am a junior web developer specializing on MongoDB,
          Express,VueJs,React and NodeJS. I took a bold decision to make a
          carrier shift from a media and communications professional background
          (in which I have worked for about a decade) in persuit of a powerful
          tool - Web Development. <br />In addition to my technical skills, I
          also possess strong soft skills such as communication and teamwork.
          These skills enable me to work effectively with others and deliver
          projects that meet client requirements.
        </p>
        <p class="spartan">
          When I'm not working on coding projects, I enjoy indulging in my
          hobbies of ping-pong,swimming and Volunteering . These activities
          allow me to unwind and recharge after spending long hours coding.
        </p>
        <p class="spartan">
          Overall, I would describe myself as a reliable and hardworking
          individual who takes great pride in my work. I'm always looking for
          ways to improve my skills and knowledge to stay up-to-date with the
          latest web development trends. <br />I strongly believe that webdev is
          all about problem solving and I am determined to persist in the
          adventure of solving real world problems which abundantly exist all
          over my surrounding.
        </p>
      </article>
    </div>
    <div class="btn-container">
      <v-icon name="flag"></v-icon>
      <a :href="PDFURL" class="cv-btn" download>Download CV</a>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500;600;700&display=swap");

.landing {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 2rem;
  min-height: 100vh;
  justify-content: center;
}
.spartan {
  font-family: Raleway;

  /* font-family: spartan; */
  color: #595a5a;
}
.spartan + .spartan {
  margin-top: 0.7rem;
}
.landing-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 2rem;
}
.landing-image {
  padding: 3rem 1rem;
  display: flex;
  align-items: center;
}
.landing-image img {
  max-width: 100%;
  height: auto;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
}

.btn-container a {
  display: block;
  text-align: center;
  text-decoration: none;
}
.heading-lg {
  font-family: Raleway;

  font-size: clamp(30px, 6vw, 70px);
  /* clamp(40px, 8vw, 80px); */
}
.primary {
  font-weight: 800;
  /* font-size: 3.5rem; */
}

.secondary {
  color: #595a5a;
  /* color: #a799b7; */

  font-weight: 600;
  margin: 0;
  /* font-size: 2rem; */

  font-size: clamp(20px, 4vw, 30px);
}

.cv-btn {
  width: 100%;
  height: 2rem;
  border-radius: 12px;
  background-color: var(--clr-armyGreen);
  color: white;
  font-weight: 500;
  padding: 0.5rem;
  border: none;
  font-family: "Raleway";
}
.landing-content p {
  letter-spacing: 1;
  line-height: 1.5;
  /* text-align: justify; */
  text-align: start;
}
.landing-content p + p {
  margin-top: 1rem;
}

@media (min-width: 421px) {
  .landing-wrapper {
    flex-direction: row;
  }
  .cv-btn {
    width: 20%;
  }

  .landing-content {
    padding-top: 2rem;
    padding-right: 2rem;
  }
}
</style>
