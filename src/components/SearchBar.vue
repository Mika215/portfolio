<script setup>
import {ref, reactive, computed} from "vue";

const searchQuerry = ref("");
const filterTags = ref([]);

const onSearch = () => {
  console.log("Search function fired!");
  console.log("the acctual search fucntion is not yet set!");
};

const addTag = () => {
  const newTag = searchQuerry.value;
  const modifiedTags = [...filterTags.value, newTag];
  filterTags.value = modifiedTags;
  searchQuerry.value = "";
  return filterTags;
};

const removeTag = (tagIndex) => {
  filterTags.value.splice(tagIndex, 1);
};
</script>

<template>
  <div class="search__conainer">
    <div class="search__wrapper">
      <input
        type="input"
        v-model="searchQuerry"
        @keyup.enter="addTag"
        class="search__input"
      />
      <button class="search__btn" @click="onSearch">Search</button>
    </div>
    <div class="search__filter-tags-wrapper">
      <ul class="search__tags">
        <li
          v-for="(tag, index) in filterTags"
          class="search__tag"
          @click="removeTag(index)"
          :key="index"
        >
          {{ tag }}<span>x</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.search__conainer {
  padding: 1rem 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.search__wrapper {
  display: flex;
  gap: 1rem;
}

.search__input {
  display: block;
  width: 85%;
  padding: 4px 2px;
  border-radius: 5px;
}

.search__tags {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.3rem;
}

.search__tag {
  list-style: none;
  cursor: pointer;
  background-color: lightgray;
  border-radius: 10px;
  padding: 0.24rem 1rem;

  display: flex;
  position: relative;
}
.search__tag span {
  position: absolute;
  right: 10px;
  font-size: 0.8rem;
}
.search__tag span:hover {
  color: red;
}
.search__btn {
  width: 20%;
}
.search__filter-tags-wrapper {
  min-height: 60px;
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.3rem 0.2rem;
}

@media (min-width: 649px) and (max-width: 1048px) {
  .search__tags {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1049px) {
  .search__tags {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
