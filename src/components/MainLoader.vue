<template>
  <div
    v-if="isLoading"
    class="loader"
  >
    <img :src="$options.LoaderIcon" class="ma-auto" alt="loader"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LoaderIcon from '../assets/images/loader.svg';

export default {
  name: "MainLoader",
  LoaderIcon,
  computed: {
    ...mapGetters({
      isLoading: "GET_LOADING",
    }),
  },
};
</script>

<style scoped>
.loader {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>