<script setup>
import {ref, onMounted} from "vue";

const contact = ref({
  firstName: "xx",
  lastName: "xxx",
  email: "",
  message: "x",
});

onMounted(() => {
  console.log(contact.value);
});
</script>

<template>
  <section id="contact">
    <h2>Contact</h2>
    <article>
      <p>
        You want to reach me out for a job offer,our rather to have furher
        converstaion? well my inbox is always open to recieve your emails just
        drop me one and i would be glad to read you and to come back to you at
        the earliest!
      </p>

      <form v-if="contact" action="" class="form">
        <div class="name">
          <div>
            <label for="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value="contact.value.firstName"
            />
          </div>
          <div>
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" value="contact.value.lastName" />
          </div>
        </div>
        <label for="email">Email</label>
        <input type="email" value="contact.value.email" />
        <label for="message">Message</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value="contact.value.message"
          required
        ></textarea>
        <button>Submit</button>
      </form>
    </article>
  </section>
</template>

<style scoped>
#contact {
  min-height: 100vh;
  border: 2px solid red;
}

article {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin: 2rem 7rem;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  /* min-width: 370px; */
  width: auto;
  padding: 3rem 2rem;
  border-radius: 4%;
  /* margin: 10rem 18rem; */
  /* border: 2px solid green; */

  -webkit-box-shadow: -5px 6px 15px -1px rgba(152, 158, 154, 0.97);
  -moz-box-shadow: -5px 6px 15px -1px rgba(152, 158, 154, 0.97);
  box-shadow: -5px 6px 15px -1px rgba(152, 158, 154, 0.97);
}

.name {
  display: flex;
  gap: 0.3rem;
  width: 100%;
}

@media (min-width: 421px) {
  article {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
