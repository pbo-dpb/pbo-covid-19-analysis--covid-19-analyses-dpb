<style scoped>
.search-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

@media only screen and (min-width: 768px) {
  .search-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    padding: 0.5em 1em 0.5em 0.5em;
    border-radius: 34px;
    border: 1px solid lightgray;
  }
  input {
    border: none;
    height: 34px;
  }
}

button {
  background-color: lightgray;
  border-radius: 8.5px;
}

@media only screen and (max-width: 768px) {
  .search-wrapper {
    margin-top: 1rem;
    width: 100%;
    border: none;
  }
  input {
    height: 32px;
    font-size: 0.75rem;
    border: 1px solid lightgray;
    border-radius: 0;
    padding: 7px;
  }
}
</style>
<template>
  <div>
    <div :class="{'search-wrapper': shouldShowQuery}">
      <button v-if="!shouldShowQuery" @click="displaySearchField">
        <i class="fas fa-search" :title="$root.strings.search_label"></i>
      </button>
      <input
        v-else
        type="search"
        v-model="$root.search.query"
        :placeholder="$root.strings.search_label"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { shouldShowQuery: window.innerWidth < 768 };
  },
  methods: {
    displaySearchField() {
      this.shouldShowQuery = true;
      this.$nextTick(() => {
        this.$el.querySelector("input").focus();
      });
    }
  }
};
</script>