import Vue from 'vue';
import VueRouter from 'vue-router';
import ListPage from "@/view/RepositoryList";
import RepositoryInfo from "@/view/RepositoryInfo";
import { ROUTERS } from "@/utils/constants";

Vue.use(VueRouter);

const { MAIN, INFO } = ROUTERS

const routes = [
  {
    path: MAIN.path,
    name: MAIN.name,
    component: ListPage
  },
  {
    path: INFO.path,
    name: INFO.name,
    component: RepositoryInfo
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

// todo: прописать алиасы для папок в срц js config