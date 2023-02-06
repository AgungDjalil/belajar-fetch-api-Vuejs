<template>
  <nav class="navbar navbar-light fixed-top">
    <div class="navbar-text ms-auto d-flex">
      <div class="me-2">
        <button class="btn btn-sm btn-outline-success" @click="$emit('toggle')">
          <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
        </button>
      </div>
      <div class="dropdown me-3" v-if="cart.length > 0">
        <button
          class="btn btn-success btn-sm dropdown-toggle"
          id="dropdownCart"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="badge badge-pill badge-light">{{ cartQty }}</span>
          <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
          <price :value="Number(cartTotal)"></price>
        </button>
        <div
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdownCart"
        >
          <div v-for="(item, index) in cart" :key="index">
            <div class="text-nowrap ms-2">
              <span class="badge text-bg-warning">
                {{ item.qty }}
              </span>
              {{ item.product.name }}
              <price
                :value="
                  item.qty * item.product.price +
                  'Rp' +
                  Number.parseFloat(total).toFixed(2)
                "
              ></price>
              <a
                href="#"
                class="badge text-bg-danger text-white"
                @click.stop="$emit('delete', index)"
                >-</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Price from "./PriceList.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "NavBar",
  props: ["cart", "cartQty", "cartTotal"],
  components: {
    Price,
    FontAwesomeIcon,
  },
};
</script>
