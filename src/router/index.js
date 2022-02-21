import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Detalle from "../views/Detalle.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    name: "Detalle",
    component: Detalle,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;