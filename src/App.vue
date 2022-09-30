<template>
  <v-app id="app">
    <v-app-bar app>
      <router-link
        :to="$options.mainPageRoute"
        class="text-decoration-none"
      >
        <v-toolbar-title>
          Search repository app
        </v-toolbar-title>
      </router-link>
    </v-app-bar>
    <v-main class="grey lighten-2">
      <AlertComponent />
      <v-container class="col-8">
        <router-view />
      </v-container>
    </v-main>
    <VueLoader />
  </v-app>
</template>

<script>
import AlertComponent from "@/components/AlertComponent";
import VueLoader from "@/components/MainLoader";
import { ROUTERS } from "@/utils/constants";

export default {
  name: 'App',
  mainPageRoute: ROUTERS.MAIN.path,
  components: { VueLoader, AlertComponent },
};
</script>
