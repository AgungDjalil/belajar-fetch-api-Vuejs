import { createApp } from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Products from "./components/Products.vue";
import Checkout from "./components/Checkout.vue";

library.add(faShoppingCart, faDollarSign);

const routes = new VueRouter({
  router: [
    {
      path: "*",
      components: Products,
    },
    {
      path: "/checkOut",
      components: Checkout,
    },
  ],
});

createApp(App).use(routes).mount("#app");
