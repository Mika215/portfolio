<script setup>
import {ref, computed} from "vue";
import LinkedinIcon from "../assets/images/linkedin-colored.svg";
import GithubIcon from "../assets/images/github-icon.svg";
import DiscordIcon from "../assets/images/discord-icon.svg";
import StackOverflowIcon from "../assets/images/stackoverflow-icon.svg";

const Form_Url = import.meta.env.VITE_FORMSPREE_URL;

const socialMedias = ref([
  {
    name: "LinkedIn",
    logo: LinkedinIcon,
    href: "https://www.linkedin.com/in/mikacodes",
  },
  {
    name: "GitHub",
    logo: GithubIcon,
    href: "https://github.com/Mika215",
  },
  {
    name: "Discord",
    logo: DiscordIcon,
    href: "https://discordapp.com/users/883995435277090827",
  },
  {
    name: "StackOverFlow",
    logo: StackOverflowIcon,
    href: "https://stackexchange.com/users/23826130/michael",
  },
]);
</script>

<template>
  <section id="contact" class="section-contact">
    <div class="section-contact__header">
      <h1>Get in touch</h1>
      <div class="section-contact__socials">
        <ul class="section-contact__socials-wrapper">
          <li
            v-for="(social, i) in socialMedias"
            :key="i"
            class="section-contact__social-item"
          >
            <a :href="social.href" target="_blank">
              <span>
                <img
                  :src="social.logo"
                  :title="social.name"
                  :alt="social.name"
                />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="section-contact__body">
      <div class="section-contact__body-txt">
        Please feel free to get in touch anytime, whether for work inquiries or
        to just say hello! I am currently looking for junior developer job
        ofers, and always excited to hear your interesting proposals.
      </div>
      <form :action="Form_Url" class="section-contact__form" method="POST">
        <div class="section-contact__form-sender-info">
          <div class="section-contact__form-subform-wrapper">
            <label for="fullname"
              >Your name
              <span class="section-contact__form-astrics">*</span></label
            >
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="enter your full name..."
              required
              v-model="fullname"
            />
          </div>
          <div class="section-contact__form-subform-wrapper">
            <label for="email"
              >Your email
              <span class="section-contact__form-astrics">*</span></label
            >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter your email..."
              v-model="email"
              required
            />
          </div>
        </div>
        <div class="section-contact__form-sender-message">
          <label for="message"
            >Your message<span class="section-contact__form-astrics"
              >*</span
            ></label
          >
          <textarea
            id="message"
            name="message"
            rows="10"
            cols="auto"
            placeholder="Write your message here..."
            v-model="message"
            required
          ></textarea>
        </div>
        <div class="section-contact__form-btn-container">
          <button class="contact-btn">Send</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
#contact {
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-contact__header {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.section-contact__header h1 {
  font-size: 1.9rem;
  font-family: Raleway;
}

.section-contact__socials-wrapper {
  display: flex;
  gap: 1rem;
}

.section-contact__social-item {
  list-style: none;
}
.section-contact__social-item span {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  padding: 0.33rem;
  border: 1px solid silver;

  border-radius: 50%;
}
.section-contact__social-item img {
  height: 32px;
  width: 32px;
  padding: 0.33rem;
  object-fit: cover;
  transition: 0.11s;
}

.section-contact__social-item img:hover {
  padding: 0.2rem;
}

.section-contact__body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-contact__body-txt {
  text-align: justify;
  font-family: Raleway;
}

.section-contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.section-contact__form-astrics {
  color: red;
}

.error {
  color: red;
  font-style: italic;
  font-size: 0.8rem;
  padding-left: 0.2rem;
}
.section-contact__form-sender-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.section-contact__form-sender-info input {
  padding: 10px 15px;
}

.section-contact__form-subform-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.section-contact__form-subform-wrapper label,
textarea,
input {
  font-family: Raleway;
}

.section-contact__form-sender-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}
.section-contact__form-sender-message textarea {
  padding: 10px 15px;
}
.section-contact__form-sender-message label,
span,
textarea {
  font-family: Raleway;
}

.section-contact__form-btn-container {
  display: flex;
  justify-content: center;
}
/* .section-contact__form-btn-container button  */
.contact-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: auto;
  border-radius: 24px;
  background-color: var(--clr-armyGreen);
  color: white;
  font-weight: 700;
  padding: 0.7rem 8.5rem;
  border: none;
  font-family: Raleway;
}

/* .section-contact__header h1::after {
  content: "";
  display: block;
  position: relative;
  top: -16px;
  width: 80%;
  height: 1px;
  margin-left: 12rem;
  background-color: var(--clr-golden);
} */

@media (min-width: 421px) {
  .section-contact__form-sender-info {
    grid-template-columns: repeat(2, 1fr);
  }
  .contact-btn {
    padding: 0.7rem 2rem;
  }

  .section-contact__form-btn-container {
    justify-content: flex-end;
  }
}
</style>
