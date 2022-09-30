import Vue from 'vue';
import App from './App.vue';
import router from "@/plugins/router";
import store from "@/services/store";
import vuetify from "@/plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(router);

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
