<template>
  <div>
    <h1>Checkout</h1>
    <table class="table table-hover">
      <caption class="text-e h3">
        <b>Total:</b>
        <price
          class="d-block text-success font-weight-light"
          :value="Number(cartTotal)"
        ></price>
      </caption>
      <thead>
        <tr>
          <td scope="col"></td>
          <td scope="col">Item</td>
          <td scope="col" class="text-center">Qty</td>
          <td scope="col" class="text-end">price</td>
          <td scope="col" class="text-start">Sub-total</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="item.product.id">
          <td class="center">
            <div class="btn-group">
              <button @click="$emit('add', item.product)" class="btn btn-info">
                +
              </button>
              <button
                @click="$emit('delete', index)"
                class="btn btn-outline-info"
              >
                -
              </button>
            </div>
          </td>
          <th scope="row">{{ item.product.name }}</th>
          <th class="text-center">{{ item.qty }}</th>
          <th class="text-end">{{ Number(item.product.price) }}</th>
          <th class="text-start">
            {{ Number(item.product.price * item.qty) }}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Price from "./PriceList.vue";

export default {
  name: "checkOut",
  props: ["cart", "cartTotal"],
  components: {
    Price,
  },
};
</script>
