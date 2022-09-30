<template>
  <v-text-field
    v-model="search"
    label="Search repository"
    hide-details
    placeholder="Input repository name..."
    outlined
    solo
    background-color="white"
    @input="onSearch"
  />
</template>

<script>

import { debounce } from "@/utils/debounce";

export default {
  name: "SearchBar",
  data() {
    return {
      search: '',
    };
  },
  methods: {
    onSearch() {
      debounce(() => this.$emit('onSearch', this.search));
    },
  },
};
</script>