<template>
  <v-alert
    v-if="getError.isError"
    border="left"
    dismissible
    type="error"
    @toggle="resetError"
    max-width="400px"
    class="alert"
  >
    {{ getError.message }}
  </v-alert>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "AlertComponent",
  computed: {
    ...mapGetters({
      getError: "GET_ERROR",
    }),
  },
  methods: {
    ...mapMutations({
      resetError: "RESET_ERROR",
    }),
  },
};
</script>

<style scoped>
.alert{
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 90;
}
</style>