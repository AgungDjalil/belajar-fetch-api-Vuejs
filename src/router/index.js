import { createRouter, createWebHistory } from "vue-router";
import ProDucts from "../components/Products.vue";
import Checkout from "../components/Checkout.vue";

const routes = [
  {
    path: "/",
    component: ProDucts,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
