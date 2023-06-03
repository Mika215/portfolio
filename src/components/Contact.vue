<script setup>
import {ref, onMounted} from "vue";
import LinkedinIcon from "../assets/images/linkedin-icon.svg";
import GithubIcon from "../assets/images/github-icon.svg";
import DiscordIcon from "../assets/images/discord-icon.svg";
import StackOverflowIcon from "../assets/images/stackoverflow-icon.svg";

const contact = ref({
  name: "",
  email: "",
  message: "",
});

const onSubmit = () => {
  console.log("Form submited!");
  console.log(contact);
};

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

onMounted(() => {
  console.log(contact.value);
});
</script>

<template>
  <section id="contact">
    <div class="section-header">
      <h1>Get in touch</h1>
      <div class="contact-socials">
        <ul class="contact-socials-container">
          <li v-for="(social, i) in socialMedias" :key="i" class="social">
            <a :href="social.href" target="_blank">
              <span>
                <img :src="social.logo" :alt="social.name" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="contact-body">
      <div class="contact-text">
        Please feel free to get in touch anytime, whether for work inquiries or
        to just say hello! I am currently looking for junior developer job
        ofers, and always excited to hear for your interesting proposals.
      </div>
      <form @submit.prevent="onSubmit" class="contact-form">
        <div class="sender-info">
          <div class="subform-wrapper">
            <label for="name">Your name</label>
            <input
              type="text"
              id="name"
              :value="contact.name"
              placeholder="enter your full name..."
            />
          </div>
          <div class="subform-wrapper">
            <label for="email">Your email</label>
            <input
              type="text"
              id="email"
              :value="contact.email"
              placeholder="enter your email..."
            />
          </div>
        </div>
        <div class="sender-message">
          <label for="message">Your name</label>
          <textarea
            id="w3review"
            name="w3review"
            rows="10"
            cols="auto"
            :value="contact.message"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <div class="button-container">
          <button>Send</button>
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

.section-header {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.section-header h1 {
  font-size: 2rem;
}

.contact-socials-container {
  display: flex;
  gap: 1rem;
}

.social {
  list-style: none;
}
.social span {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  padding: 0.33rem;
  border: 1px solid silver;

  border-radius: 50%;
}
.social img {
  height: 32px;
  width: 32px;
  padding: 0.33rem;
  object-fit: cover;
  transition: 0.11s;
}

.social img:hover {
  padding: 0.2rem;
}

.contact-body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-text {
  text-align: justify;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sender-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.sender-info input {
  padding: 10px 15px;
}

.subform-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sender-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}
.sender-message textarea {
  padding: 10px 15px;
}

.button-container {
  display: flex;
  justify-content: center;
}
.button-container button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: auto;
  border-radius: 24px;
  background-color: var(--clr-armyGreen);
  color: white;
  font-weight: 700;
  padding: 0.7rem 1.5rem;
  border: none;
}

/* .section-header h1::after {
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
  .sender-info {
    grid-template-columns: repeat(2, 1fr);
  }

  .button-container {
    justify-content: flex-end;
  }
}
</style>
