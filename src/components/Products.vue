<template>
  <div> 
      <nav-bar
        :cart="cart"
        :cartQty="cartQty"
        :cartTotal="cartTotal"
        @toggle-slide="toggleSlider"
        @delete-item="deleteItem"
      ></nav-bar>
      <h1 class="mt-2">AGShop</h1>
      <price-slider
        :sliderStatus="sliderStatus"
        :maximum="maximum"
      ></price-slider>
      <product-list
        :maximum="maximum"
        :products="products"
        @add-item="addItem"
      ></product-list>   
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import PriceSlider from "./PriceSlider.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "products",
  props: [
    "products",
    "maximum",
    "cart",
    "cartQty",
    "cartTotal",
    "sliderStatus",
    "sliderstate",
  ],
  components: {
    ProductList,
    PriceSlider,
    NavBar,
  },
  methods: {
    toggleSlider: function(){
        this.@emit('toggle')
    },
    addItem: function (item) {
        this.@emit('add', item)
    },
    deleteItem: function (index){
        this.@emit('delete', index)
    }

  }
};
</script>
