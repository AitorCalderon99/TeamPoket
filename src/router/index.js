import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Detalle from "../views/Detalle.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id(\\d{0,3})",
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