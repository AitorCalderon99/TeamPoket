import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Detalle from "../views/Detalle.vue"
import NotFound from "../views/NotFound.vue"

var a = "(0|[1-9][0-9]?|898)";

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
    path: "/:id"+a,
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